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

  describe('createTodos', () => {
    let newTodo, request, response;
    beforeEach(() => {
      newTodo = faker.random.words(3);
      request = httpMocks.createRequest({
        body: { contents: newTodo },
      });
      response = httpMocks.createResponse();
    });

    it('투두리스트가 생성됩니다.', async () => {
      todosRepository.create = jest.fn((contents) => ({
        contents,
      }));
      await todoController.createTodo(request, response);

      expect(response.statusCode).toBe(201);
      expect(response._getJSONData()).toMatchObject({
        contents: newTodo,
      });
      expect(todosRepository.create).toHaveBeenCalledWith(newTodo);
    });
  });

  describe('투두를 삭제합니다.', () => {
    let todoId, request, response;
    beforeEach(() => {
      todoId = faker.random.alphaNumeric(16);
      request = httpMocks.createRequest({
        params: { id: todoId },
      });
      response = httpMocks.createResponse();
    });

    it('투두리스트를 삭제합니다.', async () => {
      todosRepository.getById = () => ({
        todoId,
      });
      todosRepository.remove = jest.fn();

      await todoController.deleteTodo(request, response);

      expect(response.statusCode).toBe(204);
      expect(todosRepository.remove).toHaveBeenCalledWith(todoId);
    });

    it('해당하는 아이디가 없으면 404를 반환합니다.', async () => {
      todosRepository.getById = () => undefined;
      todosRepository.remove = jest.fn();

      await todoController.deleteTodo(request, response);

      expect(response.statusCode).toBe(404);
      expect(response._getJSONData()).toMatchObject({
        message: `해당 아이디가 없습니다 : ${todoId}`,
      });
      expect(todosRepository.remove).not.toHaveBeenCalledWith();
    });
  });
});
