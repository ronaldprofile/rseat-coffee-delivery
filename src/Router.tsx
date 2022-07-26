import { Routes, Route } from "react-router-dom";
import { CompleteOrder } from "./pages/CompleteOrder";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<CompleteOrder />}/>
      <Route path="/success" element={<Success />}/>
    </Routes>
  );
}
