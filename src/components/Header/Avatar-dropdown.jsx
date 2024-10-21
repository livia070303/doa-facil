import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export function AvatarDropDown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <div className="relative">
            <button
                className="hidden lg:flex md:ml-6 xl:mr-4"
                onClick={toggleDropdown}
            >
                <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center border-b border-b-rose-950">
                    P
                </div>
            </button>

            {isDropdownOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-md z-50"
                >
                    <ul>
                        <li>
                            <Link
                                to="/user"
                                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                Perfil
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/settings"
                                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                Configurações
                            </Link>
                        </li>
                        <li>
                            <button
                                className="w-full text-left px-4 py-2 hover:bg-gray-200"
                                onClick={() => {
                                    // Lógica para logout
                                    setIsDropdownOpen(false);
                                }}
                            >
                                Sair
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
