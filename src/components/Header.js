import PropTypes from "prop-types"
import Button from "./Button"
import { useLocation } from "react-router-dom"

const Header = ({title,onAdd,showAdd}) => {
    const location = useLocation()
    //const onClick =() => {console.log("click c magic");}
    return (
        <div className="header">
            <h1>{title}</h1>
            {(location.pathname === '/') && (<Button color={showAdd ? "red":"green"} text={showAdd ? "Close":"Add"} onClick={onAdd}/>)}
            {/* <Button color="blue" text="add"/>
            <Button color="red" text="add"/> */}
        </div>
    )
}

Header.defaultProps ={
    title : "TASK TRACKER"
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}

// //css in js
// const HeadingStyle = {
//     color:"red" ,
//     backgroundColor:"gray"
// }

export default Header
