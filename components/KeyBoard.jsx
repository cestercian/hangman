export default function KeyBoard(prop){
    return(
        <button onClick={prop.insert} className={prop.className}>
            {prop.name}
        </button>
    )
}