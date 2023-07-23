//step 1: create store
//store is an object that keeps track of 
//events and callbacks associated with those events
/*
+-------+---------------+
| Event | Callback      |
+-------+---------------+
| click | clickCallback |
+-------+---------------+
|       |               |
+-------+---------------+
*/
const store = {};

//step 2: create subscribe method
//it takes two arguments -> eventName, callback
//checks if event exits in store, if exists, just updates its callback
//else inserts 
const subscribe = (eventName, callBack)=>{
    if(!store[eventName]){
        store[eventName] = new Set();
    }
    store[eventName].add(callBack);
} 

//step 3: create public method
const publish = (eventname, payload) =>{
    if(store[eventname]){
        store[eventname].forEach(callback => {
            try{
                callback(payload);
            }
            catch(error){
                console.log(error);
            }
        });
    }
}

//step 4: create unsubscribe method
//used to clean things when destrying page or events
const unsubscribe = (eventname, callback) => {
    if(store[eventname]){
        store[eventname].delete();
    }
}

export default{
    subscribe,
    unsubscribe,
    publish
}