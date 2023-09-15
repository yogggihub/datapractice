import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
let getFoodsData = JSON.parse(localStorage.getItem("foods") as string);
const ProductDetails = () => {
  const { productId } = useParams();
  const [food, setFood] = useState<Array<Record<string, any>>>();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    setFood(getFoodsData.filter((item: any) => item.fdcId === +`${productId}`));
  }, []);
  const foodItem = food?.map((item) => {
    const foodNutrients = item?.foodNutrients;
    return (
      <div className="col-md-12 col-lg-12 col-xl-12">
        <div className="card">
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <div>
                <p>
                  <a href="#!" className="text-dark">
                    {item.fdcId as React.ReactNode}
                  </a>
                </p>
                <p className="small text-muted">
                  DataType: {item.dataType as React.ReactNode}
                </p>
              </div>
              <div>
                <p className="small text-muted">
                  {" "}
                  Date {item.publicationDate as React.ReactNode}
                </p>
              </div>
            </div>
          </div>
          <hr className="my-0" />
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <p>{item.description as React.ReactNode}</p>
            </div>
            <p className="small text-muted">Food Nutrients</p>
            <table className="table-container">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Number</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>unitName</th>
                </tr>
              </thead>
              <tbody>
                {" "}
                {foodNutrients.map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td> {item.number}</td>
                      <td>{item.name}</td>
                      <td> {item.amount} </td>
                      <td> {item.unitName} </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <hr className="my-0" />
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
              <button
                type="button"
                className="btn btn-primary"
                onClick={goBack}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <section>
        <div className="container py-5">
          <div className="row justify-content-center">{foodItem}</div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
