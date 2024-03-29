<?php require_once "./code.php" ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>S01: PHP Basics and Selection Control Structure</title>
</head>
<body>
    <h1>Echoing Values</h1>

    <!--PHP variables cannot be used in single quotes-->

    <p>
        <?php 
            echo 'Hello KodeGo Student';
            //It is used to print multi-line strings, single strings, escaping characters, variable, array
        ?>
    </p>

    <p>
        <?php echo 'Good day $name! Your given email is $email.'; ?>
    </p>

    <p>
        <?php echo "Good day $name! Your given email is $email."; ?>
    </p>

    <p>
        <?php echo PI; ?>
    </p>

    <p>
        <?php echo MESSAGE; ?>
    </p>

    <p>
        <?php echo "$state state is in $country."; ?>
    </p>

    <p>
        <?php echo $address; ?>
    </p>

    <p>
        <?php echo $addressTwo; ?>
    </p>

    <p>
        <?php echo "Gemuel's age is $age"; ?>
    </p>

    <p>
        <?php echo "Our class headcount is $headcount"; ?>
    </p>

    <p>
        <?php echo "Cell's grade in PHP is $grade"; ?>
    </p>

    <p>
        <?php echo "Ang layo ng ginala ni Ms. Dahl, biro mo naka travel in $distanceInKm"; ?>
    </p>

    <!--Normal echoing of Boolean and Null variables will not appear in the web output.-->

    <p>
        <?php echo $hasTravelledAbroad; ?>
    </p>

    <p>
        <?php echo $haveSymptoms; ?>
    </p>

    <p>
        <?php echo $spouse; ?>
    </p>

    <p>
        <?php echo $middleName; ?>
    </p>

    <!--gettype function - returns the type of variable-->
    <p>
        <?php echo gettype($hasTravelledAbroad); ?>
    </p>

    <!--var_dump gives detail about the variable-->

    <p>
        <?php echo var_dump($spouse); ?>
    </p>

    <p>
        <?php echo var_dump($hasTravelledAbroad); ?>
    </p>

    <h2>Arrays</h2>

    <p>
        <?php echo $grades[0]; ?>
    </p>

    <h2>Objects</h2>

    <p>
        <?php
            echo $personObj->address->state;
        ?>
    </p>

    <p>
        <?php
            echo $gradesObj->firstGrading
        ?>
    </p>

    <h2>Arithmetic Operators</h2>
    <p>
        Sum: <?php echo $x + $y; ?>
    </p>
    <p>
        Difference: <?php echo $x - $y; ?>
    </p>
    <p>
        Product: <?php echo $x * $y; ?>
    </p>
    <p>
        Quotient: <?php echo $x / $y; ?>
    </p>
    <p>
        Modulus Division: <?php echo $x / $y; ?>
    </p>

    <h2>Equality Operators</h2>

    <p>
        Loose Equality: <?php echo var_dump($x == "56.2"); ?>
    </p>

    <p>
        Strict Equality: <?php echo var_dump($x === "56.2"); ?>
    </p>

    <p>
        Loose Equality: <?php echo var_dump($x != "56.2"); ?>
    </p>

    <p>
        Strict Equality: <?php echo var_dump($x !== "56.2"); ?>
    </p>

    <h2>Greater/Lesser Operators</h2>

    <p>
        Is Lesser: <?php echo var_dump ($x < $y); ?>
    </p>

    <p>
        Is Greater: <?php echo var_dump ($x > $y); ?>
    </p>

    <h2>Logical Operators</h2>
    <p>
        Are all Requirements Met:
        <?php
            echo var_dump($isLegalAge && $isRegistered);
        ?>
    </p>

    <p>
        Are some Requirements Met:
        <?php
            echo var_dump($isLegalAge or $isRegistered);
        ?>
    </p>

    <p>
        Are some Requirements not Met:
        <?php
            echo var_dump(!$isLegalAge or !$isRegistered);
        ?>
    </p>

    <h2>Functions</h2>

    <p>
        <?php echo getFullName ('John', 'D', 'Smith'); ?>
    </p>

    <h2>Selection Control Structures</h2>

    <h2>If-Else If-Else</h2>

    <p>
        <?php echo determineTyphoonIntensity(12); ?>
    </p>

    <p>
        <?php echo determineTyphoonIntensity(117); ?>
    </p>

    <p>
        <?php echo determineTyphoonIntensity(200); ?>
    </p>

    <h2>Ternary (is Underage)</h2>

    <p>
        <?php
            var_dump(isUnderAge(78));
        ?>
    </p>

    <h2>Switch Statement</h2>
    
    <p>
        <?php echo determineComputerUser(8); ?>
    </p>

    <p>
        <?php echo determineComputerUser(3); ?>
    </p>

    <h2>Try-Catch-Finally</h2>

    <p>
        <?php echo greeting(12); ?>
    </p>

    <h2>Exercise 1: Full Address</h2>

    <p>
        <?php 
            echo getFullAddress('18th Floor. The W Fifth Avenue, 5th Ave', 'Taguig City', 'Metro Manila', 'Philippines'); 
            ?>
    </p>

    <h2> Exercise 2: Letter-Based Grading</h2>

    <p>

        87 is equivalent to
        <?php
             echo getLetterGrade(87);
        ?>
    </p>

    <p>94 is equivalent to <?php echo getLetterGrade(94); ?></p>

    <p>74 is equivalent to <?php echo getLetterGrade(74); ?></p>    

</body>
</html>