<?php 
echo 'Table'."\n";
$nombre = readline('Inserer un nombre = ');

$create = fopen('phpFile.txt',"a+");

for ($i = 0; $i < 10; $i++) {
  $result = $nombre." x ".$i." = ".$nombre*$i."\n";
  print($result);
  fwrite($create,$result);
}
fclose($create);