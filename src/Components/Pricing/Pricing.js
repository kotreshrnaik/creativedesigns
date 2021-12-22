import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Budget from "../Images/interior/budget.png"

const Pricing = () => {
  return (
    <div>
      <div id="about-us" className="bg-secondary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Pricng</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <div id="content-2" className="pt-3 pb-3 pt-md-2 pb-md-5">
        <Container>
          <Row className="">
            <Col md={6}>
              <div className="text-center">
                <Image
                  src={Budget}
                  className="img-fluid rounded shadow"
                  alt="Design"
                />
              </div>
            </Col>
            <Col md={6} className="align-self-center">
              <div>
                <ul>
                  <li className="pt-1 pb-1">
                    Budgeting of all decorative materials to be used on the
                    project
                  </li>
                  <li className="pt-1 pb-1">
                    Budgeting of all furniture, lighting, finishes, etc.
                  </li>
                  <li className="pt-1 pb-1">
                    Contractor(s) bid review with the Client
                  </li>
                  <li className="pt-1 pb-1">
                    Bid negotiation on the Client’s behalf
                  </li>
                  <li className="pt-1 pb-1">
                    Design custom pieces appropriate for the space
                  </li>
                  <li className="pt-1 pb-1">
                    Extensive ability in “phasing” projects to adapt to budget
                    requirements
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Pricing;
