"use client"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"
import { Badge } from "@/components/badge"
import Heading from "@/components/Heading"
import FramerWrapper from "@/components/FramerWrapper"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900 opacity-90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute top-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <FramerWrapper>
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="gap-1.5 py-1.5">
              <Mail className="w-4 h-4" />
              Get In Touch
            </Badge>
          </div>
        </FramerWrapper>

        <div className="flex flex-col gap-10 w-full">
          <FramerWrapper delay={0.1}>
            <Heading>Contact Me</Heading>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center mb-10">
              Have a question or want to work together? Feel free to reach out using the form below or through my social
              media channels.
            </p>
          </FramerWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <FramerWrapper delay={0.2} className="lg:col-span-1">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-950/80 via-blue-950/80 to-purple-950/80 border border-white/10 rounded-xl p-6 backdrop-blur-sm shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <a
                          href="mailto:contact@example.com"
                          className="text-white hover:text-cyan-400 transition-colors"
                        >
                          contact@example.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                        <Phone className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Phone</p>
                        <a href="tel:+1234567890" className="text-white hover:text-blue-400 transition-colors">
                          +123 456 7890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                        <MapPin className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p className="text-white">Kampala, Uganda</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-950/80 via-blue-950/80 to-purple-950/80 border border-white/10 rounded-xl p-6 backdrop-blur-sm shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>

                  <div className="grid grid-cols-3 gap-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-900/50 border border-white/5 hover:border-cyan-500/50 transition-colors group"
                    >
                      <Github className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      <span className="mt-2 text-xs text-gray-400 group-hover:text-white transition-colors">
                        GitHub
                      </span>
                    </a>

                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-900/50 border border-white/5 hover:border-blue-500/50 transition-colors group"
                    >
                      <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                      <span className="mt-2 text-xs text-gray-400 group-hover:text-white transition-colors">
                        LinkedIn
                      </span>
                    </a>

                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-900/50 border border-white/5 hover:border-purple-500/50 transition-colors group"
                    >
                      <Twitter className="h-6 w-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                      <span className="mt-2 text-xs text-gray-400 group-hover:text-white transition-colors">
                        Twitter
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </FramerWrapper>

            {/* Contact Form */}
            <FramerWrapper delay={0.3} className="lg:col-span-2">
              <ContactForm />
            </FramerWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

