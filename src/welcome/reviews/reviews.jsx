import mod from './reviews.module.css'
import Reviews from './review/reviews'

function Reviewss () {

    function Scroll () {
        const rev1 = document.getElementById("rev1");
        const rev2 = document.getElementById("rev2");
        const rev3 = document.getElementById("rev3");
        const scroll = document.getElementById("scroll");

        if (rev3.style.display == 'block') {
            rev3.style.display = 'none'
            rev1.style.display = 'block'
            rev2.style.display = 'block'

            scroll.style.transform = 'rotate(0deg)'
        } else {
            rev3.style.display = 'block'
            rev1.style.display = 'none'
            rev2.style.display = 'none'

            scroll.style.transform = 'rotate(180deg)'
        }
    }

    return(
        <section>
            <div className={mod.title4}>
                <h2> <span>Reviews</span> from our customers</h2>
            </div>
            <div>
            <button className={mod.scroll} onClick={Scroll} id = 'scroll'>
            <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
                <circle cx="46" cy="46" r="45.5" stroke="#514A7E"/>
                <path d="M65.159 47.8619C65.3543 47.6666 65.3543 47.35 65.159 47.1547L61.9771 43.9728C61.7818 43.7775 61.4652 43.7775 61.27 43.9728C61.0747 44.168 61.0747 44.4846 61.27 44.6799L64.0984 47.5083L61.27 50.3367C61.0747 50.532 61.0747 50.8486 61.27 51.0438C61.4652 51.2391 61.7818 51.2391 61.9771 51.0438L65.159 47.8619ZM27.1475 48.0083H64.8055V47.0083H27.1475V48.0083Z" fill="#514A7E"/>
            </svg>
            </button>
            </div>
            <div className={mod.reviews}>
                <div className={mod.rev1} id='rev1'>
                    <Reviews i = {0} />
                </div>
                <div className={mod.rev2} id='rev2'>
                    <Reviews i = {1} />
                </div>
                <div className={mod.rev3} id='rev3'>
                    <Reviews i = {2} />
                </div>
            </div>
            <div>
            <button className={mod.add}>Add review</button>
            </div>
        </section>
    )
}

export default Reviewss