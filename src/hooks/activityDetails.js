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

export const EmpressChoices = {
  1: {
    points: 0,
    choices: [
      [
        ["You like coffee?", "+5"],
        ["Are you opening a café?", "+10"],
        ["Are you starting a farm?", "+10"]
      ],
      [
        ["What do you mean?", "0"],
        ["So you won't accept his offer?", "0"],
        ["He sounds suspicious.", "+5"]
      ],
      [
        ["This is a complex issue.", "+10"],
        ["You might be wrong.", "+5"],
        ["Maybe you should fire him.", "+5"]
      ],
      [
        ["Moonlight Carrot.", "+5"],
        ["Sun Tomato.", "+5"],
        ["Jewel Melon.", "+10"]
      ],
    ]
  },
  2: {
    points: 14,
    choices: [
      [
        ["A phantom thief doesn't worry.", "+5"],
        ["They won't find out.", "+10"],
        ["It'll be okay, I promise.", "+10"]
      ],
      [
        ["\"I don't want to go with you.\"", "+5"],
        ["\"I'm afraid of flying.\"", "0"],
        ["\"We should break up.\"", "0"]
      ],
      [
        ["I have.", "+5"],
        ["Not yet.", "+10"],
        ["Too many times to count.", "+5"]
      ],
      [
        ["Smart response.", "+5"],
        ["Sounds like a hassle.", "0"],
        ["Which friend?", "0"]
      ],
    ]
  },
  3: {
    points: 28,
    choices: [
      [
        ["That's pricey.", "+5"],
        ["What a rip-off.", "0"],
        ["It must be amazing.", "+10"]
      ],
      [
        ["I can't let you do that.", "+10"],
        ["Let me cover the bill.", "+5"],
        ["Cheers.", "+10"]
      ],
      [
        ["You mean... poop!?", "+10"],
        ["I can taste the elephant.", "+10"],
        ["Excuse me while I vomit.", "+10"]
      ],
      [
        ["Hands off my cat.", "0"],
        ["I'd rather not think about it.", "0"],
        ["Let's ask him.", "+5"]
      ],
      [
        ["He seemed nice enough.", "0"],
        ["He was a little sketchy.", "0"],
        ["I'm not really sure.", "+5"]
      ],
      [
        ["I don't mind.", "0"],
        ["It was rather intriguing.", "0"],
        ["Let's get coffee again sometime.", "+5"]
      ],
    ]
  },
  4: {
    points: 15,
    choices: [
      [
        ["Trust who you want to trust.", "0"],
        ["Somebody's telling the truth.", "+10"],
        ["Trust no one.", "+5"]
      ],
      [
        ["Are you really considering it?", "0"],
        ["You can't just give in.", "0"],
        ["There has to be another way.", "+10"]
      ],
      [
        ["That doesn't matter now.", "+5"],
        ["You didn't have a choice.", "0"],
        ["I don't think so.", "+10"]
      ],
      [
        ["Are you okay?", "0"],
        ["We're all here for you.", "0"],
        ["Pinch yourself.", "+5"]
      ],
    ]
  },
  5: {
    points: 20,
    choices: [
      [
        ["That's fascinating.", "+10"],
        ["You're so studious.", "+5"],
        ["Can you make some for me?", "+10"]
      ],
      [
        ["I had no idea.", "+5"],
        ["That's a surprise.", "0"],
        ["I could've guessed that.", "0"]
      ],
      [
        ["You might be right.", "0"],
        ["That would be bad.", "+10"],
        ["Black like coffee?", "+10"]
      ],
      [
        ["You don't need to apologize.", "0"],
        ["That guy is horrible.", "0"],
      ],
      [
        ["You're not powerless.", "0"],
        ["Be strong, Haru.", "+10"],
      ],
      [
        ["You can talk to me anytime.", "+5"],
        ["Let him say what he wants.", "+5"],
        ["Wanna run away together?", "0"]
      ],
    ]
  },
  6: {
    points: 40,
    choices: [
      [
        ["You look exhausted.", "0"],
        ["Don't overwork yourself.", "0"],
        ["Let's go see the nurse.", "0"]
      ],
      [
        ["That sounds really tough...", "+5"],
        ["You should ask some employees.", "0"],
        ["What do you want to do?", "+10"]
      ],
      [
        ["What does Takakura-san think?", "+10"],
        ["There has to be a way.", "+10"],
        ["You should tell him that.", "+10"]
      ],
      [
        ["That's the spirit.", "+10"],
        ["You can do it, Haru.", "+10"],
      ],
      [
        ["Don't relax yet.", "0"],
        ["I'll always have your back.", "+5"],
        ["So what's this \"magic item\"?", "0"]
      ],
    ]
  },
  7: {
    points: 22,
    choices: [
      [
        ["The soil?", "+10"],
        ["The planters?", "0"],
        ["This beetle?", "0"]
      ],
      [
        ["It'll help him understand you.", "+10"],
        ["He's going to love it.", "+10"],
        ["He might not like it.", "0"]
      ],
      [
        ["I'll be cheering for you.", "+10"],
        ["You're amazing, Haru.", "+10"],
        ["Are you sure you can do that?", "+5"]
      ],
      [
        ["You can understand them?", "0"],
        ["It's in your nature to nurture.", "+5"],
        ["I want some too.", "+5"]
      ],
    ]
  },
  8: {
    points: 20,
    choices: [
      [
        ["Don't forget to breathe.", "0"],
        ["Believe in yourself.", "0"],
        ["I'm here for you, Haru.", "0"]
      ],
      [
        ["I'm sure you'll do great.", "+10"],
        ["It'll be fine.", "+5"],
        ["Give it all you've got, Haru.", "+10"]
      ],
      [
        ["You're very welcome.", "+10"],
        ["You did amazing.", "+10"],
        ["Do I get a reward?", "0"]
      ],
      [
        ["He saw us as good friends.", "0 (FRIENDS)"],
        ["I like you too, Haru.", "0 (ROMANCE)"],
      ],
      [
        ["(FRIENDS) Thanks", "0"],
        ["(FRIENDS) You sound so happy.", "+5"],
        ["(FRIENDS) I can't wait to try it.", "0"],
        ["(ROMANCE) What're you up to?", "0"],
        ["(ROMANCE) I wanted to hear your voice.", "+5"],
        ["(ROMANCE) I miss you.", "+5"]
      ],
    ]
  },
  9: {
    points: 0,
    choices: [
      [
        ["Will things be okay?", "0"],
        ["That's good to hear.", "+5"],
        ["You've done great, Haru.", "+10"]
      ],
      [
        ["I'm sure you'll succeed.", "+10"],
        ["This won't be easy.", "+5"],
        ["It all comes down to flavor.", "+5"]
      ],
      [
        ["If you want.", "0"],
        ["Probably not.", "0"],
        ["It's hard work, you know.", "0"]
      ],
      [
        ["(FRIENDS) I look forward to that.", "0"],
        ["(FRIENDS) I'll bring you a present.", "0"],
        ["(ROMANCE) I'm glad too.", "+10"],
        ["(ROMANCE) Don't deny yourself.", "+5"],
        ["(ROMANCE) Just my teammate?", "+10"]
      ],
    ]
  },
};

