"use client"

import Image from "next/image"
import { projects } from "@/data"
import { PinContainer } from "./Pin"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"

const RecentProjects = () => {
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
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            A small selection of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              recent projects
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Check out some of my latest work. Each project showcases different skills and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-[28rem]"
              key={item.id}
            >
              <PinContainer>
                <div className="flex flex-col h-full">
                  {/* Project Image */}
                  <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20" />
                    <div className="absolute inset-0 backdrop-blur-[2px]" />
                    <Image
                      src={item.img || "/placeholder.svg"}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="object-cover w-full h-full transform transition-transform duration-500 group-hover/pin:scale-110"
                    />

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{item.title}</h3>

                    <p className="text-gray-300 text-sm flex-1 line-clamp-3 mb-4">{item.des}</p>

                    {/* Tech Stack */}
                    <div className="mt-auto">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          {item.iconLists.map((icon, index) => (
                            <div
                              key={index}
                              className={cn(
                                "border border-white/10 rounded-full bg-gray-900/80 w-8 h-8 flex justify-center items-center",
                                index > 0 && "-ml-2",
                              )}
                            >
                              <Image
                                src={icon || "/placeholder.svg"}
                                alt={`tech-${index}`}
                                height={20}
                                width={20}
                                className="p-1.5"
                              />
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 transition-colors"
                            aria-label="View Source Code"
                          >
                            <Github size={16} />
                          </a>

                          <a
                            href={item.demo || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 transition-colors"
                            aria-label="View Live Demo"
                          >
                            <ExternalLink size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentProjects

