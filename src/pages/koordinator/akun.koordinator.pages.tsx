import { useTheme } from "../../hooks/useTheme.hooks";
import Layout from "../../components/dashboard/Layout";
import { sidebarKoordinatorItems } from "../../components/dashboard/SidebarItems";
import ManageAkunKoordinator from "../../components/dashboard/koordinator/ManageAkunKoordinator";

const ManajemenAkunKoordinatorPages = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <Layout
        setTheme={setTheme}
        currentTheme={theme}
        sidebarItems={sidebarKoordinatorItems}
        subpageTitle="Managemen Akun"
      >
        <ManageAkunKoordinator />
      </Layout>
    </div>
  );
};

export default ManajemenAkunKoordinatorPages;