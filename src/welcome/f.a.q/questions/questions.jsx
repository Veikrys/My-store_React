import mod from "./questions.module.css"

function Questions(props) {


    function Acc () {

            const svg = document.getElementById("svg" + props.n);
            if (svg.style.transform === "rotate(45deg)") {
                svg.style.transform = "none";
            } else {
                svg.style.transform = "rotate(45deg)"
            }

            // const main = document.getElementById("main" + props.n);
            // if (main.style.border === "none") {
            //     main.style.border = "solid";
            // } else {
            //     main.style.border = "none";
            // }

            const panel = document.getElementById("panel" + props.n);
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
    };
    


    return (
        <div className={mod.ques} id={("main" + props.n)}>
            {/* <h3>{props.i}</h3>
            <button className={mod.accordion}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.6666 9.4445H10.5555V3.33339C10.5555 3.18605 10.497 3.04474 10.3928 2.94055C10.2886 2.83636 10.1473 2.77783 9.99993 2.77783C9.85259 2.77783 9.71128 2.83636 9.60709 2.94055C9.50291 3.04474 9.44437 3.18605 9.44437 3.33339V9.4445H3.33326C3.18592 9.4445 3.04461 9.50303 2.94043 9.60722C2.83624 9.7114 2.77771 9.85271 2.77771 10.0001C2.77497 10.0723 2.78773 10.1442 2.81515 10.2111C2.84257 10.2779 2.88399 10.3381 2.93664 10.3876C2.98929 10.4371 3.05193 10.4747 3.12035 10.4979C3.18876 10.5212 3.26137 10.5295 3.33326 10.5223H9.44437V16.6667C9.44437 16.8141 9.50291 16.9554 9.60709 17.0596C9.71128 17.1637 9.85259 17.2223 9.99993 17.2223C10.1473 17.2223 10.2886 17.1637 10.3928 17.0596C10.497 16.9554 10.5555 16.8141 10.5555 16.6667V10.5556H16.6666C16.8139 10.5556 16.9552 10.4971 17.0594 10.3929C17.1636 10.2887 17.2222 10.1474 17.2222 10.0001C17.2222 9.85271 17.1636 9.7114 17.0594 9.60722C16.9552 9.50303 16.8139 9.4445 16.6666 9.4445Z" fill="#514A7E"/>
            </svg>
            </button> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" id={("svg" + props.n)}>
                <path d="M16.6666 9.4445H10.5555V3.33339C10.5555 3.18605 10.497 3.04474 10.3928 2.94055C10.2886 2.83636 10.1473 2.77783 9.99993 2.77783C9.85259 2.77783 9.71128 2.83636 9.60709 2.94055C9.50291 3.04474 9.44437 3.18605 9.44437 3.33339V9.4445H3.33326C3.18592 9.4445 3.04461 9.50303 2.94043 9.60722C2.83624 9.7114 2.77771 9.85271 2.77771 10.0001C2.77497 10.0723 2.78773 10.1442 2.81515 10.2111C2.84257 10.2779 2.88399 10.3381 2.93664 10.3876C2.98929 10.4371 3.05193 10.4747 3.12035 10.4979C3.18876 10.5212 3.26137 10.5295 3.33326 10.5223H9.44437V16.6667C9.44437 16.8141 9.50291 16.9554 9.60709 17.0596C9.71128 17.1637 9.85259 17.2223 9.99993 17.2223C10.1473 17.2223 10.2886 17.1637 10.3928 17.0596C10.497 16.9554 10.5555 16.8141 10.5555 16.6667V10.5556H16.6666C16.8139 10.5556 16.9552 10.4971 17.0594 10.3929C17.1636 10.2887 17.2222 10.1474 17.2222 10.0001C17.2222 9.85271 17.1636 9.7114 17.0594 9.60722C16.9552 9.50303 16.8139 9.4445 16.6666 9.4445Z" fill="#514A7E"/>
            </svg>
            <button className={mod.accordion} onClick={Acc}>{props.i}</button>
            <div className={mod.panel} id={("panel" + props.n)}>
                <p>{props.m}</p>
            </div>
        </div>
    )
}

export default Questions