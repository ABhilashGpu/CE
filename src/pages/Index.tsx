import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Heart, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const featuredProducts = [
  {
    name: "Espresso",
    description: "Bold and intense, pure coffee essence",
    price: "₹40",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=400&fit=crop",
  },
  {
    name: "Cappuccino",
    description: "Perfect balance of espresso, milk, and foam",
    price: "₹60",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop",
  },
  {
    name: "Latte",
    description: "Smooth and creamy, a coffee classic",
    price: "₹70",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop",
  },
  {
    name: "Cold Coffee",
    description: "Refreshing iced coffee for hot days",
    price: "₹80",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop",
  },
];

const benefits = [
  {
    icon: Coffee,
    title: "Premium Quality",
    description: "We source only the finest coffee beans from ethical farms worldwide.",
  },
  {
    icon: Heart,
    title: "Affordable Prices",
    description: "Enjoy premium coffee without the premium price tag.",
  },
  {
    icon: Sparkles,
    title: "Comfortable Space",
    description: "A cozy environment perfect for work, study, or relaxation.",
  },
  {
    icon: Clock,
    title: "Efficient Service",
    description: "Quick service without compromising on quality or care.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary to-background py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Blending Quality,<br />
              <span className="text-accent">Comfort & Efficiency</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Welcome to CafeEngine — your perfect coffee destination. Experience premium coffee in a comfortable, modern space designed for work, study, or simply unwinding.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105">
                Order Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" asChild className="transition-transform hover:scale-105">
                <Link to="/menu">View Menu</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Signature Drinks
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Crafted with passion, served with love. Discover our most popular creations.
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="group overflow-hidden border-border hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-foreground">{product.name}</h3>
                      <span className="text-accent font-bold">{product.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button variant="outline" size="lg" asChild className="transition-transform hover:scale-105">
              <Link to="/menu">
                View Full Menu
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why CafeEngine */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why CafeEngine?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just another coffee shop. We're a lifestyle destination.
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="text-center p-6 border-border bg-card hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-0">
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <benefit.icon className="h-7 w-7 text-accent" />
                    </motion.div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Perfect Cup?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Visit us today or order online for pickup. Your coffee journey starts here.
          </p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105">
              Order Online
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-transform hover:scale-105" asChild>
              <Link to="/contact">Find Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
