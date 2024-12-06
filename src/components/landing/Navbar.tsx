import { useState } from "react";
import { Button, Modal, Navbar } from "flowbite-react";
import { HeaderProps } from "../../interfaces/common.interfaces.ts";
import logo from "../../assets/logoimage.png";

const Header = ({
                    setTheme,
                    currentTheme,
                    isLogin,
                    onLoginClick,
                    onGoToDashboardClick
                }: HeaderProps) => {
    const [showModal, setShowModal] = useState(false);
    const [isLogout, setIsLogout] = useState(false);

    return (
        <>
            <Navbar fluid rounded className="fixed w-full z-50 bg-white shadow-md">
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" className="h-10 w-10 mr-3"/>
                    <span className="text-xl font-bold text-primary-dark">SITRACK</span>
                </Navbar.Brand>

                <div className="flex md:order-2">
                    {isLogin ? (
                        <Button
                            outline
                            onClick={onGoToDashboardClick}
                            className="mr-2 hidden sm:block"
                        >
                            Pergi ke Dashboard
                        </Button>
                    ) : null}

                    <Button
                        onClick={isLogin ? () => setShowModal(true) : onLoginClick}
                        color={isLogin ? "failure" : "blue"}
                    >
                        {isLogin ? "Sign Out" : "Sign In"}
                    </Button>

                    <Navbar.Toggle className="ml-4"/>
                </div>

                <Navbar.Collapse>
                    <Navbar.Link href="#home">Home</Navbar.Link>
                    <Navbar.Link href="#features">Features</Navbar.Link>
                    <Navbar.Link href="#flow">Flows</Navbar.Link>
                    <Navbar.Link href="#faq">FAQs</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>

            {/* Logout Confirmation Modal */}
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <Modal.Header>Logout Confirmation</Modal.Header>
                <Modal.Body>
                    <p className="text-xl">Apakah kamu yakin mau logout dari aplikasi?</p>
                    {isLogout && <div className="text-center">Loading...</div>}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        color="failure"
                        onClick={() => {
                            setIsLogout(true);
                            onLoginClick();
                        }}
                    >
                        {isLogout ? "Sedang Logout..." : "Iyah, saya yakin"}
                    </Button>
                    <Button color="gray" onClick={() => setShowModal(false)}>
                        Gak jadi deh
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Header;