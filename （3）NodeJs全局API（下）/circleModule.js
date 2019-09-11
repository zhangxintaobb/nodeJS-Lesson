

function circleFun(r){
    var area=function(r){
        return r*r*Math.PI;
    }
    var circumference=function(r){
        return r*2*Math.PI
    } 
    return{
        circumference:circumference(r),
        area:area(r)
    }

}

module.exports={
    circleFun:circleFun
}