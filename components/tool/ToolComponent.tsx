'use client'

import { useState, useCallback, useRef } from 'react'

export default function ToolComponent() {
  const [bpm, setBpm] = useState<number>(0)
  const [taps, setTaps] = useState<number[]>([])
  const [isActive, setIsActive] = useState(false)
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleTap = useCallback(() => {
    const now = Date.now()
    setIsActive(true)
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setIsActive(false)
    }, 2000)

    setTaps(prev => {
      const newTaps = [...prev, now].slice(-10)
      if (newTaps.length >= 2) {
        const intervals = []
        for (let i = 1; i < newTaps.length; i++) {
          intervals.push(newTaps[i] - newTaps[i - 1])
        }
        const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length
        const calculatedBpm = Math.round(60000 / avgInterval)
        setBpm(Math.min(Math.max(calculatedBpm, 20), 300))
      }
      return newTaps
    })
  }, [])

  const handleReset = () => {
    setTaps([])
    setBpm(0)
    setIsActive(false)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  const copyBpm = () => {
    navigator.clipboard.writeText(`${bpm} BPM`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getBpmCategory = () => {
    if (bpm === 0) return { label: 'Tap to start', color: 'text-gray-400' }
    if (bpm < 60) return { label: 'Largo', color: 'text-blue-600' }
    if (bpm < 80) return { label: 'Adagio', color: 'text-cyan-600' }
    if (bpm < 100) return { label: 'Andante', color: 'text-green-600' }
    if (bpm < 120) return { label: 'Moderato', color: 'text-yellow-600' }
    if (bpm < 140) return { label: 'Allegro', color: 'text-orange-600' }
    if (bpm < 180) return { label: 'Vivace', color: 'text-red-600' }
    return { label: 'Presto', color: 'text-purple-600' }
  }

  const category = getBpmCategory()

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-8 shadow-lg shadow-purple-100/50 border border-purple-100 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
          <span>🎵</span> BPM Tap Tempo
        </h2>
        
        <div className="mb-8">
          <div className={`text-7xl font-bold mb-2 transition-all ${isActive ? 'text-purple-600 scale-110' : 'text-gray-800'}`}>
            {bpm || '--'}
          </div>
          <div className="text-xl text-gray-500">BPM</div>
          <div className={`text-lg font-medium mt-2 ${category.color}`}>{category.label}</div>
        </div>

        <button
          onClick={handleTap}
          className={`w-48 h-48 rounded-full text-white text-2xl font-bold transition-all transform ${
            isActive 
              ? 'bg-purple-700 scale-95 shadow-lg shadow-purple-300' 
              : 'bg-purple-600 hover:bg-purple-700 hover:scale-105 shadow-xl shadow-purple-200'
          }`}
        >
          TAP
        </button>

        <div className="mt-6 text-sm text-gray-500">
          Taps: {taps.length} {taps.length > 0 && `• Last ${Math.min(taps.length, 10)} used`}
        </div>

        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={handleReset}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={copyBpm}
            disabled={bpm === 0}
            className="px-6 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {copied ? '✓ Copied!' : 'Copy BPM'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Largo', range: '40-60', desc: 'Very slow' },
          { label: 'Andante', range: '80-100', desc: 'Walking pace' },
          { label: 'Allegro', range: '120-140', desc: 'Fast & bright' },
          { label: 'Presto', range: '180+', desc: 'Very fast' },
        ].map((tempo, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-purple-100 text-center">
            <div className="font-bold text-purple-700">{tempo.label}</div>
            <div className="text-lg text-gray-800">{tempo.range}</div>
            <div className="text-sm text-gray-500">{tempo.desc}</div>
          </div>
        ))}
      </div>

      <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
        <p className="text-sm text-purple-700">
          <strong>Tip:</strong> Tap along with the beat of your music. The more taps, the more accurate the BPM calculation.
        </p>
      </div>
    </div>
  )
}
