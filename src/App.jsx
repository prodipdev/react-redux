import "./App.css";
import Todos from "./components/Todos";
import Counter from "./components/counter";

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <Counter />
      <Todos />
    </div>
  );
}

export default App;

// step1: install package
// step2: constants define
// step3: async action creator
// step4: reducer
// step5: create store
// step6: provide store
// step7: use store
// step8: adding css
