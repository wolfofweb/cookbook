import React from "react";
//For CSS or SASS Styled components
import styled from "styled-components";
//For Carousel slider
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
//For Recipe page navigation using React-DOM
import { NavLink } from "react-router-dom";

function Popular() {
  let [popular, setPopular] = React.useState([]);
  React.useEffect(() => {
    getPopular();
  }, []);
  let getPopular = async () => {
    let check = localStorage.getItem("popular");
    //If popular is fetched from API and already set into local storage, parse it out and update the state
    if (check) {
      setPopular(JSON.parse(check));
    }
    //Else set the local storage by doing an API Call
    else {
      let api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      let data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data);
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            // arrows: false,
            pagination: false,
            drag: "free",
            gap: "2.5rem",
            breakpoints: {
              1024: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
              500: {
                perPage: 1,
              },
            },
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <NavLink to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </NavLink>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

//Styled Components

let Wrapper = styled.div`
  /* margin: 1rem 0rem; */
`;
let Card = styled.div`
  min-height: 12rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  /* box-shadow: 5px 5px 15px #000; */

  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 0.9rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

let Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
`;
export default Popular;
