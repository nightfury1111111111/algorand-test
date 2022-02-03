import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";

import { Briefcase, Home, MapPin, MessageSquare } from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../assets/img/avatars/avatar-2.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../assets/img/avatars/avatar-5.jpg";

import unsplash1 from "../../assets/img/photos/unsplash-1.jpg";
import unsplash2 from "../../assets/img/photos/unsplash-2.jpg";

const ProfileDetails = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Profile Details
      </Card.Title>
    </Card.Header>
    <Card.Body className="text-center">
      <img
        src={avatar4}
        alt="Stacie Hall"
        className="img-fluid rounded-circle mb-2"
        width="128"
        height="128"
      />
      <Card.Title tag="h5" className="mb-0">
        Stacie Hall
      </Card.Title>
      <div className="text-muted mb-2">Lead Developer</div>

      <div>
        <Button size="sm" variant="primary" className="me-1">
          Follow
        </Button>
        <Button size="sm" variant="primary">
          <MessageSquare width={16} height={16} /> Message
        </Button>
      </div>
    </Card.Body>

    <hr className="my-0" />

    <Card.Body>
      <Card.Title tag="h5">Skills</Card.Title>
      <Badge bg="primary" className="me-2 my-1">
        HTML
      </Badge>
      <Badge bg="primary" className="me-2 my-1">
        JavaScript
      </Badge>
      <Badge bg="primary" className="me-2 my-1">
        Sass
      </Badge>
      <Badge bg="primary" className="me-2 my-1">
        Angular
      </Badge>
      <Badge bg="primary" className="me-2 my-1">
        Vue
      </Badge>
      <Badge bg="primary" className="me-2 my-1">
        React
      </Badge>
      <Badge bg="primary" className="me-2 my-1">
        Redux
      </Badge>
      <Badge bg="primary" className="me-2 my-1">
        UI
      </Badge>
      <Badge bg="primary" className="me-2 my-1">
        UX
      </Badge>
    </Card.Body>

    <hr className="my-0" />
    <Card.Body>
      <Card.Title tag="h5">About</Card.Title>
      <ul className="list-unstyled mb-0">
        <li className="mb-1">
          <Home width={14} height={14} className="me-1" /> Lives in{" "}
          <Link to="/dashboard/default">San Francisco, SA</Link>
        </li>

        <li className="mb-1">
          <Briefcase width={14} height={14} className="me-1" /> Works at{" "}
          <Link to="/dashboard/default">GitHub</Link>
        </li>
        <li className="mb-1">
          <MapPin width={14} height={14} className="me-1" /> From{" "}
          <Link to="/dashboard/default">Boston</Link>
        </li>
      </ul>
    </Card.Body>
    <hr className="my-0" />
    <Card.Body>
      <Card.Title tag="h5">Elsewhere</Card.Title>

      <ul className="list-unstyled mb-0">
        <li className="mb-1">
          <FontAwesomeIcon icon={faGlobe} fixedWidth className="me-1" />
          <Link to="/dashboard/default">staciehall.co</Link>
        </li>
        <li className="mb-1">
          <FontAwesomeIcon icon={faTwitter} fixedWidth className="me-1" />
          <Link to="/dashboard/default">Twitter</Link>
        </li>
        <li className="mb-1">
          <FontAwesomeIcon icon={faFacebook} fixedWidth className="me-1" />
          <Link to="/dashboard/default">Facebook</Link>
        </li>
        <li className="mb-1">
          <FontAwesomeIcon icon={faInstagram} fixedWidth className="me-1" />
          <Link to="/dashboard/default">Instagram</Link>
        </li>
        <li className="mb-1">
          <FontAwesomeIcon icon={faLinkedin} fixedWidth className="me-1" />
          <Link to="/dashboard/default">LinkedIn</Link>
        </li>
      </ul>
    </Card.Body>
  </Card>
);

