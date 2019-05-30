/**
 * 
 */
package cn.stylefeng.guns.generator.modular.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.common.collect.Lists;

import cn.stylefeng.guns.generator.modular.factory.DefaultTemplateFactory;
import cn.stylefeng.roses.core.base.controller.BaseController;

/**   
* 代码生成控制器
* @author weiq
* @date 2019年5月30日 上午10:06:04 
* @version V1.0
*/
@Controller
@RequestMapping("/code")
public class CodeController extends BaseController{
	private static String PREFIX = "/modular/code";
	
	@RequestMapping("")
	public String index(Model model) {
		model.addAttribute("tables", Lists.newArrayList());
		model.addAttribute("params", "");
		model.addAttribute("templates", DefaultTemplateFactory.getDefaultTemplates());
		return PREFIX + "/code.html";
	}
}
