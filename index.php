<html>
<head>
<link id="css-theme" rel="stylesheet" href="style/dark.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="style/general.css">
<link rel="stylesheet" href="style/desktop.css">
<script>

</script>
<script src="https://kit.fontawesome.com/bd0bc678fb.js" crossorigin="anonymous"></script>
<?php include "navbar.html" ?>
</head>
<body>
<div class="desktop">
    <div ondblclick="win(this)" id="readme" class="file">
        <i class="fas fa-file-alt"></i>
        <br>read me.txt
    </div>
    <div ondblclick="win(this)" id="html" class="file">
        <i class="fas fa-file-code"></i>
        <br>file2.html</div>
    <div ondblclick="win(this)" id="jpg" class="file">
        <i class="fas fa-file-image"></i>
        <br>file3.jpg
    </div>
    <div ondblclick="win(this)" id="fold" class="file">
        <i class="fas fa-folder"></i>
        <br>file4
    </div>
    <div ondblclick="win(this)" id="table" class="file">
        <i class="fas fa-file-excel"></i>
        <br>file5
    </div>
</div>
</body>
<script src="js/desktop.js"></script>
</html>