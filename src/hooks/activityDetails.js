export const FoolDetails = [
  "This entire Confidant progresses automatically."
];

export const MagicianDetails = [
  "This entire Confidant progresses automatically."
];

export const PriestessDetails = [
  "Starting this Confidant requires Rank 3 Knowledge (Scholarly). This Confidant's Rank 6 event requires Rank 5 Charm (Debonair)."
];

export const EmpressDetails = [
  "This Confidant's Rank 4 event requires Rank 5 Proficiency (Transcendent). This Confidant's Rank 9 event cannot be initiated prior to November 25."
];

export const EmperorDetails = [
  "This Confidant's Rank 6 event requires Rank 4 Proficiency (Masterful)."
];

export const ChariotDetails = [
  "This Confidant's Rank 7 event only occurs Wednesday and Friday nights."
];

export const SunDetails = [
    "To start this Confidant, once the player is able to leave Yongen-Jaya at night starting on 5/6, they must work at the Beef Bowl Shop twice, then listen to Yoshida's speech on a following night. The player can then start this Conifidant the next time they visit Yoshida."
];

export const activityDetailsNames = [
  { name: "Fool", details: FoolDetails },
  { name: "Magician", details: MagicianDetails },
  { name: "Priestess", details: PriestessDetails },
  { name: "Empress", details: EmpressDetails },
  { name: "Emperor", details: EmperorDetails },
  { name: "Chariot", details: ChariotDetails },
  { name: "Sun", details: SunDetails },
];

