const { dummyFn1 } = require("./34_async");

test('34_async_dummyFn1', async () => {
    const data = await dummyFn1();
    expect(data).toHaveProperty('status23');
    expect(data.status23).toBe('success');
});

// test('the fetch fails with an error', async () => {
//     expect.assertions(1);
//     try {
//         await fetchData();
//     } catch (error) {
//         expect(error).toMatch('error');
//     }
// });