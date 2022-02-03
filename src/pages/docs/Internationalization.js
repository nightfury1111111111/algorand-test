import React from "react";
import { Helmet } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";

import Code from "../../components/Code";

const Intro = () => (
  <div className="mb-5">
    <h3>Introduction</h3>
    <p className="text-lg">
      react-i18next is a powerful internationalization framework for React which
      is based on i18next. The module provides multiple components eg. to assert
      that needed translations get loaded or that your content gets rendered
      when the language changes.
      <br />
      <br />
      Translations can be configured in the <code>/src/i18n.js</code> file.
    </p>
    <Code>{`const resources = {
  en: {
    translation: {
      "Welcome back": "Welcome back",
    },
  },
  fr: {
    translation: {
      "Welcome back": "Bon retour",
    },
  },
  de: {
    translation: {
      "Welcome back": "Willkommen zurück",
    },
  },
};`}</Code>
  </div>
);

const UsageWithHooks = () => (
  <div className="mb-5">
    <h3>Usage with hooks</h3>
    <p className="text-lg">
      Using the hook in functional components is one of the options you got.
    </p>
    <Code>{`import React from 'react';

import { useTranslation } from 'react-i18next';

function MyComponent () {
  const { t, i18n } = useTranslation();
  return <h1>{t('Welcome back')}</h1>
}`}</Code>
  </div>
);

const UsageWithHOC = () => (
  <div className="mb-5">
    <h3>Usage with HOC</h3>
    <p className="text-lg">
      Using higher order components is one of the most used method to extend
      existing components by passing additional props to them.
    </p>
    <Code>{`import React from 'react';

import { withTranslation } from 'react-i18next';

function MyComponent ({ t }) {
  return <h1>{t('Welcome back')}</h1>
}

export default withTranslation()(MyComponent);`}</Code>
  </div>
);

const LearnMore = () => (
  <div className="mb-5">
    <h3>Learn more</h3>
    <p className="text-lg">
      To learn more about react-i18next,{" "}
      <a
        href="https://react.i18next.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        click here
      </a>
      .
    </p>
  </div>
);

const Internationalization = () => (
  <React.Fragment>
    <Helmet title="Internationalization" />
    <Container fluid className="p-0">
      <Row>
        <Col lg={10} xl={8} className="col-xxl-7 mx-auto">
          <h1>Internationalization</h1>
          <hr className="my-4" />
          <Intro />
          <UsageWithHooks />
          <UsageWithHOC />
          <LearnMore />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Internationalization;
