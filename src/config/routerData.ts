/**
 * 若为后端返回数据那么数据及必返回如下 true false 也可以用0 和 1代替，必须为数值或者number
 * path					必填
 * component		必填
 * name					选填 必须英文，默认不展示，直接replaceAll '/'
 * title				必填 菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 * isLink   		是否超链接菜单与 isIframe 互斥
 * isIframe 		是否内嵌窗口与 isLink 互斥
 * address 			当 isLink isIframe两者为true时此项必填
 * isHide   		是否隐藏此路由
 * isKeepAlive	是否缓存组件状态
 * isAffix  		是否固定在 tagsView 栏上
 * roles    		仅仅当前端控制权限时，此项必须
 * icon     		必填 菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 */
export default {
	menus: [
		{
			id: 1,
			path: "home",
			component: "home/Home",
			name: "message.menu.home",
			title: "message.menu.home",
			icon: "icon-home",
			isLink: false,
			isIframe: false,
			address: "",
			isAffix: true,
			isKeepAlive: true,
			isDisable: false,
			isHide: false,
			isHideSubMenu: false,
			roles: ["admin", "system"],
			children: [],
		},
		{
			id: 9,
			path: "system",
			component: "layout/Index",
			name: "message.menu.system",
			title: "message.menu.system",
			icon: "icon-setting",
			isLink: false,
			isIframe: false,
			address: "",
			isAffix: false,
			isKeepAlive: false,
			isDisable: false,
			isHide: false,
			isHideSubMenu: false,
			roles: ["admin", "system"],
			children: [
				{
					id: 91,
					path: "user",
					component: "system/user/UserList",
					name: "message.menu.systemUser",
					title: "message.menu.systemUser",
					icon: "icon-user",
					isLink: false,
					isIframe: false,
					address: "",
					isAffix: false,
					isKeepAlive: false,
					isDisable: false,
					isHide: false,
					isHideSubMenu: true,
					roles: ["admin", "system"],
					children: [],
				},
				{
					id: 92,
					path: "role",
					component: "system/role/RoleList",
					name: "message.menu.systemRole",
					title: "message.menu.systemRole",
					icon: "icon-user",
					isLink: false,
					isIframe: false,
					address: "",
					isAffix: false,
					isKeepAlive: false,
					isDisable: false,
					isHide: false,
					isHideSubMenu: true,
					roles: ["admin", "system"],
					children: [],
				},
				{
					id: 93,
					path: "department",
					component: "system/department/DepartmentList",
					name: "message.menu.systemDepartment",
					title: "message.menu.systemDepartment",
					icon: "icon-user",
					isLink: false,
					isIframe: false,
					address: "",
					isAffix: false,
					isKeepAlive: false,
					isDisable: false,
					isHide: false,
					isHideSubMenu: true,
					roles: ["admin", "system"],
					children: [],
				},
				{
					id: 94,
					path: "job",
					component: "system/job/JobList",
					name: "message.menu.systemJob",
					title: "message.menu.systemJob",
					icon: "icon-user",
					isLink: false,
					isIframe: false,
					address: "",
					isAffix: false,
					isKeepAlive: false,
					isDisable: false,
					isHide: false,
					isHideSubMenu: true,
					roles: ["admin", "system"],
					children: [],
				},
				{
					id: 99,
					path: "menu",
					component: "system/menu/MenuList",
					name: "message.menu.systemMenu",
					title: "message.menu.systemMenu",
					icon: "icon-layout",
					isLink: false,
					isIframe: false,
					address: "",
					isAffix: false,
					isKeepAlive: false,
					isDisable: false,
					isHide: false,
					isHideSubMenu: true,
					roles: ["admin", "system"],
					children: [
						{
							id: 941,
							path: "add",
							component: "system/menu/MenuAdd",
							name: "message.menu.systemMenuAdd",
							title: "message.menu.systemMenuAdd",
							icon: "icon-layout",
							isLink: false,
							isIframe: false,
							address: "",
							isAffix: false,
							isKeepAlive: false,
							isDisable: false,
							isHide: true,
							isHideSubMenu: false,
							roles: ["admin", "system"],
							children: [],
						},
					],
				},
			],
		},
		{
			id: 9900,
			path: "demo",
			component: "layout/Index",
			name: "message.menu.demo",
			title: "message.menu.demo",
			icon: "icon-changyongshili",
			isLink: false,
			isIframe: false,
			address: "",
			isAffix: true,
			isKeepAlive: true,
			isDisable: false,
			isHide: false,
			isHideSubMenu: false,
			roles: ["admin", "system"],
			children: [
				{
					id: 99001,
					path: "icon",
					component: "demo/icon/Iconify",
					name: "message.menu.demoIcon",
					title: "message.menu.demoIcon",
					icon: "icon-appstore",
					isLink: false,
					isIframe: false,
					address: "",
					isAffix: true,
					isKeepAlive: true,
					isDisable: false,
					isHide: false,
					isHideSubMenu: true,
					roles: ["admin", "system"],
					children: [],
				},
				{
					id: 99002,
					path: "anim-css",
					component: "demo/animation/AnimationCss",
					name: "message.menu.demoAnimaCss",
					title: "message.menu.demoAnimaCss",
					icon: "icon-appstore",
					isLink: false,
					isIframe: false,
					address: "",
					isAffix: true,
					isKeepAlive: true,
					isDisable: false,
					isHide: false,
					isHideSubMenu: true,
					roles: ["admin", "system"],
					children: [],
				},
			],
		},
		{
			id: 9901,
			path: "link",
			component: "layout/window/Link",
			name: "message.menu.testLink",
			title: "message.menu.testLink",
			icon: "icon-home",
			isLink: true,
			isIframe: false,
			address: "https://cn.bing.com/",
			isAffix: true,
			isKeepAlive: true,
			isDisable: false,
			isHide: false,
			isHideSubMenu: false,
			roles: ["admin", "system"],
			children: [],
		},
		{
			id: 9902,
			path: "iframe",
			component: "layout/window/Iframe",
			name: "message.menu.testIframe",
			title: "message.menu.testIframe",
			icon: "icon-home",
			isLink: false,
			isIframe: true,
			address: "https://nodejs.org/zh-cn/",
			isAffix: true,
			isKeepAlive: true,
			isDisable: false,
			isHide: false,
			isHideSubMenu: false,
			roles: ["admin", "system"],
			children: [],
		},
	],
};
