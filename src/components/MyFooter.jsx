import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import footerlogo from "../assets/images/png/footerlogo.png"
import facebook from "../assets/images/png/facebook.png";
import twitter from "../assets/images/png/twitter.png";
import googleplus from "../assets/images/png/googleplus.png";

const MyFooter = () => {
  return (
    <section className=" pt-5 bg_footer">
      <Container>
        <Row className=" align-items-center pb-4">
          <Col lg={4}>
            <a href="#">
              <img src={footerlogo} alt="logo" />
            </a>
            <p className=" fs_sm fw_400 ff_poppins clr_lightestwhite mb-5">
              Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
              euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
              in leo ullamcorper, in finibus elit porta.
            </p>
            <div className=" d-flex align-items-center">
              <a href="#">
                <img className="footer_imgsize" src={facebook} alt="facebook" />
              </a>
              <a href="#">
                {" "}
                <img
                  className=" ms-3 footer_imgsize"
                  src={twitter}
                  alt="twitter"
                />
              </a>
              <a href="#">
                {" "}
                <img
                  className=" ms-3 footer_imgsize"
                  src={googleplus}
                  alt="googleplus"
                />
              </a>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              <Col className=" mt-4" lg={3}>
                <ul className=" ps-0">
                  <li className=" clr_white fw_600 fs_md  mb-3">
                    CUSTOM LINKS
                  </li>
                  <li className=" clr_lightestwhite fw_400 fs_md mb-2 text_white c_pointer">
                    Lorem ipsum
                  </li>
                  <li className=" clr_lightestwhite fw_400 fs_md text_white c_pointer">
                    Lorem ipsum
                  </li>
                </ul>
              </Col>
              <Col className=" mt-4" lg={3}>
                <ul className=" ps-0">
                  <li className=" clr_white fw_600 fs_md  mb-3">PRODUCTS</li>
                  <li className=" clr_lightestwhite fw_400 fs_md mb-2 text_white c_pointer">
                    Lorem ipsum
                  </li>
                  <li className=" clr_lightestwhite fw_400 fs_md mb-2 text_white c_pointer">
                    Lorem ipsum
                  </li>
                  <li className=" clr_lightestwhite fw_400 fs_md text_white c_pointer">
                    Lorem ipsum
                  </li>
                </ul>
              </Col>
              <Col className=" mt-4" lg={3}>
                <ul className=" ps-0">
                  <li className=" clr_white fw_600 fs_md  mb-3">OUR COMPANY</li>
                  <li className=" clr_lightestwhite fw_400 fs_md mb-2 text_white c_pointer">
                    Lorem ipsum
                  </li>
                  <li className=" clr_lightestwhite fw_400 fs_md text_white c_pointer">
                    Lorem ipsum
                  </li>
                </ul>
              </Col>
              <Col className=" mt-4" lg={3}>
                <ul className=" ps-0">
                  <li className=" clr_white fw_600 fs_md  mb-3">
                    YOUR ACCOUNT
                  </li>
                  <li className=" clr_lightestwhite fw_400 fs_md mb-2 text_white c_pointer">
                    Lorem ipsum
                  </li>
                  <li className=" clr_lightestwhite fw_400 fs_md text_white c_pointer">
                    Lorem ipsum
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="bg_greyfooter text-center">
        <p className=" mb-0 py-3 clr_grey3">© Copyright SNKRPLTS 2021. </p>
      </div>
    </section>
  );
}

export default MyFooter