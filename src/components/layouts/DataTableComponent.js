import React, { useEffect, useState } from "react";
import Axios from "axios";
import DataTable from "react-data-table-component";

const DatatableComponent = () => {
  const [posts, SetPosts] = useState();
  const [toggledClearRows, SetToggledClearRows] = useState(false);
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    let res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
    let data = res.data;
    SetPosts(data);
  };
  const handleChange = state => {
    const { selectedRows } = state;
    console.log(selectedRows);
  };
  const columns = [
    {
      name: "userId",
      selector: "userId",
      width: "50px",
      sortable: true
    },
    {
      name: "id",
      selector: "id",
      width: "50px",
      button: true
    },
    {
      name: "Title",
      selector: "title",
      width: "500px"
    },
    {
      name: "body",
      selector: "body",
      width: "500px"
    }
  ];
  return (
    <React.Fragment>
      <div className="container">
        <DataTable
          highlightOnHover={true}
          pointerOnHover={true}
          overflowY={true}
          overflowYOffset={"250px"}
          pagination={true}
          defaultSortField={true}
          title="Posts"
          selectableRows
          columns={columns}
          data={posts}
          onRowSelected={handleChange}
          clearSelectedRows={toggledClearRows}
        />
      </div>
    </React.Fragment>
  );
};

export default DatatableComponent;
