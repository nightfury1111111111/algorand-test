import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faExclamation,
  faGlobeAmericas,
  faInfo,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { faSmile } from "@fortawesome/free-regular-svg-icons";

import {
  faBitbucket,
  faDribbble,
  faFacebook,
  faFlickr,
  faGithub,
  faGoogle,
  faInstagram,
  faPinterest,
  faTwitter,
  faVimeo,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const colors = [
  {
    name: "Primary",
    value: "primary",
  },
  {
    name: "Secondary",
    value: "secondary",
  },
  {
    name: "Success",
    value: "success",
  },
  {
    name: "Danger",
    value: "danger",
  },
  {
    name: "Warning",
    value: "warning",
  },
  {
    name: "Info",
    value: "info",
  },
];

const BasicButtons = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Basic Buttons</Card.Title>
      <h6 className="card-subtitle text-muted">
        Default Bootstrap buttons style.
      </h6>
    </Card.Header>
    <Card.Body className="text-center">
      <div className="mb-3">
        {colors.map((color, index) => (
          <Button key={index} variant={color.value} className="me-1 mb-1">
            {color.name}
          </Button>
        ))}
      </div>
      <div>
        {colors.map((color, index) => (
          <Button
            key={index}
            variant={color.value}
            className="me-1 mb-1"
            disabled
          >
            {color.name}
          </Button>
        ))}
      </div>
    </Card.Body>
  </Card>
);

const RoundedButtons = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Rounded Buttons</Card.Title>
      <h6 className="card-subtitle text-muted">Rounded Bootstrap buttons.</h6>
    </Card.Header>
    <Card.Body className="text-center">
      <div className="mb-3">
        {colors.map((color, index) => (
          <Button
            key={index}
            variant={color.value}
            className="btn-pill me-1 mb-1"
          >
            {color.name}
          </Button>
        ))}
      </div>
      <div>
        {colors.map((color, index) => (
          <Button
            key={index}
            variant={color.value}
            className="btn-pill me-1 mb-1"
            disabled
          >
            {color.name}
          </Button>
        ))}
      </div>
    </Card.Body>
  </Card>
);

const OutlineButtons = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Outline Buttons</Card.Title>
      <h6 className="card-subtitle text-muted">
        Buttons without background color.
      </h6>
    </Card.Header>
    <Card.Body className="text-center">
      <div className="mb-3">
        {colors.map((color, index) => (
          <Button
            key={index}
            variant={`outline-${color.value}`}
            className="me-1 mb-1"
          >
            {color.name}
          </Button>
        ))}
      </div>
      <div>
        {colors.map((color, index) => (
          <Button
            key={index}
            variant={`outline-${color.value}`}
            className="me-1 mb-1"
            disabled
          >
            {color.name}
          </Button>
        ))}
      </div>
    </Card.Body>
  </Card>
);

const SquareButtons = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Square Buttons</Card.Title>
      <h6 className="card-subtitle text-muted">
        Buttons without border radius.
      </h6>
    </Card.Header>
    <Card.Body className="text-center">
      <div className="mb-3">
        {colors.map((color, index) => (
          <Button
            key={index}
            variant={color.value}
            className="me-1 mb-1 btn-square"
          >
            {color.name}
          </Button>
        ))}
      </div>
      <div>
        {colors.map((color, index) => (
          <Button
            key={index}
            variant={color.value}
            className="me-1 mb-1 btn-square"
            disabled
          >
            {color.name}
          </Button>
        ))}
      </div>
    </Card.Body>
  </Card>
);

const IconButtons = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Icon Buttons</Card.Title>
      <h6 className="card-subtitle text-muted">
        Default Bootstrap buttons with icons.
      </h6>
    </Card.Header>
    <Card.Body className="text-center">
      <div className="mb-3">
        <Button variant="primary" className="me-1 mb-1">
          <FontAwesomeIcon icon={faSmile} /> Primary
        </Button>
        <Button variant="secondary" className="me-1 mb-1">
          <FontAwesomeIcon icon={faGlobeAmericas} /> Secondary
        </Button>
        <Button variant="success" className="me-1 mb-1">
          <FontAwesomeIcon icon={faCheck} /> Success
        </Button>
        <Button variant="danger" className="me-1 mb-1">
          <FontAwesomeIcon icon={faTimes} /> Danger
        </Button>
        <Button variant="warning" className="me-1 mb-1">
          <FontAwesomeIcon icon={faExclamation} /> Warning
        </Button>
        <Button variant="info" className="me-1 mb-1">
          <FontAwesomeIcon icon={faInfo} /> Info
        </Button>
      </div>

      <div>
        <Button variant="primary" className="me-1 mb-1">
          <FontAwesomeIcon icon={faSmile} />
        </Button>
        <Button variant="secondary" className="me-1 mb-1">
          <FontAwesomeIcon icon={faGlobeAmericas} />
        </Button>
        <Button variant="success" className="me-1 mb-1">
          <FontAwesomeIcon icon={faCheck} />
        </Button>
        <Button variant="danger" className="me-1 mb-1">
          <FontAwesomeIcon icon={faTimes} />
        </Button>
        <Button variant="warning" className="me-1 mb-1">
          <FontAwesomeIcon icon={faExclamation} />
        </Button>
        <Button variant="info" className="me-1 mb-1">
          <FontAwesomeIcon icon={faInfo} />
        </Button>
      </div>
    </Card.Body>
  </Card>
);

