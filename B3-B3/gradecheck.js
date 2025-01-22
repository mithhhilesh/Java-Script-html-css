let marks = parseInt(prompt("Enter your marks: "));
if(marks>=50 && marks<=65){
    console.log("Grade: C");

}
else if(marks>=66 && marks<=80){
    console.log("Grade: B");
    
}
else if(marks>=81 && marks<=90){
    console.log("Grade:A");
    
}
else if(marks>=91 ){
    console.log("Grade: A+");
    
}else{
    console.log("Invalid marks or below passing grade.");
}