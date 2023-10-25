let input = document.querySelector('input');
let content = document.querySelector('#content');
let btn = document.querySelector('button');
let footer = document.querySelector('#footer');
let text;

input.addEventListener('input', function(event) {
    let newText = input.value;
    let capText = newText.toUpperCase();
    content.innerText = `${capText}`;
    text = capText;
});

btn.addEventListener('click', function(event) {
    footer.innerText = `You are a good boy ${text}.`;
});

console.dir(input);
