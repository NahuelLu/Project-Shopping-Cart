import '../styles/Image.css'
const Image = ({path})=>{
    return (
        <div className="img-container">
            <img src={path}></img>
        </div>
    )
}
export default Image