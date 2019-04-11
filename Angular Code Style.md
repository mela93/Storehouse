1. 文件名 遵循 feature.type.ts  
feature: `app.module.ts` 单词用-分隔 `list-hero.component.ts`  
type: .module, .component, .service, .pipe, .routes

2. 类名使用大驼峰  
属性,方法,常量使用小驼峰  

3. 项目文件与第三方文件空一行  

4. 可复用模块放在shard中 `app/shared/shared.module.ts`

5. 逻辑放service里, component.ts只写展示逻辑 (?)
