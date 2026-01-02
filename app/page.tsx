import ToolComponent from '@/components/tool/ToolComponent'

export const metadata = {
  title: 'BPM Tap Tempo - Find the Tempo of Any Song',
  description: 'Free online BPM tap tempo tool. Tap along with any song to find its beats per minute. Perfect for musicians, DJs, and music producers.',
}

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          BPM <span className="text-purple-600">Tap Tempo</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find the tempo of any song by tapping along with the beat. Simple, accurate, and free.
        </p>
      </div>
      <ToolComponent />
      <section className="mt-16 prose prose-purple max-w-none">
        <h2 className="text-2xl font-bold text-gray-900">What is BPM?</h2>
        <p className="text-gray-600">
          BPM stands for Beats Per Minute, a measurement of tempo in music. Knowing the BPM of a song helps musicians play at the correct speed, DJs mix tracks seamlessly, and producers create music with consistent timing.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8">How to Use</h2>
        <p className="text-gray-600">
          Simply tap the button in rhythm with the music you&apos;re listening to. After a few taps, the tool will calculate and display the BPM. The more taps you make, the more accurate the result.
        </p>
      </section>
    </main>
  )
}
