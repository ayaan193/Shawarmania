import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Orders from './components/orders';
import Gallery from './components/gallery';


function App() {
  {/* Defining our count variables in app.jsx and then using them as elements in the route*/}
  const [count, setCount] = useState(0);
  const [secondcount, setsecondCount] = useState(0);
  const [thirdcount, setthirdCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              count={count}
              setCount={setCount}
              secondcount={secondcount}            
              setsecondCount={setsecondCount}
              thirdcount={thirdcount}
              setthirdCount={setthirdCount}
            />
          }
        />
        <Route
          path="/orders"
          element={
            <Orders
              count={count}
              setCount={setCount}
              secondcount={secondcount}
              setsecondCount={setsecondCount}
              thirdcount={thirdcount}
              setthirdCount={setthirdCount}
            />
          }
        />
        <Route path="/gallery" element={<Gallery
              count={count}
              setCount={setCount}
              secondcount={secondcount}
              setsecondCount={setsecondCount}
              thirdcount={thirdcount}
              setthirdCount={setthirdCount}
        />} />
        
      </Routes>
      
    </Router>
  );
}

export default App;