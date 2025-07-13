export default function About() {
  return (
    <main className="min-h-screen p-12 bg-green-50 text-gray-900">
      <header className="mb-8">
        <a href="/" className="text-green-700">← Back to Home</a>
      </header>
      <h1 className="text-4xl font-bold mb-4">About ScopeZero</h1>
      <p className="max-w-2xl mb-4">We’re a dynamic team combining deep supply chain & emissions expertise, real startup execution, and a fresh outside-in perspective. We believe that the same thinking that created the emissions problem can’t fix it — so we’re building ScopeZero to do it right.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Team</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
          <img src="/candace.png" alt="Candace Ngok" className="w-32 h-32 object-cover rounded-full mb-4" />
          <h2 className="text-xl font-semibold mb-2">Candace Ngok - CEO</h2>
          <p className="text-center text-sm">Commercial Cofounder: 10+ years in consulting, digital transformation and startups. Deep network in sustainability and supply chain innovation. LinkedIn: @candacengok</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
          <img src="/alfonso.png" alt="Alfonso Perez" className="w-32 h-32 object-cover rounded-full mb-4" />
          <h2 className="text-xl font-semibold mb-2">Alfonso Perez Carrillo - CTO</h2>
          <p className="text-center text-sm">Technical Cofounder: PhD in Computer Science, 15+ years leading data science teams in supply chain, compliance, and risk. AI auditing and research leader. LinkedIn: @alfonsoperezcarrillo</p>
        </div>
      </div>
    </main>
  )
}