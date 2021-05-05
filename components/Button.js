//STYLES
import styles from '../styles/button.module.css';

/** ___ AVAILABLE PROPS ___
*   function
*   text
*   width
*   color
*   background
*   borderColor
*   position: left, center, right
**/

const Button = (props) => {
    let arrange;

    //FUNCTIONS
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
                background: props.background,
                border: `2px outset ${props.borderColor}`,
                alignSelf: arrange
            }}
        >
            {props.text}
        </div>
    )
}

export default Button;