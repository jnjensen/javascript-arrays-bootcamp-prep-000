function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element)
  return array
}

function addElementToBeginningOfArray(array, element){
  x = [element, array]
  return x
}