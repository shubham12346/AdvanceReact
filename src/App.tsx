import "./App.css";
import SplitScreen from "./assets/component/SplitScreen";

const LeftSidePanel = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSidePanel = ({ title }) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
};
function App() {
  return (
    // for  layout component,
    // It is not scalable passing children as props, below is the example
    // <SplitScree
    //   Left={LeftSidePanel}
    //   leftWidth={1}
    //   Right={RightSidePanel}
    //   rightWidth={3}
    // />
    // it is always better to pass sub components as children than props ,it is cleaner
    // below is the code example
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSidePanel title={"Left"} />
      <RightSidePanel title={"right"} />
    </SplitScreen>
  );
}

export default App;
