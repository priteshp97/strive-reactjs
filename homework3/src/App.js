import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import WelcomeHeader from "./components/WelcomeHeader";
import LatestRelease from "./components/LatestRelease";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";

function App() {
  return (
    <div className="wrap">
      <MyNav title="StriveBooks" />
      <WelcomeHeader />
      <WarningSign text="danger" />
      <MyBadge badge="hello" />
      {/* <LatestRelease /> */}
      <SingleBook id={2} />

      <MyFooter />
    </div>
  );
}

export default App;
