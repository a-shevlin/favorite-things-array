$(document).ready(function() {
  $("form#things").submit(function(event) {
    event.preventDefault();
    const number = $("input#number").val();
    const animal = $("input#animal").val();
    const numberArray = [number, animal];
    const numberSlice = numberArray.slice(0,1);

    const listArray = document.getElementById("array");
    numberArray.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = "wow " + item;
      listArray.appendChild(li);

    });
  });
});