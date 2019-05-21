<template>
  <div>
    <div id="textdescription2">
      <h1>Lego Build</h1>
      <p id="text">Created in Stud.io, a Lego CAD program.</p>
    </div>

    <div>
      <div id="textbox">
        <h1 id="paragraphtitle">Featured Game: {{ featuredgame }}</h1>
        <p id="boxtext">{{ description }}</p>
        <div id="picture">
          <img id="pictureimg" src="assets/legoscrabble.png">
        </div>
        <form action="legoscrabble.html">
          <button id="button1">Check It Out</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedGameCard",
  data() {
    return {
      featuredgame: "Lego Scrabble",
      description: "A Lego version of the popular game Scrabble."
    };
  },

  methods: {
    featuredtitle: function(title) {
      this.featuredgame = title;
    },
    featureddescription: function(sitedescription) {
      this.description = sitedescription;
    }
  }
};
</script>

<style>
#textdescription2 {
  float: left;
  flex-direction: row;
  margin-right: 5%;
  margin-top: 10%;
  font-size: 30px;
  font-family: "Fredericka the Great", cursive;
}

#text {
  float: right;
  flex-direction: row;
  margin-right: 5%;
  margin-top: 10%;
  font-size: 30px;
  font-family: "Fredericka the Great", cursive;
}

#textbox {
  background-color: rgb(159, 189, 142);
  width: 50%;
  padding: 20px;
  border-radius: 3px;
  margin-top: 150px;
  margin-bottom: 150px;
  margin-left: 3%;
  box-shadow: 5px 5px 5px 0px rgb(161, 152, 152);
}

#paragraphtitle {
  text-align: center;
  font-size: 35px;
  font-family: "Fredericka the Great", cursive;
  border-radius: 4px;
  box-shadow: 5px 5px 0px 0px rgb(161, 152, 152);
}

#boxtext {
  background-color: rgb(159, 189, 142);
  text-align: center;
  font-size: 22px;
  font-family: "Sanchez", serif;
  padding-top: 40px;
  padding-bottom: 40px;
}

#picture {
  border-radius: 4px;
}

#pictureimg {
  margin-left: 50px;
}

#button1 {
  background: rgb(124, 191, 211);
  border: 0;
  padding: 10px;
  color: white;
  margin: 20px 0px 10px 0px;
  width: 100%;
  border-radius: 5px;
  font-size: 15px;
}
</style>

// <script>
export default {
  name: "FeaturedGameCard",
  data() {
    return {
      featuredgame: "Lego Scrabble",
      description: "A Lego version of the popular game Scrabble."
    };
  },

  methods: {
    featuredtitle: function(title) {
      this.featuredgame = title;
    },
    featureddescription: function(sitedescription) {
      this.description = sitedescription;
    }
  }
};
</script>
