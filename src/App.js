import React, { Suspense } from "react";
import "./App.css";
import User from "./components/User";
// import Movies from "./components/hoc/Movies";
// import ErrorBoundary from "./components/ErrorBoundry";
// import ErrorComponent from "./components/ErrorComponent";
// import Main from "./components/context/Main";
// import Counter from "./components/Counter";
// import Form from "./components/Form";
// import("./utils/Math").then((Math) => {
//   console.log(Math.Add(10, "23"));
// });
// const LazyComponent = React.lazy(() => import("./components/Lazy"));
// import Parent from "./components/forwardRef/Parent";
// import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary> */}

      {/* <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense> */}

      {/* <Counter /> */}

      {/* <Form /> */}

      {/* <Main /> */}

      {/* <Parent /> */}

      {/* <Movies /> */}

      {/* <Greeting name={"sg"} /> */}
      <User />
    </div>
  );
}

export default App;
