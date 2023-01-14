<?php 
    class Building {
        protected $name;
        protected $floors;
        protected $address;   

        public function __construct($name, $floors, $address){
            $this->name = $name;
            $this->floors = $floors;
            $this->address = $address;
        }
    }

    class Condominium extends Building {
        //Encapsulation - getter

        public function getName(){
            return $this->name;
        }

        //Encapsulation - setter
        public function setName($name) {
            $this->name = $name;
        }
    }

    $building = new Building('Bamboo Building', 12, 'Quezon Avenue, Quezon City, Philippines');
    $condominium = new Condominium('Hi-Rise Condo', 30, 'Salcedo Village, Makati City, Phillipines');
?>