import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
function App() {
  const store = useSelector(store => store)
  const dispatch = useDispatch()
  return (
    <div className="App">
      123
    </div>
  );
}

export default App;
