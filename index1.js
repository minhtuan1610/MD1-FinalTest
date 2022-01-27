function solveFirstDegreeEquation(a, b) {
    if (a == 0 && b == 0) {
        document.write("Phương trình có vô số nghiệm");
    }
    if (a == 0 && b != 0) {
        document.write("Phương trình vô nghiệm");
    }
    if (a != 0 && b == 0) {
        document.write("Phương trình có nghiệm duy nhất x =0");
    }
    if (a != 0 && b != 0) {
        document.write("Phương trình có nghiệm x = " + -b / a);
    }
}

solveFirstDegreeEquation(5, 8);