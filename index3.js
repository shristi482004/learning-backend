let data;
async function abcd(){
    let blob=await fetch("https://randomuser.me/api/");
     data=await blob.json();
     console.log(data.results[0].name);
    
}
abcd();

