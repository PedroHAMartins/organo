import '../../style/components/_Form.sass'
import FormField from '../FormField';

const Form = () => {
    return (
        <section className='form'>
            <form action="">
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <FormField label="Nome" placeholder="Digite seu nome"/>
                <FormField label="Cargo" placeholder="Digite seu cargo"/>
                <FormField label="Imagem" placeholder="Informe o endereço da imagem"/>
            </form>
        </section>
    );
}

export default Form;