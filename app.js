// ============================================================
// 1. PASTE YOUR REDIRECT LINK HERE (only place you need to edit)
// ============================================================
const REDIRECT_URL = "https://www.trustpilot.com/evaluate/tradewzrd.com";

// ============================================================
// 2. ALL 50 REVIEWS
// ============================================================
const REVIEWS = [
  { stars: 5, name: "Marcus T.", text: "had one order not fill during a big news spike few months back and first thing i thought was bridge messed it up. messaged support already pissed lol. they checked the logs and showed me the order actually left the bridge in under a sec. broker was rejecting fills because of the spike. they even told me what to check on my broker side and what to ask support there. technically not even their issue but they still helped me figure it out. after that i stopped worrying about it tbh." },
  { stars: 5, name: "Daniel K.", text: "if you use tradingview alerts and still manually put the trades in then this saves so much headache. i trade NY open from europe so before this i had alarm at 2:45 in the morning. wake up half dead. open mt5. type everything. check it 3 times because im half asleep. then go back to bed. now i set the alert before sleeping and when i wake up its already done. my win rate is same honestly but my mornings are way better lol." },
  { stars: 5, name: "Chris P.", text: "i was pretty skeptical about another bridge tool because ive had one before just stop working and i didnt know until i noticed a trade was missing. what actually sold me on this was the account view. i have a couple mt4 and mt5 accounts and seeing everything together is really useful. used to have a spreadsheet open just to keep track of balances and positions. dont use that anymore. so far nothing randomly stopped either." },
  { stars: 5, name: "James W.", text: "took me like 3 attempts to get the alerts right. first one came through but price was wrong. second one didnt parse at all. third one worked and after that its been fine. thats probably the annoying part of setup. once you get it right you dont really touch it. support was good though. i asked some really dumb questions and they just answered them normally. no making me feel stupid which i appreciated." },
  { stars: 5, name: "Alex R.", text: "im honestly not technical. like i know what tradingview is and thats about it. webhook was basically a foreign language to me lol. got stuck during setup and support just told me exactly what to copy and where to put it. then waited while i did it and checked it. whole thing was probably 20 mins. was expecting some big complicated setup and it wasnt. if i managed it then most people probably can." },
  { stars: 5, name: "Tom H.", text: "been running breakout alerts to ctrader for a few months now. dont get a huge number of trades. maybe 6 or 7 alerts a week. sometimes nothing all day and sometimes 3 in one hour. havent really had issues with it. orders show up pretty quick and stops and targets come through how i put them. after the first month i stopped checking every single trade because there wasnt really anything to check. boring is good when it comes to this stuff." },
  { stars: 5, name: "Sam L.", text: "my prop account has pretty strict rules so i was actually scared of letting something auto copy trades into it. daily drawdown and consistency rules and all that. one thing i liked here was the manual approval option. alert comes in. i get the notification. look at it and approve it if i want. if not i skip. means im still in control but dont have to manually enter everything. for me thats probably the reason i went with this instead of some other options." },
  { stars: 5, name: "David M.", text: "got my dad using it too. hes 61 and not really good with computers. he only trades one setup anyway so i just configured one alert for him. first time it triggered he called me asking why the trade was already open because he hadnt touched anything. explained it again and now he gets it. he checks the phone notification and manages the trade himself. honestly if my dad can use it then setup cant be that complicated." },
  { stars: 5, name: "Ryan S.", text: "i mainly got this because of one stupid trade last year. had a perfect alert come in while i was driving. saw it at a red light and obviously couldnt sit there placing an order. by the time i parked the move was basically finished. that one trade would have paid for this thing for ages lol. now if im driving or away from desk the alert still gets executed. shouldve started using something like this way earlier." },
  { stars: 4, name: "Oliver B.", text: "i use tradingview into ctrader. mostly 4h and daily trades so im not really worried about tiny latency differences. candle closes and alert fires then order is there pretty much straight away. works fine for my style. cant say anything about 1 min scalping because thats not what i do. only thing i would like is better logs. would be nice to see alert received then order sent then filled with exact times instead of just seeing trade opened." },
  { stars: 5, name: "Liam N.", text: "does exactly what i wanted. tradingview alerts go into mt5 without me sitting there watching the screen. before this i literally had mt5 open most of the day waiting for alerts. felt stupid because the whole point of the alert was to tell me when something happened and then i was still manually doing the trade. now i check everything later in the evening. much easier." },
  { stars: 5, name: "Noah F.", text: "set it up saturday morning thinking this was going to eat my whole weekend. somehow was live before lunch. i thought webhook meant coding and servers and all that nonsense. actually just copied the url into tradingview and sent a test alert. saw the demo trade come in and that was basically it. honestly easier than i expected." },
  { stars: 5, name: "Ethan G.", text: "about a month in. using it to copy between two accounts. same entries and stops and ive got the risk set differently for each account. thats been working how i wanted. no complaints so far. im still keeping an eye on it though because usually with tools like this the first month is easy and then you find the weird problems later. ask me again after another month." },
  { stars: 5, name: "Lucas D.", text: "before this my trading routine was alert comes in then grab phone then open mt5 then type order then check size then change size then enter and then check everything again. same thing every single time. somehow never thought about how annoying that was until i stopped doing it. took one afternoon to set this up and now that whole process is gone. wish i did it sooner honestly." },
  { stars: 5, name: "Ben C.", text: "copying between my main and prop account has been pretty quick from what ive seen. i actually checked the timestamps a bunch of times because i didnt trust it at first lol. looked at both journals and they were basically lining up. setup was way less complicated than i expected too. thought this was going to be the difficult part but it wasnt." },
  { stars: 5, name: "Jack V.", text: "had some little bugs when i first started. dashboard would sometimes sit there loading for a few seconds. annoying but never had it affect an actual order for me. thats the important part. seems like updates fixed most of it now. ive been using it since the early days and its much smoother. wouldnt say everything was perfect from day one but the core stuff worked." },
  { stars: 5, name: "Henry J.", text: "ive wanted to automate my strategy for probably 2 years but always thought it would mean coding and VPS and learning a bunch of stuff i dont care about. finally decided to just try it over a weekend. took an afternoon lol. that was probably the biggest surprise. was expecting some massive technical project and it really wasnt." },
  { stars: 5, name: "Owen Q.", text: "support is actually fast. had a question about position sizing because i wasnt sure if the risk percentage was per account or per trade. expected some copy paste answer or FAQ link. got an actual reply pretty quickly with an example using my numbers. thats the kind of support i want. just answer the actual question instead of sending me a 40 page help article." },
  { stars: 5, name: "Leo Z.", text: "alerts usually get into mt5 in a second or two from what i can tell. i checked it quite a few times against the tradingview timestamp and mt5 journal because i was curious. never saw anything crazy. for my swing trades it really doesnt matter anyway. if youre scalping then obviously test it yourself. for what i trade its completely fine." },
  { stars: 5, name: "Max E.", text: "i have a day job so i cant exactly sit in front of mt4 all day. before this id be in a meeting and wondering if some alert fired while i wasnt looking. sometimes id literally check the terminal between meetings. now i just check from my phone when i get a minute. usually everything is already handled. small thing but makes trading around work way less annoying." },
  { stars: 5, name: "Adam Y.", text: "main reason i bought this was because i kept making stupid mistakes entering trades manually. once typed 1 lot instead of 0.1. noticed almost immediately but still cost me more than a year of the subscription. never made that exact mistake again because im not typing the order anymore. alert has the size and it gets sent. removing my own fingers from the process was probably the best feature for me lol." },
  { stars: 5, name: "Nathan A.", text: "im slowly moving my manual strategy into alerts. got about 12 rules i want to automate and 5 are done so far. every one i move over means one less thing i have to sit and watch for. doing it slowly because i want to test each one properly. honestly cant wait till all 12 are done. might finally have to find another hobby instead of staring at charts all day." },
  { stars: 4, name: "Felix U.", text: "works good. setup docs could be better though. i got confused around the alert format and had to mess around a bit before i understood it. would be nice if they had a short video showing the whole thing from start to finish. once i figured it out it was easy. just the first setup was a bit confusing for me." },
  { stars: 5, name: "George I.", text: "3 weeks in with tradelocker and so far no issues. connected first try and havent had to reconnect since. still playing around with the copy settings because theres more options than i expected. nothing has broken though. so far so good." },
  { stars: 5, name: "Harry O.", text: "fine for the price. gets my alerts into mt5 and thats basically all i need. im not trying to run 50 strategies or build some crazy algo setup. one setup a day is enough for me. wanted to stop manually entering it and this does that. dont really need anything else." },
  { stars: 5, name: "Charlie X.", text: "dashboard is actually nice. not full of random stuff i dont care about. most of my alerts happen overnight so when i wake up i just look at the history and see what fired. basically became my morning check. i like that its focused on the bridge part instead of trying to become another trading platform." },
  { stars: 5, name: "Jacob E2.", text: "i paper tested everything on demo for about two weeks before using it properly. zero missed alerts so far and fills look correct. probably overchecked everything at the start but id rather do that than connect a live account and hope for the best. after a couple weeks i felt comfortable enough to use it normally." },
  { stars: 5, name: "Sebastian W.", text: "not gonna lie i didnt read much of the docs. setup flow kind of explains itself though. alert format had an example right there and i just followed it. changed the values i needed and sent a test. worked. was live same day. cant complain about that." },
  { stars: 4, name: "Finn P.", text: "one thing i really want is the ability to pause copying from mobile. had a situation where i wanted to stop it while i was away from my computer and couldnt do it from my phone. had to wait until i got back. not a huge issue but definitely something id use. apart from that its been fine." },
  { stars: 5, name: "Theo M2.", text: "does what it says. using the mt4 bridge and its been stable for about 3 months. no reconnects or random stuff so far. i dont really need fancy features. if the connection stays alive and orders get where theyre supposed to go then im happy." },
  { stars: 5, name: "Archie L2.", text: "having all my accounts in one place is probably my favourite part. got two mt4 accounts and one mt5. before i had three terminals open and sometimes a notepad because apparently i couldnt remember my own account numbers. now i open one screen and can see everything. much better." },
  { stars: 5, name: "Joshua R2.", text: "copy trading was the main reason i signed up. i had two accounts and used to manually enter the same trade twice. sounds easy until youre rushing and one account gets a slightly different size or stop. now i just set the risk and link the accounts. one trade comes in and the copies happen. much less room for me to mess it up." },
  { stars: 5, name: "Alfie T2.", text: "got it running in less than an hour and didnt write any code. webhook setup was basically copy paste. added the URL. sent a test alert. watched the demo trade appear. then connected the real thing. i had built this up in my head as some technical nightmare and it really wasnt." },
  { stars: 4, name: "Freddie S2.", text: "took one star off because the risk settings during onboarding confused me. the default number wasnt what i thought it meant and i nearly set it wrong. support fixed it for me in one message though. after that everything has been fine. would just make that part of setup more obvious." },
  { stars: 5, name: "Louie D2.", text: "i like that it doesnt try to do everything. some trading tools want to be your charts and journal and news app and execution platform all together. i already have stuff for that. i just wanted something to take my tradingview alert and send the trade where it needs to go. this stays pretty focused on that." },
  { stars: 5, name: "Teddy H2.", text: "needed ctrader support and thats honestly why i ended up here. a lot of other tools i checked didnt have it or made it look like a pain to setup. connected mine and it worked. been using it for a couple months and havent seen any dropped signals. thats really all i needed from it." },
  { stars: 5, name: "Finley K2.", text: "not the prettiest UI ive ever used but its fast and nothing has really broken. ive used tools before that looked amazing and then stopped working every few days. id rather have something boring that works. dont care if the dashboard wins a design award lol." },
  { stars: 5, name: "Hugo F2.", text: "set up my first copy trade thursday and had it running friday morning. what surprised me was the default settings. usually i have to change half the stuff before it makes sense. here i barely changed anything. changed a couple settings for my account and left the rest. nice when defaults actually make sense." },
  { stars: 5, name: "Reuben G2.", text: "solid execution bridge. got mt5 and ctrader linked and alerts flowing. been about 2 months now without any drama. honestly its becoming boring. thats a good thing with trading software. i dont want to think about the bridge every day. i just want it to work." },
  { stars: 5, name: "Rory J2.", text: "solid. does the job. connected it. tested it. started using it. nothing much else to say really. sometimes thats exactly what you want from a tool." },
  { stars: 5, name: "Elliot B2.", text: "i dont touch my charts after the alert fires anymore. thats basically the review. before i was jumping straight into mt5 every time. now alert fires and i let it do its thing. gives me one less thing to worry about during the day." },
  { stars: 5, name: "Mason C2.", text: "took me longer to decide which broker i wanted than to setup the bridge. webhook in. test alert. trade out. pretty much it. i was expecting way more setup because of all the stuff i read about webhooks but it ended up being simple." },
  { stars: 5, name: "Logan N2.", text: "set and forget for me. alerts fire. trades go in. i get on with my day. obviously i still check the account but im not sitting there watching every alert anymore. thats really why i wanted automation in the first place." },
  { stars: 4, name: "Kai V2.", text: "works fine. only thing i would change is the alert history. would like to see more detail about what happened. like exact time alert was received then order sent then filled. right now its enough for normal use but if something ever goes wrong id want more information." },
  { stars: 5, name: "Oscar X2.", text: "had to reconnect mt5 after i changed my broker password. thought it might be a whole thing but took maybe 2 mins. reconnected and everything was back. havent had any other problems with the connection. pretty normal thing to happen anyway when you change login details." },
  { stars: 4, name: "Ezra Z2.", text: "been reliable so far. only complaint is i wish the trial was longer. wanted a bit more time to test different setups before paying. price is fair though so wasnt a huge issue. alerts have been working and thats what matters to me." },
  { stars: 5, name: "Jude Q2.", text: "small learning curve with the alert format. first one i made didnt work because i had the fields wrong. looked at their example and figured it out pretty quick after that. probably took another 10 mins. once you understand the format you dont really think about it anymore." },
  { stars: 5, name: "Blake W2.", text: "support replied on sunday which i wasnt expecting. had a setup question and thought id have to wait until monday. got a response and was able to finish everything that day. wasnt some generic bot message either. actual answer to what i asked." },
  { stars: 5, name: "Kai H3.", text: "simple and does the thing. using it with tradelocker and havent had any dropped orders that ive seen in around 2 months. i dont need a million features. alerts come in and trades go out. thats enough for me." },
  { stars: 5, name: "Rhys P3.", text: "overall pretty happy with it. i was cautious at first because ive used automation tools before that work great for a week and then you find some random issue. tested everything on demo first and checked the alerts against the broker journal. once that looked good i started using it properly. biggest benefit for me isnt some huge change to my strategy. its just removing the boring manual execution part. now the alert happens and i dont have to stop whatever im doing to type an order in." }
];

