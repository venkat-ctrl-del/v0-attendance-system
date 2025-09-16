"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  TrendingUp,
  TrendingDown,
  Users,
  AlertTriangle,
  Brain,
  Target,
  Calendar,
  BarChart3,
  ArrowLeft,
} from "lucide-react"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import Link from "next/link"

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")
  const [selectedRegion, setSelectedRegion] = useState("all")

  // Mock data for charts
  const attendanceTrends = [
    { month: "Jan", attendance: 82, target: 85 },
    { month: "Feb", attendance: 85, target: 85 },
    { month: "Mar", attendance: 83, target: 85 },
    { month: "Apr", attendance: 88, target: 85 },
    { month: "May", attendance: 91, target: 85 },
    { month: "Jun", attendance: 87, target: 85 },
    { month: "Jul", attendance: 90, target: 85 },
    { month: "Aug", attendance: 93, target: 85 },
    { month: "Sep", attendance: 89, target: 85 },
    { month: "Oct", attendance: 94, target: 85 },
    { month: "Nov", attendance: 92, target: 85 },
    { month: "Dec", attendance: 96, target: 85 },
  ]

  const weeklyData = [
    { day: "Mon", present: 12500, absent: 1800, total: 14300 },
    { day: "Tue", present: 13200, absent: 1100, total: 14300 },
    { day: "Wed", present: 12800, absent: 1500, total: 14300 },
    { day: "Thu", present: 13000, absent: 1300, total: 14300 },
    { day: "Fri", present: 11900, absent: 2400, total: 14300 },
  ]

  const regionPerformance = [
    { name: "North India", attendance: 92, students: 4200000 },
    { name: "South India", attendance: 94, students: 3800000 },
    { name: "West India", attendance: 89, students: 3500000 },
    { name: "East India", attendance: 87, students: 2800000 },
    { name: "Central India", attendance: 85, students: 2200000 },
    { name: "Northeast", attendance: 91, students: 800000 },
  ]

  const riskDistribution = [
    { name: "Low Risk", value: 85, color: "#22c55e" },
    { name: "Medium Risk", value: 12, color: "#f59e0b" },
    { name: "High Risk", value: 3, color: "#ef4444" },
  ]

  const engagementMetrics = [
    { metric: "Class Participation", score: 78, trend: "up" },
    { metric: "Assignment Submission", score: 85, trend: "up" },
    { metric: "Online Activity", score: 72, trend: "down" },
    { metric: "Discussion Forums", score: 68, trend: "up" },
  ]

  const predictiveInsights = [
    {
      title: "Dropout Risk Prediction",
      description: "1,250 students identified as high-risk for dropping out",
      accuracy: "85%",
      trend: "down",
      action: "Intervention programs recommended",
    },
    {
      title: "Attendance Pattern Analysis",
      description: "Friday attendance consistently 15% lower than Monday",
      accuracy: "92%",
      trend: "stable",
      action: "Schedule adjustment suggested",
    },
    {
      title: "Engagement Correlation",
      description: "Strong correlation between attendance and final grades (r=0.78)",
      accuracy: "78%",
      trend: "up",
      action: "Early warning system active",
    },
  ]

  const COLORS = ["#22c55e", "#f59e0b", "#ef4444"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-blue-50 transition-all duration-200 text-slate-800 font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    EduTrack Pro Analytics
                  </h1>
                  <p className="text-sm text-slate-600 font-medium">Advanced Intelligence Dashboard</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-36 bg-white/80 backdrop-blur-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-40 bg-white/80 backdrop-blur-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All India</SelectItem>
                  <SelectItem value="north">North India</SelectItem>
                  <SelectItem value="south">South India</SelectItem>
                  <SelectItem value="west">West India</SelectItem>
                  <SelectItem value="east">East India</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                Overall Attendance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  91.2%
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-600 font-semibold">+3.8%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                Active Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  15.2M
                </div>
                <Users className="w-5 h-5 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                At-Risk Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  125K
                </div>
                <div className="flex items-center gap-1">
                  <TrendingDown className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-600 font-semibold">-8.2%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                AI Accuracy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  96.8%
                </div>
                <Brain className="w-5 h-5 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="trends" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-2">
            <TabsTrigger value="trends" className="rounded-xl font-semibold">
              Trends
            </TabsTrigger>
            <TabsTrigger value="performance" className="rounded-xl font-semibold">
              Performance
            </TabsTrigger>
            <TabsTrigger value="risk" className="rounded-xl font-semibold">
              Risk Analysis
            </TabsTrigger>
            <TabsTrigger value="engagement" className="rounded-xl font-semibold">
              Engagement
            </TabsTrigger>
            <TabsTrigger value="predictions" className="rounded-xl font-semibold">
              AI Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trends" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-bold">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                    National Attendance Trends
                  </CardTitle>
                  <CardDescription className="text-base">
                    Monthly attendance vs target comparison across India
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={attendanceTrends}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="month" stroke="#64748b" />
                      <YAxis domain={[75, 100]} stroke="#64748b" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          border: "none",
                          borderRadius: "12px",
                          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="attendance"
                        stroke="url(#blueGradient)"
                        strokeWidth={4}
                        name="Actual Attendance"
                        dot={{ fill: "#3b82f6", strokeWidth: 2, r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="target"
                        stroke="#10b981"
                        strokeDasharray="8 8"
                        strokeWidth={3}
                        name="Target"
                        dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
                      />
                      <defs>
                        <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Weekly Attendance Pattern</CardTitle>
                  <CardDescription className="text-base">Daily attendance distribution nationwide</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="day" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          border: "none",
                          borderRadius: "12px",
                          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Legend />
                      <Bar
                        dataKey="present"
                        stackId="a"
                        fill="url(#greenGradient)"
                        name="Present"
                        radius={[0, 0, 4, 4]}
                      />
                      <Bar dataKey="absent" stackId="a" fill="url(#redGradient)" name="Absent" radius={[4, 4, 0, 0]} />
                      <defs>
                        <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#059669" />
                        </linearGradient>
                        <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ef4444" />
                          <stop offset="100%" stopColor="#dc2626" />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Semester Overview</CardTitle>
                <CardDescription className="text-base">
                  Comprehensive attendance trends across the academic year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={attendanceTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis domain={[75, 100]} stroke="#64748b" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="attendance"
                      stroke="url(#blueGradient)"
                      fill="url(#blueGradient)"
                      fillOpacity={0.3}
                    />
                    <defs>
                      <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Regional Performance Comparison</CardTitle>
                <CardDescription className="text-base">
                  Attendance rates across different regions of India
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={regionPerformance} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" domain={[75, 100]} stroke="#64748b" />
                    <YAxis dataKey="name" type="category" width={120} stroke="#64748b" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Bar dataKey="attendance" fill="url(#blueGradient)">
                      {regionPerformance.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            entry.attendance >= 90
                              ? "hsl(var(--chart-1))"
                              : entry.attendance >= 85
                                ? "hsl(var(--chart-4))"
                                : "hsl(var(--chart-3))"
                          }
                        />
                      ))}
                    </Bar>
                    <defs>
                      <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8">
              {regionPerformance.slice(0, 3).map((region, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold">{region.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-600">Attendance Rate</span>
                        <span className="font-bold">{region.attendance}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-600">Total Students</span>
                        <span className="font-bold">{region.students.toLocaleString()}</span>
                      </div>
                      <Badge
                        variant={
                          region.attendance >= 90 ? "default" : region.attendance >= 85 ? "secondary" : "destructive"
                        }
                      >
                        {region.attendance >= 90 ? "Excellent" : region.attendance >= 85 ? "Good" : "Needs Improvement"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="risk" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-bold">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    Risk Distribution
                  </CardTitle>
                  <CardDescription className="text-base">Student risk level breakdown across India</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                      <Pie
                        data={riskDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {riskDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          border: "none",
                          borderRadius: "12px",
                          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Risk Factors Analysis</CardTitle>
                  <CardDescription className="text-base">Key indicators contributing to student risk</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                      <div>
                        <p className="font-medium">Low Attendance (&lt;60%)</p>
                        <p className="text-sm text-slate-600">Primary risk factor</p>
                      </div>
                      <Badge variant="destructive">High Impact</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                      <div>
                        <p className="font-medium">Irregular Patterns</p>
                        <p className="text-sm text-slate-600">Inconsistent attendance</p>
                      </div>
                      <Badge variant="secondary">Medium Impact</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                      <div>
                        <p className="font-medium">Late Submissions</p>
                        <p className="text-sm text-slate-600">Assignment delays</p>
                      </div>
                      <Badge variant="secondary">Medium Impact</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-medium">Low Engagement</p>
                        <p className="text-sm text-slate-600">Minimal participation</p>
                      </div>
                      <Badge variant="outline">Low Impact</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Intervention Recommendations</CardTitle>
                <CardDescription className="text-base">AI-powered suggestions for at-risk students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Immediate Actions</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                        <Target className="w-4 h-4 text-primary" />
                        <span className="text-sm">Personal counseling sessions</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                        <Target className="w-4 h-4 text-primary" />
                        <span className="text-sm">Peer mentorship programs</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                        <Target className="w-4 h-4 text-primary" />
                        <span className="text-sm">Academic support workshops</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Long-term Strategies</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="text-sm">Flexible scheduling options</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="text-sm">Online learning alternatives</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="text-sm">Career guidance programs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engagement" className="space-y-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Student Engagement Metrics</CardTitle>
                <CardDescription className="text-base">
                  Comprehensive engagement analysis across different activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {engagementMetrics.map((metric, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{metric.metric}</span>
                        {metric.trend === "up" ? (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                      <div className="text-3xl font-bold text-primary">{metric.score}%</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Engagement vs Attendance Correlation</CardTitle>
                  <CardDescription className="text-base">
                    Relationship between engagement and attendance rates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={attendanceTrends}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="month" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          border: "none",
                          borderRadius: "12px",
                          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="attendance"
                        stroke="url(#blueGradient)"
                        name="Attendance"
                        dot={{ fill: "#3b82f6", strokeWidth: 2, r: 6 }}
                      />
                      <defs>
                        <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Activity Participation</CardTitle>
                  <CardDescription className="text-base">Student participation in various activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Class Discussions</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }}></div>
                        </div>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Online Quizzes</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Group Projects</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-chart-2 h-2 rounded-full" style={{ width: "72%" }}></div>
                        </div>
                        <span className="text-sm font-medium">72%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Forum Posts</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-chart-4 h-2 rounded-full" style={{ width: "68%" }}></div>
                        </div>
                        <span className="text-sm font-medium">68%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="predictions" className="space-y-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold">
                  <Brain className="w-6 h-6 text-purple-600" />
                  AI-Powered Predictive Insights
                </CardTitle>
                <CardDescription className="text-base">
                  Machine learning analysis and predictions for educational outcomes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-8">
                  {predictiveInsights.map((insight, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold">{insight.title}</h4>
                          <p className="text-sm text-slate-600 mt-1">{insight.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Accuracy: {insight.accuracy}</Badge>
                          {insight.trend === "up" && <TrendingUp className="w-4 h-4 text-green-500" />}
                          {insight.trend === "down" && <TrendingDown className="w-4 h-4 text-red-500" />}
                          {insight.trend === "stable" && <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary">{insight.action}</span>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Model Performance</CardTitle>
                  <CardDescription className="text-base">AI model accuracy and reliability metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Dropout Prediction</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Attendance Forecasting</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full" style={{ width: "92%" }}></div>
                        </div>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Risk Assessment</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-chart-2 h-2 rounded-full" style={{ width: "78%" }}></div>
                        </div>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Intervention Success Rate</CardTitle>
                  <CardDescription className="text-base">Effectiveness of AI-recommended interventions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-4">73%</div>
                    <p className="text-sm text-slate-600 mb-6">
                      Students showed improvement after AI-recommended interventions
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">892K</div>
                        <div className="text-slate-600">Successful Cases</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-red-600">328K</div>
                        <div className="text-slate-600">Ongoing Cases</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
