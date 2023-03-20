import '../../style/components/_Employee.sass'

const Employee = (props) => {
    return(
        <div className='employee'>
            <div className='header' style={{backgroundColor: props.mainColor}}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.job}</h5>
            </div>
        </div>
    )
}

export default Employee