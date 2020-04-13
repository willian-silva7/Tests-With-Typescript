// interface define os tipos de declarações, data que precisam para criar um usuário

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string; // ? Opcional
  email: string;
  password: string; // array de strings : string[]
  techs: Array<string | TechObject>;
}

export default function createUser({
  name = '',
  email,
  password,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
