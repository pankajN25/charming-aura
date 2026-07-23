import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock } from 'lucide-react'
import { ArticleSchema } from '@/components/schema-markup'

export const metadata: Metadata = {
  title: 'Herbal Nutrition for Weight Loss: What Actually Works | Charming Aura Wellness',
  description: 'Science-backed guide to herbal nutrition for weight loss — which herbs boost metabolism, reduce cravings, and support fat loss naturally without side effects.',
  keywords: 'herbal nutrition weight loss, herbs for weight loss India, natural weight loss herbs, ayurvedic herbs metabolism, herbal diet plan',
}

export default function BlogArticlePage() {
  return (
    <>
      <ArticleSchema
        title="Herbal Nutrition for Weight Loss: What Actually Works"
        description="Science-backed guide to herbal nutrition for weight loss."
        image="https://charmingaurawellness.com/images/diet-plan.jpg"
        datePublished="2024-06-08"
        dateModified="2024-06-08"
      />

      <article className="bg-foreground text-background py-12 md:py-16 pt-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">Herbal Nutrition</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Herbal Nutrition for Weight Loss: What Actually Works
          </h1>
          <div className="flex flex-wrap gap-6 text-background/70">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>June 8, 2024</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Charming Aura Team</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 min read</span></div>
          </div>
        </div>
      </article>

      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
            <Image src="/images/diet-plan.jpg" alt="Herbal nutrition for weight loss" fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Why Herbal Nutrition Works Alongside Your Diet</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Herbal nutrition is not a magic cure for weight loss — but when used correctly alongside a structured diet plan, certain herbs and natural compounds genuinely support your metabolism, reduce inflammation, suppress cravings, and improve digestive efficiency. The key word is "alongside." No herb replaces good nutrition, but the right ones amplify results.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Charming Aura Wellness, herbal nutrition guidance is a pillar of our weight management programs. We incorporate specific herbs based on your blood type, body composition, health history, and goals — never a one-size-fits-all approach.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">6 Herbs With Real Science Behind Them</h2>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">1. Triphala — The Digestive Regulator</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A traditional Ayurvedic combination of three fruits (Amalaki, Bibhitaki, Haritaki), Triphala has been validated in modern research for improving gut motility, reducing fat accumulation, and supporting healthy cholesterol levels. Take it at night with warm water.
            </p>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">2. Turmeric (Curcumin) — The Anti-Inflammatory Powerhouse</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Chronic inflammation is one of the biggest barriers to weight loss. Curcumin in turmeric directly suppresses inflammatory pathways (NF-kB), improves insulin sensitivity, and has been shown to reduce belly fat in multiple controlled trials. Always pair with black pepper (piperine) for 20x better absorption.
            </p>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">3. Fenugreek (Methi) — The Craving Crusher</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fenugreek seeds are high in soluble fibre that forms a gel in the gut, slowing digestion and keeping you full significantly longer. Studies show it can reduce daily calorie intake by 12% simply by improving satiety signals.
            </p>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">4. Ginger — The Metabolism Activator</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fresh ginger has thermogenic properties — it raises your core temperature slightly, increasing calorie burn. It also improves gastric emptying (how fast food moves through your stomach), reducing bloating and improving nutrient absorption.
            </p>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">5. Amla (Indian Gooseberry) — The Metabolic Booster</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Amla is exceptionally rich in Vitamin C (20x more than an orange) and chromium. It is a popular traditional addition to Indian diets and is commonly included as part of a balanced weight-management routine.
            </p>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">6. Moringa — The Nutrient Density Champion</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Moringa leaves contain 92 nutrients and 46 antioxidants. The high protein and fibre content naturally reduces hunger, while its chlorogenic acid compound has been linked to better fat metabolism and blood sugar control.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">How We Incorporate Herbs Into Your Plan</h2>
            <div className="bg-muted/30 border border-border rounded-lg p-6 my-6">
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Morning:</strong> Warm water with amla juice + a pinch of turmeric and black pepper</li>
                <li><strong>Before meals:</strong> Fenugreek seed water (soaked overnight) to reduce appetite</li>
                <li><strong>After meals:</strong> Ginger and cinnamon tea to aid digestion and blood sugar</li>
                <li><strong>At night:</strong> Triphala churna with warm water for gut motility</li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Important Safety Note</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              While these herbs are natural, they interact with medications, pre-existing conditions, and each other. Fenugreek can lower blood sugar too much in diabetics on medication; high-dose turmeric can interfere with blood thinners. This is why our herbal protocols are always supervised and personalised by our certified coaches.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 text-center">
              <p className="text-foreground font-semibold mb-2 text-lg">Want a personalised herbal nutrition plan?</p>
              <p className="text-muted-foreground mb-6">Our first consultation is completely FREE. We'll design your herb protocol based on your health profile, medications, and goals.</p>
              <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Book FREE Herbal Nutrition Consultation
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Get Your Herbal Nutrition Plan</h3>
            <p className="text-muted-foreground mb-6">Every herbal protocol we design is 100% personalised and supervised. Book your free consultation to get started.</p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Book FREE Consultation
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
