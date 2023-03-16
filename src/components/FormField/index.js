import '../../style/components/_FormField.sass'

const FormField = (props) => {
    return (   
            <div className="form-field">
                <label htmlFor="nome">{props.label}</label>
                <input type="text" id="nome" placeholder={props.placeholder}/>
            </div>
    );
};

export default FormField;
