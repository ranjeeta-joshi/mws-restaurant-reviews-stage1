if('serviceWorker' in navigator){
    navigator.serviceworker.register('./sw.js')
    .then(function() {
        console.log('Registration Worked!');
    })
    .catch(function() {
        console.log('Registration failed!');
    });
}