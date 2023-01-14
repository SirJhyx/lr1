<?php
    //Objects as Variables

    $buildingObj = (object)[
        'name' => 'The W Fifth Avenue',
        'floors' => 18,
        'address' => (object)[
            'barangay' => '5th Avenue',
            'city' => 'Bonifacio Global City',
            'country' => 'Philippines'
        ]
    ];

    //Objects from Classes
    //Building is the parent class
    class Building {
        public $name;
        public $floors;
        public $address;

        //Constructor is used during the creation of an object.

        public function __construct($name, $floors, $address){
            $this->name = $name;
            $this->floors = $floors;
            $this->address = $address;
        }

        public function printName() {
            return "The name of the building is $this->name";
        }
    }

    //how to create a child class?
    //extends - ensures that the child class can inherit the properties of a parent class
    //this practice is also called as Inheritance
    class Condominium extends Building {
        public function printName() {
            return "The name of the condominium is $this->name";
        }
    }

    $building = new Building('The W Fifth Avenue', 18, '5th Avenue, Bonifacio Global City, Philippines');

    $condominium = new Condominium('Bamboo Condominium', 7, 'Makati Avenue, Makati City, Philippines');

    //Exercise

    class Person {
        public $firstName;
        public $middleName;
        public $lastName;

        public function __construct($firstName, $middleName, $lastName) {
            $this->firstName = $firstName;
            $this->middleName = $middleName;
            $this->lastName = $lastName;
        }
    
        public function printName() {
            return "Your full name is $this->firstName $this->lastName.";
        }

    }

    class Developer extends Person {

        public function printName() {
            return "Your name is $this->firstName $this->middleName $this->lastName and you are a developer.";
        }
        
    }
    
    class Engineer extends Person {
        
        public function printName() {
            return "You are an engineer named $this->firstName $this->middleName $this->lastName.";
        }
    
    }

    $person = new Person('Senku', '', 'Ishigami');
    $developer = new Developer('John', 'Finch', 'Smith');
    $engineer = new Engineer('Harold', 'Myers', 'Reese');
?>