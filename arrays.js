function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element)
  return array
}

function addElementToBeginningOfArray(array, element){
  var x = [element, array]
  return x
}

function destructivelyAddElementToEndArray(array, element){
  array.push(element)
  return array
}

function addElementToEndOfArray(array, element){
  var x =  [array, element]
  return x
}