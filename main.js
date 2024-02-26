var differentProducts = 4; // variable that keeps track of the number of different products
var totalQuantity = 180; // variable that keeps track of the total quantity of products

function addProduct() {
    // get the values from the input fields
    var productName = document.getElementById("productName").value;
    var productQuantity = document.getElementById("quantityProduct").value;

    if (productName !== "" && productQuantity !== "") {
        // if the fields are not empty, add a new row to the table
        var table = document.querySelector("table");
        var newRow = table.insertRow(table.rows.length);

        // insert cells into the new row and fill them with the values of the new product
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        cell1.innerHTML = productName;
        cell2.innerHTML = productQuantity;
        cell3.innerHTML = '<button onclick="removeProduct(this)">Remove</button>';

        // update the counting variables
        differentProducts++;
        totalQuantity += parseInt(productQuantity);

        // update the information on the page
        updateProductInfo();

        // clear the input fields
        document.getElementById("productName").value = "";
        document.getElementById("quantityProduct").value = "";
    } else {
        // if any field is empty, display an alert
        alert("Please fill in all fields.");
    }
}

function updateQuantity() {
    // get the product name and new quantity from the HTML
    var productNameUpdate = document.getElementById("productNameUpdate").value;
    var quantityUpdate = document.getElementById("quantityUpdate").value;

    if (productNameUpdate !== "" && quantityUpdate !== "") {
        // get a reference to the table in HTML
        var table = document.querySelector("table");

        // iterate over the rows of the table, starting from the second row (index 1)
        for (var i = 1; i < table.rows.length; i++) {
            // check if the product name in the current row matches the entered name
            if (table.rows[i].cells[0].innerHTML === productNameUpdate) {
                // get the previous quantity of the product
                var previousQuantity = parseInt(table.rows[i].cells[1].innerHTML);

                // subtract the previous quantity and add the new quantity to update the total
                totalQuantity = totalQuantity - previousQuantity + parseInt(quantityUpdate);

                // update the quantity in the table cell
                table.rows[i].cells[1].innerHTML = quantityUpdate;

                // update general information about the products
                updateProductInfo();

                // clear the input fields in HTML
                document.getElementById("productNameUpdate").value = "";
                document.getElementById("quantityUpdate").value = "";

                // return after finding the product, as it has already been updated
                return;
            }
        }

        // if the product is not found, display an alert
        alert("Product not found.");
    } else {
        // if any field is empty, display an alert
        alert("Please fill in all fields.");
    }
}

function removeProduct(button) {
    // get the row corresponding to the clicked button
    var row = button.parentNode.parentNode;
    var removedQuantity = parseInt(row.cells[1].innerHTML);

    // update the counting variables
    differentProducts--;
    totalQuantity -= removedQuantity;

    // update the information on the page
    updateProductInfo();

    // remove the row from the table
    row.parentNode.removeChild(row);
}

function updateProductInfo() {
    // update information about products on the page
    document.getElementById("differentProducts").innerHTML = "Different products: " + differentProducts;
    document.getElementById("totalQuantity").innerHTML = "Total quantity of products in stock: " + totalQuantity;
}
