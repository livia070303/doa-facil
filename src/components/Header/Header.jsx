
export function Header(){
    return(
        <>
        <div className="border-b flex justify-between  bg-gradient-to-r from-azul-claro to-vermelho-médio p-4 items-center">
        <div className=''>
        <div>LOGO</div>
        <div>
            <input 
            placeholder='Pesquise algo...'
            className=''
            />
            </div>
        </div>
        <div className=''>
            <span>Inicial</span>
            <span>Contato</span>
            <span>Sobre</span>
        </div>
        <div className=''>
            <div>
            <span>fav</span>
            <span>car</span>
            </div>
            <div>Icon</div>
        </div>

        </div>
        </>
    )
}