// "use client"
// import React, { ChangeEvent, useState } from "react"
// import { userLogin } from "../utils/userLogin";


// const Login = () => {
//     const [username, setUsername]= useState("");
//     const [password,setPassword] = useState("");
//     const [loading, setLoading] =useState(false);
//     const [error,setError] = useState('');
//     const [response,setResponse] = useState('');
    
//     const [navigate, setNavigate] = useState(''); 

//     const handleLogin = async(event:React.FormEvent<HTMLFormElement>)=>{
//         event.preventDefault();

//         try{
//             setLoading(true);
//             const response = await userLogin({username, password});
//             setResponse(response.message ?? 'Successful Login')
//             console.log(response);
//             setLoading(false);
//             setNavigate('/posts');
            
//         } catch(error){
//             setLoading(false);
//             const message = (error as Error).message;
//             console.log({message});
//             setError(message)
//             console.log({message});
            
//         }
        
//     }


//     return(
//         <div>
//         <form className="w-2/5 border p-10" onSubmit={handleLogin}>
//             <h2>LOGIN</h2>
//             <input placeholder="Enter Username" type="text" required
//             className="border w-full px-4 py-6 border-gray-500 rounded-xl mt-4"
//             onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
//             />
//             <br/>
//             <input placeholder="Enter Password" type="password" required
//             className="border w-full px-4 py-6 border-gray-500 rounded-xl mt-4"
//             onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
//             />
//             <br/>
//             <button className="rounded-xl bg-green-500 text-white cursor-pointer px-6 py-4">
                
//              {loading? 'Loading...':'Submit'}
//             </button>

//             {response && <p className="text-green-500 text-sm">{response}</p>}

//            {error && <p className="text-red-500 text-sm"> {error}</p>}
//         </form>
//         </div>
//     )
// }

// export default Login;


"use client"
import { ChangeEvent, useState } from 'react';
import { userLogin } from '@/app/utils/userLogin';
import { useRouter } from 'next/navigation';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [response, setResponse] = useState('');
    const router = useRouter();
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await userLogin({ username, password });
            setResponse(response.message ?? 'Successful login');
            router.push('/post');
        } catch (error) {
            setLoading(false);
            const message = (error as Error).message;
            setError(message);
        }
    };
    return (
        <div className="login-container">
            <h1>LOGIN</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="border border-gray-500 rounded-md w-full py-4 px-2 mt-2 "
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border border-gray-500 rounded-md w-full py-4 px-2 mt-2 "
                />
                <button type="submit" className="bg-green-500 text-white py-2 px-3 rounded-md" disabled={loading}>
                    {loading ? 'Loading ...' : 'Login'}
                </button>
                {error && <p className="error-message">{error}</p>}
                {response && <p className="success-message">{response}</p>}
            </form>
        </div>
    );
};
export default Login;