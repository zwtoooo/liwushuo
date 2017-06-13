<template>
  <div id="app">
    <router-view></router-view>
    <nav class="tabs">
    	<li class="tab-item" :class="{'active':tabActive==index}" v-for="(item,index) in tabArr" key="index" @click="tabChange(index)">{{item.title}}</li>
    </nav>
  </div>
</template>

<script>
import './assets/reset.css'
import Vue from 'vue'
import Router from './router'
export default {
  name: 'app',
  data(){
  	return{
  		tabActive: 0,
  		tabArr:[
  			{
  				title:"首页",
  				path:"/home"
  			},
  			{
  				title:"分类",
  				path:"/category"
  			},
  			{
  				title:"排行",
  				path:"/rank"
  			},
  			{
  				title:"我的",
  				path:"/me"
  			}
  		]
  	}
  },
  methods:{
  	tabChange(index){
  		this.tabActive = index;
  		Router.push(this.tabArr[index].path);
  	}
  }
}
</script>

<style>
html,body,#app {
	width: 100%;
	height: 100%;
	position: relative;
}
#app .main-content{
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	bottom: 49px;
}
#app .tabs{
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 49px;
	line-height: 49px;
	text-align: center;
	display: flex;
}
#app .tabs>.tab-item{
	flex: 1;
}
#app .tabs>.tab-item.active{
	color: deepskyblue;
	background: greenyellow;
	font-weight: bold;
}
</style>
