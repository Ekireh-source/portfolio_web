"use client"

import Image from "next/image"
import { projects } from "@/data"
import { PinContainer } from "./Pin"
import { motion } from "framer-motion"
import { ExternalLink, Github, Code2, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/badge"

const RecentProjects = () => {
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
        <div className="flex mb-4">
          <Badge variant="secondary" className="gap-1.5 py-1.5">
            <Code2 className="w-4 h-4" />
            Featured Projects
          </Badge>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Recent{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl">
            Explore my latest work showcasing innovative solutions and technical expertise across various domains.
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
                  {/* Project Image with Hover Effect */}
                  <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4 group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20"
                      whileHover={{ opacity: 0.8 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div
                      className="absolute inset-0 backdrop-blur-[2px] group-hover:backdrop-blur-[4px] transition-all duration-300"
                    />
                    <Image
                      src={item.img || "/placeholder.svg"}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="object-cover w-full h-full transform transition-all duration-500 group-hover:scale-110"
                    />

                    {/* Enhanced Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    
                    {/* Project Links Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-white hover:shadow-purple-500/20 transition-all duration-300"
                      >
                        <Github size={16} />
                        <span className="text-sm">Source</span>
                      </motion.a>
                      {item.demo && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={item.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-white hover:shadow-cyan-500/20 transition-all duration-300"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white line-clamp-1 flex-1">{item.title}</h3>
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                    </div>

                    <p className="text-gray-300 text-sm flex-1 line-clamp-3 mb-4 leading-relaxed">
                      {item.des}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {item.iconLists.map((icon, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="glass-effect rounded-full w-8 h-8 flex justify-center items-center hover:shadow-cyan-500/20 transition-all duration-300"
                          >
                            <Image
                              src={icon || "/placeholder.svg"}
                              alt={`tech-${index}`}
                              height={20}
                              width={20}
                              className="p-1.5"
                            />
                          </motion.div>
                        ))}
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

