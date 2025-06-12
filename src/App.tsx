import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InvitationPage from './pages/InvitationPage';
import RSVPPage from './pages/RSVPPage';
import GuestbookPage from './pages/GuestbookPage';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="main-nav">
        <Link to="/">청첩장</Link> |{' '}
        <Link to="/rsvp">참석 회신</Link> |{' '}
        <Link to="/guestbook">방명록</Link>
      </nav>
      <Routes>
        <Route path="/" element={<InvitationPage />} />
        <Route path="/rsvp" element={<RSVPPage />} />
        <Route path="/guestbook" element={<GuestbookPage />} />
      </Routes>
    </Router>
  );
}

export default App;
