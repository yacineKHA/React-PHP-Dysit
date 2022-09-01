<?php


use PHPUnit\Framework\TestCase;

class ExempleAssertions extends TestCase
{

    function stringIdentique(){
        $string1 = 'une string';
        $string2 = 'une string';

        $this->assertSame($string1, $string2);
    }
}