export const EmperorChoices = {
  1: {
    points: 0,
    choices: [
      [
        ["It's novel.", "+5"],
        ["It's enigmatic.", "+5"],
        ["...What is it?", "0"]
      ],
      [
        ["I can't wait.", "+10"],
        ["I hope you're right.", "+10"],
        ["Will people like it?", "0"]
      ],
      [
        ["You're already doing enough.", "+5"],
        ["I'm looking forward to it.", "0"],
        ["Will you really?", "0"]
      ],
    ]
  },
  2: {
    points: 25,
    choices: [
      [
        ["That was harsh.", "0"],
        ["What a dick...", "0"],
        ["Don't let it bother you.", "+5"]
      ],
      [
        ["Stop exaggerating.", "0"],
        ["This is just the beginning.", "0"],
        ["Stand up.", "0"]
      ],
      [
        ["You're really giving up?", "+5"],
        ["This isn't like you.", "+10"],
        ["Stand up, Yusuke.", "0"]
      ],
      [
        ["How exactly?", "+5"],
        ["That's the spirit.", "+5"],
      ],
      [
        ["That's the spirit.", "+5"],
        ["You're taking this too far.", "0"],
        ["That's all?", "0"]
      ],
    ]
  },
  3: {
    points: 15,
    choices: [
      [
        ["What are we doing here?", "0"],
        ["Why are we in a boat?", "+5"],
        ["I should bring a girl here.", "+5"]
      ],
      [
        ["Love comes in all forms.", "+10"],
        ["Maybe you should train more.", "+5"],
        ["You have a wild imagination.", "0"]
      ],
      [
        ["Don't get discouraged.", "+5"],
        ["Just keep drawing.", "0"],
        ["You lack love yourself.", "0"]
      ],
    ]
  },
  4: {
    points: 25,
    choices: [
      [
        ["Make me beautiful.", "0"],
        ["I dunno if I can do it...", "+5"],
        ["Do you want me to strip?", "+10"]
      ],
      [
        ["I'm sure you will.", "+10"],
        ["It doesn't look like it.", "+10"],
        ["Do you want to give up?", "+5"]
      ],
      [
        ["Don't overthink it.", "0"],
        ["You have to keep drawing.", "0"],
        ["There's still hope.", "+5"]
      ],
    ]
  },
  5: {
    points: 20,
    choices: [
      [
        ["It feels nostalgic.", "+5"],
        ["Why are we here again?", "0"],
        ["Are you going in?", "0"]
      ],
      [
        ["We should get it fixed.", "0"],
        ["Let's force it open.", "0"],
      ],
      [
        ["Are you okay?", "0"],
        ["You're not looking so good.", "0"],
      ],
      [
        ["Maybe he was sympathetic.", "+10"],
        ["He somehow knew you had skill.", "+5"],
        ["I couldn't possibly tell you.", "+10"]
      ],
      [
        ["He had a certain dignity.", "+5"],
        ["He seems reliable.", "0"],
        ["I'm not sure.", "0"]
      ],
    ]
  },
  6: {
    points: 26,
    choices: [
      [
        ["That's a great name.", "0"],
        ["What do you mean?", "+5"],
        ["Handsome...?", "0"]
      ],
      [
        ["The truth is within you.", "+10"],
        ["Money is important.", "0"],
      ],
      [
        ["Calm down.", "+5"],
        ["It's not a crime to enjoy sushi.", "+5"],
        ["Let's go again sometime.", "0"]
      ],
    ]
  },
  7: {
    points: 22,
    choices: [
      [
        ["Scenery is always nice.", "0"],
        ["I'd say Morgana.", "0"],
        ["It has to be Ann.", "+5"]
      ],
      [
        ["What's wrong with that?", "+5"],
        ["The same applies to everyone.", "0"],
        ["You've really grown, Yusuke.", "+10"]
      ],
    ]
  },
  8: {
    points: 35,
    choices: [
      [
        ["Her love for her son.", "+10"],
        ["The pain of separation.", "+10"],
        ["I don't know.", "+5"]
      ],
      [
        ["You've really changed, Yusuke.", "+10"],
        ["That's a great idea.", "+5"],
        ["It won't be easy.", "0"]
      ],
    ]
  },
  9: {
    points: 0,
    choices: [
      [
        ["It turned out well.", "0"],
        ["So you added hope?", "0"],
      ],
      [
        ["You provoked Yusuke on purpose?", "0"],
        ["Are you scheming something?", "0"],
      ],
      [
        ["\"He\"?", "0"],
        ["Do you mean Madarame?", "0"],
      ],
      [
        ["He was a good man deep down.", "+10"],
        ["That was another aspect of him.", "+10"],
      ],
      [
        ["Yeah...", "0"],
        ["You're stranger, Yusuke.", "0"],
        ["Are you sure about this?", "0"]
      ],
    ]
  },
};

