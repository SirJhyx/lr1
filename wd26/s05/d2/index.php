<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>S05: Client-Server Communication (Basic To-Do)</title>
</head>
<body>
    <!--Client Side-->
    <?php session_start(); ?>

    <h3>Add Tasks</h3>
    <form action="./server.php" method="post">
        <input type="hidden" name="action" value="add" />
        Description: <input type="text" name="description" required>
        
        <button type="submit">Add</button>
    </form>

    <h3>Task List</h3>

    <?php if(isset($_SESSION['tasks'])): ?>
    
    <?php foreach($_SESSION['tasks'] as $index => $task): ?>

        <div>

            <form action="./server.php" method="post" style="display:inline-block;">
                <input type="hidden" name="action" value="update">
                <input type="hidden" name="id" value="<?php echo $index; ?>">
                <input type="checkbox" name="isFinished" <?php echo ($task->isFinished) ? 'checked' : null ?>>
                <input type="text" name="description" value="<?php echo $task->description; ?>">
                <input type="submit" name="Update">
            </form>

            <form action="./server.php" method="post" style="display:inline-block;">
                <input type="hidden" name="action" value="remove">
                <input type="hidden" name="id" value="<?php echo $index;?>">
                <input type="submit" value="Delete">
            </form>
        </div>
    <?php endforeach; ?>
    <?php endif; ?>

    <br><br>

    <form action="./server.php" method="post">
        <input type="hidden" name="action" value="clear">
        <button type="submit">Clear All Tasks</button>
    </form>
</body>
</html>