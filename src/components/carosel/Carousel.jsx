import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
function NoTransitionExample() {
  return (
    <Container className="mt-4 mb-4">
      <Container>
        <Carousel slide={false}>
          <Carousel.Item>
            <img className="d-block w-100" src={require("../../assets/Card Promotion.png")} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={require("../../assets/Card Promotion 2.png")} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={require("../../assets/Card Promotion.png")} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
}

export default NoTransitionExample;
