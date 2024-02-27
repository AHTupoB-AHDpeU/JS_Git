import logo from './logo.svg';
import './App.css';
//import { Components, ComponentsClass } from './components';
import { Layout } from './compontents/Layout/Layout';

function App() {

  return (
    <Layout>
      <div>Hello World</div>
    </Layout>
  );
}

/*
  return (
    <div className="App">
      <Components name={name}>
        Hello world,
      </Components>
      <ComponentsClass />
    </div>
  );
}
*/

export default App;
