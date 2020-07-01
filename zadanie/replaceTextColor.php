<?php
if (isset($_POST['clear'])) {
    exit(header('Location:'.$_SERVER['PHP_SELF']));
}

if (isset($_POST['execute'])) {
    $wordValue = htmlspecialchars(trim($_POST['word']));
    $wordValue = preg_replace('# +#', ' ', $wordValue);
    $wordValue = preg_replace("#\s+#", ' ', $wordValue);
    
    $result = array_map(function($value) {
        return mb_strtolower($value, 'utf-8');
    }, explode(' ', $wordValue));

    $wordsCount = [];
    foreach ($result as $value) {
        $wordsCount[$value] = (isset($wordsCount[$value])) ? ($wordsCount[$value] + 1) : 1;
    }
    
    foreach ($wordsCount as $word => $count) {
        switch ($count) {
            case 7:
                $color = 'greenyellow';
                break;
            case 6:
                $color = 'darkgreen';
                break;
            case 5:
                $color = 'yellow';
                break;
            case 4:
                $color = 'orange';
                break;
            case 3:
                $color = 'purple';
                break;
            case 2:
                $color = 'blue';
                break;
            default:
                $color = 'black';
                break;
        }
        
        $wordValue = preg_replace("/(".$word.")/ui", "<span style='color:$color;'>$1</span>", $wordValue);
    }
}
?><!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Цвет текста</title>
  </head>
  <body>
    <form action="" method="post" name="lesson">
      <p><textarea name="word" cols="40" rows="15" placeholder="Введите текст"><?=@htmlspecialchars(trim($_POST['word']));?></textarea></p>
      <input type="submit" name="execute" value="Выполнить">
      <input type="submit" name="clear" value="Очистить">
    </form>
    <?php
    if (isset($wordValue)) {
        echo str_repeat('<br>', 2);
        echo $wordValue;
    }
    ?>
  </body>
</html>