import { useTheme } from "../../hooks/useTheme.hooks";
import Layout from "../../components/dashboard/Layout";
import { sidebarDosenPembimbingItems } from "../../components/dashboard/SidebarItems";
import DashboardDosenPembimbing from "../../components/dashboard/dosen-pembimbing/DashboardDosenPembimbing";

const DashboardDosenPembimbingPages = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <Layout
        setTheme={setTheme}
        currentTheme={theme}
        sidebarItems={sidebarDosenPembimbingItems}
        subpageTitle="Mahasiswa"
      >
        <DashboardDosenPembimbing />
      </Layout>
    </div>
  );
};

export default DashboardDosenPembimbingPages;
