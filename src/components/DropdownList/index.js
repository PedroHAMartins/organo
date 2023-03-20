import '../../style/components/_DropdownList.sass'

const DropdownList = (props) => {
    return (
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select onChange={event => props.onChange(event.target.value)} name="" id="" required={props.requires} value={props.value}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default DropdownList;