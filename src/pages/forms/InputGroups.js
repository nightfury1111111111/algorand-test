import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Card,
  Col,
  Container,
  Dropdown,
  FormControl,
  DropdownButton,
  SplitButton,
  InputGroup,
  Row,
  Button,
  Form,
} from "react-bootstrap";

const Default = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Default
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <InputGroup className="mb-3">
        <InputGroup.Text>@</InputGroup.Text>
        <Form.Control placeholder="Username" />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Recipient's username" />
        <InputGroup.Text>@example.com</InputGroup.Text>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>https://example.com/users/</InputGroup.Text>
        <Form.Control />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text>0.00</InputGroup.Text>
        <Form.Control />
      </InputGroup>
    </Card.Body>
  </Card>
);

const CheckboxAndRadioAddons = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Checkbox and radio addons
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Row>
        <Col lg="6">
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <FormControl
              aria-label="Text input with checkbox"
              placeholder="Checkbox"
            />
          </InputGroup>
        </Col>
        <Col lg="6">
          <InputGroup>
            <InputGroup.Radio aria-label="Radio button for following text input" />
            <FormControl
              aria-label="Text input with radio button"
              placeholder="Radio"
            />
          </InputGroup>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

const Sizing = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Sizing
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <InputGroup className="mb-3" size="lg">
        <InputGroup.Text>@</InputGroup.Text>
        <Form.Control placeholder="Username" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>@</InputGroup.Text>
        <Form.Control placeholder="Username" />
      </InputGroup>
      <InputGroup size="sm">
        <InputGroup.Text>@</InputGroup.Text>
        <Form.Control placeholder="Username" />
      </InputGroup>
    </Card.Body>
  </Card>
);

const ButtonAddons = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Button addons
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <InputGroup className="mb-3">
        <Button variant="secondary" id="button-addon1">
          Button
        </Button>
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>

      <InputGroup className="mb-3">
        <Button variant="secondary">Button</Button>
        <Button variant="secondary">Button</Button>
        <FormControl aria-label="Example text with two button addons" />
      </InputGroup>

      <InputGroup>
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username with two button addons"
        />
        <Button variant="secondary">Button</Button>
        <Button variant="secondary">Button</Button>
      </InputGroup>
    </Card.Body>
  </Card>
);

const ButtonsWithDropdowns = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Buttons with dropdowns
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <InputGroup className="mb-3">
        <DropdownButton
          variant="secondary"
          title="Dropdown"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <FormControl aria-label="Text input with dropdown button" />
      </InputGroup>

      <InputGroup className="mb-3">
        <FormControl aria-label="Text input with dropdown button" />

        <DropdownButton
          variant="secondary"
          title="Dropdown"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
      </InputGroup>

      <InputGroup>
        <DropdownButton
          variant="secondary"
          title="Dropdown"
          id="input-group-dropdown-3"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <FormControl aria-label="Text input with 2 dropdown buttons" />
        <DropdownButton
          variant="secondary"
          title="Dropdown"
          id="input-group-dropdown-4"
          align="end"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    </Card.Body>
  </Card>
);

const SegmentedButtons = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5" className="mb-0">
        Segmented buttons
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <InputGroup className="mb-3">
        <SplitButton
          variant="secondary"
          title="Action"
          id="segmented-button-dropdown-1"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </SplitButton>
        <FormControl aria-label="Text input with dropdown button" />
      </InputGroup>

      <InputGroup className="mb-3">
        <FormControl aria-label="Text input with dropdown button" />
        <SplitButton
          variant="secondary"
          title="Action"
          id="segmented-button-dropdown-2"
          alignRight
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </SplitButton>
      </InputGroup>
    </Card.Body>
  </Card>
);

const InputGroups = () => (
  <React.Fragment>
    <Helmet title="Input Groups" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Input Groups</h1>

      <Row>
        <Col lg="6">
          <Default />
          <CheckboxAndRadioAddons />
          <Sizing />
        </Col>
        <Col lg="6">
          <ButtonAddons />
          <ButtonsWithDropdowns />
          <SegmentedButtons />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default InputGroups;
