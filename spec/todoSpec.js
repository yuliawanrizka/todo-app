const request = require('supertest');
const app = require('../app');

const url = '/todo'

describe('todo list', () => {
    it('returns a JSON payload', (done) => {
        request(app)
        .get(url)
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((error) => (error) ? done.fail(error) : done());
    });
});

describe('todo create', () => {
    it('returns a JSON payload', (done) => {
        request(app)
        .post(url)
        .send({"todo" : "test"})
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((error) => (error) ? done.fail(error) : done());
    });
});

describe('todo detail', () => {
    it('returns a JSON payload', (done) => {
        request(app)
        .get(url + '/5')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((error) => (error) ? done.fail(error) : done());
    });
});

describe('todo update', () => {
    it('returns a JSON payload', (done) => {
        request(app)
        .put(url + '/5')
        .send({"todo" : "test update"})
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((error) => (error) ? done.fail(error) : done());
    });
});

describe('todo delete', () => {
    it('returns a JSON payload', (done) => {
        request(app)
        .delete(url + "/5")
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((error) => (error) ? done.fail(error) : done());
    });
});