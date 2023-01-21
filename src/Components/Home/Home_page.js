import { Link} from "react-router-dom";
import "../CSS/Home_page_css.css"
export default function Home_page() {
    return (

<div className="home-page-background">

<div className="navbar">


< Link to="/home" className="home-hp">
   <span className="textnav">Home</span>
</Link>
<div className="emptynav-hp"> 

</div>
< Link to="/login" className="login-hp">
  <span className="textnav">Login</span>
</Link>
< Link to="/register" class="register-hp"> 
  <span className="textnav">Register</span>
</Link>


</div>

</div>

    );
  }