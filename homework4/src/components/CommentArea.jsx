import React from "react";

class CommentArea extends React.Component {
  state = {
    comments: [],
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  fetchComments = async () => {
    try {
      const headers = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOTRjYWFhY2FhMjAwMTU1MmExOWMiLCJpYXQiOjE2MzY2NDA4MTMsImV4cCI6MTYzNzg1MDQxM30.6S5r2YYEMdcMQ7lcVnnuiD9wSaqANva-uY-3tUqRLKw",
        },
      };

      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        headers
      );

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          comments: data,
        });
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        {this.state.comments
          .filter((res) => res.elementId.includes(this.props.comments.asin))
          .map((res) => (
            <div key={res._id}>{res.comment}</div>
          ))}
      </div>
    );
  }
}

export default CommentArea;
