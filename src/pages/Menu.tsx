import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/contexts/CartContext";
import { menuItems } from "@/data/menuData";
import { MenuItem } from "@/types/menu";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("hot");
  const { addItem, items, setIsCartOpen } = useCart();
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const handleAddToCart = (item: MenuItem) => {
    addItem(item);
    setAddedItems((prev) => ({ ...prev, [item.name]: true }));
    
    // Reset the "added" state after animation
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.name]: false }));
    }, 1500);
  };

  const getItemQuantity = (itemName: string) => {
    const cartItem = items.find((i) => i.name === itemName);
    return cartItem?.quantity || 0;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-20">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From bold espressos to refreshing cold brews, discover the perfect drink for every moment.
          </p>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="hot" className="w-full" onValueChange={setActiveTab}>
            <motion.div 
              className="flex justify-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TabsList className="grid w-full max-w-md grid-cols-3 bg-secondary">
                <TabsTrigger 
                  value="hot" 
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground transition-all duration-300"
                >
                  Hot Beverages
                </TabsTrigger>
                <TabsTrigger 
                  value="cold" 
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground transition-all duration-300"
                >
                  Cold Beverages
                </TabsTrigger>
                <TabsTrigger 
                  value="snacks" 
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground transition-all duration-300"
                >
                  Snacks
                </TabsTrigger>
              </TabsList>
            </motion.div>

            <AnimatePresence mode="wait">
              {Object.entries(menuItems).map(([category, categoryItems]) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {categoryItems.map((item) => {
                      const quantity = getItemQuantity(item.name);
                      const isAdded = addedItems[item.name];

                      return (
                        <motion.div
                          key={item.name}
                          variants={fadeInUp}
                          transition={{ duration: 0.4 }}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                          <Card className="overflow-hidden border-border hover:shadow-xl transition-shadow duration-300 group h-full">
                            <div className="flex flex-col sm:flex-row">
                              <div className="sm:w-1/3 aspect-square sm:aspect-auto overflow-hidden">
                                <motion.img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.4 }}
                                />
                              </div>
                              <CardContent className="flex-1 p-4 flex flex-col justify-between">
                                <div>
                                  <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-lg text-foreground">{item.name}</h3>
                                    <motion.span 
                                      className="text-accent font-bold text-lg"
                                      whileHover={{ scale: 1.1 }}
                                    >
                                      {item.price}
                                    </motion.span>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button
                                    size="sm"
                                    className={`flex-1 transition-all duration-300 ${
                                      isAdded 
                                        ? "bg-green-600 hover:bg-green-600" 
                                        : "bg-accent hover:bg-accent/90"
                                    } text-accent-foreground`}
                                    onClick={() => handleAddToCart(item)}
                                  >
                                    <AnimatePresence mode="wait">
                                      {isAdded ? (
                                        <motion.span
                                          key="added"
                                          initial={{ opacity: 0, scale: 0.5 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          exit={{ opacity: 0, scale: 0.5 }}
                                          className="flex items-center gap-1"
                                        >
                                          <Check className="h-4 w-4" />
                                          Added!
                                        </motion.span>
                                      ) : (
                                        <motion.span
                                          key="add"
                                          initial={{ opacity: 0, scale: 0.5 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          exit={{ opacity: 0, scale: 0.5 }}
                                          className="flex items-center gap-1"
                                        >
                                          <Plus className="h-4 w-4" />
                                          Add to Cart
                                        </motion.span>
                                      )}
                                    </AnimatePresence>
                                  </Button>
                                  {quantity > 0 && (
                                    <motion.span
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="bg-secondary text-foreground text-sm font-medium px-2 py-1 rounded"
                                    >
                                      ×{quantity}
                                    </motion.span>
                                  )}
                                </div>
                              </CardContent>
                            </div>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* Note Section */}
      <motion.section 
        className="py-12 bg-cream"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            * All prices are inclusive of taxes. Menu items are subject to availability.
          </p>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Menu;
