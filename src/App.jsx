import Accordion from "./components/Accordion";

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
      "It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.",
    author: "Tom Preston-Werner, Scott Chacon",
    num_comments: 2,
    points: 5,
    objectID: 3,
  },
];

function App() {
  return (
    <div className="App">
      <Accordion items={items} />
    </div>
  );
}

export default App;
