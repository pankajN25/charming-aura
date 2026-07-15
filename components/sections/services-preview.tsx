"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Salad,
  Scale,
  Heart,
  Dumbbell,
  Leaf,
  Sparkles,
  Activity,
  Bike,
} from "lucide-react"

const coreServices = [
  {
    icon: Salad,
    title: "Personalised Diet Plans",
    description: "Custom nutrition plans tailored to your unique body type, lifestyle, and health goals for sustainable results.",
    image: "/images/diet-plan.jpg",
    href: "/services",
    color: "from-emerald-600/80",
  },
  {
    icon: Scale,
    title: "Weight Loss Program",
    description: "Lose weight naturally with balanced food, habit coaching, and expert follow-ups that fit your routine.",
    image: "/images/weight-management.jpg",
    href: "/services/weight-loss",
    color: "from-green-700/80",
  },
  {
    icon: Dumbbell,
    title: "Weight Gain Program",
    description: "Build healthy weight and strength with calorie-smart meals, protein planning, and lifestyle support.",
    image: "/images/diet-plan.jpg",
    href: "/services/weight-gain",
    color: "from-teal-700/80",
  },
  {
    icon: Heart,
    title: "Wellness Coaching",
    description: "Holistic guidance addressing mind, body, and spirit for complete transformation and lasting change.",
    image: "/images/wellness-coaching.jpg",
    href: "/services",
    color: "from-lime-700/80",
  },
]

const specialtyServices = [
  {
    icon: Leaf,
    title: "PCOD Management",
    description: "Hormone-balancing nutrition to reduce symptoms and regulate cycles naturally.",
    image: "/images/happy-client.jpg",
    href: "/services/pcod-management",
    tag: "Hormonal Health",
    color: "from-rose-700/80",
  },
  {
    icon: Sparkles,
    title: "Gut Health",
    description: "Heal bloating, IBS, and acid reflux with targeted gut-reset nutrition protocols.",
    image: "/images/wellness-coaching.jpg",
    href: "/services/gut-health",
    tag: "Digestive Wellness",
    color: "from-orange-700/80",
  },
  {
    icon: Activity,
    title: "Diabetes Nutrition",
    description: "Stabilise blood sugar, reduce HbA1c, and reclaim energy with evidence-based glycaemic management.",
    image: "/images/weight-management.jpg",
    href: "/services/diabetes-nutrition",
    tag: "Metabolic Health",
    color: "from-amber-700/80",
  },
  {
    icon: Bike,
    title: "Sports Nutrition",
    description: "Precision fuelling for athletes — improve performance, accelerate recovery, hit goals.",
    image: "/images/nutritionist.jpg",
    href: "/services/sports-nutrition",
    tag: "Athletic Performance",
    color: "from-cyan-700/80",
  },
]

function ServiceCard({
  service,
  tag,
}: {
  service: typeof coreServices[0] & { tag?: string; color: string }
  tag?: string
}) {
  return (
    <Link href={service.href} className="block group">
      <div className="rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${service.color} to-transparent`} />

          {/* Icon + tag */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <service.icon className="w-5 h-5 text-white" />
            </div>
            {tag && (
              <span className="text-xs text-white bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full font-medium">
                {tag}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-serif text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
          <div className="mt-3 flex items-center gap-1 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Learn more <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </Link>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function ServicesPreviewSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Services</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-5">
            Comprehensive Wellness Solutions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From weight management and daily coaching to specialised conditions — every plan is built uniquely for you.
          </p>
        </motion.div>

        {/* Core Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4"
        >
          {coreServices.map((s) => (
            <motion.div key={s.title} variants={itemVariants}>
              <ServiceCard service={s} />
            </motion.div>
          ))}
        </motion.div>

        {/* Specialty divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 my-6"
        >
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground bg-card border border-border px-4 py-1.5 rounded-full">
            Specialised Conditions
          </span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Specialty Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {specialtyServices.map((s) => (
            <motion.div key={s.title} variants={itemVariants}>
              <ServiceCard service={s} tag={s.tag} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-all font-semibold group"
          >
            View All 8 Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
