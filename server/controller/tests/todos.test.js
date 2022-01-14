import faker from 'faker';
import { TodoController } from '../todos';
import httpMocks from 'node-mocks-http';

describe('TodoController', () => {
  let todoController;
  let todosRepository;
  beforeEach(() => {
    todosRepository = {};
    todoController = new TodoController(todosRepository);
  });

  describe('getTodos', () => {
    it('투두리스트를 받아옵니다.', async () => {
      const request = httpMocks.createRequest();
      const response = httpMocks.createResponse();
      const allTodos = [
        { todo: faker.random.words(3) },
        { todo: faker.random.words(3) },
      ];

      todosRepository.getAll = () => allTodos;

      await todoController.getTodos(request, response);

      expect(response.statusCode).toBe(200);
      expect(response._getJSONData()).toEqual(allTodos);
    });
  });
});
