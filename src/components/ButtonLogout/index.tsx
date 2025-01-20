
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useAuth } from "../../context/AuthContext";


export default function ButtonLogout({className}:{className:string}) {

    const navigate = useNavigate();
    const {logout} = useAuth();

    return (
        <span style={{cursor: 'pointer'}} className={`${className}`} onClick={() => {logout(); navigate('/app/login');}} >sair</span>
    );
}