import { Coffee, Users, Target, Sparkles, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on the quality of our coffee beans, ingredients, or service.",
  },
  {
    icon: Heart,
    title: "Customer Love",
    description: "Every cup is crafted with care, every customer treated like family.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Constantly evolving our menu and space to exceed expectations.",
  },
];

const targetAudience = [
  "College Students seeking a study-friendly environment",
  "Working Professionals needing quality coffee on-the-go",
  "Freelancers looking for a productive workspace",
  "Coffee Enthusiasts who appreciate quality brews",
  "Friends & Families wanting a cozy hangout spot",
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

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              About CafeEngine
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              More than just a coffee shop — we're a lifestyle destination where quality, comfort, and efficiency come together to create the perfect coffee experience.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  CafeEngine was born from a simple belief: everyone deserves access to premium coffee without the premium price. We saw a gap in the market — cafés that either served great coffee at high prices or affordable coffee that compromised on quality.
                </p>
                <p>
                  We set out to change that. By carefully sourcing our beans, training our baristas, and creating an efficient yet warm environment, we've built a café that delivers on all fronts.
                </p>
                <p>
                  Today, CafeEngine is more than a coffee shop. It's a community hub where students study, professionals work, and friends gather — all while enjoying exceptional coffee that doesn't break the bank.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=500&fit=crop"
                alt="CafeEngine Interior"
                className="rounded-lg shadow-xl w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="font-display text-2xl font-bold">Est. 2024</p>
                <p className="text-sm opacity-90">Serving Quality Since Day One</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="text-center md:text-left"
              variants={fadeInUp}
            >
              <motion.div 
                className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-6 mx-auto md:mx-0"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Target className="h-7 w-7" />
              </motion.div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                To become the go-to lifestyle café that redefines the coffee experience — where quality meets affordability, and every visit feels like coming home.
              </p>
            </motion.div>
            <motion.div 
              className="text-center md:text-left"
              variants={fadeInUp}
            >
              <motion.div 
                className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-6 mx-auto md:mx-0"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Coffee className="h-7 w-7" />
              </motion.div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                To serve premium coffee in a comfortable, modern environment while maintaining affordable prices. We aim to be a productive space for work and study, and a relaxing retreat for coffee lovers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at CafeEngine.
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="text-center p-6 border-border h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <value.icon className="h-8 w-8 text-accent" />
                    </motion.div>
                    <h3 className="font-semibold text-xl text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 md:py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=500&fit=crop"
                alt="People enjoying coffee"
                className="rounded-lg shadow-xl w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Users className="h-8 w-8 text-accent" />
                </motion.div>
                <h2 className="font-display text-3xl font-bold text-foreground">
                  Who We Serve
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                CafeEngine is designed for everyone who values quality coffee and a great environment. Our diverse community includes:
              </p>
              <motion.ul 
                className="space-y-3"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {targetAudience.map((audience, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-3"
                    variants={fadeInUp}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-accent flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-foreground">{audience}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
