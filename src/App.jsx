import "./App.css";
import Accordians from "./components/Accordians";
import "./styles.css";
import data from "./data/faqData.json";

function App() {
  return (
    <>
      <h1>Accordian Faq</h1>

      <Accordians data={data} />
    </>
  );
}

export default App;
