import {useTheme} from "../hooks/useTheme.hooks";
import {useKeycloak} from "@react-keycloak/web";
import {useState, useEffect} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {LoadingInterfaceLanding} from "../components/LoadingInterface";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Flows from "../components/landing/Flows.tsx";
import FAQs from "../components/landing/FAQs";
import Footer from "../components/landing/Footer";
import axios from "axios";

const LandingPages = () => {
    const {theme, setTheme} = useTheme();
    const {keycloak, initialized} = useKeycloak(); // initialized is provided by useKeycloak hook to check if Keycloak is ready
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    // Tampilkan loading atau null hingga Keycloak siap di init
    useEffect(() => {
        if (initialized) {
            setIsLoading(false);
        }
    }, [initialized]);

    // Handle aksi apapun saat user telah terauntetikasi, seperti audit data ip log dsb nya
    // useEffect(() => {
    //     if (keycloak.authenticated) {
    //         axios.post(`${import.meta.env.VITE_API_URL_PLACEHOLDER}/user`, {
    //                 email: keycloak.tokenParsed?.email,
    //                 nama: keycloak.tokenParsed?.name,
    //             }).catch(error => {
    //             console.error('Error logging user:', error);
    //         });
    //     }
    // }, [keycloak.authenticated]);

    const handleLogin = () => {
        if (keycloak.authenticated) {
            keycloak.logout();
        } else {
            keycloak.login();
        }
    };

    const handleGoToDashboard = (navigate: NavigateFunction) => {
        const isDevelopment = import.meta.env.MODE === "development";

        if (isDevelopment) {
            // In development, always navigate to mahasiswa dashboard
            navigate("/mahasiswa");
            return;
        }

        if (keycloak.hasResourceRole("Mahasiswa")) {
            navigate("/mahasiswa");
        } else if (keycloak.hasResourceRole("Dosen")) {
            navigate("/dosen");
        } else if (keycloak.hasResourceRole("Koordinator")) {
            navigate("/koordinator");
        } else if (keycloak.hasResourceRole("Pembimbing Instansi")) {
            navigate("/pembimbing-instansi");
        } else if (keycloak.hasResourceRole("Kaprodi")) {
            navigate("/kaprodi");
        } else {
            console.error("User tidak memiliki peran yang diberikan");
        }
    };

    // Render loading screen if still initializing
    // if (isLoading) {
    //   return <LoadingInterfaceLanding />;
    // }

    return (
        <div data-theme={theme}>
            <Navbar
                setTheme={setTheme}
                currentTheme={theme}
                isLogin={keycloak.authenticated!}
                onLoginClick={handleLogin}
                onGoToDashboardClick={() => handleGoToDashboard(navigate)}
            />
            <Hero/>
            <Features/>
            <Flows/>
            <FAQs/>
            <Footer/>
        </div>
    );
};

export default LandingPages;
