import '../styles/Image.css'
import PropTypes from 'prop-types'
const Image = ({path})=>{
    return (
        <div className="img-container">
            <img src={path} alt='1'></img>
        </div>
    )
}
Image.propTypes = {
    path : PropTypes.string
}
export default Image