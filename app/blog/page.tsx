import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wellness Blog | Nutrition Tips & Health Insights | Charming Aura',
  description:
    'Expert nutrition and wellness tips from certified specialists. Learn about weight loss, PCOD management, gut health, herbal nutrition, and healthy lifestyle changes.',
  keywords:
    'nutrition blog, health tips, wellness articles, diet advice, nutrition counseling, weight loss tips, gut health, herbal nutrition, 80 20 rule fitness',
}

const blogPosts = [
  {
    id: 1,
    title: 'Complete Guide to Weight Loss Without Crash Diets',
    excerpt:
      'Learn evidence-based strategies for sustainable weight loss that actually work long-term, without restrictive diets.',
    author: 'Charming Aura Team',
    date: '2024-05-15',
    image: '/images/diet-plan.jpg',
    category: 'Weight Loss',
    slug: 'weight-loss-without-crash-diets',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'PCOD Management Through Nutrition: Evidence-Based Approach',
    excerpt:
      'Comprehensive nutrition guide for managing PCOD symptoms through science-backed dietary interventions.',
    author: 'Charming Aura Team',
    date: '2024-05-10',
    image: '/images/nutritionist.jpg',
    category: 'Health Conditions',
    slug: 'pcod-nutrition-management',
    readTime: '10 min read',
  },
  {
    id: 3,
    title: 'Why Personalized Diet Plans Work Better Than Generic Diets',
    excerpt:
      'Discover why one-size-fits-all diets fail and how personalized nutrition creates lasting results.',
    author: 'Charming Aura Team',
    date: '2024-05-05',
    image: '/images/weight-management.jpg',
    category: 'Nutrition',
    slug: 'personalized-vs-generic-diets',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Nutrition Myths Debunked by Science',
    excerpt:
      'Common nutrition myths that might be sabotaging your health goals. Learn the scientific truth.',
    author: 'Charming Aura Team',
    date: '2024-04-28',
    image: '/images/wellness-coaching.jpg',
    category: 'Education',
    slug: 'nutrition-myths-debunked',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'The 21-Day Wellness Challenge: Your Complete Week-by-Week Guide',
    excerpt:
      'A structured 3-week transformation program used by Charming Aura clients — including the liquid day protocol, habit-building framework, and what to realistically expect.',
    author: 'Charming Aura Team',
    date: '2024-07-15',
    image: '/images/wellness-coaching.jpg',
    category: 'Programs',
    slug: '21-day-wellness-challenge-guide',
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'Herbal Nutrition for Weight Loss: What Actually Works',
    excerpt:
      'Science-backed guide to 6 herbs — Triphala, Turmeric, Fenugreek, Ginger, Amla, and Moringa — and how we incorporate them into personalised weight loss plans.',
    author: 'Charming Aura Team',
    date: '2024-06-08',
    image: '/images/diet-plan.jpg',
    category: 'Herbal Nutrition',
    slug: 'herbal-nutrition-for-weight-loss',
    readTime: '7 min read',
  },
  {
    id: 7,
    title: 'Why Online Zoom Wellness Coaching Works Better Than You Think',
    excerpt:
      'How live Zoom sessions deliver results comparable to in-person coaching — and why our 3-sessions-per-day format is the key to client consistency.',
    author: 'Charming Aura Team',
    date: '2024-06-15',
    image: '/images/wellness-coaching.jpg',
    category: 'Online Coaching',
    slug: 'zoom-wellness-coaching-benefits',
    readTime: '6 min read',
  },
  {
    id: 8,
    title: 'Weight Gain Diet Plan for Indians: The Healthy Way',
    excerpt:
      'A complete Indian weight gain plan with sample meal days, macro targets, and the right high-protein Indian foods to build lean mass — not just fat.',
    author: 'Charming Aura Team',
    date: '2024-06-22',
    image: '/images/weight-management.jpg',
    category: 'Weight Gain',
    slug: 'weight-gain-diet-plan-india',
    readTime: '8 min read',
  },
  {
    id: 9,
    title: 'Gut Health and Nutrition: The Complete Connection',
    excerpt:
      'How your gut microbiome affects weight, mood, immunity, and energy — and the exact foods and habits that heal it. Includes a 7-day gut reset plan.',
    author: 'Charming Aura Team',
    date: '2024-07-01',
    image: '/images/happy-client.jpg',
    category: 'Gut Health',
    slug: 'gut-health-and-nutrition',
    readTime: '10 min read',
  },
  {
    id: 10,
    title: 'The 80/20 Rule: Why Nutrition Matters More Than Exercise',
    excerpt:
      'The science behind why body transformation is 80% nutrition and 20% exercise — and exactly what that split looks like in practice.',
    author: 'Charming Aura Team',
    date: '2024-07-08',
    image: '/images/nutritionist.jpg',
    category: 'Methodology',
    slug: 'exercise-and-nutrition-80-20-rule',
    readTime: '8 min read',
  },
]

const categoryColors: Record<string, string> = {
  'Weight Loss': 'bg-emerald-100 text-emerald-800',
  'Health Conditions': 'bg-rose-100 text-rose-800',
  'Nutrition': 'bg-blue-100 text-blue-800',
  'Education': 'bg-purple-100 text-purple-800',
  'Programs': 'bg-amber-100 text-amber-800',
  'Herbal Nutrition': 'bg-lime-100 text-lime-800',
  'Online Coaching': 'bg-indigo-100 text-indigo-800',
  'Weight Gain': 'bg-orange-100 text-orange-800',
  'Gut Health': 'bg-teal-100 text-teal-800',
  'Methodology': 'bg-cyan-100 text-cyan-800',
}

export default function BlogPage() {
  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <>
      {/* Header */}
      <section className="bg-foreground text-background py-16 md:py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {blogPosts.length} Articles
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
              Wellness Blog
            </h1>
            <p className="text-lg text-background/80 leading-relaxed">
              Expert insights on nutrition, weight loss, gut health, herbal remedies, and lifestyle
              transformations — from our team of certified nutritionists in Pune.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">

          {/* Featured Post */}
          <div className="mb-14">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Featured Article</p>
            <article className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow md:flex">
              <Link href={`/blog/${featured.slug}`} className="md:w-1/2 block shrink-0">
                <div className="relative h-64 md:h-full overflow-hidden bg-muted min-h-[260px]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category] ?? 'bg-primary/10 text-primary'}`}>
                      {featured.category}
                    </span>
                  </div>
                </div>
              </Link>
              <div className="p-8 flex flex-col justify-center md:w-1/2">
                <Link href={`/blog/${featured.slug}`}>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground mb-6 leading-relaxed">{featured.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>{new Date(featured.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span></div>
                  <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>{featured.readTime}</span></div>
                </div>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="inline-block self-start px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-sm"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          </div>

          {/* All Other Posts */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {rest.map((post) => (
              <article
                key={post.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-primary/10 text-primary'}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-5">
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="font-serif text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /><span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span></div>
                    <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /><span>{post.readTime}</span></div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block text-primary text-sm font-semibold hover:text-primary/80 transition-colors"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="text-center p-8 md:p-12 bg-primary/5 border border-primary/20 rounded-2xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">Get Weekly Wellness Insights</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Nutrition tips, transformation stories, and expert health advice — delivered every week to your inbox. No spam, ever.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-sm whitespace-nowrap"
              >
                Subscribe FREE
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
