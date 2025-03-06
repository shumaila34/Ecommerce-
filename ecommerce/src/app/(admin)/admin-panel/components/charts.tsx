"use client"

import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from "recharts"

const lineData = [
  { date: "2025-02-02", sales: 500 },
  { date: "2025-02-03", sales: 600 },
  { date: "2025-02-04", sales: 550 },
  { date: "2025-02-05", sales: 900 },
  { date: "2025-02-06", sales: 1500 },
  { date: "2025-02-07", sales: 2200 },
  { date: "2025-02-08", sales: 1200 },
]

const pieData = [
  { name: "Yellow Sweet Corn", value: 30 },
  { name: "Organic Baby Carrot", value: 25 },
  { name: "Calabrese Broccoli", value: 25 },
  { name: "Fresh Mint", value: 20 },
]

const COLORS = ["#3b82f6", "#22c55e", "#eab308", "#a855f7"]

export function LineChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsLineChart data={lineData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
        <XAxis dataKey="date" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

export function PieChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsPieChart>
        <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label>
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </RechartsPieChart>
    </ResponsiveContainer>
  )
}

