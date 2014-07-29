### jquery-rating

a simple rating plugin with pure CSS implement


### Usage
see [DEMO](http://jayin.github.io/jquery-rating/demo.html)

```html

<!-- div group -->
    <div class="group1">
        <!-- rattings-->
        <div   class="ratenode nomal"></div>
        <div   class="ratenode nomal "></div>
        <div   class="ratenode nomal "></div>
        <div   class="ratenode nomal "></div>
        <div   class="ratenode nomal "></div>
    </div>
    <div >
        <p id="info" >0</p>
    </div>
```

```javascript
//start it
$('.group1').start();

//or with a callback 
$('.group1').start(function(cur){
        console.log(cur);
         $('#info').text(cur);
});


//when you want to get the current rating
$('.group1').getCurrentRating()
```
