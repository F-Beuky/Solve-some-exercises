/////////////////////////////////////////////////////////////
//تابعی که عددی را دریافت کرده و زوج یا فرد بودن آن را تشخیص می دهد


var oddEven=function(num){
    if(num%2===0){
        return "زوج"
    } else{
        return "فرد"
    }
}

var n=+prompt("یک عدد را وارد کنید:",0)
alert(oddEven(n))

