export const rows = 6;
export const cols = 7;

export const tileSkewPattern = [
    [0, 9, 3, 8, 1, 10, 2],
    [8, 4, 7, 3, 7, 2, 9],
    [0, 9, 3, 8, 1, 10, 2],
    [8, 4, 7, 3, 7, 2, 9],
    [0, 9, 3, 8, 1, 10, 2],
    [8, 4, 7, 3, 7, 2, 9],
];

export const shadowSkewPattern = [
    [8, 4, 7, 3, 7, 2, 9],
    [0, 9, 3, 8, 1, 10, 2],
    [8, 4, 7, 3, 7, 2, 9],
    [0, 9, 3, 8, 1, 10, 2],
    [8, 4, 7, 3, 7, 2, 9],
    [0, 9, 3, 8, 1, 10, 2],
];

export const weekdays = [
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
];

//! import your images from relative paths and use the imports here
//! ex: import April from '../assets/months/April.png';
//! export const monthHeader = [April, ...];
export const monthHeader = [
    "src/assets/months/April.png",
    "src/assets/months/May.png",
    "src/assets/months/June.png",
    "src/assets/months/July.png",
    "src/assets/months/August.png",
    "src/assets/months/September.png",
    "src/assets/months/October.png",
    "src/assets/months/November.png",
    "src/assets/months/December.png",
    "src/assets/months/January.png",
    "src/assets/months/February.png",
    "src/assets/months/March.png",
];

/*
  ! Consider encapsulating the dateKeys and dateNumbers into a single object with the month as the key and the values as the dateKeys and dateNumbers arrays.
  ! Ex: 
  export const monthData = {
    April: {
        dateKeys: [...],
        dateNumbers: [...]
    },
    ...
  } 

  ! You could then access the data more intuitively by using the month as the key, like so: monthData[month].dateKeys

  ! You cna also create an enum for the values to reduce liklihood of typos and make the code more readable.
    ! Ex:
    enum DateKey {
        None = "none",
        Skip = "skip",
        StoryAll = "storyAll",
        Free = "free",
        Deadline = "deadline",
        EveningOnly = "eveningOnly",
        AfterSchoolOnly = "afterSchoolOnly",
        Finale = "finale"
    }

    ! You can then use the enum values in your arrays to make the code more readable and reduce the liklihood of typos.
    ! Ex:
    dateKeys: [
        [ //April
            [DateKey.None, DateKey.None, DateKey.None, DateKey.None, DateKey.None, DateKey.Skip, DateKey.Skip],
            [DateKey.Skip, DateKey.Skip, DateKey.Skip, DateKey.Skip, DateKey.Skip, DateKey.Skip, DateKey.StoryAll],
    ]
    ! Then when you need to access these values elsewhere in the code you can use the enum for checks and you significantly reduce the liklihood of typos.
    ! Ex:
    if (dateKeys[month][date] === DateKey.StoryAll) {
        ...
    }    
*/

