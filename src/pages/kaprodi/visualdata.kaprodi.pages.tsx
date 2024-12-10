import { useTheme } from "../../hooks/useTheme.hooks";
import Layout from "../../components/dashboard/Layout";
import { sidebarKaprodiItems } from "../../components/dashboard/SidebarItems";
import VisualDataKaprodi from "../../components/dashboard/kaprodi/VisualDataKaprodi"

const MahasiswaDosenPengujiPages = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <Layout
        setTheme={setTheme}
        currentTheme={theme}
        sidebarItems={sidebarKaprodiItems}
        subpageTitle="Visualisasi Data"
      >
        <VisualDataKaprodi />
      </Layout>
    </div>
  );
};

export default MahasiswaDosenPengujiPages;