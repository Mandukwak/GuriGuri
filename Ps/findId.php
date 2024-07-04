<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'];
$hp = $data['hp'];

$result = [];

foreach($users as $user) {
    if($user['name'] === $name && $user['hp'] === $hp) {
        $result['id'] = $user['id'];
        echo json_encode($result);
        exit();
    }
}

$result['error'] = "없는 계정입니다.";
echo json_encode($result);
?>
