var budgetController = (function () {
    var x = 23;
    var add = function (a) {
        return x + a;
    }

    return {
        publicTest: function (b) {
            return add(b);
        }
    }
})();

var UIContorller = (function () {

    // CODE
})();

var controller = (function (budgetCtrl, UICtrl) {
    var z = budgetController.publicTest(5);

    // We don't have access to var z from the public, so we need to return another func to console.log it out.
    return {
        anotherPublic: function () {
            console.log(z);
        }
    }

})(budgetController, UIContorller);