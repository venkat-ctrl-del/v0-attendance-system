"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  BarChart3,
  Shield,
  Smartphone,
  Wifi,
  ArrowRight,
  CheckCircle,
  Star,
  Trophy,
  Zap,
  Globe,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: Smartphone,
      title: "Smart Multi-Modal Check-in",
      description: "Advanced QR codes, AI facial recognition with liveness detection, and RFID support",
      details: ["Lightning-fast QR scanning", "AI-powered face recognition", "Anti-proxy technology"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Predictive AI Analytics",
      description: "Machine learning insights for student engagement and dropout prevention",
      details: ["Real-time engagement scoring", "Predictive risk models", "Advanced trend analysis"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Government Compliance",
      description: "AICTE-compliant reporting with blockchain-secured audit trails",
      details: ["Automated compliance reports", "Blockchain verification", "DPDP Act 2023 compliant"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Trophy,
      title: "Advanced Gamification",
      description: "Comprehensive badges, streaks, and leaderboards to maximize engagement",
      details: ["Dynamic achievement system", "Streak multipliers", "Interactive leaderboards"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Wifi,
      title: "Offline-First Architecture",
      description: "Seamless operation in low-connectivity areas with intelligent sync",
      details: ["Offline data storage", "Smart auto-sync", "Rural campus optimization"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Comprehensive support for all Indian languages and regional dialects",
      details: ["22 official languages", "Regional dialect support", "Voice commands"],
      color: "from-teal-500 to-cyan-500",
    },
  ]

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 ${isLoaded ? "animate-fade-in" : ""}`}
    >
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.8" />
                    <path
                      d="M2 17l10 5 10-5M2 12l10 5 10-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="18" cy="8" r="2" fill="#FFD700" stroke="white" strokeWidth="1" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EduTrack Pro
                </h1>
                <p className="text-sm text-slate-600 font-medium">Smart Education Platform - All India</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link href="/student">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-blue-50 transition-all duration-200 text-slate-700 font-medium"
                >
                  Student Portal
                </Button>
              </Link>
              <Link href="/faculty">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-blue-50 transition-all duration-200 text-slate-700 font-medium"
                >
                  Faculty Portal
                </Button>
              </Link>
              <Link href="/admin">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-blue-50 transition-all duration-200 text-slate-700 font-medium"
                >
                  Admin Portal
                </Button>
              </Link>
              <Link href="/analytics">
                <Button
                  size="sm"
                  className="bg-slate-900 hover:bg-slate-800 transition-all duration-200 text-white shadow-lg font-medium border-0"
                >
                  Analytics
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-6xl mx-auto animate-slide-up">
          <Badge
            variant="secondary"
            className="mb-8 px-6 py-3 text-base font-semibold bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0"
          >
            <Star className="w-5 h-5 mr-2" />
            Revolutionary Education Technology - Transforming India
          </Badge>
          <h2 className="text-6xl md:text-8xl font-black text-balance mb-10 leading-tight">
            Next-Gen Student
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent block">
              Attendance Intelligence
            </span>
          </h2>
          <p className="text-2xl text-slate-600 text-balance mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            AI-powered attendance ecosystem with predictive analytics, advanced gamification, and seamless government
            compliance. Revolutionizing education across all Indian institutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/student">
              <Button
                size="lg"
                className="text-xl px-12 py-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl rounded-2xl font-semibold"
              >
                <Users className="w-6 h-6 mr-3" />
                Launch Student Portal
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            <Link href="/analytics">
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-12 py-8 border-2 border-slate-300 hover:bg-slate-50 transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl font-semibold"
              >
                <BarChart3 className="w-6 h-6 mr-3" />
                View Analytics
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Comprehensive Intelligence Suite
          </h3>
          <p className="text-slate-600 text-2xl max-w-4xl mx-auto leading-relaxed font-medium">
            Advanced multi-modal tracking, predictive AI analytics, and immersive gamification designed for educational
            excellence across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`border-0 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer group bg-white/80 backdrop-blur-sm ${
                activeFeature === index ? "shadow-2xl scale-105" : "shadow-lg"
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <CardHeader className="pb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-800">{feature.title}</CardTitle>
                <CardDescription className="text-lg leading-relaxed text-slate-600 font-medium">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-base text-slate-600 font-medium">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Transforming Education Nationwide</h3>
            <p className="text-xl opacity-90">Trusted by institutions across India</p>
          </div>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div className="animate-slide-up">
              <div className="text-6xl font-black mb-4">2,500+</div>
              <div className="text-xl opacity-90 font-medium">Educational Institutions</div>
            </div>
            <div className="animate-slide-up">
              <div className="text-6xl font-black mb-4">15M+</div>
              <div className="text-xl opacity-90 font-medium">Students Enrolled</div>
            </div>
            <div className="animate-slide-up">
              <div className="text-6xl font-black mb-4">99.2%</div>
              <div className="text-xl opacity-90 font-medium">Accuracy Rate</div>
            </div>
            <div className="animate-slide-up">
              <div className="text-6xl font-black mb-4">24/7</div>
              <div className="text-xl opacity-90 font-medium">System Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Ready to Transform Education in India?
          </h3>
          <p className="text-slate-600 text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Join India's digital education revolution with our comprehensive AI-powered attendance intelligence platform
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="text-xl px-12 py-8 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-3xl rounded-2xl font-semibold"
            >
              <Zap className="w-6 h-6 mr-3" />
              Start Free Trial
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-xl px-12 py-8 border-2 border-slate-300 hover:bg-slate-50 transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl font-semibold"
            >
              Schedule Live Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-8 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EduTrack Pro
                </span>
                <p className="text-sm text-slate-600">Smart Education Platform</p>
              </div>
            </div>
            <p className="text-base text-slate-600 text-center font-medium">
              © 2025 EduTrack Pro - Transforming Education Across India
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