export const HierophantChoices = {
  1: {
    points: 30,
    choices: [
      [
        ["Making coffee.", "+5"],
        ["Hitting on girls.", "0"],
        ["No idea.", "0"]
      ],
      [
        ["Who was he?", "0"],
        ["That guy seemed suspicious.", "+5"],
        ["Who's the \"her\" he mentioned?", "0"]
      ],
      [
        ["I want the ladies to love me.", "+5"],
        ["I don't care about that stuff.", "0"],
      ],
      [
        ["Got it.", "+5"],
        ["Give me a break.", "0"],
        ["Why'd you call my cell?", "0"]
      ],
    ]
  },
  2: {
    points: 40,
    choices: [
      [
        ["Medium-fine.", "+5"],
        ["Coarse.", "0"],
        ["Anything goes.", "0"]
      ],
      [
        ["Is it a date?", "0"],
        ["Is it trouble?", "+5"],
        ["You don't want my help anymore?", "0"]
      ],
      [
        ["I'm ready to work.", "+5"],
        ["Go easy on me.", "0"],
        ["Thank you in advance.", "+5"]
      ],
    ]
  },
  3: {
    points: 43,
    choices: [
      [
        ["Tell me more.", "+10"],
        ["That sounds tough...", "0"],
        ["It all tastes the same to me.", "0"]
      ],
      [
        ["Run for help", "0"],
        ["Call Sojiro's phone", "+10"],
        ["Kick the man out", "0"]
      ],
      [
        ["Understood.", "+5"],
        ["I'm kind of nervous...", "0"],
        ["I'll kick him out.", "0"]
      ],
    ]
  },
  4: {
    points: 20,
    choices: [
      [
        ["It wasn't bad.", "+5"],
        ["Nothing special.", "0"],
        ["I think I'm addicted!", "+10"]
      ],
      [
        ["Was she like Futaba?", "+5"],
        ["She wasn't normal, huh?", "+10"],
        ["So that's why you're a bachelor?", "0"]
      ],
      [
        ["It really paid off in the end.", "+5"],
        ["Almost brings a tear to my eye.", "0"],
        ["So much history...", "0"]
      ],
      [
        ["Sounds good to me.", "0"],
        ["She needs a balanced diet.", "+5"],
        ["There's always instant noodles.", "0"]
      ],
    ]
  },
  5: {
    points: 20,
    choices: [
      [
        ["I admire it.", "0"],
        ["I'm not impressed.", "0"],
        ["To each his own.", "+5"]
      ],
      [
        ["You're wrong.", "+5"],
        ["I'm sorry.", "0"],
        ["Shut your mouth.", "+10"]
      ],
      [
        ["Saving Futaba was no mistake.", "+5"],
        ["Just cut your ties with him.", "0"],
      ],
      [
        ["Is she okay?", "0"],
        ["Try to relax.", "0"],
        ["If I can help somehow...", "+5"]
      ],
    ]
  },
  6: {
    points: 14,
    choices: [
      [
        ["You might be right.", "+10"],
        ["That's not true.", "0"],
        ["They're still delicious.", "0"]
      ],
      [
        ["Are you all right?", "0"],
        ["Have you calmed down?", "0"],
        ["Do you want to talk?", "0"]
      ],
      [
        ["Let's talk to him.", "0"],
        ["You should tell him that.", "0"],
        ["You guys are one awkward duo.", "0"]
      ],
      [
        ["I'm truly glad.", "0"],
        ["You're welcome.", "0"],
        ["Feel like a real dad now?", "+5"]
      ],
    ]
  },
  7: {
    points: 0,
    choices: [
      [
        ["You want my suggestion?", "+10"],
        ["Something with curry.", "+15"],
        ["I can't decide!", "0"]
      ],
      [
        ["I didn't do anything wrong.", "0"],
        ["I was just protecting Futaba.", "+5"],
        ["I'm sorry.", "0"]
      ],
    ]
  },
  8: {
    points: 40,
    choices: [
      [
        ["It's great.", "+15"],
        ["He's a bit of a nag.", "+10"],
      ],
      [
        ["Are you crying?", "0"],
        ["You have a great daughter.", "+15"],
        ["Congrats.", "+15"]
      ],
      [
        ["You did great.", "+10"],
        ["Futaba did great.", "+10"],
        ["You two were already family.", "+10"]
      ],
    ]
  },
  9: {
    points: 0,
    choices: [
      [
        ["Good for you.", "+10"],
        ["Thank you.", "+15"],
      ],
    ]
  },
};

export const ChariotChoices = {
  1: {
    points: 20,
    choices: [
      [
        ["I'm counting on you.", "+15"],
        ["You seem pretty excited.", "+10"],
        ["...Help with what?", "+5"]
      ],
      [
        ["What about them?", "0"],
        ["And then you punched him?", "0"],
      ],
      [
        ["Do you go want to go back?", "+5"],
        ["Do you regret it?", "+5"],
      ],
      [
        ["You're already fast enough.", "+5"],
        ["Are your legs okay?", "+5"],
        ["It's never too late, man.", "+5"]
      ],
    ]
  },
  2: {
    points: 30,
    choices: [
      [
        ["Let's not fight.", "+5"],
        ["Want to train with us?", "0"],
        ["It's nice to meet you.", "0"]
      ],
      [
        ["Calm down, Ryuji.", "+10"],
        ["Just endure it.", "+5"],
        ["I'll shut them up.", "0"]
      ],
      [
        ["I can't exactly blame you.", "+5"],
        ["Violence is not the answer.", "0"],
        ["Yeah, that'd be best.", "0"]
      ],
    ]
  },
  3: {
    points: 20,
    choices: [
      [
        ["Nakaoka?", "0"],
        ["Are you worried about him?", "+5"],
        ["Just leave him be.", "0"]
      ],
      [
        ["But you're doing great.", "+15"],
        ["It's not so bad.", "+5"],
        ["I know how you feel.", "+10"]
      ],
    ]
  },
  4: {
    points: 30,
    choices: [
      [
        ["A towel?", "+5"],
        ["Protein powder?", "+10"],
      ],
      [
        ["You seem conflicted.", "+5"],
        ["Do you want to rejoin?", "+5"],
        ["You're done with them, right?", "0"]
      ],
      [
        ["So he's short?", "+5"],
        ["So he's an asshole?", "+10"],
      ],
      [
        ["Don't worry. I gotcha.", "+5"],
        ["I haven't agreed to anything.", "0"],
        ["Fine, but you're buying ramen.", "0"]
      ],
    ]
  },
  5: {
    points: 45,
    choices: [
      [
        ["Let's stay here.", "+5"],
        ["How about Protein Lovers?", "+5"],
        ["We can train at my place.", "+10"]
      ],
      [
        ["You guys should trust Nakaoka.", "+15"],
        ["This is no time for arguing.", "+10"],
      ],
      [
        ["Absolutely.", "+15"],
        ["More or less.", "+10"],
        ["Not in the slightest.", "0"]
      ],
      [
        ["I don't get it.", "0"],
        ["Can you explain that?", "0"],
      ],
      [
        ["...Huh?", "0"],
        ["I really don't understand.", "0"],
      ],
      [
        ["Sounds like you two were close.", "0"],
        ["Just like you.", "0"],
        ["So he should've punched back?", "+5"]
      ],
    ]
  },
  6: {
    points: 45,
    choices: [
      [
        ["Should we change his heart?", "0"],
        ["Let's talk to Takeishi.", "+10"],
      ],
      [
        ["I think it's cool, Ryuji.", "+15"],
        ["Wait, what?", "+5"],
      ],
      [
        ["Never know until you try.", "+5"],
        ["It's out of our hands.", "0"],
        ["We'll use force if we have to.", "0"]
      ],
    ]
  },
  7: {
    points: 60,
    choices: [
      [
        ["What if they start fighting?", "0"],
        ["I doubt they'll believe you.", "0"],
      ],
      [
        ["Things turned out for the best.", "+15"],
        ["You deserved it.", "+10"],
      ],
      [
        ["All I did was watch.", "+10"],
        ["Are you gonna pay me back?", "+5"],
      ],
      [
        ["But I was just standing here...", "+5"],
        ["You weren't cool though.", "+10"],
      ],
      [
        ["You did a great job.", "0"],
        ["So. Case closed?", "+5"],
        ["We make a good team too.", "0"]
      ],
    ]
  },
  8: {
    points: 60,
    choices: [
      [
        ["Are you satisfied now?", "+10"],
        ["Not running?", "+5"],
      ],
      [
        ["What did you say?", "+5"],
        ["Do you have any time for that?", "+5"],
        ["Don't do it.", "+10"]
      ],
      [
        ["You're right.", "+10"],
        ["I never realized that.", "+15"],
      ],
      [
        ["I agree.", "+5"],
        ["Be more specific.", "0"],
        ["And where is this place?", "0"]
      ],
      [
        ["Congratulations.", "+5"],
        ["Got him under control, how?", "0"],
        ["Better watch out for them.", "+5"]
      ],
    ]
  },
  9: {
    points: 0,
    choices: [
      [
        ["I'm looking forward to it.", "+15"],
        ["We can't lose either.", "+15"],
      ],
      [
        ["You're welcome.", "0"],
        ["It's all because of you.", "0"],
      ],
    ]
  },
};

