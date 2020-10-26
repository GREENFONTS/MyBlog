import React from "react";
import "../App.css";

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
  {
    name: "Post 4",
    description: "This post 4",
  },
  {
    name: "Post 5",
    description: "This post 5",
  },
  {
    name: "Post 6",
    description: "This post 6",
  },
  {
    name: "Post 7",
    description: "This post 3",
  },
  {
    name: "Post 7",
    description: "This post 7",
  },
  {
    name: "Post 8",
    description: "This post 8",
  },
  {
    name: "Post 9",
    description: "This post 9",
  },
  {
    name: "Post 10",
    description: "This post 10",
  },
  {
    name: "Post 11",
    description: "This post 11",
  },
  {
    name: "Post 12",
    description: "This post 12",
  },
  {
    name: "Post 13",
    description: "This post 13",
  },
  {
    name: "Post 14",
    description: "This post 14",
  }
];


const Slider = () => {
 
  return (
  
    <div className="row row-content">
      <div className="col">
        <div id="mycarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                className="d-block img-fluid"
                src="assets/images/Home.jpg"
                alt="Uthappizza"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>
                  Uthappizza <span className="badge badge-danger">HOT</span>
                  <span className="badge badge-pill badge-default">$4.99</span>
                </h2>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block img-fluid"
                src="assets/images/Mypic.jpg"
                alt="Uthappizza"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>
                  Uthappizza <span className="badge badge-danger">HOT</span>
                  <span className="badge badge-pill badge-default">$4.99</span>
                </h2>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block img-fluid"
                src="assets/images/green logo.jpg"
                alt="Uthappizza"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>
                  Uthappizza <span className="badge badge-danger">HOT</span>
                  <span className="badge badge-pill badge-default">$4.99</span>
                </h2>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li data-target="#mycarousel" data-slide-to="0" className="active"></li>
            <li data-target="#mycarousel" data-slide-to="1"></li>
            <li data-target="#mycarousel" data-slide-to="2"></li>
          </ol>
          <a
            className="carousel-control-prev"
            href="#mycarousel"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#mycarousel"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </div>
    

  );
};

export default Slider;
