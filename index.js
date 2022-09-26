const receivesAFunction = (callbbckFunc) => {
    return callbbckFunc();
}
const returnsANamedFunction = () => {
    function AFunc() {

    }
    return AFunc;
}

const returnsAnAnonymousFunction = () => {
    return () => {}
}