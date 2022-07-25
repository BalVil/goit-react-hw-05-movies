import { Routes, Route } from 'react-router-dom';
import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import HomePage from '../pages/Home';
import NotFoundPage from '../pages/NotFound';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}
