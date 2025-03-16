export default function ResultBar(props) {
    const styles = {
        winContainer: {
            backgroundColor: "#10A95B",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#F9F4DA",
            borderRadius: "4px",
            marginBlock: "30px",
        },
        lostContainer: {
            backgroundColor: "rgba(169,16,57,0.59)",
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

    const winResultBar =
        <section id="resultBar" style={styles.winContainer}>
            <h2 style={styles.heading}>You Win!</h2>
            <p style={styles.paragraph}>Well done! 🎉</p>
        </section>

    const lostResultBar =
        <section id="resultBar" style={styles.lostContainer}>
            <h2 style={styles.heading}>You Lost!</h2>
            <p style={styles.paragraph}>You lose! Better start learning Assembly 😭</p>
        </section>

    const resultBar = () => {
        if (props.status) {
            return lostResultBar
        }else{
            return winResultBar
        }
    }
    return (
        <>
            {resultBar()}
        </>
    );
}
