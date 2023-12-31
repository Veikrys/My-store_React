import mod from './agitka.module.css'
import AgitSet from './agitSet/agitSet'

function Agit () {

    function toUp () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener("scroll", function () {
        const backToTop = document.getElementById("back-to-top");

        if (window.pageYOffset > 250 && window.pageYOffset < 2600) {
          backToTop.style.display = "block";
        } else {
          backToTop.style.display = "none";
        }
      });

    return(
        <section>
            <div className={mod.ellipse}>
            </div>
            <div className={mod.title2}>
                <h2 className={mod.titleText2}>Why choose us?</h2>
            </div>
            <div className={mod.agitka2}>
            <div className={mod.agitSet1}>
                <AgitSet i = 'Discounts for regular customers from 5%' />
            </div>
                <div className={mod.agitSet2}>
                <AgitSet i = 'We offer the most favorable prices' />
                </div>
                <div className={mod.agitSet3}>
                <AgitSet i = 'Possibility of delivery to any city of Belarus' />
                </div>
                <div className={mod.agitSet4}>
                <AgitSet i = 'Our customers are always satisfied' />
                </div>
                <div className={mod.agitSet5}>
                <AgitSet i = 'Points of delivery of orders near the house' />
                </div>
            </div>
            <div className={mod.toUp} id="back-to-top">
                <button onClick={toUp}>
                <svg className={mod.toUpbtn} xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
                        <path className={mod.toUpImg} d="M46.3536 28.6464C46.1583 28.4512 45.8417 28.4512 45.6464 28.6464L42.4645 31.8284C42.2692 32.0237 42.2692 32.3403 42.4645 32.5355C42.6597 32.7308 42.9763 32.7308 43.1716 32.5355L46 29.7071L48.8284 32.5355C49.0237 32.7308 49.3403 32.7308 49.5355 32.5355C49.7308 32.3403 49.7308 32.0237 49.5355 31.8284L46.3536 28.6464ZM46.5 55L46.5 29L45.5 29L45.5 55L46.5 55Z" fill="#FFFDF5"/>
                </svg>
                </button>
            </div>
            <div className={mod.toMessage}>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path className={mod.msgImg} d="M18 2.5C9.18 2.5 2 8.78 2 16.5C2 24.22 9.18 30.5 18 30.5C19.6501 30.4981 21.2922 30.2693 22.88 29.82L28.41 33.34C28.561 33.4369 28.7352 33.4913 28.9145 33.4977C29.0937 33.5041 29.2714 33.4621 29.4289 33.3762C29.5863 33.2903 29.7178 33.1637 29.8095 33.0095C29.9012 32.8554 29.9497 32.6794 29.95 32.5V25.77C31.2012 24.5697 32.1997 23.1312 32.8867 21.5392C33.5736 19.9472 33.9352 18.2338 33.95 16.5C34 8.78 26.82 2.5 18 2.5ZM28.29 24.61C28.1895 24.7032 28.1092 24.8162 28.0541 24.9417C27.9991 25.0673 27.9704 25.2029 27.97 25.34V30.68L23.59 27.89C23.4678 27.8128 23.3304 27.7629 23.1871 27.744C23.0438 27.725 22.8981 27.7373 22.76 27.78C21.2187 28.2587 19.6139 28.5014 18 28.5C10.28 28.5 4 23.12 4 16.5C4 9.88 10.28 4.5 18 4.5C25.72 4.5 32 9.88 32 16.5C31.9772 18.0351 31.6356 19.5487 30.997 20.9448C30.3583 22.3408 29.4365 23.589 28.29 24.61Z" fill="#FFFDF5"/>
                    <path className={mod.msgImg} d="M25 15.5H11C10.7348 15.5 10.4804 15.6054 10.2929 15.7929C10.1054 15.9804 10 16.2348 10 16.5C10 16.7652 10.1054 17.0196 10.2929 17.2071C10.4804 17.3946 10.7348 17.5 11 17.5H25C25.2652 17.5 25.5196 17.3946 25.7071 17.2071C25.8946 17.0196 26 16.7652 26 16.5C26 16.2348 25.8946 15.9804 25.7071 15.7929C25.5196 15.6054 25.2652 15.5 25 15.5Z" fill="#FFFDF5"/>
                    <path className={mod.msgImg} d="M21.75 20.5H14.25C13.9848 20.5 13.7304 20.6054 13.5429 20.7929C13.3554 20.9804 13.25 21.2348 13.25 21.5C13.25 21.7652 13.3554 22.0196 13.5429 22.2071C13.7304 22.3946 13.9848 22.5 14.25 22.5H21.75C22.0152 22.5 22.2696 22.3946 22.4571 22.2071C22.6446 22.0196 22.75 21.7652 22.75 21.5C22.75 21.2348 22.6446 20.9804 22.4571 20.7929C22.2696 20.6054 22.0152 20.5 21.75 20.5Z" fill="#FFFDF5"/>
                    <path className={mod.msgImg} d="M11.2803 12.5H24.7203C24.9855 12.5 25.2398 12.3946 25.4274 12.2071C25.6149 12.0196 25.7203 11.7652 25.7203 11.5C25.7203 11.2348 25.6149 10.9804 25.4274 10.7929C25.2398 10.6054 24.9855 10.5 24.7203 10.5H11.2803C11.0151 10.5 10.7607 10.6054 10.5732 10.7929C10.3856 10.9804 10.2803 11.2348 10.2803 11.5C10.2803 11.7652 10.3856 12.0196 10.5732 12.2071C10.7607 12.3946 11.0151 12.5 11.2803 12.5Z" fill="#FFFDF5"/>
                </svg>
                </button>
            </div>
        </section>
    )
}

export default Agit
