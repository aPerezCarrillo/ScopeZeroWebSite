import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-gray-900 relative overflow-hidden">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">ScopeZero</h1>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      {/* Slide 1 */}
      <section className="flex flex-col items-center justify-center h-screen text-center relative overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative z-10">
          <h2 className="text-5xl font-bold mb-4">Decarbonize Your Supply Chain</h2>
          <p className="max-w-xl">We handle the complexity of emissions reporting, so you stay compliant, stress-free, and ahead of your net-zero goals.</p>
        </motion.div>
        <img src="/scopeZero_feel_image.png" alt="Feel graphic" className="absolute inset-0 w-full h-full object-contain opacity-10" />
 </section>

      {/* Slide 2 with animated background */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center bg-green-100 overflow-hidden">
        <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ duration: 1 }} className="relative z-10">
          <h2 className="text-5xl font-bold mb-4">90% of Corporate Emissions Are Scope 3</h2>
          <p className="max-w-xl">Regulation is tightening. Most suppliers still lack the tools, data accuracy, or incentives to report consistently — leaving you exposed and wasting time.</p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-green-400 animate-pulse opacity-10"></div>
        <img src="/slide2_back.png" alt="Feel graphic" className="absolute inset-0 w-full h-full object-contain opacity-10" />
  </section>

      {/* Slide 3 */}
      <section className="flex flex-col items-center justify-center h-screen text-center bg-green-50">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-5xl font-bold mb-4">We Simplify Supplier Emissions</h2>
          <p className="max-w-xl">Our AI-powered platform turns scattered supplier data into clear, auditable reports. Automate, engage, comply — stress-free.</p>
        </motion.div>
      </section>

      <footer className="text-center p-6 text-sm text-gray-500">
        © {new Date().getFullYear()} ScopeZero. All rights reserved.
      </footer>
    </main>
  )
}
