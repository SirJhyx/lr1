<?php require_once './code.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Access Modifiers and Inheritance</title>
</head>
<body>
    <h1>Access Modifiers</h1>

    <h2>Building Variables</h2>

    <p>The usual way of accessing objects will display as an error because the variable in the class is protected.</p>

    <p>
        <?php //echo $building->$name; ?>
    </p>

    <p>
        <?php //echo $condominium->$name; ?>
    </p>

    <h1>Encapsulation - solution to access the protected variables</h1>

    <p>
        The name of the condominium is 
        <?php echo $condominium->getName(); ?>
        <?php echo $condominium->setName('Burgundy Tower'); ?>
    </p>

    <p>
        The name of the condominium is 
        <?php echo $condominium->getName(); ?>
    </p>

</body>
</html>