import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-purple-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4"><span className="text-2xl">🎵</span><span className="font-bold text-xl text-purple-700">TapTempo</span></div>
            <p className="text-gray-600">Find the BPM of any song by tapping along to the beat.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link href="/how-to-use" className="text-gray-600 hover:text-purple-600">How to Use</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-purple-600">FAQ</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-purple-600">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-600 hover:text-purple-600">Privacy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-purple-600">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-purple-100 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} TapTempo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
