import '../styles/Image.css'
const Image = ({path})=>{
    return (
        <div className="img-container">
            <img src={path} alt='1'></img>
        </div>
    )
}
export default Image