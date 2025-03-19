export default function WordDisplay(prop) {
    return(
        <span className={prop.showLetter}>{prop.name}</span>
    )
}