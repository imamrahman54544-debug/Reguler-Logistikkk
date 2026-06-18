import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import StatCard from "./components/StatCard";
import ShipmentChart from "./components/ShipmentChart";
import ShipmentTable from "./components/ShipmentTable";
import QuickEntryForm from "./components/QuickEntryForm";
import FleetWidget from "./components/FleetWidget";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-surface text-on-surface h-screen flex overflow-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:ml-[280px] w-full bg-slate-50 min-h-screen">
        {/* TopNav */}
        <TopNav onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

        {/* Main Canvas */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-[1440px] mx-auto space-y-6">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h2 className="text-[24px] md:text-[32px] font-bold text-on-surface leading-tight">
                  Dashboard Overview
                </h2>
                <p className="text-[16px] text-secondary mt-1">
                  Ringkasan performa operasional hari ini.
                </p>
              </div>
              <button className="bg-primary-container text-on-primary px-4 py-2 rounded-lg text-[14px] font-semibold shadow-sm hover:shadow-md transition-shadow flex items-center gap-2">
                <span className="material-symbols-outlined">add</span>
                Buat Order
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <StatCard
                label="Total Order"
                value="1,248"
                icon="shopping_cart"
                iconBgClass="bg-secondary-container"
                iconTextClass="text-on-secondary-container"
                footnote="+12% vs kemarin"
                footnoteIcon="trending_up"
                footnoteClass="text-tertiary-container"
              />
              <StatCard
                label="In Transit"
                value="432"
                icon="local_shipping"
                iconBgClass="bg-primary-fixed"
                iconTextClass="text-on-primary-fixed"
                footnote="Sedang dalam perjalanan"
                footnoteClass="text-secondary"
              />
              <StatCard
                label="Delivered"
                value="785"
                icon="check_circle"
                iconBgClass="bg-tertiary-fixed"
                iconTextClass="text-on-tertiary-fixed"
                footnote="+5% vs kemarin"
                footnoteIcon="trending_up"
                footnoteClass="text-tertiary-container"
              />
              <StatCard
                label="Exceptions"
                value="31"
                icon="warning"
                iconBgClass="bg-error-container"
                iconTextClass="text-on-error-container"
                footnote="Butuh perhatian"
                footnoteClass="text-error"
              />
              <StatCard
                label="Revenue (Hari Ini)"
                value="Rp 12.5M"
                icon="payments"
                iconBgClass="bg-surface-variant"
                iconTextClass="text-on-surface-variant"
                footnote="Sesuai target"
                footnoteIcon="trending_up"
                footnoteClass="text-tertiary-container"
                className="col-span-2 md:col-span-1 lg:col-span-1"
              />
            </div>

            {/* Main Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column (Chart & Table) */}
              <div className="lg:col-span-2 space-y-6">
                <ShipmentChart />
                <ShipmentTable />
              </div>

              {/* Right Column (Quick Actions) */}
              <div className="space-y-6">
                <QuickEntryForm />
                <FleetWidget />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
