import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Pagination,
  Row,
  Popover,
  Tooltip,
  ProgressBar,
  Spinner,
  OverlayTrigger,
} from "react-bootstrap";

import avatar1 from "../../assets/img/avatars/avatar.jpg";

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

const directions = [
  {
    name: "Left",
    value: "left",
  },
  {
    name: "Top",
    value: "top",
  },
  {
    name: "Bottom",
    value: "bottom",
  },
  {
    name: "Right",
    value: "right",
  },
];

const AccordionElement = () => (
  <Card>
    <Card.Header className="pb-0">
      <Card.Title tag="h5">Accordion</Card.Title>
      <h6 className="card-subtitle text-muted">
        Build vertically collapsing accordions in combination with the Collapse
        component.
      </h6>
    </Card.Header>
    <Card.Body>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className="bg-white">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body className="bg-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #3</Accordion.Header>
          <Accordion.Body className="bg-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Card.Body>
  </Card>
);

const Badges = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Badges</Card.Title>
      <h6 className="card-subtitle text-muted">Examples for badges.</h6>
    </Card.Header>
    <Card.Body>
      <div>
        {colors.map((color, index) => (
          <Badge key={index} bg={color.value} className="me-1 mb-1">
            {color.name}
          </Badge>
        ))}
      </div>
      <div>
        {colors.map((color, index) => (
          <Badge
            key={index}
            bg={color.value}
            className="rounded-pill me-1 mb-1"
          >
            {color.name}
          </Badge>
        ))}
      </div>
    </Card.Body>
  </Card>
);

const BreadCrumbs = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Breadcrumbs</Card.Title>
      <h6 className="card-subtitle text-muted">
        Indicate the current page’s location within a navigational hierarchy.
      </h6>
    </Card.Header>
    <Card.Body>
      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Library</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </Card.Body>
  </Card>
);

const Images = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Images</Card.Title>
      <h6 className="card-subtitle text-muted">
        Lightweight styles for images.
      </h6>
    </Card.Header>
    <Card.Body className="text-center">
      <img
        className="rounded me-2 mb-2"
        src={avatar1}
        alt="Placeholder"
        width="140"
        height="140"
      />
      <img
        className="rounded-circle rounded me-2 mb-2"
        src={avatar1}
        alt="Placeholder"
        width="140"
        height="140"
      />
      <img
        className="img-thumbnail rounded me-2 mb-2"
        src={avatar1}
        alt="Placeholder"
        width="140"
        height="140"
      />
    </Card.Body>
  </Card>
);

const PaginationElement = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Pagination</Card.Title>
      <h6 className="card-subtitle text-muted">
        Examples for showing pagination.
      </h6>
    </Card.Header>
    <Card.Body>
      <Pagination size="sm">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
      <Pagination size="lg">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </Card.Body>
  </Card>
);

const Popovers = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Popovers</Card.Title>
      <h6 className="card-subtitle text-muted">
        Examples for adding Bootstrap popovers.
      </h6>
    </Card.Header>
    <Card.Body className="text-center">
      {directions.map((direction, index) => (
        <span className="me-1" key={direction.value}>
          <OverlayTrigger
            trigger="click"
            placement={direction.value}
            overlay={
              <Popover id={`popover-positioned-${direction.value}`}>
                <Popover.Header as="h3">{`Popover ${direction.name}`}</Popover.Header>
                <Popover.Body>
                  <strong>Holy guacamole!</strong> Check this info.
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant="secondary">Popover on {direction.name}</Button>
          </OverlayTrigger>
        </span>
      ))}
    </Card.Body>
  </Card>
);

const ProgressBars = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Progress Bars</Card.Title>
      <h6 className="card-subtitle text-muted">
        Examples for using Bootstrap custom progress bars.
      </h6>
    </Card.Header>
    <Card.Body>
      <ProgressBar
        className="mb-3"
        variant="primary"
        now={25}
        label="Default"
      />
      <ProgressBar
        className="mb-3"
        striped
        variant="primary"
        now={50}
        label="Striped"
      />
      <ProgressBar
        className="mb-3"
        striped
        animated
        variant="primary"
        now={75}
        label="Striped"
      />
      <ProgressBar>
        <ProgressBar variant="primary" now={25} label="Stacked" key={1} />
        <ProgressBar variant="success" now={15} label="15%" key={2} />
        <ProgressBar variant="warning" now={30} label="30%" key={3} />
        <ProgressBar variant="danger" now={20} label="20%" key={4} />
      </ProgressBar>
    </Card.Body>
  </Card>
);

const Tooltips = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Tooltips</Card.Title>
      <h6 className="card-subtitle text-muted">
        Examples for adding custom Bootstrap tooltips.
      </h6>
    </Card.Header>
    <Card.Body className="text-center">
      {directions.map((direction, index) => (
        <span className="me-1" key={direction.value}>
          <OverlayTrigger
            placement={direction.value}
            overlay={
              <Tooltip id={`tooltip-${direction.value}`}>
                Tooltip on {direction.name}.
              </Tooltip>
            }
          >
            <Button variant="secondary">Tooltip on {direction.name}</Button>
          </OverlayTrigger>
        </span>
      ))}
    </Card.Body>
  </Card>
);

const Spinners = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Spinners</Card.Title>
      <h6 className="card-subtitle text-muted">
        Indicate the loading state of a component with Bootstrap spinners.
      </h6>
    </Card.Header>
    <Card.Body>
      <div className="mb-2">
        <Spinner animation="border" variant="dark" className="me-2" />
        {colors.map((color, index) => (
          <Spinner
            animation="border"
            key={index}
            variant={color.value}
            className="me-2"
          />
        ))}
      </div>

      <div className="mb-2">
        <Spinner animation="border" variant="dark" size="sm" className="me-2" />
        {colors.map((color, index) => (
          <Spinner
            animation="border"
            key={index}
            variant={color.value}
            size="sm"
            className="me-2"
          />
        ))}
      </div>

      <hr />

      <div className="mb-2">
        <Spinner animation="grow" variant="dark" type="grow" className="me-2" />
        {colors.map((color, index) => (
          <Spinner
            animation="grow"
            key={index}
            variant={color.value}
            type="grow"
            className="me-2"
          />
        ))}
      </div>

      <div className="mb-2">
        <Spinner
          animation="grow"
          variant="dark"
          type="grow"
          size="sm"
          className="me-2"
        />
        {colors.map((color, index) => (
          <Spinner
            animation="grow"
            key={index}
            variant={color.value}
            type="grow"
            size="sm"
            className="me-2"
          />
        ))}
      </div>
    </Card.Body>
  </Card>
);

const General = () => (
  <React.Fragment>
    <Helmet title="General" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">General</h1>

      <Row>
        <Col lg="6">
          <AccordionElement />
          <BreadCrumbs />
          <Images />
          <Popovers />
          <Tooltips />
        </Col>
        <Col lg="6">
          <Badges />
          <PaginationElement />
          <ProgressBars />
          <Spinners />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default General;
