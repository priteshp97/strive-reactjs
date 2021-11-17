import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { useState, useEffect } from "react";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  console.log(props.asin);

  useEffect(() => {
    getComments();
  }, [props.asin]);

  const getComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOTRjYWFhY2FhMjAwMTU1MmExOWMiLCJpYXQiOjE2MzcwNzA1MjIsImV4cCI6MTYzODI4MDEyMn0.V14Q_4EIDle54Ijq00cdKr5yUsuHNa24WlRdESy0szQ",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        setComments({ comments: comments });
        setisLoading({
          isLoading: false,
        });
        setisError({
          isError: false,
        });
      } else {
        console.log("error");
        setisLoading({ isLoading: false });
        setisError({ isError: false });
      }
    } catch (error) {
      console.log(error);
      setisLoading({ isLoading: false });
      setisError({ isError: true });
    }
  };

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
