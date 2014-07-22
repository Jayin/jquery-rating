### jquery-rating

a simple rating plugin with pure CSS implement


### Usage
```html
<!-- div group -->
<div >
	<!-- with order number -->
	<div id="1" class="ratenode nomal"></div>
	<div id="2" class="ratenode nomal "></div>
	<div id="3" class="ratenode nomal "></div>
	<div id="4" class="ratenode nomal "></div>
	<div id="5" class="ratenode nomal "></div>
</div>
```

```javascript
//init
$.rating.init();

//or with a callback onChange Callback
$.rating.init(function(cur){
	console.log("current is -->"+cur);
});


//when you want to get the current rating
$.rating.getCurrentRating()
```