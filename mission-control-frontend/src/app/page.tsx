"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Rocket, 
  Users, 
  Satellite, 
  HardDrive, 
  BarChart2, 
  Monitor, 
  Globe, 
  Shield, 
  Award, 
  Settings, 
  ExternalLink,
  Star,
  BookOpen,
  MessageSquare,
  CheckCircle
} from "lucide-react";

// Animation variants
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.2 } },
};

const staggerItems = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};



export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState("mission");

  useEffect(() => {
    // Set dark mode
    document.documentElement.classList.add("dark");
    
    // Testimonial rotation
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  // Feature cards with expanded details
  const features = [
    { 
      title: "Mission Control", 
      description: "Plan, execute, and monitor space missions with unprecedented precision", 
      icon: Rocket,
      details: "Comprehensive mission planning tools, real-time monitoring dashboards, and automated alert systems. Supports multi-stage missions with dependency tracking and mission parameter adjustments on the fly."
    },
    { 
      title: "Team Collaboration", 
      description: "Seamless coordination across mission teams worldwide", 
      icon: Users,
      details: "Role-based access control, real-time communication channels, shared workspaces, and mission logs. Integrated video conferencing with mission-critical data overlays."
    },
    { 
      title: "Satellite Management", 
      description: "Track and control orbital assets with precision", 
      icon: Satellite,
      details: "Real-time telemetry, orbital trajectory visualization, collision avoidance systems, and scheduled maintenance tracking. Supports constellations with up to 10,000 individual satellites."
    },
    { 
      title: "Surface Operations", 
      description: "Deploy and direct rovers, landers, and ground equipment", 
      icon: HardDrive,
      details: "Autonomous and manual control modes, terrain mapping integration, sample collection planning, and equipment diagnostics. Includes offline mode for high-latency environments."
    },
    { 
      title: "Advanced Analytics", 
      description: "Process mission data with AI-powered insights", 
      icon: BarChart2,
      details: "Real-time data processing, anomaly detection, predictive maintenance algorithms, and custom report generation. Supports exporting to standard scientific formats."
    },
    { 
      title: "3D Visualization", 
      description: "Interactive 3D representations of missions and assets", 
      icon: Monitor,
      details: "High-fidelity models, customizable views, augmented reality support, and timeline scrubbing for historical analysis. Compatible with VR headsets for immersive mission reviews."
    },
    { 
      title: "Global Network", 
      description: "Connect with ground stations and data centers worldwide", 
      icon: Globe,
      details: "Automated handoffs between ground stations, prioritized bandwidth allocation, and redundant communication paths. Includes weather impact forecasting for communication planning."
    },
    { 
      title: "Security Framework", 
      description: "Military-grade protection for sensitive mission data", 
      icon: Shield,
      details: "End-to-end encryption, multi-factor authentication, intrusion detection systems, and comprehensive audit logs. Compliant with international space security standards."
    },
  ];

  // Updated team data with real software engineering students
  const team = [
    { 
      name: "Taqi Med Chadi", 
      role: "Software Engineering Student", 
      bio: "Software Engineering student passionate about backend development and system architecture. Currently learning modern web technologies and database design.",
      achievement: "Contributed to the mission control backend development and API integration for the team project.",
      image: "/team/chadi.jpeg"
    },
    { 
      name: "Chaymae Bouazza", 
      role: "Software Engineering Student", 
      bio: "Software Engineering student with a focus on frontend development and user interface design. Enjoys creating responsive and user-friendly web applications.",
      achievement: "Designed and developed the user interface components and improved the overall user experience of the application.",
      image: "/team/chaymae.jpeg"
    },
    { 
      name: "Imane Benabbou", 
      role: "Software Engineering Student", 
      bio: "Software Engineering student interested in data processing and software testing. Learning about data structures, algorithms, and quality assurance practices.",
      achievement: "Implemented data validation features and contributed to the testing framework for the mission control system.",
      image: "/team/imane.jpeg"
    },
    { 
      name: "Saad Alaoui Sossé", 
      role: "Software Engineering Student", 
      bio: "Software Engineering student exploring cloud technologies and deployment strategies. Interested in DevOps practices and system administration.",
      achievement: "Set up the development environment and deployment pipeline, ensuring smooth collaboration and code integration.",
      image: "/team/saad.jpeg"
    },
  ];

  // Enhanced testimonials with company info and specific use cases
  const testimonials = [
    { 
      quote: "SMC transformed how we manage our constellation of Earth observation satellites. The intuitive interface and powerful predictive capabilities have reduced our operational overhead by 35% while improving response times to critical events.", 
      name: "Dr. Elena Vega", 
      role: "Head of Operations, StellarView Inc.",
      company: "StellarView Inc.",
      companyDescription: "Leading provider of high-resolution Earth imagery with a constellation of 24 satellites",
      image: "/testimonials/elena.jpg"
    },
    { 
      quote: "As commanders of the first commercial lunar habitat, we needed mission control software that could handle everything from life support monitoring to surface expeditions. SMC delivered beyond our expectations with reliability that's quite literally mission-critical.", 
      name: "Captain Ray Silver", 
      role: "Lunar Outpost Commander, Artemis Habitats",
      company: "Artemis Habitats",
      companyDescription: "Operators of the first permanent commercial lunar research base",
      image: "/testimonials/ray.jpg"
    },
    { 
      quote: "The satellite management features in SMC helped us coordinate the largest ever deployment of atmospheric monitoring microsats. The collision avoidance system alone saved us from two potential disasters.", 
      name: "Ming Zhao", 
      role: "CTO, ClimateOrbit",
      company: "ClimateOrbit",
      companyDescription: "Global climate monitoring network utilizing 120+ microsatellites",
      image: "/testimonials/ming.jpg"
    },
    { 
      quote: "SMC's data integration capabilities have revolutionized how we process the terabytes of astronomical data our deep space telescope collects daily. The AI-assisted anomaly detection has already led to two unexpected discoveries.", 
      name: "Dr. James Kepler", 
      role: "Research Director, DeepCosmos Foundation",
      company: "DeepCosmos Foundation",
      companyDescription: "Non-profit operating three space-based astronomical observatories",
      image: "/testimonials/james.jpg"
    },
  ];

  // Case studies with detailed mission information
  const caseStudies = [
    {
      title: "LUNAR-1 Habitat Deployment",
      client: "International Space Authority",
      description: "Coordinated the deployment of the first permanent lunar habitat using SMC's mission planning and surface operations modules.",
      stats: [
        { label: "Mission Duration", value: "547 days" },
        { label: "Assets Coordinated", value: "17" },
        { label: "Data Processed", value: "142 TB" },
      ],
      outcome: "Successful establishment of humanity's first permanent lunar presence, completed 36 days ahead of schedule and 12% under budget.",
      image: "/case-studies/lunar-habitat.jpg"
    },
    {
      title: "STARNET Constellation Deployment",
      client: "Global Communications Network",
      description: "Managed the staged deployment of 120 communications satellites into precise orbital configurations.",
      stats: [
        { label: "Satellites Deployed", value: "120" },
        { label: "Orbital Insertions", value: "98.7% accuracy" },
        { label: "Network Uptime", value: "99.9992%" },
      ],
      outcome: "Created the highest-density satellite network to date, providing global high-speed internet access to previously unreachable regions.",
      image: "/case-studies/satellite-constellation.jpg"
    },
    {
      title: "MARS PATHFINDER II",
      client: "National Space Research Center",
      description: "End-to-end mission management for the second generation of autonomous Mars rovers exploring the Valles Marineris region.",
      stats: [
        { label: "Surface Area Mapped", value: "1,240 km²" },
        { label: "Samples Analyzed", value: "847" },
        { label: "New Discoveries", value: "13" },
      ],
      outcome: "Discovery of evidence suggesting periodic liquid water flows, dramatically changing our understanding of modern Mars.",
      image: "/case-studies/mars-rover.jpg"
    },
  ];

  // Mission types for feature showcase tab
  const missionTypes = [
    {
      title: "Satellite Deployment",
      description: "Launch and establish satellites in precise orbits with automated deployment sequences and confirmation protocols.",
      icon: Satellite,
    },
    {
      title: "Orbital Maintenance",
      description: "Schedule and execute station-keeping maneuvers, debris avoidance, and routine maintenance tasks.",
      icon: Settings,
    },
    {
      title: "Planetary Exploration",
      description: "Manage rover and lander missions with surface navigation, sample collection, and analysis capabilities.",
      icon: Globe,
    },
    {
      title: "Space Telescopes",
      description: "Coordinate observation schedules, data collection, and transmission for orbital observatories.",
      icon: Star,
    },
    {
      title: "Crewed Missions",
      description: "Support human spaceflight with life support monitoring, activity scheduling, and emergency protocols.",
      icon: Users,
    },
    {
      title: "Space Station Management",
      description: "Comprehensive tools for orbital habitat operations, resupply coordination, and research management.",
      icon: HardDrive,
    },
  ];

  // Pricing tiers
  const pricingTiers = [
    {
      name: "Explorer",
      description: "For small teams and research projects",
      price: "$499",
      period: "per month",
      features: [
        "Up to 5 simultaneous missions",
        "10 user accounts",
        "Basic analytics",
        "Standard support",
        "Core mission modules",
      ],
      recommended: false,
    },
    {
      name: "Voyager",
      description: "For growing space programs and companies",
      price: "$1,499",
      period: "per month",
      features: [
        "Up to 20 simultaneous missions",
        "50 user accounts",
        "Advanced analytics",
        "Priority support",
        "All mission modules",
        "API access",
        "Custom integrations",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      description: "For national agencies and major corporations",
      price: "Custom",
      period: "",
      features: [
        "Unlimited missions",
        "Unlimited users",
        "AI-powered predictions",
        "24/7 dedicated support",
        "All mission modules",
        "Full API access",
        "Custom development",
        "On-premise deployment option",
        "SLA guarantees",
      ],
      recommended: false,
    },
  ];

  // Latest news/blog posts
  const latestNews = [
    {
      title: "SMC 3.0 Release Brings Revolutionary 3D Visualization Tools",
      date: "April 25, 2025",
      excerpt: "The latest update introduces holographic mission playback and real-time collaborative mission design.",
      image: "/news/3d-visualization.jpg",
    },
    {
      title: "Case Study: How AstroMining Corp Optimized Asteroid Operations",
      date: "April 12, 2025",
      excerpt: "Learn how SMC helped coordinate complex rendezvous maneuvers with Near-Earth asteroids.",
      image: "/news/asteroid-mining.jpg",
    },
    {
      title: "SMC Partners with Global Space Agency for Next-Gen Mission Control",
      date: "March 28, 2025",
      excerpt: "Strategic partnership will bring SMC capabilities to upcoming interplanetary missions.",
      image: "/news/partnership.jpg",
    },
  ];

  return (
    <main className="bg-gradient-to-br from-slate-950 via-black to-indigo-950 text-white min-h-screen relative overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20 animate-pulse-slow"></div>
        
        {/* Enhanced stars effect */}
        <div className="stars-sm animate-twinkle"></div>
        <div className="stars-md animate-twinkle-slow"></div>
        <div className="stars-lg animate-twinkle-slower"></div>
        
        {/* Nebula-like background effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[10%] left-[10%] w-96 h-96 rounded-full bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-gradient-to-br from-indigo-600/10 via-cyan-600/5 to-transparent blur-3xl animate-float-reverse"></div>
          <div className="absolute top-[60%] left-[70%] w-64 h-64 rounded-full bg-gradient-to-br from-purple-600/8 via-pink-600/4 to-transparent blur-3xl animate-float"></div>
        </div>
      </div>
      
      {/* Enhanced floating planet decorations */}
      <motion.div 
        className="absolute top-[15%] right-[5%] w-32 h-32 rounded-full bg-gradient-to-br from-purple-600/60 via-indigo-700/40 to-blue-800/60 opacity-70 blur-sm z-0 shadow-2xl shadow-purple-500/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-[30%] left-[8%] w-24 h-24 rounded-full bg-gradient-to-br from-cyan-600/60 via-blue-700/40 to-indigo-800/60 opacity-60 blur-sm z-0 shadow-2xl shadow-cyan-500/20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      />
      
      {/* Additional atmospheric elements */}
      <motion.div 
        className="absolute top-[40%] right-[20%] w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600/40 via-teal-700/30 to-cyan-800/40 opacity-50 blur-md z-0"
        animate={{
          y: [0, -8, 0],
          x: [0, 5, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-[70%] left-[25%] w-20 h-20 rounded-full bg-gradient-to-br from-violet-600/40 via-purple-700/30 to-indigo-800/40 opacity-40 blur-lg z-0"
        animate={{
          y: [0, 10, 0],
          x: [0, -8, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      />

      {/* Content container */}
      <div className="relative z-10">
        {/* Enhanced Navigation */}
        <motion.nav
          variants={container}
          initial="hidden"
          animate="show"
          className="container mx-auto px-6 py-6 flex justify-between items-center relative z-20"
        >
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
            <div className="flex items-center gap-2">
              <motion.div
                className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)"
                }}
                transition={{ duration: 0.8 }}
              >
                <Rocket className="w-4 h-4 text-white transform -rotate-45" />
              </motion.div>
              <span className="font-extrabold tracking-wide">SMC</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 bg-gray-900/30 backdrop-blur-md rounded-full px-6 py-3 border border-gray-700/50">
            <Link href="#features" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 font-medium">Features</Link>
            <Link href="#case-studies" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 font-medium">Case Studies</Link>
            <Link href="#testimonials" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 font-medium">Testimonials</Link>
            <Link href="#pricing" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 font-medium">Pricing</Link>
            <Link href="#team" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 font-medium">Team</Link>
          </div>
          
          <div className="flex space-x-4 items-center">
            <Link href="/login" className="hover:text-blue-400 transition-all duration-300 font-medium hover:scale-105">
              Sign In
            </Link>
            <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 hover:from-blue-700 hover:via-cyan-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
              <Link href="/signup">Sign Up Free</Link>
            </Button>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="container mx-auto px-6 py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center"
        >
          <div className="md:w-1/2 md:pr-12">
            <motion.div variants={item}>
              <Badge className="mb-4 bg-blue-900/50 text-blue-300 border-blue-700 px-3 py-1">
                Mission Control for the Modern Space Age
              </Badge>
            </motion.div>
            <motion.h1 
              variants={item} 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">
                Control the
              </span>
              <br />
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 drop-shadow-2xl">
                  Cosmos
                </span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 rounded-full shadow-lg shadow-blue-500/50"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-sm"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 0.8 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                />
              </span>
            </motion.h1>
            <motion.p variants={item} className="text-xl mb-8 text-gray-300 max-w-lg">
              The comprehensive platform for planning, executing, and monitoring space missions of any complexity. From satellite constellations to Mars rovers, SMC handles it all.
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white hover:from-blue-700 hover:via-cyan-700 hover:to-indigo-700 shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 border border-blue-400/20 backdrop-blur-sm"
                >
                  <Link href="/signup" className="flex items-center gap-2">
                    Get Started <Rocket className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-blue-500/60 text-blue-400 hover:bg-blue-950/50 hover:border-blue-400 backdrop-blur-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:text-blue-300"
                >
                  <Link href="/demo" className="flex items-center gap-2">
                    Watch Demo <ExternalLink className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div variants={item} className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 border-2 border-black" />
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-white font-bold">500+</span> missions successfully managed
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            variants={item}
            className="md:w-1/2 mt-12 md:mt-0 relative"
          >
            <motion.div
              className="relative w-full max-w-md mx-auto aspect-square"
              initial={{ rotate: -5 }}
              animate={{ 
                rotate: 5,
                transition: { 
                  duration: 12, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                } 
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-900/40 via-indigo-900/40 to-purple-900/40 backdrop-blur-md border border-blue-500/20 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-900/60 via-indigo-900/60 to-purple-900/60 p-4 overflow-hidden relative">
                  {/* Mission Control UI Mockup */}
                  <div className="absolute inset-8 rounded-full border-2 border-dashed border-blue-500/30 animate-spin-slow"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 opacity-80 blur-md"></div>
                  </div>
                  
                  {/* Orbiting satellites */}
                  <motion.div 
                    className="absolute w-4 h-4 bg-white rounded-full shadow-glow-blue"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear"
                    }}
                    style={{
                      left: 'calc(50% - 2px)',
                      top: 'calc(50% - 2px)',
                      transformOrigin: '50% 120px',
                    }}
                  />
                  
                  <motion.div 
                    className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-glow-cyan"
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear"
                    }}
                    style={{
                      left: 'calc(50% - 1.5px)',
                      top: 'calc(50% - 1.5px)',
                      transformOrigin: '50% 140px',
                    }}
                  />
                  
                  <motion.div 
                    className="absolute w-5 h-5 bg-indigo-500 rounded-full shadow-glow-indigo"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear"
                    }}
                    style={{
                      left: 'calc(50% - 2.5px)',
                      top: 'calc(50% - 2.5px)',
                      transformOrigin: '50% 160px',
                    }}
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Floating UI elements */}
            <motion.div 
              className="absolute top-1/4 -right-8 md:right-0 p-3 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-indigo-500/30 text-xs shadow-glow-blue max-w-[140px]"
              initial={{ opacity: 0, x: 20, y: 0 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -10, 0]
              }}
              transition={{ 
                opacity: { delay: 1.2, duration: 0.8 },
                x: { delay: 1.2, duration: 0.8 },
                y: { 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop" as const,
                  ease: "easeInOut" 
                }
              }}
            >
              <div className="flex items-center gap-2 text-cyan-500 mb-1">
                <CheckCircle className="w-3 h-3" />
                <span className="font-bold">Status Update</span>
              </div>
              <p className="text-gray-300">Lunar Habitat oxygen levels nominal</p>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-10 -left-10 md:left-0 p-3 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-blue-500/30 text-xs shadow-glow-blue max-w-[140px]"
              initial={{ opacity: 0, x: -20, y: 0 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -10, 0]
              }}
              transition={{ 
                opacity: { delay: 1.4, duration: 0.8 },
                x: { delay: 1.4, duration: 0.8 },
                y: { 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop" as const,
                  ease: "easeInOut" 
                }
              }}
            >
              <div className="flex items-center gap-2 text-indigo-400 mb-1">
                <BarChart2 className="w-3 h-3" />
                <span className="font-bold">Telemetry</span>
              </div>
              <p className="text-gray-300">Mars Rover battery at 92%</p>
            </motion.div>
          </motion.div>
        </motion.section>
        
        {/* Stats Section */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative py-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20"></div>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div 
                className="text-center"
                variants={item}
              >
                <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">500+</p>
                <p className="text-gray-400">Missions Managed</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                variants={item}
              >
                <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300 mb-2">70+</p>
                <p className="text-gray-400">Space Organizations</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                variants={item}
              >
                <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300 mb-2">3,200+</p>
                <p className="text-gray-400">Satellites Tracked</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                variants={item}
              >
                <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300 mb-2">12PB</p>
                <p className="text-gray-400">Mission Data Analyzed</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Student Project Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-16 bg-gradient-to-r from-indigo-900/20 to-blue-900/20"
        >
          <div className="container mx-auto px-6">
            <motion.div 
              variants={item} 
              className="max-w-4xl mx-auto text-center"
            >
              <Badge className="mb-4 bg-green-900/50 text-green-300 border-green-700 px-3 py-1">
                Academic Project
              </Badge>
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-blue-200">
                Built by Software Engineering Students
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                This Space Mission Control platform is a comprehensive academic project developed by a team of passionate software engineering students. 
                Our goal is to demonstrate modern web development practices, real-time data processing, and complex system architecture 
                while exploring the fascinating world of space technology.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <motion.div variants={item} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Learning-Driven</h3>
                  <p className="text-gray-300">Applying cutting-edge technologies and best practices learned in our software engineering curriculum.</p>
                </motion.div>
                <motion.div variants={item} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Collaborative</h3>
                  <p className="text-gray-300">Developed through teamwork, code reviews, and agile methodologies to simulate real-world development.</p>
                </motion.div>
                <motion.div variants={item} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Innovation-Focused</h3>
                  <p className="text-gray-300">Pushing boundaries by combining space technology concepts with modern software architecture.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Features Section */}
        <motion.section
          id="features"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container mx-auto px-6 py-24"
        >
          <motion.div 
            variants={item} 
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <Badge className="mb-4 bg-indigo-900/50 text-indigo-300 border-indigo-700 px-3 py-1">
              Powerful Capabilities
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-indigo-200">
              Mission-Critical Features
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to plan, execute, and monitor complex space missions with confidence and precision.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={item}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <Card className="h-full bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:border-blue-700/50 transition-colors overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-blue-900/30 text-blue-400 border border-blue-800/50">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400">
                      {feature.details}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 p-0 h-auto"
                    >
                      Learn more <ExternalLink className="ml-1 w-3 h-3" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Tab Feature Showcase */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 bg-gradient-to-b from-transparent to-gray-900/30"
        >
          <div className="container mx-auto px-6">
            <motion.div 
              variants={item} 
              className="max-w-2xl mx-auto text-center mb-16"
            >
              <Badge className="mb-4 bg-blue-900/50 text-blue-300 border-blue-700 px-3 py-1">
                Mission Planning
              </Badge>
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-indigo-200">
                Plan Any Mission Type
              </h2>
              <p className="text-xl text-gray-300">
                SMC supports all types of space missions with specialized tools and interfaces.
              </p>
            </motion.div>
            
            <Tabs 
              defaultValue="mission" 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="max-w-5xl mx-auto"
            >
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-900/70 backdrop-blur-md p-1 border border-gray-800">
                  <TabsTrigger 
                    value="mission" 
                    className="data-[state=active]:bg-blue-900/50 data-[state=active]:text-white"
                  >
                    Mission Types
                  </TabsTrigger>
                  <TabsTrigger 
                    value="planning" 
                    className="data-[state=active]:bg-blue-900/50 data-[state=active]:text-white"
                  >
                    Planning
                  </TabsTrigger>
                  <TabsTrigger 
                    value="execution" 
                    className="data-[state=active]:bg-blue-900/50 data-[state=active]:text-white"
                  >
                    Execution
                  </TabsTrigger>
                  <TabsTrigger 
                    value="analytics" 
                    className="data-[state=active]:bg-blue-900/50 data-[state=active]:text-white"
                  >
                    Analytics
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="mission" className="mt-0">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={staggerItems}
                  initial="hidden"
                  animate="show"
                >
                  {missionTypes.map((type, idx) => (
                    <motion.div key={idx} variants={item}>
                      <Card className="bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-blue-700/50 transition-colors">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-900/30 text-blue-400 border border-blue-800/50">
                              <type.icon className="w-5 h-5" />
                            </div>
                            <CardTitle className="text-lg">{type.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-400">{type.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="planning" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
                    <h3 className="text-xl font-semibold mb-4">Mission Planning Dashboard</h3>
                    <p className="text-gray-300 mb-4">
                      The comprehensive planning interface gives you full control over mission parameters, timelines, and resource allocation.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Interactive timeline creation",
                        "Resource allocation optimization",
                        "Automatic dependency management",
                        "Risk assessment toolkit",
                        "Collaborative planning workspace",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900/20 rounded-xl border border-gray-800 overflow-hidden">
                    <div className="h-full w-full relative">
                      {/* This would be a real image in production */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-indigo-900/40"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-lg font-medium text-center text-gray-400 px-8">
                          Interactive mission planning interface screenshot would appear here
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="execution" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-900/20 rounded-xl border border-gray-800 overflow-hidden">
                    <div className="h-full w-full relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-transparent to-purple-900/40"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-lg font-medium text-center text-gray-400 px-8">
                          Mission execution control panel screenshot would appear here
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
                    <h3 className="text-xl font-semibold mb-4">Real-Time Mission Execution</h3>
                    <p className="text-gray-300 mb-4">
                      Monitor and control all aspects of your mission with real-time data and responsive controls.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Live telemetry dashboards",
                        "Anomaly detection and alerts",
                        "Command verification protocols",
                        "Automated sequence execution",
                        "Emergency response procedures",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
                    <h3 className="text-xl font-semibold mb-4">Mission Analytics</h3>
                    <p className="text-gray-300 mb-4">
                      Transform raw mission data into actionable insights with our powerful analytics tools.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "AI-powered pattern recognition",
                        "Predictive maintenance alerts",
                        "Performance optimization recommendations",
                        "Custom report generation",
                        "Historical trend analysis",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="md:col-span-2 bg-gray-900/20 rounded-xl border border-gray-800 overflow-hidden">
                    <div className="h-full w-full relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-transparent to-blue-900/40"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-lg font-medium text-center text-gray-400 px-8">
                          Advanced analytics dashboard with data visualization screenshot would appear here
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.section>

        {/* Case Studies Section */}
        <motion.section
          id="case-studies"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container mx-auto px-6 py-24"
        >
          <motion.div 
            variants={item} 
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <Badge className="mb-4 bg-indigo-900/50 text-indigo-300 border-indigo-700 px-3 py-1">
              Success Stories
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-blue-200">
              Mission Case Studies
            </h2>
            <p className="text-xl text-gray-300">
              See how organizations use SMC to achieve breakthrough results in space exploration and operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div key={idx} variants={item}>
                <Card className="h-full bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:border-indigo-600/30 transition-colors overflow-hidden">
                  <div className="h-48 w-full relative bg-gray-800">
                    {/* This would be a real image in production */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-transparent to-blue-900/40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="font-medium text-gray-400">
                        {study.title} image
                      </p>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{study.title}</CardTitle>
                    </div>
                    <CardDescription className="text-blue-400">{study.client}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">{study.description}</p>
                    
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {study.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <p className="text-sm text-gray-400">{stat.label}</p>
                          <p className="font-semibold text-white">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-2">
                      <h4 className="text-sm text-gray-400 mb-1">Outcome:</h4>
                      <p className="text-gray-300 text-sm">{study.outcome}</p>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-center text-indigo-400 hover:text-indigo-300 hover:bg-indigo-900/20"
                    >
                      Read Full Case Study
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          id="testimonials"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 bg-gradient-to-b from-gray-900/30 to-transparent relative overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-900/20 blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-indigo-900/20 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              variants={item} 
              className="max-w-2xl mx-auto text-center mb-16"
            >
              <Badge className="mb-4 bg-blue-900/50 text-blue-300 border-blue-700 px-3 py-1">
                Testimonials
              </Badge>
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-indigo-200">
                What Users Say
              </h2>
              <p className="text-xl text-gray-300">
                Organizations across the space industry trust SMC for their most critical missions.
              </p>
            </motion.div>
            
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-900/40 backdrop-blur-lg border border-gray-800 rounded-xl p-8 md:p-12"
                  >
                    <div className="mb-6 relative">
                      <div className="absolute -top-4 -left-6 text-6xl text-blue-500/20">&ldquo;</div>
                      <p className="text-xl md:text-2xl text-gray-200 relative z-10">
                        {testimonials[activeTestimonial].quote}
                      </p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600"></div>
                        <div>
                          <p className="font-semibold text-white">{testimonials[activeTestimonial].name}</p>
                          <p className="text-gray-400">{testimonials[activeTestimonial].role}</p>
                        </div>
                      </div>
                      
                      <div className="px-4 py-2 bg-gray-800/60 backdrop-blur-sm rounded-lg">
                        <p className="text-sm font-medium text-white">{testimonials[activeTestimonial].company}</p>
                        <p className="text-xs text-gray-400">{testimonials[activeTestimonial].companyDescription}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                <div className="flex justify-center mt-8 gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        idx === activeTestimonial 
                          ? "bg-blue-500" 
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                      aria-label={`View testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          id="pricing"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container mx-auto px-6 py-24"
        >
          <motion.div 
            variants={item} 
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <Badge className="mb-4 bg-indigo-900/50 text-indigo-300 border-indigo-700 px-3 py-1">
              Pricing Plans
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-indigo-200">
              Choose Your Mission Package
            </h2>
            <p className="text-xl text-gray-300">
              Flexible plans for space programs of every size and scope.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, idx) => (
              <motion.div 
                key={idx} 
                variants={item}
                className={`relative ${
                  tier.recommended ? "md:-mt-4 md:mb-4" : ""
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-5 inset-x-0 flex justify-center">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
                
                <Card 
                  className={`h-full border ${
                    tier.recommended 
                      ? "bg-gradient-to-b from-gray-900 to-gray-900/70 border-blue-600/50" 
                      : "bg-gray-900/50 backdrop-blur-lg border-gray-800"
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="text-gray-400">{tier.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      {tier.period && (
                        <span className="text-gray-400 ml-2">{tier.period}</span>
                      )}
                    </div>
                    
                    <ul className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            tier.recommended ? "text-blue-400" : "text-gray-400"
                          }`} />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      className={`w-full justify-center ${
                        tier.recommended 
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white" 
                          : "bg-gray-800 text-white hover:bg-gray-700"
                      }`}
                    >
                      {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={fadeIn} 
            className="mt-16 max-w-3xl mx-auto text-center bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-3">Need a custom solution?</h3>
            <p className="text-gray-300 mb-4">
              Contact our team for specialized mission control requirements, custom integrations, or high-security deployments.
            </p>
            <Button 
              variant="outline" 
              className="border-blue-500 text-blue-400 hover:bg-blue-950/30"
            >
              Schedule Consultation
            </Button>
          </motion.div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          id="team"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 bg-gradient-to-b from-transparent to-gray-900/30"
        >
          <div className="container mx-auto px-6">
            <motion.div 
              variants={item} 
              className="max-w-2xl mx-auto text-center mb-16"
            >
              <Badge className="mb-4 bg-indigo-900/50 text-indigo-300 border-indigo-700 px-3 py-1">
                Our Team
              </Badge>
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-blue-200">
                Meet the Development Team
              </h2>
              <p className="text-xl text-gray-300">
                Passionate software engineering students building the future of space mission control.
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerItems}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {team.map((member, idx) => (
                <motion.div 
                  key={idx} 
                  variants={item}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:border-indigo-700/50 transition-colors overflow-hidden">
                    <div className="h-48 w-full relative overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-blue-400">{member.role}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-gray-300 text-sm">{member.bio}</p>
                      
                      <div className="pt-2 flex items-start gap-2">
                        <Award className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300 text-sm">{member.achievement}</p>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex justify-center gap-4">
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                        <ExternalLink className="h-4 w-4 text-gray-400" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                        <MessageSquare className="h-4 w-4 text-gray-400" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Latest News/Blog Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container mx-auto px-6 py-24"
        >
          <motion.div 
            variants={item} 
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-900/50 text-blue-300 border-blue-700 px-3 py-1">
              Latest Updates
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-indigo-200">
              News & Insights
            </h2>
            <p className="text-xl text-gray-300">
              Stay informed about the latest developments in space mission control.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {latestNews.map((article, idx) => (
              <motion.div key={idx} variants={item}>
                <Card className="h-full bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:border-blue-700/50 transition-colors overflow-hidden">
                  <div className="h-40 w-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-indigo-900/40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="font-medium text-gray-400">Article image</p>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardDescription className="text-blue-400">{article.date}</CardDescription>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-300">{article.excerpt}</p>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      variant="ghost" 
                      className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 pl-0"
                    >
                      Read Article <ExternalLink className="ml-1 w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={item} className="text-center mt-12">
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950/30">
              View All Articles <BookOpen className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative py-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-indigo-900/30"></div>
          
          <div className="absolute inset-0 overflow-hidden">
            <div className="stars-lg opacity-60"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-indigo-300">
                  Ready to Launch Your Mission?
                </h2>
                <p className="text-xl text-gray-300">
                  Join the leading space programs and organizations already using SMC.
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-glow-blue"
                >
                  Get Started Today <Rocket className="ml-2 w-4 h-4" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-blue-500 text-blue-400 hover:bg-blue-950/30"
                >
                  Schedule Demo
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-10 bg-gray-800/50 rounded px-4 flex items-center justify-center">
                      <span className="text-gray-500 font-medium">Client Logo {i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-gray-900/60 border-t border-gray-800">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
              <div className="lg:col-span-2">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                    <Rocket className="w-4 h-4 text-white transform -rotate-45" />
                  </div>
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">SMC</span>
                </Link>
                <p className="text-gray-400 mb-4 max-w-md">
                  Space Mission Control provides the most advanced mission planning, execution, and analysis platform for space organizations of all sizes.
                </p>
                <div className="flex gap-4">
                  {[ExternalLink, ExternalLink, ExternalLink, ExternalLink].map((Icon, i) => (
                    <Button key={i} variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-gray-800">
                      <Icon className="h-4 w-4 text-gray-400" />
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4">Product</h3>
                <ul className="space-y-2">
                  {["Features", "Pricing", "Case Studies", "Documentation", "API", "Updates"].map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  {["About Us", "Team", "Careers", "Partners", "Blog", "Press"].map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4">Support</h3>
                <ul className="space-y-2">
                  {["Help Center", "Contact Us", "Community", "Training", "Status", "Security"].map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Space Mission Control. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Enhanced custom styles for stars and animations */}
        <style jsx global>{`
          .stars-sm {
            background-image: radial-gradient(1px 1px at 25% 25%, rgba(255,255,255,0.8) 1%, transparent 0),
                              radial-gradient(1px 1px at 50% 50%, rgba(147,197,253,0.6) 1%, transparent 0),
                              radial-gradient(1px 1px at 75% 75%, rgba(196,181,253,0.5) 1%, transparent 0),
                              radial-gradient(2px 2px at 33% 33%, rgba(34,211,238,0.4) 1%, transparent 0),
                              radial-gradient(2px 2px at 67% 67%, rgba(129,140,248,0.3) 1%, transparent 0);
            background-size: 250px 250px;
            opacity: 0.6;
          }
          
          .stars-md {
            background-image: radial-gradient(1px 1px at 10% 10%, rgba(255,255,255,0.9) 1%, transparent 0),
                              radial-gradient(1px 1px at 40% 60%, rgba(59,130,246,0.7) 1%, transparent 0),
                              radial-gradient(1.5px 1.5px at 60% 40%, rgba(168,85,247,0.6) 1%, transparent 0),
                              radial-gradient(2px 2px at 90% 90%, rgba(34,211,238,0.5) 1%, transparent 0);
            background-size: 400px 400px;
            opacity: 0.7;
          }
          
          .stars-lg {
            background-image: radial-gradient(2px 2px at 20% 80%, rgba(255,255,255,1) 1%, transparent 0),
                              radial-gradient(2px 2px at 40% 30%, rgba(96,165,250,0.8) 1%, transparent 0),
                              radial-gradient(2px 2px at 70% 20%, rgba(147,51,234,0.7) 1%, transparent 0),
                              radial-gradient(3px 3px at 80% 70%, rgba(6,182,212,0.6) 1%, transparent 0);
            background-size: 600px 600px;
            opacity: 0.8;
          }
          
          .animate-twinkle {
            animation: twinkle 3s ease-in-out infinite alternate;
          }
          
          .animate-twinkle-slow {
            animation: twinkle 5s ease-in-out infinite alternate;
          }
          
          .animate-twinkle-slower {
            animation: twinkle 7s ease-in-out infinite alternate;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 8s ease-in-out infinite;
          }
          
          .animate-float {
            animation: float 20s ease-in-out infinite;
          }
          
          .animate-float-slow {
            animation: float 25s ease-in-out infinite;
          }
          
          .animate-float-reverse {
            animation: float-reverse 18s ease-in-out infinite;
          }
          
          .shadow-glow-blue {
            box-shadow: 0 0 20px 2px rgba(56, 189, 248, 0.4);
          }
          
          .shadow-glow-indigo {
            box-shadow: 0 0 20px 2px rgba(99, 102, 241, 0.4);
          }
          
          .shadow-glow-cyan {
            box-shadow: 0 0 20px 2px rgba(34, 211, 238, 0.4);
          }
          
          .animate-spin-slow {
            animation: spin 30s linear infinite;
          }
          
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-20px) rotate(5deg); }
            66% { transform: translateY(10px) rotate(-3deg); }
          }
          
          @keyframes float-reverse {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(15px) rotate(-4deg); }
            66% { transform: translateY(-25px) rotate(6deg); }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          /* Enhanced glassmorphism effects */
          .glass-effect {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .glass-effect-strong {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          /* Gradient text animations */
          .gradient-text-animated {
            background: linear-gradient(-45deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6);
            background-size: 400% 400%;
            animation: gradient-shift 8s ease infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </div>
    </main>
  );
}