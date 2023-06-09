import { DataGrid } from "@mui/x-data-grid";
import { Button, Tooltip } from "@mui/material";
import "../../../style/TableBills.css";

function TableBills() {
  const columns = [
    { field: "name", headerName: "Name", width: 350 },
    { field: "value", headerName: "Value", width: 330 },
    { field: "duedate", headerName: "Due date", width: 350 },
    {
      field: "",
      headerName: "Actions",
      width: 130,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = (e) => {
          console.log(e);
        };

        return (
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={onClick}
          >
            View details
          </Button>
        );
      },
    },
  ];

  const rows = [
    { id: 1, name: "Spotify", value: "$36.000", duedate: "09/05/2023" },
    { id: 2, name: "Eletricity", value: "$154.000", duedate: "10/05/2022" },
    { id: 3, name: "Car", value: "$1.245.000", duedate: "02/05/2022" },
    { id: 4, name: "Stark", value: "$234.000", duedate: "08/05/2022" },
  ];
  return (
    <div className="ContainerTable">
      <h4 className="tittleTable">Monthly bills</h4>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default TableBills;
