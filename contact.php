<?php
// Database connection
$host = "localhost";
$dbname = "portfolio_db";
$username = "root";
$password = "";

// Connect using PDO
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed");
}

// Validate request
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        die("All fields are required.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email address.");
    }

    // Insert into database
    $sql = "INSERT INTO contact_messages (name, email, subject, message)
            VALUES (:name, :email, :subject, :message)";

    $stmt = $conn->prepare($sql);
    $stmt->execute([
        ":name" => $name,
        ":email" => $email,
        ":subject" => $subject,
        ":message" => $message
    ]);

    // Redirect back with success
    
    // echo "<script> alert('Message sent successfully') </script>";
    // header("Location: index.html#contact");
    // exit();
    echo "<script>
        alert('Message sent successfully')
        window.location.href = 'index.html'
        </script>";
        exit();
}
?>
