import '../styles/Bar.css'
const Bar = ({amount})=>{

    return (
        <nav className='sticky-bar'>
            <h4>Items selected: {amount}</h4>
        </nav>
    )
}

export default Bar