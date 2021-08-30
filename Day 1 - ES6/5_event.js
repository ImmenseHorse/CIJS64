function sayHello() {
    console.log("hello, world");
}

const btnClickMe = document.getElementById('btnClickMe');

btnClickMe.addEventListener('click', function(evt) {
    console.log(this);
    console.log("hello, world");
});


// better
btnClickMe.addEventListener('click', (evt) => {
    console.log(this);
    console.log("hello, world 2!");
});