import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">My Startup</h1>
        <nav className="space-x-6">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center h-screen text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold mb-4">Slide 1: Your Big Idea</h2>
          <p className="max-w-xl">Explain your core concept in one clear sentence.</p>
        </motion.div>
      </section>

      <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-800">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold mb-4">Slide 2: The Problem</h2>
          <p className="max-w-xl">Describe the problem you are solving for your users.</p>
        </motion.div>
      </section>

      <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-900">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold mb-4">Slide 3: The Solution</h2>
          <p className="max-w-xl">Show how your startup solves the problem.</p>
        </motion.div>
      </section>

      <footer className="text-center p-6 text-sm text-gray-400">
        © {new Date().getFullYear()} My Startup. All rights reserved.
      </footer>
    </main>
  )
}
