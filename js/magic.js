/* Created by Darren on 5/19/16. */

var a = angular.module('a',[]);

a.controller('magic', function($scope,$document,$window){

    $scope.addhealth_1 = function(p){
        $scope.players[p].health += 1;};

    $scope.removehealth_1 = function(p){
        $scope.players[p].health -= 1;
        $scope.check_condition(p);};

    $scope.addhealth_5 = function(p){$scope.players[p].health += 5;};

    $scope.removehealth_5 = function(p){
        $scope.players[p].health -= 5;
        $scope.check_condition(p);};

    $scope.addpoison = function(p){$scope.players[p].poison += 1};

    $scope.removepoison = function(p){$scope.players[p].poison -= 1};

    $scope.start_game = function(){
        if ($scope.num_player > 1 && $scope.gametype != "") {
            $scope.update_player();
            $scope.gamestarted = 1;
        } else if ($scope.num_player > 4){
            $window.alert("Invalid number of players 2 - 4")
        } else {
            $window.alert("Invalid number of players or Game Mode Not selected");
        }
    };

    $scope.reset_game = function(){
        $scope.gamestarted = 0;
        $scope.player_reset(1);
        $scope.player_reset(2);
        $scope.player_reset(3);
        $scope.player_reset(4);
    };

    $scope.player_reset = function(p){
        $scope.players[p].health = 0;
        $scope.players[p].poison = 0;

    };

    $scope.testing = function(p){
        if (p == 1){
            $scope.players;
        }
    };

    $scope.update_player = function(){
        for (var i = 0; i <= $scope.num_player; i++){
            if($scope.gametype == "Standard"){
                $scope.players[i].health = $scope.game_type[0].player_health;
            } else if($scope.gametype == "Two headed Giant"){
                $scope.players[i].health = $scope.game_type[1].player_health;
            }
        }
    };

    $scope.check_condition = function(p){
        if ($scope.players[p].health <= 0) {
            $window.alert($scope.players[p].player_name + " Has been defeated!");
        } else if ($scope.players[p].poison == 10){
            $window.alert($scope.players[p].player_name + " Has been input-group-btndefeated!");
        }
    };

    $scope.addtodeck = function(card){
        for (var i = 0; i < ($scope.cards.length + 1); ++i) {
            if ($scope.cards[i].name == card) {
                $scope.player_deck.push({
                    name: $scope.cards[i].name,
                    power: $scope.cards[i].power,
                    toughness: $scope.cards[i].toughness,
                    oracle: $scope.cards[i].oracle,
                    type: $scope.cards[i].type,
                    ability: $scope.cards[i].ability,
                    cost: $scope.cards[i].cost
                });
            } else if (i == ($scope.cards.length + 1)){
                $window.alert("Invalid card name");
            }
       }
    };

    $scope

    $scope.builddeck = "";

    $scope.gamestarted = 0;

    $scope.gametype = "";

    $scope.num_player = 0;
    
    $scope.game_type = [
        {name:"Standard",player_health:20},
        {name:"Two headed Giant",player_health:40}];

    $scope.players = [
        {player_num:0},
        {player_num:1, player_name:"Player 1", health:0, poison:0},
        {player_num:2, player_name:"Player 2", health:0, poison:0},
        {player_num:3, player_name:"Player 3", health:0, poison:0},
        {player_num:4, player_name:"Player 4", health:0, poison:0}];

    $scope.player_deck = [];

    $scope.cards = [
    {name:"Sample Red Creature", power:2, toughness:1, oracle:"Stuff",type:"Creature", ability:"", cost:{red:1,blue:0,white:0,black:0,green:0,colorless:0}},
    {name:"Sample Blue Creature", power:1, toughness:1, oracle:"Stuff",type:"Creature", ability:"", cost:{red:0,blue:1,white:0,black:0,green:0,colorless:0}},
    {name:"Sample White Creature", power:1, toughness:2, oracle:"Stuff",type:"Creature", ability:"", cost:{red:0,blue:0,white:1,black:0,green:0,colorless:0}},
    {name:"Sample Black Creature", power:1, toughness:1, oracle:"Stuff",type:"Creature", ability:"", cost:{red:0,blue:0,white:0,black:1,green:0,colorless:0}},
    {name:"Sample Green Creature", power:1, toughness:1, oracle:"Stuff",type:"Creature", ability:"", cost:{red:0,blue:0,white:0,black:0,green:1,colorless:0}},
    {name:"Sample Colorless Creature", power:0, toughness:1, oracle:"Stuff",type:"Creature", ability:"", cost:{red:0,blue:0,white:0,black:0,green:0,colorless:1}},
    {name:"Sample Red Sorcery", oracle:"Stuff",type:"Sorcery", ability:"", cost:{red:2,blue:0,white:0,black:0,green:0,colorless:0}},
    {name:"Sample Blue Sorcery", oracle:"Stuff",type:"Sorcery", ability:"", cost:{red:0,blue:2,white:0,black:0,green:0,colorless:0}},
    {name:"Sample White Sorcery", oracle:"Stuff",type:"Sorcery", ability:"", cost:{red:0,blue:0,white:2,black:0,green:0,colorless:0}},
    {name:"Sample Black Sorcery", oracle:"Stuff",type:"Sorcery", ability:"", cost:{red:0,blue:0,white:0,black:2,green:0,colorless:0}},
    {name:"Sample Green Sorcery", oracle:"Stuff",type:"Sorcery", ability:"", cost:{red:0,blue:0,white:0,black:0,green:2,colorless:0}},
    {name:"Sample Colorless Sorcery", oracle:"Stuff",type:"Sorcery", ability:"", cost:{red:0,blue:0,white:0,black:0,green:0,colorless:2}},
    {name:"Sample Red Enchantment", oracle:"Stuff",type:"Enchantment", ability:"", cost:{red:2,blue:0,white:0,black:0,green:0,colorless:0}},
    {name:"Sample Blue Enchantment", oracle:"Stuff",type:"Enchantment", ability:"", cost:{red:0,blue:2,white:0,black:0,green:0,colorless:0}},
    {name:"Sample White Enchantment", oracle:"Stuff",type:"Enchantment", ability:"", cost:{red:0,blue:0,white:2,black:0,green:0,colorless:0}},
    {name:"Sample Black Enchantment", oracle:"Stuff",type:"Enchantment", ability:"", cost:{red:0,blue:0,white:0,black:2,green:0,colorless:0}},
    {name:"Sample Green Enchantment", oracle:"Stuff",type:"Enchantment", ability:"", cost:{red:0,blue:0,white:0,black:0,green:2,colorless:0}},
    {name:"Sample Colorless Enchantment", oracle:"Stuff",type:"Enchantment", ability:"", cost:{red:0,blue:0,white:0,black:0,green:0,colorless:2}},
    {name:"Red Land", oracle:"Stuff",type:"Land", ability:"", cost:{red:-1,blue:0,white:0,black:0,green:0,colorless:0}},
    {name:"Blue Land", oracle:"Stuff",type:"Land", ability:"", cost:{red:0,blue:-1,white:0,black:0,green:0,colorless:0}},
    {name:"White Land", oracle:"Stuff",type:"Land", ability:"", cost:{red:0,blue:0,white:-1,black:0,green:0,colorless:0}},
    {name:"Black Land", oracle:"Stuff",type:"Land", ability:"", cost:{red:0,blue:0,white:0,black:-1,green:0,colorless:0}},
    {name:"Green Land", oracle:"Stuff",type:"Land", ability:"", cost:{red:0,blue:0,white:0,black:0,green:-1,colorless:0}}
    ];
});
