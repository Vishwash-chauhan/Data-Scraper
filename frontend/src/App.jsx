import { useEffect } from 'react';
import { useUser, useAuth } from "@clerk/clerk-react";
import { Route, Routes } from 'react-router-dom'
import Scraper from './pages/Scraper'
import Navbar from './components/Navbar'
import ProtectedAdminRoute from './components/ProtectedAdminRoute'
import API from './axios';
import Footer from './components/Footer';
import Terms from './pages/Terms';
import AdminPanel from './pages/AdminPanel';
import Pricing from './pages/Pricing';

const App = () => {
  const { user, isSignedIn } = useUser();

  const { getToken } = useAuth();

  useEffect(() => {
    const sync = async () => {
      if (isSignedIn && user) {
        const token = await getToken();   // 🔑 Get Clerk JWT Token

        await API.post(
          '/api/users',
          {
            clerkId: user.id,
            email: user.primaryEmailAddress?.emailAddress,
            name: user.fullName,
            imageUrl: user.imageUrl,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`  // 🔥 Send token to backend
            }
          }
        );
      }
    };

    sync();
  }, [isSignedIn, user]);


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Scraper />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/admin" element={<ProtectedAdminRoute><AdminPanel /></ProtectedAdminRoute>} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App