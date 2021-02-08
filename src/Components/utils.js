export const checkURL = (url) =>{
    return new Promise((resolve, reject) =>{
      
        if (url.length < 3 ){
            reject ("URL too short!");
        }
        if ( !/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/.test(url) ){
            reject ("incorrect URL!");
        }
        resolve ("Valid URL")
      
       
  
}
)
}