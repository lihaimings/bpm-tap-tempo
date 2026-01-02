import Link from 'next/link'

export const metadata = {
  title: 'Blog - BPM Tap Tempo',
  description: 'Tips, guides, and articles about music tempo, BPM, and rhythm.',
}

const posts = [
  { slug: 'getting-started', title: 'Getting Started with BPM Tap Tempo', excerpt: 'Learn how to use our tap tempo tool to find the BPM of any song quickly and accurately.', date: '2026-01-02' },
]

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <article key={post.slug} className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-bold text-gray-900 hover:text-purple-600 transition-colors">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <p className="text-sm text-purple-600 mt-3">{post.date}</p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
