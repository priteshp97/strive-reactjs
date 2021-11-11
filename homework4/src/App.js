import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import WelcomeHeader from "./components/WelcomeHeader";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import scifi from "./data/scifi.json";
import CommentArea from "./components/CommentArea";

function App() {
  return (
    <div className="wrap">
      <MyNav title="StriveBooks" />
      <WelcomeHeader />
      {/* <SingleBook book={scifi[0]} /> */}

      <BookList books={scifi} />
      <MyFooter />
    </div>
  );
}

export default App;
