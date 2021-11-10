import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import WelcomeHeader from "./components/WelcomeHeader";
import LatestRelease from "./components/LatestRelease";

function App() {
  return (
    <div className="wrap">
      <MyNav title="StriveBooks" />
      <WelcomeHeader />
      <LatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
