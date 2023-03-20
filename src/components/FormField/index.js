import '../../style/components/_FormField.sass'

const FormField = (props) => {

    const onType = (event) => {
        props.onChange(event.target.value)
    }

    return (   
            <div className="form-field">
                <label>{props.label}</label>
                <input value={props.value} onChange={onType} required={props.requires} type="text" placeholder={props.placeholder}/>
            </div>
    );
};

export default FormField;
