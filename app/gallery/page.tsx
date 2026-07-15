'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Youtube, ExternalLink, Images, Video, Dumbbell, Users } from 'lucide-react'
import { businessInfo } from '@/lib/business-info'

// ── Photo gallery data ────────────────────────────────────────────────────────
const photoCategories = ['All', 'Wellness Center', 'Client Journeys', 'Food & Nutrition', 'Exercise']

const photos = [
  { src: '/images/nutritionist.jpg',          alt: 'Our certified nutritionist at the wellness center', category: 'Wellness Center', span: 'col-span-1 row-span-2' },
  { src: '/images/wellness-coaching.jpg',     alt: 'Wellness coaching session',                         category: 'Wellness Center', span: 'col-span-1' },
  { src: '/images/happy-client.jpg',          alt: 'Happy client after transformation',                 category: 'Client Journeys', span: 'col-span-1' },
  { src: '/images/diet-plan.jpg',             alt: 'Personalised Indian diet plan',                     category: 'Food & Nutrition', span: 'col-span-1' },
  { src: '/images/weight-management.jpg',     alt: 'Weight management nutrition',                       category: 'Food & Nutrition', span: 'col-span-1' },
  { src: '/images/hero-wellness.jpg',         alt: 'Fresh healthy food for wellness',                   category: 'Food & Nutrition', span: 'col-span-2' },
  { src: '/images/case-study-before-after.jpg', alt: 'Client transformation journey',                  category: 'Client Journeys', span: 'col-span-1 row-span-2' },
  { src: '/images/wellness-coaching.jpg',     alt: 'Group coaching session',                            category: 'Exercise',         span: 'col-span-1' },
  { src: '/images/nutritionist.jpg',          alt: 'One-on-one consultation',                           category: 'Wellness Center', span: 'col-span-1' },
  { src: '/images/happy-client.jpg',          alt: 'Client success story',                              category: 'Client Journeys', span: 'col-span-1' },
  { src: '/images/diet-plan.jpg',             alt: 'Herbal nutrition preparation',                      category: 'Food & Nutrition', span: 'col-span-1' },
  { src: '/images/weight-management.jpg',     alt: 'Exercise and nutrition session',                    category: 'Exercise',         span: 'col-span-1' },
]

// ── YouTube video data ────────────────────────────────────────────────────────
// Replace the videoId values with actual video IDs from the YouTube channel
const youtubeVideos = [
  {
    videoId: '',
    title: 'Weight Loss Success Story — 12 kg in 3 Months',
    category: 'Client Story',
    duration: '8:24',
    categoryColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    videoId: '',
    title: 'Morning Zoom Session — Nutrition Tips for Weight Loss',
    category: 'Coaching Session',
    duration: '15:30',
    categoryColor: 'bg-blue-100 text-blue-700',
  },
  {
    videoId: '',
    title: 'Herbal Nutrition Guide — Triphala & Amla for Weight Loss',
    category: 'Herbal Nutrition',
    duration: '12:10',
    categoryColor: 'bg-lime-100 text-lime-700',
  },
  {
    videoId: '',
    title: 'Home Exercise Routine — 20 Minutes Daily',
    category: 'Exercise',
    duration: '20:05',
    categoryColor: 'bg-orange-100 text-orange-700',
  },
  {
    videoId: '',
    title: 'Indian Diet Plan for Gut Health',
    category: 'Gut Health',
    duration: '10:45',
    categoryColor: 'bg-teal-100 text-teal-700',
  },
  {
    videoId: '',
    title: 'Live Group Zoom Wellness Session',
    category: 'Live Session',
    duration: '45:00',
    categoryColor: 'bg-purple-100 text-purple-700',
  },
]

