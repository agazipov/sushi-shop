import React from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { PAGINATION, PAGINATION_DESCRIPT } from '../../router/router';

import './Navigation.css'

export default function Navigation() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" className="navigation">
            <div className="navigation__container container">
                <Navbar.Brand
                    className="navigation__brand"
                    as={NavLink}
                    to={PAGINATION[0].path}
                >ГЛАВНАЯ</Navbar.Brand>
                <Nav className="me-auto">
                    {PAGINATION[0].children?.map((page, index) => {
                        if (!page.path) return;
                        return (
                            <React.Fragment key={index}>
                                <Nav.Link
                                    as={NavLink}
                                    to={page.path!}
                                >{PAGINATION_DESCRIPT[page.path!]}</Nav.Link>
                            </React.Fragment>
                        )
                    })}
                </Nav>
            </div>
        </Navbar>
    )
}