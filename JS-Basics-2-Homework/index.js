function Gradecalc(StudentGrade) {
    if (StudentGrade <= 100-90) {
        return "A";
    } else if (StudentGrade <= 89-80) {
        return "B";
    } else if (StudentGrade <= 79-70) {
        return "C";
    } else if (StudentGrade <= 69-60) {
        return "D";
    } else if (StudentGrade <= 59-50) {
        return "F";
    }
}