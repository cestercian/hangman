export default function ResultBar({ status }) {
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

    return (
        <section
            id="resultBar"
            style={
                status === 2 ? styles.lostContainer :
                    status === 1 ? styles.winContainer :
                        styles.emptyContainer
            }
        >
            <h2 style={styles.heading}>
                {status === 1 ? "You Win!" : status === 2 ? "You Lost!" : "\u200B"}
            </h2>
            <p style={styles.paragraph}>
                {status === 1 ? "Well done! 🎉" :
                    status === 2 ? "You lose! Better start learning Assembly 😭" :
                        "\u200B"}
            </p>
        </section>
    );
}
