<?php
$host = "localhost";
$user = "root";
$password = "root";
$db = "cooper_info";

$conn = mysqli_connect($host, $user, $password, $db);

// if (!$conn) {
//     echo "somthing broke... connnection isn't working";
//     exit;
// }    TESTING IF BROKEN

// echo "connected!"; TESTING IF WORKING

//go and get ALL data from the database

// $myQuery = "SELECT * FROM mainmodel";
// $result = mysqli_query($conn, $myQuery);
// $rows = array();

// //fill the array with the result set and send it too the browser

// while($row = mysqli_fetch_assoc($result)) {
//     $rows[] = $row;
// }

// get one item from the data base
if(isset($_GET["modelNo"])) {
    $car = $_GET["modelNo"];

    $myQuery = "SELECT * FROM mainmodel WHERE model = '$car'";
    $result = mysqli_query($conn, $myQuery);
    $rows = array();

    //fill the array with the result set and send it too the browser

    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
}

}
            ///http://localhost:8888/ajax_example/? to get use ? superglobal variable
            ///http://localhost:8888/ajax_example/includes/connect.php?modelNo=R58 


// encode the result and send it back
echo json_encode($rows);
?>