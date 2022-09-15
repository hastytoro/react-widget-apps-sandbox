import { useState } from "react";

import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";

import Header from "./components/Header";
import Route from "./components/Route";

const items = [
  {
    title: "React",
    url: "https://reactjs.org/",
    content:
      "React is a free and open-source front-end JS library for building user interfaces based on UI components. It is maintained by Meta and a community.",
    author: "Jordan Walke",
    num_comments: 3,
    points: 5,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    content:
      "Redux is an open-source JS library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: "Next",
    url: "https://nextjs.org/",
    content:
      "Next is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.",
    author: "Guillermo Rauch",
    num_comments: 2,
    points: 5,
    objectID: 2,
  },
  {
    title: "Github",
    url: "https://github.com/",
    content:
      "It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration.",
    author: "Tom Preston-Werner, Scott Chacon",
    num_comments: 2,
    points: 5,
    objectID: 3,
  },
];

const options = [
  {
    label: "The color red 🍄",
    value: "red",
  },
  {
    label: "The color green 🍀",
    value: "green",
  },
  {
    label: "The color blue 🌀",
    value: "blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]); // for plain <Dropdown />
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          setSelected={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
