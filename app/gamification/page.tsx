"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Trophy,
  Award,
  Flame,
  Star,
  Crown,
  Target,
  Users,
  TrendingUp,
  Gift,
  Zap,
  ArrowLeft,
  Sparkles,
} from "lucide-react"

export default function GamificationPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isLoaded, setIsLoaded] = useState(false)
  const [animateXP, setAnimateXP] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    // Animate XP counter on load
    setTimeout(() => setAnimateXP(true), 500)
  }, [])

  const studentStats = {
    level: 15,
    xp: 2850,
    xpToNext: 3000,
    currentStreak: 12,
    longestStreak: 28,
    totalBadges: 8,
    rank: 23,
    totalStudents: 2500,
    weeklyXP: 450,
    monthlyXP: 1200,
  }

  const badges = [
    {
      id: "perfect-week",
      name: "Perfect Week",
      description: "Attend all classes for a full week without missing any",
      icon: Trophy,
      color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      earned: true,
      earnedDate: "2024-12-10",
      rarity: "common",
      xp: 100,
    },
    {
      id: "early-bird",
      name: "Early Bird",
      description: "Check in 10 minutes early for 5 consecutive days",
      icon: Star,
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      earned: true,
      earnedDate: "2024-12-08",
      rarity: "uncommon",
      xp: 150,
    },
    {
      id: "streak-master",
      name: "Streak Master",
      description: "Maintain a 30-day attendance streak - AP Excellence",
      icon: Flame,
      color: "bg-gradient-to-br from-red-400 to-red-600",
      earned: false,
      progress: 12,
      target: 30,
      rarity: "rare",
      xp: 300,
    },
    {
      id: "class-champion",
      name: "AP Class Champion",
      description: "Achieve 95% attendance for the semester in Andhra Pradesh",
      icon: Crown,
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
      earned: false,
      progress: 87,
      target: 95,
      rarity: "epic",
      xp: 500,
    },
    {
      id: "engagement-expert",
      name: "Engagement Expert",
      description: "Participate actively in 50 class discussions",
      icon: Users,
      color: "bg-gradient-to-br from-green-400 to-green-600",
      earned: true,
      earnedDate: "2024-12-05",
      rarity: "uncommon",
      xp: 200,
    },
    {
      id: "punctuality-pro",
      name: "Punctuality Pro",
      description: "Never be late for 20 consecutive classes",
      icon: Target,
      color: "bg-gradient-to-br from-indigo-400 to-indigo-600",
      earned: false,
      progress: 15,
      target: 20,
      rarity: "rare",
      xp: 250,
    },
    {
      id: "semester-star",
      name: "AP Semester Star",
      description: "Top 10% attendance in your class across Andhra Pradesh",
      icon: Award,
      color: "bg-gradient-to-br from-pink-400 to-pink-600",
      earned: true,
      earnedDate: "2024-11-30",
      rarity: "legendary",
      xp: 1000,
    },
    {
      id: "comeback-king",
      name: "Comeback Champion",
      description: "Improve attendance by 20% in a month - Inspiring!",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-orange-400 to-orange-600",
      earned: false,
      progress: 12,
      target: 20,
      rarity: "rare",
      xp: 300,
    },
  ]

  const leaderboard = [
    {
      rank: 1,
      name: "Arjun Reddy",
      attendance: 98,
      streak: 45,
      level: 22,
      badges: 15,
      avatar: "/diverse-students-studying.png",
      college: "JNTU Hyderabad",
    },
    {
      rank: 2,
      name: "Priya Sharma",
      attendance: 96,
      streak: 38,
      level: 20,
      badges: 12,
      avatar: "/diverse-students-studying.png",
      college: "Andhra University",
    },
    {
      rank: 3,
      name: "Rohit Kumar",
      attendance: 94,
      streak: 32,
      level: 19,
      badges: 11,
      avatar: "/diverse-students-studying.png",
      college: "SVUCE Tirupati",
    },
    {
      rank: 4,
      name: "Anjali Patel",
      attendance: 93,
      streak: 28,
      level: 18,
      badges: 10,
      avatar: "/diverse-students-studying.png",
      college: "GITAM Visakhapatnam",
    },
    {
      rank: 5,
      name: "Vikram Singh",
      attendance: 92,
      streak: 25,
      level: 17,
      badges: 9,
      avatar: "/diverse-students-studying.png",
      college: "VIT-AP Amaravati",
    },
  ]

  const challenges = [
    {
      id: "weekly-warrior",
      title: "Weekly Warrior Challenge",
      description: "Attend all classes this week and maintain perfect attendance",
      progress: 4,
      target: 5,
      reward: "200 XP + Perfect Week Badge + Bonus Points",
      timeLeft: "2 days",
      difficulty: "Easy",
      icon: Trophy,
    },
    {
      id: "early-riser",
      title: "Early Riser Challenge",
      description: "Check in 15 minutes early for 3 consecutive days",
      progress: 1,
      target: 3,
      reward: "150 XP + Early Bird Bonus + Library Access",
      timeLeft: "5 days",
      difficulty: "Medium",
      icon: Star,
    },
    {
      id: "social-butterfly",
      title: "Social Butterfly Challenge",
      description: "Participate actively in 10 class discussions this week",
      progress: 6,
      target: 10,
      reward: "300 XP + Engagement Badge + Extra Credit",
      timeLeft: "1 week",
      difficulty: "Hard",
      icon: Users,
    },
  ]

  const rewards = [
    {
      id: "extra-credit",
      name: "Extra Credit Points",
      description: "Get 5 bonus points for your next assignment submission",
      cost: 500,
      icon: Star,
      available: true,
      category: "Academic",
    },
    {
      id: "library-pass",
      name: "Extended Library Access",
      description: "24/7 library access for one week with premium resources",
      cost: 300,
      icon: BookOpen,
      available: true,
      category: "Facilities",
    },
    {
      id: "parking-spot",
      name: "Reserved Parking Spot",
      description: "Reserved parking spot near your department for one month",
      cost: 800,
      icon: Target,
      available: false,
      category: "Facilities",
    },
    {
      id: "cafeteria-voucher",
      name: "Cafeteria Voucher",
      description: "Free meal voucher worth ₹150 at campus cafeteria",
      cost: 200,
      icon: Gift,
      available: true,
      category: "Food",
    },
    {
      id: "study-room",
      name: "Private Study Room",
      description: "Book a private study room for 4 hours with AC and WiFi",
      cost: 400,
      icon: BookOpen,
      available: true,
      category: "Academic",
    },
    {
      id: "sports-access",
      name: "Sports Complex Access",
      description: "Free access to sports complex and gym for one week",
      cost: 350,
      icon: Trophy,
      available: true,
      category: "Recreation",
    },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "text-gray-600 bg-gray-100"
      case "uncommon":
        return "text-green-600 bg-green-100"
      case "rare":
        return "text-blue-600 bg-blue-100"
      case "epic":
        return "text-purple-600 bg-purple-100"
      case "legendary":
        return "text-yellow-600 bg-yellow-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 border-green-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Hard":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-background via-card to-background ${isLoaded ? "animate-fade-in" : ""}`}
    >
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                  <path d="M7 8h10v1.5H7V8zm0 3h10v1.5H7V11zm0 3h7v1.5H7V14z" fill="currentColor" />
                  <circle cx="18" cy="6" r="3" fill="url(#gradient)" stroke="currentColor" strokeWidth="0.5" />
                  <path
                    d="M16.5 6l1 1L19 5.5"
                    stroke="white"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="15" y1="3" x2="21" y2="9">
                      <stop stopColor="#F97316" />
                      <stop offset="1" stopColor="#EA580C" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">EduAttend AP</h1>
                <p className="text-sm text-muted-foreground">Gamification Hub</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="hover:bg-primary/10 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Player Stats */}
        <Card className="mb-8 border-2 border-primary/20 shadow-lg animate-slide-up">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20 border-4 border-primary/20">
                  <AvatarImage src="/diverse-students-studying.png" />
                  <AvatarFallback className="text-xl font-bold">PS</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-3xl font-bold">Priya Singh</h2>
                  <p className="text-muted-foreground text-lg">Level {studentStats.level} Student</p>
                  <Badge variant="secondary" className="mt-1">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Rising Star
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">#{studentStats.rank}</div>
                <p className="text-sm text-muted-foreground">Class Rank</p>
                <p className="text-xs text-muted-foreground">of {studentStats.totalStudents} students</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div
                  className={`text-3xl font-bold text-accent transition-all duration-1000 ${animateXP ? "scale-110" : ""}`}
                >
                  {studentStats.xp}
                </div>
                <div className="text-sm text-muted-foreground mb-2">Experience Points</div>
                <Progress value={(studentStats.xp / studentStats.xpToNext) * 100} className="h-3" />
                <div className="text-xs text-muted-foreground mt-2">
                  {studentStats.xpToNext - studentStats.xp} XP to Level {studentStats.level + 1}
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Flame className="w-6 h-6 text-orange-500" />
                  <div className="text-3xl font-bold text-orange-500">{studentStats.currentStreak}</div>
                </div>
                <div className="text-sm text-muted-foreground">Current Streak</div>
                <div className="text-xs text-muted-foreground mt-1">Best: {studentStats.longestStreak} days</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <div className="text-3xl font-bold text-yellow-500">{studentStats.totalBadges}</div>
                </div>
                <div className="text-sm text-muted-foreground">Badges Earned</div>
                <div className="text-xs text-muted-foreground mt-1">3 more to unlock</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-chart-2">87%</div>
                <div className="text-sm text-muted-foreground">Attendance Rate</div>
                <div className="text-xs text-muted-foreground mt-1">Above AP average</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="badges" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 h-12">
            <TabsTrigger value="badges" className="text-sm">
              Badges
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="text-sm">
              Leaderboard
            </TabsTrigger>
            <TabsTrigger value="challenges" className="text-sm">
              Challenges
            </TabsTrigger>
            <TabsTrigger value="rewards" className="text-sm">
              Rewards
            </TabsTrigger>
            <TabsTrigger value="achievements" className="text-sm">
              Timeline
            </TabsTrigger>
          </TabsList>

          <TabsContent value="badges" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Trophy className="w-6 h-6" />
                  Badge Collection
                </CardTitle>
                <CardDescription className="text-base">
                  Earn badges by completing various attendance milestones and challenges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {badges.map((badge) => (
                    <div
                      key={badge.id}
                      className={`p-6 rounded-xl border-2 text-center transition-all duration-300 hover:scale-105 ${
                        badge.earned
                          ? "border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 shadow-lg"
                          : "border-muted bg-muted/20 opacity-75 hover:opacity-90"
                      }`}
                    >
                      <div
                        className={`w-20 h-20 rounded-full ${badge.color} flex items-center justify-center mx-auto mb-4 shadow-lg ${
                          !badge.earned && "grayscale"
                        }`}
                      >
                        <badge.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="font-bold text-base mb-2">{badge.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{badge.description}</p>
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Badge className={`text-xs font-medium ${getRarityColor(badge.rarity)}`}>
                          {badge.rarity.toUpperCase()}
                        </Badge>
                        <span className="text-xs text-muted-foreground">• {badge.xp} XP</span>
                      </div>
                      {badge.earned ? (
                        <Badge variant="default" className="text-xs">
                          ✓ Earned {new Date(badge.earnedDate!).toLocaleDateString()}
                        </Badge>
                      ) : badge.progress !== undefined ? (
                        <div className="space-y-2">
                          <Progress value={(badge.progress / badge.target!) * 100} className="h-3" />
                          <div className="text-sm font-medium text-primary">
                            {badge.progress}/{badge.target}
                          </div>
                        </div>
                      ) : (
                        <Badge variant="outline" className="text-xs">
                          Not Earned Yet
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Crown className="w-6 h-6" />
                  Andhra Pradesh Leaderboard
                </CardTitle>
                <CardDescription className="text-base">
                  Top performers across AP colleges based on attendance and engagement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((student, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                        index < 3
                          ? "bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 shadow-lg"
                          : "bg-muted/50 border border-muted hover:bg-muted/70"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg ${
                            index === 0
                              ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-white"
                              : index === 1
                                ? "bg-gradient-to-br from-gray-300 to-gray-500 text-white"
                                : index === 2
                                  ? "bg-gradient-to-br from-orange-400 to-orange-600 text-white"
                                  : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {student.rank}
                        </div>
                        <Avatar className="w-14 h-14 border-2 border-primary/20">
                          <AvatarImage src={student.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="font-bold">
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-lg">{student.name}</p>
                          <p className="text-sm text-muted-foreground">Level {student.level}</p>
                          <p className="text-xs text-muted-foreground">{student.college}</p>
                        </div>
                      </div>
                      <div className="flex-1 grid grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="font-bold text-xl text-primary">{student.attendance}%</div>
                          <div className="text-xs text-muted-foreground">Attendance</div>
                        </div>
                        <div>
                          <div className="font-bold text-xl text-orange-500">{student.streak}</div>
                          <div className="text-xs text-muted-foreground">Streak</div>
                        </div>
                        <div>
                          <div className="font-bold text-xl text-yellow-500">{student.badges}</div>
                          <div className="text-xs text-muted-foreground">Badges</div>
                        </div>
                      </div>
                      {index < 3 && <div className="text-4xl">{index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}</div>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="w-6 h-6" />
                  Active Challenges
                </CardTitle>
                <CardDescription className="text-base">
                  Complete challenges to earn extra XP and exclusive badges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {challenges.map((challenge) => (
                    <div
                      key={challenge.id}
                      className="p-6 border-2 rounded-xl hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <challenge.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{challenge.title}</h3>
                            <p className="text-sm text-muted-foreground">{challenge.description}</p>
                          </div>
                        </div>
                        <Badge className={`${getDifficultyColor(challenge.difficulty)} border`}>
                          {challenge.difficulty}
                        </Badge>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="font-medium">Progress</span>
                            <span className="font-bold">
                              {challenge.progress}/{challenge.target}
                            </span>
                          </div>
                          <Progress value={(challenge.progress / challenge.target) * 100} className="h-3" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-bold text-primary">{challenge.reward}</p>
                            <p className="text-xs text-muted-foreground">Time left: {challenge.timeLeft}</p>
                          </div>
                          <Button
                            variant={challenge.progress >= challenge.target ? "default" : "outline"}
                            size="sm"
                            disabled={challenge.progress >= challenge.target}
                            className="transition-all duration-200"
                          >
                            {challenge.progress >= challenge.target ? "✓ Completed" : "View Details"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Gift className="w-6 h-6" />
                      Rewards Store
                    </CardTitle>
                    <CardDescription className="text-base">
                      Spend your XP on exclusive rewards and campus benefits
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{studentStats.xp}</div>
                    <div className="text-sm text-muted-foreground">Available XP</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rewards.map((reward) => (
                    <div
                      key={reward.id}
                      className={`p-6 border-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                        !reward.available
                          ? "opacity-50 bg-muted/20 border-muted"
                          : "bg-card border-border hover:border-primary/50 shadow-lg"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                          <reward.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold">{reward.name}</h3>
                            <Badge variant="outline" className="text-xs">
                              {reward.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{reward.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Zap className="w-4 h-4 text-yellow-500" />
                              <span className="font-bold text-lg">{reward.cost} XP</span>
                            </div>
                            <Button
                              variant={reward.available && studentStats.xp >= reward.cost ? "default" : "outline"}
                              size="sm"
                              disabled={!reward.available || studentStats.xp < reward.cost}
                              className="transition-all duration-200"
                            >
                              {!reward.available
                                ? "Unavailable"
                                : studentStats.xp < reward.cost
                                  ? "Insufficient XP"
                                  : "Redeem"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Award className="w-6 h-6" />
                  Achievement Timeline
                </CardTitle>
                <CardDescription className="text-base">
                  Your journey and milestones in the EduAttend AP system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">AP Semester Star Badge Earned!</h3>
                      <p className="text-sm text-muted-foreground">
                        Achieved top 10% attendance across Andhra Pradesh colleges
                      </p>
                      <p className="text-sm text-green-600 font-bold">+1000 XP • November 30, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">Level 15 Milestone Reached!</h3>
                      <p className="text-sm text-muted-foreground">
                        Congratulations on reaching Level 15 - You're in the top tier!
                      </p>
                      <p className="text-sm text-blue-600 font-bold">December 12, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-200 rounded-xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                      <Flame className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">12-Day Streak Active!</h3>
                      <p className="text-sm text-muted-foreground">
                        Keep it up! You're on a fantastic attendance streak
                      </p>
                      <p className="text-sm text-yellow-600 font-bold">Current • Ongoing</p>
                    </div>
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