export const JusticeChoices = {
  1: {
    points: 0,
    choices: [
      [
        ["You always seem so busy.", "+5"],
        ["Do you have no friends?", "0"],
      ],
      [
        ["Is that your win?", "0"],
        ["Not bad.", "0"],
      ],
      [
        ["Shoot very carefully.", "+5"],
        ["I'll go for a power shot.", "+5"],
      ],
      [
        ["You used your right hand.", "0"],
        ["...Aren't you left-handed?", "0"],
      ],
      [
        ["Maybe I'll be a detective.", "+5"],
        ["No holding back next time.", "+5"],
        ["I see a lot of things.", "+10"]
      ],
      [
        ["Sure.", "0"],
        ["I'll think about it.", "0"],
        ["As rivals?", "+5"]
      ],
    ]
  },
  2: {
    points: 23,
    choices: [
      [
        ["Got a sweet tooth, huh?", "0"],
        ["Come here often?", "0"],
      ],
      [
        ["Should've figured.", "+10"],
        ["Your life must be so hard.", "+5"],
        ["I can shoo them away...", "0"]
      ],
      [
        ["You've done nothing wrong.", "0"],
        ["Why the rush?", "0"],
      ],
      [
        ["How about we find out?", "0"],
        ["Come here a sec.", "0"],
      ],
      [
        ["You looked great.", "0"],
        ["It was a necessary evil.", "0"],
        ["I should've taken a picture...", "0"]
      ],
      [
        ["That was careless, huh?", "0"],
        ["Wasn't it fun?", "+5"],
        ["I can always dress you up again.", "0"]
      ],
    ]
  },
  3: {
    points: 40,
    choices: [
      [
        ["What kind of place is this?", "0"],
        ["This looks shady...", "0"],
      ],
      [
        ["Do they have coffee?", "+5"],
        ["But I'm underage.", "0"],
        ["Now this is my kind of club.", "+10"]
      ],
      [
        ["Any recommendations?", "+10"],
        ["Anything's fine by me.", "+5"],
        ["An ice-cold beer for me.", "0"]
      ],
      [
        ["It's a great place.", "+5"],
        ["I feel a bit nervous.", "0"],
      ],
      [
        ["A run-down café.", "0"],
        ["A shop with great coffee.", "0"],
        ["I live there, actually.", "0"]
      ],
      [
        ["Pretty frequently.", "+10"],
        ["I can use a microwave...", "+10"],
        ["All I need is curry.", "+5"]
      ],
      [
        ["What are you talking about?", "0"],
        ["I kinda get it.", "+5"],
        ["You really are having fun.", "0"]
      ],
    ]
  },
  4: {
    points: 0,
    choices: [
      [
        ["All the time.", "0"],
        ["I'm not great at them.", "0"],
        ["Have you played any?", "0"]
      ],
      [
        ["Are you used to gunplay?", "+5"],
        ["You took that seriously, huh.", "0"],
      ],
      [
        ["You wanted to be a hero?", "+10"],
        ["Very interesting.", "+5"],
        ["Hard to imagine.", "0"]
      ],
      [
        ["Sticking to your justice.", "0"],
        ["Doing what people want.", "0"],
        ["Neither, really.", "0"]
      ],
      [
        ["You did fine.", "+5"],
        ["You've still got a long way to go.", "+5"],
        ["You were getting cocky.", "+5"]
      ],
    ]
  },
  5: {
    points: 0,
    choices: [
      [
        ["So relaxing...", "+5"],
        ["Seeing you here is weird.", "0"],
        ["A while, huh?", "+10"]
      ],
      [
        ["That was horrible of her.", "0"],
        ["...You've been through a lot.", "+5"],
      ],
      [
        ["This is nothing.", "+10"],
        ["I'll stay until you're ready.", "+10"],
        ["Are YOU okay?", "+5"]
      ],
      [
        ["Same.", "+10"],
        ["I'm just fine.", "0"],
        ["Guess I win.", "+5"]
      ],
      [
        ["Because we get along.", "+5"],
        ["Because we're similar.", "+5"],
      ],
      [
        ["I think you're right.", "+10"],
        ["I don't know about that.", "0"],
        ["Can I put my clothes on?", "+5"]
      ],
      [
        ["True.", "0"],
        ["They'd probably love it.", "0"],
        ["My bad, I guess.", "+5"]
      ],
    ]
  },
  6: {
    points: 0,
    choices: [
      [
        ["Yeah, it's convoluted...", "0"],
        ["That's why it's so fun.", "+10"],
      ],
      [
        ["The psychotic breakdowns.", "0"],
        ["What're you getting at?", "0"],
      ],
      [
        ["I've made up my mind.", "0"],
        ["I won't miss my shot.", "0"],
      ],
      [
        ["It's thanks to you.", "0"],
        ["I couldn't let myself lose.", "+10"],
      ],
      [
        ["But we're teammates now.", "0"],
        ["You want to join us?", "0"],
      ],
      [
        ["I'll think about it.", "0"],
        ["I'm not doing that.", "0"],
        ["You're my rival.", "0"]
      ],
      [
        ["Do I?", "0"],
        ["I don't know.", "0"],
        ["We're rivals, aren't we?", "+5"]
      ],
    ]
  },
  7: {
    points: 0,
    choices: [
      [
        ["What'd you want to discuss?", "0"],
        ["Why are we in Mementos?", "0"],
      ],
      [
        ["I thought you meant in pool.", "0"],
        ["You want to fight?", "0"],
        ["But why, though?", "0"]
      ],
      [
        ["All right.", "0"],
        ["Let's do this.", "0"],
      ],
      [
        ["Are you satisfied?", "0"],
        ["Was that all you've got?", "0"],
        ["Do you want to keep going?", "0"]
      ],
      [
        ["I'd say the same for you.", "0"],
        ["The feeling's mutual.", "0"],
      ],
      [
        ["I definitely wouldn't lose.", "+10"],
        ["I don't know.", "0"],
        ["Probably.", "0"]
      ],
      [
        ["Same here.", "+5"],
        ["Really hate losing, don't you?", "+10"],
      ],
      [
        ["I accept.", "0"],
        ["Let me think about it.", "0"],
      ],
    ]
  },
};

