import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, UncontrolledDropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import './logo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    const [isOpen, updateIsOpen] = useState(false);
    const [newIsHover, updateNewIsHover] = useState(false);
    const [menIsHover, updateMenIsHover] = useState(false);
    const [womenIsHover, updateWomenIsHover] = useState(false);
    const [shirtIsHover, updateShirtIsHover] = useState(false);
    const [jeanIsHover, updateJeanIsHover] = useState(false);
    const [jacketIsHover, updateJacketIsHover] = useState(false);
    const [skirtIsHover, updateSkirtIsHover] = useState(false);
    const [dressIsHover, updateDressIsHover] = useState(false);
    const [pantIsHover, updatePantIsHover] = useState(false);

    return (
      <header className="container-fluid shadow-sm bg-white sticky-top mb-3" >
        <Navbar light expand="lg">
          <NavLink className="logo nav-link" to="/">JorJus</NavLink>
          <NavbarToggler classname="btn btn-sm btn-white" onClick={() => updateIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar className="medium-bold" id="collapse">
            <Nav className="mx-auto font-weight-bold" navbar>
              <UncontrolledDropdown className="px-lg-2" isOpen={newIsHover} onMouseOver={() => updateNewIsHover(true)} onMouseLeave={() => updateNewIsHover(false)} toggle={() => updateNewIsHover(!newIsHover)} >
                <NavLink to="/new" className="nav-link px-lg-3"> new &nbsp;<i className="fas fa-angle-down"></i> </NavLink>
                <DropdownMenu className="small-bold rounded-0 bg-white p-0 m-0 border-0">
                  <NavLink className="nav-link pl-lg-3 py-lg-3 pl-2" to="/new">all new</NavLink>
                  <NavLink className="nav-link pl-lg-3 py-lg-3 pl-2" to="/men/new">men</NavLink>
                  <NavLink className="nav-link pl-lg-3 py-lg-3 pl-2" to="/women/new">women</NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown className="px-lg-2" isOpen={menIsHover} onMouseOver={() => updateMenIsHover(true)} onMouseLeave={() => updateMenIsHover(false)} toggle={() => updateMenIsHover(!menIsHover)} >
                <NavLink to="/men" className="nav-link px-lg-3"> men &nbsp;<i className="fas fa-angle-down"></i> </NavLink>
                <DropdownMenu className="small-bold rounded-0 bg-white p-0 m-0 " >
                  <NavLink className="nav-link px-lg-3 py-lg-3 pl-2" to="/men">all men</NavLink>
                  <UncontrolledDropdown isOpen={shirtIsHover} onMouseOver={() => updateShirtIsHover(true)} onMouseLeave={() => updateShirtIsHover(false)} toggle={() => updateShirtIsHover(!shirtIsHover)} >
                    <NavLink className="nav-link px-lg-3 py-lg-3 pl-2 text-dark" to="/men/shirts-tees">shirts & tees &nbsp;<i className="fas fa-angle-right"></i> </NavLink>
                    <DropdownMenu className="small-bold rounded-0 bg-white p-0 m-0" style={{ left: "99%", top: "-5%" }}>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/men/shirts-tees">all shirts & tees</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/men/shirts-tees/long-shirts">long sleeve shirts</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/men/shirts-tees/short-shirts">short sleeve shirts</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/men/shirts-tees/long-tees">long sleeve tees</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/men/shirts-tees/short-tees">short sleeve tees</NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown isOpen={jeanIsHover} onMouseOver={() => updateJeanIsHover(true)} onMouseLeave={() => updateJeanIsHover(false)} toggle={() => updateJeanIsHover(!jeanIsHover)} >
                    <NavLink className="nav-link px-lg-3 py-lg-3 pl-2 text-dark" to="/men/jeans">jeans &nbsp;<i className="fas fa-angle-right"></i> </NavLink>
                    <DropdownMenu className="small-bold rounded-0 bg-white p-0 m-0 border-0" style={{ left: "99%", top: "-5%" }}>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/men/jeans">all jeans</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/men/jeans/brand-name">denim jeans</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/men/jeans/style">style jeans</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/men/jeans/normal">normal jeans</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/men/jeans/short">short jeans</NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown isOpen={jacketIsHover} onMouseOver={() => updateJacketIsHover(true)} onMouseLeave={() => updateJacketIsHover(false)} toggle={() => updateJacketIsHover(!jacketIsHover)} >
                    <NavLink className="nav-link px-lg-3 py-lg-3 pl-2 text-dark" to="/men/jackets-coats">jackets & coats &nbsp;<i className="fas fa-angle-right"></i> </NavLink>
                    <DropdownMenu className="small-bold rounded-0 bg-white p-0 m-0 border-0" style={{ left: "99%", top: "-5%" }}>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/men/jackets-coats">all jackets & coats</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/men/jackets-coats/bomber">bomber jackets</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/men/jackets-coats/denim">denim jackets</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/men/jackets-coats/long">long coats</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/men/jackets-coats/winter">winter coats</NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavLink className="nav-link px-lg-3 py-lg-3 pl-2" to="/men/trousers">trousers</NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown className="px-lg-2" isOpen={womenIsHover} onMouseOver={() => updateWomenIsHover(true)} onMouseLeave={() => updateWomenIsHover(false)} toggle={() => updateWomenIsHover(!womenIsHover)} >
                <NavLink to="/women" className="nav-link px-lg-3"> women &nbsp;<i className="fas fa-angle-down"></i> </NavLink>
                <DropdownMenu className="small-bold rounded-0 bg-white p-0 m-0 border-0 " >
                  <NavLink className="nav-link px-lg-3 py-lg-3 pl-2" to="/women">all women</NavLink>
                  <UncontrolledDropdown isOpen={shirtIsHover} onMouseOver={() => updateShirtIsHover(true)} onMouseLeave={() => updateShirtIsHover(false)} toggle={() => updateShirtIsHover(!shirtIsHover)} >
                    <NavLink className="nav-link px-lg-3 py-lg-3 pl-2 text-dark" to="/women/shirts-tees">shirts & tees &nbsp;<i className="fas fa-angle-right"></i> </NavLink>
                    <DropdownMenu className="small-bold rounded-0 bg-white p-0 m-0 border-0" style={{ left: "99%", top: "-5%" }}>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/shirts-tees">all shirts & tees</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/shirts-tees/long-shirts">long sleeve shirts</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/shirts-tees/short-shirts">short sleeve shirts</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/shirts-tees/sleeveless-shirts">sleeveless shirts</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/shirts-tees/one-side-shirts">one-side sleeve shirts</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/shirts-tees/long-tees">long sleeve tees</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/shirts-tees/short-tees">short sleeve tees</NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown isOpen={jeanIsHover} onMouseOver={() => updateJeanIsHover(true)} onMouseLeave={() => updateJeanIsHover(false)} toggle={() => updateJeanIsHover(!jeanIsHover)} >
                    <NavLink className="nav-link px-lg-3 py-lg-3 pl-2 text-dark" to="/women/jeans">jeans &nbsp;<i className="fas fa-angle-right"></i> </NavLink>
                    <DropdownMenu className="small-bold rounded-0 bg-white p-0 m-0 border-0" style={{ left: "99%", top: "-5%" }}>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/jeans">all jeans</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/jeans/style">style jeans</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/jeans/normal">normal jeans</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/jeans/short">short jeans</NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown isOpen={jacketIsHover} onMouseOver={() => updateJacketIsHover(true)} onMouseLeave={() => updateJacketIsHover(false)} toggle={() => updateJacketIsHover(!jacketIsHover)} >
                    <NavLink className="nav-link px-lg-3 py-lg-3 pl-2 text-dark" to="/women/jackets-coats">jackets & coats &nbsp;<i className="fas fa-angle-right"></i> </NavLink>
                    <DropdownMenu className="small-bold rounded-0 bg-white p-0 m-0 border-0" style={{ left: "99%", top: "-5%" }}>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/jackets-coats">all jackets & coats</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/jackets-coats/bomber">bomber jackets</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/jackets-coats/denim">denim jackets</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/jackets-coats/long">long coats</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/jackets-coats/winter">winter coats</NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown isOpen={skirtIsHover} onMouseOver={() => updateSkirtIsHover(true)} onMouseLeave={() => updateSkirtIsHover(false)} toggle={() => updateSkirtIsHover(!skirtIsHover)} >
                    <NavLink className="nav-link px-lg-3 py-lg-3 pl-2 text-dark" to="/women/skirts">skirts &nbsp;<i className="fas fa-angle-right"></i> </NavLink>
                    <DropdownMenu className="small-bold rounded-0 bg-white p-0 m-0 border-0" style={{ left: "99%", top: "-5%" }}>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/skirts">all skirts</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/skirts/long">long skirts</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/skirts/short">short skirts</NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown isOpen={dressIsHover} onMouseOver={() => updateDressIsHover(true)} onMouseLeave={() => updateDressIsHover(false)} toggle={() => updateDressIsHover(!dressIsHover)} >
                    <NavLink className="nav-link px-lg-3 py-lg-3 pl-2 text-dark" to="/women/dresses">dresses &nbsp;<i className="fas fa-angle-right"></i> </NavLink>
                    <DropdownMenu className="small-bold rounded-0 bg-white p-0 m-0 border-0" style={{ left: "99%", top: "-5%" }}>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/dresses">all dresses</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/dresses/long">long sleeve dresses</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/dresses/short">short sleeve dresses</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/dresses/sleeveless">sleeveless dresses</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/dresses/one-side">one-side sleeve dresses</NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown isOpen={pantIsHover} onMouseOver={() => updatePantIsHover(true)} onMouseLeave={() => updatePantIsHover(false)} toggle={() => updatePantIsHover(!pantIsHover)} >
                    <NavLink className="nav-link px-lg-3 py-lg-3 pl-2 text-dark" to="/women/pants">pants &nbsp;<i className="fas fa-angle-right"></i> </NavLink>
                    <DropdownMenu className="small-bold rounded-0 bg-white p-0 m-0 border-0" style={{ left: "99%", top: "-5%" }}>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/pants">all pants</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/pants/long">long pants</NavLink>
                      <NavLink className="nav-link py-lg-3 pl-3" to="/women/pants/short">short pants</NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavLink className="px-lg-3 nav-link" to="/accessories">Accessories</NavLink>
            </Nav>
            <form className="form form-inline mr-md-4">
              <input className="form-control pl-3 pr-5 rounded-0 small-bold" type="text" placeholder="I'M LOOKING FOR..." />
              <button className="btn btn-sm" type="submit"><i className="search icon"></i></button>
            </form>
            <DropdownItem divider />
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/account">Sign In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/wish-list">Wish list</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/cart">My Cart</NavLink>
              </NavItem>
            </Nav>
            <DropdownItem divider />
            <Nav className="dynamic-header" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/about-us">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/support">Support</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/privacy">Privacy Policy</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
}