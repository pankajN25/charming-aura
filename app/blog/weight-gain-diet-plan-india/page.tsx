import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock } from 'lucide-react'
import { ArticleSchema } from '@/components/schema-markup'

export const metadata: Metadata = {
  title: 'Weight Gain Diet Plan for Indians: The Healthy Way | Charming Aura Wellness',
  description: 'A complete Indian weight gain diet plan — how to gain healthy weight without junk food, using traditional foods, macros, and expert-guided nutrition strategies.',
  keywords: 'weight gain diet plan India, healthy weight gain Indian food, how to gain weight India, Indian diet for weight gain, underweight nutrition plan India',
}

export default function BlogArticlePage() {
  return (
    <>
      <ArticleSchema
        title="Weight Gain Diet Plan for Indians: The Healthy Way"
        description="How to gain healthy weight using Indian foods and expert-guided nutrition strategies."
        image="https://charmingaurawellness.com/images/weight-management.jpg"
        datePublished="2024-06-22"
        dateModified="2024-06-22"
      />

      <article className="bg-foreground text-background py-12 md:py-16 pt-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">Weight Gain</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Weight Gain Diet Plan for Indians: The Healthy Way
          </h1>
          <div className="flex flex-wrap gap-6 text-background/70">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>June 22, 2024</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Charming Aura Team</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 min read</span></div>
          </div>
        </div>
      </article>

      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
            <Image src="/images/weight-management.jpg" alt="Weight gain diet plan India" fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">The Underweight Problem Nobody Talks About</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              India's wellness conversation is dominated by weight loss. But millions of Indians — especially young adults, post-illness patients, and those with fast metabolisms — struggle with being underweight, and the health consequences are just as serious: poor immunity, hormonal imbalances, muscle weakness, anaemia, and higher fracture risk. Healthy weight gain deserves just as much attention.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The mistake most people make? Reaching for junk food to gain weight fast. This leads to fat gain, not muscle — and brings a new set of health problems. The right approach is strategic calorie surplus with high-quality Indian foods.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">The Science: Calorie Surplus + Protein = Healthy Weight Gain</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To gain weight, you need to eat approximately 300–500 calories more than your body burns daily. The distribution of those extra calories matters enormously:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li><strong>Protein (25–30% of calories):</strong> Builds muscle, not fat. Aim for 1.5–2g per kg of body weight.</li>
              <li><strong>Complex carbohydrates (50–55%):</strong> Fuel for energy and glycogen storage.</li>
              <li><strong>Healthy fats (20–25%):</strong> Calorie-dense and essential for hormone production.</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Best Indian Foods for Healthy Weight Gain</h2>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">High-Protein Indian Sources</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Dal (lentils) — 18g protein per cup, all essential amino acids when paired with rice</li>
              <li>Paneer — 18g protein per 100g, high in casein for slow muscle repair</li>
              <li>Eggs — 6g protein each, highest biological value of any natural food</li>
              <li>Curd / Greek yoghurt — 10–15g protein per cup + gut health benefits</li>
              <li>Chicken, fish, mutton — 25–30g protein per 100g cooked</li>
            </ul>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">Calorie-Dense Carbohydrate Sources</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Brown rice and basmati rice — 200 calories per cooked cup, nutrient-dense</li>
              <li>Whole wheat roti — 100 calories per roti, fibre-rich</li>
              <li>Sweet potato — high in vitamins, complex carbs, and fibre</li>
              <li>Banana — portable, calorie-rich, high in potassium</li>
              <li>Mango — seasonal, naturally sweet, high in calories and vitamins</li>
            </ul>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">Healthy Fat Sources</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Ghee — 1 tsp (45 calories), packed with fat-soluble vitamins</li>
              <li>Nuts and seeds — almonds, cashews, walnuts (160–180 cal per handful)</li>
              <li>Coconut milk — rich, calorie-dense, lauric acid for immunity</li>
              <li>Avocado (increasingly available) — 230 calories, heart-healthy fats</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Sample Indian Weight Gain Day</h2>
            <div className="bg-muted/30 border border-border rounded-lg p-6 my-6">
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Breakfast (7am):</strong> 4 egg omelette with vegetables + 2 whole wheat rotis + 1 banana + whole milk</li>
                <li><strong>Mid-morning (10am):</strong> Handful of mixed nuts + 1 cup curd with honey</li>
                <li><strong>Lunch (1pm):</strong> 2 cups brown rice + dal + paneer curry + salad with olive oil dressing</li>
                <li><strong>Evening (4pm):</strong> Peanut butter on whole wheat toast + 1 glass milk with 1 tsp ghee</li>
                <li><strong>Dinner (7pm):</strong> Chicken/fish curry + 2 rotis + sabzi + 1 cup dal</li>
                <li><strong>Before bed (9pm):</strong> 1 glass warm turmeric milk (haldi doodh) with a few dates</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3"><strong>Approximate total: 3,000–3,200 calories · 120–140g protein</strong></p>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Common Weight Gain Mistakes to Avoid</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Relying on junk food — adds fat, not lean mass, and damages metabolism</li>
              <li>Skipping strength training — without resistance exercise, surplus calories mostly become fat</li>
              <li>Eating too much at once — digestive discomfort reduces how much you actually absorb</li>
              <li>Ignoring micronutrients — zinc, iron, and B12 deficiencies are common in underweight individuals and prevent weight gain</li>
            </ul>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 text-center">
              <p className="text-foreground font-semibold mb-2 text-lg">Struggling to gain healthy weight?</p>
              <p className="text-muted-foreground mb-6">Our certified coaches specialise in healthy weight gain programs using Indian foods. First consultation FREE.</p>
              <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Book FREE Weight Gain Consultation
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Get Your Personalised Weight Gain Plan</h3>
            <p className="text-muted-foreground mb-6">Stop guessing. Get a coach-designed Indian weight gain diet built around your body, preferences, and goals. Free first consultation.</p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Book FREE Consultation
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
