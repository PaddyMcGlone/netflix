import React from "react";
import Jumbotron from './components/jumbotron';
import JumboData from './fixtures/jumbo';

export default function App() {
  return (  
    <Jumbotron.Container>
      {JumboData.map((item) => (
          <Jumbotron key={item.key} direction={item.direction}>
            <p>{item.title}</p>
            <p>{item.subTitle}</p>
            <p>{item.image}</p>
            <p>{item.alt}</p>
          </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
