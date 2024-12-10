import { useTheme } from "../../hooks/useTheme.hooks";
import Layout from "../../components/dashboard/Layout";
import { sidebarDosenPengujiItems } from "../../components/dashboard/SidebarItems";
import MahasiswaDosenPenguji from "../../components/dashboard/dosen-penguji/MahasiswaDosenPenguji"

const MahasiswaDosenPengujiPages = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <Layout
        setTheme={setTheme}
        currentTheme={theme}
        sidebarItems={sidebarDosenPengujiItems}
        subpageTitle="Mahasiswa"
      >
        <MahasiswaDosenPenguji />
      </Layout>
    </div>
  );
};

export default MahasiswaDosenPengujiPages;