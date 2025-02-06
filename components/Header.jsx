export default function Header() {
    const styles = {
        container: {
            textAlign: "center",
        },
        heading: {
            fontSize: "1.25rem",
            fontWeight: 500,
            color: "#F9F4DA",
        },
        subheading: {
            fontSize: "0.875rem",
            maxWidth: "350px",
            color: "#8E8E8E",
            margin: "0 auto",
        }
    };

    return (
        <header style={styles.container}>
            <h1 style={styles.heading}>Assembly: Endgame</h1>
            <p style={styles.subheading}>
                Guess the word in under 8 attempts to keep the programming world safe from Assembly!
            </p>
        </header>
    );
}