export const dateKeys = [
    [ //April
        ["none", "none", "none", "none", "none", "skip", "skip"],
        ["skip", "skip", "skip", "skip", "skip", "skip", "storyAll"],
        ["storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll"],
        ["storyAll", "free", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "deadline", "deadline"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //May
        ["deadline", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "free", "eveningOnly"],
        ["eveningOnly", "free", "free", "storyAll", "storyAll", "storyAll", "storyAll"],
        ["eveningOnly", "storyAll", "eveningOnly", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "free", "free"],
        ["free", "eveningOnly", "free", "none", "none", "none", "none"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //June
        ["none", "none", "none", "free", "deadline", "deadline", "deadline"],
        ["eveningOnly", "free", "free", "free", "eveningOnly", "eveningOnly", "storyAll"],
        ["free", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "free"],
        ["free", "free", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "none", "none"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //July
        ["none", "none", "none", "none", "none", "free", "free"],
        ["free", "free", "free", "deadline", "deadline", "deadline", "eveningOnly"],
        ["eveningOnly", "eveningOnly", "free", "storyAll", "storyAll", "storyAll", "storyAll"],
        ["eveningOnly", "eveningOnly", "free", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly"],
        ["storyAll", "eveningOnly", "free", "free", "free", "free", "free"],
        ["free", "none", "none", "none", "none", "none", "none"],
    ],
    [ //August
        ["none", "free", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "deadline", "deadline", "deadline"],
        ["eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly"],
        ["eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "none", "none", "none"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //September
        ["none", "none", "none", "none", "eveningOnly", "free", "eveningOnly"],
        ["free", "free", "afterSchoolOnly", "storyAll", "storyAll", "storyAll", "storyAll"],
        ["storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll"],
        ["eveningOnly", "free", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "free", "none"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //October
        ["none", "none", "none", "none", "none", "none", "free"],
        ["free", "afterSchoolOnly", "free", "free", "free", "free", "deadline"],
        ["deadline", "deadline", "storyAll", "eveningOnly", "eveningOnly", "free", "free"],
        ["free", "storyAll", "storyAll", "storyAll", "storyAll", "eveningOnly", "eveningOnly"],
        ["eveningOnly", "eveningOnly", "eveningOnly", "storyAll", "eveningOnly", "storyAll", "eveningOnly"],
        ["free", "free", "none", "none", "none", "none", "none"],
    ],
    [ //November
        ["none", "none", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "deadline", "deadline", "storyAll"],
        ["storyAll", "storyAll", "eveningOnly", "eveningOnly", "eveningOnly", "free", "free"],
        ["free", "free", "free", "free", "none", "none", "none"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //December
        ["none", "none", "none", "none", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "deadline", "deadline"],
        ["eveningOnly", "eveningOnly", "storyAll", "storyAll", "storyAll", "eveningOnly", "storyAll"],
        ["storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //January
        ["storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll"],
        ["storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "free", "free"],
        ["free", "free", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "free", "free", "free", "free"],
        ["free", "free", "free", "none", "none", "none", "none"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //February
        ["none", "none", "none", "free", "deadline", "finale", "skip"],
        ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
        ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
        ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
        ["skip", "skip", "none", "none", "none", "none", "none"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
    [ //March
        ["none", "none", "skip", "skip", "skip", "skip", "skip"],
        ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
        ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
        ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
        ["skip", "skip", "skip", "skip", "skip", "none", "none"],
        ["none", "none", "none", "none", "none", "none", "none"],
    ],
]

export const dateNumbers = [
    [ //April
        ["", "", "", "", "", "1", "2"],
        ["3", "4", "5", "6", "7", "8", "9"],
        ["10", "11", "12", "13", "14", "15", "16"],
        ["17", "18", "19", "20", "21", "22", "23"],
        ["24", "25", "26", "27", "28", "29", "30"],
        ["", "", "", "", "", "", ""],
    ],
    [ //May
        ["1", "2", "3", "4", "5", "6", "7"],
        ["8", "9", "10", "11", "12", "13", "14"],
        ["15", "16", "17", "18", "19", "20", "21"],
        ["22", "23", "24", "25", "26", "27", "28"],
        ["29", "30", "31", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ],
    [ //June
        ["", "", "", "1", "2", "3", "4"],
        ["5", "6", "7", "8", "9", "10", "11"],
        ["12", "13", "14", "15", "16", "17", "18"],
        ["19", "20", "21", "22", "23", "24", "25"],
        ["26", "27", "28", "29", "30", "", ""],
        ["", "", "", "", "", "", ""],
    ],
    [ //July
        ["", "", "", "", "", "1", "2"],
        ["3", "4", "5", "6", "7", "8", "9"],
        ["10", "11", "12", "13", "14", "15", "16"],
        ["17", "18", "19", "20", "21", "22", "23"],
        ["24", "25", "26", "27", "28", "29", "30"],
        ["31", "", "", "", "", "", ""],
    ],
    [ //August
        ["", "1", "2", "3", "4", "5", "6"],
        ["7", "8", "9", "10", "11", "12", "13"],
        ["14", "15", "16", "17", "18", "19", "20"],
        ["21", "22", "23", "24", "25", "26", "27"],
        ["28", "29", "30", "31", "", "", ""],
        ["", "", "", "", "", "", ""],
    ],
    [ //September
        ["", "", "", "", "1", "2", "3"],
        ["4", "5", "6", "7", "8", "9", "10"],
        ["11", "12", "13", "14", "15", "16", "17"],
        ["18", "19", "20", "21", "22", "23", "24"],
        ["25", "26", "27", "28", "29", "30", ""],
        ["", "", "", "", "", "", ""],
    ],
    [ //October
        ["", "", "", "", "", "", "1"],
        ["2", "3", "4", "5", "6", "7", "8"],
        ["9", "10", "11", "12", "13", "14", "15"],
        ["16", "17", "18", "19", "20", "21", "22"],
        ["23", "24", "25", "26", "27", "28", "29"],
        ["30", "31", "", "", "", "", ""],
    ],
    [ //November
        ["", "", "1", "2", "3", "4", "5"],
        ["6", "7", "8", "9", "10", "11", "12"],
        ["13", "14", "15", "16", "17", "18", "19"],
        ["20", "21", "22", "23", "24", "25", "26"],
        ["27", "28", "29", "30", "", "", ""],
        ["", "", "", "", "", "", ""],
    ],
    [ //December
        ["", "", "", "", "1", "2", "3"],
        ["4", "5", "6", "7", "8", "9", "10"],
        ["11", "12", "13", "14", "15", "16", "17"],
        ["18", "19", "20", "21", "22", "23", "24"],
        ["25", "26", "27", "28", "29", "30", "31"],
        ["", "", "", "", "", "", ""],
    ],
    [ //January
        ["1", "2", "3", "4", "5", "6", "7"],
        ["8", "9", "10", "11", "12", "13", "14"],
        ["15", "16", "17", "18", "19", "20", "21"],
        ["22", "23", "24", "25", "26", "27", "28"],
        ["29", "30", "31", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ],
    [ //February
        ["", "", "", "1", "2", "3", "4"],
        ["5", "6", "7", "8", "9", "10", "11"],
        ["12", "13", "14", "15", "16", "17", "18"],
        ["19", "20", "21", "22", "23", "24", "25"],
        ["26", "27", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ],
    [ //March
        ["", "", "1", "2", "3", "4", "5"],
        ["6", "7", "8", "9", "10", "11", "12"],
        ["13", "14", "15", "16", "17", "18", "19"],
        ["20", "21", "22", "23", "24", "25", "26"],
        ["27", "28", "29", "30", "31", "", ""],
        ["", "", "", "", "", "", ""],
    ],
]