// ── Thumbnail images per video category ─────────────────────────────────────
const videoThumbs = [
  '/images/wellness-coaching.jpg',
  '/images/nutritionist.jpg',
  '/images/diet-plan.jpg',
  '/images/weight-management.jpg',
  '/images/happy-client.jpg',
  '/images/hero-wellness.jpg',
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null)
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)

  const filteredPhotos =
    activeCategory === 'All' ? photos : photos.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-foreground text-background py-16 md:py-20 pt-36">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Our Gallery
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">
                Wellness in Action
              </h1>
              <p className="text-background/70 text-lg max-w-xl leading-relaxed">
                Photos and videos from our wellness center, coaching sessions, exercise programs, and client transformation journeys.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{businessInfo.transformedClients}</div>
                <div className="text-xs text-background/60 mt-0.5">Clients</div>
              </div>
              <div className="w-px bg-background/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-xs text-background/60 mt-0.5">Years</div>
              </div>
              <div className="w-px bg-background/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3x</div>
                <div className="text-xs text-background/60 mt-0.5">Daily Zoom</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section nav tabs ─────────────────────────────────────────────────── */}
      <div className="sticky top-[73px] z-30 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 max-w-6xl flex gap-0 overflow-x-auto">
          {[
            { label: 'Photos', icon: Images, href: '#photos' },
            { label: 'Exercise Videos', icon: Dumbbell, href: '#exercise' },
            { label: 'Coaching Sessions', icon: Users, href: '#sessions' },
            { label: 'YouTube Channel', icon: Youtube, href: '#youtube' },
          ].map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              className="flex items-center gap-2 px-5 py-4 text-sm font-semibold text-muted-foreground hover:text-primary border-b-2 border-transparent hover:border-primary transition-all whitespace-nowrap"
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Photo Gallery ─────────────────────────────────────────────────────── */}
      <section id="photos" className="py-16 md:py-20 bg-background scroll-mt-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Photo Gallery</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Inside Our Wellness Center
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A glimpse into our Thergaon wellness center, coaching sessions, and client transformations.
            </p>
          </motion.div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {photoCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[180px]"
            >
              {filteredPhotos.map((photo, i) => (
                <motion.div
                  key={`${photo.src}-${i}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={`relative overflow-hidden rounded-2xl cursor-pointer group bg-muted ${photo.span}`}
                  onClick={() => setLightboxPhoto(photo.src)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-end p-3">
                    <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded-full">
                      {photo.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[85vh] aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={lightboxPhoto} alt="Gallery photo" fill className="object-contain" />
            </motion.div>
            <button
              className="absolute top-4 right-4 text-white text-3xl font-light hover:text-primary transition-colors"
              onClick={() => setLightboxPhoto(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Exercise Videos ───────────────────────────────────────────────────── */}
      <section id="exercise" className="py-16 md:py-20 bg-muted/20 scroll-mt-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Exercise Programs</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Workout & Wellness Videos
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Guided home workouts, strength training, and movement sessions from our certified coaches.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeVideos.slice(0, 3).map((video, i) => (
              <VideoCard
                key={i}
                video={video}
                thumb={videoThumbs[i]}
                active={activeVideoId === `ex-${i}`}
                onPlay={() => setActiveVideoId(activeVideoId === `ex-${i}` ? null : `ex-${i}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Coaching Sessions ─────────────────────────────────────────────────── */}
      <section id="sessions" className="py-16 md:py-20 bg-background scroll-mt-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Live Zoom Sessions</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Coaching & Consultation Videos
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Recordings from our live Zoom coaching sessions — morning, afternoon, and evening sessions available daily.
            </p>
          </motion.div>

          {/* Featured large video */}
          <div className="mb-6">
            <div className="relative rounded-2xl overflow-hidden bg-foreground aspect-video max-w-3xl mx-auto shadow-2xl">
              <Image
                src="/images/wellness-coaching.jpg"
                alt="Zoom coaching session"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-background text-center p-6">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center mb-4 cursor-pointer hover:scale-110 transition-transform shadow-xl">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">Live Group Zoom Session</h3>
                <p className="text-background/80 text-sm max-w-sm">
                  Join our certified coaches live — 3 sessions every day at 7 AM, 1 PM, and 7 PM IST
                </p>
                <div className="flex gap-3 mt-6">
                  <Link
                    href="/contact"
                    className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
                  >
                    Join Live Session FREE
                  </Link>
                  <a
                    href={businessInfo.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-background/20 backdrop-blur-sm text-background rounded-lg font-semibold text-sm hover:bg-background/30 transition-colors border border-background/30 flex items-center gap-2"
                  >
                    <Youtube className="w-4 h-4" />
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeVideos.slice(3).map((video, i) => (
              <VideoCard
                key={i}
                video={video}
                thumb={videoThumbs[i + 3]}
                active={activeVideoId === `sess-${i}`}
                onPlay={() => setActiveVideoId(activeVideoId === `sess-${i}` ? null : `sess-${i}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── YouTube Channel ───────────────────────────────────────────────────── */}
      <section id="youtube" className="py-16 md:py-20 scroll-mt-28 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {/* YouTube logo badge */}
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Youtube className="w-4 h-4" />
              YouTube Channel
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Charming Aura on YouTube
            </h2>
            <p className="text-background/70 text-lg max-w-2xl mx-auto">
              Subscribe to our channel for weekly nutrition tips, wellness guidance, herbal recipes, client transformations, and live session recordings.
            </p>
          </motion.div>

          {/* Channel banner card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background/10 border border-background/20 rounded-2xl p-8 mb-10"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Channel avatar */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary flex-shrink-0">
                <Image
                  src={businessInfo.logo}
                  alt="Charming Aura YouTube Channel"
                  fill
                  className="object-contain bg-background p-2"
                />
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="font-serif text-2xl font-bold mb-1">CharmingAuraWellness_Nutrition</h3>
                <p className="text-background/70 mb-4">
                  Weekly nutrition tips · Herbal remedies · Weight loss stories · Live Zoom recordings
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                  {['Nutrition Tips', 'Weight Loss', 'Herbal Remedies', 'Exercise', 'Gut Health', 'Live Sessions'].map((tag) => (
                    <span key={tag} className="text-xs bg-background/15 text-background/90 px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={businessInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-colors shrink-0"
              >
                <Youtube className="w-5 h-5" />
                Subscribe FREE
              </a>
            </div>
          </motion.div>

          {/* YouTube video grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {youtubeVideos.map((video, i) => (
              <motion.a
                key={i}
                href={businessInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group block bg-background/8 hover:bg-background/15 border border-background/15 rounded-xl overflow-hidden transition-all hover:border-primary/50"
              >
                {/* Thumbnail */}
                <div className="relative h-40 overflow-hidden bg-background/10">
                  <Image
                    src={videoThumbs[i]}
                    alt={video.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-mono">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${video.categoryColor}`}>
                      {video.category}
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-4">
                  <h3 className="text-background text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-2 text-background/50 text-xs">
                    <ExternalLink className="w-3 h-3" />
                    Watch on YouTube
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Big CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href={businessInfo.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold text-lg transition-colors shadow-lg"
            >
              <Youtube className="w-6 h-6" />
              Visit Our Full YouTube Channel
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
            <p className="text-background/50 text-sm mt-3">New videos every week · Subscribe to never miss one</p>
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
            Ready to Start Your Own Transformation?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Join {businessInfo.transformedClients} clients who changed their health with our personalised nutrition plans and daily live coaching.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 bg-primary-foreground text-primary rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Book FREE Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

// ── VideoCard component ───────────────────────────────────────────────────────
function VideoCard({
  video,
  thumb,
  active,
  onPlay,
}: {
  video: typeof youtubeVideos[0]
  thumb: string
  active: boolean
  onPlay: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
    >
      {active && video.videoId ? (
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="border-0"
          />
        </div>
      ) : (
        <div
          className="relative h-44 overflow-hidden bg-muted cursor-pointer"
          onClick={onPlay}
        >
          <Image
            src={thumb}
            alt={video.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
            <a
              href={businessInfo.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
            </a>
          </div>
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded font-mono">
            {video.duration}
          </div>
          <div className="absolute top-2 left-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${video.categoryColor}`}>
              {video.category}
            </span>
          </div>
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-sm leading-snug mb-2 line-clamp-2">{video.title}</h3>
        <a
          href={businessInfo.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-red-600 font-semibold hover:underline"
        >
          <Youtube className="w-3.5 h-3.5" />
          Watch on YouTube
        </a>
      </div>
    </motion.div>
  )
}
