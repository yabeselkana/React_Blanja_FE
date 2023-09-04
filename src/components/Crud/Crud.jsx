import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
// import { Link } from "react-router-dom";
import ModalCreate from "../Model/ModelCreate";
import ModalUpdate from "../Model/ModelUpdate";
import ModalDelete from "../Model/ModelDelete";
// import { useDispatch } from "react-redux";
// import { getProduct } from "../../config/redux/actions/productAction";

import style from "./Crud.model.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Crud = () => {
  // const dispatch = useDispatch();
  // let [products, setProducts] = useState([]);
  // useEffect(() => {
  //   dispatch(getProduct(setProducts));
  // }, []);
  let [products, setProducts] = useState([]);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearch = () => {
    if (search !== "" && sort !== "") {
      setSearchParams({
        keyword: search,
        sort: sort,
      });
    } else if (search !== "") {
      setSearchParams({
        keyword: search,
      });
    } else if (sort !== "") {
      setSearchParams({
        sort: sort,
      });
    } else {
      setSearchParams({});
    }
  };
  const handleSort = (e) => {
    setSort(e.currentTarget.value);
  };

  useEffect(() => {
    // const keyword = searchParams.get("keyword");
    // const sort = searchParams.get("sort");

    // const sorts = `sort=${sort}`;
    // const key = `keyword=${keyword}`;
    // // const opst = `?${sorts}&${key}`;
    console.log(searchParams);

    axios
      .get(`${process.env.REACT_APP_API_BACKEND}/products?${searchParams}`)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(searchParams.get("keyword"));
  }, [searchParams]);

  const actionBodyTemplate = (products) => {
    console.log(products);
    return (
      <>
        <ModalUpdate id={products.id} name={products.name} stock={products.stock} price={products.price} description={products.description}>
          Update
        </ModalUpdate>
        <ModalDelete id={products.id} name={products.name}>
          Delete
        </ModalDelete>
      </>
    );
  };
  return (
    <>
      {/* <h1>Product</h1> */}
      <>
        <ModalCreate className="container" />
        <div className=" mt-4 container row">
          <div className="container  mb-2">
            {/* <select onChange={handleSort}>
              <option value="">Pilih Option</option>
              <option value="ASC">A-Z</option>
              <option value="DESC">Z-A</option>
            </select> */}
          </div>
          <div className="container">
            <input type="text" name="search" placeholder="search" onChange={(e) => setSearch(e.target.value)} />
            <button className="btn btn-primary ml-3" onClick={handleSearch}>
              cari
            </button>
          </div>
        </div>

        <div className="table-responsive  container col-xs-12" style={{ overflowX: "auto" }}>
          <table className={`${style.table} table table-responsive-sm `}>
            <tbody>
              <div className={`card ${style.card}`}>
                <DataTable value={products} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: "50rem" }}>
                  <Column field="id" header="Id" sortable style={{ width: "25%" }}></Column>
                  <Column field="name" header="Name" sortable style={{ width: "25%" }}></Column>
                  <Column field="stock" header="Stock" sortable style={{ width: "25%" }}></Column>
                  <Column field="price" header="price" sortable style={{ width: "25%" }}></Column>
                  <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: "12rem" }}></Column>
                </DataTable>
              </div>
            </tbody>
          </table>
        </div>
      </>
    </>
  );
};

export default Crud;
