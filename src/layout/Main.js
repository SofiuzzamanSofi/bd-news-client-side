import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Pages/Shared/Footer/Footer';
import Header from '../components/Pages/Shared/Header/Header';
import LeftSideNav from '../components/Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../components/Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>

            {/* This is Header  */}
            <Header />

            {/* middle container in 3 part  */}
            <Container>
                <Row>
                    <Col lg="2" className="d-none d-lg-block"><LeftSideNav /></Col>


                    {/* outlet in middle main     OUTLET         things  */}
                    <Col lg="7"><Outlet /></Col>
                    <Col lg="3"><RightSideNav /></Col>
                </Row>
            </Container>

            {/* footer  */}
            <Footer />
        </div>
    );
};

export default Main;