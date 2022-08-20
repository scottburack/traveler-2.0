import React, { useState } from 'react';
import './App.css';
import Button from './components/shared/button/Button';
import Destination from './components/shared/button/destination/Destination';

function App() {

  const [destinationList, setDestinationList] = useState([])

  const handleSubmit = () => {
    // setDestinationList(destinationList.concat(<Destination text={"New"} />))
    console.log('submit');
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Button type="submit" text="Add destination" disabled={false} />
      </form>
    </div>
  );
}

export default App;
