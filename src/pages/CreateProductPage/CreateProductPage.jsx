import CheckboxInput from "../../components/CheckboxInput";
import { HeaderAndFooter, HeaderAndFooterContainer } from "../../components/Layouts/HeaderAndFooter";
import NumberInput from "../../components/NumberInput";
import SelectInput from "../../components/SelectInput";
import { UploadDocInput } from "../../components/UploadDocInput";

export function CreateProductPage(){

    const options = ["PP", "P", "M", "G", "GG"]

    return(
        <>
        <HeaderAndFooter>
        <HeaderAndFooterContainer className="flex p-12 lg:p-24 flex-col gap-4"> 
            <h1 className="font-poppins text-3xl">Cadastro de produto</h1>
            <div className="flex gap-12 flex-col border border-dashed border-pink p-6 rounded-lg">
                <div className="flex flex-col gap-12 lg:flex-row justify-between w-full">
                    <section className="flex flex-col gap-4 w-full">
                    <label htmlFor="name">Nome do produto*
                    <input type="text" id="name" className="p-2 w-full rounded-md border border-low-gray"/>
                    </label>
                    <label htmlFor="category">Categoria*
                    <input type="text" id="category" className="p-2 w-full rounded-md border border-low-gray"/>
                    </label>
                   </section>
                   <section className="w-full">
                    <div className="flex flex-col md:flex-row md:justify-between lg:justify-start w-full">

                    <label htmlFor="quantity" className=" flex flex-col items-center md:items-start">Quantidade*
                    <NumberInput id="quantity" className="p-2  justify-center rounded-md md:items-start md:justify-start "/>
                    </label>
                    <label htmlFor="footNum" className=" flex flex-col items-center md:justify-end md:items-end lg:items-start">Numeração (calçados)                
                    <NumberInput id="footNum" className="p-2 rounded-md justify-center md:justify-end lg:justify-start"/>
                    </label>
                    
                    </div>
                    <SelectInput id="size" className="p-2 w-full my-2" options={options}/>
                    <div className="flex flex-col w-full gap-4 my-4">
                        <span>
                        Estado de conservação*:
                        </span>
                        <div className="flex flex-col">
                        <label htmlFor="new" className="font-poppins flex items-center space-x-2">
                            <CheckboxInput label="Novo" id="new" />
                        </label>
                        <label htmlFor="used" className="font-poppins flex items-center space-x-2">
                        <CheckboxInput label="Usado" id="used" />

                        </label>
                        <label htmlFor="repair" className="font-poppins flex items-center space-x-2">
                        <CheckboxInput label="Necessita de reparo" id="repair" />
                        </label>
                    </div>
                    </div>
                   </section>
                </div>
                <div className=" flex flex-col items-center gap-4 md:grid md:grid-cols-2">
                    <UploadDocInput id="image" label="Upload de fotos do produto" />
                    <UploadDocInput id="image" label="Upload de fotos do produto" />
                    <UploadDocInput id="image" label="Upload de fotos do produto" />
                    <UploadDocInput id="image" label="Upload de fotos do produto" />
                    <UploadDocInput id="image" label="Upload de fotos do produto" />
                    <UploadDocInput id="image" label="Upload de fotos do produto" />
                </div>
                <section className="flex flex-col gap-4 w-full">
                    <textarea name="description" id="description" cols="30" rows="10" className="p-2 w-full rounded-md border bg-bege-100 border-low-gray resize-none"/>
                </section>
                <div className="w-full flex justify-end items-end gap-6">
                    <button className="py-4 w-[150px] lg:w-[10%] bg-vermelho-médio text-white rounded-md">Cancelar</button>
                    <button className="py-4 w-[150px] lg:w-[10%] bg-azul-claro text-white rounded-md">Salvar</button>
                </div>
            </div>
        </HeaderAndFooterContainer>
        </HeaderAndFooter>
        </>
    )
}