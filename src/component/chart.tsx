"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ChartProps {
  data: { name: string; score: number }[];
}

const DynamicBarChart: React.FC<ChartProps> = ({ data }) => {
  const barSizeRem = 30; // 2rem
  const barSizePx = barSizeRem; // convert rem to px

  return (
    <div className="overflow-x-auto w-full scrollbar-thin">

    <div className="w-full h-[32rem] cursor-pointer min-w-250 ">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={barSizePx} margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            textAnchor="end"
            interval={0}
            tickFormatter={(name) => (name.length > 10 ? name.slice(0, 10) + "…" : name)}
          />
          <YAxis domain={[0, 5]} label={{ value: "Score", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="score" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
            </div>
  );
};

export default DynamicBarChart;
