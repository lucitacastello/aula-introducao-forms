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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleInputChange(event: any) {

    const value = event.target.value; //pega valor do input
    const name = event.target.name;  //pega name do input

    setFormData({ ...formData, [name]: value }); //pega o input dinâmicamente
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
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          name="lastName"
          value={formData.lastName}
          type="text"
          placeholder="Digite seu sobrenome"
          onChange={handleInputChange}
        />
      </div>
      <button  >Mostrar nome completo</button>
    </form>
  )
}

export default App
