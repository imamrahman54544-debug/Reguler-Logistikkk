interface Shipment {
  stt: string;
  sender: string;
  destination: string;
  status: "Delivered" | "In Transit" | "Pickup" | "Exception";
}

const shipments: Shipment[] = [
  {
    stt: "STT-2408-001",
    sender: "PT Makmur Abadi",
    destination: "Surabaya",
    status: "Delivered",
  },
  {
    stt: "STT-2408-002",
    sender: "CV Cahaya Maju",
    destination: "Bandung",
    status: "In Transit",
  },
  {
    stt: "STT-2408-003",
    sender: "Toko Laris",
    destination: "Semarang",
    status: "Pickup",
  },
  {
    stt: "STT-2408-004",
    sender: "PT Global Sentosa",
    destination: "Medan",
    status: "Exception",
  },
];

const statusStyles: Record<string, string> = {
  Delivered: "bg-[#e6f4ea] text-[#137333]",
  "In Transit": "bg-[#e8f0fe] text-[#1967d2]",
  Pickup: "bg-[#fef7e0] text-[#b06000]",
  Exception: "bg-[#fce8e6] text-[#c5221f]",
};

export default function ShipmentTable() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
      <div className="p-5 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
        <h3 className="text-[14px] font-semibold text-on-surface">
          Pengiriman Terkini (STT)
        </h3>
        <button className="text-primary-container hover:text-primary text-[12px] font-medium">
          Lihat Semua
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-surface-container-high text-[12px] font-medium text-on-surface-variant uppercase">
            <tr>
              <th className="p-4 font-semibold">No. STT</th>
              <th className="p-4 font-semibold">Pengirim</th>
              <th className="p-4 font-semibold">Tujuan</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-[14px] text-on-surface divide-y divide-outline-variant">
            {shipments.map((shipment, index) => (
              <tr
                key={shipment.stt}
                className={`${
                  index % 2 === 1 ? "bg-slate-50" : ""
                } hover:bg-surface-container-lowest transition-colors h-14`}
              >
                <td className="p-4 font-medium">{shipment.stt}</td>
                <td className="p-4">{shipment.sender}</td>
                <td className="p-4">{shipment.destination}</td>
                <td className="p-4">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      statusStyles[shipment.status]
                    }`}
                  >
                    {shipment.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-secondary hover:text-primary transition-colors p-1">
                    <span className="material-symbols-outlined text-[20px]">
                      visibility
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
