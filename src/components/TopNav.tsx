interface TopNavProps {
  onMenuToggle: () => void;
}

export default function TopNav({ onMenuToggle }: TopNavProps) {
  return (
    <header className="sticky top-0 z-30 flex justify-between items-center px-4 md:px-8 h-16 w-full bg-surface border-b border-outline-variant shadow-sm">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-on-surface-variant hover:bg-surface-container rounded-lg"
          onClick={onMenuToggle}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="font-bold text-[24px] text-primary md:hidden">
          Reguler Logistik
        </div>

        {/* Role Navigation (Desktop) */}
        <nav className="hidden md:flex gap-6 h-16 items-center">
          <a
            href="#"
            className="text-on-surface-variant text-[14px] font-semibold hover:text-primary transition-colors h-full flex items-center"
          >
            Login
          </a>
          <a
            href="#"
            className="text-primary border-b-2 border-primary text-[14px] font-semibold h-full flex items-center pt-[2px]"
          >
            Admin
          </a>
          <a
            href="#"
            className="text-on-surface-variant text-[14px] font-semibold hover:text-primary transition-colors h-full flex items-center"
          >
            Kurir
          </a>
          <a
            href="#"
            className="text-on-surface-variant text-[14px] font-semibold hover:text-primary transition-colors h-full flex items-center"
          >
            Customer
          </a>
        </nav>
      </div>

      {/* Search & Actions */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="hidden lg:flex items-center bg-surface-container-high rounded-full px-4 py-2 w-64 border border-transparent focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
          <span className="material-symbols-outlined text-on-surface-variant mr-2">
            search
          </span>
          <input
            className="bg-transparent border-none focus:ring-0 text-[14px] w-full outline-none"
            placeholder="Cari Resi / STT..."
            type="text"
          />
        </div>

        {/* Notification */}
        <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
        </button>

        {/* User */}
        <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full">
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </div>
    </header>
  );
}
