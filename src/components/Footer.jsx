import React from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t bg-gray-950 text-gray-300">
      <div className="pointer-events-none absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-violet-600" />
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-gradient-to-br from-blue-600 to-violet-600" />
              <span className="text-lg font-semibold text-white">Flames.blue</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-gray-400">
              Measure Learning. Empower Outcomes.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-gray-400 hover:text-white" href="#features">Features</a></li>
              <li><a className="text-gray-400 hover:text-white" href="#demo">Demo</a></li>
              <li><a className="text-gray-400 hover:text-white" href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-gray-400 hover:text-white" href="#">Docs</a></li>
              <li><a className="text-gray-400 hover:text-white" href="#">GitHub</a></li>
              <li><a className="text-gray-400 hover:text-white" href="mailto:hello@flames.blue">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-xs text-gray-400">Flames.blue © 2025 — Empowering academic excellence through data.</p>
          <div className="flex items-center gap-4">
            <a aria-label="GitHub" href="#" className="rounded-md p-2 text-gray-400 transition hover:bg-white/5 hover:text-white"><Github className="h-4 w-4" /></a>
            <a aria-label="LinkedIn" href="#" className="rounded-md p-2 text-gray-400 transition hover:bg-white/5 hover:text-white"><Linkedin className="h-4 w-4" /></a>
            <a aria-label="Twitter" href="#" className="rounded-md p-2 text-gray-400 transition hover:bg-white/5 hover:text-white"><Twitter className="h-4 w-4" /></a>
            <a aria-label="Email" href="mailto:hello@flames.blue" className="rounded-md p-2 text-gray-400 transition hover:bg-white/5 hover:text-white"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
