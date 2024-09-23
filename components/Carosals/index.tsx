import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";

const items = [
  {
    src: require("/images/hero/bn.jpg"),
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: require("/images/hero/bn.jpg"),
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: require("/images/hero/bn.jpg"),
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

const Carosal = () => (
  <Row>
    <Col md="8" className="mx-auto">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>
);

export default Carosal;