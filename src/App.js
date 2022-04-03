import { Routes, Route } from "react-router-dom";
import Home from "./rotues/home/home.component";
import Navigation from "./rotues/navigation/navigation.component";
import SignIn from "./rotues/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
