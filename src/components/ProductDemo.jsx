import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ProductDemo() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.15])

  return (
    <section id="demo" ref={ref} className="relative mx-auto max-w-7xl px-6 py-24">
      {/* Background soft glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-[28rem] w-[90%] rounded-[40%]"
        style={{
          background: 'radial-gradient(closest-side, rgba(37,99,235,0.25), rgba(124,58,237,0.18), transparent)',
          filter: 'blur(60px)',
          opacity: glowOpacity,
        }}
      />

      <div className="mx-auto mb-10 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          Experience the dashboard
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-gray-300"
        >
          A clean analytics workspace for CO/PO attainment, trends, and insights.
        </motion.p>
      </div>

      {/* MacBook style mockup with parallax */}
      <div className="relative">
        <motion.div style={{ y }} className="mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            </div>
            <span className="font-medium">Flames.blue – Attainment Dashboard</span>
            <div />
          </div>

          {/* Fake dashboard content */}
          <div className="grid h-full grid-cols-12 gap-4 p-4">
            <div className="col-span-12 md:col-span-8">
              <div className="h-56 rounded-xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-violet-600/20" />
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="h-24 rounded-lg border border-white/10 bg-white/10" />
                <div className="h-24 rounded-lg border border-white/10 bg-white/10" />
                <div className="h-24 rounded-lg border border-white/10 bg-white/10" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="h-32 rounded-lg border border-white/10 bg-white/10" />
              <div className="mt-4 h-48 rounded-lg border border-white/10 bg-white/10" />
              <div className="mt-4 h-24 rounded-lg border border-white/10 bg-white/10" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-10 max-w-2xl text-center">
        <p className="text-gray-300">Experience your own academic intelligence system.</p>
        <a
          href="/register"
          className="mt-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-95"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
