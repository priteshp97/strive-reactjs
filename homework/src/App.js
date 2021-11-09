import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import WelcomeHeader from "./components/WelcomeHeader";

function App() {
  return (
    <div>
      <MyNav title="StriveBooks" />
      <WelcomeHeader />
      <MyFooter />
    </div>
  );
}

export default App;
