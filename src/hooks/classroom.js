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

const ExamAnswers = [
    new ClassroomQuestion(
        "5/11",
        `Minamoto no Yoshitsune
        \nMinamoto no Yoritomo
        \nYoritomo won
        \nThe weak`,
    ),
    new ClassroomQuestion(
        "5/12",
        `Cognition
        \nBoth`,
    ),
    new ClassroomQuestion(
        "5/13",
        `The Devil's Dictionary
        \nFemme Fatale`,
    ),
]

export { ClassroomQuestions, ExamAnswers };