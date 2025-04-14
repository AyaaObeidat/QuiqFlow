const pingPongTracker = () =>{
    let totalAmountOfTime = 0 ;
    return {
        timeSpentPlaying : function(){
           return totalAmountOfTime;
        },

        playOneGame : function(){
            totalAmountOfTime = totalAmountOfTime + 15;
            return 'Game played';
        },

        myLevel : function(){
            if(totalAmountOfTime < 30) return  "I need to improve my game";
            else if (totalAmountOfTime >= 30 && totalAmountOfTime <= 100) return "You need to improve your game";
            else return "Wow, I have wasted a lot of time";
        }
    }
}

const main = () => {
    const myFun = pingPongTracker();
    console.log(myFun.playOneGame());
    console.log(myFun.timeSpentPlaying());
    console.log(myFun.myLevel());

    console.log('----------------------');
    console.log(myFun.playOneGame());
    console.log(myFun.timeSpentPlaying());
    console.log(myFun.myLevel());
}
main();