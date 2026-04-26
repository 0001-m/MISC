

let glossary = [
    { tag: "<b>", desc: "Bold text" },
    { tag: "<i>", desc: "Italic text" },
    { tag: "<p>", desc: "Paragraph" },
    { tag: "<a>", desc: "Link" }
];

let tableBody = document.getElementById("tableBody");

//display all initially
display(glossary);

function display(data) {
    tableBody.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        tableBody.innerHTML += `
            <tr> 
                <td> ${data[i].tag}</td>
                <td> ${data[i].desc}</td>
            </tr>
        `;
    }
}

function searchTag() {
    let input = document.getElementById("search").value.toLowerCase();

    let filtered = [];

    for (let i = 0; i < glossary.length; i++) {
        if (
            glossary[i].tag.toLocaleLowerCase().includes(input)
            || glossary[i].desc.toLocaleLowerCase().includes(input)
        ) {
            filtered.push(glossary[i]);
        }
        
    }
    display(filtered);
}
