import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Hello() {
  return <h1>hello</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
