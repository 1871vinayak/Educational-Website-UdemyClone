import React from "react";
import styled from "styled-components";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSidebarContext } from "../context/sidebar_context";
import { useCartContext } from "../context/cart_context";

const Navbar = () => {
  const { total_items } = useCartContext();
  const { openSidebar } = useSidebarContext();

  return (
    <NavbarWrapper className="header-wrapper bg-white flex">
      <div className="container w-100">
        <div className="header-content flex flex-between w-100">
          {/* Logo at the extreme left */}
          <Link to="/" className="logo">
            <span>U</span>demy
          </Link>

          {/* "Categories" button */}
          <button
            type="button"
            className="categories-btn"
            onClick={() => openSidebar()}
          >
            Categories
            <MdMenu />
          </button>

          {/* Search bar covering the center part */}
          <div className="search-bar">
            <form onsubmit="event.preventDefault();" role="search">
              <label for="search">Search for stuff</label>
              <input
                id="search"
                type="search"
                placeholder="Search..."
                autofocus
                required
              />
              <button className="search-btn" type="submit">
                Go
              </button>
            </form>
          </div>

          {/* "Add course" button */}
          <button type="button" className="add-course-btn">
            Add Course
          </button>

          <div className="header-buttons flex">
            {/* "Cart" button with logo */}
            <Link to="/cart" className="cart-btn">
              <MdShoppingCart />
              <span className="item-count-badge">{total_items}</span>
            </Link>

            {/* "Login and Sign Up" Button on the extreme right */}
            <button type="button" className="login-signup-btn">
              Login/Sign Up
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px,
    rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .navbar-brand {
    font-size: 23px;
    span {
      color: var(--clr-red);
    }
  }
  .cart-btn {
    margin-right: 18px;
    font-size: 23px;
    position: relative;
    .item-count-badge {
      background-color: var(--clr-red);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .header-wrapper {
    background-color: #ffffff;
    width: 100%;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
  }

  .logo {
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
  }

  .logo span {
    color: #007bff; /* Assuming you want the "U" in Udemy to have a different color */
  }

  .categories-btn,
  .add-course-btn,
  .login-signup-btn {
    margin: 0 10px;
    padding: 10px 15px;
    background-color: #1c85f4;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .search-bar {
    flex-grow: 1;
    padding: 0 10px;
  }

  :root {
    --rad: 0.7rem;
    --dur: 0.3s;
    --color-dark: #2f2f2f;
    --color-light: #fff;
    --color-brand: #57bd84;
    --font-fam: "Lato", sans-serif;
    --height: 5rem;
    --btn-width: 6rem;
    --bez: cubic-bezier(0, 0, 0.43, 1.49);
  }

  body {
    background: var(--color-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  html {
    box-sizing: border-box;
    height: 100%;
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  form {
    position: relative;
    width: 50rem;
    background: var(--color-brand);
    border-radius: var(--rad);
  }

  input,
  .search-btn {
    height: var(--height);
    font-family: var(--font-fam);
    border: 0;
    color: var(--color-dark);
    font-size: 1.8rem;
  }

  input[type="search"] {
    outline: 0;
    width: 100%;
    background: var(--color-light);
    padding: 0 1.6rem;
    border-radius: var(--rad);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: all var(--dur) var(--bez);
    transition-property: width, border-radius;
    z-index: 1;
    position: relative;
  }

  .search-btn {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: var(--btn-width);
    font-weight: bold;
    background: var(--color-brand);
    border-radius: 0 var(--rad) var(--rad) 0;
  }

  input:not(:-moz-placeholder-shown) {
    border-radius: var(--rad) 0 0 var(--rad);
    width: calc(100% - var(--btn-width));
  }

  input:not(:-ms-input-placeholder) {
    border-radius: var(--rad) 0 0 var(--rad);
    width: calc(100% - var(--btn-width));
  }

  input:not(:placeholder-shown) {
    border-radius: var(--rad) 0 0 var(--rad);
    width: calc(100% - var(--btn-width));
  }
  input:not(:-moz-placeholder-shown) + button {
    display: block;
  }
  input:not(:-ms-input-placeholder) + button {
    display: block;
  }
  input:not(:placeholder-shown) + button {
    display: block;
  }

  label {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  View SCSS Code .search-bar input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }

  .cart-btn {
    position: relative;
    display: flex;
    align-items: center;
    color: #333;
    text-decoration: none;
    margin-right: 10px;
  }

  .cart-btn .item-count-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background-color: #007bff;
    color: #fff;
    border-radius: 50%;
    font-size: 12px;
  }

  .sidebar-open-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  /* Responsive styles (adjust as needed) */

  @media screen and (max-width: 768px) {
    .categories-btn,
    .add-course-btn,
    .login-signup-btn {
      display: none;
    }
  }
`;

export default Navbar;
