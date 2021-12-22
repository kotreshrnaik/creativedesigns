import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Design from "../Images/design.png";
import Design1 from "../Images/constructions/image-1.png";
import Budget from "../Images/interior/budget.png";

const Constructions = () => {
  return (
    <div>
      <div id="about-us" className="bg-secondary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Constructions</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="service-content" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <p className="text-center">
                Creative Interiors, provides turn-key services for all of its
                projects commencing at concept and continuing beyond the
                project’s final punch list.  Below are some examples of services
                for the various potential requirements for an interior or
                exterior commercial design project
              </p>
              <h2 className="text-secondary text-center">Our Approach</h2>
              <p className="text-center">
                SPACES - At Creative Interiors, the spaces we create are
                inspired by a team of designers focusing on quality and a
                meticulous attention to detail. Our projects range from private
                homes, exhibition spaces and show flats which are inclusive of
                our various specializations in Furniture, Modular, Window Care
                and Wood line.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="projects" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={6}>
              <div className="">
                <Card
                  className="shadow text-center bg-light"
                  style={{ height: "280px" }}
                >
                  <Card.Body>
                    <Card.Title className="text-secondary">
                      RESIDENTIAL PROJECTS
                    </Card.Title>
                    <Card.Text>
                      In the exciting world of interior design, one’s exposure
                      to global design and with trends that seem instantaneous,
                      defining your own unique style for a home can be
                      overwhelming. Creative Interiors’ singular objective is to
                      create a space as unique as each individual and family
                      with whom we work. While learning about our Client’s
                      lifestyle and esthetic desires, our design group helps
                      each Client discover their own design individuality,
                      ensuring the end result will be a manifestation of the
                      collaboration in creating a reverie home.
                    </Card.Text>
                    {/* <Card.Text>
                      Our design group utilizes years of experience to guide you
                      through the adventure of each design phase, from the
                      conceptual plans to unique selections of finishes and
                      furnishings and offer recommendations that support
                      informed purchasing decisions. How Creative Interiors
                      excels is our “turn-key” approach to the design process
                      offering a myriad of services that will engender your
                      trust throughout our collaboration.
                    </Card.Text> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={6}>
              <div className="">
                <Card
                  className="shadow text-center bg-light"
                  style={{ height: "280px" }}
                >
                  <Card.Body>
                    <Card.Title className="text-secondary">
                      COMMERCIAL PROJECTS
                    </Card.Title>
                    <Card.Text>
                      IDENTITY. Be it a small upstart venture or a large global
                      corporation, your goal is to expose people to your
                      philosophy, services or products, professional experience,
                      reputation and branding. Creative Interiors has over two
                      decades of business acumen and a talented staff with an
                      exceptional understanding of the dynamic process of
                      commercial design. Your working space must be usable,
                      functional, make a unique design statement, and have the
                      technological support to function in a state-of-art manner
                      and an eco-consciousness. Employees, visitors and your
                      Clients must love experiencing your space, and ultimately
                      it should be a physical statement to the company’s Mission
                      Statement.
                    </Card.Text>
                    {/* <Card.Text>
                    Because our firm offers residential, retail and hospitality services, we draw from a plethora of products and finishes to incorporate distinctive detailing that makes a statement. Our Clients’ needs range from spaces that feel like a home, are contemporary and edgy, have traditional rich woods and special finishes, are entire buildings that want to beautify their lobby, restrooms, corridors or a valet level, or requests as unique as a mock courtroom. The collective results will be a finished product that extends well beyond what their competition has to offer. 
                    </Card.Text> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="inside-content" className="pt-3 pb-3 pt-md-2 pb-md-2">
        <Container>
          <h2 className="text-center text-secondary pt-2 pb-2">
            Conceptual Design
          </h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="text-center">
                <Image src={Design} className="img-fluid" alt="Design" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="content-1" className="pt-3 pb-3 pt-md-2 pb-md-2 bg-light">
        <Container>
          <h2 className="text-center text-secondary pt-2 pb-2">
          Design Work / Construction Drawings
          </h2>
          <Row className="">
            <Col md={6} className="align-self-center">
              <div>
                <ul>
                  <li className="pt-1 pb-1">
                  Demolition plans
                  </li>
                  <li className="pt-1 pb-1">
                  Construction plans
                  </li>
                  <li className="pt-1 pb-1">Electrical plans</li>
                  <li className="pt-1 pb-1">
                  Phone and data plans
                  </li>
                  <li className="pt-1 pb-1">
                  Lighting plans
                  </li>
                  <li className="pt-1 pb-1">Appliance selections</li>
                  <li className="pt-1 pb-1">Finish plans and finish schedule of all approved materials</li>
                  <li className="pt-1 pb-1">
                  All interior and exterior elevations
                  </li>
                  <li className="pt-1 pb-1">Millwork drawings including custom-designed woodwork, cabinetry, built-in furniture, banisters, paneling, etc</li>
                  <li className="pt-1 pb-1">Schedules of windows, doors, plumbing fixtures, and appliances</li>
                  <li className="pt-1 pb-1">Exterior hardscape plans</li>
                  <li className="pt-1 pb-1">All required construction details</li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <Image
                  src={Design1}
                  className="img-fluid rounded shadow"
                  alt="Design"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="content-2" className="pt-3 pb-3 pt-md-2 pb-md-5">
        <Container>
          <h2 className="text-center text-secondary pt-2 pb-2">Budgeting</h2>
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

export default Constructions;
