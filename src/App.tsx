import { BrowserRouter, Routes, Route } from 'react-router';

import './App.css'
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import NotFoundPage from './pages/NotFoundPage';
import QueryPage from './pages/QueryPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='form' element={<FormPage/>}/>
            <Route path='query' element={<QueryPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
