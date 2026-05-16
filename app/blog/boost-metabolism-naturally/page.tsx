'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { BookingWidget } from '@/components/booking-widget'
import { CTASection } from '@/components/sections/cta'
import { Clock, User, Calendar } from 'lucide-react'

export default function BoostMetabolismBlog() {
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
            Weight Loss & Metabolism
          </Badge>
          <h1 className="font-serif text-5xl font-bold text-foreground mb-4 text-balance">
            10 Science-Backed Ways to Boost Your Metabolism Naturally
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Your metabolism doesn't have to slow down with age. Discover practical, scientifically-proven strategies to increase your calorie burn and achieve sustainable weight loss.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-t border-b border-border/50 py-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>By Nutrition Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 20, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10 min read</span>
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
            What is Metabolism?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Metabolism is the sum of all chemical processes in your body that convert food into energy. A faster metabolism means you burn more calories at rest, making weight loss easier and more sustainable.
          </p>

          <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">
            10 Proven Ways to Boost Your Metabolism
          </h2>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            1. Start Your Day with Protein
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Protein has a higher thermic effect than carbs or fats, meaning your body burns more calories digesting it. Aim for 25-30g of protein at breakfast to kickstart your metabolism.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            2. Drink Plenty of Water
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Drinking 8-10 glasses of water daily can increase your metabolic rate by 30% for 30-40 minutes after drinking. Cold water is especially effective as your body works to warm it.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            3. Build Lean Muscle
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Muscle tissue burns more calories at rest than fat. Resistance training 3-4 times weekly can increase your resting metabolic rate by up to 7%.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            4. Sleep Better
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Poor sleep slows metabolism and increases hunger hormones. Aim for 7-9 hours of quality sleep nightly to optimize metabolic function.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            5. Manage Stress
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Chronic stress elevates cortisol, which slows metabolism and promotes fat storage. Practice yoga, meditation, or other stress-management techniques daily.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            6. Eat Spicy Foods
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Capsaicin in chili peppers temporarily increases metabolism. Adding spicy foods to your diet can boost calorie burn by up to 8%.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            7. Move More Throughout the Day
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            NEAT (Non-Exercise Activity Thermogenesis) accounts for 15-30% of daily calorie burn. Take stairs, walk while talking, and fidget intentionally.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            8. Don't Skip Meals
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Skipping meals slows metabolism. Regular, balanced meals keep your metabolic rate elevated throughout the day.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            9. Include Green Tea
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Green tea contains EGCG, a compound that increases fat oxidation. Drinking 2-3 cups daily can boost metabolism by 4-5%.
          </p>

          <h3 className="font-semibold text-xl mt-6 mb-3 text-foreground">
            10. Try Interval Training
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            HIIT (High-Intensity Interval Training) increases EPOC (excess post-exercise oxygen consumption), keeping your metabolism elevated for hours after exercise.
          </p>

          <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">
            The Personalized Approach Works Better
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            While these 10 strategies work, the most effective approach combines them in a way that matches your unique metabolism, lifestyle, and goals. This is where personalized nutrition planning makes all the difference.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Our clients who combine these metabolic-boosting strategies with a customized meal plan see an average of 12-18kg weight loss in 4 months—and keep it off because these aren't temporary diets, they're sustainable lifestyle changes.
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
            title="Get Your Personalized Metabolism Boost Plan"
            description="Free consultation to create your custom nutrition and exercise strategy"
          />
        </motion.div>
      </article>

      <CTASection />
    </>
  )
}
