
import React, {useState} from 'react'

import TeamsForm from './components/TeamsForm'
import './App.css';



const starterValues = {
  user: '',
  email: '',
  job: '',
}

const team = [
  {user: 'Eric',
  email: 'egant43123@gmail.com',
  job: 'CEO of NASA',}
]
function App() {
  const [teamMember, setTeamMember] = useState(team) 
  const [formValues, setFormValues] = useState(starterValues);
  
  const submit = () => {
    const newTeam = {
      user: formValues.user,
      email: formValues.email, 
      job: formValues.job,
    }
  
    setTeamMember([...teamMember, newTeam])
    setFormValues(starterValues)
  }

  const update = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }


  return (
    <div className='App'>
      <h1>Team Members</h1>

      <TeamsForm
        values={formValues} 
        update={update} 
        submit={submit}
      />
{
teamMember.map(friend => {
          return (
            <div className='friend container'>
            <h2>{friend.user}</h2>
            <p>Email: {friend.email}</p>
            <p>Job: {friend.job}</p>
          </div>
          )
        })
      }
    </div>
  )
}

export default App;
