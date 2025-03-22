"use client"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSectionGamingInspired() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-50 via-blue-50 to-purple-50 dark:from-cyan-950 dark:via-blue-950 dark:to-purple-900">
      {/* Gaming-inspired accent elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />

        {/* Animated accent for gaming vibe */}
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 mx-auto max-w-6xl gap-10 md:gap-16">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left flex-1 space-y-6"
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-400">Hello, my name is</h2>
            <h1 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mt-2">
              Akol Oscar Benjamin
            </h1>
          </div>

          <div className="font-medium text-lg sm:text-2xl text-gray-700 dark:text-gray-300">
            <div className="flex flex-wrap md:flex-col items-start">
              <span className="flex items-center">
                I am a Software Developer
                <span className="md:hidden">&nbsp;&</span>
              </span>
              <div className="flex items-center">
                <span className="hidden md:inline">&</span>
                <div className="ml-2 h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))]">
                  <TypeAnimation
                    sequence={["Freelancer", 1000, "Gamer", 1000, "Creator", 1000, "Student", 1000]}
                    className="font-medium text-lg sm:text-2xl text-blue-600 dark:text-blue-400"
                    speed={50}
                    repeat={Number.POSITIVE_INFINITY}
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-lg">
            Passionate about building beautiful, functional web applications that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <Button className="gap-2">
              <Download size={18} />
              Download CV
            </Button>
            <Button variant="outline" className="gap-2">
              Contact Me
            </Button>
          </div>

          <div className="flex gap-4 justify-center md:justify-start pt-2">
            <a
              href="https://github.com"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20 animate-pulse" />
            <div className="relative rounded-full border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden">
              <Image
                src="/heroimage.jpeg"
                alt="Akol Oscar Benjamin"
                width={300}
                height={300}
                className="rounded-full object-cover w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

