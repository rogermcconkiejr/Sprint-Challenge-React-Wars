import React from "react";
import styled from "styled-components";

const Box = styled.div`
border:1px solid black;
margin-top:20px;
background-color:whitesmoke;
padding:3px;
width: 20%;
`;

const TitleAttys = styled.div`
border-bottom:1px solid black;
font-family: 'Anton', sans-serif;
`;
const BoxAttys = styled.div`
font-family: 'Anton', sans-serif;
color:grey;
`;

const CardChild = props => {
    return (
     
        <Box>
          
            <TitleAttys>Character Name: {props.name}</TitleAttys>
            <BoxAttys>Gender: {props.gender}</BoxAttys>
            <BoxAttys>Height: {props.height}</BoxAttys>
            <BoxAttys>Mass: {props.mass}</BoxAttys>
            <BoxAttys>Skin Color: {props.skin_color}</BoxAttys>
            <BoxAttys>Eye Color: {props.eye_color}</BoxAttys>

          
        </Box>
     
    );
  };
  
  export default CardChild;