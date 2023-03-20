import '../../style/components/_Team.sass'
import Employee from '../Employee'

const Team = (props) => {
    return (        
        (props.employees.length > 0) && <section className='team' style={{backgroundColor: props.backgroundColor}}>
            <h3 style={{borderColor: props.mainColor}}>{props.name}</h3>
            <div className='employees'>
                {props.employees.map(employee => <Employee key={employee.name} mainColor={props.mainColor} name={employee.name} job={employee.job} image={employee.image}/>)}
            </div>
        </section>
    )
}

export default Team