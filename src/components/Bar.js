import '../styles/Bar.css'
import PropTypes from "prop-types"
const Bar = ({amount})=>{

    return (
        <nav className='sticky-bar'>
            <h4>Items selected: {amount}</h4>
        </nav>
    )
}
Bar.propTypes ={
    amount : PropTypes.number
}
export default Bar