"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Trophy,
  Clock,
  TrendingUp,
  Award,
  Flame,
  QrCode,
  Camera,
  Bell,
  Settings,
  Star,
  Gift,
  Home,
  BarChart3,
  Zap,
  Users,
} from "lucide-react"

export default function StudentDashboard() {
  const [attendancePercentage] = useState(92)
  const [currentStreak] = useState(18)
  const [totalClasses] = useState(52)
  const [attendedClasses] = useState(48)
  const [studentLevel] = useState(22)
  const [studentXP] = useState(4750)

  const badges = [
    { name: "Excellence Streak", icon: Trophy, color: "bg-gradient-to-r from-yellow-400 to-orange-500", earned: true },
    { name: "Punctuality Pro", icon: Clock, color: "bg-gradient-to-r from-blue-500 to-cyan-500", earned: true },
    { name: "Consistency King", icon: Flame, color: "bg-gradient-to-r from-red-500 to-pink-500", earned: true },
    { name: "Academic Champion", icon: Award, color: "bg-gradient-to-r from-purple-500 to-indigo-500", earned: false },
  ]

  const recentClasses = [
    { subject: "Data Structures & Algorithms", time: "09:00 AM", status: "present", date: "Today", engagement: 95 },
    { subject: "Machine Learning", time: "11:00 AM", status: "present", date: "Today", engagement: 88 },
    { subject: "Database Systems", time: "02:00 PM", status: "present", date: "Yesterday", engagement: 92 },
    { subject: "Software Engineering", time: "10:00 AM", status: "present", date: "Yesterday", engagement: 90 },
  ]

  const upcomingClasses = [
    {
      subject: "Artificial Intelligence",
      time: "09:00 AM",
      room: "Smart Lab-A",
      date: "Tomorrow",
      professor: "Dr. Sharma",
    },
    {
      subject: "Computer Networks",
      time: "11:00 AM",
      room: "Tech Hub-205",
      date: "Tomorrow",
      professor: "Prof. Gupta",
    },
    { subject: "Cybersecurity", time: "02:00 PM", room: "Cyber Lab-B", date: "Dec 20", professor: "Dr. Patel" },
  ]

  const recentAchievements = [
    { name: "Excellence Streak", xp: 250, date: "Dec 15", type: "gold" },
    { name: "Engagement Master", xp: 200, date: "Dec 12", type: "silver" },
    { name: "Innovation Award", xp: 300, date: "Dec 10", type: "platinum" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="border-b bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg">
                <img src="/edutrack-logo.jpg" alt="EduTrack Pro Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  EduTrack Pro
                </h1>
                <p className="text-sm text-slate-600 font-medium">Student Excellence Portal</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-blue-50"
                onClick={() => (window.location.href = "/")}
              >
                <Home className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-blue-50 relative">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-blue-50">
                <Settings className="w-4 h-4" />
              </Button>
              <Avatar className="w-10 h-10 border-2 border-blue-200">
                <AvatarImage src="/edutrack-logo.jpg" />
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold">
                  AR
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-10">
          <div className="flex items-center gap-6 mb-6">
            <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
              <AvatarImage src="/edutrack-logo.jpg" />
              <AvatarFallback className="text-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold">
                AR
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 text-balance">Welcome back, Arjun!</h2>
              <p className="text-slate-600 text-lg">Computer Science Engineering • Final Year</p>
              <p className="text-sm text-slate-500 mb-2">Indian Institute of Technology • New Delhi</p>
              <div className="flex items-center gap-3 mt-2">
                <Badge variant="secondary" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                  Level {studentLevel}
                </Badge>
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-semibold text-slate-700">{studentXP} XP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          <Button
            className="h-24 flex-col gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
            size="lg"
            onClick={() => (window.location.href = "/attendance/qr-checkin")}
          >
            <QrCode className="w-7 h-7" />
            <span className="text-sm font-medium">Smart Check-in</span>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex-col gap-3 bg-white/80 hover:bg-blue-50 border-2 hover:border-blue-300 transition-all duration-300"
            size="lg"
          >
            <Camera className="w-7 h-7 text-blue-600" />
            <span className="text-sm font-medium">AI Recognition</span>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex-col gap-3 bg-white/80 hover:bg-indigo-50 border-2 hover:border-indigo-300 transition-all duration-300"
            size="lg"
          >
            <Calendar className="w-7 h-7 text-indigo-600" />
            <span className="text-sm font-medium">Schedule</span>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex-col gap-3 bg-white/80 hover:bg-yellow-50 border-2 hover:border-yellow-300 transition-all duration-300"
            size="lg"
            onClick={() => (window.location.href = "/gamification")}
          >
            <Trophy className="w-7 h-7 text-yellow-600" />
            <span className="text-sm font-medium">Achievements</span>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex-col gap-3 bg-white/80 hover:bg-green-50 border-2 hover:border-green-300 transition-all duration-300"
            size="lg"
            onClick={() => (window.location.href = "/gamification")}
          >
            <Gift className="w-7 h-7 text-green-600" />
            <span className="text-sm font-medium">Rewards</span>
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 p-1 rounded-xl shadow-sm">
            <TabsTrigger value="overview" className="rounded-lg font-medium">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="attendance" className="rounded-lg font-medium">
              Attendance
            </TabsTrigger>
            <TabsTrigger value="achievements" className="rounded-lg font-medium">
              Achievements
            </TabsTrigger>
            <TabsTrigger value="schedule" className="rounded-lg font-medium">
              Schedule
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-blue-100">Attendance Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-bold">{attendancePercentage}%</div>
                    <TrendingUp className="w-5 h-5 text-green-300" />
                  </div>
                  <Progress value={attendancePercentage} className="mt-3 bg-blue-400" />
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-red-500 text-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-orange-100">Excellence Streak</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-bold">{currentStreak}</div>
                    <Flame className="w-5 h-5 text-yellow-300" />
                  </div>
                  <p className="text-sm text-orange-100 mt-1">consecutive days</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-slate-600">Classes Mastered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-slate-800">
                    {attendedClasses}/{totalClasses}
                  </div>
                  <p className="text-sm text-slate-500 mt-1">this semester</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-purple-100">Achievement Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3/4</div>
                  <p className="text-sm text-purple-100 mt-1">badges unlocked</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-slate-800">
                    <Clock className="w-6 h-6 text-blue-600" />
                    Recent Learning Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentClasses.map((cls, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-slate-800">{cls.subject}</p>
                        <p className="text-sm text-slate-600">
                          {cls.date} • {cls.time}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <BarChart3 className="w-3 h-3 text-green-600" />
                          <span className="text-xs text-green-600 font-medium">{cls.engagement}% engagement</span>
                        </div>
                      </div>
                      <Badge variant="default" className="bg-green-100 text-green-700 hover:bg-green-200">
                        {cls.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-slate-800">
                    <Calendar className="w-6 h-6 text-indigo-600" />
                    Upcoming Learning Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingClasses.map((cls, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-slate-800">{cls.subject}</p>
                        <p className="text-sm text-slate-600">
                          {cls.date} • {cls.time}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Users className="w-3 h-3 text-indigo-600" />
                          <span className="text-xs text-indigo-600 font-medium">{cls.professor}</span>
                          <span className="text-xs text-slate-500">• {cls.room}</span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-indigo-50 hover:border-indigo-300 bg-transparent"
                      >
                        Set Alert
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-800">
                  <Star className="w-6 h-6 text-yellow-500" />
                  Latest Achievements & Rewards
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Your recent accomplishments in India's premier education system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {recentAchievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 ${
                        achievement.type === "platinum"
                          ? "bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200"
                          : achievement.type === "gold"
                            ? "bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200"
                            : "bg-gradient-to-r from-slate-50 to-gray-50 border-slate-200"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          achievement.type === "platinum"
                            ? "bg-gradient-to-r from-purple-500 to-indigo-500"
                            : achievement.type === "gold"
                              ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                              : "bg-gradient-to-r from-slate-500 to-gray-500"
                        }`}
                      >
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{achievement.name}</p>
                        <p className="text-sm text-slate-600">
                          +{achievement.xp} XP • {achievement.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-slate-800">Attendance Excellence Overview</CardTitle>
                <CardDescription className="text-slate-600">
                  Your academic performance record for this semester
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-slate-700">Overall Excellence Rate</span>
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {attendancePercentage}%
                    </span>
                  </div>
                  <Progress value={attendancePercentage} className="h-4 bg-slate-100" />

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
                    <div className="text-center p-4 rounded-xl bg-green-50 border border-green-200">
                      <div className="text-3xl font-bold text-green-600">{attendedClasses}</div>
                      <div className="text-sm text-green-700 font-medium">Sessions Attended</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-red-50 border border-red-200">
                      <div className="text-3xl font-bold text-red-600">{totalClasses - attendedClasses}</div>
                      <div className="text-sm text-red-700 font-medium">Sessions Missed</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-orange-50 border border-orange-200">
                      <div className="text-3xl font-bold text-orange-600">{currentStreak}</div>
                      <div className="text-sm text-orange-700 font-medium">Day Streak</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-purple-50 border border-purple-200">
                      <div className="text-3xl font-bold text-purple-600">A+</div>
                      <div className="text-sm text-purple-700 font-medium">Excellence Grade</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-800">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  Your Achievement Collection
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Badges and milestones earned through academic excellence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {badges.map((badge, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-xl border-2 text-center transition-all duration-300 hover:scale-105 ${
                        badge.earned
                          ? "border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg"
                          : "border-slate-200 bg-slate-50 opacity-60"
                      }`}
                    >
                      <div
                        className={`w-16 h-16 rounded-full ${badge.color} flex items-center justify-center mx-auto mb-4 shadow-lg ${
                          !badge.earned && "grayscale"
                        }`}
                      >
                        <badge.icon className="w-8 h-8 text-white" />
                      </div>
                      <p className="font-semibold text-slate-800 mb-2">{badge.name}</p>
                      {badge.earned ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-700 font-medium">
                          Achieved
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-slate-500">
                          Locked
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
                    onClick={() => (window.location.href = "/gamification")}
                  >
                    Explore All Achievements & Rewards
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-800">
                  <Calendar className="w-6 h-6 text-indigo-600" />
                  Weekly Learning Schedule
                </CardTitle>
                <CardDescription className="text-slate-600">Your comprehensive academic timetable</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                    <div key={day} className="border border-slate-200 rounded-xl p-6 bg-slate-50">
                      <h4 className="font-bold text-lg text-slate-800 mb-4">{day}</h4>
                      <div className="grid gap-3">
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                          <div>
                            <span className="font-semibold text-slate-800">Advanced Algorithms</span>
                            <p className="text-sm text-slate-600">Prof. Dr. Rajesh Kumar • Smart Lab A</p>
                          </div>
                          <span className="text-sm font-medium text-indigo-600">09:00 - 10:30</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                          <div>
                            <span className="font-semibold text-slate-800">Machine Learning</span>
                            <p className="text-sm text-slate-600">Dr. Priya Sharma • AI Research Center</p>
                          </div>
                          <span className="text-sm font-medium text-indigo-600">11:00 - 12:30</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
