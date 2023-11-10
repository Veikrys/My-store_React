import { NavLink } from 'react-router-dom'
import mod from './welcome.module.css'

function Welcome2 () {
    return(
        <section>
            <div className={mod.img1}>
                <img src="https://s3-alpha-sig.figma.com/img/42c4/bdbf/4b86a04a4cbff271c4598a5430cf7f80?Expires=1699833600&Signature=HbpqwTxTRAL5~sXNsoZbAwIBf6t4nn0thwXk0ri6ic45IMcf-oeMAqznDJ158n8c1O2B6mROwGPafvJ~Tw~2e7It5vq6hqqxcPzRh0Ou34--DHggTQqCKX~onfVKXaksYnOnZyLMXjqCLDPmaNQmg0grfRlrCC33x6vNJdv~8Oo70KjWu46Ogiw1bYW-x1NRhIx6zSB5rZvOBXUCpyxL~YlYky3lZvGzJNLfzCxAa2aL8XRrs~MuIEPcG1HVThaLQs~HeZ5vd3LacVzwsqI8k-EEv7OQFbaYd~B0QK0mxv2Plmu14E-GnSXDWx0qPkT49bzQVIak6kTKT1aGr4IYEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </div>
            <div className={mod.img2}>
                <img src='https://s3-alpha-sig.figma.com/img/0647/6db5/191da1fcab0076e13838411f488f5042?Expires=1699833600&Signature=oZDBgKLOOAm0WGYXykZOIT5mNFPBmEkAQrdgVrjRxHsRq86Pijbu5nGeGE73jaLqYmZKsqcDfOanDTXftKu~18k7V5BRR6fF3sStyPs6KmsD2nPJwWsCMvnc3FfYLdZswI9PnzLbMrZ0MyontVd-5bDyKKHjZ~9k-8xaoxIowIpI30eBs3IIfhYD8Bd44xxvzbB1ZRGGGMj6-KlaDNyjwuN~f8xlGXNDOcH50vJyc1mwP1awfFAdy8Hv9j0cL7QkzoCjBcu2hI39zKvE1aKY-H24e2v~F7b5Fx6ltLAoR172ljzqGAZZOM7cCS66Zd8Yw3GKnVkiezI-PcMycOKXlg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
            </div>
            <div className={mod.title}>
                <h1 className={mod.titleText}>Welcome to <span>Cocteil!</span></h1>
            </div>
            <div className={mod.toCatalog}>
                <NavLink to = '/catalog'><button>
                    <label className={mod.toCatalogText}>Catalog</label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="8" viewBox="0 0 80 8" fill="none" className={mod.toCatalogArrow}>
                        <path d="M79.3536 4.35355C79.5488 4.15829 79.5488 3.84171 79.3536 3.64645L76.1716 0.464466C75.9763 0.269204 75.6597 0.269204 75.4645 0.464466C75.2692 0.659728 75.2692 0.976311 75.4645 1.17157L78.2929 4L75.4645 6.82843C75.2692 7.02369 75.2692 7.34027 75.4645 7.53553C75.6597 7.7308 75.9763 7.7308 76.1716 7.53553L79.3536 4.35355ZM0 4.5H79V3.5H0V4.5Z" />
                    </svg>
                </button></NavLink>
            </div>
            <div className={mod.agitka}>
                <div>
                    <h3 className={mod.h3_1}>Qick!</h3>
                </div>
                <div>
                    <h3 className={mod.h3_2}>Best!</h3>
                </div>
                <div>
                    <h3 className={mod.h3_3}>Comfort!</h3>
                </div>
            </div>
        </section>
    )
}

export default Welcome2
