const doSomeThingAsync = () =>  {
    return new Promise((resolve, reject) => {
        (false) ? setTimeout(() => resolve('Do Something Async'), 3000) : reject(new Error('Test Error'));
    });
}

const doSomeThing = async () => {
    const someThing = await doSomeThingAsync();
    console.log(someThing);

}

// console.log('Before');
// doSomeThing();
// console.log('After');

const anotherFunction = async () => {
    try {
        const someThing = await doSomeThingAsync();
        console.log(someThing);
    } catch  {
        console.error(error);
    }
}

console.log('Before');
anotherFunction();
console.log('After');