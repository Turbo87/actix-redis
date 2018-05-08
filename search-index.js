var searchIndex = {};
searchIndex["actix_redis"] = {"doc":"Redis integration for Actix framework.","items":[[4,"RespError","actix_redis","",null,null],[13,"Internal","","A non-specific internal error that prevented an operation from completing",0,null],[13,"IO","","An IO error occurred",0,null],[13,"RESP","","A RESP parsing/serialising error occurred",0,null],[13,"Remote","","A remote error",0,null],[13,"Unexpected","","An unexpected error, boxed to allow type-erasure.  In this context \"unexpected\" means \"unexpected because we check ahead of time\", it used to maintain the type signature of chains of futures; but it occurring at runtime should be considered a catastrophic failure.",0,null],[4,"RespValue","","A single RESP value, this owns the data that is read/to-be written to Redis.",null,null],[13,"Nil","","",1,null],[13,"Array","","Zero, one or more other `RespValue`s.",1,null],[13,"BulkString","","A bulk string.  In Redis terminology a string is a byte-array, so this is stored as a vector of `u8`s to allow clients to interpret the bytes as appropriate.",1,null],[13,"Error","","An error from the Redis server",1,null],[13,"Integer","","Redis documentation defines an integer as being a signed 64-bit integer: https://redis.io/topics/protocol#resp-integers",1,null],[13,"SimpleString","","",1,null],[3,"Command","","Command for send data to Redis",null,null],[12,"0","","",2,null],[3,"RedisActor","","Redis comminucation actor",null,null],[3,"RedisSessionBackend","","Use redis as session storage.",null,null],[4,"Error","","General purpose actix redis error",null,null],[13,"Redis","","",3,null],[13,"NotConnected","","Receiving message during reconnecting",3,null],[13,"Disconnected","","Cancel all waters when connection get dropped",3,null],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"start","","Start new `Supervisor` with `RedisActor`.",4,{"inputs":[{"name":"s"}],"output":{"generics":["unsync","redisactor"],"name":"addr"}}],[11,"started","","",4,{"inputs":[{"name":"self"},{"name":"context"}],"output":null}],[11,"restarting","","",4,null],[11,"error","","",4,null],[11,"error","","",4,null],[11,"handle","","",4,null],[11,"handle","","",4,null],[11,"new","","Create new redis session backend",5,null],[11,"ttl","","Set time to live in seconds for session value",5,{"inputs":[{"name":"self"},{"name":"u16"}],"output":{"name":"self"}}],[11,"cookie_name","","Set custom cookie name for session id",5,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"self"}}],[11,"from_request","","",5,null],[11,"cause","","",3,{"inputs":[{"name":"self"}],"output":{"generics":["fail"],"name":"option"}}],[11,"backtrace","","",3,{"inputs":[{"name":"self"}],"output":{"generics":["backtrace"],"name":"option"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",3,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"from_resp_int","","",1,{"inputs":[{"name":"respvalue"}],"output":{"generics":["respvalue","error"],"name":"result"}}],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"from","","",1,null],[11,"from","","",0,{"inputs":[{"name":"canceled"}],"output":{"name":"error"}}],[11,"from","","",1,{"inputs":[{"generics":["u8"],"name":"vec"}],"output":{"name":"respvalue"}}],[11,"from","","",0,{"inputs":[{"name":"senderror"}],"output":{"name":"error"}}],[11,"from","","",1,{"inputs":[{"name":"string"}],"output":{"name":"respvalue"}}],[11,"from","","",1,{"inputs":[{"name":"usize"}],"output":{"name":"respvalue"}}],[11,"from","","",1,{"inputs":[{"name":"string"}],"output":{"name":"respvalue"}}],[11,"from","","",1,{"inputs":[{"name":"str"}],"output":{"name":"respvalue"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"generics":["error"],"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"generics":["error"],"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"respvalue"}}],[11,"description","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",0,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"generics":["error"],"name":"result"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"respvalue"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"self"},{"name":"respvalue"}],"output":{"name":"bool"}}]],"paths":[[4,"RespError"],[4,"RespValue"],[3,"Command"],[4,"Error"],[3,"RedisActor"],[3,"RedisSessionBackend"]]};
initSearch(searchIndex);
