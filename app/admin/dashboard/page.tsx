export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-sm font-semibold text-gray-500 uppercase">Leads Novos</h2>
          <p className="text-4xl font-extrabold mt-2 text-upiii-orange">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-sm font-semibold text-gray-500 uppercase">Projetos Ativos</h2>
          <p className="text-4xl font-extrabold mt-2 text-upiii-orange">5</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-sm font-semibold text-gray-500 uppercase">Publicações</h2>
          <p className="text-4xl font-extrabold mt-2 text-upiii-orange">28</p>
        </div>
      </div>
    </div>
  );
}
