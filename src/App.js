import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/context";
import Home from "./pages/Home/Home";
import BookList from "./components/Book/BookList/BookList";
import BookDetails from "./components/Book/BookDetails/BookDetails";

function App() {
  return (
    <AppProvider>
      <BrowserRouter basename="/api-task">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="book" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
