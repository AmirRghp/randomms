var masseges=['heyy','hoyy','hi'];
const newmassage=()=>{
    var random=Math.floor(Math.random()*masseges.length);
    console.log(masseges[random]);
}
newmassage();