import React from "react";
import { Helmet } from "react-helmet-async";

import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  InputGroup,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../assets/img/avatars/avatar-5.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import { Phone, Video, MoreHorizontal } from "react-feather";

const ChatMessage = ({ position, avatar, name, children, time }) => (
  <div className={`chat-message-${position} pb-4`}>
    <div>
      <img
        src={avatar}
        className="rounded-circle me-1"
        alt={name}
        width="40"
        height="40"
      />
      <div className="text-muted small text-nowrap mt-2">{time}</div>
    </div>
    <div
      className={`flex-shrink-1 bg-light rounded py-2 px-3 ${
        position === "right" ? "me-3" : "ms-3"
      }`}
    >
      <div className="fw-bold mb-1">{name}</div>
      {children}
    </div>
  </div>
);

const Chat = () => (
  <React.Fragment>
    <Helmet title="Chat" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Messages</h1>

      <Card>
        <Row className="g-0">
          <Col lg={5} xl={3} className="border-end">
            <div className="px-4 d-none d-md-block">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 ms-3">
                  <Form.Control
                    type="text"
                    className="my-3"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
            <ListGroup.Item action tag="a" href="#" className="border-0">
              <Badge bg="success" className="float-end">
                5
              </Badge>
              <div className="d-flex">
                <img
                  src={avatar5}
                  className="rounded-circle me-1"
                  alt="Ashley Briggs"
                  width="40"
                  height="40"
                />
                <div className="flex-grow-1 ms-3">
                  Ashley Briggs
                  <div className="small">
                    <FontAwesomeIcon icon={faCircle} className="chat-online" />{" "}
                    Online
                  </div>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action tag="a" href="#" className="border-0">
              <Badge bg="success" className="float-end">
                2
              </Badge>
              <div className="d-flex">
                <img
                  src={avatar2}
                  className="rounded-circle me-1"
                  alt="Carl Jenkins"
                  width="40"
                  height="40"
                />
                <div className="flex-grow-1 ms-3">
                  Carl Jenkins
                  <div className="small">
                    <FontAwesomeIcon icon={faCircle} className="chat-online" />{" "}
                    Online
                  </div>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action tag="a" href="#" className="border-0">
              <div className="d-flex">
                <img
                  src={avatar3}
                  className="rounded-circle me-1"
                  alt="Bertha Martin"
                  width="40"
                  height="40"
                />
                <div className="flex-grow-1 ms-3">
                  Bertha Martin
                  <div className="small">
                    <FontAwesomeIcon icon={faCircle} className="chat-online" />{" "}
                    Online
                  </div>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action tag="a" href="#" className="border-0">
              <div className="d-flex">
                <img
                  src={avatar4}
                  className="rounded-circle me-1"
                  alt="Stacie Hall"
                  width="40"
                  height="40"
                />
                <div className="flex-grow-1 ms-3">
                  Stacie Hall
                  <div className="small">
                    <FontAwesomeIcon icon={faCircle} className="chat-offline" />{" "}
                    Offline
                  </div>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action tag="a" href="#" className="border-0">
              <div className="d-flex">
                <img
                  src={avatar5}
                  className="rounded-circle me-1"
                  alt="Fiona Green"
                  width="40"
                  height="40"
                />
                <div className="flex-grow-1 ms-3">
                  Fiona Green
                  <div className="small">
                    <FontAwesomeIcon icon={faCircle} className="chat-offline" />{" "}
                    Offline
                  </div>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action tag="a" href="#" className="border-0">
              <div className="d-flex">
                <img
                  src={avatar2}
                  className="rounded-circle me-1"
                  alt="Doris Wilder"
                  width="40"
                  height="40"
                />
                <div className="flex-grow-1 ms-3">
                  Doris Wilder
                  <div className="small">
                    <FontAwesomeIcon icon={faCircle} className="chat-offline" />{" "}
                    Offline
                  </div>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action tag="a" href="#" className="border-0">
              <div className="d-flex">
                <img
                  src={avatar4}
                  className="rounded-circle me-1"
                  alt="Haley Kennedy"
                  width="40"
                  height="40"
                />
                <div className="flex-grow-1 ms-3">
                  Haley Kennedy
                  <div className="small">
                    <FontAwesomeIcon icon={faCircle} className="chat-offline" />{" "}
                    Offline
                  </div>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action tag="a" href="#" className="border-0">
              <div className="d-flex">
                <img
                  src={avatar3}
                  className="rounded-circle me-1"
                  alt="Jennifer Chang"
                  width="40"
                  height="40"
                />
                <div className="flex-grow-1 ms-3">
                  Jennifer Chang
                  <div className="small">
                    <FontAwesomeIcon icon={faCircle} className="chat-offline" />{" "}
                    Offline
                  </div>
                </div>
              </div>
            </ListGroup.Item>

            <hr className="d-block d-lg-none mt-1 mb-0" />
          </Col>
          <Col lg={7} xl={9}>
            <div className="py-2 px-4 border-bottom d-none d-lg-block">
              <div className="d-flex align-items-center py-1">
                <div className="position-relative">
                  <img
                    src={avatar3}
                    className="rounded-circle me-1"
                    alt="Bertha Martin"
                    width="40"
                    height="40"
                  />
                </div>
                <div className="flex-grow-1 ms-3 ps-3">
                  <strong>Bertha Martin</strong>
                  <div className="text-muted small">
                    <em>Typing...</em>
                  </div>
                </div>
                <div>
                  <Button size="lg" variant="primary" className="px-3 me-2">
                    <Phone className="feather" />
                  </Button>
                  <Button
                    size="lg"
                    variant="info"
                    className="me-2 px-3 d-none d-md-inline-block"
                  >
                    <Video className="feather" />
                  </Button>
                  <Button size="lg" variant="light" className="px-3 border">
                    <MoreHorizontal className="feather" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="position-relative">
              <div className="chat-messages p-4">
                <ChatMessage
                  position="right"
                  name="You"
                  avatar={avatar1}
                  time="2:33 am"
                >
                  Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                  prodesset te vix.
                </ChatMessage>

                <ChatMessage
                  position="left"
                  name="Bertha Martin"
                  avatar={avatar3}
                  time="2:34 am"
                >
                  Sit meis deleniti eu, pri vidit meliore docendi ut, an eum
                  erat animal commodo.
                </ChatMessage>

                <ChatMessage
                  position="right"
                  name="You"
                  avatar={avatar1}
                  time="2:35 am"
                >
                  Cum ea graeci tractatos.
                </ChatMessage>

                <ChatMessage
                  position="left"
                  name="Bertha Martin"
                  avatar={avatar3}
                  time="2:36 am"
                >
                  Sed pulvinar, massa vitae interdum pulvinar, risus lectus
                  porttitor magna, vitae commodo lectus mauris et velit. Proin
                  ultricies placerat imperdiet. Morbi varius quam ac venenatis
                  tempus.
                </ChatMessage>

                <ChatMessage
                  position="left"
                  name="Bertha Martin"
                  avatar={avatar3}
                  time="2:37 am"
                >
                  Cras pulvinar, sapien id vehicula aliquet, diam velit
                  elementum orci.
                </ChatMessage>

                <ChatMessage
                  position="right"
                  name="You"
                  avatar={avatar1}
                  time="2:38 am"
                >
                  Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                  prodesset te vix.
                </ChatMessage>

                <ChatMessage
                  position="left"
                  name="Bertha Martin"
                  avatar={avatar3}
                  time="2:39 am"
                >
                  Sit meis deleniti eu, pri vidit meliore docendi ut, an eum
                  erat animal commodo.
                </ChatMessage>

                <ChatMessage
                  position="right"
                  name="You"
                  avatar={avatar1}
                  time="2:40 am"
                >
                  Cum ea graeci tractatos.
                </ChatMessage>

                <ChatMessage
                  position="right"
                  name="You"
                  avatar={avatar1}
                  time="2:41 am"
                >
                  Morbi finibus, lorem id placerat ullamcorper, nunc enim
                  ultrices massa, id dignissim metus urna eget purus.
                </ChatMessage>

                <ChatMessage
                  position="left"
                  name="Bertha Martin"
                  avatar={avatar3}
                  time="2:42 am"
                >
                  Sed pulvinar, massa vitae interdum pulvinar, risus lectus
                  porttitor magna, vitae commodo lectus mauris et velit. Proin
                  ultricies placerat imperdiet. Morbi varius quam ac venenatis
                  tempus.
                </ChatMessage>

                <ChatMessage
                  position="right"
                  name="You"
                  avatar={avatar1}
                  time="2:43 am"
                >
                  Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                  prodesset te vix.
                </ChatMessage>

                <ChatMessage
                  position="left"
                  name="Bertha Martin"
                  avatar={avatar3}
                  time="2:44 am"
                >
                  Sit meis deleniti eu, pri vidit meliore docendi ut, an eum
                  erat animal commodo.
                </ChatMessage>
              </div>
            </div>

            <div className="flex-grow-0 py-3 px-4 border-top">
              <InputGroup>
                <Form.Control type="text" placeholder="Type your message" />
                <Button variant="primary">Send</Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  </React.Fragment>
);

export default Chat;
