function addTableOfSubscribePeople(data){
    let tableHeader = `<table>
                     <tr>
                       <th>Sr.No.</th>
                       <th>Mobile</th>
                       <th>Platform</th>
                       <th>Page</th>
                        <th>Time</th>
                     </tr>`
    let tableFooter = `</table>`
    let tableContent = tableHeader;
    let row = data.length
    for(let i=0; i<row; i++){
    let rowOpener = `<tr>`
    let rowcloser = `</tr>`
    let rowDataOpener =`<td>`
    let rowDataCloser = `</td>`
    let mob = ''
    if(data[i].mobile){
      mob = data[i].mobile
    }
     else if(data[i].mobile1){
      mob = data[i].mobile1
    }else {
      mob = 'Mobile not found'
    }
    let milisec = data[i].time.seconds *1000
    let dateString = new Date(milisec)
    //let sr = i+1
    let row =`<tr>
                <td>`+ (i+1) + `</td>
                <td>`+ mob + `</td>
                <td>`+ data[i].platform +`</td>
                <td>`+ data[i].page +`</td>
                <td>`+ dateString +`</td>
              </tr>`
        tableContent = tableContent + row
    }
     tableContent = tableContent + tableFooter
     document.getElementById("dynamictable").innerHTML = tableContent;
}

fb.selectAll('subs').then((data)=>{
  addTableOfSubscribePeople(data);
  //tabletotal(data);
})

function tabletotal(data) {
  //console.log('anp');
  if(data && data.length>0){
    let x = data.length;
    document.getElementById("totalTable").innerHTML = "Found " + x + " elements in the table.";
  }else {
    fb.selectAll('subs').then((data)=>{
      let x = data.length;
      document.getElementById("totalTable").innerHTML = "Found " + x + " elements in the table.";
    })
  }
  document.getElementById("dynamictable").style.fontSize = "25px";
  document.getElementById("dynamictable").style.color = "red";
  document.getElementById("dynamictable").style.backgroundColor = "lightGray";
  document.getElementById("dynamictable").style.display = "block";
  document.getElementById("rcbdynamictable").style.display = "none";
  document.getElementById("appinsdynamictable").style.display = "none";
  document.getElementById("applaudynamictable").style.display = "none";
  document.getElementById("bipdynamictable").style.display = "none";
  document.getElementById("bipTable").style.display = "none"
  document.getElementById("alTable").style.display = "none";
  document.getElementById("aiTable").style.display = "none"
  document.getElementById("rcbTable").style.display = "none";
  document.getElementById("totalTable").style.display = "block";
}


function addTableOfrcb(data){
    let tableHeader = `<table>
                     <tr>
                       <th>Sr.No.</th>
                       <th>Mobile</th>
                       <th>Name</th>
                       <th>Page</th>
                       <th>Platform</th>
                       <th>Question</th>
                       <th>subject</th>
                       <th>Time</th>
                     </tr>`
    let tableFooter = `</table>`
    let tableContent = tableHeader;
    let row = data.length
    for(let i=0; i<row; i++){
    let rowOpener = `<tr>`
    let rowcloser = `</tr>`
    let rowDataOpener =`<td>`
    let rowDataCloser = `</td>`
    let mob = ''
    if(data[i].mobile){
      mob = data[i].mobile
    }
     else if(data[i].mobile1){
      mob = data[i].mobile1
    }else {
      mob = 'Mobile not found'
    }
    let milisec = data[i].time.seconds *1000
    let dateString = new Date(milisec)
    let sr = i+1
    let row =`<tr>
                <td>`+ (i+1) + `</td>
                <td>`+ mob + `</td>
                <td>`+ data[i].name +`</td>
                <td>`+ data[i].Page + `</td>
                <td>`+ data[i].platform + `</td>
                <td>`+ data[i].question +` </td>
                <td>`+ data[i].subject + `</td>
                <td>`+ dateString +`</td>
              </tr>`
        tableContent = tableContent + row
    }
     tableContent = tableContent + tableFooter
     document.getElementById("rcbdynamictable").innerHTML = tableContent;
}

fb.selectAll('rcb').then((data)=>{
  addTableOfrcb(data)
})