export const HangedChoices = {
  1: {
    points: 5,
    choices: [
      [
        ["Maybe I should call him.", "0 (SKIPS PROMPT 2 AND 3)"],
        ["Iwai seems sick.", "0"],
      ],
      [
        ["That's probably the signal.", "0 (SKIPS PROMPT 3)"],
        ["Iwai seems... really sick.", "0"],
      ],
      [
        ["Yeah, I really need to call him.", "0"],
        ["I guess I should call him...", "0"],
      ],
      [
        ["Nothing in particular.", "0"],
        ["I was daydreaming, sorry.", "0"],
      ],
      [
        ["Who was that guy?", "0"],
        ["What should I do now?", "+5"],
        ["How's your cold?", "+5"]
      ],
    ]
  },
  2: {
    points: 15,
    choices: [
      [
        ["I know how that feels.", "0"],
        ["Is it seriously that hard?", "0"],
      ],
      [
        ["I always knew you were a thug.", "+10"],
        ["Oh. I, uh... have to go.", "0"],
        ["Y-Yakuza!?", "+5"]
      ],
      [
        ["Not really.", "0"],
        ["No, I like that stuff.", "0"],
        ["We made a deal, didn't we?", "+10"]
      ],
      [
        ["Is that one of your customers?", "0"],
        ["Why are you being so mean?", "0"],
      ],
    ]
  },
  3: {
    points: 25,
    choices: [
      [
        ["Iwai.", "0"],
        ["I can't tell you.", "0"],
        ["It's none of your business.", "0"]
      ],
      [
        ["What was that about?", "0"],
        ["So that was Tsuda?", "0"],
        ["What did he mean, \"sell\" him?", "0"]
      ],
      [
        ["The Hong Kong mafia.", "0"],
        ["A 100 million yen deal.", "0"],
      ],
      [
        ["Give it your all.", "0"],
        ["You two should play nice.", "+5"],
        ["Where's my reward?", "+10"]
      ],
      [
        ["I agree.", "+5"],
        ["Is that a threat?", "0"],
        ["What's the issue?", "0"]
      ],
    ]
  },
  4: {
    points: 40,
    choices: [
      [
        ["Why not?", "0"],
        ["You shouldn't lie to your son.", "0"],
      ],
      [
        ["You're so kind, Iwai.", "0"],
        ["You're pathetic.", "+10"],
        ["You should call the cops.", "0"]
      ],
      [
        ["That's right.", "+5"],
        ["Don't make assumptions.", "0"],
        ["I'll stick around for the guns.", "+10"]
      ],
      [
        ["You're right.", "+5"],
        ["Is it really all for Kaoru?", "0"],
        ["Well, you got this.", "0"]
      ],
    ]
  },
  5: {
    points: 40,
    choices: [
      [
        ["Why would he say that?", "0"],
        ["No, nothing even close.", "0"],
      ],
      [
        ["He definitely does.", "0"],
        ["You should ask him.", "0"],
      ],
      [
        ["Our futures.", "+5"],
        ["Girls.", "+10"],
        ["That's a secret.", "+10"]
      ],
      [
        ["Right.", "+5"],
        ["You should tell him, Iwai.", "0"],
        ["You should buy us something.", "+10"]
      ],
      [
        ["He's my age, so it comes easier.", "+5"],
        ["All I did was listen to him.", "+5"],
        ["It's part of the job.", "0"]
      ],
    ]
  },
  6: {
    points: 0,
    choices: [
      [
        ["Not at all.", "0"],
        ["Absolutely.", "+10"],
        ["I guess he likes guns?", "+5"]
      ],
      [
        ["That's horrible.", "0"],
        ["He's clever.", "+10"],
        ["What a crafty bastard.", "+5"]
      ],
      [
        ["Is Tsuda seriously dangerous?", "0"],
        ["Are you going alone?", "0"],
      ],
      [
        ["Bring it on.", "+5"],
        ["I'm worried...", "0"],
        ["So what's our first move?", "0"]
      ],
    ]
  },
  7: {
    points: 25,
    choices: [
      [
        ["It most definitely was.", "+5"],
        ["I did it all for Iwai.", "+10"],
        ["Actually, it's been fun.", "0"]
      ],
      [
        ["I will.", "+5"],
        ["I want to help you.", "+5"],
        ["I can't.", "0"]
      ],
      [
        ["What's his full name?", "0"],
        ["Tell me his name.", "0"],
      ],
      [
        ["COMPLETE \"Shady Deal in the Shadows\"", "0"],
      ],
      [
        ["It's not impossible.", "0"],
        ["I dunno.", "+5"],
        ["He's matured.", "0"]
      ],
      [
        ["I'm back, baby.", "+5"],
        ["I guess I could consider it.", "+10"],
        ["If you pay me well.", "+10"]
      ],
      [
        ["Understood.", "+5"],
        ["You worry too much.", "0"],
        ["Now let's catch him off-guard.", "0"]
      ],
    ]
  },
  8: {
    points: 40,
    choices: [
      [
        ["That's great news.", "+5"],
        ["I feel bad for him.", "0"],
        ["Are you sure he's still alive?", "+10"]
      ],
      [
        ["Who's Masa?", "0"],
        ["Will Kaoru be okay?", "0"],
      ],
      [
        ["We should hurry.", "0"],
        ["Let's close up shop.", "0"],
      ],
      [
        ["What's your goal here, Masa?", "0"],
        ["Cut the bullshit.", "0"],
      ],
      [
        ["Tell him the truth.", "+10"],
        ["You need to trust your son.", "+10"],
      ],
      [
        ["Kaoru is really strong-willed.", "+15"],
        ["He gets that maturity from you.", "+5"],
        ["He's a cool kid, huh?", "+10"]
      ],
      [
        ["Like father, like son.", "+5"],
        ["Gecko bonds go beyond blood.", "+5"],
        ["Why not newts?", "0"]
      ],
    ]
  },
  9: {
    points: 0,
    choices: [
      [
        ["It's up to you now, Iwai.", "+15"],
        ["Kaoru won't lose.", "+10"],
        ["Iwai's kind of slow.", "0"]
      ],
      [
        ["I couldn't leave him.", "0"],
        ["It was for the special menu.", "0"],
      ],
      [
        ["It's a coincidence.", "0"],
        ["Should we close up?", "0"],
        ["What if you're right?", "+5"]
      ],
    ]
  },
};

