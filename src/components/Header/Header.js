import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSateValue } from "../../StateProvider";
import "./Header.css";

const Header = () => {
  const [{basket}, dispatch] =useSateValue();
  return (
    <nav className="header">
      {/* logo on the left --> image */}
      <Link to="/">
        <img
          className="header_logo"
          src="http://bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"
          alt="amazon-prime"
        />
      </Link>
      {/* search box */}

      <InputGroup className="search_input">
        <Form.Control placeholder="Search Your Product Here" />
        <Button
          className="input_btn"
          variant="outline-secondary"
          id="button-addon2"
        >
          Search
        </Button>
      </InputGroup>

      {/* 3 links */}

      <div className="header_nav">
        <Link
          to="/login"
          className="header_nav"
          style={{
            textDecoration: "none",
            color: "white",
            paddingRight: "10px",
          }}
        >
          <span className="first_text">
            <small>Hello</small>{" "}
          </span>
          <span className="second_text">
            <strong>Signin</strong>
          </span>
        </Link>
      </div>
      <div className="header_nav">
        <Link
          to="/"
          className="header_nav"
          style={{
            textDecoration: "none",
            color: "white",
            paddingRight: "10px",
          }}
        >
          <span className="first_text">
            <small>Returns</small>{" "}
          </span>
          <span className="second_text">
            <strong>&Orders</strong>
          </span>
        </Link>
      </div>
      <div className="header_nav">
        <Link
          to="/"
          className="header_nav"
          style={{
            textDecoration: "none",
            color: "white",
            paddingRight: "10px",
          }}
        >
          <span className="first_text">
            <small>Your</small>{" "}
          </span>
          <span className="second_text">
            <strong>Prime</strong>
          </span>
        </Link>
      </div>

      {/* Basket icon with number */}

      <Link to='/checkout'
      style={{
        textDecoration: "none",
        color: "white",
        paddingRight: "10px",
      }}>
        <div className="header_basket">
        <span className="first_text">
            <small className="quantity text-white">{basket?.length}</small>{" "}
          </span>
          <span>
            <img className="second_img" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-11/512/Shopping-basket-icon.png"/>
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default Header;
