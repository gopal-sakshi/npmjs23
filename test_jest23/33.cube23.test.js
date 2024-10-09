const { Cube } = require('./33.cube23');

let c1 = new Cube(2);

test('expect side length23', () => {
    expect(c1.getSideLength()).toBe(2);
});

test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});


test('ee_4_players_lo_messi_unda_koodadu', () => {
    expect('carvajal_benz_ronaldo_ramos').not.toMatch(/Messi/);
});
  
test('expect string lo "stop" undaali', () => {
    expect('Christopher_lo_').toMatch(/stop/);
});