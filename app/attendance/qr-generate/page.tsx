"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, QrCode, Users, Clock, Play, Square, RotateCcw, Download } from "lucide-react"

export default function QRGeneratePage() {
  const [isClassActive, setIsClassActive] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [qrCode, setQrCode] = useState("")
  const [attendanceCount, setAttendanceCount] = useState(0)

  // Mock class data
  const classData = {
    subject: "Computer Science 101",
    instructor: "Dr. Singh",
    room: "Lab-A",
    time: "09:00 - 10:00 AM",
    enrolled: 45,
    sessionId: "CS101-20241216-0900",
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isClassActive) {
      // Generate QR code data (in real implementation, this would be a proper QR code)
      const qrData = {
        sessionId: classData.sessionId,
        timestamp: Date.now(),
        room: classData.room,
        subject: classData.subject,
      }
      setQrCode(JSON.stringify(qrData))

      // Simulate students checking in
      const interval = setInterval(() => {
        setAttendanceCount((prev) => {
          const newCount = prev + Math.floor(Math.random() * 3)
          return Math.min(newCount, classData.enrolled)
        })
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isClassActive])

  const startClass = () => {
    setIsClassActive(true)
    setAttendanceCount(0)
  }

  const endClass = () => {
    setIsClassActive(false)
    setAttendanceCount(0)
  }

  const regenerateQR = () => {
    if (isClassActive) {
      const qrData = {
        sessionId: classData.sessionId,
        timestamp: Date.now(),
        room: classData.room,
        subject: classData.subject,
      }
      setQrCode(JSON.stringify(qrData))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">EduAttend</h1>
                <p className="text-sm text-muted-foreground">Faculty QR Generator</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => window.history.back()}>
              Back to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Current Time */}
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-primary mb-2">
            {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </div>
          <div className="text-muted-foreground">
            {currentTime.toLocaleDateString([], {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>

        {/* Class Information */}
        <Card className="mb-8 border-2 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {classData.subject}
                </CardTitle>
                <CardDescription>
                  {classData.instructor} • {classData.room} • {classData.time}
                </CardDescription>
              </div>
              <Badge variant={isClassActive ? "default" : "secondary"}>{isClassActive ? "Active" : "Inactive"}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{attendanceCount}</div>
                  <div className="text-sm text-muted-foreground">Present</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground">{classData.enrolled - attendanceCount}</div>
                  <div className="text-sm text-muted-foreground">Remaining</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {attendanceCount > 0 ? Math.round((attendanceCount / classData.enrolled) * 100) : 0}%
                  </div>
                  <div className="text-sm text-muted-foreground">Attendance</div>
                </div>
              </div>
              <div className="flex gap-2">
                {!isClassActive ? (
                  <Button onClick={startClass} className="gap-2">
                    <Play className="w-4 h-4" />
                    Start Class
                  </Button>
                ) : (
                  <Button onClick={endClass} variant="destructive" className="gap-2">
                    <Square className="w-4 h-4" />
                    End Class
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* QR Code Display */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <QrCode className="w-6 h-6" />
                Attendance QR Code
              </CardTitle>
              <CardDescription>Display this QR code for students to scan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {isClassActive ? (
                <>
                  {/* QR Code Simulation */}
                  <div className="w-64 h-64 mx-auto bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                    <div className="w-56 h-56 bg-black rounded grid grid-cols-8 gap-1 p-2">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className={`rounded-sm ${Math.random() > 0.5 ? "bg-white" : "bg-black"}`} />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm text-muted-foreground">Session ID: {classData.sessionId}</div>
                    <div className="flex gap-2 justify-center">
                      <Button onClick={regenerateQR} variant="outline" size="sm">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Regenerate
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-64 h-64 mx-auto bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                  <div className="text-center">
                    <QrCode className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Start class to generate QR code</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Live Attendance Feed */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Live Attendance Feed
                {isClassActive && <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>}
              </CardTitle>
              <CardDescription>Real-time check-ins from students</CardDescription>
            </CardHeader>
            <CardContent>
              {isClassActive ? (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {attendanceCount > 0 ? (
                    Array.from({ length: Math.min(attendanceCount, 10) }).map((_, i) => {
                      const students = [
                        "Priya Singh",
                        "Arjun Kumar",
                        "Simran Kaur",
                        "Rohit Sharma",
                        "Anjali Patel",
                        "Vikram Singh",
                        "Neha Gupta",
                        "Rajesh Kumar",
                        "Pooja Sharma",
                        "Amit Singh",
                      ]
                      const student = students[i % students.length]
                      const time = new Date(Date.now() - (attendanceCount - i) * 30000)

                      return (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <Users className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="font-medium text-sm">{student}</p>
                              <p className="text-xs text-muted-foreground">{time.toLocaleTimeString()}</p>
                            </div>
                          </div>
                          <Badge className="bg-green-500">Present</Badge>
                        </div>
                      )
                    })
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>Waiting for students to check in...</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Clock className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Class not started yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg">QR Code Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">For Faculty:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      1
                    </div>
                    <p>Click "Start Class" to begin the session</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      2
                    </div>
                    <p>Display the generated QR code on the classroom screen</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      3
                    </div>
                    <p>Monitor live attendance feed as students check in</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      4
                    </div>
                    <p>Click "End Class" when the session is complete</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">For Students:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      1
                    </div>
                    <p>Be physically present in the classroom</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      2
                    </div>
                    <p>Open the EduAttend app and go to QR Check-in</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      3
                    </div>
                    <p>Scan the QR code displayed on the screen</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      4
                    </div>
                    <p>Wait for confirmation of successful check-in</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
