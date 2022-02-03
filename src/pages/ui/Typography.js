import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, Col, Container, Row } from "react-bootstrap";

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

const Headings = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Headings</Card.Title>
      <h6 className="card-subtitle text-muted">
        All HTML headings, <code>&lt;h1&gt;</code> through{" "}
        <code>&lt;h6&gt;</code>, are available.
      </h6>
    </Card.Header>
    <Card.Body>
      <h1>This is a heading h1</h1>
      <p className="text-muted">
        Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
        quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
        nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec
        odio et ante tincidunt tempus. Donec vitae sapien ut libero.
      </p>
      <h2>This is a heading h2</h2>
      <p className="text-muted">
        Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
        quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
        nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
      </p>
      <h3>This is a heading h3</h3>
      <p className="text-muted">
        Etiam rhoncus. Maecenas tempus, tellus condimentum rhoncus, sem quam
        libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, vel.
      </p>
      <h4>This is a heading h4</h4>
      <p className="text-muted">
        Etiam rhoncus. Maecenas tempus, tellus condimentum rhoncus, sem quam
        libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, vel.
      </p>
      <h5>This is a heading h5</h5>
      <p className="text-muted">
        Sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel.
      </p>
      <h6>This is a heading h6</h6>
      <p className="text-muted">
        Sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel.
      </p>
    </Card.Body>
  </Card>
);

const ColouredText = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Coloured text</Card.Title>
      <h6 className="card-subtitle text-muted">Contextual text classes.</h6>
    </Card.Header>
    <Card.Body>
      {colors.map((color, index) => (
        <p key={index} className={"text-" + color.value}>
          This line of text contains the text-primary class.
        </p>
      ))}
    </Card.Body>
  </Card>
);

const InlineText = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Inline text</Card.Title>
      <h6 className="card-subtitle text-muted">
        Styling for common inline HTML5 elements.
      </h6>
    </Card.Header>
    <Card.Body>
      <p>
        You can use the mark-tag to <mark>highlight</mark> text.
      </p>
      <p>
        <del>This line of text can be treated as deleted text.</del>
      </p>
      <p>
        <ins>
          This line of text can be treated as an addition to the document.
        </ins>
      </p>
      <p>
        <strong>Bold text using the strong-tag</strong>
      </p>
      <p>
        <em>Italicized text using the em-tag</em>
      </p>
    </Card.Body>
  </Card>
);

const Blockquotes = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Blockquotes</Card.Title>
      <h6 className="card-subtitle text-muted">
        For quoting blocks of content from another source within your document.
      </h6>
    </Card.Header>
    <Card.Body>
      <blockquote>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
        <footer>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
      <p className="text-muted m-b-15 m-t-20 font-13">
        Add <code>.blockquote-reverse</code> for a blockquote with right-aligned
        content.
      </p>
      <blockquote className="blockquote-reverse m-b-0">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
        <footer>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </Card.Body>
  </Card>
);

const ListUnordered = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">List unordered</Card.Title>
      <h6 className="card-subtitle text-muted">
        The unordered list items will are marked with bullets.
      </h6>
    </Card.Header>
    <Card.Body>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Nulla volutpat aliquam velit</li>
        <li>Phasellus iaculis neque</li>
        <li>Eget porttitor lorem</li>
      </ul>
    </Card.Body>
  </Card>
);

const ListOrdered = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">List ordered</Card.Title>
      <h6 className="card-subtitle text-muted">
        The ordered list items will are marked with numbers.
      </h6>
    </Card.Header>
    <Card.Body>
      <ol>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Nulla volutpat aliquam velit</li>
        <li>Phasellus iaculis neque</li>
        <li>Eget porttitor lorem</li>
      </ol>
    </Card.Body>
  </Card>
);

const Typography = () => (
  <React.Fragment>
    <Helmet title="Typography" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Typography</h1>

      <Row>
        <Col lg="6">
          <Headings />
          <ColouredText />
        </Col>
        <Col lg="6">
          <InlineText />
          <Blockquotes />
          <ListUnordered />
          <ListOrdered />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Typography;