// ============================================================
// 3. DICE LOGIC — shuffled deck, no repeats until all 50 shown
// ============================================================
const FACES = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];
const diceEl = document.getElementById("dice");
const cardEl = document.getElementById("card");
const starsEl = document.getElementById("stars");
const textEl = document.getElementById("text");
const nameEl = document.getElementById("name");
const copyEl = document.getElementById("copy");
const leftEl = document.getElementById("left");

let deck = [];
let current = null;
let rolling = false;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function updateLeft() {
  leftEl.textContent = deck.length;
}

function roll() {
  if (rolling) return;
  rolling = true;
  diceEl.disabled = true;
  copyEl.disabled = true;
  copyEl.classList.remove("done");
  copyEl.textContent = "\u29C9 copy review";
  cardEl.hidden = true;
  diceEl.classList.add("tumbling");

  const total = 12 + Math.floor(Math.random() * 6);
  let ticks = 0;
  const timer = setInterval(() => {
    diceEl.textContent = FACES[Math.floor(Math.random() * FACES.length)];
    if (++ticks >= total) {
      clearInterval(timer);
      if (deck.length === 0) deck = shuffle(REVIEWS); // fresh deck, reshuffle
      current = deck.pop();
      diceEl.textContent = FACES[Math.floor(Math.random() * FACES.length)];
      diceEl.classList.remove("tumbling");
      starsEl.textContent = "\u2605".repeat(current.stars) + "\u2606".repeat(5 - current.stars);
      textEl.textContent = current.text;
      nameEl.textContent = current.name + " · verified";
      cardEl.hidden = false;
      // restart rise animation
      cardEl.style.animation = "none";
      void cardEl.offsetWidth;
      cardEl.style.animation = "";
      copyEl.disabled = false;
      diceEl.disabled = false;
      rolling = false;
      updateLeft();
    }
  }, 70);
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
  } catch (e) {
    // ignore — redirect still happens below
  }
  document.body.removeChild(ta);
}

async function copyAndGo() {
  if (!current || copyEl.disabled) return;
  try {
    await navigator.clipboard.writeText(current.text);
  } catch (e) {
    fallbackCopy(current.text);
  }
  copyEl.classList.add("done");
  copyEl.textContent = "copied \u2713";
  copyEl.disabled = true;
  setTimeout(() => {
    window.location.href = REDIRECT_URL;
  }, 800);
}

diceEl.addEventListener("click", roll);
copyEl.addEventListener("click", copyAndGo);

deck = shuffle(REVIEWS);
updateLeft();
