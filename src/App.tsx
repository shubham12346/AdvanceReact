import "./App.css";
import SplitScreen from "./component/SplitScreen";
import SmallAuthorListItem from "./component/authors/SmallListItem";
import LargeAuthorListItem from "./component/authors/LargeListItem";
import RegularList from "./component/lists/RegularList";
import { authors } from "./data/authors";
import { books } from "./data/books";
import { LargeBookListItem } from "./component/books/LargeListItem";
import React from "react";
import Modal from "./component/Modal";

// 1. Screen Splitter
// const LeftSidePanel = ({ title }) => {
//   return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
// };
//
// const RightSidePanel = ({ title }) => {
//   return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
// };

function App() {
  return (
    <>
      {/* // for  layout component,
    // 1. Screen-Splitter
    // It is not scalable passing children as props, below is the example
    // <SplitScree
    //   Left={LeftSidePanel}
    //   leftWidth={1}
    //   Right={RightSidePanel}
    //   rightWidth={3}
    // />
    // it is always better to pass sub components as children than props ,it is cleaner
    // below is the code example
    // <SplitScreen leftWidth={1} rightWidth={3}>
    //   <LeftSidePanel title={"Left"} />
    //   <RightSidePanel title={"right"} />
    // </SplitScreen>

    // 2. List component 
    // Crating common component for mapping which increase re usability
    // below is the code example 

   
      <RegularList
        items={authors}
        sourceName={"authors"}
        ItemComponent={SmallAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName={"authors"}
        ItemComponent={LargeAuthorListItem}
      />

      <RegularList
        items={books}
        sourceName={"books"}
        ItemComponent={LargeBookListItem}
      />
       */}

      {/* 3. Modal */}
      <Modal>
        <LargeBookListItem books={books[0]} />
      </Modal>
    </>
  );
}

export default App;
