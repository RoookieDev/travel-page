<?php
if($_FILES['file-data']['name']!=''){
    $filename = $_FILES['file-data']['name'];
    $path = "img/".$filename;
    if(move_uploaded_file($_FILES['file-data']['tmp_name'], $path)){
        echo " done";
    }
}
?>