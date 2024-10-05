import { HeaderAndFooter, HeaderAndFooterContainer } from "../../components/Layouts/HeaderAndFooter";
import NumberInput from "../../components/NumberInput";
import SelectInput from "../../components/SelectInput";




export function CreateProductPage(){

    const options = ["PP", "P", "M", "G", "GG"]

    return(
        <>
        <HeaderAndFooter>
        <HeaderAndFooterContainer className="flex p-12 lg:p-24 flex-col gap-4"> 
            <h1 className="font-poppins text-3xl">Cadastro de produto</h1>
            <div className="flex gap-12 flex-col lg:flex-row border border-dashed border-pink p-6 rounded-lg">
                <div className="flex justify-between w-full">
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
                    <SelectInput id="size" className="p-2 w-full rounded-md border border-low-gray" options={options}/>
                   </section>
                </div>
            </div>
        </HeaderAndFooterContainer>
        </HeaderAndFooter>
        </>
    )
}