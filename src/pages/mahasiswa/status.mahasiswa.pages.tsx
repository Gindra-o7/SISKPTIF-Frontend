import { useTheme } from "../../hooks/useTheme.hooks";
import Layout from "../../components/dashboard/Layout";
import { sidebarMahasiswaItems } from "../../components/dashboard/SidebarItems";
import StatusMahasiswa from "../../components/dashboard/mahasiswa/StatusMahasiswa"

const StatusMahasiswaPages = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <Layout
        setTheme={setTheme}
        currentTheme={theme}
        sidebarItems={sidebarMahasiswaItems}
        subpageTitle="Status"
      >
        <StatusMahasiswa />
      </Layout>
    </div>
  );
}

export default StatusMahasiswaPages;