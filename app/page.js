"use client";

import React, { useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import { Github, Linkedin, Facebook, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Import Images
import wafiPic from "@/public/wafi.jpg";
import wafiImage from "@/public/wafi-1.jpeg";
import dbtLogo from "@/public/dbt.jpg";

export default function Home() {
  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "FullStack Web Developer",
      "Co Founder At DevBros Technology",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2owpa63",
        "template_8ozmwjr",
        form.current,
        "1lSpYHH3wtwyPOb9v"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  // Skills data
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 70 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Python", level: 70 },
    { name: "Flask", level: 75 },
    { name: "Git", level: 80 },
  ];

  return (
    <main className="font-sans bg-gray-950 text-gray-200">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen py-24 md:py-0 px-4">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12">
          {/* Left: Intro */}
          <motion.div
            className="text-center md:text-left space-y-6 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Hi, I'm <span className="text-blue-400">Wafi Hasan</span>
            </h2>
            <h3 className="text-2xl text-gray-400 h-10 min-h-[2.5rem]">
              {text}
              <Cursor cursorColor="#60a5fa" />
            </h3>
            <p className="text-lg text-gray-400">
              Transforming ideas into powerful, user-friendly digital
              experiences.
            </p>

            <div className="flex justify-center md:justify-start gap-6 pt-4">
              <a
                href="https://github.com/wafi2010"
                target="_blank"
                aria-label="Github profile"
              >
                <Github className="w-7 h-7 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/wafi-hasan-425b76348/"
                target="_blank"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-7 h-7 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/wafi.hasan.456696"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook profile"
              >
                <Facebook className="w-7 h-7 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right: Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-gray-700">
              <Image
                src={wafiPic}
                alt="Wafi Hasan"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-900 py-24 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side: Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-80 h-96 overflow-hidden rounded-lg shadow-xl">
              <Image
                src={wafiImage}
                alt="Wafi Hasan"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>

          {/* Right side: About text */}
          <motion.div
            className="md:w-1/2 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-bold text-white">About Me</h1>
            <p className="text-lg leading-relaxed text-gray-400">
              As a passionate full-stack web developer, I thrive on turning
              creative ideas into robust and complete web applications. My
              expertise spans both the front end, where I craft intuitive and
              engaging user interfaces with modern tools like Next.js, React,
              and Tailwind CSS, and the back end, where I build scalable
              server-side logic and APIs using Node.js, Express, and Python.
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              With a focus on performance and clean code, I build end-to-end
              solutions that are not only powerful and efficient but also a joy
              to use. I am always eager to collaborate on projects that solve
              real-world problems and make a meaningful impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 bg-gray-950">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-white mb-4">My Skills</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Here are the technologies and tools I work with on a regular
              basis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gray-900" id="contact">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Contact Me</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Feel free to reach out for collaborations or just to say hi!
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="md:w-1/2 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
                <p className="text-gray-400">
                  I'm currently looking for new opportunities. Whether you have
                  a question or just want to connect, I'll do my best to get
                  back to you!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">wafihasan2010@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">+880 1761199854</span>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-white mb-4">
                  I currently work this company
                </h3>
                <div className="flex gap-6 items-center">
                  <a href="https://devbrostechnology.vercel.app">
                    <Image
                      src={dbtLogo}
                      alt="DevBros Technology Logo"
                      width={40}
                      height={40}
                      className="rounded-full"
                    ></Image>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
