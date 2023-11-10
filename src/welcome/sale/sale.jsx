import mod from './sale.module.css'
import Products from './products/products'

function Sale () {
    return(
        <section>
            <div className={mod.title3}>
                <h2>Hurry up to buy on <span>Sale!</span></h2>
            </div>
            <div className={mod.sale}>
                <div className={mod.pr1}>
                    <Products i = {0} />
                </div>
                <div className={mod.pr2}>
                    <Products i = {1} />
                </div>
                <div className={mod.pr3}>
                    <Products i = {2} />
                </div>
                <div className={mod.pr4}>
                    <Products i = {3} />
                </div>
            </div>
        </section>
    )
}

export default Sale