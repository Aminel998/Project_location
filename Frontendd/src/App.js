import './App.css';
import './Component/Home/Initial'
import Initial from './Component/Home/Initial';
import Vitrine from './Component/Vitrine/Vitrine';
import Partenaire from './Component/Partenaire/Client';
import Client from './Component/Client/Client';
import Reservation from './Component/Vitrine/Reservation'
import ErrorPage from './Component/ErrorPage';

import { BrowserRouter , Route , Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Initial} exact/>
      <Route path="/Partenaire" component={Partenaire}/>
      <Route path="/Client" component={Client}/>
      <Route path="/vitrine" component={Vitrine}/>
      <Route path="/Reservations" component={Reservation}/>
      <Route  component={ErrorPage} />  
    </Switch>
    </BrowserRouter>
  );
}

export default App;
