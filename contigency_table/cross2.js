// Fetch the JSON data
fetch('table2.json')
    .then(response => response.json())
    .then(data => {
        // Create a table
        var table = document.getElementById('data-table');
        var categories = ['Stable Presence', 'Loss', 'Gain', 'Stable Absence']
        // Loop through rows
        for (let i = 0; i <= 3; i++) {
            const row = document.createElement('tr');
            const header_left = document.createElement('th');
            header_left.className = 'header_left'
            header_left.textContent = categories[i];
            row.appendChild(header_left)
            for (let j = 0; j <= 3; j++) {

                key = categories[i] + '_' + categories[j]
                const values = data[key];

                const cell = document.createElement('td');
                cell.className = "entry" + i + "_" + j;
                const cellContent = creatediv(values);
                cell.appendChild(cellContent);

               
                row.appendChild(cell);
            }
            key2 = categories[i] + '_' + 'Commission'
            values2 = data[key2];
            const cell2 = document.createElement('td');
            const cellContent2 = creatediv(values2);
            cell2.appendChild(cellContent2);
            row.appendChild(cell2)
            table.appendChild(row);
        }
        const row2 = document.createElement('tr');
        const header_left2 = document.createElement('th');
            header_left2.className = 'header_left'
            header_left2.textContent = 'Omission';
            row2.appendChild(header_left2)
        // Loop through columns
        for (let j = 0; j <= 3; j++) {
            key3 = categories[j] + '_' + 'Omission'
            values3 = data[key3];
            const cell3 = document.createElement('td');
            const cellContent3 = creatediv(values3);
            cell3.appendChild(cellContent3);
            row2.appendChild(cell3)
        }
        table.appendChild(row2);

    })
    .catch(error => console.error('Error fetching JSON:', error));


function creatediv(values) {
    const cellContent = document.createElement('div');
    cellContent.className = 'cell-content';
    // console.log(values)
    for (const value of values) {
        const part = document.createElement('div');
        part.className = 'part';
        part.textContent = value;
        cellContent.appendChild(part);
    }
    return cellContent
}