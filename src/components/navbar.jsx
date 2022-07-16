import { useContext } from "react";
import { Nav, Navbar, NavbarBrand, NavItem, Button } from "reactstrap";
import { FiSun, FiMoon } from "react-icons/fi";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsFillJournalBookmarkFill, BsFillPersonFill } from "react-icons/bs";

import { ThemeContext } from "../contexts/theme-context";

export default function NavigationBar({ toggleDarkMode }) {
    const { darkMode } = useContext(ThemeContext);

    return (
        <Navbar
            color={darkMode ? "dark" : "light"}
            container="lg"
            expand="md"
            light={!darkMode}
            dark={darkMode}
        >
            <NavbarBrand>
                <div className="nav-brand">
                    <b>Atick</b> Faisal
                </div>
            </NavbarBrand>
            <Nav className="ms-auto" navbar>
                <NavItem>
                    <Button color={darkMode ? "dark" : "light"}>
                        <div className="btn-content">
                            <BsFillPersonFill
                                size="1.2rem"
                                className="icon nav-btn-icon"
                            />
                            <div className="nav-btn-txt">About</div>
                        </div>
                    </Button>
                </NavItem>
                <NavItem>
                    <Button color={darkMode ? "dark" : "light"}>
                        <div className="btn-content">
                            <MdOutlineDesignServices
                                size="1.2rem"
                                className="icon nav-btn-icon"
                            />
                            <div className="nav-btn-txt">Projects</div>
                        </div>
                    </Button>
                </NavItem>
                <NavItem>
                    <Button color={darkMode ? "dark" : "light"}>
                        <div className="btn-content">
                            <BsFillJournalBookmarkFill
                                size="1.2rem"
                                className="icon nav-btn-icon"
                            />
                            <div className="nav-btn-txt">Publications</div>
                        </div>
                    </Button>
                </NavItem>
                <NavItem>
                    <Button
                        className="dark-mode-toggle"
                        color={darkMode ? "darker" : "lighter"}
                        onClick={toggleDarkMode}
                    >
                        {darkMode && <FiSun size="1.2rem" className="icon" />}
                        {!darkMode && <FiMoon size="1.2rem" className="icon" />}
                    </Button>
                </NavItem>
            </Nav>
        </Navbar>
    );
}
