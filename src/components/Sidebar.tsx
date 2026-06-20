interface MenuItem {
  icon: string;
  label: string;
  filled?: boolean;
}

const mainMenuItems: MenuItem[] = [
  { icon: "dashboard", label: "Dashboard", filled: true },
  { icon: "add_shopping_cart", label: "Order Baru" },
  { icon: "description", label: "STT Baru" },
  { icon: "location_searching", label: "Tracking Resi" },
  { icon: "database", label: "Semua Data" },
  { icon: "local_shipping", label: "Pickup" },
  { icon: "inventory_2", label: "Inbound" },
  { icon: "outbox", label: "Outbound" },
  { icon: "pause_circle", label: "On Hold" },
  { icon: "assignment_turned_in", label: "Delivered POD" },
];

const analyticsMenuItems: MenuItem[] = [
  { icon: "explore", label: "GPS Tracking" },
  { icon: "group", label: "Master Customer" },
  { icon: "analytics", label: "Customer Analysis" },
  { icon: "leaderboard", label: "Customer Ranking" },
  { icon: "receipt", label: "Customer Invoice" },
  { icon: "history", label: "Shipment History" },
];

const financeMenuItems: MenuItem[] = [
  { icon: "payments", label: "Finance Invoice" },
  { icon: "account_balance_wallet", label: "Revenue" },
  { icon: "receipt_long", label: "Budget Pengeluaran" },
  { icon: "settings", label: "Pengaturan Sistem" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem: string;
  onSelect: (item: string) => void;
}

export default function Sidebar({ isOpen, onClose, activeItem, onSelect }: SidebarProps) {
  const renderMenuItem = (item: MenuItem) => {
    const isActive = activeItem === item.label;
    return (
      <button
        key={item.label}
        type="button"
        onClick={() => {
          onSelect(item.label);
          onClose();
        }}
        aria-current={isActive ? "page" : undefined}
        className={`flex w-full items-center gap-3 px-3 py-2 text-[14px] font-semibold rounded-lg cursor-pointer active:scale-[0.98] duration-200 ${
          isActive
            ? "bg-secondary-container text-on-secondary-container font-bold"
            : "text-secondary hover:bg-surface-container-high transition-all"
        }`}
      >
        <span
          className="material-symbols-outlined"
          data-weight={isActive ? "fill" : undefined}
        >
          {item.icon}
        </span>
        {item.label}
      </button>
    );
  };

  const Divider = () => (
    <div className="py-2">
      <div className="h-px bg-outline-variant opacity-50"></div>
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed left-0 top-0 h-full w-[280px] bg-surface border-r border-outline-variant py-4 px-4 z-50 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Brand Header */}
        <div className="flex items-center gap-3 px-2 mb-6">
          <div className="w-10 h-10 bg-primary-container text-on-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined">local_shipping</span>
          </div>
          <div>
            <h1 className="text-[24px] leading-[1.4] font-bold text-primary">
              Admin Panel
            </h1>
            <p className="text-[12px] font-medium text-secondary">
              Logistics Ops
            </p>
          </div>
        </div>

        {/* Scrollable Menu */}
        <div className="flex-1 overflow-y-auto sidebar-scroll pr-2 space-y-1">
          {mainMenuItems.map(renderMenuItem)}
          <Divider />
          {analyticsMenuItems.map(renderMenuItem)}
          <Divider />
          {financeMenuItems.map(renderMenuItem)}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-outline-variant">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-secondary text-[14px] font-semibold hover:bg-surface-container-high transition-all rounded-lg cursor-pointer active:scale-[0.98] duration-200"
          >
            <span className="material-symbols-outlined">logout</span>
            Logout
          </a>
        </div>
      </nav>
    </>
  );
}
