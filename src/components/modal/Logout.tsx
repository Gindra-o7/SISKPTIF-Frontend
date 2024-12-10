import React, { useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";

interface LogoutProps {
  isOpen: boolean;
  onClose: () => void;
}

const Logout: React.FC<LogoutProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  const [isLogout, setIsLogout] = useState(false);

  // Early return if modal is not open
  if (!isOpen) return null;

  const handleLogout = async () => {
    try {
      setIsLogout(true);
      // Initiate logout with Keycloak
      await keycloak.logout();
      // Navigate to login page or home page after logout
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      setIsLogout(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-lg w-full max-w-md mx-4 p-6 shadow-xl">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Confirm Logout
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Are you sure you want to logout from this application?
        </p>

        <div className="flex justify-end space-x-3">
          <Button color="gray" onClick={onClose} disabled={isLogout}>
            Cancel
          </Button>
          <Button color="failure" onClick={handleLogout} disabled={isLogout}>
            {isLogout ? "Logging out..." : "Logout"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
