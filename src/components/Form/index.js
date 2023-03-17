import '../../style/components/_Form.sass'
import Button from '../Button';
import DropdownList from '../DropdownList';
import FormField from '../FormField';

const Form = () => {

    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const onSave = (event) => {
        event.preventDefault()
        console.log('Form sent')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <FormField requires={true} label="Nome" placeholder="Digite seu nome"/>
                <FormField requires={true} label="Cargo" placeholder="Digite seu cargo"/>
                <FormField label="Imagem" placeholder="Informe o endereço da imagem"/>
                <DropdownList requires={true} label="Time" itens={teams}/>
                <Button text="Criar card"/>
            </form>
        </section>
    );
}

export default Form;