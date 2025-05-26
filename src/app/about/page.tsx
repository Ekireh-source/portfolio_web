"use client"

import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/badge";
import { Circle, Heart, User2, Code2, Briefcase, GraduationCap, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const hobbies = [
    { hobby: "Coding", icon: <Code2 className="h-5 w-5" /> },
    { hobby: "Playing Games", icon: <Circle className="h-5 w-5" /> },
    { hobby: "Watching Anime", icon: <Circle className="h-5 w-5" /> },
    { hobby: "Creating Cool Projects", icon: <Circle className="h-5 w-5" /> },
  ];

  const quickLinks = [
    { name: "GitHub", icon: <Github className="h-5 w-5" />, href: "https://github.com" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com" },
    { name: "Email", icon: <Mail className="h-5 w-5" />, href: "mailto:contact@example.com" },
  ];

  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "15+" },
  ];

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
            <User2 className="w-4 h-4" />
            About Me
          </Badge>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Software Engineer And{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                Web Developer
              </span>
              , <br />Based In Uganda.
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              I am a Full Stack Web Developer from Uganda. I&apos;m passionate about crafting web projects and
              contributing to open-source communities. I specialize in modern JavaScript frameworks and responsive
              CSS design, focusing on creating pixel-perfect, user-friendly interfaces. With strong attention to
              detail and efficient delivery, I build seamless web experiences that combine functionality with
              elegant design.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-8 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Aboutfooter />
            </div>
          </motion.div>

          {/* Hobbies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Heart className="h-6 w-6 text-red-400" />
              <h2 className="text-2xl font-bold text-white">Hobbies & Interests</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {hobbies.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect rounded-lg p-4 flex items-center gap-3"
                >
                  <div className="text-cyan-400">{item.icon}</div>
                  <span className="text-gray-200">{item.hobby}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-4 mt-12"
          >
            {quickLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect p-3 rounded-full hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
