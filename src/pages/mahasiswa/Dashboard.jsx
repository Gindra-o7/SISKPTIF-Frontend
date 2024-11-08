import Card from "../../components/Card";

const Dashboard = () => {

  const cards = [
    {
      title: "Pendaftaran Seminar KP",
      description:
        "Silakan ajukan dokumen untuk validasi kelengkapan dalam pelaksanaan menuju pendaftaran seminar hasil kerja praktik.",
    },
    {
      title: "Pelaporan Dokumen Pasca Seminar KP",
      description:
        "Silakan ajukan dokumen untuk validasi kelengkapan dalam pelaksanaan menuju pendaftaran seminar hasil kerja praktik.",
    },
    {
      title: "Status Seminar KP",
      description:
        "Silakan ajukan dokumen untuk validasi kelengkapan dalam pelaksanaan menuju pendaftaran seminar hasil kerja praktik.",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">

      <div className="flex-1 overflow-auto">

        <main className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Halo, Gilang Ramadhan Indra</h2>
            <p className="text-gray-500 text-lg">
              Ingin melakukan apa hari ini?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
