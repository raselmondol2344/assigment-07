"use client";
import React, { useEffect, useState } from "react";
import { PieChart, Pie,Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const StatusPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = JSON.parse(localStorage.getItem("friend_timeline")) || [];
      
      
      const counts = savedData.reduce((acc, curr) => {
        acc[curr.type] = (acc[curr.type] || 0) + 1;
        return acc;
      }, {});

      
      const chartData = [
        { name: "Call", value: counts["Call"] || 0, color: "#3B82F6" },   
        { name: "Text", value: counts["Text"] || 0, color: "#10B981" },   
        { name: "Video", value: counts["Video"] || 0, color: "#8B5CF6" }, 
      ];

       setData(chartData);
    //const data = chartData;
    }
  }, []);

  
  const hasData = data.some(item => item.value > 0);

  return (
    <div className="container mx-auto p-10 min-h-screen">
      <h1 className="text-3xl font-bold text-start mb-10 text-green-900 ml-53">
        Friendship Analytics
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
        <h2 className="text-xl font-semibold text-start mb-8 text-gray-700">By Interaction Type</h2>

        {hasData ? (
          <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={10}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Legend verticalAlign="bottom" height={40} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <p>No activity data available to display chart.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusPage;