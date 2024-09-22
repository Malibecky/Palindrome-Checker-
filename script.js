function isEmpty(){
  const text = document.getElementById("text-input").value.toLowerCase();
  console.log(text);
  if (text.trim() === ""){
    alert("Please input a value");
    return false;
  }

  let pattern = /[a-z0-9]/g;
  let originalText = text.match(pattern);
  console.log (originalText);
  const joinText = originalText.join("");
  console.log(joinText);
  const Reverse = originalText.reverse();
  console.log(Reverse);
  const reversedText = Reverse.join("");
 console.log(reversedText);

 if(joinText === reversedText){
    document.getElementById("result").textContent = `${text} is a palindrome`;
  }
  else{
    document.getElementById("result").textContent = `${text} is not a palindrome`;
  }
}
