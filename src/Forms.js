import React,{useState} from 'react'

const Forms = () => {

    const [ formState, setFormState ] = useState( {
        name: "",
        email:""
    } )

    const handleInput = (e) => {
        setFormState( {
            ...formState,
           [e.target.name]:e.target.value 
        })
    }
    
   

    return (
      

        <div>
            <form>
                <label htmlFor='name'>Your Name</label>
                <input type="text" id="name" name="name" value={formState.name} onChange={handleInput} />
                  <label htmlFor='email'>Your Email</label>
                <input type="text" id="email" name="email" value={formState.email} onChange={handleInput} />
                <button className='button' type='submit'>Submit</button>
                <br />
                <hr />
                <br/>
                  <div className='results'>
                    Name:{formState.name}
                    <br />
                Email:{formState.email}
            </div>
            </form>
          </div>
  )
}

export default Forms