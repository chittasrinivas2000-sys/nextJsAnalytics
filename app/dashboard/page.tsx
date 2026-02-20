"use client"

import Link from "next/link"
import {
   Treemap,
    FunnelChart,
  Funnel,
    LabelList,
    ComposedChart,
  BarChart,
  Bar,
  LineChart,
  Line,
    PieChart,
  Pie,
  Cell,
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
  { month: "May", value:3000 },
  { month: "Jun", value: 9500 },
]
const treeData = [
  {
    name: "Analytics",
    children: [
      { name: "Revenue", size: 400 },
      { name: "Users", size: 300 },
      { name: "Sessions", size: 200 },
    ],
  },
  {
    name: "Marketing",
    children: [
      { name: "Ads", size: 350 },
      { name: "SEO", size: 250 },
      { name: "Email", size: 150 },
    ],
  },
  {
    name: "Sales",
    children: [
      { name: "Leads", size: 280 },
      { name: "Deals", size: 180 },
      { name: "Closed", size: 120 },
    ],
  },
]
const COLORS = ["#6366f1", "#8b5cf6", "#ec4899", "#10b981"]
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
              <Button className="bg-indigo-600 hover:bg-indigo-400 text-white px-8 py-6 text-lg rounded-xl shadow-xl">
                Get Started
              </Button>
            </Link>

            <Button
              variant="outline"
              className="border-slate-700 text-slate-600 px-8 py-6 text-lg rounded-xl"
            >
              Live Preview
            </Button>
          </div>
        </section>

        {/* FLOATING KPI CARDS */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Revenue", value: "128K", growth: "+24%" },
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
                <p className="text-4xl font-bold text-white">{item.value}</p>
                <p className="text-indigo-400 text-sm">{item.growth} this month</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* ADVANCED CHART SECTION */}
        <section className="grid md:grid-cols-2 gap-12 items-center">

          {/* Line Chart */}
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl hover:scale-105 transition duration-600">
            <h3 className="text-xl font-semibold mb-6">Revenue Growth</h3>

            <div className="h-80 ">
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
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl  hover:scale-105 transition duration-600">
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
          
          {/* bar Chart */}
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl  hover:scale-105 transition duration-600">
            <h3 className="text-xl font-semibold mb-6">Performance Trend</h3>

            <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
          </div>

          
          {/* pie Chart */}
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl  hover:scale-105 transition duration-600">
            <h3 className="text-xl font-semibold mb-6">Performance Trend</h3>

             <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip />
          <Pie
            data={revenueData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {revenueData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
          </div>


               <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl hover:scale-105 transition duration-500">
      <h3 className="text-xl font-semibold mb-6 text-white">
        Performance Trend
      </h3>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />

            <Tooltip />

            {/* Area Layer */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.2}
            />

            {/* Bar Layer */}
            <Bar
              dataKey="value"
              barSize={30}
              fill="#6366f1"
              radius={[6, 6, 0, 0]}
            />

            {/* Line Layer */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#f43f5e"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>


     <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl hover:scale-105 transition duration-500">
      <h3 className="text-xl font-semibold mb-6 text-white">
        Department Overview
      </h3>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <Treemap
            data={treeData}
            dataKey="size"
            stroke="#ffffff"
            fill="#8b5cf6"
          >
            <Tooltip />
          </Treemap>
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