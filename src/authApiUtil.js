 
 export const postSession = async (name, email)=>{
        const data = await fetch("https://frontend-take-home-service.fetch.com/auth/login", {
          method: "POST",
          credentials: "include",
          headers: {
            'Content-Type' : "application/json"
          },
          body: JSON.stringify({
            name,
            email
          } )
        });
       
}
  

export const deleteSession = async (name, email)=>{
  const data = await fetch("https://frontend-take-home-service.fetch.com/auth/logout", {
    method: "POST",
    credentials: "include",
    headers: {
      'Content-Type' : "application/json"
    },
    body: JSON.stringify({
      name,
      email
    } )
  });
 
}
  
    