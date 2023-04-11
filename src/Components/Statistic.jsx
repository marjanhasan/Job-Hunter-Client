import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "A-1",
    total: 60,
    score: 60,
  },
  {
    name: "A-2",
    total: 60,
    score: 60,
  },
  {
    name: "A-3",
    total: 60,
    score: 60,
  },
  {
    name: "A-4",
    total: 60,
    score: 60,
  },
  {
    name: "A-5",
    total: 60,
    score: 58,
  },
  {
    name: "A-6",
    total: 60,
    score: 60,
  },
  {
    name: "A-7",
    total: 60,
    score: 60,
  },
  {
    name: "A-8",
    total: 60,
    score: 60,
  },
];
const Statistic = () => {
  return (
    <div>
      <div className="bg-gray-100 h-64 mb-16 text-4xl font-bold tracking-wide flex justify-center items-center">
        Statistics
      </div>
      <h2 className="font-bold text-4xl my-5 text-center">Assignment Marks</h2>
      <div className="h-[400px] mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="total" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistic;
