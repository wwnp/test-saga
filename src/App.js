import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function App() {
  const store = useSelector(store => store)
  const dispatch = useDispatch()
  console.log(store)
  return (
    <div className="App">
      <h1>{store.counter}</h1>
      <button onClick={() => { dispatch({ type: 'INC' }) }}>INC</button>
      <button onClick={() => { dispatch({ type: 'INC_ASYNC' }) }}>INC_ASYNC</button>
      <button onClick={() => dispatch({ type: 'DEC' })}>DEC</button>
    </div>
  );
}

export default App;
