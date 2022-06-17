const bands = ["Dire Straits", "Kansas", "Steely Dan"];



// // Exercise 2 - Solution 1

// const addMultTable = (row, col) => {
//   const myBody = document.querySelector("body");
//     const tbl = document.createElement("table");
//       tbl.setAttribute("class", "table");
//     myBody.appendChild(tbl);

//   for (let i = 0; i < row; i++) {
//     const mycurrent_row = document.createElement("tr");

//     for (let i = 0; i < col; i++) {
//       const mycurrent_col = document.createElement("td");
//       console.log("td: ", mycurrent_col);
//         mycurrent_row.appendChild(mycurrent_col);
//         tbl.appendChild(mycurrent_row)

//     }
//   }
// };

// addMultTable(4, 2);

// const addMultTable = (row, col) => {
//   const table = document.querySelector("table");
//   let rows = "";
//   let colms = "";

//     for (let i = 0; i < col.length; i++) {
//       colms += `

// 				<th>Header 1</th>
// 		`;
//     }

//   for (let i = 0; i < row.length; i++) {
//       rows += `
//      <tr>
//            <td>&nbsp;</td>

//         </tr>
//       `;
//   }

//   console.log("rows: ", rows);

//   table.insertAdjacentHTML(
//     "beforeend",
//     `
//        <tr>

//             ${colms}
//         </tr>

//             ${rows}

//     `
//   );
// };
// const cols = [1, 1, 1, 1, ];
// const rows = [1, 1, 1,1,];
// addMultTable(rows, cols);

// function list(arr) {
//   console.log("arr: ", arr);
//   const body = document.querySelector("body");
//   const ul = document.createElement("ul");
//   body.appendChild(ul);

//   for (let i = 0; i < arr.length; i++) {
//     const li = document.createElement("li");
//     ul.appendChild(li);
//     console.log("rr[i]: ", arr[i]);
//     li.innerHTML += arr[i];
//   }
// }
// console.log(list(bands));

// // Exercise 1 - Solution 2

// const addBands = (arr) => {
//   let list = document.createElement("li");
//   list.textContent = arr;
//   console.log("list: ", list);

//   return list;
// };
// const body = document.querySelector("body");

//   let uolist = document.createElement("ul");
//   body.appendChild(uolist)

// uolist.appendChild(addBands("Home"));
// uolist.appendChild(addBands("jdsfjk"));
// addBands('bands');

// // Exercise 1 - Solution 1
// const addBands = (arr) => {
//     const ulList = document.querySelector("#band-list");
//     // const liste = document.querySelector(li)
//     console.log("li: ", li);

//   for (let i = 0; i < arr.length; i++) {
// // ulList.innerHTML += `<li>${arr[i]}</li>`;
//   }
// };
// addBands(bands);

// // Exercise 1 - Solution 1
// const addBands = (arr) => {
//     const ulList = document.querySelector("#band-list");

//     for (let i = 0; i < arr.length; i++) {

//         ulList.insertAdjacentHTML("beforeend", `<li class="position">${arr[i]}</li>`);

//     }
// };
// addBands(bands);
