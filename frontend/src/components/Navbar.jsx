import React from 'react';
import { useUser, useClerk, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const { user, isSignedIn } = useUser();
  const { openSignIn, signOut } = useClerk();

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

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {/* 👉 If User is NOT Logged In → Show Login Button */}
            {!isSignedIn && (
              <button
                onClick={() => openSignIn({})}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Login
              </button>
            )}

            {/* 👉 If User IS Logged In → Show User Button & Logout */}
            {isSignedIn && (
              <>
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
                  className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
