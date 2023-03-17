import '../../style/components/_FormField.sass'

const FormField = (props) => {
    return (   
            <div className="form-field">
                <label>{props.label}</label>
                <input required={props.requires} type="text" placeholder={props.placeholder}/>
            </div>
    );
};

export default FormField;
