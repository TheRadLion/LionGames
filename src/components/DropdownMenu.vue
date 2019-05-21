<template>
  <div>
    <nav class="navbar">
      <span class="dropdown">
        <button class="dropbutton">Articles</button>
        <span class="dropdown-content">
          <router-link id="bgtext" to="./article">History of Board Games</router-link>
          <router-link id="bgtext" to="./legoscrabble">Lego Scrabble</router-link>
        </span>
      </span>
      <span class="dropdown">
        <button class="dropbutton">Games</button>
        <span class="dropdown-content">
          <router-link id="bgtext" to="./tictactoe">Tic Tac Toe Game</router-link>
          <router-link id="bgtext" to="./chess">Chess Game</router-link>
        </span>
      </span>
      <router-link id="homemenu" to="/">Home</router-link>
      <router-link id="aboutbutton" to="./about">About Lion Games</router-link>
    </nav>
  </div>
</template>

<style>
.navbar {
  background-color: black;
  width: 100%;
  box-shadow: 5px 5px 0px 0px rgb(218, 218, 218);
}

.dropdown {
  position: relative;
  display: inline-block;
  background-color: black;
}

.dropdown-content {
  display: none;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.navbar a, .dropbutton {
  display: inline-block;
  padding: 20px 30px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: center;
}

.dropbutton, .dropdown-content {
  background-color: black;
  border: none;
  min-width: 125;
  margin: 0px 0px 0px 0px;
}

.navbar a:hover, .dropbutton:hover, #menubuttons:hover, #bgtext:hover, #aboutbutton:hover, #homemenu:hover  {
  background-color: gray;
}

#bgtext {
  background-color: rgb(124, 191, 211);
}

.navbar a:hover, .dropbutton:hover, #menubuttons:hover, #bgtext:hover, #aboutbutton:hover, #homemenu:hover  {
  background-color: gray;
}

#homemenu {
  float: left;
  background-color: rgb(124, 191, 211);
}

#aboutbutton {
  float: right;
  background-color: rgb(124, 191, 211);
}
</style>