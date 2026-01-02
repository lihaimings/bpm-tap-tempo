export const metadata = {
  title: 'Privacy Policy - BPM Tap Tempo',
  description: 'Privacy policy for BPM Tap Tempo.',
}

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy <span className="text-purple-600">Policy</span></h1>
      <div className="prose prose-purple max-w-none">
        <p className="text-gray-600 mb-6">Last updated: January 2026</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
        <p className="text-gray-600 mb-4">BPM Tap Tempo is designed with privacy in mind. We do not collect any personal information. All BPM calculations happen locally in your browser.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies</h2>
        <p className="text-gray-600 mb-4">We may use essential cookies to ensure the website functions properly. These cookies do not track your personal information.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
        <p className="text-gray-600 mb-4">We may use analytics services to understand how visitors use our site. These services collect anonymous usage data only.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
        <p className="text-gray-600 mb-4">Since we don&apos;t collect personal data, there is no personal information at risk. Your tapping data never leaves your device.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
        <p className="text-gray-600">If you have questions about this privacy policy, please contact us.</p>
      </div>
    </main>
  )
}
