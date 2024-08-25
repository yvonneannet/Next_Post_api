// "use client"
// const url = '/api/login'
// export const userLogin = async({
//     username,
//     password,
// }:{
//     username:string;
//     password:string;
// })=>{
//     try{
//         const response = await fetch(url, {
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({username,password}),
//         });

//         return response.json();
//     }catch (error){
//         return error
//     }
// }


const url = '/api/login'
export const userLogin = async({username, password}:{username:String, password:String}) =>{
    try{
        const response = await fetch(url, {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({username,password}),
        });
        return response.json();
    }catch(error){
        return error
    }
}
export default userLogin;