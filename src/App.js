import logo from './logo.svg';
import './App.css';
import './custom.scss'
import Welcome from './Components/Welcome'
import React from 'react'
import ReactDOM from 'react-dom'
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, NavDropdown,
        Tabs, Tab  } from 'react-bootstrap'

class App extends React.Component {

  render() {
    return (
      <div className="App">

      <Navbar collapseOnSelect expand="lg" bg="dark"
              variant="dark" className="Navbar">
        <Navbar.Brand className="Navbar-Brand"
            href="/">Online language translator</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="homeLink" href="/">Home</Nav.Link>
          <NavDropdown title="Dictionaries" id="basic-nav-dropdown">
            <NavDropdown.Item href="#Nzebi">Nzebi</NavDropdown.Item>
            <NavDropdown.Item href="#Fang">Fang</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="homeLink" href="/">About</Nav.Link>
        </Nav>
      </Navbar>

      <div className="Tabs">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="dictionary" title="Dictionary">

          </Tab>
          <Tab eventKey="history" title="History">

          </Tab>
          <Tab eventKey="language specifics"
                title="Languague specifics">
          </Tab>
        </Tabs>
      </div>


      </div>
    );
  }

}

export default App;
