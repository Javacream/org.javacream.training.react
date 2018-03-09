let destination = {
  subscriptions: [],
  subscribe: function(subscriber){
    subscriptions.push(subscriber)
  }

  publish: function(payload){
    subscriptions.forEach((subscriber) => subscriber(payload))
  }
}


let subscriber = {
  //...
  doSomething: function(payload){
    //...
  }

}

let subscriber2 = {
  //...
  doSomethingElse: function(payload){
    //...
  }

}


let publisher = {}
  execute: function(){
    let data = "Hello"
    destination.publish(data)
  }
}

destination.subscribe(subscriber.doSomething)
destination.subscribe(subscriber2.doSomethingElse)
//...

publisher.execute()
