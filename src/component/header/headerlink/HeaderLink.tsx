import { Link } from "react-router-dom";

export default function HeaderLink() {
    return (
        <ul className=" flex gap-4 mr-2">
          <Link to="/">
            <li>Home</li>
          </Link>
    
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      );
}
