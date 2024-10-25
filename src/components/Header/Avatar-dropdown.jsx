import * as React from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export function AvatarDropDown() {


    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const dropdownRef = React.useRef(null)

    const handleOpenDropdown = () => {
        setIsDropdownOpen(true);
    }
    const handleCloseDropdown = () => {
        setIsDropdownOpen(false);
    }

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                handleCloseDropdown();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const { handleLogout } = React.useContext(AuthContext)

    return (
        <>
            {
                isDropdownOpen && (
                    <div ref={dropdownRef} className="absolute right-8 top-[4.6rem] bg-white rounded-md shadow-md">
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
                                <button onClick={() => {
                                    handleLogout()
                                    setIsDropdownOpen(false)
                                }} className="w-full text-left px-4 py-2 hover:bg-gray-200">Sair</button>
                            </li>
                        </ul>
                    </div>
                )
            }
            <button className="hidden lg:flex md:ml-6 xl:mr-4 transition-all duration-200 ease-in-out transform hover:scale-105 group" onClick={() => handleOpenDropdown()}>
                <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center ring-2 ring-transparent group-hover:ring-white">
                    <img src="/avatardayelle.png" alt="Foto de Perfil" className="w-full h-full rounded-full object-cover" />
                </div>
            </button>
        </>
    )
}
