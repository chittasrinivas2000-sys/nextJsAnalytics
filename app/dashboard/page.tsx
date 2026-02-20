"use client"

import Link from "next/link"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const revenueData = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 3000 },
  { month: "Mar", value: 5200 },
  { month: "Apr", value: 7800 },
  { month: "May", value: 6900 },
  { month: "Jun", value: 9500 },
]

export default function HomePage() {
  return (
    <div className="relative bg-slate-950 text-white min-h-screen overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 space-y-32 p-8 md:p-16">

        {/* HERO */}
        <section className="text-center space-y-8">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
             Analytics
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Powerful analytics, smart insights, and enterprise-grade
            performance — built for modern SaaS companies.
          </p>

          <div className="flex justify-center gap-6">
            <Link href="/dashboard">
              <Button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-6 text-lg rounded-xl shadow-xl">
                Get Started
              </Button>
            </Link>

            <Button
              variant="outline"
              className="border-slate-700 text-slate-300 px-8 py-6 text-lg rounded-xl"
            >
              Live Preview
            </Button>
          </div>
        </section>

        {/* FLOATING KPI CARDS */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Revenue", value: "$128K", growth: "+24%" },
            { title: "Users", value: "8,420", growth: "+18%" },
            { title: "Retention", value: "92%", growth: "+6%" },
          ].map((item, i) => (
            <Card
              key={i}
              className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:scale-105 transition duration-300 rounded-2xl"
            >
              <CardContent className="p-8 space-y-4">
                <h3 className="text-slate-400 text-sm uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-4xl font-bold">{item.value}</p>
                <p className="text-indigo-400 text-sm">{item.growth} this month</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* ADVANCED CHART SECTION */}
        <section className="grid md:grid-cols-2 gap-12 items-center">

          {/* Line Chart */}
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-xl font-semibold mb-6">Revenue Growth</h3>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#6366f1"
                    strokeWidth={3}
                    dot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Area Chart */}
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-xl font-semibold mb-6">Performance Trend</h3>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8b5cf6"
                    fill="#8b5cf6"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </section>

        {/* TRUST / ENTERPRISE SECTION */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Trusted by High-Growth SaaS Teams
          </h2>

          <p className="text-slate-500 max-w-xl mx-auto">
            Scalable architecture. Real-time analytics. Enterprise security.
            Built to handle millions of events daily.
          </p>
        </section>

      </div>
    </div>
  )
}