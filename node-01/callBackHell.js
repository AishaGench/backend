function viewNumber(num, callback){
    console.log(num)
    callback()
}
viewNumber(2,function(result){
    console.log(result);
    viewNumber(4,function(result){
        console.log(result);
         viewNumber(6, function(result){
            console.log(result);
            viewNumber(8, function(result){
                console.log(result);
                viewNumber(10, function(result){
                    console.log(result);
                })
            }) 
         })
    })
})