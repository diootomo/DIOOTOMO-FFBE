
var database = firebase.database();

function writeUserData(userId, name) {
    firebase.database().ref('FFBECharacters/' + userId).set({
        name: name
    });
}