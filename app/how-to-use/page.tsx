export const metadata = {
  title: 'How to Use - BPM Tap Tempo',
  description: 'Learn how to use BPM Tap Tempo to find the tempo of any song quickly and accurately.',
}

export default function HowToUsePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">How to <span className="text-purple-600">Use</span></h1>
      <div className="space-y-8">
        <section className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Play Your Music</h2>
          <p className="text-gray-600">Start playing the song you want to find the BPM for. Make sure you can hear the beat clearly.</p>
        </section>
        <section className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Tap Along</h2>
          <p className="text-gray-600">Click or tap the large TAP button in rhythm with the beat of the music. Try to tap on every beat you hear.</p>
        </section>
        <section className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Read the BPM</h2>
          <p className="text-gray-600">After a few taps, the BPM will be calculated and displayed. The more taps you make, the more accurate the result.</p>
        </section>
        <section className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Accuracy</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Tap at least 8-10 times for best accuracy</li>
            <li>Try to tap consistently on the same beat</li>
            <li>If you make a mistake, use the Reset button and start over</li>
            <li>Focus on the kick drum or snare for clearer beats</li>
          </ul>
        </section>
        <section className="bg-purple-50 rounded-xl p-6 border border-purple-100">
          <h2 className="text-xl font-bold text-purple-700 mb-2">Pro Tip</h2>
          <p className="text-purple-600">For songs with complex rhythms, try tapping on the quarter notes (the main pulse) rather than every sound you hear.</p>
        </section>
      </div>
    </main>
  )
}
