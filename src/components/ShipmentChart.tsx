import { useState } from "react";

export default function ShipmentChart() {
  const [period, setPeriod] = useState("week");

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm p-5">
      <div className="flex justify-between items-center mb-4 border-b border-outline-variant pb-3">
        <h3 className="text-[14px] font-semibold text-on-surface">
          Volume Pengiriman
        </h3>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="text-[14px] border-outline-variant rounded-md px-2 py-1 bg-surface"
        >
          <option value="week">Minggu Ini</option>
          <option value="month">Bulan Ini</option>
        </select>
      </div>

      {/* Chart Visualization */}
      <div className="h-64 bg-surface-container-high rounded-lg flex flex-col items-center justify-center border border-dashed border-outline-variant relative overflow-hidden">
        {/* Animated bar chart */}
        <div className="flex items-end gap-3 h-40 px-6 z-10">
          {[65, 45, 80, 55, 90, 70, 85].map((height, i) => {
            const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
            return (
              <div key={i} className="flex flex-col items-center gap-1">
                <div
                  className="w-8 md:w-10 bg-primary-container/80 rounded-t-md transition-all duration-500 hover:bg-primary"
                  style={{ height: `${height}%` }}
                />
                <span className="text-[10px] text-secondary">{days[i]}</span>
              </div>
            );
          })}
        </div>

        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #777587 25%, transparent 25%, transparent 75%, #777587 75%, #777587), repeating-linear-gradient(45deg, #777587 25%, transparent 25%, transparent 75%, #777587 75%, #777587)",
            backgroundPosition: "0 0, 10px 10px",
            backgroundSize: "20px 20px",
          }}
        />
      </div>
    </div>
  );
}
