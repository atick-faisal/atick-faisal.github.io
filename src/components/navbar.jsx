import { ThemeContext } from "../contexts/theme-context";
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Collapse,
    Button,
} from "reactstrap";

import { MdOutlineDesignServices } from "react-icons/md";
import { BsFillJournalBookmarkFill, BsFillPersonFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { useContext } from "react";

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
            {/* <NavbarToggler
                onClick={function noRefCheck() {}}
                className="mr-2"
            /> */}
            {/* <Collapse isOpen={false} navbar> */}
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
                        color={darkMode ? "darker" : "dark"}
                        onClick={() => {
                            toggleDarkMode();
                        }}
                    >
                        <div className="btn-content">
                            <AiFillGithub size="1.2rem" className="icon" />
                            <div className="nav-btn-txt github">GitHub</div>
                        </div>
                    </Button>
                </NavItem>
            </Nav>
            {/* </Collapse> */}
        </Navbar>
    );
}
