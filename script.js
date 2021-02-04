let $input = document.querySelector("#input");
let $submit = document.querySelector("#submit");
let $willdo = document.querySelector(".willDo");
const $did = document.querySelector('.did');
const $canceled = document.querySelector('.canceled');
const $btn1 = document.getElementById('btn1');
$submit.addEventListener("click",function(e){
    e.preventDefault();
    if($input.value == ""){
        warnMSG()
    }else{
        addElement();
    }
});
let warnMSG = () => {
        alert('Please add Task !');
}
function addElement(){
    let newLi = document.createElement("li");
    let newDoneBtn = document.createElement("button");
    let newCancelBtn = document.createElement("button");
    let didlistText = document.createElement("p");
    didlistText.innerHTML = $input.value;
    newLi.append(didlistText, newDoneBtn, newCancelBtn);
    didlistText.setAttribute('class',"parastyle")
    $willdo.appendChild(newLi);

    newDoneBtn.textContent = '✔';
    newCancelBtn.textContent = '✖'
    newDoneBtn.setAttribute('class', 'done');
    newCancelBtn.setAttribute('class', 'cancel');
    newLi.setAttribute('class','willdo-list')
    
    let didFun = () => {
        let newDidLi = document.createElement("li");
        let didText = document.createElement("p");
        didText.innerHTML = didlistText.innerHTML;
        newDidLi.appendChild(didText);
        newDidLi.setAttribute('class','did-list');
        didText.style.margin = '0';
        $did.appendChild(newDidLi);
        setTimeout(() => {
            newLi.remove();
        }, 500);
    }
    let cancelFun = () => {
        let newDidLi = document.createElement("li");
        let didText = document.createElement("p");
        didText.innerHTML = didlistText.innerHTML;
        newDidLi.appendChild(didText);
        newDidLi.setAttribute('class','canceled-list');
        didText.style.margin = '0';
        $canceled.appendChild(newDidLi);
        setTimeout(() => {
            newLi.remove();
        }, 500); 
    }
    let clearAll = () => {
        didFun.remove();
        cancelFun.remove();
    }
    
    newDoneBtn.addEventListener('click',didFun);
    newCancelBtn.addEventListener('click',cancelFun);
    $btn1.addEventListener('click',clearAll);

};

