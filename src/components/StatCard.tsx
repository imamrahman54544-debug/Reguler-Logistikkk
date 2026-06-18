interface StatCardProps {
  label: string;
  value: string;
  icon: string;
  iconBgClass: string;
  iconTextClass: string;
  footnote: string;
  footnoteIcon?: string;
  footnoteClass?: string;
  className?: string;
}

export default function StatCard({
  label,
  value,
  icon,
  iconBgClass,
  iconTextClass,
  footnote,
  footnoteIcon,
  footnoteClass = "text-secondary",
  className = "",
}: StatCardProps) {
  return (
    <div
      className={`bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-[12px] font-medium text-secondary">{label}</span>
        <div
          className={`w-8 h-8 rounded-full ${iconBgClass} flex items-center justify-center ${iconTextClass}`}
        >
          <span className="material-symbols-outlined text-sm">{icon}</span>
        </div>
      </div>
      <div className="text-[24px] leading-[1.4] font-semibold text-on-surface">
        {value}
      </div>
      <div
        className={`text-[12px] font-medium mt-2 flex items-center gap-1 ${footnoteClass}`}
      >
        {footnoteIcon && (
          <span className="material-symbols-outlined text-[16px]">
            {footnoteIcon}
          </span>
        )}
        {footnote}
      </div>
    </div>
  );
}
