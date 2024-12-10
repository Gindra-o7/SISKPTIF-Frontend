import { useTheme } from "../../hooks/useTheme.hooks";
import Layout from "../../components/dashboard/Layout";
import { sidebarDosenPengujiItems } from "../../components/dashboard/SidebarItems";
import DashboardDosenPenguji from "../../components/dashboard/dosen-penguji/DashboardDosenPenguji"

const DashboardDosenPengujiPages = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <Layout
        setTheme={setTheme}
        currentTheme={theme}
        sidebarItems={sidebarDosenPengujiItems}
        subpageTitle="Dashboard"
      >
        <DashboardDosenPenguji />
      </Layout>
    </div>
  );
};

export default DashboardDosenPengujiPages;