export const TowerChoices = {
  1: {
    points: 0,
    choices: [
      [
        ["Sorry...", "+5"],
        ["Don't compare me to you.", "+10"],
        ["Praise would be encouraging.", "0"]
      ],
      [
        ["Let's go.", "0"],
        ["What a rude employee.", "+5"],
        ["Something bothering you?", "0"]
      ],
      [
        ["Are they strong?", "0"],
        ["Do you admire them?", "+5"],
      ],
      [
        ["So do I.", "+10"],
        ["They're more than strong.", "0"],
        ["I'll let them know.", "+10"]
      ],
      [
        ["I'll work hard.", "+5"],
        ["If I feel like it.", "0"],
        ["So then I can beat you?", "+5"]
      ],
    ]
  },
  2: {
    points: 11,
    choices: [
      [
        ["Are they bullying you?", "0"],
        ["Sounds like fun.", "0"],
        ["You shouldn't waste food.", "0"]
      ],
      [
        ["That's the spirit.", "+5"],
        ["Want to learn martial arts?", "0"],
        ["You really love your mom.", "0"]
      ],
      [
        ["Sure.", "+5"],
        ["If our schedules line up.", "0"],
        ["Any food requests?", "0"]
      ],
    ]
  },
  3: {
    points: 14,
    choices: [
      [
        ["Calm down.", "0"],
        ["You're being a sore loser.", "0"],
        ["Yeah, you tell him!", "+5"]
      ],
      [
        ["Don't get so worked up.", "0"],
        ["Get your revenge.", "+5"],
        ["Pros are amazing, huh?", "0"]
      ],
    ]
  },
  4: {
    points: 20,
    choices: [
      [
        ["It was pretty weird.", "+10"],
        ["It happens.", "0"],
        ["He must've rigged it.", "+10"]
      ],
      [
        ["You think you have a chance?", "0"],
        ["I'm sure you can do it.", "+5"],
        ["Don't get so worked up.", "0"]
      ],
      [
        ["Are you going to give up?", "+5"],
        ["You need a new strategy.", "+10"],
      ],
      [
        ["I'll be cheering you on.", "+5"],
        ["You're a sharp kid.", "0"],
        ["Think you can take him?", "+5"]
      ],
    ]
  },
  5: {
    points: 25,
    choices: [
      [
        ["I can pay for myself.", "0"],
        ["If you insist.", "0"],
        ["Do you have enough?", "0"]
      ],
      [
        ["You should return the money.", "0"],
        ["You're acting like one.", "0"],
      ],
      [
        ["That's good.", "+5"],
        ["I believe in you.", "+10"],
      ],
      [
        ["A little bit.", "0"],
        ["Not at all.", "+10"],
        ["I'm worried about you.", "0"]
      ],
      [
        ["Of course I won't.", "+5"],
        ["That's up to you.", "0"],
        ["I'm your big brother, right?", "0"]
      ],
    ]
  },
  6: {
    points: 0,
    choices: [
      [
        ["I haven't done anything.", "0"],
        ["Calm down.", "0"],
        ["Bad influence?", "0"]
      ],
      [
        ["Take it easy on him.", "0"],
        ["Think about his feelings.", "0"],
      ],
      [
        ["Bring it on, lady.", "0"],
        ["I haven't done anything.", "0"],
        ["That wouldn't be good.", "0"]
      ],
      [
        ["What's your mom's name?", "0"],
        ["Tell me about your mom.", "0"],
      ],
    ]
  },
  7: {
    points: 0,
    choices: [
      [
        ["She's out of control.", "0"],
        ["No, she's not.", "+5"],
        ["Is that what you think?", "+5"]
      ],
      [
        ["It'll all work out.", "+5"],
        ["I can't guarantee it.", "0"],
        ["Believe in them.", "+10"]
      ],
      [
        ["Is it too much for you?", "0"],
        ["Way to step up.", "0"],
      ],
      [
        ["Let's save her.", "+10"],
        ["That's admirable.", "+10"],
      ],
    ]
  },
  8: {
    points: 30,
    choices: [
      [
        ["I'm glad to hear that.", "+10"],
        ["That's hard to believe.", "0"],
        ["Thank the Phantom Thieves.", "+5"]
      ],
      [
        ["A little bit, yeah.", "+5"],
        ["No, that makes sense.", "+10"],
        ["It means you've matured.", "+15"]
      ],
      [
        ["He wants to win at all costs.", "+5"],
        ["He's too lazy to practice.", "0"],
        ["I wouldn't know...", "0"]
      ],
      [
        ["Your wish came true.", "+5"],
        ["You really think it was them?", "+5"],
        ["You did a great job too.", "+5"]
      ],
    ]
  },
  9: {
    points: 0,
    choices: [
      [
        ["Thanks to my hard work.", "+5"],
        ["Thanks to my teacher.", "+10"],
      ],
      [
        ["You got your revenge.", "0"],
        ["You made things right.", "+5"],
        ["You made new friends.", "+10"]
      ],
      [
        ["I'll let you in.", "0"],
        ["Ask them yourself.", "0"],
      ],
    ]
  },
};

