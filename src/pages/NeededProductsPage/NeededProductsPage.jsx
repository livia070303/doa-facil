import { Link } from "react-router-dom";
import { HeaderAndFooter, HeaderAndFooterContainer } from "../../components/Layouts/HeaderAndFooter";
import { SectionHeader } from "../HomePage/components/SectionHeader";
import { MostSearchedItems } from "../HomePage/components/MostSearchedItems";





export function NeededProductsPage() {
  return (
    <>
    <HeaderAndFooter>
        <HeaderAndFooterContainer className="flex p-12 lg:p-24 flex-col gap-4">
            <div className='flex flex-col'>
                        <SectionHeader title="Produtos Requisitados" key="recentes"/>
                        <div className='flex flex-col items-center gap-4 lg:grid lg:grid-cols-4'>
                        <Link to="/product/1">
                        <MostSearchedItems/>
                        </Link>
                        <Link to="/product/2">
                        <MostSearchedItems/>
                        </Link>
                        <Link to="/product/3">
                        <MostSearchedItems/>
                        </Link>
                        <Link to="/product/4">
                        <MostSearchedItems/>
                        </Link>
                        </div>
            </div>
           
        </HeaderAndFooterContainer>
    </HeaderAndFooter>
    </>
  );
}   