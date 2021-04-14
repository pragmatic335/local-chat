<?php
namespace app\widgets;

class ChatAsset extends \yii\web\AssetBundle
{
    public $sourcePath = '@app/widgets/assets';
    public $css = ['main.css', 'font-awesome/css/font-awesome.css'];
    public $js = ['main.js'];
}