layui.use(['layer', 'form', 'ax'], function () {
    var $ = layui.$;
    var $ax = layui.ax;
    var layer = layui.layer;
    var form = layui.form;
    
    //监听提交
    form.on('submit(formDemo)', function(data){
      layer.msg(JSON.stringify(data.field));
      return false;
    });
});