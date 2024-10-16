import {FC} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {RouteObject, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {AlphabetTrainer} from "./pages/AlphabetTrainer/AlphabetTrainer";

const routes: RouteObject[] = [
    {path: "/", Component: MainPage},
    {path: "/alphabet", Component: AlphabetTrainer}
]

const router = createBrowserRouter(routes);

export const App: FC = () => {

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="./">Greek trainer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse role="combobox" id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="./alphabet">Алфавит</Nav.Link>
                            <Nav.Link href="./duotongs" disabled>Дивтонги</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <RouterProvider router={router} />
        </>
    )
}