# 前端开发工程师简历

基于 Vue 3、TypeScript、Vite 的个人简历，包含个人简介、核心技能、工作经历、项目经历、组件库与个人作品、教育经历。

## 本地运行

```sh
pnpm install
pnpm dev
```

## 构建与预览

```sh
pnpm build
pnpm preview
```

构建结果输出到 `dist/`，默认部署路径为 `/resume/`，可在 `vite.config.ts` 中调整 `base`。

## 内容维护

- `src/data.ts`：姓名、联系方式、个人简介、教育经历。
- `src/components/Skills/list.ts`：核心技能。
- `src/components/Experience/list.ts`：工作经历。
- `src/components/Project/list.ts`：7 个项目的介绍、技术栈、时间与工作成果。
- `src/components/Personal/list.ts`：组件库、博客与外部链接。
- `src/assets/reset.scss`：桌面、移动端及 A4 打印样式。

内容依据《前端开发工程师简历完善版》更新，保留原项目中的姓名和联系方式。原文未提供的项目日期暂按时间线填写，页面直接展示日期；后续可在 `src/components/Project/list.ts` 中按实际经历调整。支持 `**重点文字**` 高亮，内容以文本安全渲染。

页面顶部“打印 / 保存 PDF”调用浏览器打印功能，可选择保存为 PDF；建议使用 A4 纸张并关闭浏览器自带页眉页脚。
