import {Router, Request, Response} from 'express'
import createUser from './services/CreateUser'
const routes = Router();

routes.get('/', (request: Request, response: Response)=> {
  const user = createUser({
    name: 'will',
    email: 'will@hotmail.com',
    password: '123456',
    techs: ['node js', 'React Native', 'React JS']
  });

  console.log(user.password)

  return response.json(user)
})


export default routes