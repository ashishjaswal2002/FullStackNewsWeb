import {auth,signOut} from "@/auth"

const AdminHandle = async()=>{
    const session  = await auth();
   return (
    
    <>
    <h1>{JSON.stringify(session)}</h1>

    <form action ={async()=>{
    "use server"
    await signOut();
    }}>

   <button type="submit">
      Sign Out
   </button>
        </form>
    </>
   )
}


export default AdminHandle;