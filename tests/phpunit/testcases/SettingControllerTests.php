<?php

namespace Tests;

use \Brain\Monkey\Functions;
use Slsgrid\Api;

defined('ABSPATH') or die();

class SettingControllerTests extends PluginTestCase {

    public function test_construct() {
        $controller = new \Slsgrid\Api\SettingController();

		$actual   = $this->accessNonPublicProperty($controller, 'namespace');
		$expected = \Slsgrid\Main::PREFIX . '/v1';
        $this->assertEquals($expected, $actual);

		$actual   = $this->accessNonPublicProperty($controller, 'rest_base');
		$expected = 'settings';
        $this->assertEquals($expected, $actual);

    }
}
