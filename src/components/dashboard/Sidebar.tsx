import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    Sidebar,
    Sidebar as FlowbiteSidebar,
    SidebarItem,
    SidebarItems,
    SidebarLogo,
    SidebarCollapse
} from "flowbite-react";
import {
    LayoutDashboard,
    FileSearch,
    BadgeCheck,
    FileCheck2,
    Users,
    ClipboardList,
    GraduationCap,
    BellPlus,
    Calculator,
    LogOut,
    UserCircle2
} from "lucide-react";
import Logo from "../assets/logoimage.png";

interface MenuItem {
    path: string;
    title: string;
    icon: React.ReactNode;
}

interface UserData {
    name?: string;
    id?: string;
    [key: string]: any;
}

interface SidebarProps {
    role: string;
    userData?: UserData;
}

const menuConfigs: { [key: string]: MenuItem[] } = {
    mahasiswa: [
        {
            title: "Dashboard",
            path: "/mahasiswa",
            icon: <LayoutDashboard className="w-5 h-5" />,
        },
        {
            title: "Pengajuan",
            path: "/mahasiswa/pengajuan",
            icon: <FileSearch className="w-5 h-5" />,
        },
        {
            title: "Status",
            path: "/mahasiswa/status",
            icon: <BadgeCheck className="w-5 h-5" />,
        },
    ],
    koordinator: [
        {
            title: "Dashboard",
            path: "/koordinator",
            icon: <LayoutDashboard className="w-5 h-5" />,
        },
        {
            title: "Manajemen User",
            path: "/koordinator/manage-account",
            icon: <Users className="w-5 h-5" />,
        },
        {
            title: "Validasi Dokumen",
            path: "/koordinator/validasi",
            icon: <FileSearch className="w-5 h-5" />,
        },
        {
            title: "Penilaian Seminar",
            path: "/koordinator/jadwal-nilai",
            icon: <Calculator className="w-5 h-5" />,
        },
        {
            title: "Notifikasi",
            path: "/koordinator/notifikasi",
            icon: <BellPlus className="w-5 h-5" />,
        },
    ],
    dosen: [
        {
            title: "Dashboard",
            path: "/dosen",
            icon: <LayoutDashboard className="w-5 h-5" />,
        },
        {
            title: "Mahasiswa Bimbingan",
            path: "/dosen/mahasiswa-bimbingan",
            icon: <ClipboardList className="w-5 h-5" />,
        },
        {
            title: "Mahasiswa Seminar",
            path: "/dosen/mahasiswa-seminar",
            icon: <GraduationCap className="w-5 h-5" />,
        },
        {
            title: "Riwayat Bimbingan",
            path: "/dosen/riwayat",
            icon: <FileCheck2 className="w-5 h-5" />,
        },
    ],
};

const SidebarComponent: React.FC<SidebarProps> = ({ role, userData }) => {
    const location = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const menuItems = menuConfigs[role] || [];

    const handleLogout = () => {
        // Implement logout logic
        window.location.href = "/login";
    };

    return (
        <Sidebar
            collapsed={isCollapsed}
            className="h-full fixed top-0 left-0 z-20 pt-16"
        >
            <div className="flex h-full flex-col justify-between">
                <SidebarLogo
                    img={Logo}
                    imgAlt="SITRACK Logo"
                    className="mb-5"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                />

                <SidebarItems>
                    {menuItems.map((item, index) => (
                        <SidebarItem
                            key={index}
                            active={location.pathname === item.path}
                            as={Link}
                            to={item.path}
                            icon={item.icon}
                        >
                            {item.title}
                        </SidebarItem>
                    ))}
                </SidebarItems>

                <SidebarItems className="mt-auto border-t pt-4">
                    <SidebarItem
                        icon={<LogOut />}
                        onClick={handleLogout}
                        className="cursor-pointer"
                    >
                        Logout
                    </SidebarItem>

                    <SidebarItem
                        icon={<UserCircle2 />}
                        className="bg-gray-100"
                    >
                        <div className="flex flex-col">
                            <span className="font-medium">{userData?.name || "User Name"}</span>
                            <span className="text-sm text-gray-500">{userData?.id || "User ID"}</span>
                        </div>
                    </SidebarItem>
                </SidebarItems>
            </div>
        </Sidebar>
    );
};

export default SidebarComponent;