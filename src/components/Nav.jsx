import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

function Nav() {
  return (
    <Menu>
      <Item to={"/"}>Home</Item>
      <Anchor
        href={"https://www.github.com/wolfofweb"}
        target="_blank"
        rel="noreferrer"
      >
        My Github
      </Anchor>
      <Anchor
        href={"https://www.suryad.epizy.com"}
        target="_blank"
        rel="noreferrer"
      >
        Know Me
      </Anchor>
      <Item to={"/social"}>Social</Item>
    </Menu>
  );
}

//Styled Components

let Item = styled(NavLink)`
  font-size: 1.5rem;
  line-height: 2.5rem;
`;
let Anchor = styled.a`
  font-size: 1.5rem;
  line-height: 2.5rem;
`;

export default Nav;
