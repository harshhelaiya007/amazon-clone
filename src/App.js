import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home";
import Checkout from "./Checkout";
import LoginUser from "./Login";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { auth } from "./firebase";

function App() {
  const promise = loadStripe(
    "pk_test_51Mh9r3SFe5r7dfi8M1zkrb1gigu4jDMo9IfdRPmcDECj2MNVNNSesuTa6xAqpYfznYzrRntN0KK1S3vgqYFXBOPI00lOxNZb5B"
  );

  const [user, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      console.log("authuser ", authuser);

      if (authuser) {
        dispatch({
          type: "SET_USER",
          user: authuser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="checkout" element={[<Header />, <Checkout />]} />
          <Route path="login" element={<LoginUser />} />
          <Route
            path="checkout/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          />

          {/* <Home/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
