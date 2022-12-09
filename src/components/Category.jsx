import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiChickenOven, GiNoodles } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Indian"}>
        <GiChickenOven />
        <h4>Indian</h4>
      </SLink>
      <SLink to={"/cuisine/Chinese"}>
        <GiNoodles />
        <h4>Chinese</h4>
      </SLink>
    </List>
  );
}

//Styled Components
let List = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0rem;
`;
let SLink = styled(NavLink)`
  @media (min-width: 600px) {
    margin-right: 1rem 0rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  /* margin-right: 0.3rem; */
  background: linear-gradient(35deg, #494949, #313131);
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  transform: scale(0.8);
  transition: 0.2s;

  h4 {
    color: #fff;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.3rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
  :hover {
    background: linear-gradient(to right, #f27121, #e94057);
    transition: 0.2s;
  }
`;
export default Category;
