import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Brain, LineChart, GraduationCap } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 200 } },
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Animated background gradient overlay */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-violet-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Subtle animated radial glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(37,99,235,0.25), rgba(124,58,237,0.18), transparent)',
          filter: 'blur(40px)',
        }}
        initial={{ scale: 0.9, opacity: 0.6 }}
        animate={{ scale: [0.9, 1.03, 0.98, 1], opacity: [0.6, 0.8, 0.7, 0.75] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-28 text-center md:pt-36">
        <motion.div variants={container} initial="hidden" animate="show" className="w-full">
          <motion.div variants={item} className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-white/60 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-violet-600" />
            <span className="tracking-wide">Measure Learning. Empower Outcomes.</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl"
          >
            The Future of <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">OBE Analytics</span> is Here.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-base text-gray-600 md:text-lg"
          >
            Flames.blue helps educators automate CO/PO attainment, visualize performance, and improve learning outcomes using data-driven insights.
          </motion.p>

          <motion.div variants={item} className="mx-auto mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/register"
              className="group inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:translate-y-[-1px] hover:bg-[#1e4fc0]"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              <Play className="mr-2 h-4 w-4" /> View Demo
            </a>
          </motion.div>

          {/* Floating icons */}
          <div className="pointer-events-none relative mx-auto mt-12 grid max-w-5xl grid-cols-3 gap-6 opacity-90">
            {[{ Icon: Brain, label: 'AI' }, { Icon: LineChart, label: 'Dashboards' }, { Icon: GraduationCap, label: 'Education' }].map(
              ({ Icon, label }, i) => (
                <motion.div
                  key={label}
                  variants={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, type: 'spring', stiffness: 120 }}
                  className="rounded-xl border border-blue-100/70 bg-white/60 p-4 backdrop-blur"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-violet-100">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700">{label}</p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
