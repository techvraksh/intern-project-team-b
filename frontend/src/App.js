import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from './screens/SigninScreen';
import Navbar from "./components/Navbar";
import ShippingAddressScreen from './screens/ShippingAddressScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Container>
          <Navbar></Navbar>
        </Container>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/Shipping" component={ShippingAddressScreen}></Route>
        </main>
        <footer className="row center">Techvkrash reserved</footer>
      </div>
    </BrowserRouter>
  );
}

const Container = styled.div`
height: auto;
`;
export default App;
