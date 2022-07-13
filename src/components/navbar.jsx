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
            <NavbarBrand>Atick Faisal</NavbarBrand>
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
                    <Button className="nav-btn" color="primary" href="#">
                        Contact
                    </Button>
                </NavItem>
            </Nav>
            {/* </Collapse> */}
        </Navbar>
    );
}
