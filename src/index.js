import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { About, Contact, History }  from './Practices/PracticeThreeA';
import Favorite from './Movies/Favorite/Favorite';
import Detail from './Movies/Detail/Detail';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Practice One and Two
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // Practice Three
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //     {/* <Route path="/about" element={<About />} /> */}
  //     <Route path="/about" element={<About />}>
  //       <Route
  //         path="history"
  //         element={<History />}
  //       />
  //     </Route>
  //     <Route
  //       path="/contact"
  //       element={<Contact />}
  //     />
  //   </Routes>
  // </BrowserRouter>,

  // Movies
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="detail"
          element={<Detail />}
        />
      </Route>
      <Route
        path="/favorite"
        element={<Favorite />}
      />
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