const SocialButtons = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Social Buttons</Card.Title>
      <h6 className="card-subtitle text-muted">Social buttons with icons.</h6>
    </Card.Header>
    <Card.Body className="text-center">
      <div className="mb-3">
        <Button variant="facebook" className="me-1 mb-1">
          <FontAwesomeIcon icon={faFacebook} className="align-middle" />{" "}
          Facebook
        </Button>
        <Button variant="twitter" className="me-1 mb-1">
          <FontAwesomeIcon icon={faTwitter} className="align-middle" /> Twitter
        </Button>
        <Button variant="google" className="me-1 mb-1">
          <FontAwesomeIcon icon={faGoogle} className="align-middle" /> Google
        </Button>
        <Button variant="youtube" className="me-1 mb-1">
          <FontAwesomeIcon icon={faYoutube} className="align-middle" /> Youtube
        </Button>
        <Button variant="vimeo" className="me-1 mb-1">
          <FontAwesomeIcon icon={faVimeo} className="align-middle" /> Vimeo
        </Button>
        <Button variant="dribbble" className="me-1 mb-1">
          <FontAwesomeIcon icon={faDribbble} className="align-middle" />{" "}
          Dribbble
        </Button>
        <Button variant="github" className="me-1 mb-1">
          <FontAwesomeIcon icon={faGithub} className="align-middle" /> Github
        </Button>
        <Button variant="instagram" className="me-1 mb-1">
          <FontAwesomeIcon icon={faInstagram} className="align-middle" />{" "}
          Instagram
        </Button>
        <Button variant="pinterest" className="me-1 mb-1">
          <FontAwesomeIcon icon={faPinterest} className="align-middle" />{" "}
          Pinterest
        </Button>
        <Button variant="flickr" className="me-1 mb-1">
          <FontAwesomeIcon icon={faFlickr} className="align-middle" /> Flickr
        </Button>
        <Button variant="bitbucket" className="me-1 mb-1">
          <FontAwesomeIcon icon={faBitbucket} className="align-middle" />{" "}
          Bitbucket
        </Button>
      </div>
      <div>
        <Button variant="facebook" className="me-1 mb-1">
          <FontAwesomeIcon icon={faFacebook} className="align-middle" />
        </Button>
        <Button variant="twitter" className="me-1 mb-1">
          <FontAwesomeIcon icon={faTwitter} className="align-middle" />
        </Button>
        <Button variant="google" className="me-1 mb-1">
          <FontAwesomeIcon icon={faGoogle} className="align-middle" />
        </Button>
        <Button variant="youtube" className="me-1 mb-1">
          <FontAwesomeIcon icon={faYoutube} className="align-middle" />
        </Button>
        <Button variant="vimeo" className="me-1 mb-1">
          <FontAwesomeIcon icon={faVimeo} className="align-middle" />
        </Button>
        <Button variant="dribbble" className="me-1 mb-1">
          <FontAwesomeIcon icon={faDribbble} className="align-middle" />
        </Button>
        <Button variant="github" className="me-1 mb-1">
          <FontAwesomeIcon icon={faGithub} className="align-middle" />
        </Button>
        <Button variant="instagram" className="me-1 mb-1">
          <FontAwesomeIcon icon={faInstagram} className="align-middle" />
        </Button>
        <Button variant="pinterest" className="me-1 mb-1">
          <FontAwesomeIcon icon={faPinterest} className="align-middle" />
        </Button>
        <Button variant="flickr" className="me-1 mb-1">
          <FontAwesomeIcon icon={faFlickr} className="align-middle" />
        </Button>
        <Button variant="bitbucket" className="me-1 mb-1">
          <FontAwesomeIcon icon={faBitbucket} className="align-middle" />
        </Button>
      </div>
    </Card.Body>
  </Card>
);

