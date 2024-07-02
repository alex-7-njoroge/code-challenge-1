const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
//grading generator
//marks grading is between 0-100 lowest to highest respectively
//grading is as follows:A>79,B-60-69,C-59-49,D-40 TO 49 E-less 40

let studentMarks = 75;
//grading function
function gradingSystem (studentMarks) {
   if (studentMarks > 0 && studentMarks < 100){
      if(studentMarks > 79 ){
       console.log('A');}
       else if ( studentMarks >= 78 && studentMarks <= 60){
       console.log('B');}
       else if ( studentMarks <=59 && studentMarks >=49){
      console.log('C');}
       else if ( studentMarks <=48 && studentMarks >=40){
       console.log('D');}
       else if ( studentMarks <=39 && studentMarks >=0){
        console.log('E') } 
        else{console.log("incorrect marks")} 
    } 
      

}

//calling function grading system
readline.question('ENTER THE MARKS',(GRADE)=>{
    gradingSystem (GRADE);
    readline.close()

})

