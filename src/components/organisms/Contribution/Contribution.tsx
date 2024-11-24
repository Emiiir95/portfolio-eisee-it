"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Typography } from "@/components/atoms/Typography/Typography"

export const description = "An interactive bar chart"

const chartData = [
  { month: "Janvier", githubContributions: 186, ticketMerges: 80 },
  { month: "Février", githubContributions: 305, ticketMerges: 200 },
  { month: "Mars", githubContributions: 237, ticketMerges: 120 },
  { month: "Avril", githubContributions: 73, ticketMerges: 190 },
  { month: "Mai", githubContributions: 209, ticketMerges: 130 },
  { month: "Juin", githubContributions: 214, ticketMerges: 140 },
  { month: "Juillet", githubContributions: 214, ticketMerges: 140 },
  { month: "Août", githubContributions: 214, ticketMerges: 140 },
  { month: "Septembre", githubContributions: 214, ticketMerges: 140 },
  { month: "Octobre", githubContributions: 214, ticketMerges: 140 },
  { month: "Novembre", githubContributions: 214, ticketMerges: 140 },
  { month: "Décembre", githubContributions: 214, ticketMerges: 140 },
]

const chartConfig = {
  views: {
    label: "Activités",
  },
  githubContributions: {
    label: "Contributions GitHub",
    color: "#815CFC",
  },
  ticketMerges: {
    label: "Tickets Merge",
    color: "#07B015",
  },
} satisfies ChartConfig

export function Contribution() {
    
    const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("githubContributions")

  const total = React.useMemo(
    () => ({
      githubContributions: chartData.reduce((acc, curr) => acc + curr.githubContributions, 0),
      ticketMerges: chartData.reduce((acc, curr) => acc + curr.ticketMerges, 0),
    }),
    []
  )

  return (
    <div>
      <Typography align="center" variant="componentTitle" color="white" customClassName="md:mb-20 mb-10" animated>Quelques chiffres clés</Typography>
      <Card className="bg-black text-white w-full lg:w-[1000px]">
        <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
          <div className="flex">
            {["githubContributions", "ticketMerges"].map((key, index) => {
              const chart = key as keyof typeof chartConfig
              const isActive = activeChart === chart

              return (
                <button
                  key={chart}
                  data-active={isActive}
                  className={`relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-l sm:border-t-0 sm:px-8 sm:py-6
                    ${index === 1 ? "border-r" : ""}
                    ${isActive ? "bg-white text-black" : "bg-transparent text-white"} 
                  `}
                  onClick={() => setActiveChart(chart)}
                >
                  <span className="text-xs">
                    {chartConfig[chart].label}
                  </span>
                  <span className="text-lg font-bold leading-none sm:text-3xl">
                    {total[key as keyof typeof total].toLocaleString()}
                  </span>
                </button>
              )
            })}
          </div>
        </CardHeader>
        <CardContent className="px-2 sm:p-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} stroke="#ffffff" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                stroke="#ffffff"
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="views"
                    labelFormatter={(value) => {
                      return value; 
                    }}
                  />
                }
              />
              <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
