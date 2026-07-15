import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock } from 'lucide-react'
import { ArticleSchema } from '@/components/schema-markup'

export const metadata: Metadata = {
  title: 'The 80/20 Rule: Why Nutrition Matters More Than Exercise | Charming Aura Wellness',
  description: 'Why the 80% nutrition / 20% exercise split is the most scientifically supported formula for body transformation — and how to apply it to your own health journey.',
  keywords: '80 20 rule fitness nutrition, nutrition vs exercise weight loss, diet more important than exercise, 80 20 diet fitness rule, nutrition exercise ratio',
}

export default function BlogArticlePage() {
  return (
    <>
      <ArticleSchema
        title="The 80/20 Rule: Why Nutrition Matters More Than Exercise"
        description="Why the 80% nutrition / 20% exercise split is the most powerful formula for transformation."
        image="https://charmingaurawellness.com/images/nutritionist.jpg"
        datePublished="2024-07-08"
        dateModified="2024-07-08"
      />

      <article className="bg-foreground text-background py-12 md:py-16 pt-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">Methodology</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            The 80/20 Rule: Why Nutrition Matters More Than Exercise
          </h1>
          <div className="flex flex-wrap gap-6 text-background/70">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>July 8, 2024</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Charming Aura Team</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 min read</span></div>
          </div>
        </div>
      </article>

      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
            <Image src="/images/nutritionist.jpg" alt="80/20 nutrition and exercise rule" fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">The Myth That's Keeping You Stuck</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Most people believe the path to their ideal body is through the gym. Spend more hours exercising, burn more calories, lose more weight. It sounds logical. But it's largely wrong — and the persistent belief in this myth is why so many people exercise for months with minimal results.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The science is clear: body composition — whether you're losing fat, gaining muscle, or maintaining — is driven approximately 80% by what you eat and 20% by how you move. This doesn't mean exercise doesn't matter. It means you cannot out-train a bad diet.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">The Science Behind the 80/20 Split</h2>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">Why Nutrition Dominates (80%)</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li><strong>Calorie volume:</strong> A 45-minute run burns approximately 400 calories. A single mango smoothie has 350. Nutrition simply has more influence over your energy balance.</li>
              <li><strong>Hormonal control:</strong> Insulin, leptin, ghrelin, cortisol — these metabolism-controlling hormones are regulated primarily by what and when you eat, not how much you exercise.</li>
              <li><strong>Nutrient partitioning:</strong> Whether calories become fat or muscle depends on protein intake, timing, and micronutrient status — all nutrition factors.</li>
              <li><strong>Inflammation:</strong> Chronic inflammation — the root of most metabolic dysfunction — is driven primarily by dietary choices, particularly processed foods and excess sugar.</li>
            </ul>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">Why Exercise Still Matters (20%)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Exercise's role isn't negligible — it's essential. But its primary contributions are different from what most people expect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Preserves and builds lean muscle mass (which keeps metabolism elevated)</li>
              <li>Improves insulin sensitivity (making nutrition work better)</li>
              <li>Enhances cardiovascular health, sleep quality, and mood</li>
              <li>Accelerates fat loss when combined with the right nutrition</li>
              <li>Reduces stress and cortisol — which otherwise promotes fat storage</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">What "80% Nutrition" Looks Like in Practice</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Getting your nutrition right doesn't mean perfect eating 100% of the time. It means:
            </p>
            <div className="bg-muted/30 border border-border rounded-lg p-6 my-6">
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Protein priority:</strong> Every meal should anchor around a quality protein source — the single most important macronutrient for body composition.</li>
                <li><strong>Whole food foundation:</strong> 80% of your diet from minimally processed foods: vegetables, fruits, wholegrains, legumes, quality proteins.</li>
                <li><strong>Strategic carbohydrates:</strong> Time your carbohydrate intake around activity — more before and after workouts, fewer in the evening.</li>
                <li><strong>Adequate calories:</strong> Eating too little is just as harmful as eating too much. Your body needs sufficient fuel to rebuild and function optimally.</li>
                <li><strong>Consistency over perfection:</strong> A slightly imperfect plan followed consistently beats a perfect plan followed sporadically.</li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">What "20% Exercise" Looks Like in Practice</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              You don't need to live in the gym. Research shows that 150–180 minutes of moderate-intensity exercise per week (about 25 minutes daily) produces the majority of exercise's health benefits. Structure it as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>3–4 sessions of resistance training weekly (builds and preserves muscle)</li>
              <li>2–3 sessions of cardio (walking, cycling, swimming) for cardiovascular health</li>
              <li>Daily movement: walking, taking stairs, standing breaks</li>
              <li>1–2 flexibility or yoga sessions for recovery and stress reduction</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Common Mistakes That Break the 80/20 Rule</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Eating back exercise calories ("I worked out, so I deserve this pizza")</li>
              <li>Exercising intensely but eating a poor-quality diet</li>
              <li>Focusing exclusively on cardio without strength training</li>
              <li>Using supplements instead of fixing nutrition first</li>
              <li>Underestimating how much nutrition drives results</li>
            </ul>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 text-center">
              <p className="text-foreground font-semibold mb-2 text-lg">Ready to apply the 80/20 formula to your health?</p>
              <p className="text-muted-foreground mb-6">Our certified nutrition and exercise coaches build your personalised 80/20 plan. First consultation is completely FREE.</p>
              <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Book FREE Consultation
              </Link>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Key Takeaways</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Body transformation is approximately 80% nutrition and 20% exercise</li>
              <li>You cannot out-exercise a consistently poor diet</li>
              <li>Exercise amplifies the results that nutrition creates — not the other way around</li>
              <li>Both must work together — separate plans are less effective than integrated ones</li>
              <li>Consistency in nutrition over weeks and months beats intense short-term effort</li>
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Get Your Integrated Nutrition + Exercise Plan</h3>
            <p className="text-muted-foreground mb-6">We design your nutrition and movement plan together — because that's the only way the 80/20 rule actually works. First consultation FREE.</p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Book FREE Consultation
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
