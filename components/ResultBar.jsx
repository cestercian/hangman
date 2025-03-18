import {languages} from "../langList.jsx";
import getFarewellText from "../utlis.jsx";

export default function ResultBar( props ) {
    const baseStyles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#F9F4DA",
        borderRadius: "4px",
        marginBlock: "30px",
        minHeight: "60px",
        transition: "opacity 0.3s ease-in-out",
    };

    const styles = {
        winContainer: { ...baseStyles, backgroundColor: "#10A95B", opacity: 1 },
        lostContainer: { ...baseStyles, backgroundColor: "rgba(169,16,57,0.59)", opacity: 1 },
        emptyContainer: { ...baseStyles, backgroundColor: "transparent", opacity: 0 },
        heading: { fontSize: "1.25rem", margin: "5px" },
        paragraph: { margin: "5px" },
    };

    //console.log(languages[props.lostLangIndex===0?return:props.lostLangIndex].name)

    console.log(props.lostLangIndex)
    let lostl = 0
    if (props.lostLangIndex < lostl) {
        console.log(getFarewellText(languages[props.lostLangIndex - 1].name));
        ++lostl
    }
    console.log(lostl)

    return (
        <section
            id="resultBar"
            style={
                props.status === 2 ? styles.lostContainer :
                    props.status === 1 ? styles.winContainer :
                        props.status.emptyContainer
            }
        >
            <h2 style={styles.heading}>
                {props.status === 1 ? "You Win!" : props.status === 2 ? "You Lost!" : "\u200B"}
            </h2>
            <p style={styles.paragraph}>
                {props.status === 1 ? "Well done! 🎉" :
                    props.status === 2 ? "You lose! Better start learning Assembly 😭" :
                        "\u200B"}
            </p>
        </section>
    );
}
