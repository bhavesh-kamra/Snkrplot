import React from 'react'
import pagelogo from "../assets/images/png/pagelogo.png"
import add from "../assets/images/png/add.png"
import { Container } from 'react-bootstrap'

const Add = () => {
  return (
    <section>
      <Container>
        <div className="d-flex justify-content-end align-items-center py-2 justify-content-lg-between">
          <ul className="m-0 p-0">
            <li>
              <a href="#">
                <img
                  className="d-none d-lg-block "
                  src={pagelogo}
                  alt="pagelogo"
                />
              </a>
            </li>
          </ul>
          <div>
            <img className=" max_width_add c_pointer" src={add} alt="add" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Add