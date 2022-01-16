<?php

namespace Tests;

use PHPUnit\Framework\TestCase;
use Brain\Monkey;

class PluginTestCase extends TestCase {

    protected function setUp():void {
        parent::setUp();
        Monkey\setUp();
        \ServerlessGrid\Main::get_instance(realpath(__DIR__ . '/../../../index.php'));
    }

    protected function tearDown():void {
        Monkey\tearDown();
        parent::tearDown();
    }

    protected function accessNonPublicProperty($obj, $prop) {
		$reflection = new \ReflectionClass($obj);
		$property = $reflection->getProperty($prop);
		$property->setAccessible(true);
		return $property->getValue($obj);
    }
}
