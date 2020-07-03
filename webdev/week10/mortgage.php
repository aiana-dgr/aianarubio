<!DOCTYPE html>
<html lang="en">
<meta charset="utf-8" />
<title>Mortgage Calculator Data</title>

<body>
   <h3>Mortgage Calculator Results Page<br />
      <?php
         $loanAmount = $_GET['amount'];
         $annualPR = $_GET['apr'];
         $loanTerm = $_GET['term'];
      
         function calculate($annualPR, $loanTerm, $loanAmount) {
            $loanTerm = $loanTerm * 12;
            $annualPR = $annualPR / 100 / 12;
            $result = $loanAmount * $annualPR * (pow(1 + $annualPR, $loanTerm)) / (pow(1 + $annualPR, $loanTerm) - 1);
            return $result;
         }
      
         $monthly = calculate($annualPR, $loanTerm, $loanAmount);
         $monthly = number_format($monthly, 2, '.', '');
         ?>
      <div>
         <?php
            echo "<link rel='stylesheet' type='text/css' href='assign10.css' />";
            echo "Annual Percentage Rate (APR): $annualPR<br/>";
            echo "Loan Term (in years): $loanTerm<br/>";
            echo "Loan Amount (in dollars): $ $loanAmount<br><br>";
            ?>
      </div>
      <div>
         <?php
            echo "Monthly Payment: $ $monthly";
            ?>
      </div>
      <div class="back">
         <a href="mortgage.html">Back to Mortgage Calculator</a>
      </div>
</body>

</html>