export const PriestessChoices = {
  1: {
    points: 0,
    choices: [
      [
        ["You're very well informed.", "+5"],
        ["Have you ever been here?", "0"],
        ["Stay close to me.", "+0"]
      ],
      [
        ["You should have known better.", "+5"],
        ["That was dangerous.", "+10"],
        ["You get flustered easily, huh?", "0"],
      ],
      [
        ["Why is it called a salon?", "0"],
        ["What kind of place is that?", "0"],
      ],
      [
        ["Couldn't agree more.", "+5"],
        ["He just wouldn't give up.", "0"],
        ["Let's actually go in next time.", "0"],
      ]
    ]
  },
  2: {
    points: 15,
    choices: [
      [
        ["You have the wrong idea.", "+5"],
        ["So what if we were together?", "0"],
        ["It's none of your business.", "0"]
      ],
      [
        ["Don't let it get to you.", "+5"],
        ["You can change.", "+10"],
        ["Beep boop.", "0"],
      ],
      [
        ["Sounds like you two get along.", "+5"],
        ["Buchimaru-kun?", "0"],
        ["Okay, calm down.", "0"],
      ],
    ]
  },
  3: {
    points: 20,
    choices: [
      [
        ["That's unlike you.", "+5"],
        ["Is Thieves work distracting you?", "0"],
        ["I'm sure you did better than me.", "0"]
      ],
      [
        ["Eiko?", "0"],
        ["...Who?", "0"],
      ],
      [
        ["Don't you have goals?", "0"],
        ["What about college?", "0"],
        ["What do you mean?	", "0"]
      ],
      [
        ["Why do you use it?", "+10"],
        ["That's adorable.", "+5"],
        ["You're not very ladylike...", "0"]
      ],
      [
        ["Do you still want to pursue it?", "0"],
        ["I like a woman in uniform.", "+5"],
        ["It's an amazing goal.", "+10"]
      ],
    ]
  },
  4: {
    points: 20,
    choices: [
      [
        ["Are you jealous of them?", "+0"],
        ["That's annoying.", "+5"],
        ["He sounds suspicious.", "+10"]
      ],
      [
        ["I got this.", "+10"],
        ["Why do I have to do it?", "0"],
        ["Only if I can take it seriously.", "+5"]
      ],
      [
        ["Fist! Of! Justice!", "0"],
        ["Report him to the police.", "0"],
        ["Try to reach out to her.", "+5"]
      ],
    ]
  },
  5: {
    points: 20,
    choices: [
      [
        ["We just started.", "+5"],
        ["We're fighting right now.", "0"],
        ["Love comes in many forms.", "+10"]
      ],
      [
        ["Don't be so pushy.", "0"],
        ["Back off.", "0"],
        ["Here, have my number instead.", "0"]
      ],
      [
        ["No, you're being considerate.", "0"],
        ["You worry too much.", "0"],
        ["Probably a little.", "0"]
      ],
      [
        ["Tell him you're on a date.", "+5"],
        ["You're allowed to ignore him.", "0"],
        ["Fire the same thing back.", "0"]
      ],
    ]
  },
  6: {
    points: 30,
    choices: [
      [
        ["Do you think he likes you?", "0"],
        ["Does Eiko know about this?", "0"]
      ],
      [
        ["Probably a little.", "0"],
        ["You watch too many soap operas.", "0"],
        ["He's definitely suspicious.", "0"]
      ],
      [
        ["Who was their leader?", "0"],
        ["What gang was it?", "0"],
      ],
      [
        ["That's a horrible story.", "+10"],
        ["Was it tough without him?	", "+5"],
        ["He was a noble man.", "+15"]
      ],
      [
        ["That's admirable.", "+15"],
        ["I'm sure he was happy.", "+15"],
      ],
      [
        ["Do you have an answer?", "+5"],
        ["You can figure that out now.", "+5"],
      ],
      [
        ["I'm game if you are.", "+5"],
        ["What are you going to say?", "0"],
        ["Refuse her, please.", "+5"]
      ],
      [
        ["Of course..", "+5"],
        ["I guess so.", "0"],
        ["It's the role I always hoped for.", "+5"]
      ],
    ]
  },
  7: {
    points: 20,
    choices: [
      [
        ["He says that to all his girls.", "+5"],
        ["That's how he ropes you in.", "+5"],
        ["I'm not sure.", "0"]
      ],
      [
        ["Absolutely.", "+10"],
        ["What are we going to do?", "+5"],
        ["Eh, she deserves him.", "+5"]
      ],
    ]
  },
  8: {
    points: 55,
    choices: [
      [
        ["Get away from her!", "+10"],
        ["Your fight's with me.", "+10"],
        ["I'm calling the cops.", "+10"]
      ],
      [
        ["We should get out of here.", "+5"],
        ["Follow me.", "+5"],
      ],
      [
        ["It looked like it hurt.", "0"],
        ["That was the right move.", "+5"],
        ["You really smacked her.", "0"]
      ],
      [
        ["I'm a regular here.", "+15"],
        ["It's a popular meeting spot.", "+10"],
        ["Not as much as you.", "+5"]
      ],
      [
        ["You'll find someone someday.", "+10 (FRIENDS)"],
        ["I'll be your study partner.", "0 (ROMANCE)"],
      ],
      [
        ["(ROMANCE) I do.", "+10 (ROMANCE)"],
        ["(ROMANCE) That's not what I meant.", "0 (FRIENDS)"],
      ],
      [
        ["(FRIENDS) No problem at all.", "+5"],
        ["(FRIENDS) Man, that got tense.", "0"],
        ["(FRIENDS) You could always slap me too.", "0"],
        ["(ROMANCE) I'd do anything for you.", "+5"],
        ["(ROMANCE) Were you scared?", "0"],
        ["(ROMANCE) No big deal.", "0"]
      ],
    ]
  },
  9: {
    points: 0,
    choices: [
      [
        ["That's incredible.", "+5"],
        ["Your slap worked wonders.", "0"],
        ["I'm so relieved.", "0"]
      ],
      [
        ["Are you stressing over exams?", "+5"],
        ["Back to studying?", "0"],
        ["For your sister?", "0"]
      ],
      [
        ["Police commissioner?", "0"],
        ["That sounds difficult.", "+5"],
        ["Why did you choose that?", "0"]
      ],
      [
        ["What an admirable goal.", "+15"],
        ["That's an amazing dream.", "+5"],
        ["Your father would be proud.", "+10"]
      ],
      [
        ["(FRIENDS) Maybe a bit.", "+5"],
        ["(FRIENDS) We went through so much...", "+10"],
      ],
      [
        ["Haha, yeah.", "0"],
        ["It's not funny at all.", "0"],
        ["Just be careful, okay?", "+5"]
      ],
      [
        ["(ROMANCE) What's wrong?", "0"],
        ["(ROMANCE) Do you want to study?", "0"],
      ],
    ]
  },
};

export const activityDetailsChoices = [
  { name: "Priestess", details: PriestessChoices },
];