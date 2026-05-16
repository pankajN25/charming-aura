'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookingWidget } from '@/components/booking-widget'
import { CTASection } from '@/components/sections/cta'
import { Clock, User, Calendar } from 'lucide-react'

export default function PCODNutritionBlog() {
  return (
    <>
      <article className="max-w-4xl mx-auto py-12 px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Nutrition & Health
          </Badge>
          <h1 className="font-serif text-5xl font-bold text-foreground mb-4 text-balance">
            The Complete PCOD Nutrition Guide: Foods to Eat & Avoid
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            A science-backed guide to managing PCOD symptoms through strategic nutrition. Learn what to eat, what to avoid, and why it matters for hormonal balance.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-t border-b border-border/50 py-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>By Nutrition Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none text-foreground"
        >
          <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">
            Understanding PCOD and Nutrition
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            PCOD (Polycystic Ovarian Disease) affects 10-20% of women in India. While it's primarily a hormonal condition, nutrition plays a crucial role in managing symptoms. About 70% of women with PCOD have insulin resistance, which makes food choices particularly important.
          </p>

          <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">
            Foods That Support PCOD Management
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Focusing on anti-inflammatory, low-glycemic foods helps regulate insulin levels and reduce PCOD symptoms:
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            1. High-Fiber Vegetables
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Leafy greens (spinach, kale), cruciferous vegetables (broccoli, cauliflower), and bell peppers help stabilize blood sugar. Aim for 25-30g of fiber daily.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            2. Quality Proteins
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Include eggs, fish, chicken, lentils, and legumes. Protein helps reduce cravings and supports hormonal balance. Include protein with every meal.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            3. Healthy Fats
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Avocados, nuts, seeds, and olive oil reduce inflammation. Omega-3 fatty acids from fish are especially beneficial for hormonal health.
          </p>

          <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">
            Foods to Minimize or Avoid
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            These foods can spike insulin levels and worsen PCOD symptoms:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
            <li>Refined carbohydrates (white bread, pasta, pastries)</li>
            <li>Sugar and sugary drinks</li>
            <li>Processed foods and trans fats</li>
            <li>Excessive caffeine (can increase cortisol)</li>
            <li>Alcohol (impacts hormone metabolism)</li>
          </ul>

          <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">
            Sample PCOD-Friendly Daily Meal Plan
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Here's a practical example of what a day of PCOD-conscious eating might look like:
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            Breakfast
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            3-egg vegetable omelet with spinach, mushrooms, and whole wheat toast. This provides protein and fiber to start your day stable.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            Mid-Morning Snack
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Handful of almonds and an apple. The protein and healthy fats prevent blood sugar spikes.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            Lunch
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Grilled chicken breast with quinoa and roasted vegetables (broccoli, bell peppers, zucchini). Balanced macronutrients for stable afternoon energy.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            Evening Snack
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Greek yogurt with berries and a sprinkle of flaxseeds. Probiotics support gut health, which is linked to hormonal balance.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            Dinner
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Baked salmon with sweet potato and steamed broccoli. Omega-3s from salmon support anti-inflammatory response.
          </p>

          <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">
            Key Principles for PCOD Nutrition
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
            <li><strong>Low Glycemic Index:</strong> Choose foods that don't spike blood sugar</li>
            <li><strong>Adequate Protein:</strong> Aim for 25-30g per meal</li>
            <li><strong>Plenty of Fiber:</strong> Target 25-30g daily</li>
            <li><strong>Healthy Fats:</strong> Include nuts, seeds, and oils</li>
            <li><strong>Regular Meals:</strong> Never skip breakfast; eat every 3-4 hours</li>
            <li><strong>Hydration:</strong> 8-10 glasses of water daily</li>
            <li><strong>Limit Inflammation:</strong> Reduce processed foods and sugar</li>
          </ul>

          <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">
            Beyond Diet: The Complete PCOD Solution
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            While nutrition is crucial, managing PCOD effectively requires a holistic approach. Regular exercise, stress management, quality sleep, and targeted supplementation all play important roles. This is why working with a specialized nutritionist can accelerate your results.
          </p>

          <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">
            Ready to Take Control of Your PCOD?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Every person's PCOD is unique. What works for one woman may not work for another. Our specialized PCOD nutrition program customizes your meal plan based on your specific hormonal profile, lifestyle, and preferences.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 pt-8 border-t border-border/50"
        >
          <BookingWidget
            title="Get Your Personalized PCOD Plan"
            description="Schedule a free consultation to create your custom nutrition strategy"
          />
        </motion.div>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-8 border-t border-border/50"
        >
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
            Related Articles
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: '10 Foods That Balance Hormones Naturally', slug: '#' },
              { title: 'How Stress Impacts PCOD: A Guide to Management', slug: '#' },
            ].map((article, i) => (
              <a
                key={i}
                href={article.slug}
                className="p-4 border border-border/50 rounded-lg hover:border-primary transition-colors group"
              >
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </p>
                <p className="text-sm text-muted-foreground mt-2">Read more →</p>
              </a>
            ))}
          </div>
        </motion.div>
      </article>

      <CTASection />
    </>
  )
}
