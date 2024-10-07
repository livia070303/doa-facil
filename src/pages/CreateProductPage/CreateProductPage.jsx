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
                <div className="flex flex-col lg:flex-row justify-between w-full">
                    <section className="flex flex-col gap-4">
                    <label htmlFor="name">Nome do produto*
                    <input type="text" id="name" className="p-2 w-full rounded-md border border-low-gray"/>
                    </label>
                    <label htmlFor="category">Categoria*
                    <input type="text" id="category" className="p-2 w-full rounded-md border border-low-gray"/>
                    </label>
                   </section>
                   <section>
                    <div className="flex">

                    <label htmlFor="quantity">Quantidade*
                    <NumberInput id="quantity" className="p-2 w-full rounded-md "/>
                    </label>
                    <label htmlFor="footNum">Numeração (calçados)                
                    <NumberInput id="footNum" className="p-2 w-full rounded-md "/>
                    </label>
                    </div>
                    <SelectInput id="size" className="p-2 w-full " options={options}/>
                    <div className="flex w-full gap-4">
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
                <div className="w-full flex flex-col lg:grid lg:grid-cols-2">
                    <UploadDocInput id="image" label="Upload de fotos do produto" />
                    <UploadDocInput id="image" label="Upload de fotos do produto" />
                    <UploadDocInput id="image" label="Upload de fotos do produto" />
                    <UploadDocInput id="image" label="Upload de fotos do produto" />
                    <UploadDocInput id="image" label="Upload de fotos do produto" />
                    <UploadDocInput id="image" label="Upload de fotos do produto" />
                </div>
            </div>
        </HeaderAndFooterContainer>
        </HeaderAndFooter>
        </>
    )
}