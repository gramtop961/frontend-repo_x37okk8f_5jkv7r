import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Brain, LineChart, GraduationCap } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 200 } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  // Subtle parallax on content and floating cards (scrollax effect)
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const cardsY = useTransform(scrollYProgress, [0, 1], [0, -40])
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section ref={ref} className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Spline 3D scene as full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Dark gradient overlay to ensure text contrast (does not block interaction) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(80% 60% at 50% 20%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.85) 100%)',
        }}
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Animated color glow behind content for brand feel */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[70rem] w-[70rem] -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(37,99,235,0.25), rgba(124,58,237,0.18), transparent)',
          filter: 'blur(50px)',
          scale: glowScale,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-28 text-center md:pt-36">
        <motion.div style={{ y: contentY }} variants={container} initial="hidden" animate="show" className="w-full">
          <motion.div
            variants={item}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-yellow-400" />
            <span className="tracking-wide">Measure Learning. Empower Outcomes.</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-6xl drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]"
          >
            The Future of <span className="bg-gradient-to-r from-[#FDE047] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">OBE Analytics</span> is Here.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-base text-gray-300 md:text-lg"
          >
            Flames.blue helps educators automate CO/PO attainment, visualize performance, and improve learning outcomes using data-driven insights.
          </motion.p>

          <motion.div variants={item} className="mx-auto mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/register"
              className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-95"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Play className="mr-2 h-4 w-4" /> View Demo
            </a>
          </motion.div>

          {/* Floating icons with scroll-based parallax */}
          <motion.div style={{ y: cardsY }} className="pointer-events-none relative mx-auto mt-12 grid max-w-5xl grid-cols-3 gap-6 opacity-95">
            {[{ Icon: Brain, label: 'AI' }, { Icon: LineChart, label: 'Dashboards' }, { Icon: GraduationCap, label: 'Education' }].map(
              ({ Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, type: 'spring', stiffness: 120 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-violet-600/20">
                    <Icon className="h-6 w-6 text-blue-300" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-200">{label}</p>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
