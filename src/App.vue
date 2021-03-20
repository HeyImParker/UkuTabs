<template>
  <div id="app">
    <h1>Ukulele Tabs</h1>
    <div id="nav">
      <router-link to="/">Song List</router-link> |
      <router-link to="/tabs">Tabs Sheet</router-link>
    </div>
    <router-view/>
  <div class="footer">
        <p>https://github.com/HeyImParker/UkuTabs</p>
  </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-bottom: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
