import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock } from 'lucide-react'
import { ArticleSchema } from '@/components/schema-markup'

export const metadata: Metadata = {
  title: 'Gut Health and Nutrition: The Complete Connection | Charming Aura Wellness',
  description: 'How your gut microbiome affects your weight, mood, immunity, and energy — and the exact foods and habits that heal it. A comprehensive guide by certified nutritionists.',
  keywords: 'gut health nutrition India, gut microbiome diet, how to improve gut health, IBS nutrition, gut healing foods, leaky gut diet plan',
}

export default function BlogArticlePage() {
  return (
    <>
      <ArticleSchema
        title="Gut Health and Nutrition: The Complete Connection"
        description="How your gut microbiome affects your weight, mood, immunity, and energy — and how to heal it."
        image="https://charmingaurawellness.com/images/happy-client.jpg"
        datePublished="2024-07-01"
        dateModified="2024-07-01"
      />

      <article className="bg-foreground text-background py-12 md:py-16 pt-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">Gut Health</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Gut Health and Nutrition: The Complete Connection
          </h1>
          <div className="flex flex-wrap gap-6 text-background/70">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>July 1, 2024</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Charming Aura Team</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>10 min read</span></div>
          </div>
        </div>
      </article>

      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
            <Image src="/images/happy-client.jpg" alt="Gut health and nutrition" fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Your Gut Is Your Second Brain</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The gut contains over 100 million neurons — more than the spinal cord. It produces 95% of your body's serotonin (the feel-good hormone). It communicates constantly with your brain via the vagus nerve. Scientists call this the gut-brain axis, and it explains why poor digestion often accompanies anxiety, brain fog, and low mood.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your gut also houses 70% of your immune system. When your gut microbiome is out of balance (dysbiosis), you see cascading effects: inflammation, weight gain, fatigue, skin issues, hormonal disruption, and poor nutrient absorption — even when you're eating well.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Signs Your Gut Needs Healing</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Chronic bloating — especially after meals that shouldn't cause it</li>
              <li>Irregular bowel movements (constipation, diarrhoea, or alternating)</li>
              <li>Persistent fatigue not explained by sleep quality</li>
              <li>Frequent infections or lowered immunity</li>
              <li>Skin conditions — eczema, acne, rosacea</li>
              <li>Food intolerances that seem to be getting worse over time</li>
              <li>Brain fog and poor concentration after meals</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">The 5 Nutrition Pillars of Gut Health</h2>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">1. Fibre — Feed Your Good Bacteria</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Prebiotic fibre (found in onions, garlic, leeks, asparagus, bananas, oats) feeds beneficial bacteria like Bifidobacterium and Lactobacillus. The recommended intake is 25–38g daily. Most Indians get 15g or less. Slowly increase fibre to avoid gas during the transition.
            </p>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">2. Fermented Foods — Introduce Beneficial Bacteria</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              India has a rich tradition of fermented foods — curd, idli, dosa batter, kanji, and pickles. These contain live cultures (probiotics) that colonise your gut and crowd out harmful bacteria. Aim for at least one serving of a fermented food daily.
            </p>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">3. Anti-Inflammatory Foods — Reduce Gut Inflammation</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Chronic gut inflammation drives IBS, leaky gut, and other conditions. Turmeric, ginger, omega-3 rich fatty fish, walnuts, and dark leafy greens all reduce intestinal inflammation. Minimise processed foods, refined sugar, and seed oils — the primary inflammation drivers.
            </p>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">4. Polyphenol-Rich Foods — Microbiome Diversity Boosters</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Polyphenols (found in berries, green tea, dark chocolate, red onions, and extra virgin olive oil) act as fertiliser for beneficial gut bacteria. Studies show polyphenol-rich diets produce measurably more diverse gut microbiomes — and diversity is the single strongest indicator of gut health.
            </p>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">5. Hydration — The Overlooked Gut Nutrient</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Water is essential for mucus production (the protective lining of your gut), peristalsis (movement of food through the intestine), and stool formation. Dehydration is one of the most common causes of constipation and sluggish digestion. Aim for 2.5–3 litres daily.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Foods to Avoid for a Healthy Gut</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Excessive refined sugar — feeds harmful bacteria and yeasts (Candida)</li>
              <li>Highly processed foods — emulsifiers and artificial additives disrupt the microbiome</li>
              <li>Seed oils (refined sunflower, soybean) — high in omega-6, pro-inflammatory</li>
              <li>Alcohol — damages the gut lining and kills beneficial bacteria</li>
              <li>Unnecessary antibiotics — broad-spectrum antibiotics wipe out good bacteria alongside bad</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">A 7-Day Gut Reset Plan</h2>
            <div className="bg-muted/30 border border-border rounded-lg p-6 my-6">
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Day 1–2:</strong> Remove processed foods, sugar, and seed oils. Increase water to 3L/day.</li>
                <li><strong>Day 3–4:</strong> Add curd or idli/dosa to one meal. Begin ginger tea each morning.</li>
                <li><strong>Day 5–6:</strong> Introduce a fibre-rich breakfast: oats with banana and flaxseeds.</li>
                <li><strong>Day 7:</strong> Assess: is bloating reduced? Energy better? This is your new baseline — build from here.</li>
              </ul>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 text-center">
              <p className="text-foreground font-semibold mb-2 text-lg">Struggling with digestive issues?</p>
              <p className="text-muted-foreground mb-6">Our gut health specialists create personalised gut-healing nutrition plans. First consultation is completely FREE.</p>
              <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Book FREE Gut Health Consultation
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Heal Your Gut with Expert Guidance</h3>
            <p className="text-muted-foreground mb-6">A personalised gut health plan changes everything. Book your free consultation and let us map your path to better digestion.</p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Book FREE Consultation
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
