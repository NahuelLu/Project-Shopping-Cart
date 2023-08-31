import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const PrevButton = ({to})=>{
    return <Link className="prev-btn"to={to}><FontAwesomeIcon icon={faArrowLeft} size="2x"/></Link>
}

export default PrevButton