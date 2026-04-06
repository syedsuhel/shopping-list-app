
import ProductsList from "../Component/ProductsList";
import Category from "../Component/Category";
import { Link } from "react-router-dom";

function Home() {
    

  return (
    <div>
        {/* Category Section */}

      <Category/>
      {/* More Button */}
      <div className="container">
        <div className="row">
            <div className="col-12 text-center">
                <Link to="/categories" className="btn btn-primary m-3">
                    View More Categories
                </Link>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
