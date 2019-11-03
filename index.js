// Write your solution in this file!

let driver = {
  name:'Mustafa'
<<<<<<< HEAD

};

 function updateDriverWithKeyAndValue(driver, key, value){
   const newObj=Object.assign({},driver);
   newObj[key]=value;
   return newObj;
 }
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  driver[key]=value;
  return driver;
}
function deleteFromDriverByKey(driver,key) {
  const newObj = Object.assign({},driver);
  delete newObj[key];
  return newObj;
}
function destructivelyDeleteFromDriverByKey(driver,key) {
  delete driver[key];
  return driver;

}
=======
  
};
const key = "hello";
const value= "eman"
 function updateDriverWithKeyAndValue(driver, key, value){
   newObj=Object.assign({},driver);
   newObj[key]=value;
   return newObj;
 }
>>>>>>> 0acf637230eba796415655182a98a66c477b5e3a
