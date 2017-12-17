<?php
error_reporting(0);
include_once "views/basis/head.php";
include_once "views/basis/nav.php";

$action = isset($_GET['action'])?$_GET['action']:'home';
switch($action){
    case "home":
        include "views/home.php";
        break;
    case "videoHero":
        include "views/videoHero.php";
        break;
    case "search":
        include "views/searchPage.php";
        break;
    default:
        include "views/basis/404.php";
}
