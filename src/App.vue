<template>

    <!-- <div class="container"> -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | -->

    <!-- <router-link to="/todo">Todo</router-link> |
    <router-link to="/todo-list">Todo list</router-link>  -->
    
    <!-- </div> -->
 
  <router-view/>
</template>

<style>

body{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
  height: 100vh;
  margin: 0;
  padding: 0;
}
.container {
  margin: auto;
  padding: 0 2rem;
}
.view-btn {
  background-color: rgb(16, 150, 121);
  color: #fff;
  padding: 10px 20px;
  border: none;
  outline: none;
  text-decoration: none;
  font-weight: 600;
  border-radius: 5px;
  margin: 0px 5px ;
  cursor: pointer;
  text-align: center;
}
/* .nav {
  background-color: white;
  padding: 15px 5px;
  box-shadow: 0px 5px 2px 0 #fff;
} */
/* .container{
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
} */

</style>
