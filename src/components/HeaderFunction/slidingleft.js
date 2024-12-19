'use client';
import { Menu } from 'lucide-react';
import React, { useState } from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import Link from 'next/link'; // Nhập Link từ next/link

const SlidingLeft = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id="slidingLeft">
            <button 
                onClick={() => setIsOpen(true)} 
                className="p-2 border-white text-white rounded-full border border-transparent transition duration-300 bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <Menu size={16} />
            </button>
            <SlidingPane 
                isOpen={isOpen} 
                from="left"  
                onRequestClose={() => setIsOpen(false)}  
                width="250px"  
                hideHeader
                className="bg-gray-900 text-white shadow-xl custom-class rounded-lg" 
                overlayClassName="bg-black bg-opacity-50" 
            >
                <nav className="text-xl font-bold border-b border-blue-600 p-4"><Link href="/">Trang chủ</Link></nav>
                <ul className="flex flex-col space-y-2 p-4">
                    <li>
                        <Link href="/sua-may-lanh" className="block p-3 rounded-lg bg-gray-800 border-l-4 border-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                            Sửa máy lạnh
                        </Link>
                    </li>
                    <li>
                        <Link href="/ve-sinh-may-lanh" className="block p-3 rounded-lg bg-gray-800 border-l-4 border-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                            Vệ sinh máy lạnh
                        </Link>
                    </li>
                    <li>
                        <Link href="/sua-ti-vi" className="block p-3 rounded-lg bg-gray-800 border-l-4 border-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                            Sửa ti vi
                        </Link>
                    </li>
                    <li>
                        <Link href="/sua-tu-lanh" className="block p-3 rounded-lg bg-gray-800 border-l-4 border-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                            Sửa tủ lạnh
                        </Link>
                    </li>
                    <li>
                        <Link href="/sua-may-giat" className="block p-3 rounded-lg bg-gray-800 border-l-4 border-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                            Sửa máy giặt
                        </Link>
                    </li>
                    <li>
                        <Link href="/sua-bep-tu" className="block p-3 rounded-lg bg-gray-800 border-l-4 border-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                            Sửa bếp từ
                        </Link>
                    </li>
                </ul>
            </SlidingPane>
        </div>
    );
};

export default SlidingLeft;
