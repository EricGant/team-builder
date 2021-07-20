  
import React from 'react'

export default function TeamsForm(props) {
  const { values, update, submit } = props

  const change = evt => {
    const {name, value} = evt.target
    update(name, value)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }


  return (
    <form className='form container' onSubmit={onSubmit}>
        <label>Username
            <input 
            name='user'
            type='text'
            value={values.user}
            onChange={change}
            placeholder='username'
            maxLength='30'      
            />
        </label>
        <br/>
        <label>Email
          <input
          name='email'
            type='email'
            value={values.email}
            onChange={change}
            placeholder='email'
            maxLength='20'
            />
        </label>
        <br/>
        <label>Job        
        <select name='job' value={values.job} placeholder= "nn" onChange={change}>
          <option value="">-select job-</option>
          <option value="Full Stack Engineer">Full Stack Engineer</option>
          <option value="Backend Engineer">Backend Engineer</option>
          <option value="Frontend Engineer">Fronend Engineer</option>
          <option value="Mcdonalds Cashier">Mcdonalds Cashier</option>
          <option value="Dominos Driver">Dominos Driver</option>
          <option value="Designer">Designer</option>
        </select>
        </label>

        <div className='submit'>
          <button disabled={!values.email || !values.user || !values.job}>SUBMIT</button>
        </div>
    </form>
  )
}