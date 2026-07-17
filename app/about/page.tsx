"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Users,
  Clock,
  Target,
  Heart,
  Sparkles,
  Leaf,
} from "lucide-react";
import { CTASection } from "@/components/sections/cta";
import { TeamCredentialsSection } from "@/components/sections/team-credentials";
import { businessInfo } from "@/lib/business-info";

const stats = [
  {
    value: businessInfo.transformedClients,
    label: "Transformed Lives",
    icon: Users,
  },
  { value: "15+", label: "Years Excellence", icon: Award },
  { value: "95%", label: "Satisfaction Rate", icon: Target },
  { value: "100%", label: "Personalized", icon: Clock },
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We care deeply about your well-being and treat every client with empathy and understanding.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description:
      "We strive for the highest standards in nutrition science and wellness coaching.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We focus on lasting lifestyle changes, not quick fixes that don&apos;t stand the test of time.",
  },
];

const team = [
  {
    name: "Dr. Priya Sharma",
    role: "Lead Nutritionist",
    image: "/images/poonam-yadav.jpg",
    bio: "With over 10 years of experience in clinical nutrition, Dr. Sharma specializes in personalized diet plans and metabolic health.",
  },
  {
    name: "Rahul Verma",
    role: "Wellness Coach",
    image: "/images/manoj-yadav.jpg",
    bio: "A certified wellness coach with expertise in lifestyle modification and holistic health approaches.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              About Charming Aura
              <br />
              <span className="text-primary">
                Certified Dietitians in Thergaon
              </span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Welcome to Charming Aura Wellness, a leading diet and nutrition
              clinic in Thergaon, PCMC. We specialize in personalized diet
              plans, weight management, PCOD care, diabetes nutrition, thyroid
              management, and holistic wellness. Since 2009, our mission has
              been to empower individuals with practical, science-backed
              nutrition solutions for a healthier and happier life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mission.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                15+ Years of Personalized Nutrition Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                What began as a passion for promoting healthy living has grown
                into a trusted wellness destination in Thergaon. At Charming
                Aura Wellness, we believe every individual deserves a nutrition
                plan tailored to their unique lifestyle, health conditions, and
                wellness goals, ensuring lasting results rather than temporary
                solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From the very beginning, our goal has been to provide
                personalized nutrition solutions that are practical,
                sustainable, and tailored to every individual's lifestyle. We
                believe that no two people are alike, which is why every diet
                plan is carefully designed to meet unique health goals and
                medical requirements.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Today, Charming Aura Wellness is a trusted diet and nutrition
                clinic serving Thergaon, Pimpri-Chinchwad, and nearby areas. Our
                experienced nutrition experts specialize in weight management,
                PCOD, thyroid care, diabetes management, gut health, sports
                nutrition, and holistic wellness, helping clients achieve
                healthier and happier lives through evidence-based nutrition
                guidance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-4xl font-bold text-primary-foreground">
                  {stat.value}
                </span>
                <p className="text-primary-foreground/70 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-secondary/30 border-none">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower individuals to achieve their optimal health
                    through personalized nutrition plans, evidence-based
                    wellness coaching, and sustainable lifestyle modifications
                    that create lasting positive change.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full bg-secondary/30 border-none">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Sparkles className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading wellness center that transforms lives
                    through holistic health solutions, making personalized
                    nutrition accessible to everyone and creating a healthier,
                    happier community.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              What We Stand For
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="text-center p-8 rounded-2xl bg-card border border-border/50"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Meet Our Experts
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our dedicated team combines scientific nutrition knowledge with
              compassionate care to create personalized wellness plans that
              empower every individual to live a healthier, happier, and more
              balanced life.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {team.map((member) => (
              <motion.div key={member.name} variants={itemVariants}>
                <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative h-80">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-3">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <TeamCredentialsSection />
      <CTASection />

      {/* <CTASection /> */}
    </>
  );
}
