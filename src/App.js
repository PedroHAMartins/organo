import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      name: 'Programação',
      mainColor: '#57C278',
      backgroundColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      mainColor: '#82CFFA',
      backgroundColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      mainColor: '#A6D157',
      backgroundColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      mainColor: '#E06B69',
      backgroundColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      mainColor: '#DB6EBF',
      backgroundColor: '#FAE9F5',
    },
    {
      name: 'Mobile',
      mainColor: '#FFBA05',
      backgroundColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      mainColor: '#FF8A29',
      backgroundColor: '#FFEEDF',
    }
  ]

  const [employees, setEmployees] = useState([])

  const onNewEmployeeRegistered = (employee) => {
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onEmployeeRegister={employee => onNewEmployeeRegistered(employee)}/>
      {teams.map(team => <Team key={team.name} name={team.name} mainColor={team.mainColor} backgroundColor={team.backgroundColor} employees={employees.filter(employee => employee.team === team.name)}/>)}
      <Footer />
    </div>
  );
}

export default App;
