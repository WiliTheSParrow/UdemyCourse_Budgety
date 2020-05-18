// BUDGET CONTROLLER
var budgetController = (function () {
    //CODE
})();


// UI CONTROLLER
var UIContorller = (function () {
    // CODE
})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    document.querySelector('.add__btn').addEventListener('click', function () {
        console.log('Button was clicked.')
    })

})(budgetController, UIContorller);