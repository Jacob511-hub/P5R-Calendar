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
        ["Stay close to me.", "0"]
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

export const FaithChoices = {
  1: {
    points: 15,
    choices: [
      [
        ["We're just getting started.", "+5"],
        ["Go easy on me.", "0"],
        ["I'm so done with this.", "+5"]
      ],
      [
        ["Next time, then.", "+5"],
        ["You doing okay?", "0"],
        ["Lucky for me...", "0"],
      ],
      [
        ["I see.", "0"],
        ["So now...?", "0"],
      ],
      [
        ["No problem.", "0"],
        ["You sure?", "0"],
        ["Uh, romantically?", "0"],
      ],
      [
        ["Leave it to me.", "0"],
        ["Let's give it a try.", "0"],
        ["Then follow my lead.", "0"],
      ],
      [
        ["Impressive.", "+5"],
        ["Gotta push through it.", "0"],
        ["You did eat eventually, right?", "0"],
      ],
    ]
  },
  2: {
    points: 51,
    choices: [
      [
        ["Making bento?", "+10"],
        ["Potluck parties?", "0"],
        ["\"This\" being…?", "0"]
      ],
      [
        ["I'm touched!", "+5"],
        ["It looks delicious.", "+5"],
        ["Let's see if it's good...", "0"]
      ],
      [
        ["Is that all for you?", "+10"],
        ["That seems a little much.", "+5"],
        ["What IS that?", "0"]
      ],
      [
        ["This tastes like...", "0"],
        ["It's definitely unique.", "+5"],
        ["It's... greeeaaat...", "0"]
      ],
      [
        ["Not exactly.", "0"],
        ["Is there a third option...?", "0"],
      ],
      [
        ["Calm down.", "0"],
        ["You're going to get it now?", "0"],
      ],
      [
        ["This works fine as is.", "0"],
        ["I'm enjoying this.", "0"],
        ["Let's just eat.", "0"]
      ],
      [
        ["You could try again sometime?", "+10"],
        ["It happens.", "+10"],
        ["Just keep at it.", "+10"]
      ],
      [
        ["That sounds right.", "0"],
        ["Maybe...", "0"],
      ],
    ]
  },
  3: {
    points: 20,
    choices: [
      [
        ["You have bad eyesight?", "0"],
        ["You're looking to buy?", "+5"],
        ["I have enough glasses.", "0"]
      ],
      [
        ["A pretty modern look.", "+10"],
        ["Not my style.", "0"],
        ["I look so aloof in these.", "+5"]
      ],
      [
        ["Do they suit your dad, though?", "0"],
        ["I'm not so sure...", "0"],
      ],
      [
        ["Of course.", "+5"],
        ["Let's keep going.", "+5"],
        ["Sure, whatever.", "0"]
      ],
      [
        ["Trust your instincts.", "0"],
        ["Don't overthink it.", "0"],
      ],
      [
        ["Good choice.", "+5"],
        ["I'm sure he'll love it.", "0"],
      ],
      [
        ["It's part of our deal.", "0"],
        ["Not a problem at all.", "0"],
        ["I expect compensation.", "0"]
      ],
      [
        ["Everyone deals with that.", "+5"],
        ["That's your slump talking.", "0"],
      ],
      [
        ["Good luck.", "0"],
        ["We'll work at it together.", "+5"],
        ["No rush, though.", "0"]
      ],
      [
        ["I'm glad to hear that.", "+5"],
        ["You should be more confident.", "+5"],
        ["Of course he is.", "0"]
      ],
    ]
  },
  4: {
    points: 0,
    choices: [
      [
        ["It's a surprise, yeah.", "+5"],
        ["Not at all.", "0"],
        ["What are you scheming?", "0"]
      ],
      [
        ["This seems kind of sudden.", "0"],
        ["If I'm just watching...", "0"],
      ],
      [
        ["It is a good idea.", "+5"],
        ["Go ahead. I'll watch.", "+10"],
        ["Maybe stick to gymnastics.", "0"]
      ],
      [
        ["Don't give up yet.", "0"],
        ["Just don't lose hope.", "0"],
        ["You can beat this, right?", "0"]
      ],
      [
        ["Congratulations.", "+10"],
        ["I saw!", "+10"],
        ["How's that feel?", "+5"]
      ],
      [
        ["That's important.", "+10"],
        ["Don't forget how that feels.", "+5"],
      ],
      [
        ["Nicely done.", "0"],
        ["It's not over yet.", "0"],
      ],
      [
        ["Swimming.", "+10"],
        ["Running.", "+5"],
        ["Gymnastics.", "+10"]
      ],
    ]
  },
  5: {
    points: 0,
    choices: [
      [
        ["It wasn't on purpose.", "0"],
        ["What could you have done?", "0"],
        ["At least you realize it now.", "0"]
      ],
      [
        ["Don't beat yourself up.", "0"],
        ["What'll you do now?", "0"],
        ["Calm down.", "0"]
      ],
      [
        ["You two were close, then.", "0"],
        ["Those must be good memories.", "0"],
        ["All for ice cream, huh?", "0"]
      ],
      [
        ["...That IS genius.", "0"],
        ["How old was she again?", "0"],
      ],
      [
        ["She cared about you.", "0"],
        ["Sounds like tough training.", "0"],
        ["For the ice cream, right?", "0"]
      ],
      [
        ["Why?", "0"],
        ["I can imagine.", "0"],
      ],
      [
        ["It must have been hard.", "0"],
        ["What about Kasumi's feelings?", "0"],
        ["Sounds like running away.", "0"]
      ],
      [
        ["You have to accept it.", "0"],
        ["Try not to think about it.", "0"],
        ["So what happens now?", "0"]
      ],
      [
        ["I will.", "0"],
        ["I can manage that.", "0"],
        ["If it's part of the deal.", "0"]
      ],
      [
        ["Do you want to run away?", "0"],
        ["You have to face it.", "+10"],
        ["So what if it is?", "0"]
      ],
    ]
  },
  6: {
    points: 55,
    choices: [
      [
        ["Maybe.", "0"],
        ["Who knows?", "0"],
        ["Were you frustrated?", "0"],
      ],
      [
        ["Is she scary?", "0"],
        ["Is she strict?", "0"],
      ],
      [
        ["You okay?", "+10"],
        ["That was a big sigh.", "0"],
        ["She's a real taskmaster.", "0"],
      ],
      [
        ["That isn't true.", "+15"],
        ["You need more confidence.", "0"],
        ["That's just a mental block.", "0"],
      ],
      [
        ["It'll be like a duet.", "0"],
        ["You'll become stronger.", "0"],
      ],
      [
        ["Of course.", "+15"],
        ["I could watch you forever.", "+10"],
        ["Another love confession?", "+15"],
      ],
      [
        ["I was internally screaming.", "0"],
        ["Yeah, that was a breeze.", "0"],
        ["I love a good challenge.", "+10"],
      ],
    ]
  },
}

