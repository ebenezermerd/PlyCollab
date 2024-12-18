import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We are <span className="text-neon-green">DevTeam</span>
            </h1>
            <p className="text-text-secondary text-lg mb-8">
              A group of passionate developers creating innovative web solutions for businesses worldwide.
            </p>
            <div className="flex gap-4">
              <Link
                to="/projects"
                className="bg-neon-green text-dark-bg px-6 py-3 rounded-md hover:bg-neon-green/90 transition-colors inline-flex items-center gap-2 no-underline"
              >
                Our Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="border border-neon-green text-neon-green px-6 py-3 rounded-md hover:bg-neon-green/10 transition-colors no-underline"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/team-photo.png"
              alt="DevTeam Group Photo"
              className="rounded-lg glass w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
