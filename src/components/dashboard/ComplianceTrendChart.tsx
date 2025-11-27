import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { month: "Jan 22", score: 72, target: 90 },
  { month: "Apr 22", score: 78, target: 90 },
  { month: "Jul 22", score: 82, target: 90 },
  { month: "Oct 22", score: 85, target: 90 },
  { month: "Jan 23", score: 83, target: 90 },
  { month: "Apr 23", score: 88, target: 90 },
  { month: "Jul 23", score: 91, target: 90 },
  { month: "Oct 23", score: 89, target: 90 },
  { month: "Jan 24", score: 93, target: 90 },
  { month: "Apr 24", score: 94, target: 90 },
  { month: "Jul 24", score: 92, target: 90 },
  { month: "Oct 24", score: 94, target: 90 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
        <p className="text-sm font-medium text-foreground mb-1">{label}</p>
        <p className="text-sm text-primary">
          Score: <span className="font-semibold">{payload[0].value}%</span>
        </p>
        <p className="text-sm text-muted-foreground">
          Target: <span className="font-medium">{payload[1].value}%</span>
        </p>
      </div>
    );
  }
  return null;
};

export function ComplianceTrendChart() {
  return (
    <Card variant="glass">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">
            Compliance Score Trend (3 Years)
          </CardTitle>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-1 rounded-full bg-primary" />
              <span className="text-muted-foreground">Actual</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-1 rounded-full bg-muted-foreground border border-dashed border-muted-foreground" />
              <span className="text-muted-foreground">Target (90%)</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(166, 76%, 47%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(166, 76%, 47%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="hsl(217, 33%, 17%)" 
                vertical={false}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                domain={[60, 100]}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
                dx={-10}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="score"
                stroke="hsl(166, 76%, 47%)"
                strokeWidth={2}
                fill="url(#scoreGradient)"
                dot={{ fill: "hsl(166, 76%, 47%)", strokeWidth: 0, r: 4 }}
                activeDot={{ r: 6, fill: "hsl(166, 76%, 47%)", stroke: "hsl(222, 47%, 6%)", strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="hsl(215, 20%, 55%)"
                strokeWidth={1}
                strokeDasharray="5 5"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
