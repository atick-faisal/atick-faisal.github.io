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

export default function NavigationBar() {
    return (
        <Navbar color="surface" container="lg" expand="md" light>
            <NavbarBrand>
                <b>Atick</b> Faisal
            </NavbarBrand>
            <NavbarToggler
                onClick={function noRefCheck() {}}
                className="mr-2"
            />
            <Collapse isOpen={false} navbar>
                <Nav className="ms-auto" navbar>
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
            </Collapse>
        </Navbar>
    );
}