export const CouncillorChoices = {
  1: {
    points: 0,
    choices: [
      [
        ["That's right.", "0"],
        ["You too, huh?", "0"],
      ],
      [
        ["Didn't have much choice.", "0"],
        ["We made a deal.", "+5"],
        ["I'm a little nervous.", "+5"],
      ],
      [
        ["It's in the past.", "0"],
        ["I'm doing okay now.", "0"],
        ["So much for my privacy.", "0"],
      ],
      [
        ["But it sounds right.", "+10"],
        ["Yep.", "+5"],
        ["Kinda creeping me out here.", "0"],
      ],
      [
        ["So... what?", "0"],
        ["I'll need more details.", "0"],
        ["Uh...", "0"],
      ],
      [
        ["Well, okay.", "+5"],
        ["Better make it worth it.", "0"],
        ["Why me, though?", "0"],
      ],
    ]
  },
  2: {
    points: 28,
    choices: [
      [
        ["So they have, huh?", "+5"],
        ["You worry too much.", "0"],
        ["Thanks to you, probably.", "+5"],
      ],
      [
        ["Of course.", "+5"],
        ["Yeah, for our deal.", "+5"],
        ["I forgot.", "0"],
      ],
      [
        ["When someone betrays me.", "0"],
        ["When I lie.", "0"],
        ["When I get punched.", "0"],
      ],
      [
        ["That one seems necessary.", "+5"],
        ["We'd be better off without it.", "0"],
        ["It's a seed for new loves.", "+5"],
      ],
      [
        ["Did that help?", "+5"],
        ["Don't worry about it.", "+5"],
      ],
      [
        ["Good work over there.", "+5"],
        ["So you're actually working?", "0"],
        ["Getting to your research now?", "0"],
      ],
    ]
  },
  3: {
    points: 42,
    choices: [
      [
        ["Where's this coming from?", "0"],
        ["What are you talking about?", "0"],
      ],
      [
        ["I know, right...?", "+10"],
        ["It's not the worst.", "0"],
        ["Talk about a reward.", "+5"],
      ],
      [
        ["That'd be great.", "+5"],
        ["Is that possible?", "0"],
        ["Is that what you're researching?", "+10"],
      ],
      [
        ["......", "0"],
        ["Are you okay?", "0"],
      ],
      [
        ["That's a grand plan.", "+5"],
        ["You're so kind.", "+5"],
      ],
      [
        ["That sounds fun.", "+10"],
        ["I'm not the \"free labor\" type.", "0"],
        ["Nope.", "0"],
      ],
      [
        ["I feel completely fine.", "+5"],
        ["It's part of our deal, so...", "+5"],
        ["I'm struggling, to be honest.", "0"],
      ],
    ]
  },
  4: {
    points: 32,
    choices: [
      [
        ["This looks great!", "+10"],
        ["How old do you think I am?", "0"],
        ["I could just take cash...", "+5"],
      ],
      [
        ["The one-cookie container.", "0"],
        ["The ten-cookie container.", "0"],
        ["It was a tie.", "0"],
      ],
      [
        ["I never considered that.", "0"],
        ["They're getting played.", "+5"],
        ["You know, you're right.", "+10"],
      ],
      [
        ["My senses lied to me!", "+5"],
        ["Hey, as long as it tastes good.", "+5"],
        ["It's a little scary.", "0"],
      ],
      [
        ["Not \"truth\" exactly...", "0"],
        ["I guess so.", "+5"],
        ["I don't know...", "0"],
      ],
      [
        ["I really don't mind.", "+5"],
        ["Come on, man.", "0"],
        ["It was thought-provoking.", "+5"],
      ],
    ]
  },
  5: {
    points: 28,
    choices: [
      [
        ["You wanted to talk?", "0"],
        ["Another cup?", "+5"],
        ["We've got curry too.", "+5"],
      ],
      [
        ["I can do that.", "+10"],
        ["It's a deal.", "+5"],
        ["I'm not up for this...", "0"],
      ],
      [
        ["Isn't that enough?", "0"],
        ["You need more than that?", "0"],
      ],
      [
        ["So what CAN we do?", "0"],
        ["It's a hard question...", "0"],
        ["So give up.", "+5"],
      ],
      [
        ["All hearts share some things.", "0"],
        ["What if they're connected?", "0"],
      ],
      [
        ["Calm down.", "0"],
        ["Where's this coming from?", "0"],
        ["Cognitive psience?", "0"],
      ],
      [
        ["Calm down.", "+5"],
        ["What's going on?", "+5"],
        ["Heavy breathing? Pervert.", "0"],
      ],
    ]
  },
  6: {
    points: 60,
    choices: [
      [
        ["You really are dedicated.", "+10"],
        ["Are they even relevant?", "0"],
        ["Are you a fan?", "+10"],
      ],
      [
        ["No idea.", "+10"],
        ["As in, removing them?", "+15"],
        ["How about you, Maruki?", "+15"],
      ],
      [
        ["The change of heart...?", "+15"],
        ["......", "0"],
      ],
      [
        ["I have no clue.", "0"],
        ["Sounds pretty far-fetched.", "+10"],
        ["It's intriguing.", "+15"],
      ],
    ]
  },
  7: {
    points: 30,
    choices: [
      [
        ["I'm good on cookies, thanks.", "+5"],
        ["What do you mean?", "+10"],
        ["Thanks, but I should get going.", "0"],
      ],
      [
        ["Ooh, really?", "+10"],
        ["Can you afford that?", "+5"],
        ["Sorry, I prefer sushi.", "+5"],
      ],
      [
        ["Thanks for the food!", "+10"],
        ["Self-control much?", "0"],
        ["This is quite the spread.", "+5"],
      ],
      [
        ["I'm his pupil.", "+5"],
        ["It's complicated...", "0"],
        ["We've made a deal.", "+10"],
      ],
      [
        ["Congratulations.", "+10"],
        ["Way to go.", "+10"],
      ],
      [
        ["I sure do.", "+10"],
        ["Let's celebrate.", "+10"],
        ["I don't care who pays.", "0"],
      ],
      [
        ["She a girlfriend of yours?", "0"],
        ["Who's Rumi?", "0"],
        ["Should I leave you two to talk?", "0"],
      ],
      [
        ["He's a good friend.", "+5"],
        ["Learn some independence.", "0"],
        ["You'll get the tab next time.", "0"],
      ],
    ]
  },
  8: {
    points: 0,
    choices: [
      [
        ["Yeah.", "0"],
        ["Kind of.", "0"],
      ],
      [
        ["Kind of sad...", "+10"],
        ["Is our deal over?", "+5"],
        ["Well... take care of yourself.", "+5"],
      ],
    ]
  },
}

export const activityDetailsChoices = [
  { name: "Priestess", details: PriestessChoices },
  { name: "Faith", details: FaithChoices },
  { name: "Councillor", details: CouncillorChoices },
];