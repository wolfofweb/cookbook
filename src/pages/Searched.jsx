import React from "react";
import styled from "styled-components";
import { useParams, NavLink } from "react-router-dom";

function Searched() {
  let params = useParams();
  let [searchedRecipes, setSearchedRecipes] = React.useState([]);

  let getSearched = async (name) => {
    let data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    let recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };
  React.useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <NavLink to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </NavLink>
          </Card>
        );
      })}
    </Grid>
  );
}

//Styled Components

let Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 2rem;
`;

let Card = styled.div`
  img {
    width: 100%;
    border-radius: 1.2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
