import { BrowserRouter, Route, Routes } from "react-router";
import { Signup } from "./pages/SignUp";
import { Signin } from "./pages/SignIn";
import { SendMoney } from "./pages/SendMoney";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppStart />
      </BrowserRouter>
    </>
  );
}

export default App;

function AppStart() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/send" element={<SendMoney />} />
    </Routes>
  );
}
