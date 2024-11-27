import { createContext,useState,useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';



export const AuthContext=createContext({
    token:"",
    isAuthenticated:false,
    authenticate:(token)=> {},
    logout:()=> {},
})

function AuthContextProvider({children}) {

   const [authToken, setAuthToken] = useState(null)


   useEffect(()=>{
     async function fetchToken(){
       const storedToken = await AsyncStorage.getItem("token")

       if(storedToken)
       {
        setAuthToken(storedToken);
       }
     }
     fetchToken();
   },[])

   function authenticate(token){
    setAuthToken(token)
    AsyncStorage.setItem("token",token)
   }
   function logout(token){
    console.log("Logout tetiklendi");
    setAuthToken(null)
    AsyncStorage.removeItem("token")
    .then(() => {
      console.log("Token başarıyla silindi");
    })
    .catch((error) => {
      console.log("AsyncStorage Hatası:", error);
    });

   }

   const value={
    token:authToken,
    isAuthenticated: !!authToken,
    authenticate:authenticate,
    logout:logout,
   }



    return<AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export default  AuthContextProvider;