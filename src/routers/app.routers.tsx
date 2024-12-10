import { createBrowserRouter } from "react-router-dom";
import LandingPages from "../pages/landing.pages.tsx";
import Forbidden from "../components/Forbidden.tsx";
import NotFound from "../components/NotFound.tsx";
import ProtectedRoute from "./protected.routers.tsx";
import DashboardMahasiswaPages from "../pages/mahasiswa/dashboard.mahasiswa.pages.tsx";
import PengajuanMahasiswaPages from "../pages/mahasiswa/pengajuan.mahasiswa.pages.tsx";
import StatusMahasiswaPages from "../pages/mahasiswa/status.mahasiswa.pages.tsx";
import DashboardDosenPengujiPages from "../pages/dosen-penguji/dashboard.dosen.penguji.pages.tsx";
import MahasiswaDosenPengujiPages from "../pages/dosen-penguji/mahasiswa.dosen.penguji.pages.tsx";
import DashboardDosenPembimbingPages from "../pages/dosen-pembimbing/dashboard.dosen.pembimbing.pages.tsx";
import RiwayatDosenPembimbingPages from "../pages/dosen-pembimbing/riwayat.dosen.pembimbing.pages.tsx";
import DashboardKoordinatorPages from "../pages/koordinator/dashboard.koordinator.pages.tsx";
import ValidasiKoordinatorPages from "../pages/koordinator/validasi.koordinator.pages.tsx";
import ManageAkunKoordinatorPages from "../pages/koordinator/akun.koordinator.pages.tsx";
import PenjadwalanKoordinatorPages from "../pages/koordinator/penjadwalan.koordinator.pages.tsx";
import VisualDataKaprodiPages from "../pages/kaprodi/visualdata.kaprodi.pages.tsx"
import DashboardPembimbingInstansiPages from "../pages/pembimbing-instansi/dashboard.pembimbinginstansi.pages.tsx";

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
    element: <DashboardMahasiswaPages />,
  },
  {
    path: "/mahasiswa/pengajuan",
    element: <PengajuanMahasiswaPages />,
  },
  {
    path: "/mahasiswa/status",
    element: <StatusMahasiswaPages />,
  },
  {
    path: "/dosen-penguji",
    element: <DashboardDosenPengujiPages />,
  },
  {
    path: "/dosen-penguji/mahasiswa-seminar",
    element: <MahasiswaDosenPengujiPages />,
  },
  {
    path: "/dosen-pembimbing",
    element: <DashboardDosenPembimbingPages />,
  },
  {
    path: "/dosen-pembimbing/riwayat",
    element: <RiwayatDosenPembimbingPages />,
  },
  {
    path: "/koordinator",
    element: <DashboardKoordinatorPages />,
  },
  {
    path: "/koordinator/validasi",
    element: <ValidasiKoordinatorPages />,
  },
  {
    path: "/koordinator/penjadwalan",
    element: <PenjadwalanKoordinatorPages />,
  },
  {
    path: "/koordinator/manage-account",
    element: <ManageAkunKoordinatorPages />,
  },
  {
    path: "/kaprodi",
    element: <VisualDataKaprodiPages />,
  },
  {
    path: "/pembimbing-instansi",
    element: <DashboardPembimbingInstansiPages />,
  },
  {
    path: "/mahasiswa",
    element: (
        <ProtectedRoute roles={["mahasiswa"]}>
          <DashboardMahasiswaPages />
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
  //         <Layout role="mahasiswa" userData={undefined} />
  //       </ProtectedRoute>
  //   ),
  //   children: [
  //     { path: "/mahasiswa", element: <DashboardMahasiswaPages/> },
  //     { path: "/mahasiswa/pengajuan", element: <SetoranMahasiswaPages/> },
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
