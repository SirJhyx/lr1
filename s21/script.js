console.log("connected");

//Data Structure - Stacks

function getChecked(others){
    //select all checkboxes of group languages using querySelectorAll()

    let checkboxes = document.querySelectorAll ('input[name="language"]');

    let values = [];

    //looping through checkboxes
    //if checked property is true then push

    for (let i = 0; i < checkboxes.length; i++)
    {
        if (checkboxes[i].checked == true){
            values.push(checkboxes[i].value);
        }
    }

    alert(`${values} has been added to the learning list`);
}

//Data Structure - Queue
class Queue {
    constructor(){
        this.items = [];
    }

    //add elements to the queue
    enqueue(element){
        return this.items.push(element);
    }

    //remove elements from the queue
    dequeue(){
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }

    //view the last element
    peek(){
        return this.items[this.items.length - 1];
    }

    //check if the queue is empty
    isEmpty(){
        return this.items.length == 0;
    }

    //the size of the queue
    size(){
        return this.items.length;
    }

    //empty the queue
    clear(){
        return this.items = [];
    }
}

//initialization
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
console.log(queue.items); //all items are added in the array

queue.dequeue();
console.log(queue.items); //using shift method, we delete the first element inside the array

console.log(queue.peek()); //it displays the last element

console.log(queue.isEmpty()); //false - returns a boolean

console.log(queue.size()); //it displays how many elements are there in an array.

queue.clear();
console.log(queue.items); //it returns an empty array due to the methods that we declared in the class.

//Data Structure - Linked List
class Node {
    //constructor
    constructor(element){
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    //add an element at the end of the list

    addElement(elements){

        //create a new node
        let nodes = new Node(elements);

        //to store the current node
        let current;

        //if the list is empty add the element and make it as a head
        if(this.head == null){
            this.head = nodes;
        }
        else {
            current = this.head;

            //iterate to the end of the list
            while (current.next){
                current = current.next;
            }

            //add node
            current.next = nodes;
        }
        this.size++;
    }

    //insert an element at the position index of the list
    insertAt(element,index) {

        if(index < 0 || index > this.size) {
            return console.log("Please enter a valid index");
        }
        else {
            //create a new node
            let node = new Node(element);

            let curr,prev;

            curr = this.head;

            //add the elements to the first index
            if(index == 0){
                node.next = this.head;
                this.head = node;
            }
            else {
                curr = this.head;
                let it = 0; //means iterate

                //iterate over the first to find the position to insert.
                while(it < index){
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                //adding an element 
                node.next = curr;
                prev.next = node;
            }

        this.size++

        }
        
    }

    //remove an element from the specified location.

    removeFrom(index){
        if(index < 0 || index >= this.size){
            return console.log("Please enter a valid index");
        } else {
            let curr, prev, it = 0;

            curr = this.head;
            prev = curr;

            //deleting first element
            if (index === 0)
            {
                this.head = curr.next;
            }
            else 
            {
                //iterate over the list to the position to remove an element
                while (it < index){
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                //remove the element
                prev.next = curr.next;

            }
            this.size--;

            //return the renove element
            return curr.element;
        }
    }

    //remove a given element from the list
    removeElement (element){
        let current = this.head;
        let prev = null;

        //loop ovr the list
        while (current != null) {
            //compare element with the current element
            //if the element is found then we need to remove and returned as true

            if(current.element === element){
                if (prev == null){
                    this.head = current.next;
                }
                else {
                    prev.next = current.next;
                }
            }
            this.size--;
            return current.element;

        }
        return -1;
    }

    //find an index in the element
    indexOf(e){
        let count = 0;
        let current = this.head;

        //loop over the list

        while (current != null){
            //compare each element to the list within the given elements

            if (current.e === e){
                return count;
            }
            count++;
            current = current.next;
        }

        //if the index is not found
        return -1;
    }

    //checking if the list is empty
    isEmpty(){
        return this.size == 0;
    }

    //give the size of the list
    size_of_list(){
        console.log(this.size);
    }

    //printing the list of items
    printList(){
        let curr = this.head;
        let str = "";
        while (curr){
            str += curr.element + "";
            curr = curr.next;
        }
        console.log(str);
    }
}

//creating an object for the linkedList class
let linkedList = new LinkedList();

//check if the function isEmpty on an empty list.
console.log(linkedList.isEmpty());
//it returns true

//add elements to the list
linkedList.addElement(10);

linkedList.printList();

console.log(linkedList.size_of_list());

//add more elements to the list
linkedList.addElement(20);
linkedList.addElement(30);
linkedList.addElement(40);
linkedList.addElement(50);

//return the numbers provided
linkedList.printList();

console.log("is element removed ?" +linkedList.removeElement(10));

linkedList.printList(); //removes 10

console.log(linkedList.indexOf(20));

linkedList.insertAt(60, 4);
linkedList.printList();

console.log("Is my list empty? ",linkedList.isEmpty()); //false - boolean

