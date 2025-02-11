import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';

const PersonalWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <span className="font-bold text-xl text-gray-900">Jesse Choe</span>
            <div className="space-x-6">
              <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#experience" className="text-gray-700 hover:text-gray-900">Experience</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <Image
            src="/jesse.jpeg"
            alt="Jesse Choe"
            width={128}
            height={128}
            className="rounded-full mx-auto mb-4 object-cover aspect-square"
          />
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Jesse Choe</h1>
          <p className="text-xl text-gray-700 mb-6">
            Co-founder & CEO @ Playdo.ai • LLM Reasoning Research @ UMD
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://x.com/jesse_choe10" className="text-gray-700 hover:text-gray-900">
              <Twitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jc10/" className="text-gray-700 hover:text-gray-900">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/jessechoe10" className="text-gray-700 hover:text-gray-900">
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Hey! I'm Jesse</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            I'm one of the founders of Playdo.ai and a researcher at the University of Maryland interested in LLM reasoning and code generation. One of the areas I'm super interested in is data-efficient alignment for LLMs reasoning about code and software engineering tasks.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Playdo, I'm working on building Agora, a marketplace where any human engineer can get paid to solve challenging SWE problems. At UMD, I'm working on creating synthetic reward functions and evals for reasoning.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Co-founder & CEO • Playdo.ai</h3>
              <p className="text-gray-700">2024 - Present</p>
              <p className="text-gray-700 mt-2">
                VC-backed startup building the future of software engineering and propelling reasoning models to AGI.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Researcher • University of Maryland</h3>
              <p className="text-gray-700">2024 - Present</p>
              <p className="text-gray-700 mt-2">
                Worked under Professor Dinesh Manocha for synthetic data generation for reasoning. Now, working with Professor Mohit Iyyer on synthetic reward functions for reasoning and Professor Furong Huang on evals for data-efficient alignment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Research Intern • Naval Research Lab</h3>
              <p className="text-gray-700">2023</p>
              <p className="text-gray-700 mt-2">
                Worked on contrastive learning for image-to-image translation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <a href="https://cerealcodes.org" className="block hover:opacity-80">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">CerealCodes</h3>
                <p className="text-gray-700">
                  Coding competition with ~1000 participants.
                </p>
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <a href="https://interview.playdo.ai" className="block hover:opacity-80">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">AI Interviewer</h3>
                <p className="text-gray-700">
                  Technical interview prep AI with ~200 users.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Email me if you're interested in chatting about anything from LLM reasoning to the future of software engineering!
          </p>
          <a 
            href="mailto:jesse@playdo.ai" 
            className="inline-flex items-center text-blue-700 hover:text-blue-900"
          >
            <Mail className="mr-2" size={20} />
            jesse@playdo.ai
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-700">
          © 2025 Jesse Choe. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;