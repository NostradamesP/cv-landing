import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs">
          © {new Date().getFullYear()} Eduardo Rojas Velasquez. All rights reserved.
        </p>
        <p className="text-xs flex items-center gap-1">
          Built with <Heart size={10} className="text-red-400" /> using React + Tailwind
        </p>
      </div>
    </footer>
  )
}
