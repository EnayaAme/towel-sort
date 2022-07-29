
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0 ) {return []} 
  else { let sorted = matrix.reduce( (array, subArray, index) => {
   if ( index % 2 === 0 ) { array.push(subArray) }
   if ( index % 2 !== 0 ) { array.push(subArray.reverse()) }
   return array;
   }, []);
  
  //let str = sorted.map( subarray => subarray.join('')).join('');
  //let final = Array.from(str).map( num => +num );
  
  return sorted.flat(1);
  }
   
}
