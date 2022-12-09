import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, NavLink } from "react-router-dom";
import Search from "./components/Search";
import Footer from "./components/Footer";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Navigation>
          <Logo to={"/"}>
            <GiKnifeFork />
            CookBook
          </Logo>
        </Navigation>
        <Search />
        <Category />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

let Logo = styled(NavLink)`
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 400;
  color: #147508;
  font-family: "lobster two", cursive;
`;
let Navigation = styled.div`
  padding: 2rem 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2.5rem;
  }
`;

export default App;
