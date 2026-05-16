import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wellness Blog | Nutrition Tips & Health Insights | Charming Aura',
  description:
    'Expert nutrition and wellness tips from certified specialists. Learn about weight loss, PCOD management, diet plans, and healthy lifestyle changes.',
  keywords:
    'nutrition blog, health tips, wellness articles, diet advice, nutrition counseling, weight loss tips',
}

// Sample blog posts - in a real application, these would come from a database
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
]

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-foreground text-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
              Wellness Blog
            </h1>
            <p className="text-lg text-background/80 leading-relaxed">
              Expert insights on nutrition, weight loss, health conditions, and lifestyle
              transformations from our team of certified nutritionists.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Featured Image */}
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 md:h-56 overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="font-serif text-xl md:text-2xl font-bold mb-3 text-foreground hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center p-8 bg-muted/30 rounded-lg">
            <h3 className="font-serif text-2xl font-bold mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Get weekly nutrition tips, wellness insights, and health transformation stories
              delivered to your inbox.
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
