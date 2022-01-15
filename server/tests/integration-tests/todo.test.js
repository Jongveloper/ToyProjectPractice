import axios from 'axios';
import { startServer, stopServer } from '../../app.js';
import faker from 'faker';

describe('Todos APIs', () => {
  let server;
  let request;
  beforeAll(async () => {
    server = await startServer();
    request = axios.create({
      baseURL: `http://localhost:${server.address().port}`,
      validateStatus: null,
    });
  });

  afterAll(async () => {
    await stopServer(server);
  });

  describe('POST /todo/create', () => {
    it('투두가 생성되면 201을 반환합니다.', async () => {
      const contents = faker.random.words(3);

      const res = await request.post('/todo/create', { contents: contents });

      expect(res.status).toBe(201);
      expect(res.data).toMatchObject({
        todo: contents,
      });
    });
    it('컨텐츠가 2글자 미만이면 400을 반환합니다.', async () => {
      const contents = faker.random.alpha({ count: 1 });
      const res = await request.post('/todo/create', { contents });

      expect(res.status).toBe(400);
      expect(res.data.message).toMatch('2글자 이상 입력해주세요!');
    });
  });

  describe('GET /todo', () => {
    it('투두를 성공적으로 받아오면 200을 반환합니다.', async () => {
      const contents = faker.random.words(3);

      await request.post('/todo/create', { contents: contents });
      await request.post('/todo/create', { contents: contents });

      const res = await request.get('/todo');

      expect(res.status).toBe(200);
      expect(res.data.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('DELETE /todo/:id', () => {
    it('아이디가 없으면 404를 반환합니다.', async () => {
      const res = await request.delete('/todo/noneexistentId');

      expect(res.status).toBe(404);
      expect(res.data.message).toMatch(
        '해당 아이디가 없습니다 : noneexistentId'
      );
    });
    it('삭제가 성공하면 204를 반환합니다.', async () => {
      const contents = faker.random.words(3);

      const createdTodo = await request.post('/todo/create', {
        contents: contents,
      });

      const deleteResult = await request.delete(`/todo/${createdTodo.data.id}`);

      const checkTodoResult = await request.delete(
        `/todo/${createdTodo.data.id}`
      );
      expect(deleteResult.status).toBe(204);
      expect(checkTodoResult.status).toBe(404);
    });
  });
});
