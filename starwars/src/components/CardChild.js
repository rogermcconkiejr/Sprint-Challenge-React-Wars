import React from "react";


import styled from "styled-components";

// const Grid = styled.div`
// display:flex;
// flex-direction:row;
// flex-wrap: wrap;
// `;

const Box = styled.div`
border:1px solid black;

`;

const BoxAttys = styled.div`
font-family: 'Anton', sans-serif;
color:purple;
`;

const CardChild = props => {
    return (
    //   <Grid>
        <Box>
          
            <BoxAttys>Character Name: {props.name}</BoxAttys>
            <BoxAttys>Height: {props.height}</BoxAttys>
            <BoxAttys>Mass: {props.mass}</BoxAttys>
            <BoxAttys>Hair Color: {props.hair_color}</BoxAttys>
          
        </Box>
    //   </Grid>
    );
  };
  
  export default CardChild