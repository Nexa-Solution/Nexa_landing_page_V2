import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Video, Globe, Palette, Code, Target, Users, Award, Zap, BarChart3, Rocket, Heart, Sparkles } from 'lucide-react';
import TeamSection from '../components/about/TeamSection';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: Video,
      title: 'Custom Software & Application Development',
      description: 'Empower your business with tailored web, mobile, and enterprise platforms designed for high performance and real-world impact.'
    },
    {
      icon: Globe,
      title: 'Data Analytics & Insights',
      description: 'Unlock actionable intelligence from your data, powering informed decisions and optimized business performance.'
    },
    {
      icon: Palette,
      title: 'Quality Assurance & Continuous Support',
      description: 'Deliver reliable, secure software with comprehensive testing and dedicated support for ongoing excellence and growth.'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Build user-friendly, responsive websites that look great and function seamlessly.'
    }
  ];

  const features = [
    { icon: Target, title: 'Expertise', description: 'Industry experts passionate about what they do' },
    { icon: Users, title: 'Tailored Solutions', description: 'Customized services for your specific needs' },
    { icon: Award, title: 'Quality Commitment', description: 'Excellence in every project we undertake' },
    { icon: Heart, title: 'Customer-Centric', description: 'Your success is our top priority' }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Nexa IT Solution</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empowering businesses with innovative digital solutions that enhance their online presence and drive growth.
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative backdrop-blur-lg bg-white/5 rounded-2xl p-8 mb-16 border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl" />
          <div className="relative">
            <Sparkles className="w-12 h-12 text-blue-400 mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-gray-300">
              Founded with a vision to bridge the gap between creativity and technology, Nexa IT Solution emerged from a passion for helping businesses thrive in the digital landscape. Our team comprises skilled professionals who bring a wealth of experience and expertise in their respective fields.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index }}
              className="relative backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all"
            >
              <service.icon className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="relative backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10"
          >
            <Rocket className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
            <p className="text-gray-400">
              To empower businesses through innovative digital solutions, building lasting relationships by delivering exceptional service and results that drive success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="relative backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10"
          >
            <BarChart3 className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Our Vision</h3>
            <p className="text-gray-400">
              We envision a future where every business has access to the tools and expertise needed to thrive in the digital age, continuously evolving our services to stay ahead of industry trends.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="relative backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all"
            >
              <feature.icon className="w-8 h-8 text-blue-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <TeamSection />
      </div>
    </div>
  );
};

export default AboutPage;