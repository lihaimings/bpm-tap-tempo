export const metadata = {
  title: 'Terms of Service - BPM Tap Tempo',
  description: 'Terms of service for BPM Tap Tempo.',
}

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of <span className="text-purple-600">Service</span></h1>
      <div className="prose prose-purple max-w-none">
        <p className="text-gray-600 mb-6">Last updated: January 2026</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
        <p className="text-gray-600 mb-4">By using BPM Tap Tempo, you agree to these terms of service. If you do not agree, please do not use the service.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use of Service</h2>
        <p className="text-gray-600 mb-4">BPM Tap Tempo is provided free of charge for personal and commercial use. You may use the tool to find the tempo of music for any purpose.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disclaimer</h2>
        <p className="text-gray-600 mb-4">The BPM calculations are estimates based on your tapping input. We do not guarantee 100% accuracy. The tool is provided &quot;as is&quot; without warranties of any kind.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
        <p className="text-gray-600 mb-4">We are not liable for any damages arising from the use of this tool. Use it at your own discretion.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
        <p className="text-gray-600">We may update these terms at any time. Continued use of the service constitutes acceptance of any changes.</p>
      </div>
    </main>
  )
}
