import { useTheme } from "../../hooks/useTheme.hooks";
import Layout from "../../components/dashboard/Layout";
import { sidebarMahasiswaItems } from "../../components/dashboard/SidebarItems";
import DashboardMahasiswa from "../../components/dashboard/mahasiswa/DashboardMahasiswa.tsx"

const DashboardMahasiswaPages = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <Layout
        setTheme={setTheme}
        currentTheme={theme}
        sidebarItems={sidebarMahasiswaItems}
        subpageTitle="Dashboard"
      >
        <DashboardMahasiswa />
      </Layout>
    </div>
  );
};

export default DashboardMahasiswaPages;
