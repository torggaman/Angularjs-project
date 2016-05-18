var App = angular.module('App', []);

App.controller('myCtrl', function($scope){
	$scope.name = "I am happy";
});

App.controller('player', function($scope){
$scope.stats = {
	name:"Your Name",
	level:1,
	experience:0,
	hp:5,
	attack:1
	};

$scope.equipment = {headgear:{name:"Basic Headgear",defense:1},chest:{name:"Basic Chest",defense:3},leg:{name:"Basic Leggings", defense:2}};

$scope.inventory = [
{itemname:"Gold", number:1},
{itemname:"Silver", number:5}];

$scope.player_status = "";

$scope.attack_action = ["attack", "explore"];

$scope.w_turn = "";

$scope.current_encounter = [];

$scope.wave_num = 10;

$scope.enemy = 0;

$scope.monster = [
	{name:"",health:"",profile_pic:"img/forest.jpg"},
	{name:"Goblin", health:5, attack:1, experience:10, profile_pic:"img/goblin.jpg",items:"Potion"},
	{name:"Slime", health:20, attack:2, experience:20, profile_pic:"img/Bubble_slime.png"},
	{name:"Kobold", health:40, attack:4, experience:40, profile_pic:"img/Kobold.png"},
	{name:"The Magic Dragon", health:80, attack:8, experience:80, profile_pic:"img/puff.gif"}];
		
$scope.encounter = function(){
	$scope.enemy_health = 0;
	if ($scope.player_status == ""){
		$scope.player_status = "fighting";
		$scope.generate_enemy();
		$scope.enemy_health = $scope.monster[$scope.enemy].health;
	}
	};

$scope.generate_enemy = function(){
	if ($scope.player_status == "fighting"){
		$scope.enemy = $scope.stats.level;
		if ($scope.enemy > $scope.monster.length){
			$scope.enemy = 3;
		}
	} else {
		$scope.enemy = 0;
	}
};
	
$scope.reset_g = function(){
	$scope.c_e.health = $scope.enemy_health;
	$scope.stats.hp = 5;
	$scope.stats.level = 1;
	$scope.stats.attack = 1;
	$scope.stats.experience = 0;
	$scope.wave_num = 10;
	$scope.player_status = "";
};
	
$scope.levelup = function(){
	$scope.stats.level += 1;
	//$scope.stats.experience -= 100;
	$scope.stats.hp += ($scope.stats.level * 2);
	$scope.stats.attack += $scope.stats.level;
};
	
$scope.attack = function(){
	$scope.c_e = $scope.monster[$scope.enemy];
	if ($scope.player_status == "fighting"){
		$scope.c_e.health -= (+$scope.stats.attack);
		if($scope.c_e.health <= 0){
			$scope.wave_num -= 1;
			if($scope.wave_num == 0){
				$scope.levelup();
				$scope.wave_num = 10;
			}
			$scope.player_status = "";
			//$scope.stats.experience += $scope.c_e.experience;
			//if($scope.stats.experience >= 100){
			//	$scope.levelup();
			//}
			$scope.c_e.health = $scope.enemy_health;
			$scope.generate_enemy();
		}
	}};

$scope.useItem = function(){};

$scope.adventurelog = "This is bound in a paragraph";

});

// Explore an area have a random chance to find an item or get into an encounter
//
// Attack a monster if you encounter an enemy
//
// Take damage


