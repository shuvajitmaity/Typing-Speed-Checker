
const word = [
    "Before we started we did a dummy run.A simple sentence is the most basic form of a sentence",
    "The local elections can be seen as a dummy run for the national election next year.",
    "Two microphones, one in each ear of a dummy or human head, pick up the sound reaching the ears.",
    " Rugs! Good heavens, man, do I pay you to stand about like a tailor's dummy?",
    "But the alert was called off when it was identified as a dummy empty shell.",
    "I reckoned without that dummy Ryder.",
    "Dummy patrol cars will be set up beside motorways to frighten speeding motorists. ",
    "He claims that his dummy head does likewise.",
    "They were not armed but carried wingtip dummy missiles.",
    "The baby was clutching his dummy tightly in his grubby fist."

]



const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');

let start_time, end_time;

const playGame = () => {
    let random_no = Math.floor(Math.random() * word.length);
    msg.innerText = word[random_no];
    let date = new Date();
    start_time = date.getTime();
    

}
const wordCounter = (str)=>{
    let len=str.split(" ").length;
    return len;
}
const compareWords=(str1,str2)=>{
    const words1=str1.split(" ");
    const words2=str2.split(" ");
    let cnt=0;

    words1.forEach((item,index) => {
        if(item==words2[index]){
            cnt++;
        }
    });

    let errorWords= (words1.length -cnt);
    return (cnt+` correct out of ${words1.length} words and total no of errors are ${errorWords}.`)
}
const endGame = ()=>{
    let date=new Date();
    end_time=date.getTime();
    let totalTime=((end_time-start_time)/1000);//milisec->sec

    //word length
    let totalstr=typeWords.value ;
    let wordCount=wordCounter(totalstr);

    //speed
    let speed=Math.round((wordCount/totalTime)*60);
    let finalmsg=`your Typing speed is ${speed} words per minute `;


    //compare words
    finalmsg += compareWords(msg.innerText,totalstr);
    typeWords.value=""
    msg.innerText=finalmsg
    
}
btn.addEventListener('click', () => {
    playGame();
})
btn1.addEventListener('click', () => {
    endGame();
})
