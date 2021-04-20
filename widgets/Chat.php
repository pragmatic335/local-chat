<?php

namespace app\widgets;

use yii\base\Widget;

class Chat extends Widget
{
    public function init()
    {
        parent::init();
        ChatAsset::register( $this->getView() );
    }

    public function run()
    {
        parent::run();

        return $this->render('chat');
    }


}