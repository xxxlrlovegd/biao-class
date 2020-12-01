export const router={
    "/":"home",
    "/a":"This is A",
    "/obj":{"name":"test",age:18},
    "/arr":[1,2,3],
    "/add":(req,res)=>parseInt(req.$query.a)+parseInt(req.$query.b)+"",
}