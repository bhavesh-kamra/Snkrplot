import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Description = () => {
  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState(0);

  return (
    <section className="py-lg-5 py-3">
      <Container>
        <div className="d-flex overflow_scroll_max_2xl align-items-start scrl">
          <div
            onClick={() => {
              setfirst(0);
              setsecond(0);
            }}
            className=" py-3"
          >
            <p
              className={
                second === 0
                  ? "white_nowrap ff_poppins fw_400 fs_lg clr_lightred red_border  position-relative c_pointer pb-2"
                  : "white_nowrap ff_poppins fw_400 fs_lg clr_black  position-relative c_pointer"
              }
            >
              DESCRIPTION
            </p>
          </div>
          <div
            onClick={() => {
              setfirst(1);
              setsecond(1);
            }}
            className="ms-4 py-3"
          >
            <p
              className={
                second === 1
                  ? "white_nowrap ms-lg-5 ff_poppins fw_400 fs_lg clr_lightred  position-relative c_pointer red_border pb-2"
                  : "white_nowrap ms-lg-5 ff_poppins fw_400 fs_lg clr_black  position-relative c_pointer"
              }
            >
              ADDITIONAL INFORMATION
            </p>
          </div>
          <div
            onClick={() => {
              setfirst(2);
              setsecond(2);
            }}
            className="ms-4 py-3"
          >
            <p
              className={
                second === 2
                  ? "white_nowrap ms-lg-5 ff_poppins fw_400 fs_lg clr_lightred red_border position-relative c_pointer pb-2"
                  : "white_nowrap ms-lg-5 ff_poppins fw_400 fs_lg clr_black  position-relative c_pointer"
              }
            >
              REVIEWS (1)
            </p>
          </div>
        </div>
        <div
          className={
            first === 0 ? "py-lg-3 py-3 d-block" : "d-none py-lg-3 py-3"
          }
        >
          <p className="ff_poppins fs_lg fw_400 clr_lightblack">
            Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
            euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
            in leo ullamcorper, in finibus elit porta. Sed eget congue neque,
            mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec
            massa in ligula vestibulum mattis. Suspendisse imperdiet lorem
            eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor
            vulputate hendrerit. Etiam vel lectus tortor. Pellentesque non
            pharetra mi. Cura
          </p>
        </div>
        <p
          className={
            first === 1
              ? "py-lg-3 py-3 d-block ff_poppins fs_lg fw_400 clr_lightblack"
              : "d-none py-lg-3 py-3 ff_poppins fs_lg fw_400 clr_lightblack"
          }
        >
          Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
          euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in
          leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis
          finibus neque. In vel dolor ac augue pretium suscipit. Ut nec mas
        </p>
        <p
          className={
            first === 2 ? "py-lg-3 py-3 d-block" : "d-none py-lg-3 py-3"
          }
        >
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <div>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div>
          <div>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div>
          <div>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div>
        </p>
      </Container>
    </section>
  );
};

export default Description;
