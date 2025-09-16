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
  Building2,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Download,
  Search,
  Filter,
  Bell,
  Settings,
  BarChart3,
  Database,
  Wifi,
  WifiOff,
  Activity,
  FileText,
  TrendingUp,
  TrendingDown,
  Home,
  Brain,
  Globe,
  Zap,
  Target,
} from "lucide-react"

export default function AdminDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")

  const systemStats = {
    totalColleges: 1250,
    totalStudents: 2850000,
    totalFaculty: 185000,
    systemUptime: 99.97,
    activeDevices: 8420,
    offlineDevices: 28,
  }

  const complianceMetrics = {
    aicteCompliance: 99.2,
    dpdpCompliance: 100,
    auditTrails: 15750000,
    blockchainRecords: 12500000,
  }

  const colleges = [
    {
      id: "1",
      name: "Indian Institute of Technology, Delhi",
      students: 8500,
      faculty: 650,
      attendance: 94,
      status: "active",
      lastSync: "2 mins ago",
      devices: 45,
      state: "Delhi",
    },
    {
      id: "2",
      name: "Indian Institute of Science, Bangalore",
      students: 4200,
      faculty: 420,
      attendance: 96,
      status: "active",
      lastSync: "1 min ago",
      devices: 28,
      state: "Karnataka",
    },
    {
      id: "3",
      name: "National Institute of Technology, Trichy",
      students: 6800,
      faculty: 480,
      attendance: 91,
      status: "warning",
      lastSync: "15 mins ago",
      devices: 32,
      state: "Tamil Nadu",
    },
    {
      id: "4",
      name: "Birla Institute of Technology, Pilani",
      students: 12000,
      faculty: 850,
      attendance: 89,
      status: "active",
      lastSync: "3 mins ago",
      devices: 58,
      state: "Rajasthan",
    },
  ]

  const alerts = [
    {
      id: "1",
      type: "warning",
      message: "Low attendance detected at 12 institutions across 3 states",
      time: "5 mins ago",
      severity: "medium",
    },
    {
      id: "2",
      type: "error",
      message: "Network connectivity issues in Northeast region",
      time: "18 mins ago",
      severity: "high",
    },
    {
      id: "3",
      type: "info",
      message: "National compliance report generated for Ministry of Education",
      time: "45 mins ago",
      severity: "low",
    },
    {
      id: "4",
      type: "success",
      message: "AI-powered fraud detection prevented 847 attendance manipulations",
      time: "1 hour ago",
      severity: "low",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
      case "warning":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
            Warning
          </Badge>
        )
      case "offline":
        return <Badge variant="destructive">Offline</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "error":
        return <XCircle className="w-5 h-5 text-red-500" />
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      default:
        return <Activity className="w-5 h-5 text-blue-500" />
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
                <p className="text-sm text-slate-600 font-medium">National Administration Portal</p>
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
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-red-500 hover:bg-red-600">4</Badge>
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-blue-50">
                <Settings className="w-4 h-4" />
              </Button>
              <Avatar className="w-10 h-10 border-2 border-blue-200">
                <AvatarImage src="/edutrack-logo.jpg" />
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold">
                  MS
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
                MS
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 text-balance">Welcome, Mr. Sharma!</h2>
              <p className="text-slate-600 text-lg">National System Administrator</p>
              <p className="text-sm text-slate-500 mb-2">Ministry of Education • Government of India</p>
              <div className="flex items-center gap-3 mt-2">
                <Badge variant="secondary" className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
                  National Administrator
                </Badge>
                <Badge variant="outline" className="border-blue-300 text-blue-700">
                  All India Access
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-100 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Total Institutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold">{systemStats.totalColleges.toLocaleString()}</div>
                <Globe className="w-5 h-5 text-blue-200" />
              </div>
              <p className="text-sm text-blue-100 mt-1">across all states</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-green-100 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Total Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold">{(systemStats.totalStudents / 1000000).toFixed(1)}M</div>
                <Brain className="w-5 h-5 text-green-200" />
              </div>
              <p className="text-sm text-green-100 mt-1">future leaders</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-purple-100 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                System Uptime
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold">{systemStats.systemUptime}%</div>
                <Zap className="w-5 h-5 text-purple-200" />
              </div>
              <p className="text-sm text-purple-100 mt-1">reliability</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-red-500 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-orange-100 flex items-center gap-2">
                <Wifi className="w-4 h-4" />
                Active Devices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold">{(systemStats.activeDevices / 1000).toFixed(1)}K</div>
                <Target className="w-5 h-5 text-orange-200" />
              </div>
              {systemStats.offlineDevices > 0 && (
                <p className="text-sm text-orange-100 mt-1">{systemStats.offlineDevices} offline</p>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mb-10 border-0 shadow-lg bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-slate-800">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
              National System Alerts
            </CardTitle>
            <CardDescription className="text-slate-600">
              Real-time monitoring across all educational institutions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.slice(0, 4).map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  {getAlertIcon(alert.type)}
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800">{alert.message}</p>
                    <p className="text-sm text-slate-600">{alert.time}</p>
                  </div>
                  <Badge
                    variant={
                      alert.severity === "high" ? "destructive" : alert.severity === "medium" ? "secondary" : "outline"
                    }
                  >
                    {alert.severity}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="institutions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-white/80 p-1 rounded-xl shadow-sm">
            <TabsTrigger value="institutions" className="rounded-lg font-medium">
              Institutions
            </TabsTrigger>
            <TabsTrigger value="compliance" className="rounded-lg font-medium">
              Compliance
            </TabsTrigger>
            <TabsTrigger value="analytics" className="rounded-lg font-medium">
              AI Analytics
            </TabsTrigger>
            <TabsTrigger value="devices" className="rounded-lg font-medium">
              IoT Devices
            </TabsTrigger>
            <TabsTrigger value="reports" className="rounded-lg font-medium">
              Gov Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="institutions" className="space-y-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-slate-800">National Institution Management</CardTitle>
                    <CardDescription className="text-slate-600">
                      Monitor and manage all educational institutions across India
                    </CardDescription>
                  </div>
                  <div className="flex gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input placeholder="Search institutions..." className="pl-10 w-80" />
                    </div>
                    <Button variant="outline" size="sm" className="bg-white hover:bg-slate-50">
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
                      <TableHead>Institution</TableHead>
                      <TableHead>State</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Faculty</TableHead>
                      <TableHead>Attendance</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Sync</TableHead>
                      <TableHead>Devices</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {colleges.map((college) => (
                      <TableRow key={college.id} className="hover:bg-slate-50">
                        <TableCell>
                          <div>
                            <p className="font-semibold text-slate-800">{college.name}</p>
                            <p className="text-sm text-slate-500">ID: {college.id}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {college.state}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium">{college.students.toLocaleString()}</TableCell>
                        <TableCell className="font-medium">{college.faculty}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{college.attendance}%</span>
                            <Progress value={college.attendance} className="w-20 h-2" />
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(college.status)}</TableCell>
                        <TableCell className="text-sm text-slate-600">{college.lastSync}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Wifi className="w-4 h-4 text-green-500" />
                            <span className="font-medium">{college.devices}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" className="hover:bg-blue-50">
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

          <TabsContent value="compliance" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-slate-800">
                    <Shield className="w-6 h-6 text-blue-600" />
                    AICTE Compliance
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    All India Council for Technical Education
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-slate-700">National Compliance Rate</span>
                      <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {complianceMetrics.aicteCompliance}%
                      </span>
                    </div>
                    <Progress value={complianceMetrics.aicteCompliance} className="h-4 bg-blue-100" />
                    <div className="grid grid-cols-2 gap-6 pt-4">
                      <div className="text-center p-4 rounded-xl bg-green-50 border border-green-200">
                        <div className="text-3xl font-bold text-green-600">1,240</div>
                        <div className="text-sm text-green-700 font-medium">Compliant Institutions</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-red-50 border border-red-200">
                        <div className="text-3xl font-bold text-red-600">10</div>
                        <div className="text-sm text-red-700 font-medium">Non-compliant</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-slate-800">
                    <Database className="w-6 h-6 text-green-600" />
                    DPDP Act 2023
                  </CardTitle>
                  <CardDescription className="text-slate-600">Digital Personal Data Protection Act</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-slate-700">Privacy Compliance</span>
                      <span className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {complianceMetrics.dpdpCompliance}%
                      </span>
                    </div>
                    <Progress value={complianceMetrics.dpdpCompliance} className="h-4 bg-green-100" />
                    <div className="grid grid-cols-2 gap-6 pt-4">
                      <div className="text-center p-4 rounded-xl bg-green-50 border border-green-200">
                        <div className="text-3xl font-bold text-green-600">1,250</div>
                        <div className="text-sm text-green-700 font-medium">Fully Compliant</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-green-50 border border-green-200">
                        <div className="text-3xl font-bold text-green-600">0</div>
                        <div className="text-sm text-green-700 font-medium">Violations</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-slate-800">Blockchain & Audit Trail System</CardTitle>
                <CardDescription className="text-slate-600">
                  Immutable record keeping and national compliance tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {(complianceMetrics.auditTrails / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-sm text-slate-600 font-medium mt-2">Audit Trail Records</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      {(complianceMetrics.blockchainRecords / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-sm text-slate-600 font-medium mt-2">Blockchain Anchored</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      100%
                    </div>
                    <div className="text-sm text-slate-600 font-medium mt-2">Tamper-proof Security</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    State-wide Attendance Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">This Month</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">84%</span>
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                    <Progress value={84} />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Last Month</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">81%</span>
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      </div>
                    </div>
                    <Progress value={81} />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Year Average</span>
                      <span className="font-bold">83%</span>
                    </div>
                    <Progress value={83} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>District-wise Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                      <span className="font-medium">Ludhiana</span>
                      <Badge className="bg-green-500">89%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                      <span className="font-medium">Jalandhar</span>
                      <Badge className="bg-blue-500">87%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                      <span className="font-medium">Patiala</span>
                      <Badge variant="secondary">82%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-orange-50 rounded">
                      <span className="font-medium">Amritsar</span>
                      <Badge variant="secondary">79%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Risk Analytics</CardTitle>
                <CardDescription>AI-powered insights for policy making</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">1,250</div>
                    <div className="text-sm text-muted-foreground">High Risk Students</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">3,800</div>
                    <div className="text-sm text-muted-foreground">Medium Risk</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <div className="text-sm text-muted-foreground">Interventions This Month</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="devices" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Device Management
                </CardTitle>
                <CardDescription>Monitor and manage attendance capture devices across all colleges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Wifi className="w-5 h-5 text-green-500" />
                      <div className="text-2xl font-bold text-green-600">{systemStats.activeDevices}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">Active Devices</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <WifiOff className="w-5 h-5 text-red-500" />
                      <div className="text-2xl font-bold text-red-600">{systemStats.offlineDevices}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">Offline Devices</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">98.2%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Wifi className="w-4 h-4 text-green-500" />
                      <div>
                        <p className="font-medium">Lab-A Camera System</p>
                        <p className="text-sm text-muted-foreground">Government College, Ludhiana</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Online</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <WifiOff className="w-4 h-4 text-red-500" />
                      <div>
                        <p className="font-medium">Main Hall QR Scanner</p>
                        <p className="text-sm text-muted-foreground">Guru Nanak Dev Engineering College</p>
                      </div>
                    </div>
                    <Badge variant="destructive">Offline</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Wifi className="w-4 h-4 text-green-500" />
                      <div>
                        <p className="font-medium">RFID Entry System</p>
                        <p className="text-sm text-muted-foreground">Punjab Technical University</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Online</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Government Reports
                </CardTitle>
                <CardDescription>Generate compliance and analytical reports for policy making</CardDescription>
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
                          <SelectItem value="aicte">AICTE Compliance Report</SelectItem>
                          <SelectItem value="state">State-wide Analytics</SelectItem>
                          <SelectItem value="district">District Performance</SelectItem>
                          <SelectItem value="college">College-wise Summary</SelectItem>
                          <SelectItem value="audit">Audit Trail Report</SelectItem>
                          <SelectItem value="blockchain">Blockchain Verification</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="period">Time Period</Label>
                      <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="week">This Week</SelectItem>
                          <SelectItem value="month">This Month</SelectItem>
                          <SelectItem value="quarter">This Quarter</SelectItem>
                          <SelectItem value="semester">This Semester</SelectItem>
                          <SelectItem value="year">This Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="district-filter">District Filter</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="All districts" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Districts</SelectItem>
                          <SelectItem value="ludhiana">Ludhiana</SelectItem>
                          <SelectItem value="jalandhar">Jalandhar</SelectItem>
                          <SelectItem value="patiala">Patiala</SelectItem>
                          <SelectItem value="amritsar">Amritsar</SelectItem>
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
                          <SelectItem value="pdf">PDF Report</SelectItem>
                          <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                          <SelectItem value="csv">CSV Data</SelectItem>
                          <SelectItem value="json">JSON API</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Generate Government Report
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">Monthly AICTE Compliance Report</p>
                      <p className="text-sm text-muted-foreground">Generated on Dec 15, 2024</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">State-wide Attendance Analytics</p>
                      <p className="text-sm text-muted-foreground">Generated on Dec 10, 2024</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">Blockchain Audit Trail</p>
                      <p className="text-sm text-muted-foreground">Generated on Dec 5, 2024</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
