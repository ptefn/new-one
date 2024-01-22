let btn = document.querySelector("#btn");
let hf = document.querySelector(".hf-light");
let mainBlock = document.querySelector('.main-light')
let f = document.querySelector('.f')
console.log(mainBlock.classList.contains('main-light'));

btn.addEventListener('click', () => {
    if(hf.classList.contains('hf-light')){
        hf.classList.remove('hf-light');
        hf.classList.add("hf-dark");
        mainBlock.classList.remove('main-light');
        mainBlock.classList.add("main-dark");
        f.classList.remove('hf-light');
        f.classList.add("hf-dark");
    } else{
        hf.classList.remove('hf-dark');
        hf.classList.add("hf-light");
        mainBlock.classList.remove('main-dark');
        mainBlock.classList.add("main-light");
        f.classList.remove('hf-dark');
        f.classList.add("hf-light");
    }
})