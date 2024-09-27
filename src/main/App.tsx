import { BrowserRouter } from "react-router-dom";
import Router from "../routes/router";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
