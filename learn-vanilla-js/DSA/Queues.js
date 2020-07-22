/*Queues*/
/*first in first out*/

function Queue () {
   collection = [];
   this.print = function() {
       console.log(collection);
   }
   this.enqueue = function(element){
       collection.push(element);
   }
   this.dequeue = function(element){
       return collection.shift();
   }
   this.front = function() {
        return collection[0];
   }
   this.size = function() {
       return collection.length;
   }
   this.isEmpty = function() {
       return (collection.length === 0);
   }
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
q.front();
q.print();

function PriorityQueue() {

   var collection = [];
   this.printCollection = function() {
      (console.log(collection));
   };
   this.enqueue = function(element) {
      if(this.isEmpty()) {
        collection.push(element);
      } else {
        var added = false;
        for(var i=0; i<collection.length; i++) {
           if (element[i] < collection[i][1]) {
             // checking priorities
             collection.splice(i, 0, element);
             added = true;
             break;
           }
         }
       if (!added) {
         collection.push(element);
       }
      }
    }
    this.dequeue = function() {
      var value = collection.shift();
      return value[0];
    }
    this.front = function() {
      return collection[0];
    }
    this.size = function() {
      return collection.length;
    }
    this.isEmpty = function() {
      return (collection.length === 0);
    }
}

var pq = new PriorityQueue();
pq.enqueue(['Code Nuggets', 2]); // [item, priority]
pq.enqueue(['JavaScript', 3]);
pq.enqueue(['Python', 1]);
pq.enqueue(['TypeScript', 2]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();
