import mod from './agitSet.module.css'

function AgitSet (props) {
    return(
        <section>
             <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <g filter="url(#filter0_d_59_51)">
                        <circle cx="24" cy="20" r="14" fill="#514A7E"/>
                    </g>
                </svg>
                    <h3 className={mod.agit}>{props.i}</h3>
        </section>
    )
}

export default AgitSet