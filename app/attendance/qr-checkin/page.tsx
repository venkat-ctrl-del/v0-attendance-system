"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, QrCode, CheckCircle, XCircle, Clock, MapPin, Smartphone } from "lucide-react"

export default function QRCheckinPage() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState<{
    success: boolean
    message: string
    studentName?: string
    className?: string
    time?: string
  } | null>(null)
  const [currentTime, setCurrentTime] = useState(new Date())

  // Mock current class data
  const currentClass = {
    subject: "Computer Science 101",
    instructor: "Dr. Singh",
    room: "Lab-A",
    time: "09:00 - 10:00 AM",
    enrolled: 45,
    present: 23,
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleQRScan = () => {
    setIsScanning(true)
    // Simulate QR scanning process
    setTimeout(() => {
      const mockResults = [
        {
          success: true,
          message: "Attendance marked successfully!",
          studentName: "Priya Singh",
          className: "Computer Science 101",
          time: currentTime.toLocaleTimeString(),
        },
        {
          success: false,
          message: "Invalid QR code or class not active",
        },
        {
          success: false,
          message: "You have already checked in for this class",
        },
      ]
      const result = mockResults[Math.floor(Math.random() * mockResults.length)]
      setScanResult(result)
      setIsScanning(false)
    }, 2000)
  }

  const resetScan = () => {
    setScanResult(null)
    setIsScanning(false)
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
                <p className="text-sm text-muted-foreground">QR Check-in</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => window.history.back()}>
              Back
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

        {/* Current Class Info */}
        <Card className="mb-8 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Current Class
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-lg">{currentClass.subject}</h3>
                <p className="text-muted-foreground">Instructor: {currentClass.instructor}</p>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{currentClass.room}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{currentClass.time}</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {currentClass.present}/{currentClass.enrolled}
                  </div>
                  <div className="text-sm text-muted-foreground">Students Present</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* QR Scanner Interface */}
        <div className="max-w-md mx-auto">
          {!scanResult ? (
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <QrCode className="w-6 h-6" />
                  QR Code Check-in
                </CardTitle>
                <CardDescription>Scan the QR code displayed in your classroom to mark attendance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* QR Scanner Simulation */}
                <div className="relative">
                  <div className="w-64 h-64 mx-auto bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
                    {isScanning ? (
                      <div className="text-center">
                        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
                        <p className="text-sm text-muted-foreground">Scanning...</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <QrCode className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Position QR code here</p>
                      </div>
                    )}
                  </div>
                  {/* Scanner overlay */}
                  <div className="absolute inset-0 border-2 border-primary rounded-lg opacity-50 pointer-events-none">
                    <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary"></div>
                    <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-primary"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-primary"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary"></div>
                  </div>
                </div>

                <Button onClick={handleQRScan} disabled={isScanning} className="w-full" size="lg">
                  {isScanning ? (
                    <>
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Scanning QR Code...
                    </>
                  ) : (
                    <>
                      <Smartphone className="w-4 h-4 mr-2" />
                      Start QR Scan
                    </>
                  )}
                </Button>

                <div className="text-xs text-muted-foreground">
                  Make sure you're in the correct classroom and the QR code is clearly visible
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card
              className={`text-center ${scanResult.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {scanResult.success ? (
                    <CheckCircle className="w-16 h-16 text-green-500" />
                  ) : (
                    <XCircle className="w-16 h-16 text-red-500" />
                  )}
                </div>
                <CardTitle className={scanResult.success ? "text-green-700" : "text-red-700"}>
                  {scanResult.success ? "Check-in Successful!" : "Check-in Failed"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className={`text-sm ${scanResult.success ? "text-green-600" : "text-red-600"}`}>
                  {scanResult.message}
                </p>

                {scanResult.success && scanResult.studentName && (
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar>
                        <AvatarImage src="/diverse-students-studying.png" />
                        <AvatarFallback>PS</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="font-medium">{scanResult.studentName}</p>
                        <p className="text-sm text-muted-foreground">Student</p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex justify-between">
                        <span>Class:</span>
                        <span>{scanResult.className}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span>{scanResult.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <Badge className="bg-green-500">Present</Badge>
                      </div>
                    </div>
                  </div>
                )}

                <Button onClick={resetScan} variant="outline" className="w-full bg-transparent">
                  Scan Another QR Code
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Instructions */}
        <Card className="mt-8 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-lg">How to Use QR Check-in</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </div>
                <p>Make sure you're physically present in the classroom</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <p>Look for the QR code displayed on the classroom screen or board</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </div>
                <p>Click "Start QR Scan" and position your camera over the QR code</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  4
                </div>
                <p>Wait for confirmation that your attendance has been marked</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
