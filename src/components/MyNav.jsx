import React, { useState } from "react";
import { Container } from "react-bootstrap";
import pagelogo from "../assets/images/png/pagelogo.png";
import cross from "../assets/images/svg/cross.svg";

const MyNav = () => {
  const [first, setfirst] = useState(true);
  return (
    <section className="navshadow">
      <Container>
        <nav className=" d-flex justify-content-between align-items-center justify-content-lg-end py-2">
          <a className=" d-lg-none" href="#">
            <img className="c_pointer" src={pagelogo} alt="pagelogo" />
          </a>

          <ul
            className={
              first
                ? " gap-4 d-flex mobileview hidden  mb-0"
                : " gap-4 d-flex mobileview show  mb-0"
            }
          >
            <li>
              <a
                className="ff_roboto nav_whiteclr fw_400 clr_black navtext"
                href="#"
              >
                HOME
              </a>
            </li>
            <li>
              <a className="ff_roboto nav_whiteclr fw_400 clr_black navtext" href="#">
                SNEAKERS KOPEN
              </a>
            </li>
            <li>
              <a className="ff_roboto nav_whiteclr fw_400 clr_black navtext" href="#">
                INTERVIEWS
              </a>
            </li>
            <li>
              <a className="ff_roboto nav_whiteclr fw_400 clr_black navtext" href="#">
                SALE
              </a>
            </li>
            <li>
              <a className="ff_roboto nav_whiteclr fw_400 clr_black navtext" href="#">
                SNEAKER VAN DE DAG
              </a>
            </li>
            <li>
              <a className="ff_roboto nav_whiteclr fw_400 clr_black navtext" href="#">
                SNEAKER FORUM
              </a>
            </li>
            <li>
              <a className="ff_roboto nav_whiteclr fw_400 clr_black navtext" href="#">
                BLOG
              </a>
            </li>
            <img
              className=" position-absolute d-lg-none cross_pos c_pointer"
              onClick={() => {
                setfirst(true);
              }}
              src={cross}
              alt="cross"
            />
          </ul>
          <div
            className="d-flex navbox align-items-center c_pointer"
            onClick={() => {
              setfirst(false);
            }}
          >
            <span className="navline"></span>
          </div>
        </nav>
      </Container>
    </section>
  );
};

export default MyNav;
