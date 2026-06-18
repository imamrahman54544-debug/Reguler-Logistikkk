export default function FleetWidget() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm p-5 overflow-hidden relative">
      <h3 className="text-[14px] font-semibold text-on-surface mb-3 z-10 relative">
        Armada Aktif
      </h3>
      <div className="h-40 bg-surface-dim rounded-lg relative overflow-hidden group">
        {/* Map placeholder with SVG illustration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/30 via-surface-container-high to-secondary-container/40">
          {/* Animated dots representing trucks */}
          <svg className="w-full h-full" viewBox="0 0 300 160">
            {/* Roads / Lines */}
            <path
              d="M20,80 Q80,30 150,70 T280,50"
              stroke="#4f46e5"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
              strokeDasharray="6,4"
            />
            <path
              d="M30,120 Q100,90 180,110 T270,100"
              stroke="#4f46e5"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
              strokeDasharray="6,4"
            />
            <path
              d="M50,40 Q120,100 200,60 T290,130"
              stroke="#006e4b"
              strokeWidth="1.5"
              fill="none"
              opacity="0.2"
              strokeDasharray="4,4"
            />

            {/* Location pins */}
            <circle cx="60" cy="70" r="4" fill="#4f46e5" opacity="0.7" />
            <circle cx="60" cy="70" r="8" fill="#4f46e5" opacity="0.2">
              <animate attributeName="r" from="6" to="12" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
            </circle>

            <circle cx="150" cy="65" r="4" fill="#4f46e5" opacity="0.7" />
            <circle cx="150" cy="65" r="8" fill="#4f46e5" opacity="0.2">
              <animate attributeName="r" from="6" to="12" dur="2s" begin="0.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.3" to="0" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </circle>

            <circle cx="240" cy="55" r="4" fill="#006e4b" opacity="0.7" />
            <circle cx="240" cy="55" r="8" fill="#006e4b" opacity="0.2">
              <animate attributeName="r" from="6" to="12" dur="2s" begin="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.3" to="0" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>

            <circle cx="100" cy="110" r="3" fill="#4f46e5" opacity="0.5" />
            <circle cx="200" cy="100" r="3" fill="#4f46e5" opacity="0.5" />

            {/* Moving truck dot */}
            <circle r="5" fill="#3525cd">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path="M20,80 Q80,30 150,70 T280,50"
              />
            </circle>
            <circle r="4" fill="#006e4b">
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                path="M30,120 Q100,90 180,110 T270,100"
              />
            </circle>
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent flex items-end p-3">
          <div className="flex items-center gap-2 text-on-surface">
            <span className="material-symbols-outlined text-primary-container">
              near_me
            </span>
            <span className="text-[12px] font-medium">
              12 Truk dalam perjalanan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
