function calculateGrade (marks) {
    if (marks > 79) {
        return "A";
}else if (marks>=60 && marks<=79) {
        return "B";
}else if (marks<=59 && marks >=49.1) {
        return "C";
}else if (marks>=40 && marks <=49) {
        return "D";
}else if (marks >=0 && marks <=39.9) {
        return "E";
}else {
    return(invalid)
}
}      
console.log (calculateGrade(85)) //you will get "A"
console.log (calculateGrade(66)) //you will get "B"
console.log (calculateGrade(56)) //you will get "C"
console.log (calculateGrade(45)) //you will get "D"
console.log (calculateGrade(25)) //you will get "E"