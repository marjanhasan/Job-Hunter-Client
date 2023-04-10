import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Assignment 1",
    marks: 60,
  },
  {
    name: "Assignment 2",
    marks: 60,
  },
  {
    name: "Assignment 3",
    marks: 55,
  },
  {
    name: "Assignment 4",
    marks: 60,
  },
  {
    name: "Assignment 5",
    marks: 58,
  },
  {
    name: "Assignment 6",
    marks: 45,
  },
  {
    name: "Assignment 7",
    marks: 51,
  },
];
const Statistic = () => {
  return (
    <div>
      <div className="bg-gray-100 h-64 mb-16 text-4xl font-bold tracking-wide flex justify-center items-center">
        Statistics
      </div>
      <h2 className="font-bold text-4xl my-5 text-center">Assignment Marks</h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="marks"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistic;
