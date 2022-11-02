function setUp() {
    let lab1 = [5, 5, 0, 5, 5, 10, 10];
    let lab2 = [5, 5, 5, 5, 5, 5, 10];
    let lab3 = [5, 10, 10, 15];
    let lab4_5 = [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 5];
    let lab6 = [5, 5, 10, 5, 5, 10];
    let lab8 = [5, 10, 10, 10, 5];
    let quiz1 = 40;
    let output = main(lab1, lab2, lab3, lab4_5, lab6, lab8, quiz1)
    console.log(output);
}


function get_sum(lab) {
    let sum = 0 
    for (let i = 0; i < lab.length; i++) {
        sum += lab[i]
    }
    return sum 
}

function main(lab1, lab2, lab3, lab4_5, lab6, lab8, quiz1) {
    let lab_sums = [get_sum(lab1), get_sum(lab2), get_sum(lab3), get_sum(lab4_5), get_sum(lab6), get_sum(lab8)]
    let total_lab = get_sum(lab_sums)
    let total_grade = ((total_lab / 280) * 0.6 + (quiz1 / 40) * 0.4) * 100
    return {
        "lab1": lab1,
        "lab2": lab2,
        "lab3": lab3,
        "lab4_5": lab4_5,
        "lab6": lab6,
        "lab8": lab8,
        "quiz1": quiz1,
        total_grade: total_grade,
    }
    }

setUp()