export const StarChoices = {
  1: {
    points: 0,
    choices: [
      [
        ["That's interesting.", "+5"],
        ["I like the attitude change.", "0"],
        ["It's a bit scary.", "0"]
      ],
      [
        ["Have confidence in yourself.", "0"],
        ["Don't worry about them.", "0"],
      ],
      [
        ["When is it coming out?", "0"],
        ["You're, like, an idol.", "0"],
        ["But you don't want to, right?", "+5"]
      ],
    ]
  },
  2: {
    points: 10,
    choices: [
      [
        ["Describes you perfectly.", "+5"],
        ["No, I didn't.", "0"],
        ["That's quite the headline.", "0"]
      ],
      [
        ["You don't enjoy it?", "0"],
        ["Having a difficult time?", "+5"],
        ["You should just decline.", "0"]
      ],
      [
        ["Bring it on.", "+5"],
        ["Don't worry about it.", "0"],
        ["This is part of our deal too.", "0"]
      ],
    ]
  },
  3: {
    points: 14,
    choices: [
      [
        ["I didn't mind.", "+5"],
        ["She has a bad vibe.", "0"],
        ["Must've been the katsu curry.", "+5"]
      ],
      [
        ["They're ridiculous.", "0"],
        ["They're cool.", "+5"],
        ["Never heard of them.", "0"]
      ],
      [
        ["I'd love to.", "+5"],
        ["If our schedules match up.", "0"],
        ["Where shall we go next?", "+5"]
      ],
    ]
  },
  4: {
    points: 14,
    choices: [
      [
        ["You're not allowed to date?", "0"],
        ["She's scary.", "+5"],
        ["Accomplish things?", "0"]
      ],
      [
        ["You don't like the attention?", "0"],
        ["You should stop then.", "+5"],
        ["Have you told your mother?", "0"]
      ],
      [
        ["No worries.", "0"],
        ["You've got a lot to deal with...", "+5"],
        ["Why do you have to apologize?", "0"]
      ],
    ]
  },
  5: {
    points: 22,
    choices: [
      [
        ["You'll be famous.", "0"],
        ["Is that frustrating?", "+5"],
        ["The media is scary.", "0"]
      ],
      [
        ["Do you still like shogi?", "+5"],
        ["Is that what you want to do?", "0"],
        ["Do what you love.", "+5"]
      ],
      [
        ["You think so?", "0"],
        ["You're imagining things.", "+5"],
        ["Confess your sins, my child.", "0"]
      ],
    ]
  },
  6: {
    points: 0,
    choices: [
      [
        ["That's almost a relief.", "+5"],
        ["Don't let your guard down.", "0"],
        ["It may come down to luck.", "+10"]
      ],
      [
        ["Give it your all.", "+5"],
        ["I believe in you.", "+10"],
        ["Idols are cool too.", "0"]
      ],
    ]
  },
  7: {
    points: 30,
    choices: [
      [
        ["What do you mean?", "0"],
        ["I don't understand.", "0"],
      ],
      [
        ["That won't work.", "+5"],
        ["That's a great strategy.", "0"],
        ["Do you intend to lose?", "0"]
      ],
      [
        ["Let's make her reconsider.", "0"],
        ["Let's do something about it.", "0"],
      ],
      [
        ["What's your mother's name?", "0"],
        ["Tell me her name.", "0"],
      ],
      [
        ["COMPLETE \"Upstaging the Stage Mother\"", "0"],
      ],
      [
        ["Maybe...", "+5"],
        ["You're overthinking it.", "0"],
        ["I'm glad her heart changed.", "+10"]
      ],
      [
        ["Lose what?", "0"],
        ["What're you talking about?", "0"],
      ],
      [
        ["I support it.", "+5"],
        ["You should really rethink this.", "0"],
        ["It's certainly admirable...", "0"]
      ],
    ]
  },
  8: {
    points: 30,
    choices: [
      [
        ["Give it all you got.", "+5"],
        ["Do you feel confident?", "0"],
        ["You can do it.", "0"]
      ],
      [
        ["It was a good effort.", "0"],
        ["You'll win next time.", "0"],
        ["A very queenly decision.", "+10"]
      ],
      [
        ["I want to become stronger.", "0 (FRIENDS)"],
        ["I want to stay by your side.", "0 (ROMANCE)"],
      ],
      [
        ["(ROMANCE) I want us to date.", "0 (ROMANCE)"],
        ["(ROMANCE) We'll be friends forever.", "0 (FRIENDS)"],
      ],
      [
        ["(ROMANCE) Anything for you.", "+5"],
        ["(ROMANCE) It was all a big coincidence.", "+5"],
        ["(ROMANCE) It was love at first sight.", "+5"],
        ["(FRIENDS) That's a great way to see it.", "+5"],
        ["(FRIENDS) You're overthinking it.", "+5"],
        ["(FRIENDS) Let's win the next one.", "+5"]
      ],
    ]
  },
  9: {
    points: 0,
    choices: [
      [
        ["That's rough.", "+5"],
        ["You'll triumph in the end.", "+10"],
        ["Just don't lose.", "+15"]
      ],
      [
        ["You can do it.", "0"],
        ["That's reassuring.", "0"],
      ],
      [
        ["So you know.", "0"],
        ["What do you mean?", "0"],
        ["We do.", "0"]
      ],
      [
        ["Thank you.", "0"],
        ["That's reassuring.", "0"],
      ],
      [
        ["(ROMANCE) What's wrong?", "0"],
        ["(ROMANCE) Are you nervous?", "0"],
      ],
    ]
  },
};

