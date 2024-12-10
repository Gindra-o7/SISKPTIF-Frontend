import { useTheme } from "../../hooks/useTheme.hooks";
import Layout from "../../components/dashboard/Layout";
import { sidebarKoordinatorItems } from "../../components/dashboard/SidebarItems";
import DashboardKoordinator from "../../components/dashboard/koordinator/DashboardKoordinator";

const DashboardKoordinatorPages = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <Layout
        setTheme={setTheme}
        currentTheme={theme}
        sidebarItems={sidebarKoordinatorItems}
        subpageTitle="Dashboard"
      >
        <DashboardKoordinator />
      </Layout>
    </div>
  );
};

export default DashboardKoordinatorPages;
