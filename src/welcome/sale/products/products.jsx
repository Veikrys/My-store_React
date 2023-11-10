import Mas from '../../../Likely/Mass'
import mod from './products.module.css'

function Products(props) {

    let productsMas = []

    function makeProducts (img, price, nPrice, desc, rating) {
        let products = {
            img: img,
            price: price,
            newPrice: nPrice,
            description: desc,
            rating: rating
        }

        productsMas.push(products)
    
    }

    // function addLike () {
    //     Mas.push(productsMas[props.i])
    //     let btn = document.getElementById("like")

    //     btn.style.fill = 'red'
    // }

    let url1 = 'https://s3-alpha-sig.figma.com/img/5b21/3ef4/f56a063d28060d567c5d5d0e37ac5400?Expires=1699833600&Signature=pRiG16rB-UafHPhDpBTiXbJZrzHgQh29-eTYon39IrUP2SYWN69GGsfwtFGnbTiBHXhV-Fthc0jwZNXTK1z2UA1nP80sgOhkcC7Y0UrmVNGHPo7JbReN1IC3QPss9-dnjlJHOkGSaccCzNbXGfsoj3FXI5eqgPmeBDGD7KMgsE0sPX~aYy09dgF6yAA9sKpH4Vy~9sZtddNDvSpOd3nBuKer3Hyc9e-7wjcw1H1O-8V~XpFF2gbFHJz0l5Pd3U8l4whC2qidt2pW~iDsajLf68qNKTyscaUHZBTikVZ1TJG6-9lkS0CkkR4pLHh3MHzG~47SY7z6XP-nhkF8pzdKmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    let url2 = 'https://s3-alpha-sig.figma.com/img/9fa9/889a/4c375dfbeb463b13d4834179104dd91e?Expires=1699833600&Signature=mvoOlInlf1014AXv7-sQxVobYArvBlKRQ7TSdxtqlbKDFXbSVNPoTiBkT8HdAMqK7WmaiJHlswu6XninqI6CHbLNmMBGRggfcPvwU1PjNMpZpHzIzPPXVZrv7ZlpWk3z9zD0Ux5AzTMmPuHEFTM8NXhpUf~EMaSjvwqYasjhtIgRlgb2B~6LZawoUQmDMxMBIhOEuVXyC03txJMUmgdl8gYT-l87jqWUvMvdn481myOZymi7ygHkNzuwhu4pQf57Z0aggEj0WPzJHOW9QLooO6RBboQmV8zTgBfSIJgXgN03f7EMIBbQA0OOUMbZmo8vhOYXuQqhVwu2qhc0fUE4cQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    let url3 =  'https://s3-alpha-sig.figma.com/img/8abb/6967/41e7576eb38892b87faa9dbeda636fd9?Expires=1699833600&Signature=kSgVz2RvcPdc7EVmOEXvtILvVNoi2c5L5o-dZ-JS9gesNPvV2HeIEJlxurhbRe57UPwRj6zl5AKIM2B8Xs1MG-L-iLqg~xZSBQ2~Zp7Dm9NhO3jXk6TvuPdWZf2gioOpo95rkdRRsvCia8E9w9d~RkeYPvXIM3uXjahZlwuhTlfCVVjgKoZk-3-Zh0VxxZSNULsIkagh-QYTel8G7DpM94WL3uyArmQvajx6YyuS6XNIpMtd5ub0~BDmA1z3NKoqSDIZtlZv2r9OdnIdfGbKSncQkcAsKX4R2TI-6nkIz8RnMP1OFUInPDq3OOQrJlPCKrveKZqR2sxGTCkWvhM7XA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    let url4 = 'https://s3-alpha-sig.figma.com/img/19c8/5465/c034a4a1dedda91df1c1c9f1cb33f403?Expires=1699833600&Signature=VEPexX1xHuLX6-K2i3HljttFLjFnphMVMNIkIqsBFbh8mEXV7XDdp-3M5E5-azc7gAisejjQCGB6NBVhts5Ws3lxKSDP0QLFIuO-NomBUkszIm-CWLWZwrzbDVInVSA8c9Ymsogzqo3y3s3LO9dLgTKRlSHEkoKg0cCnxwgt88G7sTgLF~6eNI0GhJ~u9COPOxSW6NPUPuU7eoncnevmOqf~gtYlt3FHuviMLmIpCukNyJ~j4lihfCem1eyUP4UBR~K8PC2yF7k~SPOJOISvL6OGNC1xkJV0m7J~wTAuKYYV0DOd3LZYZUVMjesXQOCuJ~TExg9~AP9p~hiXNliMMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

    makeProducts(url1, '3500.00', '2500.00$', 'Women skirt', 3)
    makeProducts(url2, '5690.00', '3200.00$', 'Black robe', 3)
    makeProducts(url3, '2200.00', '1800.00$', 'Night Randevu', 4)
    makeProducts(url4, '4400.00', '2200.00$', 'Spooky Beauty', 5)

    let b = []

    for (let n = 0; n < productsMas[props.i].rating; n++) {
           
        let a = (
            <div className={mod.star}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <g clip-path="url(#clip0_95_4201)">
                        <path d="M9.44473 4.661C9.54797 4.58409 9.62455 4.4768 9.66373 4.35417C9.70291 4.23154 9.70274 4.09972 9.66322 3.97719C9.62371 3.85467 9.54684 3.74759 9.44339 3.67095C9.33995 3.59432 9.21511 3.55199 9.08639 3.54988L6.58639 3.45544C6.5741 3.45459 6.56232 3.45021 6.55246 3.44281C6.5426 3.43542 6.53509 3.42534 6.53084 3.41377L5.66695 1.08044C5.62354 0.961729 5.54471 0.859223 5.44112 0.7868C5.33752 0.714378 5.21418 0.675537 5.08778 0.675537C4.96138 0.675537 4.83804 0.714378 4.73445 0.7868C4.63086 0.859223 4.55202 0.961729 4.50861 1.08044L3.6475 3.42211C3.64325 3.43367 3.63574 3.44376 3.62588 3.45115C3.61602 3.45854 3.60424 3.46293 3.59195 3.46377L1.09195 3.55822C0.963227 3.56032 0.838392 3.60266 0.734946 3.67929C0.6315 3.75592 0.554631 3.863 0.515117 3.98553C0.475603 4.10805 0.475426 4.23987 0.51461 4.3625C0.553795 4.48513 0.630375 4.59242 0.733615 4.66933L2.69473 6.211C2.70454 6.21872 2.71188 6.22915 2.71583 6.241C2.71978 6.25285 2.72017 6.26559 2.71695 6.27766L2.04195 8.66933C2.00697 8.79112 2.01036 8.92073 2.05165 9.04052C2.09295 9.16032 2.17014 9.26448 2.27274 9.33885C2.37533 9.41322 2.49835 9.45417 2.62505 9.45615C2.75174 9.45812 2.87597 9.42102 2.98084 9.34988L5.05306 7.961C5.06327 7.95395 5.07538 7.95017 5.08778 7.95017C5.10019 7.95017 5.1123 7.95395 5.1225 7.961L7.19473 9.34988C7.29817 9.42345 7.42196 9.46298 7.54889 9.46298C7.67583 9.46298 7.79961 9.42345 7.90306 9.34988C8.00568 9.27622 8.08295 9.17256 8.12424 9.05318C8.16553 8.93379 8.1688 8.80454 8.13362 8.68322L7.45306 6.28322C7.44945 6.27117 7.44965 6.2583 7.45363 6.24637C7.45761 6.23444 7.46517 6.22403 7.47528 6.21655L9.44473 4.661Z" fill="#514A7E"/>
                    </g>
                </svg>
            </div>
        )

        b.push(a);
    }

    return(

        <div className={mod.block}>
            <img className={mod.img} src = {productsMas[props.i].img}></img>
            <div className={mod.like}>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" id='like'>
                    <path d="M9.99977 18.0166C9.87702 18.0162 9.75785 17.9752 9.66088 17.8999C6.57199 15.4999 4.44421 13.4333 2.95532 11.3944C1.05532 8.78883 0.621986 6.38328 1.66643 4.24439C2.41087 2.71661 4.54976 1.46661 7.04976 2.19439C8.24173 2.53869 9.2817 3.27705 9.99977 4.28883C10.7178 3.27705 11.7578 2.53869 12.9498 2.19439C15.4442 1.47772 17.5887 2.71661 18.3331 4.24439C19.3775 6.38328 18.9442 8.78883 17.0442 11.3944C15.5553 13.4333 13.4275 15.4999 10.3387 17.8999C10.2417 17.9752 10.1225 18.0162 9.99977 18.0166ZM5.62754 3.09994C5.03268 3.07679 4.44275 3.21608 3.92107 3.50286C3.39938 3.78964 2.96565 4.21308 2.66643 4.72772C1.80532 6.49439 2.19421 8.46105 3.85532 10.7333C5.62064 13.0103 7.68777 15.0363 9.99977 16.7555C12.3114 15.038 14.3785 13.0139 16.1442 10.7388C17.8109 8.46105 18.1942 6.49439 17.3331 4.73328C16.7775 3.62217 15.1109 2.73883 13.2553 3.26105C12.6603 3.43689 12.1088 3.73534 11.6361 4.13721C11.1634 4.53907 10.7801 5.03545 10.5109 5.59439C10.469 5.69628 10.3978 5.78343 10.3063 5.84477C10.2148 5.9061 10.1071 5.93885 9.99699 5.93885C9.88683 5.93885 9.77916 5.9061 9.68766 5.84477C9.59616 5.78343 9.52495 5.69628 9.4831 5.59439C9.21586 5.03405 8.83322 4.53652 8.36026 4.1344C7.88729 3.73228 7.33468 3.43467 6.73865 3.26105C6.37753 3.15617 6.00359 3.10195 5.62754 3.09994Z" fill="#121212"/>
                </svg>
                </button>
            </div>
            <div className={mod.cart}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M13.8893 6.66669V5.0278C13.8893 4.51711 13.7887 4.01141 13.5933 3.53959C13.3979 3.06777 13.1114 2.63906 12.7503 2.27795C12.3892 1.91683 11.9605 1.63037 11.4886 1.43494C11.0168 1.2395 10.5111 1.13892 10.0004 1.13892C9.48974 1.13892 8.98404 1.2395 8.51222 1.43494C8.0404 1.63037 7.61169 1.91683 7.25057 2.27795C6.88946 2.63906 6.603 3.06777 6.40757 3.53959C6.21213 4.01141 6.11154 4.51711 6.11154 5.0278V8.91669C6.11154 9.06404 6.17008 9.20534 6.27426 9.30953C6.37845 9.41372 6.51976 9.47225 6.6671 9.47225C6.81444 9.47225 6.95575 9.41372 7.05994 9.30953C7.16412 9.20534 7.22266 9.06404 7.22266 8.91669V7.7778H11.6671V6.66669H7.22266V5.0278C7.22266 4.29109 7.51531 3.58455 8.03625 3.06362C8.55718 2.54269 9.26372 2.25003 10.0004 2.25003C10.7371 2.25003 11.4437 2.54269 11.9646 3.06362C12.4856 3.58455 12.7782 4.29109 12.7782 5.0278V8.88892C12.7782 9.03626 12.8367 9.17757 12.9409 9.28175C13.0451 9.38594 13.1864 9.44447 13.3338 9.44447C13.4811 9.44447 13.6224 9.38594 13.7266 9.28175C13.8308 9.17757 13.8893 9.03626 13.8893 8.88892V7.7778H16.6671V17.7778H3.33377V7.7778H5.00043V6.66669H2.22266V17.8278C2.22266 18.1092 2.33445 18.3791 2.53345 18.5781C2.73245 18.7771 3.00234 18.8889 3.28377 18.8889H16.7171C16.9985 18.8889 17.2684 18.7771 17.4674 18.5781C17.6664 18.3791 17.7782 18.1092 17.7782 17.8278V6.66669H13.8893Z" fill="#121212"/>
                </svg>
            </div>
            <div className={mod.price}>
                <p>{productsMas[props.i].price}</p>
                <div className={mod.line}></div>
            </div>
            <div className={mod.nprice}>
                <p>{productsMas[props.i].newPrice}</p>
            </div>
            <div className={mod.desc}>
                <p>{productsMas[props.i].description}</p>
            </div>
            <div className={mod.button}>
                <button>
                    <label className={mod.label}>More</label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none">
                        <path className={mod.svg} d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#121212"/>
                    </svg>
                </button>
            </div>
            <div className={mod.rating}>
                {b}
            </div>
        </div>

    )
}

export default Products