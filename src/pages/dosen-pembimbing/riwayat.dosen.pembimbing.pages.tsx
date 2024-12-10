import { useTheme } from "../../hooks/useTheme.hooks";
import Layout from "../../components/dashboard/Layout";
import { sidebarDosenPembimbingItems } from "../../components/dashboard/SidebarItems";
import RiwayatDosenPembimbing from "../../components/dashboard/dosen-pembimbing/RiwayatDosenPembimbing";

const RiwayatDosenPembimbingPages = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <Layout
        setTheme={setTheme}
        currentTheme={theme}
        sidebarItems={sidebarDosenPembimbingItems}
        subpageTitle="Riwayat"
      >
        <RiwayatDosenPembimbing />
      </Layout>
    </div>
  );
};

export default RiwayatDosenPembimbingPages;
