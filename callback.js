const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};


// Progression 1: create a function to get all the cookies

  // Progression 2: using setTimeout() 

//Progression 3: Create a function to creat cookies

// Progression 5: calling function

function getCookies() {

  setTimeout(() => {
    cookies.forEach(e => console.log(e))
  },1000)
}

function createCookies(cookie,callback) {
  
  setTimeout(() => {
    cookies.push(cookie)
    callback()
  },2000)
}

createCookies(newCookie,getCookies)