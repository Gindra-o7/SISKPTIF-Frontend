import React from "react";
import { Card } from "flowbite-react";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Pendaftaran Online",
      description:
          "Daftar seminar kerja praktik secara online tanpa perlu antri",
      icon: "📝",
    },
    {
      title: "Track Progress",
      description:
          "Pantau status pendaftaran dan jadwal seminar secara real-time",
      icon: "📊",
    },
    {
      title: "Notifikasi",
      description:
          "Dapatkan pemberitahuan untuk setiap update status pendaftaran",
      icon: "🔔",
    },
    {
      title: "Digital Documents",
      description: "Upload dan kelola dokumen secara digital dengan aman",
      icon: "📄",
    },
  ];

  return (
      <div id="features" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-gray-600">
              Nikmati kemudahan dalam proses pendaftaran seminar kerja praktik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <Card key={index} className="max-w-sm">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {feature.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {feature.description}
                  </p>
                </Card>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Features;