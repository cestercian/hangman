export default function ResultBar() {
    const styles = {
        container: {
            backgroundColor: "#10A95B",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#F9F4DA",
            borderRadius: "4px",
            marginBlock: "30px",
        },
        heading: {
            fontSize: "1.25rem",
            margin: "5px",
        },
        paragraph: {
            margin: "5px",
        }
    };

    return (
        <section id="resultBar" style={styles.container}>
            <h2 style={styles.heading}>You Win!</h2>
            <p style={styles.paragraph}>Well done! 🎉</p>
        </section>
    );
}
