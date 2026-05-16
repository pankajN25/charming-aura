import { Metadata } from 'next'
import Image from 'next/image'
import { Calendar, User, Clock } from 'lucide-react'
import { ArticleSchema } from '@/components/schema-markup'

export const metadata: Metadata = {
  title: 'Complete Guide to Weight Loss Without Crash Diets | Charming Aura Wellness',
  description:
    'Learn evidence-based strategies for sustainable weight loss. Avoid crash diets and yo-yo weight cycling with science-backed nutrition principles from certified experts.',
  keywords:
    'sustainable weight loss, healthy weight loss, nutrition for weight loss, lose weight without diet, permanent weight loss',
}

export default function BlogArticlePage() {
  return (
    <>
      <ArticleSchema
        title="Complete Guide to Weight Loss Without Crash Diets"
        description="Learn evidence-based strategies for sustainable weight loss that actually works."
        image="https://charmingaurawellness.com/images/diet-plan.jpg"
        datePublished="2024-05-15"
        dateModified="2024-05-15"
      />

      {/* Header */}
      <article className="bg-foreground text-background py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Complete Guide to Weight Loss Without Crash Diets
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-background/70">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>May 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Charming Aura Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </article>

      {/* Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Featured Image */}
          <div className="relative h-96 md:h-[28rem] rounded-lg overflow-hidden mb-8 shadow-lg">
            <Image
              src="/images/diet-plan.jpg"
              alt="Healthy weight loss nutrition"
              fill
              className="object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Why Crash Diets Always Fail</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you&apos;ve tried crash diets before, you know the pattern: initial rapid weight loss, intense hunger and
              cravings, eventually giving up, and gaining the weight back (plus extra). This yo-yo weight cycling is not
              only frustrating—it&apos;s actually harmful to your metabolism and long-term health.
            </p>

            <h3 className="font-serif text-2xl font-bold mt-8 mb-4">The Science Behind Sustainable Weight Loss</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sustainable weight loss is based on creating a small calorie deficit (300-500 calories) while maintaining
              muscle mass. This moderate approach allows your body to adapt naturally without triggering starvation
              responses that slow metabolism and increase hunger.
            </p>

            <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
              <li>
                <strong>Protein is crucial:</strong> Aim for 25-30% of calories from protein to preserve muscle mass
              </li>
              <li>
                <strong>Fiber keeps you full:</strong> Vegetables, fruits, and whole grains reduce hunger naturally
              </li>
              <li>
                <strong>Healthy fats matter:</strong> Don&apos;t eliminate fats—they support hormone production and satiety
              </li>
              <li>
                <strong>Water and sleep count:</strong> Both significantly impact hunger hormones and metabolism
              </li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Your 5-Step Plan for Sustainable Weight Loss</h2>

            <h3 className="font-serif text-2xl font-bold mt-6 mb-4">1. Calculate Your Actual Calorie Needs</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Everyone&apos;s metabolism is different. Rather than following generic 1200-calorie plans, use your activity
              level, age, and metabolism to determine YOUR calorie baseline. Then, reduce by just 300-500 calories.
            </p>

            <h3 className="font-serif text-2xl font-bold mt-6 mb-4">2. Build Meals Around Protein & Vegetables</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Make every meal include protein (chicken, fish, eggs, legumes) and vegetables. These naturally keep you
              fuller longer and provide essential nutrients while being lower in calories.
            </p>

            <h3 className="font-serif text-2xl font-bold mt-6 mb-4">3. Stop Restricting Foods You Love</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Complete restriction leads to intense cravings and binge eating. Instead, include small portions of foods
              you enjoy within your calorie target. This makes dieting sustainable long-term.
            </p>

            <h3 className="font-serif text-2xl font-bold mt-6 mb-4">4. Track Progress Beyond the Scale</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Weight fluctuates daily due to water retention, hormones, and digestion. Instead, track: how your clothes
              fit, body measurements, energy levels, and strength. Take progress photos monthly.
            </p>

            <h3 className="font-serif text-2xl font-bold mt-6 mb-4">5. Build Sustainable Habits</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Focus on forming habits that you can maintain forever: meal prepping, regular movement, adequate sleep,
              stress management. Small, consistent changes create lasting results.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h2>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
              <li>Eating too little (under 1200 calories) slows metabolism dangerously</li>
              <li>Cutting out entire food groups unnecessarily limits your diet</li>
              <li>Not getting enough sleep—poor sleep increases hunger and cravings</li>
              <li>Ignoring strength training—muscle preserves metabolism during weight loss</li>
              <li>Being all-or-nothing—one bad meal doesn&apos;t ruin your progress</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">The Timeline: What to Expect</h2>
            <div className="bg-muted/30 border border-border rounded-lg p-6 my-6">
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong>Weeks 1-2:</strong> You might lose 2-4 kg (much of this is water weight)
                </li>
                <li>
                  <strong>Weeks 3-8:</strong> Expect 0.5-1 kg per week—this is healthy, sustainable loss
                </li>
                <li>
                  <strong>Month 3+:</strong> Continue with consistency; most people see major transformations by month 3
                </li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Need Expert Guidance?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              While these principles work for everyone, a personalized nutrition plan accelerates results. At Charming
              Aura Wellness, our certified nutritionists create custom plans based on YOUR metabolism, food preferences,
              and lifestyle.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 text-center">
              <p className="text-foreground font-semibold mb-4">
                Ready to lose weight sustainably? Start with a free personalized assessment.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Schedule Your Free Consultation
              </a>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Key Takeaways</h2>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground">
              <li>Crash diets fail because they&apos;re unsustainable and harm metabolism</li>
              <li>Sustainable weight loss comes from moderate calorie deficit (300-500 calories)</li>
              <li>Protein, fiber, and whole foods naturally keep you satisfied</li>
              <li>Building sustainable habits beats restrictive willpower</li>
              <li>Most people see significant results within 3 months of consistent effort</li>
              <li>Professional guidance accelerates results and increases success rates</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Transform Your Health Today
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our weight loss program and get personalized nutrition plans designed specifically for sustainable
              results.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Start Your Transformation
            </a>
          </div>
        </div>
      </article>
    </>
  )
}
