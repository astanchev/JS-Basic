function grades(input) {
    let students = Number(input[0]);
    let counter5andAbove = 0;
    let counter4to5 = 0;
    let counter3to4 = 0;
    let counterBelow3 = 0;
    let grade = 0.0;
    let totalGrades = 0.0;

    for (let i = 1; i <= students; i++) {
        grade = Number(input[i]);

        if (grade >= 5.0) counter5andAbove++;
        if (grade >= 4.0 && grade < 5.0) counter4to5++;
        if (grade >= 3.0 && grade < 4.0) counter3to4++;
        if (grade < 3.0) counterBelow3++;

        totalGrades += grade;
    }

    let topStudents = (counter5andAbove * 100 / students).toFixed(2);
    let between4and5 = (counter4to5 * 100 / students).toFixed(2);
    let between3and4 = (counter3to4 * 100 / students).toFixed(2);
    let below3 = (counterBelow3 * 100 / students).toFixed(2);
    let average = (totalGrades/students).toFixed(2);

    console.log(`Top students: ${topStudents}%`);
    console.log(`Between 4.00 and 4.99: ${between4and5}%`);
    console.log(`Between 3.00 and 3.99: ${between3and4}%`);
    console.log(`Fail: ${below3}%`);
    console.log(`Average: ${average}`);
}

grades(["6", "2", "3", "4", "5", "6", "2.2"]);