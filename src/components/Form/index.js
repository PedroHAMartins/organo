import { useState } from 'react';
import '../../style/components/_Form.sass'
import Button from '../Button';
import DropdownList from '../DropdownList';
import FormField from '../FormField';

const Form = (props) => {

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onEmployeeRegister({
            name,
            job,
            image,
            team
        })
        setName('')
        setJob('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <FormField requires={true} label="Nome" placeholder="Digite seu nome" value={name} onChange={value => setName(value)}/>
                <FormField requires={true} label="Cargo" placeholder="Digite seu cargo" value={job} onChange={value => setJob(value)}/>
                <FormField label="Imagem" placeholder="Informe o endereço da imagem" value={image} onChange={value => setImage(value)}/>
                <DropdownList requires={true} label="Time" itens={props.teams} value={team} onChange={value => setTeam(value)}/>
                <Button text="Criar card"/>
            </form>
        </section>
    );
}

export default Form;