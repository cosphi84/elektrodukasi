import { Button } from "@/components/ui/button";
import { auth, signIn, signOut } from "@/lib/auth";

export default async function AdminPage(){
    const session = await auth()

    if (!session?.user){
        return signIn();
    }
    
    return (
        <>
            <h1>Welcome to admin arena</h1>
            
        </>
    )
}