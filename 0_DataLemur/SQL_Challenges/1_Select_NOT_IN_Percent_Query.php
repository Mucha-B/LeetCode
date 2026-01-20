<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "hackerrank_db";

$conn = new mysqli($host, $user, $pass, $db) or die("Unable to connect to DataBase");

/*
echo "<pre>";
print_r($conn);
echo "</pre>";
*/

// Query the list of CITY names from STATION that do not end with vowels. Your result cannot contain duplicates.
// Query below selects CITY names from STATION table but doesn't select (NOT LIKE) those with A, E, I, O, U. Using OR will ruin the query
$sql_not_like = "SELECT DISTINCT CITY
                FROM STATION  
                WHERE CITY NOT LIKE '%A'  
                AND CITY NOT LIKE '%E'  
                AND CITY NOT LIKE '%I'  
                AND CITY NOT LIKE '%O'  
                AND CITY NOT LIKE '%U';";


// Does the same as NOT LIKE above
// RIGHT keyword indicates where to start checking from. Right side first character of City column
$sql_not_in = "SELECT DISTINCT CITY 
                FROM STATION 
                WHERE RIGHT(CITY, 1) 
                NOT IN ('A', 'E', 'I', 'O', 'U');";




$conn->close();

?>