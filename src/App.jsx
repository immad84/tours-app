import { useEffect, useState } from 'react';
import Loading from './componets/loading';
import Tours from './componets/tours';
import Tour from './componets/tour';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log('error');
        return;
      }
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const removeTour = (id) => {
    const newToursArray = tours.filter((tour) => tour.id !== id);
    setTours(newToursArray);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h5>No More Tours</h5>
          <button
            type="button"
            className="btn"
            style={{ marginTop: '2rem' }}
            onClick={() => fetchData()}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
