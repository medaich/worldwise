import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Cities from "./components/Cities";
import Countries from "./components/Countries";
import City from "./components/City";
import Form from "./components/Form";
import CurrentCityProvider from "./contexts/CurrCityContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="app"
            element={
              <CurrentCityProvider>
                <AppLayout />
              </CurrentCityProvider>
            }
          >
            <Route index element={<Navigate to="cities" replace />} />
            <Route path="cities" element={<Cities />} />
            <Route path="countries" element={<Countries />} />
            <Route path="form" element={<Form />} />
            <Route path="cities/:id" element={<City />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {process.env.NODE_ENV === "development" && (
        <div style={{ position: "fixed", bottom: 0, right: 0, zIndex: 9999 }}>
          <ReactQueryDevtools />
        </div>
      )}
    </QueryClientProvider>
  );
}

export default App;
