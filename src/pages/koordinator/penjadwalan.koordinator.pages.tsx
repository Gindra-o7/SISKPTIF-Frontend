import { useTheme } from "../../hooks/useTheme.hooks";
import Layout from "../../components/dashboard/Layout";
import { sidebarKoordinatorItems } from "../../components/dashboard/SidebarItems";
import PenjadwalanKoordinator from "../../components/dashboard/koordinator/PenjadwalanKoordinator";

const PenjadwalanKoordinatorPages = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <Layout
        setTheme={setTheme}
        currentTheme={theme}
        sidebarItems={sidebarKoordinatorItems}
        subpageTitle="Jadwal & Nilai"
      >
        <PenjadwalanKoordinator />
      </Layout>
    </div>
  );
};

export default PenjadwalanKoordinatorPages;