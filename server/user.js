var makeUserID = (function () {
    var counter = 0;
    return function () {
        counter++;
        return counter;
    };
})();

function User(data) {
    this.data = data;
    this.id = makeUserID();     
}

exports = {
    'User': User
}