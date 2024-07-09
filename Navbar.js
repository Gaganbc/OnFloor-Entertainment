import * as ReactBootstrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from 'react-router-dom'

 function Navbar(){

    const key= localStorage.getItem('key')

    const history = useNavigate();


    function logout () {
        
        history('/google');
        localStorage.removeItem('key');

    }

    return key ? (
        <div>
        <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <ReactBootstrap.Container>
                <ReactBootstrap.Navbar.Brand><h1>OnFloor Entertainment</h1></ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-ReactBootstrap.Navbar-ReactBootstrap.Nav"/>
                <ReactBootstrap.Navbar.Collapse id="responsive-ReactBootstrap.Navbar-ReactBootstrap.Nav">
                    <ReactBootstrap.Nav className="me-auto" href=""><b></b></ReactBootstrap.Nav>
                    <ReactBootstrap.Nav>
                        <ReactBootstrap.Nav.Link onClick={logout}><h5><b>logout</b></h5></ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link eventKey={2} href="Aboutus"><h5><b>About_us</b></h5>
                        </ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
        </div>
    ) : (
        <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootstrap.Container>
            <ReactBootstrap.Navbar.Brand><h1>OnFloor Entertainment</h1></ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="responsive-ReactBootstrap.Navbar-ReactBootstrap.Nav"/>
            <ReactBootstrap.Navbar.Collapse id="responsive-ReactBootstrap.Navbar-ReactBootstrap.Nav">
                <ReactBootstrap.Nav className="me-auto" href=""><b></b></ReactBootstrap.Nav>
                <ReactBootstrap.Nav>
                    {/* <ReactBootstrap.Nav.Link onClick={logout}><h5><b>logout</b></h5></ReactBootstrap.Nav.Link> */}
                    <ReactBootstrap.Nav.Link eventKey={2} href="Aboutus"><h5><b>About_us</b></h5>
                    </ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Container>
    </ReactBootstrap.Navbar>
    )
}
export default Navbar