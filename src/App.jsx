import { Route, Routes } from "react-router-dom";
import Nevbar from "./components/navbar.component";
import UserAUthForm from "./pages/userAuthForm.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nevbar />} >
      <Route path="signin" element={ <UserAUthForm type="sign-in"/> } />
      <Route path="signup" element={ <UserAUthForm type="sign-up"/> } />
      </Route>
    </Routes>
  );
};

export default App;
