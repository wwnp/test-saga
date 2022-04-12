import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function App() {

  const store = useSelector(store => store)
  const dispatch = useDispatch()
  console.log(store)
  return (
    <div className="App">
      123
      <button
        onClick={() => dispatch({ type: 'CLICK' })}
      >
        click
      </button>
    </div>
  );
}

export default App;
