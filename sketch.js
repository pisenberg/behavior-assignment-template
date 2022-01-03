let table;

function preload() {
  table = loadTable("https://docs.google.com/spreadsheets/d/1clE48-bRekVDARDQnE7bBVvefsgibBqB1fNoSk4nHVM/export?format=csv&gid=1008687551",'csv', 'header');

}

function setup() {
  // put setup code here
  createCanvas(400, 400); //feel free to change to size
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
}


function drawBarChart(barData){
   //I assume here that you are only going to visualize one array worth of data
   //you need to figure out how to add labels to the function and then draw them
   for (let r = 0; r < barData.length; r++){
       print("Draw a bar for value: " + barData[r]);
   }
}


function draw() {
  noLoop();
  // put drawing code here

  //use the getRow() function if you want to get a row of data: https://p5js.org/reference/#/p5.Table/getRow
  myData = table.getColumn('Class'); //replace "Date" with whichever column you're interested in - if you are interested in rows
  drawBarChart(myData);
}
