<?php

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$feedbacks = isset($_SESSION['feedbacks']) ? $_SESSION['feedbacks'] : "";
$errors = isset($_SESSION['errors']) ? $_SESSION['errors'] : "";

require_once '../components/header.php'; ?>
        
<div class="contact-page">
    <div class="contact-header">
        <h1>Contactez nous</h1>
    </div>
    <div class="contact-form">
            <p>N'hésitez pas à prendre contact, nous répondons à toutes les demandes, et nous sommes ouverts à tous les projets. Remplissez ce formulaire et laissez nous vous guider. Si ce n'est pas déjà fait jeter un oeil à nos <a target="_blank" href="./expertises.php"><strong>compétences</strong></a> ou encore à nos <a target="_blank" href="./travaux.php"><strong>travaux</strong>.</a></p>
            <hr class="yellow">
            <div class="feedbacks">
                <?= isset($feedbacks['email']) ? $feedbacks['email'] : ""; ?>
                <?= isset($feedbacks['contact']) ? $feedbacks['contact'] : ""; ?>
            </div>
            <form action="../actions/action-contact.php" method="POST">
                <div class="form-group">
                    <div class="input">
                        <input aria-label="Prénom" name="firstname" type="text">
                        <span class="placeholder">Votre prénom</span>
                    </div>
                    <div class="input">
                        <input aria-label="Nom" name="lastname" type="text">
                        <span class="placeholder">Votre nom</span>
                    </div>
                </div>
                <div class="input">
                    <input aria-label="Adresse mail" name="email" type="email" >
                    <span class="placeholder">Votre adresse mail*</span>
                </div>
                <div class="errors">
                    <?= isset($errors['email']) ? $errors['email'] : ""; ?>
                </div>
                <div class="input">
                    <textarea aria-label="Message" name="message" type="text"></textarea>
                    <span class="placeholder">Votre message*</span>
                </div>
                <div class="errors">
                    <?= isset($errors['message']) ? $errors['message'] : ""; ?>
                </div>
                <div class="input">
                    <div style="margin: auto" class="g-recaptcha" data-sitekey="6LdY0cwUAAAAAP8zL3RqnVDfrHtHE7Jz3HaxVrYn"></div>
                </div>
                <div class="errors">
                    <?= isset($errors['captcha']) ? $errors['captcha'] : ""; ?>
                </div>
                <br><br>
                <nav class="home-navigation">
                    <button class="btn" name="submit" type="submit">Envoyer</button>
                </nav>
            </form>
        </div>
</div>


<?php require_once '../components/footer.php'; 

unset($_SESSION['feedbacks']);
unset($_SESSION['errors']);
?>