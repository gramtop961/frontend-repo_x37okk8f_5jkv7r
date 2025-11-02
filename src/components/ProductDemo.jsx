import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ProductDemo() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section id="demo" ref={ref} className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
        >
          Experience the dashboard
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-gray-600"
        >
          A clean analytics workspace for CO/PO attainment, trends, and insights.
        </motion.p>
      </div>

      {/* MacBook style mockup with parallax */}
      <div className="relative">
        <motion.div style={{ y }} className="mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl border border-blue-100 bg-white/80 shadow-2xl backdrop-blur">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-blue-100/60 bg-gradient-to-r from-blue-50/60 to-violet-50/60 px-4 py-2 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>
            <span className="font-medium">Flames.blue – Attainment Dashboard</span>
            <div />
          </div>

          {/* Fake dashboard content */}
          <div className="grid h-full grid-cols-12 gap-4 p-4">
            <div className="col-span-12 md:col-span-8">
              <div className="h-56 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-violet-50" />
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="h-24 rounded-lg border border-blue-100 bg-white/70" />
                <div className="h-24 rounded-lg border border-blue-100 bg-white/70" />
                <div className="h-24 rounded-lg border border-blue-100 bg-white/70" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="h-32 rounded-lg border border-blue-100 bg-white/70" />
              <div className="mt-4 h-48 rounded-lg border border-blue-100 bg-white/70" />
              <div className="mt-4 h-24 rounded-lg border border-blue-100 bg-white/70" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-10 max-w-2xl text-center">
        <p className="text-gray-700">Experience your own academic intelligence system.</p>
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
