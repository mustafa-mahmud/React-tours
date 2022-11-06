import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();

      setTours(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);

    setTours(newTours);
  };

  useEffect(() => {
    getTours();
  }, []);

  if (isLoading) return <Loading />;

  if (!tours.length) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={getTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
}

export default App;
