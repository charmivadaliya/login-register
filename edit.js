 
function onEditPress() {
    var urlString = window.location.href;
    const url = new URL(urlString);
    const id = url.searchParams.get('id');
    console.log(localStorage.getItem('users'));
    if (localStorage.getItem('users')) {
      JSON.parse(localStorage.getItem('users')).forEach((data) => {
        if (data.id == id) {
          document.getElementById('name').value = data.name;
          document.getElementById('email').value = data.email;
          document.getElementById('number').value = data.number;
        }
      });
    }
  }
  $(document).ready(function() {
    onEditPress();
});

  function edit() {
    var urlString = window.location.href;
    const url = new URL(urlString);
    const id = url.searchParams.get('id');
    //   console.log();
    let userData = JSON.parse(localStorage.getItem('users'));
    userData = userData.map((data) => {
      if (data.id == id) {
        const obj = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          number: document.getElementById('number').value,
        };
        Object.assign(data, obj);
      }
      return data;
    });
    console.log(userData);
    setData(userData);
    //localStorage.setItem('users', JSON.stringify(userData));
    window.location = 'home.html';
  }

  
//   function deleteData(){
//     var urlString = window.location.href;
//     const url = new URL(urlString);
//     const id = url.searchParams.get('id');
//     let userData = JSON.parse(localStorage.getItem('users'));
//     if (data.id == id) {
//         localStorage.removeItem("id");
//     }
//     localStorage.setItem("users");

//   }