import React from "react";
import { Accordion } from "flowbite-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "Apa saja syarat pendaftaran seminar KP?",
      answer:
          "Syarat pendaftaran meliputi telah menyelesaikan KP, memiliki laporan KP yang telah disetujui pembimbing, dan telah mengumpulkan semua dokumen yang diperlukan.",
    },
    {
      question: "Berapa lama proses verifikasi pendaftaran?",
      answer:
          "Proses verifikasi pendaftaran biasanya memakan waktu 2-3 hari kerja setelah semua dokumen lengkap.",
    },
    {
      question: "Bagaimana cara mengubah jadwal seminar?",
      answer:
          "Perubahan jadwal seminar dapat diajukan melalui sistem dengan menyertakan alasan yang jelas dan menunggu persetujuan dari koordinator KP.",
    },
    {
      question: "Apa format file yang diterima untuk upload dokumen?",
      answer:
          "Sistem menerima file dalam format PDF dengan ukuran maksimal 5MB per file.",
    },
  ];

  return (
      <div id="faq" className="mt-32 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            FAQ Tentang Pendaftaran Seminar KP
          </h2>
          <p className="text-gray-600">
            Temukan jawaban atas pertanyaan umum terkait proses pendaftaran seminar
            Kerja Praktik (KP).
          </p>
        </div>
        <div className="mx-auto w-full max-w-4xl">
          <Accordion collapseAll>
            {faqs.map((faq: FAQItem, index: number) => (
                <Accordion.Panel key={index}>
                  <Accordion.Title>{faq.question}</Accordion.Title>
                  <Accordion.Content>
                    <p className="text-gray-500 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
            ))}
          </Accordion>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1A2D42" fillOpacity={1}
                d="M0,320L24,298.7C48,277,96,235,144,229.3C192,224,240,256,288,272C336,288,384,288,432,277.3C480,267,528,245,576,245.3C624,245,672,267,720,245.3C768,224,816,160,864,149.3C912,139,960,181,1008,192C1056,203,1104,181,1152,154.7C1200,128,1248,96,1296,90.7C1344,85,1392,107,1416,117.3L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
        </svg>
      </div>
  );
};

export default FAQ;