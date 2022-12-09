import React from "react";
import styled from "styled-components";
import { FaReact, FaRegHeart } from "react-icons/fa";
function Footer() {
  return (
    <Bottom>
      <hr />
      <div>
        <p>Feel Free to Copy | No Copyright Issues</p>
        <p>
          Made with <FaReact /> and <FaRegHeart /> by Surya
        </p>
      </div>
    </Bottom>
  );
}

//Styled components
let Bottom = styled.footer`
  div {
    display: flex;
    flex-wrap: wrap;
    margin: 3rem 0rem;
    justify-content: space-around;
    font-weight: 600;
    color: #147508;
  }
  hr {
    border-color: #147508;
    margin-top: 1.5rem;
  }
  p {
    line-height: 2.2rem;
  }
`;

export default Footer;
