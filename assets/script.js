
const topics = ['HTML','CSS','Git','Javascript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics(){
    for(let x = 0; x <topics.length; x++){
        console.log(topics[x]);
    }
    }

function selectTopic() {
if(randomTopic === 'HTML') {
    console.log("Let's study HTML!");
}else if (randomTopic === 'CSS'){
    console.log("Let's study CSS!");
}else if(randomTopic === 'Git') {
    console.log("Let's study Git!");
}else if(randomTopic === 'Javascript'){
    console.log("Let's study Javascript!");
}else{
    console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();