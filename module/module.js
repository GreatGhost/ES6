//此乃现代模块的基石

(function(window){
    let data='www.baidu.com';
    function foo(){
        console.log(data);
        $('.demo').css({
            width:'100px',
            height:'100px',
            border:'1px solid red'
        })
    }
    function bar(){
        console.log('hello');
    }
    window.myModule={foo,bar}
})(window,jQuery);