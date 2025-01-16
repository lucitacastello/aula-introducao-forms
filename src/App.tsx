import { useState } from "react";

// objeto
type FormData = {
  firstName: string;
  lastName: string;
}

function App() {

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: ''
  });

  function handleFirstNameChange(event: any) {
    setFormData({...formData, firstName: event.target.value}) //pega valor do input
  }

function handleLastNameChange(event:any) {
  setFormData({...formData, lastName: event.target.value})
}

  return (
    <form >
      <div>
        <input
          name="firstName"
          // associa ao objeto
          value={formData.firstName} 
          type="text"
          placeholder="Digite seu nome"
          // associar ao evento
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <input
          name="lastName"
          value={formData.lastName}
          type="text"
          placeholder="Digite seu sobrenome"
          onChange={handleLastNameChange}
        />
      </div>
      <button>Mostrar nome completo</button>
    </form>
  )
}

export default App
