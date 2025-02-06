export default function Languages(props){

    const styles = {
        container: {
            backgroundColor: props.bgColor,
            color : props.color,
        }
    }

    return(
        <span
            className="chip"
            style={styles.container}
            key={props.name}
        >
            {props.name}
        </span>
    )
}