layui.use(['layer', 'form', 'ax'], function () {
    var $ = layui.$;
    var $ax = layui.ax;
    var layer = layui.layer;
    var form = layui.form;
    
    form.on('select(tableName)', function(data){
		console.log(data);
		var preSize = $("#ignoreTabelPrefix").val().length;
	    $("#tableName").val(data.value);
	    $("#className").val(Feng.underLineToCamel(data.value.substring(preSize)));
	});
    
    //监听提交
    form.on('submit(formDemo)', function(data){
      $("#codeForm input[name=templateName]:checked").each(function() {
    	  data.field[$(this).val()] = true;
      })
      layer.msg(JSON.stringify(data.field));
      console.log(data.field)
      return false;
    });
});