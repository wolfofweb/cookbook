import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink, useParams } from "react-router-dom";

function Cuisine() {
  let [cuisine, setCuisine] = React.useState([]);
  let params = useParams();
  let getCuisine = async (name) => {
    let data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    let recipes = await data.json();
    setCuisine(recipes.results);
  };
  React.useEffect(() => {
    getCuisine(params.type);
    console.log(params);
  }, [params.type]);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Grid>
        {cuisine.map((item) => {
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
    </motion.div>
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

export default Cuisine;
