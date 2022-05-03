import './App.scss';
import { Provider } from 'react-redux'
import store from './store/store';
import TalentCenter from './components/TalentCenter/TalentCenter';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout>
          <TalentCenter />
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
