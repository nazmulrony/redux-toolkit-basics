const store = require("./app/store");
const { iceCreamActions } = require("./features/icecream/iceCreamSlice");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
// const iceCreamActions =

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
    console.log("Updated State", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.reStocked(3));
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.reStocked(6));
unsubscribe();
