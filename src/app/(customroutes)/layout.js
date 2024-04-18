
import SessionProvider from '../providers/SessionProvider';
import { getServerSession } from "next-auth";
import PrivateRoute from "../components/PrivateRoute";


export default function Layout({ children }) {
  const userSession = getServerSession();

  return (
    
    <SessionProvider session={userSession} >
        <PrivateRoute>
            {children}
        </PrivateRoute>
    </SessionProvider>
      
  );
}
