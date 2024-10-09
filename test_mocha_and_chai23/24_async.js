async function dummyFn1() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve({
            status23: 'success',
            time23: new Date().toISOString()
        }), 2000);
    });
}

module.exports = {
    dummyFn1
}