const Activities = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Activities
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <div className="d-flex">
        <img
          src={avatar5}
          width="36"
          height="36"
          className="rounded-circle me-2"
          alt="Ashley Briggs"
        />
        <div className="flex-grow-1">
          <small className="float-end text-navy">5m ago</small>
          <strong>Ashley Briggs</strong> started following{" "}
          <strong>Stacie Hall</strong>
          <br />
          <small className="text-muted">Today 7:51 pm</small>
          <br />
        </div>
      </div>

      <hr />
      <div className="d-flex">
        <img
          src={avatar1}
          width="36"
          height="36"
          className="rounded-circle me-2"
          alt="Chris Wood"
        />
        <div className="flex-grow-1">
          <small className="float-end text-navy">30m ago</small>
          <strong>Chris Wood</strong> posted something on{" "}
          <strong>Stacie Hall</strong>'s timeline
          <br />
          <small className="text-muted">Today 7:21 pm</small>
          <div className="border text-sm text-muted p-2 mt-1">
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
            quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus. Nullam quis ante.
          </div>
          <Button size="sm" variant="danger" className="mt-1">
            <FontAwesomeIcon icon={faHeart} fixedWidth /> Like
          </Button>
        </div>
      </div>

      <hr />
      <div className="d-flex">
        <img
          src={avatar4}
          width="36"
          height="36"
          className="rounded-circle me-2"
          alt="Stacie Hall"
        />
        <div className="flex-grow-1">
          <small className="float-end text-navy">1h ago</small>
          <strong>Stacie Hall</strong> posted a new blog
          <br />
          <small className="text-muted">Today 6:35 pm</small>
        </div>
      </div>

      <hr />
      <div className="d-flex">
        <img
          src={avatar2}
          width="36"
          height="36"
          className="rounded-circle me-2"
          alt="Carl Jenkins"
        />
        <div className="flex-grow-1">
          <small className="float-end text-navy">3h ago</small>
          <strong>Carl Jenkins</strong> posted two photos on{" "}
          <strong>Stacie Hall</strong>'s timeline
          <br />
          <small className="text-muted">Today 5:12 pm</small>
          <div className="row no-gutters mt-1">
            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
              <img src={unsplash1} className="img-fluid pe-2" alt="Unsplash" />
            </div>
            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
              <img src={unsplash2} className="img-fluid pe-2" alt="Unsplash" />
            </div>
          </div>
          <Button size="sm" variant="danger" className="mt-1">
            <FontAwesomeIcon icon={faHeart} fixedWidth /> Like
          </Button>
        </div>
      </div>

      <hr />
      <div className="d-flex">
        <img
          src={avatar2}
          width="36"
          height="36"
          className="rounded-circle me-2"
          alt="Carl Jenkins"
        />
        <div className="flex-grow-1">
          <small className="float-end text-navy">1d ago</small>
          <strong>Carl Jenkins</strong> started following{" "}
          <strong>Stacie Hall</strong>
          <br />
          <small className="text-muted">Yesterday 3:12 pm</small>
          <div className="d-flex mt-1">
            <img
              src={avatar4}
              width="36"
              height="36"
              className="rounded-circle me-2"
              alt="Stacie Hall"
            />
            <div className="flex-grow-1 ps-3">
              <div className="border text-sm text-muted p-2 mt-1">
                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                lorem. Maecenas nec odio et ante tincidunt tempus.
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="d-flex">
        <img
          src={avatar4}
          width="36"
          height="36"
          className="rounded-circle me-2"
          alt="Stacie Hall"
        />
        <div className="flex-grow-1">
          <small className="float-end text-navy">1d ago</small>
          <strong>Stacie Hall</strong> posted a new blog
          <br />
          <small className="text-muted">Yesterday 2:43 pm</small>
        </div>
      </div>

      <hr />
      <div className="d-flex">
        <img
          src={avatar1}
          width="36"
          height="36"
          className="rounded-circle me-2"
          alt="Chris Wood"
        />
        <div className="flex-grow-1">
          <small className="float-end text-navy">1d ago</small>
          <strong>Chris Wood</strong> started following{" "}
          <strong>Stacie Hall</strong>
          <br />
          <small className="text-muted">Yesterdag 1:51 pm</small>
        </div>
      </div>

      <hr />
      <div className="d-grid">
        <Button variant="primary">Load more</Button>
      </div>
    </Card.Body>
  </Card>
);

const Profile = () => (
  <React.Fragment>
    <Helmet title="Profile" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Profile</h1>

      <Row>
        <Col md="4" xl="3">
          <ProfileDetails />
        </Col>
        <Col md="8" xl="9">
          <Activities />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Profile;
