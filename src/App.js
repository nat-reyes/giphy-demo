import logo from './logo.svg';
import './App.css';
import Routes from "./routes";
import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
function App() {
  return (
    <div>
        <div className="App-header">
            <navbar className=""> GIPHY </navbar>
        </div>
        {renderRoutes(Routes)}
    </div>
  );
}

export default withRouter(App);
