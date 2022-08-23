import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

const cardElements = data.map((item) => {
  return (
    <Card
      key={item.title}
      img={item.imageUrl}
      location={item.location}
      locationLink={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      title={item.title}
    />
  );
});

function App() {
  return (
    <div>
      <Navbar />
      {cardElements}
    </div>
  );
}

export default App;
