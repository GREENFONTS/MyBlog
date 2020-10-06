import React from "react";
import Carousel from "react-elastic-carousel";
import "../App.css";

import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 5px;
  font-size: 4em;
`;
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];
export const Posts = [
  {
    name: "Post 1",
    description: "This post 1",
  },
  {
    name: "Post 2",
    description: "This post 2",
  },
  {
    name: "Post 3",
    description: "This post 3",
  },
];
const Slider = () => {
  return (
    <div className="slider">
      <Carousel breakPoints={breakPoints}>
        {Posts.map((item) => {
          return (
            <Item>
              <div>
                <h1>{item.name}</h1>
                <h4>{item.description}</h4>
              </div>
            </Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
