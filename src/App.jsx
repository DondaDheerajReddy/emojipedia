import React from "react";
import Heading from "./components/Heading";
import content from "./components/content";
import Card from "./components/Cards";

function NewCard(content) {
  return (
    <Card
      key={content.id}
      emoji={content.emoji}
      title={content.title}
      para={content.para}
    ></Card>
  );
}

function App() {
  return (
    <div>
      <Heading></Heading>
      <div className="container">{content.map(NewCard)}</div>
    </div>
  );
}

export default App;
