var chai = require('chai');
var chaiHttp = require('chai-http');
const expect = require('chai').expect;
const assert = require('chai').assert;
chai.use(chaiHttp);

// APPROACH I       ----> manually start the express server
// describe('movies23', function() {
//     var host = "http://localhost:12238";
//     var path = "/movies23";

//     it('apiCall23', (done) => {
//         chai
//             .request(host)
//             .get(path)
//             .set('custom-header23', 'state_rowdy_lo_hero_chiru')
//             .send({ lang23: 'telugu', time23: new Date().toISOString() })
//             .end(function(error, response) {
//                 if (error) { 
//                     console.log("edo error ====> ", error)
//                     done(error);
//                 } 
//                 else { 
//                     expect(response).to.have.status(200);
//                     expect(response).to.be.an('object');
//                     expect(response.body.success23).to.deep.equals('success25');
//                     expect(response.body.reqHeader23).to.be.equal('state_rowdy_lo_hero_chiru');
//                     // expect(response.body.reqHeader23).to.be.equal('state_rowdy_lo_hero_nagarjuna');
//                     expect(response.body.movies23).to.be.an('array');
//                     done(); 
//                 }
//             });
//     });
// });

// APPROACH II      ------> DONT start the server; chai-http itself will start the express server
const { app: app23, stopServer } = require('./25_chai_http');
describe('movies24', function() {
    describe('movies24a', () => {
        
        it('return_telugu_movies', (done) => {
            chai
                .request(app23)
                .get('/movies23')
                .end((err, resp) => {
                    if(err) { done(err) }
                    else {
                        expect(resp).to.have.status(200);
                        expect(resp).to.be.an('object');
                        expect(resp.body.success23).to.deep.equals('success25');
                        // expect(resp.body.reqHeader23).to.be.equal('state_rowdy_lo_hero_chiru');
                        // expect(resp.body.reqHeader23).to.be.equal('state_rowdy_lo_hero_nagarjuna');
                        expect(resp.body.movies23).to.be.an('array');
                        stopServer();
                        done(); 
                    }
                })
        });

        it('deliberate_failCase23', (done) => {
            chai
                .request(app23)
                .get('/moviesByLang/tamil')
                .end((err, resp) => {
                    if(err) { done(err) }
                    else {
                        assert.isAbove(resp.status, 421);
                        assert.isBelow(resp.status, 423);
                        expect(resp).to.have.status(422);
                        expect(resp.body.info).to.deep.equals('we wont send tamil movies');
                        stopServer();
                        done();
                    }
                })
        })
    })
})