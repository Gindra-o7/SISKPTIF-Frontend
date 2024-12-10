import { useTheme } from "../../hooks/useTheme.hooks";
import Layout from "../../components/dashboard/Layout";
import { sidebarPembimbingInstansiItems } from "../../components/dashboard/SidebarItems";
import DashboardPembimbingInstansi from "../../components/dashboard/pembimbing-instansi/DashboardPembimbingInstansi";

const DashboardPembimbingInstansiPages = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <Layout
        setTheme={setTheme}
        currentTheme={theme}
        sidebarItems={sidebarPembimbingInstansiItems}
        subpageTitle="Mahasiswa Kerja Praktik"
      >
        <DashboardPembimbingInstansi />
      </Layout>
    </div>
  );
};

export default DashboardPembimbingInstansiPages;