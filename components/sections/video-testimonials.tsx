"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Star,
  Quote,
  Youtube,
  Play,
  ArrowRight,
  ExternalLink,
} from "lucide-react"
import { businessInfo } from "@/lib/business-info"

type Tab = "reviews" | "videos"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Lost 15 kg in 6 months",
    location: "Pune, India",
    content:
      "The personalized approach at Charming Aura Wellness changed my life. The diet plan was easy to follow and the results were amazing. I feel more energetic and confident than ever!",
    rating: 5,
    tag: "Weight Loss",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    name: "Rahul Mehta",
    role: "Diabetes Management",
    location: "Pimpri-Chinchwad",
    content:
      "After years of inconsistent eating habits, the wellness coaching here helped me build a routine that finally works. I feel more energetic than I have in years!",
    rating: 5,
    tag: "Diabetes",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    name: "Ananya Patel",
    role: "Weight Management",
    location: "Online — Mumbai",
    content:
      "What I love most is that this is not a crash diet — it is a sustainable lifestyle change. The team understands that everyone is different and creates plans accordingly.",
    rating: 5,
    tag: "Lifestyle",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    name: "Vikram Singh",
    role: "Athletic Performance",
    location: "Online — US",
    content:
      "As an athlete, I needed specific nutrition guidance. The team created a perfect plan that improved my performance and recovery time significantly.",
    rating: 5,
    tag: "Sports Nutrition",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    name: "Sneha Kulkarni",
    role: "PCOD Management",
    location: "Thergaon, Pune",
    content:
      "I had tried many diets before but nothing worked long-term. The holistic approach here — combining nutrition, exercise, and lifestyle coaching — finally gave me lasting results.",
    rating: 5,
    tag: "PCOD",
    tagColor: "bg-pink-100 text-pink-700",
  },
  {
    name: "James Patel",
    role: "Weight Gain Program",
    location: "Online — Europe",
    content:
      "I struggled to gain healthy weight for years. The team designed a precise nutrition and exercise plan for me. In 3 months I gained 8 kg of lean muscle — remarkable!",
    rating: 5,
    tag: "Weight Gain",
    tagColor: "bg-amber-100 text-amber-700",
  },
]

// Replace these with real video IDs from youtube.com/@CharmingAuraWellness_Nutrition
const videos = [
  {
    id: "placeholder-1",
    title: "Client Transformation Story — 15 kg Weight Loss in 6 Months",
    description: "Watch how Priya transformed her health with our personalized nutrition and wellness coaching program.",
    thumbnail: "/images/happy-client.jpg",
    duration: "4:32",
  },
  {
    id: "placeholder-2",
    title: "What Happens in a Free Consultation?",
    description: "A walkthrough of our free first consultation — what we assess, what we discuss, and how we build your plan.",
    thumbnail: "/images/nutritionist.jpg",
    duration: "6:15",
  },
  {
    id: "placeholder-3",
    title: "The 80/20 Rule — Why Nutrition Matters More Than Exercise",
    description: "Our lead coach explains the science behind the 80/20 approach and why it works for both weight loss and gain.",
    thumbnail: "/images/wellness-coaching.jpg",
    duration: "8:47",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function VideoTestimonialsSection() {
  const [activeTab, setActiveTab] = useState<Tab>("reviews")

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Real Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Transformations That{" "}
            <span className="text-primary">Speak for Themselves</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hear from clients who've transformed their health — through written reviews and video stories from our YouTube channel.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center bg-card border border-border/60 rounded-2xl p-1.5 shadow-sm gap-1">
            <button
              onClick={() => setActiveTab("reviews")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === "reviews"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Star className="w-4 h-4" />
              Written Reviews
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === "videos"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Youtube className="w-4 h-4" />
              Video Stories
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "reviews" && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {testimonials.map((t) => (
                  <motion.div key={t.name} variants={itemVariants}>
                    <Card className="h-full bg-card border-border/50 hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-7 flex flex-col gap-4 h-full">
                        {/* Top row: quote + tag */}
                        <div className="flex items-start justify-between">
                          <Quote className="w-8 h-8 text-primary/20" />
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${t.tagColor}`}>
                            {t.tag}
                          </span>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-0.5">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                          ))}
                        </div>

                        {/* Review */}
                        <p className="text-foreground/80 leading-relaxed text-sm flex-1">
                          &quot;{t.content}&quot;
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <span className="text-base font-bold text-primary">
                              {t.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-foreground text-sm">{t.name}</p>
                            <p className="text-xs text-muted-foreground">{t.role} · {t.location}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {activeTab === "videos" && (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              {/* YouTube Channel Banner */}
              <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Youtube className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg leading-tight">@CharmingAuraWellness_Nutrition</p>
                    <p className="text-white/80 text-sm">Wellness tips, client stories & coaching insights</p>
                  </div>
                </div>
                <Button asChild className="bg-white text-red-600 hover:bg-white/90 font-semibold shrink-0">
                  <Link href={businessInfo.social.youtube} target="_blank" rel="noopener noreferrer">
                    <Youtube className="mr-2 w-4 h-4" />
                    Subscribe
                    <ExternalLink className="ml-2 w-3.5 h-3.5" />
                  </Link>
                </Button>
              </div>

              {/* Video Cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-3 gap-6 mb-8"
              >
                {videos.map((video) => (
                  <motion.div key={video.id} variants={itemVariants}>
                    <Link
                      href={businessInfo.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50">
                        {/* Thumbnail */}
                        <div
                          className="relative h-48 bg-cover bg-center overflow-hidden"
                          style={{ backgroundImage: `url(${video.thumbnail})` }}
                        >
                          {/* Dark overlay */}
                          <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/20 transition-colors duration-300" />

                          {/* Play button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/90 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-xl">
                              <Play className="w-7 h-7 text-primary fill-primary ml-1" />
                            </div>
                          </div>

                          {/* Duration badge */}
                          <span className="absolute bottom-3 right-3 bg-foreground/80 text-background text-xs font-medium px-2 py-0.5 rounded">
                            {video.duration}
                          </span>

                          {/* YouTube logo */}
                          <div className="absolute top-3 right-3">
                            <Youtube className="w-6 h-6 text-red-500 drop-shadow" />
                          </div>
                        </div>

                        <CardContent className="p-5">
                          <h3 className="font-semibold text-foreground text-sm leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {video.title}
                          </h3>
                          <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                            {video.description}
                          </p>
                          <div className="mt-3 flex items-center gap-1 text-primary text-xs font-medium">
                            <span>Watch on YouTube</span>
                            <ExternalLink className="w-3 h-3" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <p className="text-center text-xs text-muted-foreground">
                More videos available on our YouTube channel —{" "}
                <Link href={businessInfo.social.youtube} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  @CharmingAuraWellness_Nutrition
                </Link>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to write your own success story?
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
            <Link href="/contact">
              Start Your Transformation — FREE
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
