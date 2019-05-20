let str = prompt("nhap :");
let result = (str === 'Employee') ? 'Hello' :
             (str === 'Director') ? 'Greetings' :
             (str === '') ? 'No login' : '';
alert(result);