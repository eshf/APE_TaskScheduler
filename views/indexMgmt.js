function displayItems() {
    var l, i;
    document.getElementById("keyList").innerHTML = "";
    for (i = 0; i < localStorage.length; i++) {
        x = localStorage.key(i);
        document.getElementById("keyList").innerHTML += x + "<br>";
    }
}

// clear and display tables
function displaySchedules() {
    document.getElementById("employeeData").innerHTML = "";
    render();
    document.getElementById("keySearch").value = "";
}

// renders selected table
let keyVal = document.querySelector('#keySearch');

function render() {
    const key = keyVal.value;
    console.log(key);
    const dataset = JSON.parse(localStorage.getItem(key));
    const output = document.querySelector('#employeeData');

    const rows = dataset.map(data => {
        return `
            <tr>
                <th>${data.Name}</th>
                <td>${data.mondayShift1}</td><td>${data.mondayShift1AmenitiesCtr}</td><td>${data.mondayShift1FandB}</td><td>${data.mondayShift1Gas}</td><td>${data.mondayShift2}</td><td>${data.mondayShift2AmenitiesCtr}</td><td>${data.mondayShift2FandB}</td><td>${data.mondayShift2Gas}</td>
                <td>${data.tuesdayShift1}</td><td>${data.tuesdayShift1AmenitiesCtr}</td><td>${data.tuesdayShift1FandB}</td><td>${data.tuesdayShift1Gas}</td><td>${data.tuesdayShift2}</td> <td>${data.tuesdayShift2AmenitiesCtr}</td><td>${data.tuesdayShift2FandB}</td><td>${data.tuesdayShift2Gas}</td>
                <td>${data.wednesdayShift1}</td><td>${data.wednesdayShift1AmenitiesCtr}</td><td>${data.wednesdayShift1FandB}</td><td>${data.wednesdayShift1Gas}</td><td>${data.wednesdayShift2}</td> <td>${data.wednesdayShift2AmenitiesCtr}</td><td>${data.wednesdayShift2FandB}</td><td>${data.wednesdayShift2Gas}</td>
                <td>${data.thursdayShift1}</td><td>${data.thursdayShift1AmenitiesCtr}</td><td>${data.thursdayShift1FandB}</td><td>${data.thursdayShift1Gas}</td><td>${data.thursdayShift2}</td><td>${data.thursdayShift2AmenitiesCtr}</td><td>${data.thursdayShift2FandB}</td><td>${data.thursdayShift2Gas}</td>
                <td>${data.fridayShift1}</td><td>${data.fridayShift1AmenitiesCtr}</td><td>${data.fridayShift1FandB}</td><td>${data.fridayShift1Gas}</td><td>${data.fridayShift2}</td> <td>${data.fridayShift2AmenitiesCtr}</td><td>${data.fridayShift2FandB}</td><td>${data.fridayShift2Gas}</td>
            </tr>`;
    }).join('');

    output.innerHTML = `
        <table class="table">  
        <thead>
            <tr>
                <th colspan="1" id="title">${key}</th>
                <th colspan="2" id="monday1">Monday</th>
                <th colspan="2" id="tuesday1">Tuesday</th>
                <th colspan="2" id="wednesday1">Wednesday</th>
                <th colspan="2" id="thursday1">Thursday</th>
                <th colspan="2" id="friday1">Friday</th>
            </tr>
        </thead>
        <tbody>
         ${rows} 
         </tbody>
         <tfoot>
                       
                    </tfoot>
        </table>`;
}