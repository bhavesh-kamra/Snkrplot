import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import sec1_img1 from "../assets/images/png/sec1_img1.png"
import sec1_img2 from "../assets/images/png/sec1_img2.png"
import sec1_img3 from "../assets/images/png/sec1_img3.png"
import sec1_img4 from "../assets/images/png/sec1_img4.png"
import sec1_img5 from "../assets/images/png/sec1_img5.png"
import stars from "../assets/images/png/stars.png"
import facebook1 from "../assets/images/svg/facebook1.svg"
import twitter1 from "../assets/images/svg/twitter1.svg"
import pinterest from "../assets/images/svg/pinterest.svg";
import google from "../assets/images/svg/google.svg";
import heart from "../assets/images/svg/heart.svg";
import compare from "../assets/images/svg/compare.svg";
import share from "../assets/images/svg/share.svg";



const PremiumMens = () => {
  return (
    <section className=" py-5">
      <Container>
        <Row className=' justify-content-center'>
          <Col className='' lg={6} sm={10} xs>
            <div>
              <img className=" w-100" src={sec1_img1} alt="redshoe" />
            </div>
            <div className=" mt-4 d-flex overflow-scroll justify-content-between scrl">
              <img className="" src={sec1_img2} alt="redshoe" />
              <img className=" ms-3" src={sec1_img3} alt="redshoe" />
              <img className=" ms-3" src={sec1_img4} alt="redshoe" />
              <img className=" ms-3" src={sec1_img5} alt="redshoe" />
            </div>
          </Col>
          <Col className=' mt-4 mt-lg-0 ps-lg-5' lg={6} sm={12}>
            <p className=" fs_3xl fw_600 ff_poppins">
              PREMIUM MENS SPORTS LATHER KEDS
            </p>
            <div className=" d-flex align-items-center mb-3">
              <img src={stars} alt="stars" />
              <p className=" mb-0 ms-3">( 5 Customer Review )</p>
            </div>
            <p className=" fs_lg ff_poppins fw_400 clr_grey4">
              Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
              euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
              in leo ullamcorper, in finibus elit porta. Sed eget congue neque,
              mattis finibus neque. In vel dolor ac augue pretium.
            </p>
            <div>
              <div className="d-flex align-items-lg-center mt-md-5 pt-4 flex-column-reverse flex-md-row">
                <div className="d-flex align-items-center">
                  <p className=" ff_poppins fw_500 fs_xl clr_black mt-2">
                    Qty:
                  </p>
                  <div>
                    <div className="borderqty  py-1 px-2 ms-3 me-4 ">
                      <span className="ff_poppins fw_400 fs_xl c_pointer clr_lightestgrey">
                        -
                      </span>
                      <span className="ff_poppins fw_400 fs_xl clr_lightestgrey px-3">
                        1
                      </span>
                      <span className=" ff_poppins fw_400 fs_xl c_pointer clr_lightestgrey">
                        +
                      </span>
                    </div>
                  </div>
                </div>
                <button className=" ff_poppins  cart_hover  fw_500 fs_lg border-0 px-4 py-2 clr_white btn_addcart c_pointer   ">
                  Add to Cart
                </button>
              </div>
              <div className="d-flex align-items-center">
                <p className=" ff_poppins fw_500 fs_xl clr_black me-3 mt-3 ">
                  Size:
                </p>
                <form>
                  <select className="ps-1 py-1">
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>
                  </select>
                </form>
              </div>
              <div className="d-flex">
                <p className=" ff_poppins fw_500 fs_xl clr_black me-3 mt-3 ">
                  Color:
                </p>
                <div className="d-flex align-items-center">
                  <div className=" border_grey c_pointer">
                    <div className="redcolor_box"></div>
                  </div>
                  <div className=" border_grey c_pointer">
                    <div className="khakicolor_box"></div>
                  </div>
                  <div className=" border_grey c_pointer">
                    <div className="blackcolor_box"></div>
                  </div>
                  <div className=" border_grey c_pointer">
                    <div className="darkgreycolor_box"></div>
                  </div>
                </div>
              </div>
              <div className="d-flex mt-3 bottom_bor_grey pb-4">
                <div className="d-flex align-items-center c_pointer">
                  <img src={compare} alt="compare" />
                  <p className="mb-0 ff_poppins fw_300 clr_darkblack  ms-1 ">
                    Compare
                  </p>
                </div>
                <div className="d-flex align-items-center ms-4 c_pointer">
                  <img src={heart} alt=" heart" />
                  <p className="mb-0 ms-1 ff_poppins fw_300 clr_darkblack ">
                    Wishlist
                  </p>
                </div>
              </div>
              <div className="d-flex mt-3">
                <img
                  className=" c_pointer transform_scale_hover"
                  src={share}
                  alt="share"
                />
                <img
                  className="ms-4 c_pointer transform_scale_hover"
                  src={facebook1}
                  alt="facebook1"
                />
                <img
                  className="ms-4 c_pointer transform_scale_hover"
                  src={twitter1}
                  alt="twitter1"
                />
                <img
                  className="ms-4 c_pointer transform_scale_hover"
                  src={pinterest}
                  alt="pinterest"
                />
                <img
                  className="ms-4 c_pointer transform_scale_hover"
                  src={google}
                  alt="facebook1"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PremiumMens