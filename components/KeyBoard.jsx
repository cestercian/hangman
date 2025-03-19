export default function KeyBoard(prop){
    return(
        <button disabled={prop.isDisable} onClick={prop.insert} className={prop.className}>
            {prop.name}
        </button>
    )
}