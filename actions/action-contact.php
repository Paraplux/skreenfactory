<?php 


$json = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=SECRETKEY&response=' . $_POST['g-recaptcha-response']);

$captcha = json_decode($json,true);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (isset($_POST['submit'])) {

    if (isset($_POST['firstname'])) {
        $firstname = $_POST['firstname'];
    } else {
        $firstname = "";
    }
    if (isset($_POST['lastname'])) {
        $lastname = $_POST['lastname'];
    } else {
        $lastname = "";
    }
    
    $errors = array();
    if (!isset($_POST['email']) || empty($_POST['email'])) {
        $errors['email'] = 'Votre addresse mail est requise!';
    }
    if (!isset($_POST['message']) || empty($_POST['message'])) {
        $errors['message'] = 'Vous devez entrer un message!';
    }
    if ($captcha['success'] == FALSE) {
        $errors['captcha'] = 'Vous devez résoudre le captcha!';
    }

    if (empty($errors)) {
        $from = $_POST['email'];
        $offer = $_POST['offer'];
        $to = "marcbouchez.pro@gmail.com";
        $subject = "Mail reçu depuis le portfolio ! ";
        $message = $_POST['message'];
        $headers = "Envoyé depuis $from par $firstname $lastname";

        if(mail($to, $subject, $message, $headers)) {
            $feedbacks['email'] = "J'ai bien reçu votre mail, je vous réponds dès que possible!";
        } else {
            $feedbacks['email'] =  "Une erreur s'est produite lors de l'envoie de votre mail, veuillez essayer à nouveau!";
        }
    } else {
        $feedbacks['contact'] =  "Whoops, quelque chose cloche! ";
    }
    $_SESSION['feedbacks'] = $feedbacks;
    $_SESSION['errors'] = $errors;
    header('Location: ../views/contact.php');
}
