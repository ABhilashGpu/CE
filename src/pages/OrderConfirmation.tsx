import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Coffee, Home, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";

interface OrderItem {
  id: string;
  item_name: string;
  item_category: string;
  quantity: number;
  unit_price: number;
  subtotal: number;
}

interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  order_type: string;
  status: string;
  total_amount: number;
  special_instructions: string | null;
  created_at: string;
}

const OrderConfirmation = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order | null>(null);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) return;

      try {
        const { data: orderData, error: orderError } = await supabase
          .from("orders")
          .select("*")
          .eq("id", orderId)
          .maybeSingle();

        if (orderError) throw orderError;
        if (!orderData) {
          navigate("/");
          return;
        }

        setOrder(orderData);

        const { data: itemsData, error: itemsError } = await supabase
          .from("order_items")
          .select("*")
          .eq("order_id", orderId);

        if (itemsError) throw itemsError;
        setOrderItems(itemsData || []);
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId, navigate]);

  if (loading) {
    return (
      <Layout>
        <section className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <Coffee className="h-12 w-12 animate-spin text-accent mx-auto mb-4" />
            <p className="text-muted-foreground">Loading your order...</p>
          </div>
        </section>
      </Layout>
    );
  }

  if (!order) {
    return (
      <Layout>
        <section className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Order not found</h2>
            <Button onClick={() => navigate("/")}>Go Home</Button>
          </div>
        </section>
      </Layout>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <Layout>
      {/* Success Header */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
            >
              <CheckCircle className="h-12 w-12 text-green-600" />
            </motion.div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Order Confirmed!
            </h1>
            <p className="text-muted-foreground text-lg">
              Thank you for your order, {order.customer_name}!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Order Details */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Order Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Order #{order.id.slice(0, 8).toUpperCase()}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-normal bg-accent/20 text-accent px-3 py-1 rounded-full">
                      <Clock className="h-4 w-4" />
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Order Date</p>
                      <p className="font-medium">{formatDate(order.created_at)}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Coffee className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Order Type</p>
                      <p className="font-medium capitalize">{order.order_type}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{order.customer_email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">{order.customer_phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Order Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Order Items</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {orderItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center py-2 border-b last:border-0"
                    >
                      <div>
                        <p className="font-medium">{item.item_name}</p>
                        <p className="text-sm text-muted-foreground">
                          ₹{item.unit_price} × {item.quantity}
                        </p>
                      </div>
                      <p className="font-semibold">₹{item.subtotal}</p>
                    </div>
                  ))}
                  <div className="pt-4 flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span className="text-accent">₹{order.total_amount}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Special Instructions */}
            {order.special_instructions && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Special Instructions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{order.special_instructions}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Button asChild variant="outline" size="lg">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/menu">
                  <Coffee className="h-4 w-4 mr-2" />
                  Order More
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OrderConfirmation;
