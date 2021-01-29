import supertest from 'supertest';
import nock from 'nock';

const host = 'http://0.0.0.0:3000';
const request = supertest(host);

describe('Testing API with a mocked backend', () => {
  it('returns a successful mocked response', async () => {
    nock(host).get('/hello-world').reply(200, {
      status: 200,
      message: 'This is a mocked response',
    });

    const response = await request.get('/hello-world');
    expect(response.body.status).toEqual(200);
    expect(response.body.message).toEqual('This is a mocked response');
  });
});
