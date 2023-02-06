function area(width, hight) {
  if (isNaN(width) || isNaN(hight)) {
    throw new Error("only numbers are allowed");
  }
  return width * hight;
}
try {
  area(5, 'hi') // trying to catch an error
}
catch (error) {
  alert('error in area');
  console.log(error);
}
