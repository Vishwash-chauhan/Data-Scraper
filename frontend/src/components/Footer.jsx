import React from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
  return (
    <footer class="flex flex-col items-center justify-around w-full py-16 text-sm bg-slate-50 text-gray-800/70">
    <p class="mt-4 text-center">Copyright © 2025 <a>VyaapaarNiti</a>. All rights reservered.</p>
    <div class="flex items-center gap-4 mt-6">
        <a onClick={()=> navigate('/terms')} class="cursor-pointer font-medium text-gray-800 hover:text-black transition-all">
            Terms & Conditions
        </a>
        <div class="h-4 w-px bg-black/20"></div>
        <a onClick={()=> navigate('/pricing')} class="font-medium text-gray-800 hover:text-black transition-all">
            Pricing Plans
        </a>
        <div class="h-4 w-px bg-black/20"></div>
        <a onClick={()=> navigate('/refund-policy')} class="font-medium text-gray-800 hover:text-black transition-all">
            Refund Policy
        </a>
    </div>
</footer>
  )
}

export default Footer