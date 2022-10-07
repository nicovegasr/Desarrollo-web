import './App.css';
import {Card} from './componentes/card'
function App() {
  return (
    <div className="App">
      <h1>These are our presentation cards</h1>
      <Card 
      introduction='Emma on USA'
      charge='DevOps'
      description='Suecia is a beatiful place to be and to improve ur quality as DevOps'
      />
    </div>
  );
}

export default App;
