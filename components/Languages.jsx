export default function Languages(props){

    const styles = {
        container: {
            backgroundColor: props.bgColor,
            color : props.color
        }
    }

    return(
        <div style={styles.container}>${props.name}</div>
    )
}