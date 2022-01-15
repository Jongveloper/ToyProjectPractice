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
});
