let arr = ['Daniel', 'Rafael' , 'Manoel']
function positions (arr){

    if (arr.indexOf('Daniel') == 0 ){
       
        return console.log(`Daniel é o vencedor! e este é o podio ${arr}`)
    
    } else if (arr.indexOf('Daniel') == 1){
        let primeiro = arr[0]
        arr[0] = arr[1]
        arr[1] =  primeiro
        
        return console.log(`Este é o podio ${arr}`)

    } else if (arr.indexOf('Daniel') == 2){
        let segundo = arr[1]
        arr[1] = arr[2]
        arr[2] =  segundo
        
        return console.log(`Este é o podio ${arr}`)
    
    }
}