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

    var ctrlAddItem = function () {
        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('it works');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    // Keypress event
    // !!keyCode
    document.addEventListener('keypress', function (event) {

        // 'which' for older browser
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIContorller);