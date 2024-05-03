import {Link} from "react-router-dom";


function Sidebar () {
    return (
<>
<div className="sidebar" >
<Link to="/">
<p>Home</p>
</Link>
<Link to="/about">
<p>About</p>
</Link>
</div>

</>

    )
}

export default Sidebar