function rcbTable(data) {
  // console.log('anp');
  if(data && data.length>0){
    let x = data.length;
    document.getElementById("rcbTable").innerHTML = "Found " + x + " elements in the table.";
  }else {
    fb.selectAll('rcb').then((data)=>{
      let x = data.length;
      document.getElementById("rcbTable").innerHTML = "Found " + x + " elements in the table.";
    })
  }

  document.getElementById("rcbdynamictable").style.fontSize = "25px";
  document.getElementById("rcbdynamictable").style.color = "red";
  document.getElementById("rcbdynamictable").style.backgroundColor = "Gray";
  document.getElementById("rcbdynamictable").style.display = "block";
  document.getElementById("dynamictable").style.display = "none";
  document.getElementById("appinsdynamictable").style.display = "none";
  document.getElementById("applaudynamictable").style.display = "none";
  document.getElementById("bipdynamictable").style.display = "none";
  document.getElementById("bipTable").style.display = "none"
  document.getElementById("alTable").style.display = "none";
  document.getElementById("aiTable").style.display = "none"
  document.getElementById("totalTable").style.display = "none";
  document.getElementById("rcbTable").style.display = "block";
}



function addTableOfappinstalled(data){
    let tableHeader = `<table>
                         <tr>
                           <th>Sr.No.</t>
                           <th>browserVersion</th>
                           <th>Page</th>
                           <th>Platform</t>
                           <th>Time</th>
                         </tr>`
    let tableFooter = `</table>`
    let tableContent = tableHeader;
    let row = data.length
    for(let i=0; i<row; i++){
    let rowOpener = `<tr>`
    let rowcloser = `</tr>`
    let rowDataOpener =`<td>`
    let rowDataCloser = `</td>`
    let milisec = data[i].time.seconds *1000
    let dateString = new Date(milisec)
    let sr = i+1
    let row =`<tr>
                <td>`+ (i+1) + `</td>
                <td>`+ data[i].browserVersion + `</td>
                <td>`+ data[i].Page + `</td>
                <td>`+ data[i].platform + `</td>
                <td>`+ dateString +`</td>
              </tr>`
        tableContent = tableContent + row
    }
     tableContent = tableContent + tableFooter
     document.getElementById("appinsdynamictable").innerHTML = tableContent;
}

fb.selectAll('appinstalled').then((data)=>{
  addTableOfappinstalled(data)
})

function aiTable(data) {
  // console.log('anp');
  if(data && data.length>0){
    let x = data.length;
    document.getElementById("aiTable").innerHTML = "Found " + x + " elements in the table.";
  }else {
    fb.selectAll('appinstalled').then((data)=>{
      let x = data.length;
      document.getElementById("aiTable").innerHTML = "Found " + x + " elements in the table.";
    })
  }

  document.getElementById("appinsdynamictable").style.fontSize = "25px";
  document.getElementById("appinsdynamictable").style.color = "red";
  document.getElementById("appinsdynamictable").style.backgroundColor = "lightGray";
  document.getElementById("dynamictable").style.display = "none";
  document.getElementById("rcbdynamictable").style.display = "none";
  document.getElementById("appinsdynamictable").style.display = "block";
  document.getElementById("applaudynamictable").style.display = "none";
  document.getElementById("bipdynamictable").style.display = "none";
  document.getElementById("bipTable").style.display = "none"
  document.getElementById("alTable").style.display = "none";
  document.getElementById("aiTable").style.display = "block"
  document.getElementById("rcbTable").style.display = "none";
  document.getElementById("totalTable").style.display = "none";
}



