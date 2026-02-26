import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Coffee Street, Downtown", "City Center, 10001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 12345 67890"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@cafeengine.com", "orders@cafeengine.com"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Mon-Fri: 7:00 AM - 10:00 PM", "Sat-Sun: 8:00 AM - 11:00 PM"],
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

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (no backend yet)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
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
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a question, feedback, or want to place a bulk order? We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div 
                  className="grid sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="transition-all duration-300 focus:scale-[1.01]"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        Sending...
                      </motion.span>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <motion.div 
                className="grid sm:grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    variants={fadeInUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Card className="border-border h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <motion.div 
                            className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <info.icon className="h-5 w-5 text-accent" />
                          </motion.div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-sm text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* Map Placeholder */}
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="font-semibold text-foreground mb-4">Find Us Here</h3>
                <motion.div 
                  className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center text-muted-foreground">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                    >
                      <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    </motion.div>
                    <p>Interactive Map</p>
                    <p className="text-sm">(Coming Soon)</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-12 bg-cream"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground font-medium">
            Can't wait? Call us directly at{" "}
            <motion.a 
              href="tel:+919876543210" 
              className="text-accent hover:underline"
              whileHover={{ scale: 1.05 }}
            >
              +91 98765 43210
            </motion.a>
          </p>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Contact;
