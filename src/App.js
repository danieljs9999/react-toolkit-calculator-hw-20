import { Provider } from "react-redux";
import Auth from "./components/Auth";
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import { store } from "./store";
import { Navigate, Route, Routes } from "react-router-dom";

function AppContent() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
