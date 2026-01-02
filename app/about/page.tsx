export const metadata = {
  title: 'About - BPM Tap Tempo',
  description: 'Learn about BPM Tap Tempo, a free online tool for finding the tempo of any song.',
}

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About <span className="text-purple-600">TapTempo</span></h1>
      <div className="prose prose-purple max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          BPM Tap Tempo is a free, easy-to-use tool designed for musicians, DJs, producers, and anyone who needs to find the tempo of a song quickly.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          We believe that music tools should be accessible to everyone. Our tap tempo tool provides accurate BPM detection without requiring any downloads or sign-ups.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Features</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Instant BPM calculation from your taps</li>
          <li>Tempo category display (Largo, Andante, Allegro, etc.)</li>
          <li>Copy BPM to clipboard with one click</li>
          <li>Works on desktop and mobile devices</li>
          <li>No registration required</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
        <p className="text-gray-600">
          Have questions or suggestions? We&apos;d love to hear from you. Reach out to us and help us improve this tool for the music community.
        </p>
      </div>
    </main>
  )
}
