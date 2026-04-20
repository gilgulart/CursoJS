const elements = [
    {tag: 'p', text: 'Frase 1'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'footer', text: 'Frase 3'},
    {tag: 'section', text: 'Frase 4'},
];

const content = document.querySelector('.container');
const div = document.createElement('div');
// content.innerHTML = "";

for (let i = 0; i < elements.length; i++){
    let {tag, text} = elements[i];
    let createTag = document.createElement(tag);
    createTag.innerHTML = text;       
    div.appendChild(createTag)
}

content.appendChild(div)

    
