const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies

  // Progression 2: using setTimeout() - use 1000 units for time parameter

//Progression 3: Create a function to creat cookies
  // use setTimeout() -- use 2000 units for time parameter

// Progression 4: calling functions

function getCookies() {
  return cookies.forEach(e => console.log(e))
}

function createCookies(cookie) {
  
  setTimeout(() => {
    cookies.push(cookie)
  },2000)
}

getCookies()
createCookies(newCookie)