import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Screens
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import WishScreen from "./screens/WishScreen";
import AddressScreen from "./screens/AddressScreen";
import PaymentScreen from './screens/PaymentScreen';
import LastScreen from './screens/LastScreen';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ marginTop: "20px" }}>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/wishlist" component={WishScreen} />
          <Route exact path="/address" component={AddressScreen} />
          <Route exact path="/payment" component={PaymentScreen} />
          <Route exact path="/lastScreen" component={LastScreen} />

        </Switch>
      </main>
    </Router>
  );
}

export default App;