function addTableOfapplaunched(data){
      let tableHeader = `<table>
                           <tr>
                             <th>Sr.No.</t>
                             <th>browserVersion</th>
                             <th>Page</th>
                             <th>Platform</t>
                             <th>Time</th>
                           </tr>`
      let tableFooter = `</table>`
      let tableContent = tableHeader;
      let row = data.length
      let rowOpener = `<tr>`
      let rowcloser = `</tr>`
      let rowDataOpener =`<td>`
      let rowDataCloser = `</td>`

      for(let i=0; i<row; i++){
      let milisec = data[i].time.seconds *1000
      let dateString = new Date(milisec)
      let sr = i+1
      let row =`<tr>
                  <td>`+ (i+1) + `</td>
                  <td>`+ data[i].browserVersion + `</td>
                  <td>`+ data[i].Page + `</td>
                  <td>`+ data[i].platform + `</td>
                  <td>`+ dateString +`</td>
                </tr>`
          tableContent = tableContent + row
      }
       tableContent = tableContent + tableFooter
       document.getElementById("applaudynamictable").innerHTML = tableContent;
  }

  fb.selectAll('applaunched').then((data)=>{
    addTableOfapplaunched(data)
  })

  function alTable(data) {
    // console.log('anp');
    if(data && data.length>0){
      let x = data.length;
      document.getElementById("alTable").innerHTML = "Found " + x + " elements in the table.";
    }else {
      fb.selectAll('applaunched').then((data)=>{
        let x = data.length;
        document.getElementById("alTable").innerHTML = "Found " + x + " elements in the table.";
      })
    }

    document.getElementById("applaudynamictable").style.fontSize = "25px";
    document.getElementById("applaudynamictable").style.color = "red";
    document.getElementById("applaudynamictable").style.backgroundColor = "Gray";
    document.getElementById("dynamictable").style.display = "none";
    document.getElementById("rcbdynamictable").style.display = "none";
    document.getElementById("appinsdynamictable").style.display = "none";
    document.getElementById("applaudynamictable").style.display = "block";
    document.getElementById("bipdynamictable").style.display = "none";
    document.getElementById("bipTable").style.display = "none"
    document.getElementById("alTable").style.display = "block";
    document.getElementById("aiTable").style.display = "none"
    document.getElementById("rcbTable").style.display = "none";
    document.getElementById("totalTable").style.display = "none";
  }



  function addTableOfbeforeinstallprompt(data){
      let tableHeader = `<table>
                           <tr>
                             <th>Sr.No.</t>
                             <th>Page</th>
                             <th>Platform</t>
                             <th>Time</th>
                           </tr>`
      let tableFooter = `</table>`
      let tableContent = tableHeader;
      let row = data.length
      for(let i=0; i<row; i++){
      let rowOpener = `<tr>`
      let rowcloser = `</tr>`
      let rowDataOpener =`<td>`
      let rowDataCloser = `</td>`
      let milisec = data[i].time.seconds *1000
      let dateString = new Date(milisec)
      let sr = i+1
      let row =`<tr>
                  <td>`+ (i+1) + `</td>
                  <td>`+ data[i].Page + `</td>
                  <td>`+ data[i].platform + `</td>
                  <td>`+ dateString +`</td>
                </tr>`
          tableContent = tableContent + row
      }
       tableContent = tableContent + tableFooter
       document.getElementById("bipdynamictable").innerHTML = tableContent;
  }

  fb.selectAll('beforeinstallprompt').then((data)=>{
    addTableOfbeforeinstallprompt(data)
  })

  function bipTable(data) {
    if(data && data.length>0){
      let x = data.length;
      document.getElementById("bipTable").innerHTML = "Found " + x + " elements in the table.";
    }else {
      fb.selectAll('beforeinstallprompt').then((data)=>{
        let x = data.length;
        document.getElementById("bipTable").innerHTML = "Found " + x + " elements in the table.";
      })
    }

    document.getElementById("bipdynamictable").style.fontSize = "25px";
    document.getElementById("bipdynamictable").style.color = "red";
    document.getElementById("bipdynamictable").style.backgroundColor = "lightGray";
    document.getElementById("dynamictable").style.display = "none";
    document.getElementById("rcbdynamictable").style.display = "none";
    document.getElementById("appinsdynamictable").style.display = "none";
    document.getElementById("applaudynamictable").style.display = "none";
    document.getElementById("bipdynamictable").style.display = "block";
    document.getElementById("bipTable").style.display = "block"
    document.getElementById("alTable").style.display = "none";
    document.getElementById("aiTable").style.display = "none"
    document.getElementById("rcbTable").style.display = "none";
    document.getElementById("totalTable").style.display = "none";

    function addDisplayNone(){
      let elements = ['dynamictable', 'rcbdynamictable', 'appinsdynamictable','applaudynamictable',
      'alTable', 'aiTable','rcbTable', 'rcbTable', 'totalTable' ]
      let blockElements = ['bipdynamictable', 'bipTable']

      for(let i = 0; i<elements.length; i++){
        document.getElementById(elements[i]).style.display = 'none'
      }
      for(let i = 0; i<blockElements.length; i++){
        document.getElementById(elements[i]).style.display = 'block'
      }
    }
  }
