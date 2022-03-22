 
 let arr = document.getElementsByClassName("box")
 
 for(let i = 0; i < arr.length; i++) {
     arr[i].addEventListener("click", () => {
        alert("Box is clicked")
        console.log("This box is clicked")
    })
 }

 
//  document.querySelector(".box").addEventListener("click", () => {
//      alert("Box is clicked")
//      console.log("This box is clicked")
//  })