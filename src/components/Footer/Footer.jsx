import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import logo from "../../assets/images/res-logo.png";
import { Link } from "react-router-dom";
import '../../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
          <h5 className="footer__title">Delivery Time</h5>
            <ListGroup  className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:30am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: 148 Nguyen Huu Tho  </p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 0794540685</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: duythai147258@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Muhibur Rahman. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/duythai1472">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="https://github.com/thainguyen1223">
                  <i class="ri-github-line"></i>
                </Link>
              </span>
              <span>
                {" "}
                <Link to=" https://www.linkedin.com/in/muhib160/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
