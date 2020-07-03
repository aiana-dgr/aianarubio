<!DOCTYPE html>
<html lang="en">

<head>
  <title>Purchase Review</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-with, initial-scale=1">
</head>

<body class="review">
  <header>
    <div class="logo-box">
      <img src="arkklogo.png" alt="ARKK Logo">
      <h1>Order Review</h1>
    </div>
  </header>
    <?php
      $first = $_GET['first_name'];
      $last = $_GET['last_name'];
      $address = $_GET['address'];
      $phone = $_GET['phone'];
      $total = $_GET['total'];
      $cardType = $_GET['card'];
      $cardExp = $_GET['exp_date'];
      $slim = $_GET['item_0'];
      $round = $_GET['item_1'];
      $small_slim = $_GET['item_2'];
      $liter = $_GET['item_3'];
      $halfL = $_GET['item_4'];
      $quarter = $_GET['item_5'];
      ?>
      <div class="container">    
      <?php
        echo "<link rel='stylesheet' type='text/css' href='assign11.css' />";
        echo "Name: $first $last<br/>";
        echo "Address: $address<br/>";
        echo "Phone: $phone<br/>";
        echo "Item/s:<br/>";
        
        if($slim > 0) {
          echo "5 Gallon Slim Container(with Faucet) - " . $slim . " = $" . number_format($slim*3, 2) . "<br/>";
        }
        if($round > 0) {
          echo "5 Gallon Slim Container(with Faucet) - " . $round . " = $" . number_format($round*3, 2) . "<br/>";
        }
        if($small_slim > 0) {
          echo "5 Gallon Slim Container(with Faucet) - " . $small_slim . " = $" . number_format($small_slim*2, 2) . "<br/>";
        }
        if($liter > 0) {
          echo "5 Gallon Slim Container(with Faucet) - " . $liter . " = $" . number_format($liter*10, 2) . "<br/>";
        }
        if($halfL > 0) {
          echo "5 Gallon Slim Container(with Faucet) - " . $halfL . " = $" . number_format($halfL*12, 2) . "<br/>";
        }
        if($quarter > 0) {
          echo "5 Gallon Slim Container(with Faucet) - " . $quarter . " = $" . number_format($quarter*14, 2) . "<br/>";
        }
        

        echo "Total price: $total<br/>";
        echo "Credit card type: $cardType<br/>";
        echo "Credit card expiration date: $cardExp<br/>";
      ?>
      </div>
  </div>
  <div class="confirm">
    <form id="confirmation" action="assign11_a.php" method="GET">
      <h2>Confirm Purchase?</h2>
      <input type="submit" name="confirm" value="Confirm">
      <input type="submit" name="cancel" value="Cancel">
      <br><br><br>
      <a href="assign11.html">Back</a>
    </form>
  </div>
  <footer>
      <p>Aiana Rubio | Order Form - CS213 Assignment 11</p>
  </footer>
</body>

</html>