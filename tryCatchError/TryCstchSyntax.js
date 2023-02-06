try {
  hello; //an error to see if it will be catched
  alert('try'); //to alert us if anything happen
}
catch (error) {
  console.log(error);
  alert('catch'); //to alert us if it catched an error
}
finally {
  alert('finally'); //to tell us that it ended, its optional
}


//  try and catch is a run time error only
