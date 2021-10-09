var getTxt = document.getElementById('getTxt');
getTxt.addEventListener('click',function(){
    fetch('details.txt')
    .then((res)=> res.text())
    .then((textData)=>{
        // console.log(textData);
        document.getElementById('getTxtdata').innerHTML = textData;
    })
    .catch((err)=>{
        console.log('data not found...');
    });
});

var getJson = document.getElementById('getJson');
getJson.addEventListener('click', function(){
    fetch('fvrt.json')
    .then((res)=> res.json())
    .then((jsonData)=>{
        var outputs = '<h2>JSON DATA</h2>';
        jsonData.forEach((d)=>{
         outputs += `
        <div class="innerJson">
            <div>ID : ${d.id}</div>
            <div>ID : ${d.fname}</div>
        <div>
        `;
        });
        document.getElementById('getJsondata').innerHTML = outputs;
    })
    .catch((err)=>{
        console.log('JSON data error....');
    });
});

var getJsonplaceholder = document.getElementById('getJsonplaceholder');
getJsonplaceholder.addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((res)=>res.json())
    .then((m)=>{
        var outputs = '<h2>JSON PlaceHolder <h2>';
        m.forEach((jplace)=>{
            outputs += `
                <div class="innerPlaceholder">
                    <ul>
                        <li>${jplace.id}</li>
                        <li>${jplace.name}</li>
                        <li>${jplace.email}</li>
                    </ul>
                </div>
            `;
        });
        document.getElementById('getJsonplaceholderData').innerHTML = outputs;
    })
    .catch((err)=>{
        console.log('Not fetch>>>');
    });
});

var addPosts = document.getElementById('addPosts');
addPosts.addEventListener('click',function(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json'
      },
      body: JSON.stringify({title:title,body:body})
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        // var outputs = '<h2>Add Post Value</h2>';
        // data.forEach((postsValue)=>{
        //     outputs += `
        //         <ul>
        //             <li>Title : ${postsValue.id}</li>
        //             <li>Title : ${postsValue.title}</li>
        //             <li>Title : ${postsValue.body}</li>
        //         </ul>
        //     `;
        // });
        // document.getElementById('formPostvalue').innerHTML= outputs;
    })
});