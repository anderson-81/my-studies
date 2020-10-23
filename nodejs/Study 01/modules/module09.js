function construct_name() {

    var fullname;

    return {
        name: function (fname, lname) {
            fullname = fname + ' ' + lname
        },
        showName: function () {
            console.log(fullname)
        }
    }
}

module.exports = construct_name;