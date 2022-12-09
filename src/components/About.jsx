import React from "react";
import styled from "styled-components";

function About() {
  return (
    <div>
      <h3>What's Cookin...?</h3>
      <Para>
        How often have you skimmed through a recipe book and been put off by the
        lack of recipes? Or found that none of the recipes cater for allergies
        or special dietary requirements? CookBook is a directory of real, tried
        and tested recipes with a range of categories catering for every taste.
        <br />
        With cooking times, weight watcher points, detailed methods, all wrapped
        up in a delicious design which places everything just a tap away from
        your taste buds. Select your food from our range of cuisines.
        <br />
        And Voila - You'll be amazed what you can cook up!
      </Para>
    </div>
  );
}

//Styled components

let Para = styled.p`
  font-weight: 500;
  text-align: justify;
  font-size: 1.1rem;
  line-height: 2rem;
`;

export default About;
