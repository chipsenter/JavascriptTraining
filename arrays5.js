let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push('to', 'Program');
//console.log(secretMessage);
secretMessage[7] = 'right';
//Testing index 7
console.log(secretMessage[7]);
secretMessage.shift();
//Testing Shift method
//console.log(secretMessage);
console.log(secretMessage.unshift('Programming'));
//Testing unshift method
//console.log(secretMessage);
console.log(secretMessage.slice(6, 11));
secretMessage[6] = 'know';
console.log(secretMessage[6]);
//console.log(secretMessage);
console.log(secretMessage.join(' '));
