document.addEventListener('DOMContentLoaded', ()=>{
    const container = document.querySelector('.container');
    const text = document.createElement("a");
    text.textContent = 'Привет';
    container.append(text);
})