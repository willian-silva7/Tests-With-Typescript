import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import createUser from '../services/CreateUser';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

routes.post('/users', (request, response) => {
  const { name, email, password, techs } = request.body;
  const user = createUser({
    name,
    email,
    password,
    techs,
  });

  return response.json(user);
});

export default routes;
