const server = require('./server.js');
const req = require('supertest');

describe('server', () => {
    it('Should have a server listening.', async () => {
        const res = await req(server).get('/');
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(res.body).toEqual({message:'Server is listening.'});
    });
});