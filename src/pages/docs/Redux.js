import React from "react";
import { Helmet } from "react-helmet-async";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import Code from "../../components/Code";

import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "../../redux/slices/counter";

const Intro = () => (
  <div className="mb-5">
    <h3>Introduction</h3>

    <p className="text-lg">
      Redux helps you write applications that behave consistently, run in
      different environments (client, server, and native), and are easy to test.
      AppStack leverages{" "}
      <a
        href="https://redux-toolkit.js.org/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Redux Toolkit
      </a>
      , to keep the amount of boilerplate code and complexity to a minimum.
    </p>
  </div>
);

const Usage = () => (
  <div className="mb-5">
    <h3>Usage</h3>
    <p className="text-lg">
      AppStack contains the following folders/files to store any Redux related
      logic:
    </p>

    <ul className="text-lg">
      <li>
        <code>src/redux/store.js</code> where reducers are combined and the
        store is initialized
      </li>
      <li>
        <code>src/redux/slices/</code> where reducers are implemented
      </li>
    </ul>
  </div>
);

const CreatingANewSlice = () => (
  <div className="mb-5">
    <h4>1. Creating a new slice</h4>
    <p className="text-lg">
      If you want to create a new slice, pleae add a file to the{" "}
      <code>/src/redux/slices/</code> folder. Quick example:
    </p>

    <Code>{`import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
};

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, payload) {
      state.products = [
        {
          id: '1',
          slug: 'my-first-product',
          title: 'My first product'
        }
      ];
    }
  }
});

export const { reducer } = slice;

export default slice;

export function getProducts() {
  return async dispatch => {
    const response = await axios.get('/api/products');
    dispatch(slice.actions.setProducts(response.data.products));
  };
}`}</Code>
  </div>
);

const AddSliceToRootReducer = () => (
  <div className="mb-5">
    <h4>2. Add slice to root reducer</h4>
    <p className="text-lg">
      Open the <code>/src/redux/store.ts</code> file and add the new slice:
    </p>

    <Code>{`import productsReducer from "./slices/products";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});`}</Code>
  </div>
);

const UsingTheSlice = () => (
  <div className="mb-5">
    <h4>3. Using the slice</h4>
    <Code>{`import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/slices/products';

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div>{product.name}</div>
        </div>
      ))}
    </div>
  );
}`}</Code>
  </div>
);

function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <Card>
      <Card.Body>
        <Card.Title tag="h5" className="mb-0">
          Example
        </Card.Title>
        <div className="my-3">
          <Button
            variant="primary"
            size="sm"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>
          <div className="d-inline-block mx-2">{count}</div>
          <Button
            variant="primary"
            size="sm"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </Button>
        </div>
        <div className="my-3">
          <Button
            variant="primary"
            size="sm"
            onClick={() => dispatch(incrementByAmount(1))}
            className="me-2"
          >
            Add Amount
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => dispatch(incrementAsync(1))}
            className="me-2"
          >
            Add Async
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => dispatch(incrementIfOdd(1))}
            className="me-2"
          >
            Add If Odd
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

const RealLifeExample = () => (
  <div className="mb-5">
    <h3>Real-life example</h3>
    <p className="text-lg">
      The example below includes various methods, including{" "}
      <code>createSlice</code> and <code>createAsyncThunk</code>. Any time you
      click the "Increment" and "Decrement buttons in the example below, the
      following happens:
    </p>

    <ul className="text-lg">
      <li>The corresponding Redux action will be dispatched to the store</li>
      <li>
        The counter slice reducer will see the actions and update its state
      </li>
      <li>
        The <code>{`<Counter>`}</code> component will see the new state value
        from the store and re-render itself with the new data
      </li>
    </ul>

    <Counter />
  </div>
);

const ReduxDevTools = () => (
  <div className="mb-5">
    <h3>Redux DevTools</h3>
    <p className="text-lg">
      Redux DevTools offers developer tools to power-up Redux development
      workflow or any other architecture which handles the state change (see
      integrations).
    </p>
    <p className="text-lg">
      It can be used as a browser extension (for{" "}
      <a
        href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd"
        target="_blank"
        rel="nofollow noreferrer"
      >
        Chrome
      </a>
      ,{" "}
      <a
        href="https://microsoftedge.microsoft.com/addons/detail/redux-devtools/nnkgneoiohoecpdiaponcejilbhhikei"
        target="_blank"
        rel="nofollow noreferrer"
      >
        Edge
      </a>{" "}
      and{" "}
      <a
        href="https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/"
        target="_blank"
        rel="nofollow noreferrer"
      >
        Firefox
      </a>
      ), as{" "}
      <a
        href="https://github.com/zalmoxisus/remotedev-app"
        target="_blank"
        rel="nofollow noreferrer"
      >
        a standalone app
      </a>{" "}
      or as{" "}
      <a
        href="https://github.com/reduxjs/redux-devtools/tree/master/packages/redux-devtools"
        target="_blank"
        rel="nofollow noreferrer"
      >
        a React component
      </a>{" "}
      integrated in the client app.
    </p>
  </div>
);

const Redux = () => (
  <React.Fragment>
    <Helmet title="Redux" />
    <Container fluid className="p-0">
      <Row>
        <Col lg={10} xl={8} className="col-xxl-7 mx-auto">
          <h1>Redux</h1>
          <hr className="my-4" />
          <Intro />
          <Usage />
          <CreatingANewSlice />
          <AddSliceToRootReducer />
          <UsingTheSlice />
          <RealLifeExample />
          <ReduxDevTools />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Redux;
