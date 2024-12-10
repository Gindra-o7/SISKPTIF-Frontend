import { useTheme } from "../../hooks/useTheme.hooks";
import Layout from "../../components/dashboard/Layout";
import { sidebarMahasiswaItems } from "../../components/dashboard/SidebarItems";
import PengajuanMahasiswa from "../../components/dashboard/mahasiswa/PengajuanMahasiswa.tsx"

const PengajuanMahasiswaPages = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <Layout
        setTheme={setTheme}
        currentTheme={theme}
        sidebarItems={sidebarMahasiswaItems}
        subpageTitle="Pengajuan"
      >
        <PengajuanMahasiswa />
      </Layout>
    </div>
  );
}

export default PengajuanMahasiswaPages;