  
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Order Confirmed</title>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-with, initial-scale=1">
</head>
<body class="order">
	<div class="logo-box">
      <img src="arkklogo.png" alt="ARKK Logo">
    </div>
 	<div class="container">
  		<?php
  		echo "<link rel='stylesheet' type='text/css' href='assign11.css' />";
    	if (isset($_GET['confirm'])) {
      		echo "The order has been confirmed!";
    	}
    	else if (isset($_GET['cancel'])) {
      		echo "The order has been cancelled!";
		}
  		?>
		<a href="assign11.html">Order Again</a><br><br><br>
  	</div>
</body>
</html>