<?php
$conn = new mysqli("localhost", "root", "", "viragok");

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Kapcsolódási hiba"]);
    exit;
}

$sql = "SELECT id, nev, ar, készleten, kep FROM viragok";
$result = $conn->query($sql);

$viragok = [];

while($row = $result->fetch_assoc()) {
    $viragok[] = $row;
}

echo json_encode($viragok);

$conn->close();
?>
