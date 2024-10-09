const request = require("supertest");
const { app, stopServer } = require('./35_api_http');

test("movies23_test", async () => {
    const response = await request(app).get("/movies23");
    expect(response.statusCode).toBe(200);
});

describe('Post Endpoints', () => {
    it('should create a new post', async () => {
        const res = await request(app)
            .post('/movies23')
            .send({
                movie_name24: 'indra_sena_reddy'
            })
        expect(res.statusCode).toEqual(200)
        // expect(res.body).toHaveProperty('post')
    })
})

afterAll(async () => {
    console.log("stopping server");
    stopServer();
});