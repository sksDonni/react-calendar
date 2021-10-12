import './App.css';
import MainComponent from './components/MainComponent'
import {Provider} from 'react-redux'
import {ConfigureStore} from './redux/configureStore'
import Login from './components/authComponents/LoginComponent'
import Register from './components/authComponents/RegisterComponent'
import AddEventsForm from './components/eventComponents/AddEventsForm'
import {Route, BrowserRouter, Switch } from 'react-router-dom'
import {Redirect} from 'react-router-dom'

function App() {
  const store = ConfigureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
        <Switch>
          <Route path="/" exact><Redirect to="/events" /></Route>
          <Route path="/events" exact component={MainComponent}/>
          <Route path="/auth/register" exact component={Register} />
          <Route path="/auth/login" exact component={Login} />
          <Route path="/events/:id" exact component={AddEventsForm}/>
          <Route path="/events/new" exact component={AddEventsForm}/>
        </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
