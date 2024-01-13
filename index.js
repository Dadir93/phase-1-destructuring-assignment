const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
muppetName: 'Miss Piggy',
color: 'pink',
song: 'Never Before, Never Again',
job: 'Cast member of The Muppet Show',
partner: 'Kermit'
};

const nestedMuppet = {
nestedName: 'Kermit',
nestedColor: 'green',
album: {
theMuppetMovie: {
song1: 'Rainbow Connection',
song2: 'Moving Right Along',
song3: 'Never Before, Never Again',
song4: 'I Hope That Something Better Comes Along',
},
},
nestedJob: 'Host of The Muppet Show',
nestedPartner: 'Miss Piggy'
};

const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

const { horse: bessie, sheep: dolly, pig: babe, chicken: little } = { horse: 'cow', sheep: 'sheep', pig: 'pig', chicken: 'chicken' };

const { chicken: blackAndWhite, cow: black, pig: pink } = { chicken: 'cow', cow: 'sheep', pig: 'pig' };

const [red, orange, yellow, green, blue, indigo, violet] = colors;

const [r, o, y, g, b, , v] = colors;

const [, , , , , indg] = colors;

const { muppetName, color, song, job, partner } = muppet;
const { nestedName, nestedColor, album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;