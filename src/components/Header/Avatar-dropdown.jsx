import * as React from 'react'

export function AvatarDropDown(){


    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const handleOpenDropdown = () => {
        setIsDropdownOpen(true);
        console.log('teste')
    }
    const handleCloseDropdown = () => {
        setIsDropdownOpen(false);
    }

    return(
        <>
        {
            isDropdownOpen && (
                <div className="absolute right-0 top-12 bg-white rounded-md shadow-md">
                    <ul>
                        <li>
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-200">Perfil</button>
                        </li>
                        <li>
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-200">Configurações</button>
                        </li>
                        <li>
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-200">Sair</button>
                        </li>
                    </ul>
                </div>
            )
        }
        <button className="hidden lg:flex md:ml-6 xl:mr-4" onClick={() => handleOpenDropdown}>
            <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center border-b border-b-rose-950">
                P
            </div>
        </button>
        </>
    )
}