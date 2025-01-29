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

export const JusticeDetails = [
  "This Confidant's Rank 3 event requires Rank 3 Knowledge (Scholarly) and Rank 3 Charm (Suave). Rank 6 is unavailable until 9/3. Rank 7 is unavailable until 11/2. If Rank 8 is reached, Rank 9 and Rank 10 occur automatically."
];

export const FortuneDetails = [
  "To start this Confidant, the player must visit the Fortune Teller in Shinjuku, then return at a later date to purchase a Holy Stone for ¥100,000. Visit the Fortune Teller again at a later date to receive the request \"Ending the Boyfriend's Abuse\". After completing this request, speaking to the Fortune Teller will start this Confidant. To pursue romance with this Confidant, \"You're just Chihaya to me.\" must be chosen during the Rank 6 event and \"Hell yeah I am.\" must be chosen during the Rank 8 event."
];

export const DeathDetails = [
  "This Confidant's rank up events can only be done once every three days. Progressing the Confidant to Rank 2 requires Rank 2 Guts (Bold). Progressing the Confidant to Rank 8 requires Rank 4 Charm (Charismatic). To pursue romance with this Confidant, at least one of the following dialogue options must be chosen: \"I'm glad you did.\" during the Rank 7 event, \"I'm your ally.\" during the Rank 8 event, or \"It's for Miwa-chan.\" during the Rank 8 event."
];

export const TemperanceDetails = [
  "To start this Confidant, the player must participate in \"Operation Maidwatch\" with Mishima at Shibuya's Central Street as early as 5/24. Afterwards, speak with Kawakami in the 2F hallway of Shujin Academy. This Confidant can then be started by interacting with the yellow phone in Leblanc during the evening once the player has Rank 3 Guts (Staunch). To pursue romance with this Confidant, \"Think this through more.\" must be chosen during the Rank 7 event."
];

export const TowerDetails = [
  "To start this Confidant, the player must receive the request \"Winners Don't Use Cheats\" and battle the target Shadow in Mementos as early as 9/4. Afterwards, this Confidant can be found in the arcade in Akihabara. After speaking with them, speak with Futaba. The next interaction with them will start the Confidant."
];

