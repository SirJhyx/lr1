<?php 
    $tasks = ['Get git', 'Bake HTML', 'Eat CSS', 'Learn PHP'];

    if(isset($_GET['index'])){
        $indexGet = $_GET['index'];
        echo "The retrieved task from GET is $tasks[$indexGet].";
    }

    if (isset($_POST['index'])){
        $indexPost = $_POST['index'];
        echo "The retrieved tasks from POST is $tasks[$indexPost].";
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>S05: Client-Server Communication (GET and POST)</title>
</head>
<body>
    <h1>Task Index from GET</h1>

    <form method="get">
        <select name="index" required>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>

        <button type="submit">GET</button>
    </form>

    <h1>Task Index from POST</h1>
    <form method="post">
        <select name="index" required>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>

        <button type="submit">POST</button>
    </form>
</body>
</html>