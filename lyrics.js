// lyrics.js - Contains Taylor Swift lyrics and getLyric function

// All the lyrics in an array
const lyrics = [
  { quote: "All of this to say, I hope you're okay.", song: "Fortnight" },
  { quote: "You're in self-sabotage mode, throwing spikes down on the road; but I've seen this episode and still loved the show.", song: "The Torured Poets Department" },
  { quote: "I'd rather burn my whole life down than listen to one more second of all this bitching and moaning.", song: "But Daddy I Love Him" },
  { quote: "I'll tell you something about my good name – it's mine alone to disgrace.", song: "But Daddy I Love Him" },
  { quote: "I'll tell you something right now, you ain't gotta pray for me", song: "But Daddy I Love Him" },
  { quote: "So tell me everything is not about me; but what if it is?", song: "Who's Afraid Of Little Old Me?" },
  { quote: "Told my friends I hate you, but I love you just the same.", song: "imgonnagetyouback" },
  { quote: "And I could see it from a mile away - a perfect case for my certain skillset.", song: "I Can Fix Him (No Really I Can)" },
  { quote: "If you know it in one glimpse, it's legendary.", song: "loml" },
  { quote: "They said, 'Babe, you gotta fake it 'til you make it' - and I did.", song: "I Can Do It With A Broken Heart" },
  { quote: "I cry a lot, but I am so productive; It's an art!", song: "I Can Do It With A Broken Heart" },
  { quote: "You look like Taylor Swift in this light, we're loving it. You've got edge she never did.", song: "Clara Bow" },
  { quote: "I guess a lesser woman would've lost hope, a greater woman wouldn't beg.", song: "The Prophecy" },
  { quote: "Why for years they've said that I was guilty as sin, and sleep in a liar's bed. But the sleep comes fast, and I'll meet no ghosts.", song: "Carolina" },
  { quote: "Darling, I'm a nightmare dressed like a daydream.", song: "Blank Space" },
  { quote: "It's like I got this music in my mind sayin' it's gonna be alright.", song: "Shake It Off" },
  { quote: "In another life, you still would've turned my head.", song: "Timeless" },
  { quote: "Time breaks down your mind and body - don't you let it touch your soul.", song: "Timeless" },
  { quote: "And sometimes there's no proof, you just know.", song: "Timeless" },
  { quote: "Hope it's nice where you are. And I hope the sun shines and it's a beautiful day.", song: "Last Kiss" },
  { quote: "'Cause there were pages turned with the bridges burned, everything you lose is a step you take.", song: "You're On Your Own, Kid" },
  { quote: "make the friendship bracelets, take the moment and taste it, you've got no reason to be afraid.", song: "You're On Your Own, Kid" },
  { quote: "Draw the cat eye sharp enough to kill a man.", song: "Vigilante Shit" },
  { quote: "They say looks can kill and I might try.", song: "Vigilante Shit" },
  { quote: "Ladies always rise above, ladies know what people want.", song: "Vigilante Shit" },
  { quote: "Best believe I'm still bejeweled; when I walk in the room, I can still make the whole place shimmer.", song: "Bejweled" },
  { quote: "Sweet like honey, karma is a cat, purring in my lap 'cause it loves me.", song: "Karma" },
  { quote: "And the voices that implore 'you should be doing more' - to you I can admit that I'm just too soft for all of it", song: "Sweet Nothing" },
  { quote: "If you fail to plan, you plan to fail.", song: "Mastermind" },
  { quote: "Tears on the letter, I vowed not to cry anymore.", song: "The Great War" },
  { quote: "Romance is not dead if you keep it just yours.", song: "Paris" },
  { quote: "It feels like a perfect night for breakfast at midnight, to fall in love with strangers.", song: "22" },
  { quote: "Tonight's the night when we forget about the deadlines.", song: "22" },
  { quote: "We're happy, free, confused and lonely in the best way; it's miserable and magical.", song: "22" },
  { quote: "And all I feel in my stomach is butterflies - the beautiful kind, making up for lost time, taking flight, making me feel right", song: "Everything Has Changed" },
  { quote: "And I see the permanent damage you did to me; never again, I just wish I could forget when it was magic.", song: "Better Man" },
  { quote: "The more that you say, the less I know.", song: "willow" },
  { quote: "Life was a willow and it bent right to your wind.", song: "willow" },
  { quote: "What must it be like to grow up that beautiful? With your hair falling into place like dominoes.", song: "gold rush" },
  { quote: "My mind turns your life into folklore; I can't dare to dream about you anymore.", song: "gold rush" },
];

// Function to get a random lyric and display it
function getLyric() {
  const chosen = lyrics[Math.floor(Math.random() * lyrics.length)];
  document.getElementById('tswiftLyric').textContent = `"${chosen.quote}"`;
  document.getElementById('tswiftSong').textContent = `– ${chosen.song}`;
}

// You can add more lyrics by just adding new objects to the array above
// Example:
// { quote: "Your new quote here", song: "The song name" },
