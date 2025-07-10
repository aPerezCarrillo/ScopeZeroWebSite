export default function Contact() {
  return (
    <main className="min-h-screen p-12 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-xl space-y-4">
        <input type="text" name="name" placeholder="Your Name" className="w-full p-2 text-black" required />
        <input type="email" name="email" placeholder="Your Email" className="w-full p-2 text-black" required />
        <textarea name="message" placeholder="Your Message" className="w-full p-2 text-black" rows="5" required></textarea>
        <button type="submit" className="bg-white text-black px-4 py-2">Send</button>
      </form>
    </main>
  )
}