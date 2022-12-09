import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  let [details, setDetails] = React.useState({});
  let [activeTab, setActiveTab] = React.useState("instructions");
  let fetchDetails = async () => {
    let data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    let detailData = await data.json();
    setDetails(detailData);
  };
  React.useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <ImageArea>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </ImageArea>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => {
            setActiveTab("instructions");
          }}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => {
            setActiveTab("ingredients");
          }}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <RecipeArea>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }} />
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }} />
          </RecipeArea>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

//Styled Components
let DetailWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 6rem;
  display: flex;
  flex-wrap: wrap;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    border-color: #313131;
  }
  img {
    /* object-fit: contain; */
    /* height: 100%; */
    width: 100%;
  }
  h2 {
    color: #147508;
    /* font-size: 0.8rem; */
    margin-bottom: 2rem;
  }
  h3 {
    color: #313131;
  }
  li {
    font-size: 0.9rem;
    font-weight: 600;
    /* color: */
    line-height: 2rem;
  }
  ul {
    margin-top: 1rem;
  }
`;
let Button = styled.button`
  padding: 0.8rem 1.5rem;
  color: #313131;
  background: #fff;
  border: 2px solid black;
  margin-right: 1.5rem;
  font-weight: 600;
`;

let Info = styled.div`
  margin-left: 2rem;
  @media (max-width: 400px) {
    margin-left: 0rem;
  }
  @media (min-width: 768px) {
    flex: 2;
  }
`;
let RecipeArea = styled.div`
  h3 {
    font-size: 0.9rem;
    width: 100%;
  }
`;
let ImageArea = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    flex: 1;
  }
`;
export default Recipe;
