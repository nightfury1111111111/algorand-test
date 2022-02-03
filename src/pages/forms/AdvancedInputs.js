import React from "react";
import InputMask from "react-input-mask";
import Select from "react-select";
import { Helmet } from "react-helmet-async";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ReactSelect = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">React Select</Card.Title>
      <h6 className="card-subtitle text-muted">
        Select Component by react-select
      </h6>
    </Card.Header>
    <Card.Body>
      <Row>
        <Col lg="6">
          <Form.Group className="mb-3">
            <Form.Label>Single Select</Form.Label>
            <Select
              className="react-select-container"
              classNamePrefix="react-select"
              options={options}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Multi Select</Form.Label>
            <Select
              className="react-select-container"
              classNamePrefix="react-select"
              options={options}
              isMulti
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Searchable Select</Form.Label>
            <Select
              className="react-select-container"
              classNamePrefix="react-select"
              options={options}
              isSearchable
            />
          </Form.Group>
        </Col>
        <Col lg="6">
          <Form.Group className="mb-3">
            <Form.Label>Clearable Select</Form.Label>
            <Select
              className="react-select-container"
              classNamePrefix="react-select"
              options={options}
              isClearable
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Loading Select</Form.Label>
            <Select
              className="react-select-container"
              classNamePrefix="react-select"
              options={options}
              isLoading
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Disabled Select</Form.Label>
            <Select
              className="react-select-container"
              classNamePrefix="react-select"
              options={options}
              isDisabled
            />
          </Form.Group>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

const InputMasks = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Input Masks</Card.Title>
      <h6 className="card-subtitle text-muted">
        Input masks by react-input-mask
      </h6>
    </Card.Header>
    <Card.Body>
      <Row>
        <Col lg="6">
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <InputMask mask="99/99/9999">
              {(inputProps) => <Form.Control {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "DD/MM/YYYY"</span>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Hour</Form.Label>
            <InputMask mask="99:99:9999">
              {(inputProps) => <Form.Control {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "HH:MM:SS"</span>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date & Hour</Form.Label>
            <InputMask mask="99/99/9999 99:99:99">
              {(inputProps) => <Form.Control {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "DD/MM/YYYY HH:MM:SS"</span>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>ZIP Code</Form.Label>
            <InputMask mask="99999-999">
              {(inputProps) => <Form.Control {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "DD/MM/YYYY HH:MM:SS"</span>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>ZIP Code</Form.Label>
            <InputMask mask="9-99-99-99">
              {(inputProps) => <Form.Control {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "x-xx-xx-xx"</span>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Money</Form.Label>
            <InputMask mask="999.999.999.999.999,99">
              {(inputProps) => <Form.Control {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "Your money"</span>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Money 2</Form.Label>
            <InputMask mask="9.999,99">
              {(inputProps) => <Form.Control {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "x.xxx,xx"</span>
          </Form.Group>
        </Col>
        <Col lg="6">
          <Form.Group className="mb-3">
            <Form.Label>Telephone</Form.Label>
            <InputMask mask="9999-9999">
              {(inputProps) => <Form.Control {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "xxxx-xxxx"</span>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Telephone with Code Area</Form.Label>
            <InputMask mask="(99) 9999-9999">
              {(inputProps) => <Form.Control {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "(xx) xxxx-xxxx"</span>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>US Telephone</Form.Label>
            <InputMask mask="(999) 999-9999">
              {(inputProps) => <Form.Control {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "(xxx) xxx-xxxx"</span>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>São Paulo Celphones</Form.Label>
            <InputMask mask="(99) 99999-9999">
              {(inputProps) => <Form.Control {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "(xx) xxxxx-xxxx"</span>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>CPF</Form.Label>
            <InputMask mask="999.999.999-99">
              {(inputProps) => <Form.Control {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "xxx.xxx.xxxx-xx"</span>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>CNPJ</Form.Label>
            <InputMask mask="99.999.999/9999-99">
              {(inputProps) => <Form.Control {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "xx.xxx.xxx/xxxx-xx"</span>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>IP Address</Form.Label>
            <InputMask mask="999.999.999.999">
              {(inputProps) => <Form.Control {...inputProps} type="text" />}
            </InputMask>
            <span className="text-muted">e.g "xxx.xxx.xxx.xxx"</span>
          </Form.Group>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

const AdvancedInputs = () => (
  <React.Fragment>
    <Helmet title="Advanced Inputs" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Advanced Inputs</h1>

      <ReactSelect />
      <InputMasks />
    </Container>
  </React.Fragment>
);

export default AdvancedInputs;
