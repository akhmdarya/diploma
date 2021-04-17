export const checkURL = (url) =>{
  
      
        if (url.length < 3 ){
            return ("URL too short!");
        }
        if ( !/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/.test(url) ){
            return ("incorrect URL!");
        }
        return ("Valid URL");
      
       
  


}
export const dateTime = (expires) => {



    const milliseconds = expires * 1000 // 1575909015000
    
    const dateObject = new Date(milliseconds)
    
    const humanDateFormat = dateObject.toLocaleString() 

    return humanDateFormat;
    
    }