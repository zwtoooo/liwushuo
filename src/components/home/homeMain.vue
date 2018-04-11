<template>
	<div class="main-content home-main">
		home-main
	</div>
</template>

<script>
import Vue from 'vue'
import http from 'vue-resource'
Vue.use(http);
Vue.http.interceptors.push((request, next) => {
 
	console.log(request.url)  
	console.log('test git')
	next();
});

export default {
	name: "homeMain",
	data(){
		return{
			bannerData:[]
		}
	},
	mounted(){
		this.$http.get('https://api.liwushuo.com/v2/banners?channel=iOS')
		.then(function(data){
			console.log(data);
		})
	}
}
</script>

<style>
	
</style>