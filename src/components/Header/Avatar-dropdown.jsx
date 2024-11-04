import * as React from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useUser } from '../../hooks/useUser';

export function AvatarDropDown() {

    const { data } = useUser()

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
                            <button onClick={() => {
                                handleLogout()
                                setIsDropdownOpen(false)
                            }} className="w-full text-left px-4 py-2 hover:bg-gray-200">Sair</button>
                        </li>
                    </ul>
                </div>
            )
        }
        <button className="hidden lg:flex md:ml-6 xl:mr-4" onClick={handleOpenDropdown}>
        <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center border-b border-b-rose-950 overflow-hidden">
            {data?.user?.fotoPerfil ? (
            <img
                src={data.user.fotoPerfil}
                alt="Foto de Perfil"
                className="w-full h-full object-cover"
            />
            ) : (
            <span className="text-xl font-semibold text-gray-700">
                {data?.user.nomeCompleto?.split(' ').map((name) => name[0]).join('')}
            </span>
            )}
        </div>
        </button>

        </>
    )
}
