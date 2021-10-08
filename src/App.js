import './App.css';
import CalendarComponent from './components/CalendarComponent'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ConfigureStore} from './redux/configureStore'


function App() {
  const store = ConfigureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <CalendarComponent />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
