import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/" exact />
    </BrowserRouter>
  );
}
