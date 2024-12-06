import { createBrowserRouter } from "react-router-dom";
import LandingPages from "../pages/landing.pages.tsx";
import Forbidden from "../components/Forbidden.tsx";
import NotFound from "../components/NotFound.tsx";
import ProtectedRoute from "./protected.routers.tsx";
import DashboardMahasiswaPages from "../pages/mahasiswa/dashboard.mahasiswa.pages.tsx";
import SetoranMahasiswaPages from "../pages/mahasiswa/setoran.mahasiswa.pages.tsx";
import DashboardPAPages from "../pages/pa/dashboard.pa.pages.tsx";
import MahasiswaPAPages from "../pages/pa/mahasiswa.pa.pages.tsx";
import MahasiswaPASetoranPages from "../pages/pa/mahasiswa.pa.setoran.pages.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPages />,
  },
  {
    path: "/unauthorized",
    element: <Forbidden />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/mahasiswa",
    element: (
      <ProtectedRoute roles={["mahasiswa"]}>
        <DashboardMahasiswaPages />
      </ProtectedRoute>
    ),
  },
  {
    path: "/mahasiswa/setoran",
    element: (
      <ProtectedRoute roles={["mahasiswa"]}>
        <SetoranMahasiswaPages />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dosen-pa",
    element: (
      <ProtectedRoute roles={["dosen-pa"]}>
        <DashboardPAPages />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dosen-pa/mahasiswa",
    element: (
      <ProtectedRoute roles={["dosen-pa"]}>
        <MahasiswaPAPages />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dosen-pa/mahasiswa/setoran",
    element: (
      <ProtectedRoute roles={["dosen-pa"]}>
        <MahasiswaPASetoranPages />
      </ProtectedRoute>
    ),
  },
  // {
  //   path: "/",
  //   element: <LandingPages />,
  // },
  // {
  //   path: "/unauthorized",
  //   element: <Forbidden />,
  // },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
  // {
  //   path: "/mahasiswa",
  //   element: (
  //       <ProtectedRoute roles={["Mahasiswa"]}>
  //         <DashboardLayout role="mahasiswa" />
  //       </ProtectedRoute>
  //   ),
  //   children: [
  //     { path: "/mahasiswa", element: <DashboardMahasiswa/> },
  //     { path: "/mahasiswa/pengajuan", element: <Pengajuan/> },
  //     { path: "/mahasiswa/status", element: <Status/> },
  //   ],
  // },
  // {
  //   path: "/pembimbing-instansi",
  //   element: (
  //       <ProtectedRoute roles={["Pembimbing Instansi"]}>
  //         <DashboardInstansi />
  //       </ProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/dosen",
  //   element: (
  //       <ProtectedRoute roles={["Dosen"]}>
  //         <DashboardLayout role="dosen" />
  //       </ProtectedRoute>
  //   ),
  //   children: [
  //     { path: "/dosen", element: <DashboardDosen/> },
  //     { path: "/dosen/mahasiswa-bimbingan", element: <MahasiswaBimbingan/> },
  //     { path: "/dosen/mahasiswa-seminar", element: <MahasiswaSeminar/> },
  //     { path: "/dosen/riwayat", element: <RiwayatDosen/> },
  //   ],
  // },
  // {
  //   path: "/koordinator",
  //   element: (
  //       <ProtectedRoute roles={["Koordinator"]}>
  //         <DashboardLayout role="koordinator" />
  //       </ProtectedRoute>
  //   ),
  //   children: [
  //     { path: "/koordinator", element: <DashboardKoordinator/> },
  //     { path: "/koordinator/manage-account", element: <ManageAccounts/> },
  //     { path: "/koordinator/validasi", element: <Validasi/> },
  //     { path: "/koordinator/jadwal-nilai", element: <JadwalNilai/> },
  //     { path: "/koordinator/notifikasi", element: <Notifikasi/> },
  //   ],
  // },
]);

export default router;
