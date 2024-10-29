import { PropTypes } from 'prop-types'
import { useState } from 'react';
import { GrAttachment } from 'react-icons/gr';



export function UploadDocInput({ id, className, onFileSelect, label }) {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);  // Armazena o nome do arquivo no estado
            onFileSelect(id, file);
        }
    };

    return (
        <div className={`flex max-w-full flex-col ${className}`}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}*
            </label>
            <div className="mt-1 flex items-center ">
                <input
                    type="file"
                    id={id}
                    className="hidden"
                    onChange={handleFileChange}
                />
                <label htmlFor={id} className='items-center flex gap-4 p-2 rounded-tl-md rounded-bl-md border w-full h-12 cursor-pointer'>
                    <GrAttachment className='text-2xl text-azul-claro'/>
                    <span className={`font-poppins font-light ${fileName ? 'text-amber-600' : 'text-texto-infor'}`}>
                        {fileName || 'Arquivo'}  {/* Mostra o nome do arquivo ou "Arquivo" */}
                    </span>
                </label>
                <label
                    htmlFor={id}
                    className="rounded-tr-md rounded-br-md flex items-center justify-center cursor-pointer bg-azul-claro text-white w-[150px] h-12 px-4 border border-azul-claro"
                >
                    Ir
                </label>
                
            </div>
        </div>
    );
}

UploadDocInput.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};