const ButtonSizes = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Button Sizes</Card.Title>
      <h6 className="card-subtitle text-muted">
        Fancy larger or smaller buttons.
      </h6>
    </Card.Header>
    <Card.Body className="text-center">
      <div className="mb-3">
        <Button variant="primary" size="sm" className="me-1">
          Small
        </Button>
        <Button variant="primary" className="me-1">
          Medium
        </Button>
        <Button variant="primary" size="lg" className="me-1">
          Large
        </Button>
      </div>
      <div>
        <Button variant="primary" size="sm" className="me-1">
          <FontAwesomeIcon icon={faGlobeAmericas} /> Small
        </Button>
        <Button variant="primary" className="me-1">
          <FontAwesomeIcon icon={faGlobeAmericas} /> Medium
        </Button>
        <Button variant="primary" size="lg" className="me-1">
          <FontAwesomeIcon icon={faGlobeAmericas} /> Large
        </Button>
      </div>
    </Card.Body>
  </Card>
);

const ButtonDropdowns = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Button Dropdown</Card.Title>
      <h6 className="card-subtitle text-muted">
        Dropdowns styles with buttons.
      </h6>
    </Card.Header>
    <Card.Body className="text-center">
      <div className="mb-3">
        {colors.map((color, index) => (
          <DropdownButton
            as={ButtonGroup}
            key={color.name}
            id={`dropdown-variants-${color.name}`}
            variant={color.name.toLowerCase()}
            title={color.name}
            className="me-2"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Active Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        ))}
      </div>
      <div className="mb-3">
        {colors.map((color, index) => (
          <DropdownButton
            as={ButtonGroup}
            key={color.name}
            id={`dropdown-variants-${color.name}`}
            variant={color.name.toLowerCase()}
            title={color.name}
            className="me-2"
            size="sm"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Active Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        ))}
      </div>
    </Card.Body>
  </Card>
);

const ButtonGroups = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Button Group</Card.Title>
      <h6 className="card-subtitle text-muted">Button group components.</h6>
    </Card.Header>
    <Card.Body>
      <h6 className="card-subtitle mb-2 text-muted">Horizontal button group</h6>
      <div className="mb-3">
        <ButtonGroup variant="primary" size="lg">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
      <div className="mb-3">
        <ButtonGroup variant="primary">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
      <div className="mb-3">
        <ButtonGroup variant="primary" size="sm">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>

      <h6 className="card-subtitle mb-2 text-muted">Button toolbar</h6>
      <div className="mb-3">
        <ButtonToolbar>
          <ButtonGroup className="me-2">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>
          <ButtonGroup className="me-2">
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>8</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>

      <h6 className="card-subtitle mb-2 text-muted">Vertical button group</h6>
      <ButtonGroup vertical className="me-2">
        <Button variant="primary">Button</Button>
        <Button variant="primary">Button</Button>
        <Button variant="primary">Button</Button>
      </ButtonGroup>
      <ButtonGroup vertical className="me-2">
        <Button variant="success">Button</Button>
        <Button variant="success">Button</Button>
        <Button variant="success">Button</Button>
      </ButtonGroup>
      <ButtonGroup vertical className="me-2">
        <Button variant="warning">Button</Button>
        <Button variant="warning">Button</Button>
        <Button variant="warning">Button</Button>
      </ButtonGroup>
      <ButtonGroup vertical className="me-2">
        <Button variant="danger">Button</Button>
        <Button variant="danger">Button</Button>
        <Button variant="danger">Button</Button>
      </ButtonGroup>
    </Card.Body>
  </Card>
);

const Buttons = () => (
  <React.Fragment>
    <Helmet title="Buttons" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Buttons</h1>
      <Row>
        <Col lg="6">
          <BasicButtons />
        </Col>
        <Col lg="6">
          <RoundedButtons />
        </Col>
        <Col lg="6">
          <OutlineButtons />
        </Col>
        <Col lg="6">
          <SquareButtons />
        </Col>
        <Col lg="6">
          <IconButtons />
        </Col>
        <Col lg="6">
          <SocialButtons />
        </Col>
        <Col lg="6">
          <ButtonSizes />
          <ButtonDropdowns />
        </Col>
        <Col lg="6">
          <ButtonGroups />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Buttons;
