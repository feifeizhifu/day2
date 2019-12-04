const Mock = require("mockjs")
Mock.mock("/api/data","get",function(){
    let data =Mock.mock({
        "list|12":[
            {
                pic:"@image(60x60,@color)",
                title:"@ctitle",
                time:"@time"
            }
        ]
    })
    return data.list
})