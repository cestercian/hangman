import { useEffect, useState } from "react";
import { languages } from "../langList.jsx";
import getFarewellText from "../utlis.jsx";

export default function ResultBar(props) {
    const baseStyles = {
        color: "#F9F4DA",
        borderRadius: "4px",
        marginBlock: "30px",
        minHeight: "60px",
        transition: "opacity 0.5s ease-in-out, background-color 0.5s ease-in-out", // Smooth fade-in and color transition
    };

    const styles = {
        winContainer: {
            ...baseStyles,
            backgroundColor: "#10A95B",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        lostContainer: {
            ...baseStyles,
            backgroundColor: "rgba(169,16,57,0.59)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        emptyContainer: { ...baseStyles, backgroundColor: "transparent", opacity: 0 },
        losingContainer: {
            ...baseStyles,
            backgroundColor: "#7a5ea7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80px",
        },
        heading: { fontSize: "1.5rem", margin: "5px" },
        paragraph: { fontSize: "1.2rem", margin: "0", textAlign: "center" },
    };

    const [opacity, setOpacity] = useState(0);
    const [losingMsg, setLosingMsg] = useState("");

    useEffect(() => {
        if (props.lostLangIndex > 0) {
            setLosingMsg(getFarewellText(languages[props.lostLangIndex - 1].name));
        }
    }, [props.lostLangIndex]);

    useEffect(() => {
        // Reset opacity for smooth animation every time `status` or `losingMsg` changes
        setOpacity(0);
        setTimeout(() => setOpacity(1), 50);
    }, [props.status, losingMsg]); // This ensures animation on every update

    return (
        <section
            id="resultBar"
            style={{
                ...(props.status === 2 ? styles.lostContainer
                    : props.status === 1 ? styles.winContainer
                        : props.status === 3 ? styles.losingContainer
                            : styles.emptyContainer),
                opacity,
            }}
        >
            {props.status === 3 ? (
                <p key={losingMsg} style={styles.paragraph}>{losingMsg}</p> // Key forces re-render when text changes
            ) : (
                <>
                    <h2 style={styles.heading}>
                        {props.status === 1 ? "You Win!" : props.status === 2 ? "You Lost!" : "\u200B"}
                    </h2>
                    <p style={styles.paragraph}>
                        {props.status === 1 ? "Well done! 🎉"
                            : props.status === 2 ? "You lose! Better start learning Assembly 😭"
                                : "\u200B"}
                    </p>
                </>
            )}
        </section>
    );
}
