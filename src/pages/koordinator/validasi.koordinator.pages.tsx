import { useTheme } from "../../hooks/useTheme.hooks";
import Layout from "../../components/dashboard/Layout";
import { sidebarKoordinatorItems } from "../../components/dashboard/SidebarItems";
import ValidasiKoordinator from "../../components/dashboard/koordinator/ValidasiKoordinator";

const ValidasiKoordinatorPages = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <Layout
        setTheme={setTheme}
        currentTheme={theme}
        sidebarItems={sidebarKoordinatorItems}
        subpageTitle="Validasi Dokumen Mahasiswa"
      >
        <ValidasiKoordinator />
      </Layout>
    </div>
  );
};

export default ValidasiKoordinatorPages;