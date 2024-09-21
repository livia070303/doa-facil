import './header.css'

export function Header(){
    return(
        <>
        <div className="headerContainer">
        <div className='firstHeaderSection'>
        <div>LOGO</div>
        <div>
            <input 
            placeholder='Pesquise algo...'
            className='searchHeaderInput'
            />
            </div>
        </div>
        <div className='secondHeaderSection'>
            <span>Inicial</span>
            <span>Contato</span>
            <span>Sobre</span>
        </div>
        <div className='thirdHeaderSection'>
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