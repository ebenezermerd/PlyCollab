import React from 'react'
import { ArrowRight } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <section className="py-20 relative" id="contact">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto glass p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Get in <span className="text-neon-green">Touch</span>
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md bg-dark-bg border border-gray-700 focus:outline-none focus:border-neon-green"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md bg-dark-bg border border-gray-700 focus:outline-none focus:border-neon-green"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 rounded-md bg-dark-bg border border-gray-700 focus:outline-none focus:border-neon-green"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-neon-green text-dark-bg px-6 py-3 rounded-md hover:bg-neon-green/90 transition-colors flex items-center justify-center gap-2"
            >
              Send Message <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

