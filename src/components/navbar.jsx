import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Collapse,
    Button,
} from "reactstrap";

export default function NavigationBar() {
    return (
        <Navbar color="secondary" container="lg" expand="md" light>
            <NavbarBrand>
                <b>Atick</b> Faisal
            </NavbarBrand>
            {/* <Collapse navbar> */}
            <Nav className="me" navbar>
                <NavItem>
                    <NavLink href="#">Research</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Projects</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Contact</NavLink>
                </NavItem>
                <NavItem>
                    <Button className="nav-btn" color="dark" href="#">
                        Github
                    </Button>
                </NavItem>
            </Nav>
            {/* </Collapse> */}
        </Navbar>
    );
}
