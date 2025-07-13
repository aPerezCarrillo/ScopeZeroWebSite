export default function Contact() {
  return (
    <main className="min-h-screen p-12 bg-green-50 text-gray-900">
      <header className="mb-8">
        <a href="/" className="text-green-700">← Back to Home</a>
      </header>

      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">Let’s talk — we’d love to hear from you. We respond fast!</p>

      <form action="https://formspree.io/f/xldnqgyl" method="POST" className="max-w-xl space-y-4 mb-12">
        <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border border-gray-300" required />
        <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border border-gray-300" required />
        <textarea name="message" placeholder="Your Message" className="w-full p-3 border border-gray-300" rows="5" required></textarea>
        <button type="submit" className="bg-green-700 text-white px-6 py-3">Send</button>
      </form>

      
    </main>
  )
}