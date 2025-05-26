"use client"
import { Briefcase, Calendar, MapPin, Award, BookOpen, GraduationCap } from "lucide-react"
import { Badge } from "@/components/badge"
import Heading from "@/components/Heading"
import FramerWrapper from "@/components/FramerWrapper"
import { motion } from "framer-motion"

const EducationPage = () => {
  const educationData = [
    {
      period: "July 2021 - 2025",
      degree: "Bachelor of Electronics and Computer Engineering",
      institution: "Soroti University",
      location: "Uganda",
      description:
        "I hold a Bachelor's degree in Electronics and Computer Engineering from Soroti University, a reputable institution in Uganda. Throughout my academic journey, I gained a strong foundation in both the theoretical principles and practical applications of computer science and engineering, equipping me with the skills to tackle complex technical challenges and drive innovation in the field.",
      courses: ["Computer Science", "Electronics", "Digital Systems", "Software Engineering", "Network Security"],
      achievements: ["Dean's List", "Research Project Award"],
    },
    // You can add more education entries here
  ]

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900 opacity-90" />
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <FramerWrapper>
          <div className="flex mb-4">
            <Badge variant="secondary" className="gap-1.5 py-1.5">
              <GraduationCap className="w-4 h-4" />
              Education Journey
            </Badge>
          </div>
        </FramerWrapper>

        <div className="flex flex-col gap-10 w-full">
          <FramerWrapper delay={0.1}>
            <Heading>Academic Excellence</Heading>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center mb-10">
              My academic journey has equipped me with the knowledge and skills to excel in software development and
              engineering.
            </p>
          </FramerWrapper>

          <div className="w-full">
            {educationData.map((education, index) => (
              <FramerWrapper key={index} delay={0.2 + index * 0.1}>
                <div className="relative">
                  {/* Timeline line with gradient animation */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 md:left-1/4 md:ml-[-0.5px] overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"
                      animate={{
                        y: ["0%", "100%"],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>

                  <div className="flex flex-col md:flex-row">
                    {/* Time period - left side on desktop */}
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="flex items-center md:justify-end md:pr-8">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="glass-card p-4 hover:shadow-cyan-500/10 transition-all duration-300"
                        >
                          <div className="flex items-center gap-2 text-cyan-400">
                            <Calendar className="w-5 h-5" />
                            <span className="font-medium">{education.period}</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Animated timeline dot */}
                    <div className="absolute left-[-8px] top-6 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 md:left-1/4 md:ml-[-8px]">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white/50"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>

                    {/* Content - right side */}
                    <div className="md:w-3/4 pl-6 md:pl-8">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="glass-card p-6 hover:shadow-blue-500/10 transition-all duration-300"
                      >
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-2">
                          {education.degree}
                        </h3>

                        <div className="flex flex-wrap gap-4 mb-4">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 glass-effect px-3 py-1 rounded-full"
                          >
                            <BookOpen className="w-4 h-4 text-blue-400" />
                            <span className="text-gray-200">{education.institution}</span>
                          </motion.div>

                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 glass-effect px-3 py-1 rounded-full"
                          >
                            <MapPin className="w-4 h-4 text-purple-400" />
                            <span className="text-gray-200">{education.location}</span>
                          </motion.div>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">{education.description}</p>

                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                              <BookOpen className="w-5 h-5 text-cyan-400" />
                              Key Courses
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {education.courses.map((course, idx) => (
                                <motion.span
                                  key={idx}
                                  whileHover={{ scale: 1.05 }}
                                  className="glass-effect text-cyan-300 text-sm px-3 py-1 rounded-full hover:shadow-cyan-500/10 transition-all duration-300"
                                >
                                  {course}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                              <Award className="w-5 h-5 text-purple-400" />
                              Achievements
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {education.achievements.map((achievement, idx) => (
                                <motion.div
                                  key={idx}
                                  whileHover={{ scale: 1.05 }}
                                  className="flex items-center gap-2 glass-effect text-purple-300 text-sm px-3 py-1 rounded-full hover:shadow-purple-500/10 transition-all duration-300"
                                >
                                  <Award className="w-3 h-3" />
                                  {achievement}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </FramerWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationPage

