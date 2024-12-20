import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import NotFoundPage from "./pages/NotFoundPage";
import QueryPage from "./pages/QueryPage";

//Register a query client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="form" element={<FormPage />} />
              <Route path="query" element={<QueryPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
