var row_name = document.querySelector('.row-name-container');
var col_name = document.querySelector('.col-name-container');
var cell_row_container=document.querySelector('.input-cell-container');

let row_number=52;

for (let i = 1; i <= row_number; i++) {

    let ans = "";

    let n = i;

//    For rows name 
    create_div = document.createElement("div")
    create_div.id = i;
    create_div.className = "row-name"
    create_div.innerHTML = i;
    row_name.appendChild(create_div)


// for column names
    make_div = document.createElement("div")
    make_div.className = "col-name";

    while (n > 0) {
        let rem = n % 26;
        if (rem == 0) {
            ans = "Z" + ans;
            n = Math.floor(n / 26) - 1;
        } else {
            ans = String.fromCharCode(rem - 1 + 65) + ans;
            n = Math.floor(n / 26);
        }
    }
    make_div.id = ans;
   
    make_div.innerHTML = ans;
    make_div.contentEditable="false";
    col_name.appendChild(make_div)
}



//For putting input cells in input-cell-container, first
//  row of cells is made by usinh inner loop then each row is append in input-cell-container by using outer loop

for(let j=1;j<=row_number;j++){

    cell_row=document.createElement('div');
    cell_row.className="cell-row";



for (let i = 1; i <= 52; i++) {

    let ans = "";

    let n = i;

diva = document.createElement("div")


while (n > 0) {
    let rem = n % 26;
    if (rem == 0) {
        ans = "Z" + ans;
        n = Math.floor(n / 26) - 1;
    } else {
        ans = String.fromCharCode(rem - 1 + 65) + ans;
        n = Math.floor(n / 26);
    }
}
diva.id = ans + j;
diva.className="input-cell";
// diva.innerHTML=ans +j;

// diva.contentEditable="true";
cell_row.appendChild(diva)
document.getElementById(ans).contentEditable="true";
}
cell_row_container.appendChild(cell_row);
}


document.querySelectorAll('.col-name').forEach((i)=>{i.contentEditable="false"})



// ************************************************************************************

document.querySelectorAll(".align-icon").forEach((e)=>{e.addEventListener('click',()=>{
    document.querySelector('.selected-icon').classList.remove('selected-icon')
    e.classList.add('selected-icon')
})})


document.querySelectorAll(".format-text").forEach((e)=>{e.addEventListener('click',()=>{
    e.classList.toggle('selected-icon')
    
})})

document.getElementById('A1').classList.add('selected');

document.querySelectorAll('.input-cell').forEach((e)=>{e.addEventListener('click',()=>{
    document.querySelector('.input-cell.selected').classList.remove('selected')
    e.classList.add('selected')   
})})

//Applying double click property in eacg cell to make it editable
document.querySelectorAll('.input-cell').forEach((e)=>{e.addEventListener("dblclick",()=>{
    document.querySelector('.input-cell.selected').classList.remove('selected')
    e.classList.add('selected')
    e.setAttribute("contentEditable", "true")  
})})

//Applying scrolling property on input cell container and col name container and row name container
let scroller=document.querySelector('.input-cell-container');
scroller.addEventListener("scroll",(e)=>{
    document.querySelector(".col-name-container").scrollLeft=scroller.scrollLeft
    document.querySelector(".row-name-container").scrollTop=scroller.scrollTop
})










