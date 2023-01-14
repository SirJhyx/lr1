<?php require_once "./code.php" ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>S02: Repetition Control Structure and Array Manipulation</title>
</head>
<body>
    <h1>S02: Repetition Control Structure and Array Manipulation</h1>
    <p>
        <?php echo 'Hello Pinas'; ?>
    </p>

    <h2>While Loop</h2>

    <p>
        <?php 
            whileLoop();
        ?>
    </p>

    <h2>Do-While Loop</h2>

    <p>
        <?php 
            doWhileLoop();
        ?>
    </p>

    <h2>For Loop</h2>

    <p>
        <?php 
            forLoop();
        ?>
    </p>

    <h2>Continue and Break Statement</h2>

    <p>
        <?php modifiedForLoop(); ?>
    </p>

    <h1>Types of Arrays</h1>

    <h2>Simple Arrays</h2>

    <ul>
        <?php foreach($computerBrands as $brand){ ?>

            <li><?php echo $brand; ?> </li>

        <?php } ?>
    </ul>

    <h2>Associative Arrays</h2>

    <ul>
        <?php foreach ($gradePeriods as $period => $grade) { ?>
            <li>Grade in <?= $period ?> </li> is <?= $grade?></li>
        <?php }?>
    </ul>

    <ul>
        <?php foreach ($heroes as $team) {
            foreach($team as $member) {
                echo '<li>'.$member.'</li>';
            }
        }?>
    </ul>

    <h3>Displaying a specific element in 2D Array</h3>

    <p>
            <?php echo $heroes[2][2] ?>
    </p>

    <?php 
        echo $heroes[1][0]
    ?>

    <h1>Array Functions</h1>
    
    <h2>Sorting</h2>
    
    <!--The <pre> tag defines preformatted text. -->
    <pre>
        <?php print_r($sortedBrands); ?>
    </pre>

    <h2>Reversed Sorting</h2>

    <pre>
        <?php print_r($reverseSortedBrands); ?>
    </pre>

    <h2>Append</h2>

    <?php array_push($computerBrands, 'Apple') ?>

    <pre> 
        <?php print_r($computerBrands); //to display the output?>
    </pre>

    <h2>Remove</h2>

    <?php array_pop($computerBrands) ?>

    <pre> 
        <?php print_r($computerBrands); //to display the output?>
    </pre>

    <?php array_shift($computerBrands); //it removes the first item in the array?>

    <pre> 
        <?php print_r($computerBrands); //to display the output?>
    </pre>

    <h2>Others</h2>

    <h3>Count</h3>

    <pre>
        <?php echo count($computerBrands); //it counts all the items in an array including the ones that is assigned in index 0 ?>
    </pre>

    <h3>In Array</h3>

    <p>
        <?php echo searchBrand($computerBrands, 'Toshiba'); ?>
    </p>

    <h3>Reversed Grade Periods</h3>

    <pre>
        <?php print_r($reversedGradePeriods); ?>
    </pre>

    <h1>Exercise</h1>

    <p>
        <?php echo divLoop(); ?>
    </p>

</body>
</html>