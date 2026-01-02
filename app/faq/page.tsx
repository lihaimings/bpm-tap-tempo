export const metadata = {
  title: 'FAQ - BPM Tap Tempo',
  description: 'Frequently asked questions about BPM Tap Tempo and how to use it effectively.',
}

const faqs = [
  { q: 'What is BPM?', a: 'BPM stands for Beats Per Minute. It measures the tempo or speed of music. A higher BPM means faster music.' },
  { q: 'How accurate is this tool?', a: 'The accuracy improves with more taps. We recommend at least 8-10 taps for the most accurate reading.' },
  { q: 'What BPM range does this tool support?', a: 'The tool supports BPM from 20 to 300, covering everything from very slow ambient music to fast electronic tracks.' },
  { q: 'Can I use this on mobile?', a: 'Yes! The tool is fully responsive and works great on smartphones and tablets.' },
  { q: 'Why does my BPM keep changing?', a: 'The BPM updates in real-time as you tap. Small variations in your tapping will cause fluctuations. Try to tap consistently.' },
  { q: 'What do the tempo names mean?', a: 'Tempo names like Largo, Andante, and Allegro are Italian musical terms that describe the speed of music. Largo is very slow, Andante is walking pace, and Allegro is fast.' },
  { q: 'Is this tool free?', a: 'Yes, BPM Tap Tempo is completely free to use with no limitations or sign-up required.' },
  { q: 'Can I use keyboard to tap?', a: 'Currently, you need to click or tap the button. Keyboard support may be added in future updates.' },
]

export default function FAQPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked <span className="text-purple-600">Questions</span></h1>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
            <h2 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h2>
            <p className="text-gray-600">{faq.a}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
