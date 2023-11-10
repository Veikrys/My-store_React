import mod from './input.module.css'

function Input (props) {
    return (
        <section>
             <div className= {mod.input}>
                <input placeholder={props.i} ></input>
            </div>
        </section>
    )
}

export default Input
