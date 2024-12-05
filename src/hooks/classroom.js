class ClassroomQuestion {
    constructor(date, answer) {
        this.date = date;
        this.answer = answer;
    }
}

const ClassroomQuestions = [
    new ClassroomQuestion(
        "4/12",
        `Villains`,
    ),
    new ClassroomQuestion(
        "4/19",
        `They're the same`,
    ),
    new ClassroomQuestion(
        "4/23",
        `All of them`,
    ),
];

export { ClassroomQuestions };