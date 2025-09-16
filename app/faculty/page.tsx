"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Users,
  TrendingUp,
  AlertTriangle,
  Play,
  Download,
  Search,
  Filter,
  Bell,
  Settings,
  BarChart3,
  UserCheck,
  Home,
  Brain,
  Clock,
} from "lucide-react"

export default function FacultyDashboard() {
  const [activeClass, setActiveClass] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const todayClasses = [
    {
      id: "ai101",
      subject: "Artificial Intelligence Fundamentals",
      time: "09:00 AM",
      room: "Smart Lab-A",
      enrolled: 48,
      present: 0,
      status: "upcoming",
    },
    {
      id: "ml201",
      subject: "Machine Learning Applications",
      time: "11:00 AM",
      room: "AI Research Center",
      enrolled: 42,
      present: 39,
      status: "completed",
    },
    {
      id: "ds301",
      subject: "Advanced Data Structures",
      time: "02:00 PM",
      room: "Tech Hub-205",
      enrolled: 45,
      present: 0,
      status: "upcoming",
    },
  ]

  const students = [
    {
      id: "1",
      name: "Arjun Patel",
      rollNo: "CSE2021001",
      attendance: 94,
      status: "present",
      riskLevel: "low",
      lastSeen: "Today, 9:05 AM",
      engagement: 92,
    },
    {
      id: "2",
      name: "Priya Sharma",
      rollNo: "CSE2021002",
      attendance: 96,
      status: "present",
      riskLevel: "low",
      lastSeen: "Today, 9:03 AM",
      engagement: 95,
    },
    {
      id: "3",
      name: "Rohit Kumar",
      rollNo: "CSE2021003",
      attendance: 68,
      status: "absent",
      riskLevel: "high",
      lastSeen: "Yesterday, 2:15 PM",
      engagement: 72,
    },
    {
      id: "4",
      name: "Sneha Gupta",
      rollNo: "CSE2021004",
      attendance: 82,
      status: "present",
      riskLevel: "medium",
      lastSeen: "Today, 9:07 AM",
      engagement: 88,
    },
  ]

  const analytics = {
    totalStudents: 135,
    averageAttendance: 89,
    atRiskStudents: 6,
    perfectAttendance: 28,
  }

  const startClass = (classId: string) => {
    setActiveClass(classId)
  }

  const endClass = () => {
    setActiveClass(null)
  }

  const getRiskBadgeVariant = (risk: string) => {
    switch (risk) {
      case "high":
        return "destructive"
      case "medium":
        return "secondary"
      default:
        return "default"
    }
  }

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
                <p className="text-sm text-slate-600 font-medium">Faculty Excellence Portal</p>
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
                  DS
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
                DS
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 text-balance">Good morning, Dr. Singh!</h2>
              <p className="text-slate-600 text-lg">Computer Science & Engineering Department</p>
              <p className="text-sm text-slate-500 mb-2">Indian Institute of Technology • New Delhi</p>
              <div className="flex items-center gap-3 mt-2">
                <Badge variant="secondary" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  Senior Professor
                </Badge>
                <Badge variant="outline" className="border-blue-300 text-blue-700">
                  AI & ML Specialist
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-100">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold">{analytics.totalStudents}</div>
                <Users className="w-5 h-5 text-blue-200" />
              </div>
              <p className="text-sm text-blue-100 mt-1">across all courses</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-green-100">Average Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold">{analytics.averageAttendance}%</div>
                <TrendingUp className="w-5 h-5 text-green-200" />
              </div>
              <p className="text-sm text-green-100 mt-1">attendance rate</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-red-500 to-pink-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-red-100">Needs Attention</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold">{analytics.atRiskStudents}</div>
                <AlertTriangle className="w-5 h-5 text-red-200" />
              </div>
              <p className="text-sm text-red-100 mt-1">students at risk</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-purple-100">Excellence Achievers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold">{analytics.perfectAttendance}</div>
                <UserCheck className="w-5 h-5 text-purple-200" />
              </div>
              <p className="text-sm text-purple-100 mt-1">perfect attendance</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="classes" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 p-1 rounded-xl shadow-sm">
            <TabsTrigger value="classes" className="rounded-lg font-medium">
              Live Classes
            </TabsTrigger>
            <TabsTrigger value="students" className="rounded-lg font-medium">
              Student Monitor
            </TabsTrigger>
            <TabsTrigger value="analytics" className="rounded-lg font-medium">
              AI Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" className="rounded-lg font-medium">
              Smart Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="classes" className="space-y-8">
            <div className="grid gap-8">
              {todayClasses.map((cls) => (
                <Card
                  key={cls.id}
                  className={`border-0 shadow-lg bg-white ${activeClass === cls.id ? "ring-2 ring-blue-500 ring-offset-2" : ""}`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-3 text-slate-800">
                          <Brain className="w-5 h-5 text-blue-600" />
                          {cls.subject}
                          <Badge
                            variant={cls.status === "completed" ? "default" : "secondary"}
                            className={
                              cls.status === "completed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                            }
                          >
                            {cls.status}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="text-slate-600 mt-1">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {cls.time}
                            </span>
                            <span>• {cls.room}</span>
                            <span>• {cls.enrolled} students enrolled</span>
                          </div>
                        </CardDescription>
                      </div>
                      <div className="flex gap-3">
                        {cls.status === "upcoming" && !activeClass && (
                          <Button
                            onClick={() => (window.location.href = "/attendance/qr-generate")}
                            className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
                          >
                            <Play className="w-4 h-4" />
                            Start Session
                          </Button>
                        )}
                        {activeClass === cls.id && (
                          <Button
                            onClick={endClass}
                            variant="destructive"
                            className="gap-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                          >
                            End Session
                          </Button>
                        )}
                        {cls.status === "completed" && (
                          <Button
                            variant="outline"
                            className="gap-2 bg-white hover:bg-green-50 border-green-300 hover:border-green-400"
                          >
                            <Download className="w-4 h-4" />
                            Export Data
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-8">
                        <div className="text-center p-4 rounded-xl bg-green-50 border border-green-200">
                          <div className="text-3xl font-bold text-green-600">{cls.present}</div>
                          <div className="text-sm text-green-700 font-medium">Present</div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-red-50 border border-red-200">
                          <div className="text-3xl font-bold text-red-600">{cls.enrolled - cls.present}</div>
                          <div className="text-sm text-red-700 font-medium">Absent</div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-blue-50 border border-blue-200">
                          <div className="text-3xl font-bold text-blue-600">
                            {cls.present > 0 ? Math.round((cls.present / cls.enrolled) * 100) : 0}%
                          </div>
                          <div className="text-sm text-blue-700 font-medium">Attendance</div>
                        </div>
                      </div>
                      {cls.present > 0 && (
                        <div className="w-40">
                          <Progress value={(cls.present / cls.enrolled) * 100} className="h-3" />
                        </div>
                      )}
                    </div>
                    {activeClass === cls.id && (
                      <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <p className="text-lg font-semibold text-blue-800">Live Session Active!</p>
                        </div>
                        <p className="text-slate-700">
                          Students can check in using QR codes, AI facial recognition, or RFID. Real-time attendance
                          updates and engagement metrics will appear here with AI-powered insights.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Student Monitor</CardTitle>
                    <CardDescription>Monitor student attendance and identify at-risk students</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search students..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Roll No</TableHead>
                      <TableHead>Attendance</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Risk Level</TableHead>
                      <TableHead>Last Seen</TableHead>
                      <TableHead>Engagement</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback>
                                {student.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{student.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{student.rollNo}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{student.attendance}%</span>
                            <Progress value={student.attendance} className="w-16 h-2" />
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={student.status === "present" ? "default" : "destructive"}>
                            {student.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getRiskBadgeVariant(student.riskLevel)}>{student.riskLevel} risk</Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{student.lastSeen}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{student.engagement}%</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Attendance Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">This Week</span>
                      <span className="font-bold">85%</span>
                    </div>
                    <Progress value={85} />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Last Week</span>
                      <span className="font-bold">78%</span>
                    </div>
                    <Progress value={78} />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">This Month</span>
                      <span className="font-bold">82%</span>
                    </div>
                    <Progress value={82} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    At-Risk Students
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-destructive/10 rounded">
                      <span className="font-medium">Simran Kaur</span>
                      <Badge variant="destructive">65%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-secondary/50 rounded">
                      <span className="font-medium">Rohit Sharma</span>
                      <Badge variant="secondary">78%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-secondary/50 rounded">
                      <span className="font-medium">Anjali Patel</span>
                      <Badge variant="secondary">72%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Generate Reports</CardTitle>
                <CardDescription>Export attendance data and compliance reports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="report-type">Report Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select report type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily Attendance</SelectItem>
                          <SelectItem value="weekly">Weekly Summary</SelectItem>
                          <SelectItem value="monthly">Monthly Report</SelectItem>
                          <SelectItem value="semester">Semester Report</SelectItem>
                          <SelectItem value="compliance">AICTE Compliance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="date-range">Date Range</Label>
                      <div className="flex gap-2">
                        <Input type="date" />
                        <Input type="date" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="class-filter">Class Filter</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="All classes" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Classes</SelectItem>
                          <SelectItem value="ai101">Artificial Intelligence Fundamentals</SelectItem>
                          <SelectItem value="ml201">Machine Learning Applications</SelectItem>
                          <SelectItem value="ds301">Advanced Data Structures</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="format">Export Format</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pdf">PDF</SelectItem>
                          <SelectItem value="excel">Excel</SelectItem>
                          <SelectItem value="csv">CSV</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
