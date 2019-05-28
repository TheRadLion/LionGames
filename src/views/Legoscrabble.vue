<template>
<div>
  <body id="scrabblebody">
    <div id="app">
      <div class="item">
        <div id="iteminfo">
          <h1>{{ itemtitle }}</h1>
        </div>

        <div id="itemimage">
          <img v-bind:src="image">
        </div>
      </div>
    </div>
  </body>
</div>
</template>
