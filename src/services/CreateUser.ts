

// interface define os tipos de declarações, data que precisam para criar um usuário

interface TechObject{
  title: String,
  experience: Number
}

interface CreateUserData{
  name?: String, // ? Opcional
  email: String,
  password: String, // array de strings : string[]
  techs: Array<String | TechObject>
}

export default function createUser({name= '', email, password}: CreateUserData){
  const user = {
    name, 
    email,
    password
  }

  return user
}


