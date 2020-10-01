const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')
const isValidPrimary = require('./is-valid-primary.js')
const isValidSecondary = require('./is-valid-secondary.js')

// Your code here!
const color1 = process.argv[2];
const color2 = process.argv[3];

unDefined(color1, color2);

function unDefined(primary, secondary) {
    if (primary === undefined && secondary === undefined) {
        console.log('Minimum one color required, please try again');
    } else if (primary !== undefined && secondary === undefined) {
        console.log('You color ' + colorDeconstructor(primary));
    } else if (primary !== undefined && secondary !== undefined) {
        console.log('You color ' + colorCombinator(primary, secondary));
    } else {
        console.log('NOTHING IS WORKING');
    }
}

