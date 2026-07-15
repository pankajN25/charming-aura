import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock } from 'lucide-react'
import { ArticleSchema } from '@/components/schema-markup'

export const metadata: Metadata = {
  title: 'Why Online Zoom Wellness Coaching Works Better Than You Think | Charming Aura',
  description: 'Discover why live Zoom wellness coaching delivers results comparable to in-person sessions — and why our 3-sessions-per-day format is key to client success.',
  keywords: 'online wellness coaching India, zoom nutrition coaching, online diet consultation, virtual wellness coach, remote nutrition coaching',
}

export default function BlogArticlePage() {
  return (
    <>
      <ArticleSchema
        title="Why Online Zoom Wellness Coaching Works Better Than You Think"
        description="Why live Zoom wellness coaching delivers real results and how our 3-sessions-per-day format works."
        image="https://charmingaurawellness.com/images/wellness-coaching.jpg"
        datePublished="2024-06-15"
        dateModified="2024-06-15"
      />

      <article className="bg-foreground text-background py-12 md:py-16 pt-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">Online Coaching</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Why Online Zoom Wellness Coaching Works Better Than You Think
          </h1>
          <div className="flex flex-wrap gap-6 text-background/70">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>June 15, 2024</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Charming Aura Team</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>6 min read</span></div>
          </div>
        </div>
      </article>

      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
            <Image src="/images/wellness-coaching.jpg" alt="Online Zoom wellness coaching" fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">The Sceptic's Question: "Can Online Coaching Really Work?"</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              It's a fair question. For years, healthcare and coaching was synonymous with face-to-face sessions. Then the world shifted — and what emerged from that shift surprised even us. Our online clients not only matched the results of in-person clients, many actually outperformed them. Here's why.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">Why Online Coaching Produces Equal (or Better) Results</h2>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">1. Consistency Is King — and Zoom Makes It Easy</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The biggest predictor of coaching success is consistency of contact. With online coaching, there's no commute, no scheduling difficulty, no "I can't make it today." You log in from your kitchen, your office, or even a hotel room abroad. Consistent touchpoints beat sporadic in-person sessions every time.
            </p>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">2. Our 3-Sessions-Per-Day Format Changes Everything</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Charming Aura Wellness, we run three live Zoom sessions every single day — morning (7am), afternoon (1pm), and evening (7pm). This is the core of why our clients succeed. When you have a question at noon about whether to eat the biryani or the salad, there's a live session in an hour. Guidance when it counts most.
            </p>
            <div className="bg-muted/30 border border-border rounded-lg p-6 my-4">
              <p className="text-foreground font-semibold mb-3">What happens in each session:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Morning (7am):</strong> Breakfast review, daily nutrition intent-setting, metabolism tips</li>
                <li><strong>Afternoon (1pm):</strong> Midday check-in, meal log review, cravings management</li>
                <li><strong>Evening (7pm):</strong> Day recap, next-day prep, sleep and digestion guidance</li>
              </ul>
            </div>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">3. You're in Your Real Environment</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In-person consultations happen in a clinic. Online sessions happen in your kitchen, your office, your life. Coaches can see your actual environment — the snacks on your counter, the meal you're about to cook. This context produces far more relevant, actionable advice.
            </p>

            <h3 className="font-serif text-xl font-bold mt-6 mb-3">4. Global Availability, Zero Travel Friction</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We serve clients in India, the US, and Europe. Time zones are accommodated — our three daily slots cover IST morning, US evening, and European afternoon. If you're an NRI, a frequent traveller, or simply live far from our Thergaon centre, online coaching removes every barrier.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-8 mb-4">What to Expect in Your First Online Session</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>A warm, conversational assessment (not a clinical interrogation)</li>
              <li>No need to travel — just your phone or laptop and a quiet space</li>
              <li>We cover your health history, current diet, goals, and schedule</li>
              <li>By the end, you'll have a clear initial action plan</li>
              <li>It's completely free — no fees, ever, for the first session</li>
            </ul>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 text-center">
              <p className="text-foreground font-semibold mb-2 text-lg">Join a live session today — FREE</p>
              <p className="text-muted-foreground mb-6">Your first consultation is completely free. We'll add you to our daily Zoom coaching schedule at your preferred time.</p>
              <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Book FREE Online Consultation
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Start Your Online Wellness Journey</h3>
            <p className="text-muted-foreground mb-6">3 live coaching sessions every day, available worldwide. Your first session is FREE — no commitment.</p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Book FREE Consultation
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
