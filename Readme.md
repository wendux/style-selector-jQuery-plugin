# style-selector-jQuery-plugin
Customer jQuery selector, through which we can choose  the specified CSS style characteristics of the DOM elements.

中文文档：http://www.jianshu.com/p/88c101483a9d

## How to use

Suppose there is a document like this:

```html
<body>
<div id="c" style="font-size:14px">
    <div style="color:#f00; background-color:white;">1</div>
    <div style="color:gray;  font-weight:bold">2</div>
    <div style="color:green;background-color:white;">3</div>
    <div style="color:red;background-color:white;">4
        <div style="font-size: 14px">14px</div>
        <div style="font-size: 15px">15px</div>
    </div>
    <div style="color:blue;font-size:18px;">5</div>
</div>
</body>
```

1. Select all elements with red color :

   ```javascript
   $("#c :css({color:'red'})")
   ```

2. Select all elements the fontSize of which is greater than or equal to 16px:

   ```javascript
    $("#c :css({fontSize:'>=16px'})")
   ```

   you can also use operators  "=="、">"、"<"、">="、"<="、"!=".

3. Select all elements with white color and  backgroundColor yellow:

   ```javascript
   $("#c :css({backgroundColor:'white',color:'yellow'})");
   ```

4. Select all elements with fontSize 14px under the elements with red color:

   ```javascript
   $("#c :css({color:'red'}) :css({fontSize:'14px'})")
   ```

    

All css attributes are supported by ":css" selector.