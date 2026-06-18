import { useState } from "react";

export default function QuickEntryForm() {
  const [customer, setCustomer] = useState("");
  const [city, setCity] = useState("");
  const [weight, setWeight] = useState("");
  const [koli, setKoli] = useState("");

  const handleSubmit = () => {
    alert(`Resi Generated!\nCustomer: ${customer}\nTujuan: ${city}\nBerat: ${weight} Kg\nKoli: ${koli}`);
  };

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm p-5">
      <h3 className="text-[14px] font-semibold text-on-surface mb-4 border-b border-outline-variant pb-3">
        Entri Cepat STT
      </h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-[12px] font-medium text-secondary mb-1">
            Customer
          </label>
          <input
            className="w-full border border-slate-200 rounded-lg px-4 py-2 text-[14px] focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none"
            placeholder="Cari/Pilih Customer"
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-[12px] font-medium text-secondary mb-1">
            Kota Tujuan
          </label>
          <input
            className="w-full border border-slate-200 rounded-lg px-4 py-2 text-[14px] focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none"
            placeholder="Masukkan Kota Tujuan"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[12px] font-medium text-secondary mb-1">
              Berat (Kg)
            </label>
            <input
              className="w-full border border-slate-200 rounded-lg px-4 py-2 text-[14px] focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none"
              placeholder="0"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-[12px] font-medium text-secondary mb-1">
              Koli
            </label>
            <input
              className="w-full border border-slate-200 rounded-lg px-4 py-2 text-[14px] focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none"
              placeholder="0"
              type="number"
              value={koli}
              onChange={(e) => setKoli(e.target.value)}
            />
          </div>
        </div>
        <button
          className="w-full bg-primary-container hover:bg-primary text-on-primary text-[14px] font-semibold py-2.5 rounded-lg shadow-sm transition-colors mt-2"
          type="button"
          onClick={handleSubmit}
        >
          Generate Resi
        </button>
      </form>
    </div>
  );
}
