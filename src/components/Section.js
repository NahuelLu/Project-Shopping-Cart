import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
const Section = ({icon,name})=>{
    const routerPath = "/"+ name
    return <Link to={routerPath}><div className='section-container'><FontAwesomeIcon icon={icon} border  size='2x' /><h3>{name}</h3></div></Link>
}
Section.propTypes = {
    name : PropTypes.string.isRequired
}
export default Section