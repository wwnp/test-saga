import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function App() {

  const store = useSelector(store => store)
  const dispatch = useDispatch()
  return (
    <div className="App">
      123
      <button
        onClick={() => dispatch({ type: 'LOAD_DATA' })}
      >
        click
      </button>
    </div>
  );
}

export default App;
