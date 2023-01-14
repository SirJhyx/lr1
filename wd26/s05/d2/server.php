<?php
    session_start();

    class TaskList {
        public function add($description){
            $newTask = (object) [
                'description' => $description,
                'isFinished' => false
            ];

            if ($_SESSION['tasks'] === null){
                $_SESSION['tasks'] = array();
            }

            array_push($_SESSION['tasks'], $newTask);
        }

        public function update($id, $description, $isFinished) {
            $_SESSION['tasks'][$id]->description = $description;
            $$_SESSION['tasks'][$id]->isFinished = ($isFinished !== null) ? true : false; 
        }

        public function remove($id) {
            array_splice($_SESSION['tasks'], $id, 1);
        }

        public function clear(){
            session_destroy();
        }
    }

    $taskList = new TaskList();

    if($_POST['action'] === 'add') {
        //add function
        $taskList->add($_POST['description']);
    }

    else if ($_POST['action'] === 'update') {
        //update function
        $taskList->update($_POST['id'], $_POST['description'], $_POST['isFinished']);
    }

    else if ($_POST['action'] === 'remove') {
        $taskList->remove($_POST['id']);
    }

    else if ($_POST['action'] === 'clear') {
        $taskList->clear();
    }

    header('Location: ./index.php')
?>