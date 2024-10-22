import * as React from 'react'
import { Link } from 'react-router-dom';

export function AvatarDropDown(){


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

    return(
        <>
        {
            isDropdownOpen && (
                <div ref={dropdownRef} className="absolute right-8 top-[4.6rem] bg-white rounded-md shadow-md">
                    <ul>
                        <li>
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-200">Perfil</button>
                        </li>
                        <li>
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-200">Configurações</button>
                        </li>
                        <li>
                            <Link to="/login" className="">
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-200">Sair</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )
        }
        <button className="hidden lg:flex md:ml-6 xl:mr-4" onClick={() => handleOpenDropdown()}>
            <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center border-b border-b-rose-950">
                P
            </div>
        </button>
        </>
    )
}