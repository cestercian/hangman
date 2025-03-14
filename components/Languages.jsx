export default function Languages(props) {
    const styles = {
        backgroundColor: props.bgColor,
        color: props.color,
    };

    return (
        <span
            className={props.className}
            style={styles}
        >
            {props.name}
        </span>
    );
}
