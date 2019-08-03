function createHeader(headerNames){
  let result = ''
  for(let header of headerNames){
    result += '<th>'+ header +'</th>'
  }
  return result;
}

function createTable(headerNames, data, includeNameSubjectQues, includeMobile){

  let headerRow = createHeader(headerNames)
  let tableHeader = `<table>
                       <tr>`
                       + headerRow +
                       `</tr>`
  let tableFooter = `</table>`
  let rowOpener = `<tr>`
  let rowcloser = `</tr>`
  let rowDataOpener =`<td>`
  let rowDataCloser = `</td>`
  let tableContent = tableHeader;

  for(let i = 0; i< data.length; i++){
    let milisec = data[i].time.seconds *1000
    let dateString = new Date(milisec)
    console.log("data");
    let page = ''
    if(data[i].page){
      page = data[i].page
    }else if(data[i].Page){
      page = data[i].Page
    }
    let sr = i+1
    let row =`<tr>
                <td>`+ (i+1) + `</td>
                <td>`+ data[i].browserVersion + `</td>
                <td>`+ page + `</td>
                <td>`+ data[i].platform + `</td>
                <td>`+ dateString +`</td>`

    if(includeNameSubjectQues){
      row = row + `<td>`+ data[i].name +`</td>
          <td>`+ data[i].question +` </td>
          <td>`+ data[i].subject + `</td>`
    }

    if(includeMobile){
      let mob = ''
      if(data[i].mobile){
        mob = data[i].mobile
      }else if(data[i].mobile1){
        mob = data[i].mobile1
      }else {
        mob = 'Mobile not found'
      }
      row = row + `<td>`+ mob + `</td>`
    }

    row = row + `</tr>`
    tableContent = tableContent + row
  }

   document.getElementById('dynamicable').innerHTML = tableContent
   document.getElementById("totalTable").innerHTML = "Found " + data.length + " elements in the table.";
}


let createCommonTable = (collectionName)=>{
  fb.selectAll(collectionName).then((data)=>{
    let headerNames = ['Sr no.', 'Browser Version', 'Page', 'Plateform', 'Time']
    createTable(headerNames, data, false, false)
  })
}

function rcbTable(data) {
  fb.selectAll('rcb').then((data)=>{
    console.log('rcb', data);
    let headerNames = ['Sr no.', 'Browser Version', 'Page', 'Plateform', 'Time', 'Name', 'Question', 'Subject', 'Mobile']
    createTable(headerNames, data, true, true)
 })
}
function subsTotal(data) {
  fb.selectAll('rcb').then((data)=>{
    console.log('rcb', data);
    let headerNames = ['Sr no.', 'Browser Version', 'Page', 'Plateform', 'Time', 'Mobile']
    createTable(headerNames, data, false, true)
 })
}
