import { PropTypes } from 'prop-types'
import { GrAttachment } from 'react-icons/gr';



export function UploadDocInput({ id, className, onChange, label }) {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        onChange(file);
        console.log(id)
    };

    

    return (
        <div className={`flex  flex-col ${className}`}>
           <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                {label}*
            </label>
                <div className="mt-1 flex items-center ">
                <input
                type="file"
                id="image"
                className="hidden"
                />
                <label htmlFor="image" className='items-center flex gap-4 p-2 rounded-tl-md rounded-bl-md border w-[300px] h-9'>
                    <GrAttachment className='text-2xl text-azul-claro'/>
                    <span className='font-poppins font-thin text-texto-infor'>Arquivo</span>
                </label>
                <label
                htmlFor="image"
                className="rounded-tr-md rounded-br-md flex items-center justify-center cursor-pointer bg-azul-claro text-white h-9 px-4 border border-azul-claro"
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