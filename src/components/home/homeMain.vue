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
	next();
});

console.log('arvin zhou test git!');

function logUser() {
	alert('arvin zhou');
}
logUser();

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