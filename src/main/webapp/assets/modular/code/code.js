layui.use(["layer", 'ztree', "form", "ax"], function() {
  var $ = layui.$;
  var $ax = layui.ax;
  var layer = layui.layer;
  var form = layui.form;
  var $ZTree = layui.ztree;

  form.on("select(tableName)", function(data) {
    console.log(data);
    var preSize = $("#ignoreTabelPrefix").val().length;
    $("#tableName").val(data.value);
    $("#className").val(Feng.underLineToCamel(data.value.substring(preSize)));
  });

  //监听提交
  form.on("submit(formDemo)", function(data) {
    $("#codeForm input[name=templateName]:checked").each(function() {
      data.field[$(this).val()] = true;
    });
    layer.msg(JSON.stringify(data.field));
    console.log(data.field);
    return false;
  });

  /**
   * 初始化
   */
  var Code = {
    ztreeInstance: null,
    submitData: {}
  };

  /**
   * 点击父级编号input框时
   */
  Code.onClickDept = function(e, treeId, treeNode) {
    $("#parentMenuName").attr("value", Code.ztreeInstance.getSelectedVal());
  };

  var ztree = new $ZTree("pcodeTree", "/menu/selectMenuTreeList");
  ztree.bindOnClick(Code.onClickDept);
  ztree.init();
  Code.ztreeInstance = ztree;
  $("#pcodeTree").css("width", $("#parentMenuName").css("width"));
  $("#parentMenuName").click(function() {
    alert(11)
    Feng.showInputTree("parentMenuName", "pcodeTreeDiv", 15, 34);
  })
});
