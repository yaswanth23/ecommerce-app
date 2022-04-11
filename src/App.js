import { Routes, Route } from "react-router-dom";
import Home from "./rotues/home/home.component";
import Navigation from "./rotues/navigation/navigation.component";
import Authentication from "./rotues/authentication/authentication.component";
import Shop from "./shop/shop.component";
import Checkout from "./rotues/checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
