var currentDocument = document.getElementById('root')

let createdDiv = document.createElement('div')

createdDiv.append('text')
console.log(" ~ createdDiv:", createdDiv)

currentDocument.append(createdDiv)

document.addEventListener('load', function(){

})

createdDiv.addEventListener('click', function(){
    console.log('div is clicked')
})

createdDiv.addEventListener('copy', function(){
    alert('Копирование запрещено!')
})