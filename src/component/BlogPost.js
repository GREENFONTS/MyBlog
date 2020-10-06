import React, { Component } from "react";
// import { Breadcrumb, BreadcrumbItem, Card, CardBody,  CardTitle, CardHeader, } from "reactstrap";
import { Link } from "react-router-dom";
import Header from "./header";
import Home from "./HomeComponent";
import {baseUrl} from '../redux/baseUrl'

class Blog extends Component {

    render() {
       const Style = {
         color: "#1bc523",
        };
        const posts = this.props.posts.posts.map((post) => {
            return (
              <Card className="border-secondary mb-3">
                <CardHeader>{post.Title}</CardHeader>
                <CardBody>
                  <img
                    src={baseUrl + post.Media.url}
                    alt={post.name}
                    width="100%"
                  />
                  <CardTitle>{post.Content}</CardTitle>
                </CardBody>
              </Card>
            );
        })
        const postList = this.props.posts.posts.map((post) => {
            return (
              <div>
                <h3>{post.Title}</h3>
                <hr />
              </div>
            );
        })
        
    return (
      <div>
        <Header Style={Style} />
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Blog</BreadcrumbItem>
            </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-12 col-md-9">
                        {posts}
                    </div>
                    <div className="col-12 col-md-3 ">
                        {postList}
                    </div>
                </div>
        </div>
      </div>
    );
  }
}

export default Blog;
