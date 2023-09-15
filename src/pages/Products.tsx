import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import data from "../data/dummyData.json";
const Products = () => {
  const [searchQuery, setSearchQuery] = useState<string>();
  const dispatch = useDispatch();
  const [foodData, setFoodData] =
    useState<Array<Record<string, unknown>>>(data);
  // localStorage.setItem("foods", JSON.stringify(response.data));
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://api.nal.usda.gov/fdc/v1/foods/list?api_key=DEMO_KEY"
        );
        console.log(response);
        localStorage.setItem("foods", JSON.stringify(response.data));
      } catch (error) {
        console.error("API Faild", error);
      }
    }
    getData();
  }, []);
useEffect(()=>{
 // dispatch(saveFoods())
},[])
  const foodItems = foodData.map((item, index): React.ReactNode => {
    return (
      <div className="col-md-6 col-lg-6 col-xl-6 border-sm-start-none border-end mt-4">
        <h5>{item.fdcId as React.ReactNode}</h5>
        <p className="text-truncate mb-4 mb-md-0">
          {item.description as React.ReactNode}
        </p>
        <div className="d-flex flex-column mt-4">
          <Link
            className="btn btn-primary btn-sm"
            to={`/productdetails/${item.fdcId}`}
          >
            Details
          </Link>
          <button className="btn btn-outline-primary btn-sm mt-2" type="button">
            Add to Favorites
          </button>
        </div>
      </div>
    );
  });
  return (
    <>
      <section>
        <div className="container py-5">
          <div className="row justify-content-center mb-3">
            <div className="row">
              <div className="tb_search col-md-6 col-lg-6 col-xl-6">
                <input
                  type="text"
                  name="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="searchBox"
                  id="search_input_all"
                  placeholder="Search.."
                />
              </div>
            </div>
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">{foodItems}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
