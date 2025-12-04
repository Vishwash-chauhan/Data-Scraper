import React, { useEffect, useState } from 'react';
import { useUser, useClerk, UserButton } from '@clerk/clerk-react';
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import API from '../axios';

const Navbar = () => {
  const { user, isSignedIn } = useUser();
  const { openSignIn, signOut } = useClerk();
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (isSignedIn) {
        try {
          setLoading(true);
          const token = await getToken();
          const res = await API.get('/api/users/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setUserData(res.data);
        } catch (err) {
          console.error('Failed to fetch user data:', err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [isSignedIn, getToken]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="/">
              <img
                src="/VyaapaarNiti.png"
                alt="VyaapaarNiti Logo"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">

              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 px-4 py-2 text-black font-bold hover:text-indigo-600 transition-colors"
              >
                Home
              </button>

            {/* Pricing Button - Show for non-logged in users OR logged in users with <= 5 searches */}
            {(!isSignedIn || (userData && userData.noOfSearches <= 5)) && (
              <button
                onClick={() => navigate('/pricing')}
                className="flex items-center gap-2 px-4 py-2 text-black font-bold hover:text-indigo-600 transition-colors"
              >
                Pricing
              </button>
            )}

            {/* 👉 If User is NOT Logged In → Show Login Button */}
            {!isSignedIn && (
              <button
                onClick={() => openSignIn({})}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Login
              </button>
            )}

            {/* 👉 If User IS Logged In → Show User Info & Buttons */}
            {isSignedIn && (
              <>
                {/* User Plan & Searches Info */}
                {userData && (
                  <div className="flex flex-col items-end gap-1 pr-4 border-r border-slate-200">
                    <div className="text-s font-semibold text-slate-600">
                      {userData.plan}
                    </div>
                    <div className="text-s text-slate-500">
                      Searches Left: {userData.noOfSearches}
                    </div>
                  </div>
                )}

                {/* Clerk User Profile Menu */}
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10"
                    }
                  }}
                />

                {/* Logout Button */}
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4 space-y-3">
            {/* Home Button */}
            <button
              onClick={() => {
                navigate('/');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-black font-semibold hover:bg-slate-100 rounded-lg transition-colors"
            >
              Home
            </button>

            {/* Pricing Button */}
            {(!isSignedIn || (userData && userData.noOfSearches <= 5)) && (
              <button
                onClick={() => {
                  navigate('/pricing');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-black font-semibold hover:bg-slate-100 rounded-lg transition-colors"
              >
                Pricing
              </button>
            )}

            {/* User Info - Only show for logged in users */}
            {isSignedIn && userData && (
              <div className="px-4 py-2 border-t border-slate-200 pt-3">
                <div className="text-sm font-semibold text-slate-600">
                  Plan: {userData.plan}
                </div>
                <div className="text-sm text-slate-500">
                  Searches Left: {userData.noOfSearches}
                </div>
              </div>
            )}

            {/* Login Button - Only show for non-logged in users */}
            {!isSignedIn && (
              <button
                onClick={() => {
                  openSignIn({});
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
              >
                Login
              </button>
            )}

            {/* Logout Button - Only show for logged in users */}
            {isSignedIn && (
              <button
                onClick={() => {
                  signOut();
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
