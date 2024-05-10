import RegisterForm from "@/components/auth/register-form";

const RegisterPage  = ()=>{

  return (
     <>
     <main className="flex bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 min-h-screen flex-col items-center justify-between p-24">

<RegisterForm/>
     </main>
     </>
  )

}
export default RegisterPage;