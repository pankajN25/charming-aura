import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock } from 'lucide-react'
import { ArticleSchema } from '@/components/schema-markup'

export const metadata: Metadata = {
  title: 'The 21-Day Wellness Challenge: Complete Guide | Charming Aura Wellness',
  description: 'Everything you need to know about our 21-Day Wellness Challenge — daily structure, detox protocol, liquid day guide, and what results to expect.',
  keywords: '21 day wellness challenge, detox program India, wellness challenge diet, 21 day nutrition challenge, healthy detox plan',
}

export default function BlogArticlePage() {
  return (
    <>
      <ArticleSchema
        title="The 21-Day Wellness Challenge: Complete Guide"
        description="Everything you need to know about our 21-Day Wellness Challenge."
        image="https://charmingaurawellness.com/images/wellness-coaching.jpg"
        datePublished="2024-06-01"
        dateModified="2024-06-01"
      />

      <article className="bg-foreground text-background py-12 md:py-16 pt-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">21-Day Program</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            The 21-Day Wellness Challenge: Your Complete Guide
          </h1>
          <div className="flex flex-wrap gap-6 text-background/70">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>June 1, 2024</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Charming Aura Team</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 min read</span></div>
          </div>
        </div>
      </article>

      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
            <Image src="/images/wellness-coaching.jpg" alt="21-Day Wellness Challenge" fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">What Is the 21-Day Wellness Challenge?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The 21-Day Wellness Challenge is our signature structured program designed to reset your metabolism, cleanse your digestive system, and build healthy habits that last a lifetime — all in just three weeks. It combines personalised nutrition, gentle detox protocols, daily coaching, and habit-building frameworks proven to create lasting change.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Research shows it takes approximately 21 days to form a new habit. We've built our entire challenge around this science — making each of the three weeks progressively deeper in terms of nutrition quality, lifestyle refinement, and mindset shift.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Week-by-Week Structure</h2>

            <h3 className="font-serif text-2xl font-bold mt-6 mb-4">Week 1 — Reset & Foundation (Days 1–7)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">The first week is about removing the noise — processed foods, refined sugar, excess sodium, and inflammatory ingredients. You're not starving; you're replacing.</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Comprehensive health assessment and baseline measurements</li>
              <li>Personalised meal plan: whole foods, lean proteins, abundant vegetables</li>
              <li>Daily Zoom coaching sessions to address questions and keep you accountable</li>
              <li>Hydration protocol: 2.5–3 litres of water daily</li>
              <li>Introduction of 1–2 herbal teas targeting your specific goals</li>
            </ul>

            <h3 className="font-serif text-2xl font-bold mt-6 mb-4">Week 2 — Detox & Deep Clean (Days 8–14)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">Week two introduces the gentle detox protocol — the most transformative phase. This includes a structured liquid day designed to rest the digestive system and accelerate cleansing.</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li><strong>The Liquid Day:</strong> One designated day of nourishing liquids — fresh juices, herbal broths, smoothies, and coconut water. Hunger-free, coach-guided.</li>
              <li>Anti-inflammatory foods introduced: turmeric, ginger, amla, moringa</li>
              <li>Gut-reset foods: probiotics, fermented foods, fibre-rich vegetables</li>
              <li>Sleep and stress reduction protocols introduced</li>
              <li>Movement plan added: 20–30 minutes of guided daily activity</li>
            </ul>

            <h3 className="font-serif text-2xl font-bold mt-6 mb-4">Week 3 — Optimise & Anchor (Days 15–21)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">The final week consolidates everything you've learned and built. Focus shifts to making these habits automatic.</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Meal prepping strategies for sustainability beyond the challenge</li>
              <li>Mindful eating practice and hunger cue awareness</li>
              <li>Personalised nutrition tweaks based on your Week 1 & 2 results</li>
              <li>30-day continuation plan handed over at the end of Day 21</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">What Results Can You Expect?</h2>
            <div className="bg-muted/30 border border-border rounded-lg p-6 my-6">
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>By Day 7:</strong> Reduced bloating, improved energy, fewer cravings</li>
                <li><strong>By Day 14:</strong> 2–4 kg weight change (loss or gain depending on goal), noticeably better skin, improved sleep</li>
                <li><strong>By Day 21:</strong> Metabolism reset, healthy habits forming, measurable improvements in digestion, energy, and body composition</li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Who Is This Challenge For?</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Anyone who wants to break free from unhealthy eating patterns</li>
              <li>People struggling with bloating, low energy, or sluggish metabolism</li>
              <li>Those who've tried generic diets that didn't stick</li>
              <li>Anyone wanting a structured, coach-supported jumpstart to their wellness journey</li>
            </ul>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 text-center">
              <p className="text-foreground font-semibold mb-2 text-lg">Ready to start your 21-Day transformation?</p>
              <p className="text-muted-foreground mb-6">Your first consultation is completely FREE. We'll assess your goals and enrol you into the next challenge batch.</p>
              <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Book FREE Consultation to Enrol
              </Link>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Key Takeaways</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>The 21-Day Challenge is a structured, coach-guided nutrition and lifestyle reset</li>
              <li>Three progressive weeks: Reset → Detox → Optimise</li>
              <li>Includes a gentle liquid day in Week 2 for deep digestive cleansing</li>
              <li>Daily Zoom coaching sessions keep you supported at every step</li>
              <li>Results are measurable within the first week for most participants</li>
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Start Your 21-Day Journey</h3>
            <p className="text-muted-foreground mb-6">Join hundreds of clients who've reset their health with our 21-Day Wellness Challenge. Your first consultation is FREE.</p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Book FREE Consultation
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
