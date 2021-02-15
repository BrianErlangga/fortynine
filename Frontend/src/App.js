import logo from "./logo.svg";
import "./App.css";
import InfoCardContainer from "./infoCardContainer/infoCardContainer";
import LocationHeader from "./locationHeader/LocationHeader";

function App() {
  return (
    <div className="App">
      <h1 className="Header">ShelterTO</h1>
      <h3 className="emergencyDisclaimer">
        In an emergency, dial 911 immediately.
      </h3>
      <InfoCardContainer />
    </div>
  );
}

export default App;
