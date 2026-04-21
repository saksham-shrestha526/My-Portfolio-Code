import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ArrowRight, Github, Linkedin, Layout, Server, Database, 
  Code2, ArrowUpRight, Briefcase, Code, Zap, Globe, Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter
} from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const skills = [
    { name: 'Frontend Development', level: 80, icon: Layout },
    { name: 'Backend Development', level: 65, icon: Server },
    { name: 'Database Design', level: 70, icon: Database },
    { name: 'UI/UX Design', level: 85, icon: Code2 },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      tags: ['React', 'Node.js', 'Stripe', 'Tailwind'],
      description: 'A high-performance online store built with React, Node.js, and MongoDB. Features real-time inventory and secure payments.',
    },
    {
      title: 'AI Task Manager',
      tags: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL'],
      description: 'Intelligent productivity tool using OpenAI API to prioritize tasks and suggest workflows based on user behavior.',
    },
    {
      title: 'Real-time Dashboard',
      tags: ['D3.js', 'Socket.io', 'React'],
      description: 'Interactive analytics dashboard for IoT devices with live data visualization using D3.js and WebSockets.',
    },
    {
      title: 'Social Media App',
      tags: ['React Native', 'Firebase', 'Redux'],
      description: 'Full-featured social networking application with real-time chat, image uploads, and dynamic feed.',
    },
  ];

  const journey = [
    {
      year: '2026 - Present',
      title: 'Computer Science with AI',
      org: 'Coventry University(UK)',
      desc: 'Developing programming, problem-solving, and AI skills through coursework, projects, and continuous learning initiatives.',
      side: 'left',
    },
    {
      year: '2023 - 2025',
      title: 'Fullstack Development Skills',
      org: 'Academic Projects',
      desc: 'Developing frontend and backend skills through coursework and practical projects.',
      side: 'right',
    },
    {
      year: '2021 - 2022',
      title: 'Web Development Skills',
      org: 'Self Learning',
      desc: 'Focused on frontend development, UI/UX design, and creating responsive and user-friendly web interfaces.',
      side: 'left',
    },
  ];

  const services = [
    { title: 'Web Development', icon: Code, desc: 'Building high-performance, scalable web applications using modern frameworks and best practices.' },
    { title: 'UI/UX Design', icon: Layout, desc: 'Creating intuitive and visually stunning user interfaces that provide exceptional user experiences.' },
    { title: 'Performance Optimization', icon: Zap, desc: 'Analyzing and optimizing application performance for lightning-fast load times and smooth interactions.' },
    { title: 'API Integration', icon: Globe, desc: 'Seamlessly integrating third-party APIs and building robust backend services for data management.' },
  ];

  return (
    <div className="bg-dark text-white min-h-screen">
      {/* Navbar */}
      <nav className={cn(
        "fixed top-0 left-0 w-full z-50 border-b border-white/10 transition-all duration-150",
        scrolled ? "bg-dark/80 backdrop-blur-lg py-4" : "bg-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-gradient tracking-tighter hover:scale-110 transition-transform duration-200">
            WAG
          </a>

          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="nav-link text-sm font-bold text-muted hover:text-brand transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-150 group-hover:w-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-dark border-b border-white/5 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-muted hover:text-brand"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '0.7s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold tracking-widest uppercase mb-6">
                Fullstack Developer & Designer
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                <span className="text-gradient cursor-default hover:text-purple-400 transition-colors duration-200">
                  Saksham Shrestha
                </span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted mb-10 leading-relaxed">
                Developing web applications using modern technologies while improving skills in frontend, backend, and UX.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="#projects" className="px-10 py-4 bg-brand text-white rounded-full font-bold flex items-center gap-2 group transition-all hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(125,125,255,0.6)] active:scale-95">
                  View My Work
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
                <a href="#contact" className="px-10 py-4 border border-white/10 text-white rounded-full font-bold transition-all hover:scale-105 hover:-translate-y-1 hover:bg-white/10 active:scale-95">
                  Let's Talk
                </a>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-10 flex gap-6 justify-center"
              >
                <motion.a 
                  href="https://github.com" 
                  target="_blank" 
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-4 bg-white/5 border border-white/10 rounded-full text-muted hover:text-brand hover:border-brand/50 transition-all"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  className="p-4 bg-white/5 border border-white/10 rounded-full text-muted hover:text-brand hover:border-brand/50 transition-all"
                >
                  <Linkedin size={24} />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-dark relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient hover:text-purple-400 transition-colors duration-200 cursor-default">
                  About Me
                </h2>
                <p className="text-lg text-muted leading-relaxed">
                  Myself Saksham Shrestha, a passionate developer dedicated to building high-quality web applications.
                  My goal is to solve problems with simple and effective solutions while continuously improving my skills.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 justify-center">
                <div>
                  <h4 className="text-brand font-bold text-3xl mb-1">5+</h4>
                  <p className="text-muted text-sm uppercase tracking-widest font-semibold">Projects Completed</p>
                </div>
                <div>
                  <h4 className="text-brand font-bold text-3xl mb-1">3+</h4>
                  <p className="text-muted text-sm uppercase tracking-widest font-semibold">Happy Clients</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-muted italic border-l-2 border-brand pl-6 text-lg text-left">
                  "Passionate about continuous learning and applying technology to solve real-world challenges."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-dark relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4 text-gradient hover:text-purple-400 transition-colors duration-200 cursor-default"
              >
                My Skills
              </motion.h2>
              <p className="text-muted max-w-xl mx-auto">
                Actively learning and improving technical skills through coursework and personal projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, idx) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="skill-card p-6 rounded-2xl bg-card border border-white/5 transition-all group cursor-pointer hover:-translate-y-2 hover:scale-[1.02] hover:border-brand/50 hover:shadow-[0_10px_30px_-10px_rgba(125,125,255,0.3)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-white/5 text-brand group-hover:bg-brand group-hover:text-white transition-all">
                      <skill.icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-muted">Expertise</span>
                      <span className="text-brand">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-brand rounded-full shadow-[0_0_10px_rgba(125,125,255,0.5)]"
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-dark relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold mb-4 text-gradient hover:text-purple-400 transition-colors duration-200 cursor-default"
                >
                  My Projects
                </motion.h2>
                <p className="text-muted max-w-xl">
                  Projects completed through coursework, personal experiments, and hands-on learning.
                </p>
              </div>
              <a href="https://github.com" target="_blank" className="flex items-center gap-2 text-brand font-semibold group hover:scale-105 transition-transform">
                View All Projects
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="project-card group relative bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-brand/30 transition-all cursor-pointer hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]"
                >
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-brand/10 text-brand text-[10px] font-medium rounded-full border border-brand/20">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-brand transition-colors">{project.title}</h3>
                    <p className="text-muted leading-relaxed mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      <a href="https://github.com/saksham-shrestha526" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-brand transition-colors">
                        <Github size={18} /> GitHub
                      </a>
                      <a href="#" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-brand transition-colors">
                        <ArrowUpRight size={18} /> Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section id="journey" className="py-24 bg-dark relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4 text-gradient hover:text-purple-400 transition-colors duration-200 cursor-default"
              >
                My Journey
              </motion.h2>
              <p className="text-muted max-w-xl mx-auto">
                A timeline of my skills, learning, and achievements.
              </p>
            </div>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand/50 via-purple-500/50 to-transparent hidden md:block"></div>

              <div className="space-y-10">
                {journey.map((item, idx) => (
                  <motion.div 
                    key={item.year}
                    initial={{ opacity: 0, x: item.side === 'left' ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={cn(
                      "journey-item flex flex-col md:flex-row items-center gap-6",
                      item.side === 'left' ? "md:flex-row-reverse" : ""
                    )}
                  >
                    <div className={cn(
                      "w-full md:w-1/2",
                      item.side === 'left' ? "md:text-left" : "md:text-right"
                    )}>
                      <div className={cn(
                        "p-6 rounded-2xl bg-card border border-white/5 transition-all group cursor-pointer hover:scale-[1.02] hover:border-brand/40",
                        item.side === 'left' ? "hover:-translate-x-1" : "hover:translate-x-1"
                      )}>
                        <span className="text-brand font-mono text-xs mb-1 block">{item.year}</span>
                        <h3 className="text-xl font-bold mb-1 group-hover:text-brand transition-colors">{item.title}</h3>
                        <p className="text-white/80 font-medium mb-3 text-sm">{item.org}</p>
                        <p className="text-muted leading-relaxed text-sm">{item.desc}</p>
                      </div>
                    </div>
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-brand text-white shadow-[0_0_20px_rgba(125,125,255,0.4)]">
                      <Briefcase size={20} />
                    </div>
                    <div className="hidden md:block w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-dark relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4 text-gradient hover:text-purple-400 transition-colors duration-200 cursor-default"
              >
                My Services
              </motion.h2>
              <p className="text-muted max-w-xl mx-auto">
                Providing comprehensive digital solutions tailored to your specific needs and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -10, zIndex: 10 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="service-card p-8 rounded-2xl bg-card border border-white/5 transition-all group cursor-pointer hover:border-brand/50 hover:shadow-[0_20px_40px_-20px_rgba(125,125,255,0.3)]"
                >
                  <div className="p-3 rounded-xl bg-white/5 text-brand group-hover:bg-brand group-hover:text-white transition-all w-fit mb-6">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors">{service.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-dark relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4 text-gradient hover:text-purple-400 transition-colors duration-200 cursor-default"
              >
                Contact Me
              </motion.h2>
              <p className="text-muted max-w-xl mx-auto">
                Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <a href="mailto:sakshamshrestha526@gmail.com" className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="p-3 rounded-xl bg-white/5 text-brand mb-3 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-200">
                    <Mail size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-brand transition-colors duration-200">Email Me</h3>
                  <p className="text-xs text-muted mb-3">sakshamshrestha526@gmail.com</p>
                  <div className="w-full h-[1px] bg-white/10 group-hover:bg-brand/50 transition-colors duration-200"></div>
                </a>
                <a href="tel:+977 9824223305" className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="p-3 rounded-xl bg-white/5 text-purple-400 mb-3 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-200">
                    <Phone size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-brand transition-colors duration-200">Call Me</h3>
                  <p className="text-xs text-muted mb-3">+977 9824223305</p>
                  <div className="w-full h-[1px] bg-white/10 group-hover:bg-brand/50 transition-colors duration-200"></div>
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=Hetauda-07,Nagswoti" target="_blank" className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="p-3 rounded-xl bg-white/5 text-emerald-400 mb-3 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-200">
                    <MapPin size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-brand transition-colors duration-200">Location</h3>
                  <p className="text-xs text-muted mb-3">Hetauda-07, Nagswoti</p>
                  <div className="w-full h-[1px] bg-white/10 group-hover:bg-brand/50 transition-colors duration-200"></div>
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-2xl bg-card border border-white/5 relative"
              >
                {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-card rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10"
                  >
                    <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4 border border-emerald-500/30">
                      <Send size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-1">Message Sent!</h3>
                    <p className="text-muted text-sm">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    <button onClick={() => setFormStatus('idle')} className="mt-6 text-brand font-semibold hover:underline text-sm">Send another message</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-muted ml-1">Name</label>
                        <input required type="text" placeholder="Your Name" className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all placeholder:text-white/20 text-sm" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-muted ml-1">Email</label>
                        <input required type="email" placeholder="Your Email" className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all placeholder:text-white/20 text-sm" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-muted ml-1">Message</label>
                      <textarea required rows={4} placeholder="Your Message" className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all placeholder:text-white/20 resize-none text-sm"></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'sending'}
                      className="w-full py-4 bg-brand text-white rounded-xl font-bold flex items-center justify-center gap-3 group transition-all hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(125,125,255,0.5)] hover:-translate-y-0.5 active:scale-[0.98] text-sm disabled:opacity-50"
                    >
                      {formStatus === 'sending' ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-dark border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <a href="#home" className="text-2xl font-bold text-gradient tracking-tighter">WAG</a>
              <p className="text-muted text-sm max-w-xs text-center md:text-left leading-relaxed">
                Crafting high-performance digital experiences with passion and precision.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-6">
                <a href="https://facebook.com" target="_blank" className="text-muted hover:text-brand hover:scale-125 hover:-translate-y-1 transition-all">
                  <Facebook size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" className="text-muted hover:text-brand hover:scale-125 hover:-translate-y-1 transition-all">
                  <Instagram size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" className="text-muted hover:text-brand hover:scale-125 hover:-translate-y-1 transition-all">
                  <Twitter size={24} />
                </a>
              </div>
              <div className="text-muted text-sm">
                © {new Date().getFullYear()} WAG Portfolio. All rights reserved.
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest font-medium">
            <div className="flex gap-8">
              <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