export const SunChoices = {
  1: {
    points: 0,
    choices: [
      [
        ["I want to change the world.", "0"],
        ["I want to improve my speech.", "+5"],
        ["I'm not sure...", "0"]
      ],
      [
        ["One with conviction.", "+5"],
        ["A popular one.", "0"],
        ["I don't know yet.", "+5"]
      ],
      [
        ["That was helpful.", "+5"],
        ["I knew that already.", "0"],
        ["What I want to accomplish?", "0"]
      ],
      [
        ["It was helpful.", "+5"],
        ["Somewhat.", "+5"],
        ["It changed my whole outlook.", "+5"]
      ],
    ]
  },
  2: {
    points: 0,
    choices: [
      [
        ["Yes, Mr. Yoshida told me.", "0"],
        ["No, and I don't care.", "0"],
      ],
      [
        ["His message.", "+5"],
        ["His speaking skills.", "+5"],
        ["It's hard to say.", "0"]
      ],
      [
        ["I will.", "0"],
        ["I'm not sure I get it.", "0"],
        ["You think I'll ever find it?", "+5"]
      ],
    ]
  },
  3: {
    points: 0,
    choices: [
      [
        ["Stop interrupting him.", "0"],
        ["You're annoying the audience.", "0"],
        ["Just shut up and listen.", "0"]
      ],
      [
        ["Yep.", "0"],
        ["What do you think?", "0"],
      ],
      [
        ["The ex-convict has a point.", "0"],
        ["Listen to what he has to say.", "0"],
        ["So what if he's No-Good Tora?", "0"]
      ],
      [
        ["I couldn't help myself.", "+5"],
        ["I just spoke the truth.", "0"],
      ],
      [
        ["I will.", "+5"],
        ["I'm not sure if I can.", "0"],
        ["Can't forget your roots.", "+5"]
      ],
    ]
  },
  4: {
    points: 0,
    choices: [
      [
        ["I think so.", "+5"],
        ["Don't let your guard down.", "0"],
        ["The media doesn't matter.", "+10"]
      ],
    ]
  },
  5: {
    points: 0,
    choices: [
      [
        ["I'm for them.", "+5"],
        ["I'm against them.", "0"],
        ["I don't really care.", "+10"]
      ],
      [
        ["I'd decline.", "+10"],
        ["I'd take the offer.", "0"],
        ["I'd leave it to chance.", "+5"]
      ],
      [
        ["I'll keep that in mind.", "+5"],
        ["Lose sight of who I am?", "0"],
        ["You make quite a case.", "+5"]
      ],
    ]
  },
  6: {
    points: 0,
    choices: [
      [
        ["You should decline.", "+5"],
        ["That's a sweet deal.", "0"],
        ["I wasn't paying attention.", "0"]
      ],
      [
        ["He's not No-Good Tora.", "0"],
        ["Call him Mr. Yoshida.", "0"],
        ["He'll get elected this time.", "0"]
      ],
      [
        ["That's not for you to decide.", "0"],
        ["Maybe...", "0"],
        ["I still believe in him.", "0"]
      ],
    ]
  },
  7: {
    points: 0,
    choices: [
      [
        ["Are you going to do it?", "0"],
        ["Don't do it.", "0"],
        ["That's a difficult decision.", "+5"]
      ],
      [
        ["Stick to your beliefs.", "+10"],
        ["Clear your name.", "0"],
        ["Get elected.", "0"]
      ],
      [
        ["What good would that do?", "0"],
        ["So what if you're right?", "0"],
        ["......", "0"]
      ],
      [
        ["I'll never forget that.", "+5"],
        ["It's tougher than it seems.", "+5"],
        ["......", "0"]
      ],
    ]
  },
  8: {
    points: 0,
    choices: [
      [
        ["Do your best.", "+10"],
        ["Break a leg.", "0"],
        ["I'm getting nervous.", "+5"]
      ],
      [
        ["What are you talking about?", "0"],
        ["You had a change of heart.", "+5"],
        ["......", "0"]
      ],
    ]
  },
  9: {
    points: 0,
    choices: [
      [
        ["Your true self was revealed.", "+15"],
        ["You're going to be popular.", "+5"],
        ["Don't let your guard down.", "+10"]
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
  7: {
    points: 40,
    choices: [
      [
        ["Walk up to Sumire (RANK 5 GUTS)", "+10"],
        ["Watch her from a distance", "0"],
        ["Slowly walk away", "0"],
      ],
      [
        ["Look at yourself.", "0"],
        ["You're just standing out.", "0"],
      ],
      [
        ["Try to stay positive.", "+10"],
        ["I'm here for you.", "+10"],
        ["It'll work out.", "+10"],
      ],
      [
        ["What is it?", "0"],
        ["......", "0"],
      ],
      [
        ["You started it.", "0"],
        ["What, I can't look at you?", "0"],
      ],
      [
        ["It looks great.", "+10"],
        ["You look really cute.", "+10"],
        ["I'm in love.", "+10"],
      ],
      [
        ["Did I help?", "0"],
        ["You found your answer?", "0"],
      ],
      [
        ["I see…", "0"],
        ["So that's how it was.", "0"],
      ],
      [
        ["That's how it should be.", "+10"],
        ["Sounds like progress.", "+10"],
      ],
      [
        ["The airsoft shop.", "0"],
        ["The resale shop.", "+10"],
        ["Online.", "+10"],
      ],
    ]
  },
  8: {
    points: 80,
    choices: [
      [
        ["Wanna come over?", "0"],
        ["We have a café.", "0"],
      ],
      [
        ["It's no problem.", "+10"],
        ["We'll call it holiday hours.", "+10"],
      ],
      [
        ["Definitely.", "+10"],
        ["Of course.", "+10"],
      ],
      [
        ["Of course I do.", "+10"],
        ["Vaguely...", "0"],
        ["What about it?", "0"],
      ],
      [
        ["I know you did.", "+15"],
        ["You're not worthless.", "+15"],
        ["This is a new beginning.", "+15"],
      ],
      [
        ["What's going on?", "0"],
        ["There's something else?", "0"],
        ["Go ahead.", "+10"],
      ],
      [
        ["What?", "0"],
        ["In luh?", "0"],
      ],
      [
        ["Let's stay friends, okay?", "0 (FRIENDS)"],
        ["I love you too.", "0 (ROMANCE)"],
      ],
      [
        ["(ROMANCE) Calm down.", "+10"],
        ["(ROMANCE) Take your time.", "+10"],
      ],
      [
        ["(ROMANCE) So? Any different?", "+10"],
        ["(ROMANCE) You are so red right now.", "+10"],
        ["(ROMANCE) You're so cute.", "+10"],
      ],
      [
        ["(ROMANCE) Get used to it.", "+10"],
        ["(ROMANCE) Should I hang up...?", "0"],
        ["(ROMANCE) That's just how it is.", "0"],
      ],
      [
        ["(FRIENDS) Show me your best.", "+10"],
        ["(FRIENDS) I can't wait to see it.", "+10"],
        ["(FRIENDS) You can always rely on me.", "+15"],
      ],
      [
        ["(FRIENDS) I'm glad to hear that.", "+10"],
        ["(FRIENDS) I didn't do much.", "0"],
        ["(FRIENDS) I'll always have your back.", "+10"],
      ],
    ]
  },
  9: {
    points: 0,
    choices: [
      [
        ["You look radiant today.", "0"],
        ["Now I'm getting nervous.", "0"],
      ],
      [
        ["It's all Sumire.", "0"],
        ["Just watch.", "0"],
      ],
      [
        ["(ROMANCE) Calm down.", "0"],
        ["(ROMANCE) Don't rush it.", "0"],
      ],
      [
        ["You must be happy.", "0"],
        ["I'm so relieved.", "0"],
        ["It's only natural, Sumire.", "0"],
      ],
      [
        ["(FRIENDS) You did all the work.", "+15"],
        ["(FRIENDS) We're not done yet.", "+15"],
        ["(FRIENDS) It's been my pleasure.", "+15"],
      ],
      [
        ["(ROMANCE) And that is...?", "0"],
        ["(ROMANCE) What do you mean?", "+10"],
        ["(ROMANCE) Is it someone you love?", "+10"],
      ],
      [
        ["(FRIENDS) Bring it on.", "0"],
        ["(FRIENDS) Give me a break.", "0"],
        ["(FRIENDS) I'll get my passport.", "0"],
      ],
      [
        ["(ROMANCE) And there's more to come.", "0"],
        ["(ROMANCE) You were amazing out there.", "0"],
      ],
      [
        ["(ROMANCE) I'll stop if you want.", "0"],
        ["(ROMANCE) I feel the same way.", "0"],
        ["(ROMANCE) I don't want to let you go.", "0"],
      ],
      [
        ["I'm counting on you.", "+10"],
        ["Don't get ahead of yourself.", "+10"],
        ["We're our world's champions.", "+15"],
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
  { name: "Empress", details: EmpressChoices },
  { name: "Emperor", details: EmperorChoices },
  { name: "Hierophant", details: HierophantChoices },
  { name: "Chariot", details: ChariotChoices },
  { name: "Justice", details: JusticeChoices },
  { name: "Hanged Man", details: HangedChoices },
  { name: "Tower", details: TowerChoices },
  { name: "Star", details: StarChoices },
  { name: "Sun", details: SunChoices },
  { name: "Faith", details: FaithChoices },
  { name: "Councillor", details: CouncillorChoices },
];