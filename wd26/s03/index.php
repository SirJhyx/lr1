<?php require_once './code.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>S03: Classes and Objects</title>
</head>
<body>

    <h1>Objects from Variables</h1>

    <p>
        <?php echo $buildingObj->name; ?>
    </p>

    <p>
        <?php echo $buildingObj->address->city; ?>
    </p>

    <h1>Objects and Classes</h1>

    <p>
        <?php var_dump($building); ?>
    </p>

    <p>
        <?php echo $building->printName(); ?>
    </p>

    <p>
        <?php echo $condominium->printName(); ?>
    </p>

    <h1>Inheritance (Condominium Object)</h1>

    <p>
        <?php echo $condominium->name; ?>
    </p>

    <p>
        <?php echo $condominium->floors; ?>
    </p>

    <p>
        <?php echo $condominium->address; ?>
    </p>

    <h1>Polymorphism - Changing of printName Behavior</h1>

    <p>
        <?php echo $condominium->printName(); ?>
    </p>

    <p>
        <?php echo $building->printName(); ?>
    </p>

    <h1>Exercise</h1>

    <h2>Person</h2>

    <p>
        <?php echo $person->printName(); ?>
    </p>

    <h2>Developer</h2>

    <p>
        <?php echo $developer->printName(); ?>
    </p>

    <h2>Engineer</h2>

    <p>
        <?php echo $engineer->printName(); ?>
    </p>
    
</body>
</html>