const clock=()=>{
    setTimeout(()=>{
        console.log('TIMED OUT!');
    },300);
}
clock();

module.exports= clock;