// import the data from data.js
// const is used because we do not want the raw data altered

const tableData = data;

// Reference the HTML table using d3

var tbody = d3.select("tbody");

// Create new function to build a table to display the UFO sightings data
function buildTable(data) {
// Clear existing data 
    tbody.html("");


    // Loop through each object in the data
    // and append a row and cells for each value in the row
    data.for Each((dataRow) => {

        //Create a variable that will append a row to the table body
        let row = tbody.append("tr");

        //Loop through each field in the dataRow and add
        // each value as a table cell(td)
        Object.values(dataRow.forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
         );
     });
}