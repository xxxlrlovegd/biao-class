//谈一谈tsconfig.json这个文件的用途
//想要生成这个tsconfig.json 可以使用tsc --init 这个命令

//include  exclude file 配置编译文件可否进行编译
//include 和 file 都是配置到的文件可以进行编译的 其中 文件名称要用双引号否则会失效 "include":["demo.ts"], "files":["demo.ts"]
//exclude 配置的是不可以进行编译的文件

//tsconfig.json中compilerOptions 配置项
//removeComments:true ——编译的js文件不会有注释
//"strict": true  ——编译的js文件采用严格模式
//"noImplicitAny": true ——TS文件需要注释any类型 不注释tsc也是报错的
//"strictNullChecks":false ——不强制检查 NULL 类型
// "outDir": "./build",  ——打包的js都生成在特定的一个文件夹里,比如build                       
// "rootDir": "./src"     ——rootDir来指定ts文件的位置
//"target":'es5' ,  // 这一项默认是开启的，你必须要保证它的开启，才能转换成功
//"allowJs":true,   // 这个配置项的意思是联通
//sourceMap 信息文件，里面储存着位置信息
//noUnusedLocals：true，开启后我们的程序会直接给我们提示不能这样编写代码，有没有使用的变量。

//https://www.tslang.cn/docs/handbook/compiler-options.html (编译选项详解)
//ts-node 是遵循tsconfig.json文件的


