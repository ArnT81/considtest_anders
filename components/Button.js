//STYLES
import styles from '../styles/button.module.css';

/* AVAILABLE PROPS
function
text
width
color
borderColor
position: left, center, right
*/

function Button(props) {
    // VARIABLES AND STATES
    let arrange;

    switch (props.position) {
        case "left":
            arrange = "flex-start"
            break;
        case "center":
            arrange = "center"
            break;
        case "right":
            arrange = "flex-end"
            break;
        default:
            arrange = "flex-start"
            break;
    }


    return (
        <div
            onClick={props.function}
            className={styles.button}
            style={{
                width: props.width,
                color: props.color,
                border: `2px outset ${props.borderColor}`,
                alignSelf: arrange
            }}
        >
            {props.text}
        </div>
    )
}

export default Button;