export default function (prop){
    return(
        <button onClick={prop.insert} className={prop.className}>{prop.name}</button>
    )
}