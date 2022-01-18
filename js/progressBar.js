// ========================Progress Bar start here=========================
let innerbar    = document.querySelectorAll('.innerbar');
let arr         = Array.from(innerbar);

arr.map(function(item){
    let count = 0
    function progress(){
        count++
        item.style.width = `${count}%`

        if(count == item.dataset.percent){
            clearInterval(stop)
        }
    }
let stop = setInterval(function(){
    progress()
}, 8000/item.dataset.percent)
})
// ========================Progress Bar end here===========================

// =====================Number counting Start here=========================

let numberText  = document.querySelectorAll('.new')
let arr2        = Array.from(numberText)

arr2.map(function(numbering){
    // numbering.innerHTML = `40%`
    let count2 = 0
    function countingNumber(){
        count2++
        numbering.innerHTML = `${count2}%`
        if(count2 == numbering.dataset.noor){
            clearInterval(stop2)
        }
        
    }
let stop2 = setInterval(function(){
    countingNumber()
}, 90)
})





// let numberText  = document.querySelectorAll('.new');
// let arr2        = Array.from(numberText)

// arr2.map(function(item2){
//     count2 = 0
//     function countingNumber(){
//         count2++
//         item2.innerHTML = `${count2}%`
//         if(count2 == item2.dataset.counter){
//            clearInterval(stop2)
//         }
//     }
// let stop2 = setInterval(function(){
//     countingNumber()
// },170)
// })

// =====================Number counting end here=========================