export const StarDetails = [
  "Starting this Confidant requires Rank 3 Charm (Suave). This Confidant's Rank 8 event requires Rank 5 Knowledge (Erudite)."
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
  { name: "Justice", details: JusticeDetails },
  { name: "Fortune", details: FortuneDetails },
  { name: "Death", details: DeathDetails },
  { name: "Temperance", details: TemperanceDetails },
  { name: "Tower", details: TowerDetails },
  { name: "Star", details: StarDetails },
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

export const LoversChoices = {
  1: {
    points: 35,
    choices: [
      [
        ["Are you feeling better now?", "+10"],
        ["She's so strong.", "+15"],
        ["So are you friends again?", "+5"],
      ],
      [
        ["You can't blame yourself.", "+5"],
        ["You might be right.", "+10"],
        ["Kamoshida had the upper hand.", "+5"],
      ],
      [
        ["It was no big deal.", "+5"],
        ["I couldn't just ignore you.", "+10"],
      ],
      [
        ["I'll help.", "+15"],
        ["Let's find it together.", "+15"],
      ],
      [
        ["Of course. You're my teammate.", "+5"],
        ["Leave it to me.", "+5"],
        ["The no-refills thing again?", "+5"],
      ],
    ]
  },
  2: {
    points: 25,
    choices: [
      [
        ["How's that?", "0"],
        ["You're amazing.", "0"],
      ],
      [
        ["What kind of stuff...?", "0"],
        ["That's your training...?", "0"],
        ["I don't get it...", "0"],
      ],
      [
        ["You're stupid.", "0"],
        ["You're an airhead.", "0"],
        ["You're... unique.", "0"],
      ],
      [
        ["You're a hard worker.", "0"],
        ["That response was annoying.", "0"],
        ["Can we stop yet?", "0"],
      ],
      [
        ["I like you.", "+5"],
        ["I love you.", "+5"],
        ["Can we stop yet?", "+10"],
      ],
      [
        ["Listen to me.", "0"],
        ["This won't help your heart.", "0"],
        ["You're a genius...", "0"],
      ],
      [
        ["You're right.", "0"],
        ["You finally get it.", "0"],
      ],
      [
        ["That's odd.", "+5"],
        ["Has that happened to you?", "+10"],
      ],
      [
        ["Are you lonely?", "0"],
        ["That freedom sounds nice.", "+5"],
      ],
      [
        ["Could be.", "+5"],
        ["You're so self-conscious.", "0"],
        ["Was she a child model?", "0"],
      ],
    ]
  },
  3: {
    points: 20,
    choices: [
      [
        ["I know what you mean.", "+10"],
        ["I'm not sure I follow.", "0"],
        ["That comes down to you.", "+5"],
      ],
      [
        ["That was mean of her.", "+5"],
        ["That's hilarious.", "+15"],
        ["Was she right?", "0"],
      ],
      [
        ["Tell me.", "+15"],
        ["I'm afraid to know.", "+5"],
        ["...Who?", "0"],
      ],
      [
        ["Good idea.", "+10"],
        ["How exactly?", "+5"],
      ],
      [
        ["That's not going to work.", "0"],
        ["You haven't learned anything.", "0"],
        ["Good luck with that.", "+15"],
      ],
      [
        ["I train everyday.", "+5"],
        ["Not really.", "0"],
        ["I carry Morgana in my bag.", "+5"],
      ],
    ]
  },
  4: {
    points: 35,
    choices: [
      [
        ["Maybe.", "0"],
        ["Give it up.", "+5"],
      ],
      [
        ["You're outmatched.", "0"],
        ["She's amazing, huh...", "+5"],
      ],
      [
        ["It had grace.", "+5"],
        ["She'd be a great phantom thief.", "0"],
      ],
      [
        ["So how do you do it?", "0"],
        ["Tell me more.", "0"],
      ],
      [
        ["I figured that much.", "0"],
        ["I mean, that's why it's \"fake.\"", "0"],
      ],
    ]
  },
  5: {
    points: 45,
    choices: [
      [
        ["It seems that way.", "+10"],
        ["That's such a simple solution.", "0"],
        ["If it's a friend, yeah.", "+5"],
      ],
      [
        ["How so?", "0"],
        ["Was she working hard?", "0"],
        ["Was she in pain?", "0"],
      ],
      [
        ["You're not weak.", "0"],
        ["It's because you're kind.", "0"],
      ],
      [
        ["Comfort her.", "+10"],
        ["Listen to what she has to say.", "+5"],
        ["Show her your own strength.", "+15"],
      ],
      [
        ["Someone's motivated.", "+5"],
        ["I'll cheer you on.", "+5"],
        ["You gonna be okay?", "0"],
      ],
    ]
  },
  6: {
    points: 30,
    choices: [
      [
        ["It's a trap!", "0"],
        ["She admires you.", "+5"],
      ],
      [
        ["So she could show you up.", "0"],
        ["Because you're a natural beauty.", "0"],
      ],
      [
        ["Cheer up.", "0"],
        ["Please don't cry.", "0"],
      ],
      [
        ["You already are one.", "0"],
        ["Go get 'em, tiger.", "+5"],
        ["What about your action movies...?", "0"],
      ],
      [
        ["You got this.", "+5"],
        ["Don't strain yourself.", "0"],
        ["Trying to be like Mika?", "0"],
      ],
    ]
  },
  7: {
    points: 67,
    choices: [
      [
        ["That's a lot of work...", "0"],
        ["You have some real guts.", "+10"],
        ["You're beautiful as is.", "+5"],
      ],
      [
        ["There's no doubt in my mind.", "+15"],
        ["I hope so.", "+10"],
        ["Good luck finding it.", "+10"],
      ],
      [
        ["Good advice.", "0"],
        ["You're so dumb, Ryuji...", "0"],
      ],
      [
        ["She'll be happy to hear that.", "+15"],
        ["I'm sure she already knows.", "+15"],
      ],
      [
        ["That's probably it.", "+5"],
        ["I wonder.", "0"],
        ["You can ask her yourself.", "+5"],
      ],
    ]
  },
  8: {
    points: 35,
    choices: [
      [
        ["It's dangerous up here.", "0"],
        ["Step away from the ledge.", "0"],
        ["Why did you want to come here?", "0"],
      ],
      [
        ["And?", "0"],
        ["She's gone, isn't she?", "0"],
      ],
      [
        ["Hang in there.", "+15"],
        ["I believe in you, Ann.", "+15"],
      ],
      [
        ["You have me.", "0 (ROMANCE)"],
        ["You have the others.", "0 (FRIENDS)"],
      ],
      [
        ["(ROMANCE) You said \"I love you.\"", "0"],
        ["(ROMANCE) I didn't hear you.", "0"],
      ],
      [
        ["(ROMANCE) Of course.", "0"],
        ["(ROMANCE) I'm yours forever.", "+10"],
        ["(ROMANCE) That's up to you.", "0"],
      ],
    ]
  },
  9: {
    points: 0,
    choices: [
      [
        ["You really gave it your all.", "+10"],
        ["You still have a ways to go.", "+5"],
        ["Everyone was complimenting you.", "+10"],
      ],
      [
        ["That's so embarrassing.", "+5"],
        ["I'll be there with you.", "+10"],
        ["You can do it, Ann.", "+10"],
      ],
      [
        ["(ROMANCE) What's wrong?", "0"],
        ["(ROMANCE) It's just the two of us.", "0"],
      ],
      [
        ["Of course.", "+10"],
        ["Ask me anything.", "+10"],
      ],
      [
        ["I will.", "0"],
        ["I already am.", "0"],
      ],
      [
        ["(FRIENDS) What's that?", "0"],
        ["(FRIENDS) Eternal?", "0"],
      ],
      [
        ["(ROMANCE) Of course.", "0"],
        ["(ROMANCE) I should be asking you that.", "0"],
      ],
      [
        ["(ROMANCE) Couples?", "0"],
        ["(ROMANCE) Just one?", "0"],
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

export const HermitChoices = {
  1: {
    points: 0,
    choices: [
      [
        ["That wouldn't solve anything.", "0"],
        ["That's a great idea.", "+5"],
      ],
      [
        ["If we work together.", "+10"],
        ["Want me to help?", "+5"],
        ["I don't know.", "0"],
      ],
      [
        ["Sounds good to me.", "0"],
        ["Can you tell me again?", "0 (REPEATS PROMPT)"],
      ],
      [
        ["I bet it will.", "+5"],
        ["I'm not sure.", "0"],
        ["Why not ask him directly?", "0"],
      ],
    ]
  },
  2: {
    points: 0,
    choices: [
      [
        ["I what?", "0"],
        ["So you're okay?", "0"],
        ["I was about to come find you.", "+10"],
      ],
      [
        ["Good to see you again.", "+15"],
        ["You're the one who appeared.", "+5"],
        ["You need to be more careful.", "0"],
      ],
      [
        ["It'll only get toughter.", "0"],
        ["You will.", "0"],
        ["We'll both do our best.", "+5"],
      ],
    ]
  },
  3: {
    points: 10,
    choices: [
      [
        ["Nope.", "+5"],
        ["Let's do this together.", "+15"],
        ["If you want.", "0"],
      ],
      [
        ["No, you're talented.", "0"],
        ["I bet they were just surprised.", "0"],
      ],
      [
        ["Not at all.", "+5"],
        ["Everyone does it.", "+5"],
        ["I think it's cute.", "+10"],
      ],
      [
        ["We'll take it slow.", "+5"],
        ["You need more training.", "0"],
        ["I'll help you anytime.", "+5"],
      ],
    ]
  },
  4: {
    points: 15,
    choices: [
      [
        ["He's in my class.", "0"],
        ["Friend might be a bit much.", "0"],
      ],
      [
        ["I think you're right.", "+10"],
        ["No.", "0"],
        ["Your... what?", "+5"],
      ],
      [
        ["What's an NPC?", "+5"],
        ["Savage.", "0"],
        ["He's the protagonist.", "+10"],
      ],
      [
        ["You did great.", "+5"],
        ["That's nothing special.", "0"],
        ["Ding! Level up!", "0"],
      ],
    ]
  },
  5: {
    points: 26,
    choices: [
      [
        ["Were you happy?", "+5"],
        ["That must have been a shock.", "+10"],
        ["How did you react?", "0"],
      ],
      [
        ["You didn't know any better.", "+5"],
        ["Did you apologize to her?", "0"],
        ["Sounds like it was her fault.", "0"],
      ],
      [
        ["Understood.", "0"],
        ["Someone's pushy today.", "0"],
      ],
      [
        ["Are you running away again?", "+5"],
        ["Let's calm down first.", "0"],
        ["I'm right here with you.", "0"],
      ],
    ]
  },
  6: {
    points: 21,
    choices: [
      [
        ["What horrible parents.", "+5"],
        ["We have to put a stop to this.", "+5"],
        ["Strange... how?", "0"],
      ],
      [
        ["I'll do it, for you.", "+15"],
        ["We'll show them the truth.", "+10"],
        ["Give me some time.", "+5"],
      ],
    ]
  },
  7: {
    points: 0,
    choices: [
      [
        ["That's incredible.", "+15"],
        ["I'm glad to hear that.", "+10"],
        ["Did you stutter at all?", "+5"],
      ],
      [
        ["You worked really hard too.", "+10"],
        ["You're making me blush...", "+5"],
        ["Do I get a reward?", "0"],
      ],
      [
        ["Fine by me.", "0"],
        ["That's all?", "0"],
      ],
      [
        ["Congrats.", "+5"],
        ["You've still got more.", "0"],
        ["Want more pats?", "+5"],
      ],
    ]
  },
  8: {
    points: 30,
    choices: [
      [
        ["You've really matured.", "+10"],
        ["And if you're bullied again?", "+5"],
      ],
      [
        ["That doesn't sound healthy...", "0"],
        ["Are you okay, Futaba?", "+10"],
        ["You're imagining things.", "+5"],
      ],
      [
        ["If you want.", "+5"],
        ["No way.", "+5"],
        ["You're giving up?", "0"],
      ],
      [
        ["Because we're teammates.", "0 (FRIENDS)"],
        ["Because I love you.", "0 (ROMANCE)"],
      ],
      [
        ["(ROMANCE) I would like that.", "0"],
        ["(ROMANCE) If that's okay with you.", "0"],
      ],
      [
        ["(ROMANCE) Um, hello?", "0"],
        ["(ROMANCE) Is something wrong?", "0"],
      ],
      [
        ["(ROMANCE) Earth to Futaba?", "0"],
        ["(ROMANCE) Are you still alive?", "0"],
      ],
      [
        ["(ROMANCE) Instant yakisoba.", "0"],
        ["(ROMANCE) Morgana.", "0"],
        ["(ROMANCE) Do I really have to say it?", "+5"],
        ["(FRIENDS) A true friend.", "+5"],
        ["(FRIENDS) A partner.", "+5"],
        ["(FRIENDS) A key item.", "+5"],
      ],
    ]
  },
  9: {
    points: 35,
    choices: [
      [
        ["(ROMANCE) What are you talking about?", "0"],
        ["(ROMANCE) Don't worry about it.", "0"],
        ["(ROMANCE) ...Pardoned?", "0"],
      ],
      [
        ["(ROMANCE) Mission complete.", "0"],
        ["(ROMANCE) Nice job, Futaba.", "0"],
        ["(ROMANCE) You did great.", "0"],
      ],
      [
        ["(ROMANCE) I know.", "0"],
        ["(ROMANCE) I don't mind it.", "0"],
        ["(ROMANCE) I like being close.", "0"],
      ],
      [
        ["(ROMANCE) What's wrong?", "0"],
        ["(ROMANCE) Come closer.", "0"],
      ],
      [
        ["Take your time.", "+10"],
        ["You can do this.", "+10"],
        ["We'll do it together.", "+15"],
      ],
      [
        ["You can't lose to her.", "+10"],
        ["Do you want a job too?", "+5"],
      ],
      [
        ["I honor my promises.", "0"],
        ["Just keep it cheap.", "0"],
        ["You remember that?", "0"],
      ],
      [
        ["I'm counting on you.", "0"],
        ["That's a lot of pressure.", "0"],
      ],
      [
        ["(ROMANCE) You already have that right.", "+15"],
        ["(ROMANCE) Took you long enough to ask.", "+15"],
        ["(ROMANCE) I want that right too.", "+15"],
      ],
    ]
  },
};

export const FortuneChoices = {
  1: {
    points: 0,
    choices: [
      [
        ["Suggest she gives up.", "0 (REPEATS PROMPT)"],
        ["Change her boss's heart.", "0 (REPEATS PROMPT)"],
        ["Encourage her.", "0"],
      ],
      [
        ["Hrahhh!", "0 (REPEATS PROMPT)"],
        ["Overturn your fate!", "0"],
        ["Fight the power!", "0 (REPEATS PROMPT)"],
      ],
      [
        ["You're so stubborn.", "0"],
        ["Open your mind to change.", "+5"],
      ],
      [
        ["Of course I am.", "+5"],
        ["And if I am?", "0"],
        ["Are you stalking me?", "0"],
      ],
    ]
  },
  2: {
    points: 15,
    choices: [
      [
        ["Go for the money.", "0 (REPEATS PROMPT)"],
        ["Follow his heart.", "0"],
        ["Chase a promotion.", "0 (REPEATS PROMPT)"],
      ],
      [
        ["Thieves may steal her away.", "0"],
        ["Marriage kills individuality.", "0 (REPEATS PROMPT)"],
        ["She'll be sad if you break it off.", "0 (REPEATS PROMPT)"],
      ],
      [
        ["I'm not, sorry.", "0"],
        ["Who knows?", "0"],
      ],
    ]
  },
  3: {
    points: 15,
    choices: [
      [
        ["You're only realizing that now?", "0"],
        ["Do you want to test it again?", "0"],
      ],
      [
        ["Strengthen your will.", "+5"],
        ["I don't know.", "0"],
        ["Trust in yourself.", "+10"],
      ],
      [
        ["Tell me more.", "0"],
        ["That sounds so peaceful.", "0"],
      ],
      [
        ["...The chairman?", "0"],
        ["I'm not sure I follow.", "0"],
      ],
      [
        ["I think it'll work.", "0"],
        ["It all depends on you.", "0"],
      ],
      [
        ["I'm glad to hear that.", "0"],
        ["I didn't do much.", "+5"],
        ["Tell me more about your home.", "0"],
      ],
    ]
  },
  4: {
    points: 15,
    choices: [
      [
        ["You're such a hard worker.", "+10"],
        ["What about the divine power?", "0"],
        ["You must have lots of free time.", "+5"],
      ],
      [
        ["But what?", "0"],
        ["Did you spend it all?", "0"],
      ],
      [
        ["Who was he?", "0"],
        ["Maiden?", "0"],
        ["Are you in trouble?", "0"],
      ],
    ]
  },
  5: {
    points: 30,
    choices: [
      [
        ["I like fortune telling.", "0"],
        ["She's really cool.", "0"],
        ["I'm doing research for school.", "0"],
      ],
      [
        ["...Maiden of Relief?", "0"],
        ["This has to be a joke.", "0"],
      ],
      [
        ["This guy's sketchy.", "0"],
        ["Leave her alone.", "0"],
      ],
      [
        ["What's a Maiden of Relief?", "0"],
        ["Who thinks you're a monster?", "0"],
        ["You're just Chihaya to me.", "+15 (ROMANCE FLAG)"],
      ],
      [
        ["No need to strain yourself.", "0"],
        ["Be honest with yourself.", "+5"],
        ["We'll work on it together.", "0"],
      ],
    ]
  },
  6: {
    points: 20,
    choices: [
      [
        ["You're not wrong about that.", "0"],
        ["You shouldn't have tricked them.", "+5"],
        ["I don't think so.", "+15"],
      ],
      [
        ["Are you gonna be okay?", "+5"],
        ["Be careful.", "+5"],
        ["So the Maiden's taking action.", "0"],
      ],
    ]
  },
  7: {
    points: 46,
    choices: [
      [
        ["How so?", "0"],
        ["What have you found?", "0"],
      ],
      [
        ["Tell me his name.", "0"],
        ["What's Fukurai's first name?", "0"],
      ],
      [
        ["I can't tell you.", "0"],
        ["Don't worry about it.", "0"],
      ],
      [
        ["COMPLETE \"Debunking the Psychic!\"", "0"],
      ],
      [
        ["I had no idea.", "+5"],
        ["I know.", "+10"],
      ],
      [
        ["I'm glad to hear that.", "+15"],
        ["That's some good luck.", "+15"],
        ["It's because you're strong.", "+15"],
      ],
      [
        ["Why do you ask?", "0"],
        ["Hell yeah I am.", "+15 (ROMANCE FLAG)"],
      ],
      [
        ["You give me too much credit.", "0"],
        ["It was all your own will.", "+5"],
        ["I knew it would happen.", "0"],
      ],
    ]
  },
  8: {
    points: 21,
    choices: [
      [
        ["You really don't understand.", "0"],
        ["Listen to what Chihaya's saying.", "0"],
      ],
      [
        ["Do you regret what you did?", "0"],
        ["Well, fate can be changed.", "+15"],
        ["That's all in the past now.", "+5"],
      ],
      [
        ["I like having my fortune read.", "0 (FRIENDS)"],
        ["So I can be with you.", "0 (ROMANCE)"],
      ],
      [
        ["(ROMANCE) I wanted to hear your voice too.", "+5"],
        ["(ROMANCE) Oh, you didn't mean it...?", "0"],
        ["(ROMANCE) ......", "0"],
        ["(FRIENDS) I'm planning on it.", "+5"],
        ["(FRIENDS) If I'm ever in the mood.", "0"],
        ["(FRIENDS) I want one of those stones.", "0"],
      ],
    ]
  },
  9: {
    points: 0,
    choices: [
      [
        ["(FRIENDS) You seem to be well.", "+5"],
        ["(FRIENDS) You've changed.", "+5"],
      ],
      [
        ["(FRIENDS) You should.", "0"],
        ["(FRIENDS) It's never too late.", "0"],
      ],
      [
        ["(ROMANCE) You've never been here?", "0"],
        ["(ROMANCE) It wasn't that far away.", "0"],
      ],
      [
        ["I support you.", "+10"],
        ["You have strong convictions.", "+15"],
      ],
      [
        ["I wonder if you're right...", "0"],
        ["So what if I am the Trickster?", "0"],
        ["You're pretty sharp.", "0"],
      ],
      [
        ["It's not a problem.", "0"],
        ["Are you worried about me?", "0"],
        ["What does it mean?", "0"],
      ],
      [
        ["Thank you.", "0"],
        ["That's reassuring.", "0"],
      ],
      [
        ["(ROMANCE) I don't care about that.", "+5"],
        ["(ROMANCE) It's actually pretty cute.", "+15"],
      ],
      [
        ["(ROMANCE) I was hoping you'd say that.", "0"],
        ["(ROMANCE) I don't want to go home.", "0"],
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

export const DeathChoices = {
  1: {
    points: 0,
    choices: [
      [
        ["I have a bad heart.", "+5"],
        ["We're on a date.", "0"],
        ["I know my rights.", "0"]
      ],
      [
        ["I agree.", "+5"],
        ["Harassment?", "0"],
        ["The Plague?", "0"]
      ],
      [
        ["I'm totally fine.", "+5"],
        ["I feel lightheaded.", "0"],
        ["I think I have superpowers.", "+5"]
      ],
    ]
  },
  2: {
    points: 11,
    choices: [
      [
        ["What was that about?", "0"],
        ["Was that an emergency?", "0"],
      ],
      [
        ["A medical error?", "0"],
        ["What do you mean?", "0"],
      ],
      [
        ["I don't mind.", "+5"],
        ["Is it true?", "0"],
        ["I need the medicine.", "+5"]
      ],
      [
        ["Of course not.", "+5"],
        ["I don't think I did…", "0"],
        ["Have you?", "0"]
      ],
    ]
  },
  3: {
    points: 20,
    choices: [
      [
        ["You'll be okay.", "0"],
        ["Dr. Takemi will help.", "+5"],
      ],
      [
        ["You seem happy.", "+10"],
        ["You're so kind.", "+5"],
        ["Why free?", "+5"]
      ],
      [
        ["I'll reflect on my mistakes.", "+5"],
        ["But she ended up okay.", "0"],
        ["Punish me more.", "0"]
      ],
    ]
  },
  4: {
    points: 11,
    choices: [
      [
        ["They trust you.", "0"],
        ["Was it really your fault?", "0"],
      ],
      [
        ["I had no idea.", "0"],
        ["It's not too late.", "0"],
      ],
      [
        ["That's good.", "+10"],
        ["When will it be done?", "+5"],
        ["...\"Probably\"?", "0"]
      ],
      [
        ["About Miwa-chan?", "+5"],
        ["About Oyamada?", "0"],
        ["About Crawford-Ende's?", "0"]
      ],
    ]
  },
  5: {
    points: 11,
    choices: [
      [
        ["Well, someone's popular.", "0"],
        ["You seem annoyed.", "0"],
        ["Did something happen?", "0"]
      ],
      [
        ["Having fun?", "0"],
        ["You ARE a genius.", "0"],
      ],
      [
        ["You're a masochist.", "0"],
        ["It suits you.", "+10"],
        ["You're not honest.", "+5"]
      ],
      [
        ["You can count on me.", "+5"],
        ["I think I'm at my limit…", "0"],
        ["Anything for you.", "+5"]
      ],
    ]
  },
  6: {
    points: 0,
    choices: [
      [
        ["This is harassment.", "+5"],
        ["She's a great doctor.", "+5"],
        ["Please be quiet.", "+5"]
      ],
      [
        ["Don't lose hope.", "0"],
        ["Let's ask for details.", "0"],
        ["......", "0"]
      ],
      [
        ["Just rest for today.", "+5"],
        ["Anything I can do?", "+5"],
        ["Let's retaliate.", "0"]
      ],
      [
        ["It was inevitable.", "0"],
        ["We all do sometimes.", "+10"],
        ["I'm glad you did.", "+5 (ROMANCE FLAG)"]
      ],
    ]
  },
  7: {
    points: 42,
    choices: [
      [
        ["What about Miwa-chan?", "0"],
        ["You okay with this?", "0"],
      ],
      [
        ["Don't give up.", "0"],
        ["Anything you can do?", "0"],
        ["I'm your ally.", "+5 (ROMANCE FLAG)"]
      ],
      [
        ["You gonna run away?", "0"],
        ["And your patients?", "0"],
      ],
      [
        ["What's his full name?", "0"],
        ["Tell me about him.", "0"],
      ],
      [
        ["I won't do anything.", "0"],
        ["It's for my research.", "0"],
      ],
      [
        ["COMPLETE \"Bad Medicine\"", "0"],
      ],
      [
        ["Miwa-chan is alive.", "0"],
        ["Oyamada lied to you.", "0"],
      ],
      [
        ["You should hurry.", "+5"],
        ["Let's get to work, doctor.", "0"],
        ["It's not over yet.", "0"]
      ],
      [
        ["It's for Miwa-chan.", "0 (ROMANCE FLAG)"],
        ["It's for my exams.", "+5"],
        ["It's for you.", "0"]
      ],
      [
        ["I'll be cheering you on.", "+5"],
        ["Don't burn yourself out.", "0"],
        ["Anything else I can do?", "+5"]
      ],
    ]
  },
  8: {
    points: 36,
    choices: [
      [
        ["Don't worry about it.", "+5"],
        ["It was for my exams.", "+5"],
        ["It was rough.", "0"]
      ],
      [
        ["That's troubling.", "0"],
        ["And your patients?", "0"],
      ],
      [
        ["I wanted to see you.", "0 (ROMANCE)*"],
        ["It was for my exams.", "0 (FRIENDS)"],
      ],
      [
        ["*I love you.", "+5 (ROMANCE)**"],
        ["*What do you think?", "0 (FRIENDS)"],
      ],
      [
        ["**It isn't a joke.", "+15 (ROMANCE)"],
        ["**That sounds good.", "0 (FRIENDS)"],
      ],
      [
        ["(ROMANCE) It's true love.", "0"],
        ["(ROMANCE) So did you.", "+5"],
        ["(ROMANCE) I've always loved you.", "0"],
        ["(FRIENDS) You're welcome.", "0"],
        ["(FRIENDS) It was a breeze.", "0"],
        ["(FRIENDS) I'm glad we saw it through.", "+5"]
      ],
    ]
  },
  9: {
    points: 0,
    choices: [
      [
        ["Uh, what?", "0"],
        ["Is that a joke?", "0"],
      ],
      [
        ["It's a coincidence.", "0"],
        ["I wonder...", "+5"],
        ["So what if it's true?", "0"]
      ],
      [
        ["(ROMANCE) What kind?", "+5"],
        ["(ROMANCE) Yes, please.", "+10"],
      ],
    ]
  },
};

export const TemperanceChoices = {
  1: {
    points: 20,
    choices: [
      [
        ["It does.", "+5"],
        ["I feel nothing.", "0"],
        ["I'll tell your boss.", "0"]
      ],
      [
        ["I can't say I wasn't...", "0"],
        ["Absolutely not!", "+5"],
        ["What kind of weird things?", "0"]
      ],
      [
        ["You need money?", "0"],
        ["What's it for?", "0"],
      ],
      [
        ["Are you scolding me?", "0"],
        ["This is all for you.", "0"],
        ["I requested you.", "0"]
      ],
      [
        ["You have the wrong number.", "+5"],
        ["Uh, what the hell?", "+5"],
        ["Is this the hard sell?", "+5"]
      ],
    ]
  },
  2: {
    points: 37,
    choices: [
      [
        ["Yeah, they do.", "+5"],
        ["Do some real cooking.", "+5"],
        ["Can I have a different maid?", "0"]
      ],
      [
        ["I was curious.", "0"],
        ["So I could slack off in class.", "0"],
        ["I wanted to see you.", "0"]
      ],
      [
        ["Your sister's bills, right?", "0"],
        ["I'll request you more often.", "+15"],
        ["You're really blunt.", "0"]
      ],
      [
        ["You have it rough.", "0"],
        ["Are they that expensive?", "0"],
        ["Don't overdo it.", "0"]
      ],
      [
        ["Thanks.", "+5"],
        ["I'll work hard at it.", "0"],
        ["You're not in character.", "0"]
      ],
    ]
  },
  3: {
    points: 0,
    choices: [
      [
        ["That would be great.", "0"],
        ["What are you scheming?", "0"],
      ],
      [
        ["How rude.", "+5"],
        ["No surprise there.", "0"],
        ["How old ARE you?", "0"]
      ],
      [
        ["Yes, you do.", "+5"],
        ["You're pushing it.", "0"],
        ["You need to love yourself.", "+10"]
      ],
      [
        ["I already knew that.", "0"],
        ["Why did you lie to me?", "0"],
        ["You're a bad teacher.", "0"]
      ],
    ]
  },
  4: {
    points: 11,
    choices: [
      [
        ["It's fun.", "+5"],
        ["I want to know more.", "0"],
        ["Who's the Master here?", "+5"]
      ],
      [
        ["How terrible...", "+5"],
        ["It was inevitable.", "0"],
        ["So, did you stop?", "+5"]
      ],
      [
        ["It's not your fault.", "0"],
        ["It was bad luck.", "0"],
        ["It's no one's fault.", "0"]
      ],
      [
        ["You OK with that?", "0"],
        ["Guardians, huh...", "0"],
      ],
      [
        ["It's too late now.", "0"],
        ["What about our deal?", "0"],
        ["I want to see you again.", "0"]
      ],
      [
        ["Curry is all I eat.", "0"],
        ["You get bored of the taste.", "0"],
        ["You want some?", "+5"]
      ],
    ]
  },
  5: {
    points: 37,
    choices: [
      [
        ["You just got here.", "0"],
        ["Want to rest a bit?", "+5"],
        ["Give me back my money.", "0"]
      ],
      [
        ["Are you all right?", "+15"],
        ["Have you seen a doctor?", "+5"],
        ["You should go home.", "+15"]
      ],
      [
        ["Are you okay?", "0"],
        ["Don't overdo it.", "0"],
      ],
      [
        ["I'll be fine.", "0"],
        ["Nah, too lazy.", "0"],
        ["How are you feeling, though?", "+5"]
      ],
    ]
  },
  6: {
    points: 0,
    choices: [
      [
        ["Don't strain yourself.", "+5"],
        ["Don't lie.", "0"],
        ["Don't pay them.", "+10"]
      ],
      [
        ["Sister company?", "0"],
        ["Can you make a lot there?", "0"],
        ["Think this through more.", "+15 (ROMANCE FLAG)"]
      ],
      [
        ["That's the wrong choice.", "0"],
        ["Isn't there another way?", "0"],
        ["Just rest for now.", "0"]
      ],
    ]
  },
  7: {
    points: 0,
    choices: [
      [
        ["That's the wrong decision.", "0"],
        ["Please reconsider.", "0"],
        ["Is this really what you want?", "+10"]
      ],
      [
        ["You're running away.", "+5"],
        ["If that's what you decided.", "+10"],
        ["I need my teacher.", "0"]
      ],
      [
        ["Try to remember.", "0"],
        ["That's your answer.", "0"],
        ["Take a look at yourself.", "0"]
      ],
      [
        ["Are you going to give up?", "0"],
        ["Mistakes can be fixed.", "0"],
      ],
      [
        ["Be confident in your answer.", "+10"],
        ["That's the right choice.", "+10"],
        ["You're asking a student?", "+10"]
      ],
      [
        ["I want to protect you.", "+10"],
        ["That's reassuring.", "+10"],
      ],
      [
        ["You're welcome.", "+5"],
        ["So much for being a maid.", "0"],
        ["I'll do anything for you.", "+5"]
      ],
    ]
  },
  8: {
    points: 0,
    choices: [
      [
        ["Nonsense.", "+10"],
        ["You may be right.", "0"],
        ["Aren't you old already...?", "0"]
      ],
      [
        ["What a bummer.", "+15"],
        ["Thank you for your service.", "+15"],
      ],
      [
        ["Not really.", "+5 (FRIENDS)"],
        ["I want to keep seeing you.", "+5 (ROMANCE)*"],
      ],
      [
        ["*Got it.", "+5 (FRIENDS)"],
        ["*I mean what I say.", "0 (ROMANCE)**"],
      ],
      [
        ["**I'm a master; you're a maid.", "0 (FRIENDS)"],
        ["**I'm a man; you're a woman.", "0 (ROMANCE)"],
      ],
      [
        ["(FRIENDS) I agree.", "0"],
        ["(FRIENDS) You can do it.", "+5"],
        ["(FRIENDS) You were a pretty good maid.", "0"]
      ],
    ]
  },
  9: {
    points: 0,
    choices: [
      [
        ["(FRIENDS) I'm glad to hear that.", "+10"],
        ["(FRIENDS) Sounds like you're busy.", "+5"],
      ],
      [
        ["(FRIENDS) I will.", "+5"],
        ["(FRIENDS) You're not my mom...", "0"],
        ["(FRIENDS) Same goes for you.", "0"]
      ],
      [
        ["(FRIENDS) What are you talking about?", "0"],
        ["(FRIENDS) Why do you think that?", "0"],
        ["(FRIENDS) I'm just a high schooler.", "0"]
      ],
      [
        ["(ROMANCE) ...Really?", "0"],
        ["(ROMANCE) I see.", "0"],
        ["(ROMANCE) That's too bad...", "0"]
      ],
      [
        ["(ROMANCE) It doesn't matter.", "0"],
        ["(ROMANCE) That's the best part.", "0"],
      ],
      [
        ["(ROMANCE) We won't get caught.", "0"],
        ["(ROMANCE) Don't worry about it.", "0"],
        ["(ROMANCE) You're so responsible.", "0"]
      ],
      [
        ["(ROMANCE) What are you talking about?", "0"],
        ["(ROMANCE) When did you realize?", "0"],
      ],
      [
        ["You got me.", "0"],
        ["You have no proof.", "0"],
        ["...So what if I am?", "0"]
      ],
      [
        ["That sounds promising.", "0"],
        ["I'll make sure of it.", "0"],
      ],
      [
        ["(ROMANCE) I want to rely on you.", "0"],
        ["(ROMANCE) I want you to rely on me.", "0"]
      ],
    ]
  },
};

export const DevilChoices = {
  1: {
    points: 0,
    choices: [
      [
        ["Why do you ask?", "0"],
        ["I don't.", "0"],
        ["Mishima might...", "+5"],
      ],
      [
        ["Worth...?", "0"],
        ["What about their justice?", "0"],
      ],
      [
        ["I like the atmosphere.", "0"],
        ["It's for the article.", "+5"],
        ["Tell me about that incident.", "0"],
      ],
    ]
  },
  2: {
    points: 12,
    choices: [
      [
        ["Minors couldn't do that stuff.", "0"],
        ["You might be right.", "0"],
        ["You shouldn't make assumptions.", "+5"],
      ],
      [
        ["What's the difference?", "0"],
        ["I'm sure you are.", "0"],
      ],
      [
        ["Why not change careers?", "0"],
        ["Maybe you should quit.", "0"],
      ],
      [
        ["What was she accused of?", "0"],
        ["What happened?", "0"],
        ["She was falsely accused?", "+5"],
      ],
    ]
  },
  3: {
    points: 15,
    choices: [
      [
        ["What's this about?", "0"],
        ["She hasn't done anything wrong.", "0"],
      ],
      [
        ["Of course we are.", "+5"],
        ["Don't tell anybody.", "+5"],
      ],
      [
        ["Our movie is about to start.", "0"],
        ["That's enough.", "0"],
        ["We're dating. Seriously.", "0"],
      ],
      [
        ["Leave it to me.", "+5"],
        ["That was our deal.", "+5"],
        ["Anything for my girlfriend.", "0"],
      ],
    ]
  },
  4: {
    points: 25,
    choices: [
      [
        ["Because of your investigation?", "0"],
        ["Because of your incident?", "0"],
        ["Are you sure we're the same?", "0"],
      ],
      [
        ["I'm curious.", "0"],
        ["You can trust me.", "0"],
      ],
      [
        ["What was the cause of death?", "0"],
        ["Who killed him?", "0"],
      ],
      [
        ["That sounds like defamation.", "+5"],
        ["That's unforgivable.", "+10"],
        ["How's your search going?", "0"],
      ],
      [
        ["I don't mind it.", "+5"],
        ["As long as I'm compensated.", "0"],
        ["I did the same to you.", "0"],
      ],
    ]
  },
  5: {
    points: 22,
    choices: [
      [
        ["Did something bad happen?", "0"],
        ["Having trouble at work?", "0"],
      ],
      [
        ["He must not like you.", "+5"],
        ["Did he find out?", "0"],
      ],
      [
        ["Do you have evidence of that?", "0"],
        ["You should trust in her.", "+5"],
        ["You might be right.", "0"],
      ],
      [
        ["That's the spirit.", "+5"],
        ["You're a great journalist.	", "+5"],
        ["What about your quota?", "0"],
      ],
      [
        ["Glad to hear that.", "0"],
        ["Don't work yourself to death.", "0"],
        ["I'll dig up some more for you.", "+5"],
      ],
    ]
  },
  6: {
    points: 0,
    choices: [
      [
        ["What was that about?", "0"],
        ["Could it be...?", "0"],
      ],
      [
        ["Calm down.", "+5"],
        ["Don't let him provoke you.", "+15"],
        ["Let's think of another way.", "+10"],
      ],
      [
        ["You should work on that.", "+5"],
        ["You're charming as you are.", "+15 (ROMANCE FLAG)"],
      ],
      [
        ["That's the spirit.", "+5"],
        ["Sounds tough.", "0"],
        ["Don't strain yourself.", "0"],
      ],
    ]
  },
  7: {
    points: 21,
    choices: [
      [
        ["Like what?", "0"],
        ["You seem tired.", "+5"],
        ["So... I have a pet cat...", "0"],
      ],
      [
        ["What's the chief's name?", "0"],
        ["Tell me more about him.", "0"],
      ],
      [
        ["COMPLETE \"Fighting For Truth in Journalism.\"", "0"],
      ],
      [
        ["He reflected on his actions.", "0"],
        ["Aren't you happy?", "0"],
      ],
      [
        ["Did I? Can't remember.", "0"],
        ["Uh, nope.", "0"],
      ],
      [
        ["I'm glad to hear that.", "0"],
        ["Thank god.", "0"],
      ],
      [
        ["That's not like you.", "+15"],
        ["You need to pursue the truth.", "+10"],
        ["I'll go with you.", "+10"],
      ],
      [
        ["Good luck.", "+5"],
        ["Be careful.", "+5"],
        ["Grab a souvenir for me.", "0"],
      ],
    ]
  },
  8: {
    points: 38,
    choices: [
      [
        ["Are you okay?", "0"],
        ["Did you learn the truth?", "0"],
      ],
      [
        ["What are you going to do?", "0"],
        ["You're not giving up, are you?", "+5"],
      ],
      [
        ["I can't leave you.", "+10"],
        ["I want to help.", "+15"],
        ["I need those articles.", "0"],
      ],
      [
        ["Of course not.", "0"],
        ["Well, about that...", "0"],
      ],
      [
        ["I took it seriously.", "0 (ROMANCE)*"],
        ["I didn't take it seriously.", "0 (FRIENDS)"],
      ],
      [
        ["*I love you, Ichiko.", "0 (ROMANCE)"],
        ["*I'm just kidding.", "0 (FRIENDS)"],
      ],
      [
        ["(ROMANCE) I wanted to hear your voice.", "+5"],
        ["(ROMANCE) Please don't dump me.", "+5"],
        ["(ROMANCE) IloveyouIloveyouIloveyou.", "0"],
      ],
    ]
  },
  9: {
    points: 0,
    choices: [
      [
        ["(FRIENDS) You two are on good terms?", "0"],
        ["(FRIENDS) What're you up to?", "0"],
      ],
      [
        ["You're really earnest.", "+5"],
        ["Is that entertainment?", "+10"],
        ["You don't need my info?", "0"],
      ],
      [
        ["I'm glad to hear that.", "+10"],
        ["I'll read the next issue.", "+15"],
      ],
      [
        ["(FRIENDS) About what?", "0"],
        ["(FRIENDS) I'm happy to talk.", "0"],
      ],
      [
        ["So you knew all along?", "0"],
        ["It's just a coincidence.", "0"],
        ["Lala's the real phantom thief.", "0"],
      ],
      [
        ["(ROMANCE) It's up to you.", "+15"],
        ["(ROMANCE) I want to go to your place.", "+15"],
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

export const MoonChoices = {
  1: {
    points: 0,
    choices: [
      [
        ["I don't understand.", "0"],
        ["...Phan-Site?", "0"],
      ],
      [
        ["You've done good, kid.", "+15"],
        ["That sounds pretty tough.", "0"],
        ["Is this really necessary?", "0"]
      ],
      [
        ["Uh, strategic... what?", "0"],
        ["Sounds cool.", "+10"],
        ["You're really hyped for this.", "+5"]
      ],
      [
        ["Nice hustle, image manager.", "+5"],
        ["Calm down.", "0"],
        ["All-nighters can mess you up.", "0"]
      ],
    ]
  },
  2: {
    points: 0,
    choices: [
      [
        ["I've never heard that before.", "0"],
        ["Great idea.", "+10"],
        ["I'm already taken.", "+5"]
      ],
      [
        ["I'm worried about this...", "0"],
        ["We're part of... the Phandom?", "+5"],
        ["Let's tell them the truth.", "+5"]
      ],
      [
        ["It's not your fault.", "+5"],
        ["Don't overwork yourself.", "0"],
        ["I can't trust anyone anymore...", "0"]
      ],
      [
        ["Of course.", "+5"],
        ["Really?", "+5"],
        ["You'll get it right next time.", "+5"]
      ],
    ]
  },
  3: {
    points: 0,
    choices: [
      [
        ["Steak sounds good.", "+10"],
        ["Some nice organic veggies.", "0"],
        ["I love desserts.", "+5"]
      ],
      [
        ["You're amazing.", "+5"],
        ["That sounds like a scam.", "0"],
        ["Stop this at once.", "0"]
      ],
      [
        ["You're right.", "0"],
        ["Of course it would.", "0"],
        ["Maybe we can keep it...", "0"]
      ],
      [
        ["Yup.", "+5"],
        ["That's one way to view it.", "0"],
        ["You'll get better ideas.", "+5"]
      ],
    ]
  },
  4: {
    points: 0,
    choices: [
      [
        ["Why was it so expensive?", "+5"],
        ["It looks almost real.", "0"],
        ["Is it for me?", "+10"]
      ],
      [
        ["That's a good idea.", "+5"],
        ["Are you sure that's necessary?", "0"],
        ["Don't do anything stupid.", "0"]
      ],
      [
        ["All right.", "+5"],
        ["I expect great things.", "0"],
        ["...Did something happen?", "0"]
      ],
    ]
  },
  5: {
    points: 0,
    choices: [
      [
        ["Just tell me already.", "+5"],
        ["I'm not interested.", "0"],
        ["You sure are fired up...", "+5"]
      ],
      [
        ["Calm yourself.", "0"],
        ["Rumors are wrong all the time...", "+5"],
        ["It's none of our business.", "+5"]
      ],
      [
        ["Why?", "0"],
        ["I didn't ask for that.", "0"],
      ],
      [
        ["Is that right...?", "0"],
        ["Absolutely. Nice job.", "+5"],
      ],
    ]
  },
  6: {
    points: 0,
    choices: [
      [
        ["And what exactly will we win?", "+5"],
        ["You're so reliable.", "+15"],
        ["Chill out, dude.", "0"]
      ],
      [
        ["Sounds pretty twisted.", "+5"],
        ["By changing their hearts?", "0"],
        ["You really need to chill.", "+5"]
      ],
      [
        ["Fun...?", "0"],
        ["This isn't like you.", "0"],
        ["You're worrying me.", "0"]
      ],
      [
        ["We very well might.", "0"],
        ["Are you feeling guilty?", "0"],
      ],
      [
        ["Let's go.", "0"],
        ["This is the only way...", "0"],
      ],
      [
        ["You're riding our coattails.", "0"],
        ["Would that really satisfy you?", "0"],
      ],
      [
        ["Do it yourself.", "0"],
        ["We're leaving.", "0"],
        ["There's no need.", "0"]
      ],
      
      [
        ["(REQUIRES ANOTHER HANGOUT)", "0"],
      ],
      [
        ["I don't wanna change his heart.", "0"],
        ["Let's cancel the request.", "0"],
      ],
      [
        ["Stop worrying about fame.", "0"],
        ["You still care about fame?", "0"],
      ],
      [
        ["I'm sure there is.", "+5"],
        ["I hope so.", "0"],
        ["Maybe the Phan-Site?", "+10"]
      ],
      [
        ["Kind of worrying...", "+5"],
        ["Be careful.", "0"],
        ["It's your time to shine.", "+5"]
      ],
    ]
  },
  7: {
    points: 0,
    choices: [
      [
        ["I'm not leaving.", "+10"],
        ["You should run too.", "+5"],
        ["What are you going to do?", "0"]
      ],
      [
        ["You're just gonna take that?", "+5"],
        ["Believe in yourself.", "+5"],
        ["They're the real losers.", "+5"]
      ],
      [
        ["Totally.", "+5"],
        ["You were super cool.", "+15"],
        ["Wait, that was all an act?", "+10"]
      ],
      [
        ["You'll be fine.", "+5"],
        ["Calm down.", "0"],
        ["You've got this, man.", "+5"]
      ],
    ]
  },
  8: {
    points: 0,
    choices: [
      [
        ["Yup, dead as a doornail.", "0"],
        ["You showed some real courage.", "+10"],
        ["I'm glad you're still alive.", "+5"]
      ],
      [
        ["Something like that.", "0"],
        ["Exactly.", "0"],
      ],
      [
        ["Don't use our real names.", "0"],
        ["This came out of nowhere.", "0"],
        ["I can't wait to watch it.", "0"]
      ],
      [
        ["Meh.", "0"],
        ["What about a parfait instead?", "0"],
        ["I'm feeling steak, actually.", "0"]
      ],
      [
        ["The sparkle in your eyes.", "+5"],
        ["......", "0"],
        ["Your hair?", "0"]
      ],
    ]
  },
  9: {
    points: 0,
    choices: [
      [
        ["Did you find your answer?", "0"],
        ["Were you scared stiff?", "0"],
      ],
      [
        ["That was courageous.", "+15"],
        ["But you were afraid.", "+5"],
      ],
      [
        ["I didn't do anything.", "0"],
        ["Nobody stole your heart.", "0"],
        ["You changed yourself.", "0"]
      ],
      [
        ["I'm sure you will.", "0"],
        ["Make it a bestseller.", "0"],
        ["You have to write it first.", "0"]
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
  { name: "Lovers", details: LoversChoices },
  { name: "Chariot", details: ChariotChoices },
  { name: "Justice", details: JusticeChoices },
  { name: "Hermit", details: HermitChoices },
  { name: "Fortune", details: FortuneChoices },
  { name: "Hanged Man", details: HangedChoices },
  { name: "Death", details: DeathChoices },
  { name: "Temperance", details: TemperanceChoices },
  { name: "Devil", details: DevilChoices },
  { name: "Tower", details: TowerChoices },
  { name: "Star", details: StarChoices },
  { name: "Moon", details: MoonChoices },
  { name: "Sun", details: SunChoices },
  { name: "Faith", details: FaithChoices },
  { name: "Councillor", details: CouncillorChoices },
];