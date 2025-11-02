import React from 'react'
import { motion } from 'framer-motion'
import { Brain, BarChart3, Plug, ChevronRight, Shield, BookOpen } from 'lucide-react'

const featureCards = [
  {
    title: 'AI-Driven Outcome Mapping',
    desc: 'Automate CO–PO mapping using AI models trained on academic data.',
    Icon: Brain,
    color: 'from-blue-500/10 to-violet-500/10',
  },
  {
    title: 'Live Attainment Dashboards',
    desc: 'Real-time visualizations for departments and instructors.',
    Icon: BarChart3,
    color: 'from-blue-500/10 to-violet-500/10',
  },
  {
    title: 'Seamless Integration',
    desc: 'Works with existing course spreadsheets and marksheets.',
    Icon: Plug,
    color: 'from-blue-500/10 to-violet-500/10',
  },
]

const stepCards = [
  { step: '1', title: 'Upload your course data', desc: 'Import spreadsheets or connect your LMS to get started.' },
  { step: '2', title: 'Let Flames.blue analyze', desc: 'Our AI processes assessments and computes CO/PO attainment.' },
  { step: '3', title: 'View insights & improve', desc: 'Track gaps, optimize assessments, and close the loop.' },
]

export default function Features() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20" id="features">
      {/* Section header */}
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          Built for modern education analytics
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-gray-300"
        >
          Powerful features that help educators measure learning and empower outcomes.
        </motion.p>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {featureCards.map(({ title, desc, Icon, color }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.05 * i, type: 'spring', stiffness: 160, damping: 18 }}
            whileHover={{ y: -4, rotateX: 0 }}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-sm"
          >
            <div className={`absolute right-6 top-6 h-12 w-12 rounded-xl bg-gradient-to-br ${color}`} />
            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-violet-600/20 p-3">
                <Icon className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{desc}</p>
              <div className="mt-5 inline-flex items-center text-sm font-medium text-blue-300">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* How it works */}
      <div className="mt-20">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white"
        >
          How it works
        </motion.h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stepCards.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: i % 2 ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 160, damping: 18 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                  {s.step}
                </div>
                <h4 className="text-base font-semibold text-white">{s.title}</h4>
              </div>
              <p className="mt-3 text-sm text-gray-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-6 text-sm text-gray-300">
          <div className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-blue-300" /> Secure by design</div>
          <div className="inline-flex items-center gap-2"><BookOpen className="h-4 w-4 text-blue-300" /> Built for academics</div>
        </div>
      </div>

      {/* Pricing */}
      <div className="mt-24" id="pricing">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white"
        >
          Pricing
        </motion.h3>
        <p className="mt-2 text-gray-300">Simple plans that scale with your institution.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              name: 'Starter',
              price: 'Free',
              desc: 'For teachers getting started.',
              features: ['CO/PO mapping', 'Basic dashboards', 'CSV import'],
              highlight: false,
            },
            {
              name: 'Pro (Institution)',
              price: '$299/mo',
              desc: 'For departments & colleges.',
              features: ['Department dashboards', 'SIS integrations', 'Priority support'],
              highlight: true,
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              desc: 'Advanced needs & integrations.',
              features: ['Custom analytics', 'On-prem options', 'Dedicated SSO'],
              highlight: false,
            },
          ].map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 160, damping: 18 }}
              className={`relative rounded-2xl border p-6 backdrop-blur ${
                plan.highlight
                  ? 'border-blue-300/30 bg-white/10 shadow-lg shadow-blue-500/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              )}
              <h4 className="text-lg font-semibold text-white">{plan.name}</h4>
              <div className="mt-2 text-3xl font-bold text-white">{plan.price}</div>
              <p className="mt-1 text-sm text-gray-300">{plan.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-200">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hello@flames.blue?subject=Book%20a%20demo"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-95"
              >
                Book a Demo
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
