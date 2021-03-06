const path = require("path")

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
	[
		"module-resolver",
		{
			"extensions": [
				".js",
				".vue"
			],
			"alias": {
				"@services"   : path.resolve(__dirname, "./src/services"),
				"@components" : path.resolve(__dirname, "./src/components"),
				"@assets"     : path.resolve(__dirname, "./src/assets"),
				"@router"     : path.resolve(__dirname, "./src/router"),
				"@store"   	  : path.resolve(__dirname, "./src/store"),
				"@views"      : path.resolve(__dirname, "./src/views"),
				"@tests"      : path.resolve(__dirname, "./tests"),
			}
		}
	]
]
};
