function markscheck(marks) {
    if (marks ==="") {
      return "Kindly input your marks.";
// this requests the user to input marks if the input section is empty
    }
    let grade;
    if (marks > 79) {
      return grade = 'Your Grade is an A. Congratulations';
//this causes the grade A to be printed if it happens that the marks inputted are higher than 79
    } else if (marks >= 60 && marks <= 79 ) {
     return  grade = 'Your GRade is a B. Great';
    } 
 // this causes the grade B to be printed if the marks put in are higher than or equal to 60 but less than 79   
    else if (marks >= 50 && marks <= 59){
     return grade = 'Your Grade is a C.';
    }
     else if (marks >= 40 && marks <= 49){
        return grade = 'Your Grade is a D.';
     }
     else { 
        return grade = 'Your Grade is an E.';
     }
    return grade;
}

const realgrade = markscheck()
console.log(realgrade);
// this makes the function to be executed effectively and for received figures 
// from it to be displayed under the const realgrade