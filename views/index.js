let publishedTable = document.querySelector('#publish');
publishedTable.addEventListener('click', () => {
    const tableKey = document.querySelector('#week');
    const key = tableKey.value;
    const table = document.querySelector('#table');
    const tbody = table.tBodies[0];

    var monShift1 = document.getElementById("monShift1");
    var monShift1Text = monShift1.options[monShift1.selectedIndex].value;





    var mondayShift1AmenitiesCtr = document.getElementById("mondayShift1AmenitiesCtr");
    var mondayShift1AmenitiesCtrText = mondayShift1FandB.options[mondayShift1AmenitiesCtr.selectedIndex].value;

    var mondayShift1FandB = document.getElementById("mondayShift1FandB");
    var mondayShift1FandBText = mondayShift1FandB.options[mondayShift1FandB.selectedIndex].value;

    var mondayShift1Gas = document.getElementById("mondayShift1Gas");
    var mondayShift1GasText = mondayShift1Gas.options[mondayShift1Gas.selectedIndex].value;


    var mondayShift2 = document.getElementById("mondayShift2");
    var mondaydayShift2Text = mondayShift2.options[mondayShift2.selectedIndex].value;



    var mondayShift2AmenitiesCtr = document.getElementById("mondayShift2AmenitiesCtr");
    var mondayShift2AmenitiesCtrText = mondayShift2FandB.options[mondayShift2AmenitiesCtr.selectedIndex].value;


    var mondayShift2FandB = document.getElementById("mondayShift2FandB");
    var mondayShift2FandBText = mondayShift2FandB.options[mondayShift2FandB.selectedIndex].value;

    var mondayShift2Gas = document.getElementById("mondayShift2Gas");
    var mondayShift2GasText = mondayShift2Gas.options[mondayShift2Gas.selectedIndex].value;

    var tuesdayShift1 = document.getElementById("tuesdayShift1");
    var tuesdayShift1Text = tuesdayShift1.options[tuesdayShift1.selectedIndex].value;





    var tuesdayShift1AmenitiesCtr = document.getElementById("tuesdayShift1AmenitiesCtr");
    var tuesdayShift1AmenitiesCtrText = tuesdayShift1FandB.options[tuesdayShift1AmenitiesCtr.selectedIndex].value;

    var tuesdayShift1FandB = document.getElementById("tuesdayShift1FandB");
    var tuesdayShift1FandBText = tuesdayShift1FandB.options[tuesdayShift1FandB.selectedIndex].value;


    var tuesdayShift1Gas = document.getElementById("tuesdayShift1Gas");
    var tuesdayShift1GasText = tuesdayShift1Gas.options[tuesdayShift1Gas.selectedIndex].value;


    var tuesdayShift2 = document.getElementById("tuesdayShift2");
    var tuesdayShift2Text = tuesdayShift2.options[tuesdayShift2.selectedIndex].value;




    var tuesdayShift2AmenitiesCtr = document.getElementById("tuesdayShift2AmenitiesCtr");
    var tuesdayShift2AmenitiesCtrText = tuesdayShift2FandB.options[tuesdayShift2AmenitiesCtr.selectedIndex].value;

    var tuesdayShift2FandB = document.getElementById("tuesdayShift2FandB");
    var tuesdayShift2FandBText = tuesdayShift2FandB.options[tuesdayShift2FandB.selectedIndex].value;

    var tuesdayShift2Gas = document.getElementById("tuesdayShift2Gas");
    var tuesdayShift2GasText = tuesdayShift2Gas.options[tuesdayShift2Gas.selectedIndex].value;

    var wednesdayShift1 = document.getElementById("wednesdayShift1");
    var wednesdayShift1Text = wednesdayShift1.options[wednesdayShift1.selectedIndex].value;




    var wednesdayShift1AmenitiesCtr = document.getElementById("wednesdayShift1AmenitiesCtr");
    var wednesdayShift1AmenitiesCtrText = wednesdayShift1FandB.options[wednesdayShift1AmenitiesCtr.selectedIndex].value;

    var wednesdayShift1FandB = document.getElementById("wednesdayShift1FandB");
    var wednesdayShift1FandBText = wednesdayShift1FandB.options[wednesdayShift1FandB.selectedIndex].value;

    var wednesdayShift1Gas = document.getElementById("wednesdayShift1Gas");
    var wednesdayShift1GasText = wednesdayShift1Gas.options[wednesdayShift1Gas.selectedIndex].value;


    var wednesdayShift2 = document.getElementById("wednesdayShift2");
    var wednesdayShift2Text = wednesdayShift2.options[wednesdayShift2.selectedIndex].value;




    var wednesdayShift2AmenitiesCtr = document.getElementById("wednesdayShift2AmenitiesCtr");
    var wednesdayShift2AmenitiesCtrText = wednesdayShift2FandB.options[wednesdayShift2AmenitiesCtr.selectedIndex].value;

    var wednesdayShift2FandB = document.getElementById("wednesdayShift2FandB");
    var wednesdayShift2FandBText = wednesdayShift2FandB.options[wednesdayShift2FandB.selectedIndex].value;

    var wednesdayShift2Gas = document.getElementById("wednesdayShift2Gas");
    var wednesdayShift2GasText = wednesdayShift2Gas.options[wednesdayShift2Gas.selectedIndex].value;

    var thursdayShift1 = document.getElementById("thursdayShift1");
    var thursdayShift1Text = thursShift1.options[thursdayShift1.selectedIndex].value;




    var thursdayShift1AmenitiesCtr = document.getElementById("thursdayShift1AmenitiesCtr ");
    var thursdayShift1AmenitiesCtrText = thursdayShift1FandB.options[thursdayShift1AmenitiesCtr.selectedIndex].value;

    var thursdayShift1FandB = document.getElementById("thursdayShift1FandB");
    var thursdayShift1FandBText = thursdayShift1FandB.options[thursdayShift1FandB.selectedIndex].value;

    var thursdayShift1Gas = document.getElementById("thursdayShift1Gas");
    var thursdayShift1GasText = thursdayShift1Gas.options[thursdayShift1Gas.selectedIndex].value;

    var thursdayShift2 = document.getElementById("thursdayShift2");
    var thursdayShift2Text = thursShift2.options[thursdayShift2.selectedIndex].value;



    var thursdayShift2AmenitiesCtr = document.getElementById("thursdayShift2AmenitiesCtr ");
    var thursdayShift2AmenitiesCtrText = thursdayShift2FandB.options[thursdayShift2AmenitiesCtr.selectedIndex].value;


    var thursdayShift2FandB = document.getElementById("thursdayShift2FandB");
    var thursdayShift2FandBText = thursdayShift2FandB.options[thursdayShift2FandB.selectedIndex].value;

    var thursdayShift2Gas = document.getElementById("thursdayShift2Gas");
    var thursdayShift2GasText = thursdayShift2Gas.options[thursdayShift2Gas.selectedIndex].value;

    var fridayShift1 = document.getElementById("fridayShift1");
    var fridayShift1Text = fridayShift1.options[fridayShift1.selectedIndex].value;




    var fridayShift1AmenitiesCtr = document.getElementById("fridayShift1AmenitiesCtr ");
    var fridayShift1AmenitiesCtrText = fridayShift1FandB.options[fridayShift1AmenitiesCtr.selectedIndex].value;

    var fridayShift1FandB = document.getElementById("fridayShift1FandB");
    var fridayShift1FandBText = fridayShift1FandB.options[fridayShift1FandB.selectedIndex].value;

    var fridayShift1Gas = document.getElementById("fridayShift1Gas");
    var fridayShift1GasText = fridayShift1Gas.options[fridayShift1Gas.selectedIndex].value;

    var fridayShift2 = document.getElementById("fridayShift2");
    var fridayShift2Text = fridayShift2.options[fridayShift2.selectedIndex].value;



    var fridayShift2AmenitiesCtr = document.getElementById("fridayShift2AmenitiesCtr ");
    var fridayShift2AmenitiesCtrText = fridayShift2FandB.options[fridayShift2AmenitiesCtr.selectedIndex].value;


    var fridayShift2FandB = document.getElementById("fridayShift2FandB");
    var fridayShift2FandBText = fridayShift2FandB.options[fridayShift2FandB.selectedIndex].value;

    var fridayShift2Gas = document.getElementById("fridayShift2Gas");
    var fridayShift2GasText = fridayShift2Gas.options[fridayShift2Gas.selectedIndex].value;



    var saturdayShift1 = document.getElementById("saturdayShift1");
    var saturdayShift1Text = saturdayShift1.options[saturdayShift1.selectedIndex].value;


    var saturdayShift1AmenitiesCtr = document.getElementById("saturdayShift1AmenitiesCtr ");
    var saturdayShift1AmenitiesCtrText = saturdayShift1FandB.options[saturdayShift1AmenitiesCtr.selectedIndex].value;



    var saturdayShift1FandB = document.getElementById("saturdayShift1FandB");
    var saturdayShift1FandBText = saturdayShift1FandB.options[saturdayShift1FandB.selectedIndex].value;


    var saturdayShift1Gas = document.getElementById("saturdayShift1Gas");
    var saturdayShift1GasText = saturdayShift1Gas.options[saturdayShift1Gas.selectedIndex].value;


    var saturdayShift2 = document.getElementById("saturdayShift2");
    var saturdayShift2Text = saturdayShift2.options[saturdayShift2.selectedIndex].value;



    var saturdayShift2AmenitiesCtr = document.getElementById("saturdayShift2AmenitiesCtr ");
    var saturdayShift2AmenitiesCtrText = saturdayShift2FandB.options[saturdayShift2AmenitiesCtr.selectedIndex].value;


    var saturdayShift2FandB = document.getElementById("saturdayShift2FandB");
    var saturdayShift2FandBText = saturdayShift2FandB.options[saturdayShift2FandB.selectedIndex].value;

    var saturdayShift2Gas = document.getElementById("saturdayShift2Gas");
    var saturdayShift2GasText = saturdayShift2Gas.options[saturdayShift2Gas.selectedIndex].value;



    var sundayShift1 = document.getElementById("sundayShift1");
    var sundayShift1Text = sundayShift1.options[sundayShift1.selectedIndex].value;




    var sundayShift1AmenitiesCtr = document.getElementById("sundayShift1AmenitiesCtr ");
    var sundayShift1AmenitiesCtrText = sundayShift1FandB.options[sundayShift1AmenitiesCtr.selectedIndex].value;

    var sundayShift1FandB = document.getElementById("sundayShift1FandB");
    var sundayShift1FandBText = sundayShift1FandB.options[sundayShift1FandB.selectedIndex].value;


    var sundayShift1Gas = document.getElementById("sundayShift1Gas");
    var sundayShift1GasText = sundayShift1Gas.options[sundayShift1Gas.selectedIndex].value;


    var sundayShift2 = document.getElementById("sundayShift2");
    var sundayShift2Text = sundayShift2.options[sundayShift2.selectedIndex].value;



    var sundayShift2AmenitiesCtr = document.getElementById("sundayShift2AmenitiesCtr ");
    var sundayShift2AmenitiesCtrText = sundayShift2FandB.options[sundayShift2AmenitiesCtr.selectedIndex].value;

    var sundayShift2FandB = document.getElementById("sundayShift2FandB");
    var sundayShift2FandBText = sundayShift2FandB.options[sundayShift2FandB.selectedIndex].value;


    var sundayShift2Gas = document.getElementById("sundayShift2Gas");
    var sundayShift2GasText = sundayShift2Gas.options[sundayShift2Gas.selectedIndex].value;

    function getDataset() {
        const row = Array.from(tbody.row);
        const ds = row.reduce((load, currValue) => {
            const [fullName, mondayShift1, mondayShift1AmenitiesCtr, mondayShift1FandB, mondayShift1Gas, mondayShift2, mondayShift2AmenitiesCtr, mondayShift2FandB, mondayShift2Gas, tuesdayShift1, tuesdayShift1AmenitiesCtr, tuesdayShift1FandB, tuesdayShift1Gas, tuesdayShift2, tuesdayShift2AmenitiesCtr, tuesdayShift2FandB, tuesdayShift2Gas, wednesdayShift1, wednesdayShift1AmenitiesCtr, wednesdayShift1FandB, wednesdayShift1Gas, wednesdayShift2, wednesdayShift2AmenitiesCtr, wednesdayShift2FandB, wednesdayShift2Gas, thursdayShift1, thursdayShift1AmenitiesCtr, thursdayShift1FandB, thursdayShift1Gas, thursdayShift2, thursdayShift2AmenitiesCtr, thursdayShift2FandB, thursdayShift2Gas, fridayShift1, fridayShift1AmenitiesCtr, fridayShift1FandB, fridayShift1Gas, fridayShift2, fridayShift2AmenitiesCtr, fridayShift2FandB, fridayShift2Gas, saturdayShift1, saturdayShift1AmenitiesCtr, saturdayShift1FandB, saturdayShift1Gas, saturdayShift2, saturdayShift2AmenitiesCtr, saturdayShift2FandB, saturdayShift2Gas, sundayShift1, sundayShift1AmenitiesCtr, sundayShift1FandB, sundayShift1Gas, sundayShift2, sundayShift2AmenitiesCtr, sundayShift2FandB, sundayShift2Gas] = Array.from(currValue.cells);
            const data = {
                Name: fullName.textContent,
                mondayShift1: mondayShift1Text,
                mondayShift2: mondayShift2Text,
                mondayShift2AmenitiesCtr: mondayShift2AmenitiesCtrText,
                mondayShift2FandB: mondayShift2FandBText,
                mondayShift2Gas: mondayShift2GasText,
                tuesdayShift1: tuesdayShift1Text,
                tuesdayShift1AmenitiesCtr: tuesdayShift1AmenitiesCtrText,
                tuesdayShift1FandB: tuesdayShift1FandBText,
                tuesdayShift1Gas: tuesdayShift1GasText,
                tuesdayShift2: tuesdayShift2Text,
                tuesdayShift2AmenitiesCtr: tuesdayShift2AmenitiesCtrText,
                tuesdayShift2FandB: tuesdayShift2FandBText,
                tuesdayShift2Gas: tuesdayShift2GasText,
                wednesdayShift1: wednesdayShift1Text,
                wednesdayShift1AmenitiesCtr: wednesdayShift1AmenitiesCtrText,
                wednesdayShift1FandB: wednesdayShift1FandBText,
                wednesdayShift1Gas: wednesdayShift1GasText,
                wednesdayShift2: wednesdayShift2Text,
                wednesdayShift2AmenitiesCtr: wednesdayShift2AmenitiesCtrText,
                wednesdayShift2FandB: wednesdayShift2FandBText,
                wednesdayShift2Gas: wednesdayShift2GasText,
                thursdayShift1: thursdayShift1Text,
                thursdayShift1AmenitiesCtr: thursdayShift1AmenitiesCtrText,
                thursdayShift1FandB: thursdayShift1FandBText,
                thursdayShift1Gas: thursdayShift1GasText,
                thursdayShift2AmenitiesCtr: thursdayShift2AmenitiesCtrText,
                thursdayShift2FandB: thursdayShift2FandBText,
                thursdayShift2Gas: thursdayShift2GasText,
                fridayShift1: fridayShift1Text,
                fridayShift1AmenitiesCtr: fridayShift1AmenitiesCtrText,
                fridayShift1FandB: fridayShift1FandBText,
                fridayShift2: fridayShift2Text,
                fridayShift2AmenitiesCtr: fridayShift2AmenitiesCtrText,
                fridayShift2FandB: fridayShift2FandBText,
                fridayShift2Gas: fridayShift2GasText,
                saturdayShift1: saturdayShift1Text,
                saturdayShift1AmenitiesCtr: saturdayShift1AmenitiesCtrText,
                saturdayShift1FandB: saturdayShift1FandBText,
                saturdayShift1Gas: saturdayShift1GasText,
                sundayShift1: sundayShift1Text,
                sundayShift1AmenitiesCtr: sundayShift1AmenitiesCtrText,
                sundayShift1FandB: sundayShift1FandBText,
                sundayShift1Gas: sundayShift1GasText,
                sundayShift2: sundayShift2Text,
                sundayShift2AmenitiesCtr: sundayShift2AmenitiesCtrText,
                sundayShift2FandB: sundayShift2FandBText,
                sundayShift2Gas: sundayShift2GasText,
            };
            load.push(dataSet);
            return load;
        }, []);
        return dataset;
    };
    const dataset = getDataset();
    localStorage.setItem(key, JSON.stringify(dataset));
    document.getElementById("week").value = "";
});