<?php
header('Content-Type: application/json');

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Validate server-side (never trust only JS validation)
if (
    empty($data['name']) ||
    empty($data['email']) ||
    empty($data['phone']) ||
    empty($data['message'])
) {
    echo json_encode(['success' => false]);
    exit;
}

$name = htmlspecialchars($data['name']);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($data['phone']);
$message = htmlspecialchars($data['message']);

// Email settings
$to = "copwhitney@gmail.com";
$subject = "Nexus Group Form Submission";
$body = "
You have received a new message:

Name: $name
Email: $email
Phone: $phone

Message:
$message
";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Send mail
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?>