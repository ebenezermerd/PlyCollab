import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-dark-bg text-text-primary flex flex-col border border-white mx-10">
      <div className="fixed inset-0 bg-gradient-radial from-neon-green/20 to-transparent opacity-20 pointer-events-none" />
      <header className="sticky top-0 z-50 glass">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-neon-green no-underline hover:text-neon-green/90 transition-colors">
            DevTeam.
          </a>
          <div className="hidden md:flex gap-6">
            {['Home', 'About', 'Team', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="hover:text-neon-green transition-colors no-underline"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="/contact"
            className="bg-neon-green text-dark-bg px-4 py-2 rounded-md hover:bg-neon-green/90 transition-colors no-underline"
          >
            Get in touch
          </a>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-card-bg">
        <div className="container mx-auto px-4 py-8 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-neon-green">DevTeam.</h3>
              <p className="text-text-secondary">Building the future of web development.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-text-secondary">
                {['About', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`/${item.toLowerCase()}`} className="hover:text-neon-green no-underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-text-secondary">
                {['Blog', 'Case Studies', 'FAQs'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-neon-green no-underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {[Github, Linkedin, Twitter].map((Icon, index) => (
                  <a key={index} href="#" className="text-text-secondary hover:text-neon-green no-underline">
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
