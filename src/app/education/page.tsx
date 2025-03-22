"use client"
import { Briefcase, Calendar, MapPin, Award, BookOpen } from "lucide-react"
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
          <div className="flex mb-4">
            <Badge variant="secondary" className="gap-1.5 py-1.5">
              <Briefcase className="w-4 h-4" />
              Education
            </Badge>
          </div>
        </FramerWrapper>

        <div className="flex flex-col gap-10 w-full">
          <FramerWrapper delay={0.1}>
            <Heading>My Education</Heading>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center mb-10">
              My academic journey has equipped me with the knowledge and skills to excel in software development and
              engineering.
            </p>
          </FramerWrapper>

          <div className="w-full">
            {educationData.map((education, index) => (
              <FramerWrapper key={index} delay={0.2 + index * 0.1}>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 rounded-full md:left-1/4 md:ml-[-0.5px]" />

                  <div className="flex flex-col md:flex-row">
                    {/* Time period - left side on desktop */}
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="flex items-center md:justify-end md:pr-8">
                        <div className="bg-gradient-to-r from-cyan-950/90 via-blue-950/90 to-purple-950/90 border border-white/10 rounded-xl p-4 backdrop-blur-sm shadow-lg">
                          <div className="flex items-center gap-2 text-cyan-400">
                            <Calendar className="w-5 h-5" />
                            <span className="font-medium">{education.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-[-8px] top-6 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 md:left-1/4 md:ml-[-8px]">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white/50"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </div>

                    {/* Content - right side */}
                    <div className="md:w-3/4 pl-6 md:pl-8">
                      <div className="bg-gradient-to-r from-cyan-950/80 via-blue-950/80 to-purple-950/80 border border-white/10 rounded-xl p-6 backdrop-blur-sm shadow-lg">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-2">
                          {education.degree}
                        </h3>

                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center gap-1 text-gray-300">
                            <BookOpen className="w-4 h-4 text-blue-400" />
                            <span>{education.institution}</span>
                          </div>

                          <div className="flex items-center gap-1 text-gray-300">
                            <MapPin className="w-4 h-4 text-purple-400" />
                            <span>{education.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-6">{education.description}</p>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Key Courses</h4>
                            <div className="flex flex-wrap gap-2">
                              {education.courses.map((course, idx) => (
                                <span key={idx} className="bg-white/10 text-cyan-300 text-sm px-3 py-1 rounded-full">
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Achievements</h4>
                            <div className="flex flex-wrap gap-2">
                              {education.achievements.map((achievement, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-1 bg-white/10 text-purple-300 text-sm px-3 py-1 rounded-full"
                                >
                                  <Award className="w-3 h-3" />
                                  {achievement}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
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

