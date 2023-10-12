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

for(let i=1;i<=row_number;i++){

    cell_row=document.createElement('div');
    cell_row.className="cell-row";



for (let j = 1; j<= 52; j++) {

diva = document.createElement("div")

diva.id = "rowid-"+i+"-colid-"+j;
diva.className="input-cell";

cell_row.appendChild(diva)
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

document.getElementById('rowid-1-colid-1').classList.add('selected');

document.querySelectorAll('.input-cell').forEach((i)=>{i.addEventListener('click',(e)=>{
    // console.log(e);
    
    let prevcell;
    if(e.ctrlKey){
        idarray=i.id.split("-");
        let [rowId,colId]=[Math.floor(idarray[1]),Math.floor(idarray[3])]
       
        // let [prevrowId,prevcolId]=[Math.floor(prevcell[1]),Math.floor(prevcell[3])]
        // prevcell=i.id.split("-");
        // let [prevrowId,prevcolId]=[Math.floor(prevcell[1]),Math.floor(prevcell[3])]
        // console.log(prevcell)

        // for(let i=prevrowId;i<=Math.abs(prevrowId-rowId);i++){
        //     document.querySelector(`rowid-${i}-colid-${prevcolId}`).classList.add("selected")
        // }

        i.classList.add("selected")

        if(rowId>1){
        let top_cell_selected=document.getElementById(`rowid-${rowId-1}-colid-${colId}`).classList.contains("selected");
        if(top_cell_selected){
            i.classList.add("top-cell-selected");
            i.classList.add("selected")
            document.getElementById(`rowid-${rowId-1}-colid-${colId}`).classList.add('bottom-cell-selected')
        }
        }
        if(rowId<row_number){
            let bottom_cell_selected=document.getElementById(`rowid-${rowId+1}-colid-${colId}`).classList.contains("selected");
            
            if(bottom_cell_selected){
                i.classList.add("bottom-cell-selected");
                i.classList.add("selected")
                document.getElementById(`rowid-${Math.floor(rowId)+1}-colid-${colId}`).classList.add('top-cell-selected')
            }
            }

            console.log("hello")

        //     if(colId>1){
        //         let left_cell_selected=document.getElementById(`rowid-${rowId}-colid-${colId-1}`).classList.contains("selected");
        //         if(left_cell_selected){
        //             i.classList.add("left-cell-selected");
        //             i.classList.add("selected")
        //             document.getElementById(`rowid-${rowId}-colid-${colId-1}`).classList.add('right-cell-selected')
        //         }
        //         }




        //         if(colId<row_number){
        //             let right_cell_selected=document.getElementById(`rowid-${rowId}-colid-${colId+1}`).classList.contains("selected");
                    
        //             if(right_cell_selected){
        //                 i.classList.add("right-cell-selected");
        //                 i.classList.add("selected")
        //                 document.getElementById(`rowid-${rowId}-colid-${colId+1}`).classList.add('left-cell-selected')
        //             }
        //             }
        
        
    }
    else{
        
    // prevcell=document.querySelector('.input-cell.selected').id.split("-")
    // console.log(prevcell)
    document.querySelectorAll('.input-cell.selected').forEach((c)=>{c.classList.remove('selected')})
    i.classList.add('selected')   }
})})

//Applying double click property in eacg cell to make it editable
document.querySelectorAll('.input-cell').forEach((e)=>{e.addEventListener("dblclick",()=>{
    document.querySelector('.input-cell.selected').classList.remove('selected')
    document.querySelectorAll('.input-cell').forEach((i)=>{i.setAttribute("contentEditable","false")})
    e.classList.add('selected')
    e.setAttribute("contentEditable", "true")  
})})

//Applying scrolling property on input cell container and col name container and row name container
let scroller=document.querySelector('.input-cell-container');
scroller.addEventListener("scroll",(e)=>{
    document.querySelector(".col-name-container").scrollLeft=scroller.scrollLeft
    document.querySelector(".row-name-container").scrollTop=scroller.scrollTop
})



//adding bold functionality
document.querySelector("#bold").addEventListener("click",()=>{
    document.querySelectorAll(".selected").forEach((i)=>{
        if(i.classList.contains("bold")){
            i.classList.remove("bold")
        }
        else{ i.classList.add("bold")}
       
    })
})

//adding Italic funcationality
document.querySelector("#italic").addEventListener("click",()=>{
    document.querySelectorAll(".selected").forEach((i)=>{
        if(i.classList.contains("italic")){i.classList.remove("italic")}
        else{ i.classList.add("italic")}
        
    })
})

//Adding underlined functionality
document.querySelector("#underline").addEventListener("click",()=>{
    document.querySelectorAll(".selected").forEach((i)=>{
        if(i.classList.contains("underline")){i.classList.remove("underline")}
        else{ i.classList.add("underline")}
        
        
    })
})


document.querySelector("#color-fill").addEventListener("click",()=>{
    document.querySelectorAll(".selected").forEach((i)=>{
        console.log("vishvas")
        if(i.classList.contains("fill")){i.classList.remove("fill") 
        i.classList.remove("selected")}
        else{ i.classList.add("fill")
        i.classList.remove("selected")
    }
        
        
    })
})







