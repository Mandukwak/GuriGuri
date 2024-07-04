<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$id = $data['id'];
$hp = $data['hp'];

$result = [];

foreach($users as $user) {
    if($user['id'] === $id && $user['hp'] === $hp) {
        $result['password'] = $user['password'];
        echo json_encode($result);
        exit();
    }
}

$result['error'] = "없는 계정입니다.";
echo json_encode($result);
?>
