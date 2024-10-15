import { LeftMenuItem } from "./LeftMenuItems";

const dataFilters = [
    {
        itemName: "Moda Feminina"
    },
    {
        itemName: "Moda Masculina"
    },
    {
        itemName: "Moda Infantil"
    },
    {
        itemName: "Calçados"
    },
    {
        itemName: "Decoração"
    },
    {
        itemName: "Eletrodomésticos"
    },
    {
        itemName: "Eletro"
    },
    {
        itemName: "Informática"
    }
    
]

export function LeftMenuFilters(){
    return(
        <>
        <div className="hidden md:flex w-80 min-h-[84.5vh] border-r items-start p-12 flex-col gap-3">
            {dataFilters.map((item) => (
                <LeftMenuItem itemName={item.itemName} key={item.itemName}/>
            ))}
        </div>
        </>
    )
}