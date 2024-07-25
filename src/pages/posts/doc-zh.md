---
layout: ../../layouts/MarkdownPostLayout.astro
title: '文档'
pubDate: 2024-07-22
description: 'EasyFront使用文档'
author: 'maxwell'
tags: ["EasyFront", "document", "learning in public"]
---

# EasyFront

## 简介

这是一个用于一站式配置前端工程化项目的工具，主要用于代码质量管理、代码格式化、样式检查和版本发布。包含 ESLint、Prettier、Stylelint、Commitizen、Husky 和 Release-it的配置和使用指南。

在提交代码时，我们使用 Commitizen 和 Gitmoji 的提交信息格式，确保提交信息的清晰和一致。提交信息的格式如下：

```php
<emoji> <type>(<scope>): <subject>

<body>

BREAKING CHANGE: <breaking change description>

<footer>
```

### 格式说明

- **Emoji**: 表示提交类型的图标。
- **Type**: 提交的类型，如 `feat`, `fix`, `docs` 等。
- **Scope**: 提交的影响范围，如具体的模块或文件名称。
- **Subject**: 提交的简短描述。
- **Body**: 提交的详细描述，可选。
- **BREAKING CHANGE**: 重大变更的描述，应包含在 `BREAKING CHANGE:` 之后。可选。
- **Footer**: 关联的任务或 issue 编号，如 `fix #123`, `close #123`。可选。

### 提交类型

我们使用以下类型的提交信息，每个类型都有相应的 emoji 图标：

- **feat**: ✨ 新功能
- **fix**: 🐛 修复 bug
- **docs**: 📝 文档变更
- **style**: 💎 代码格式（不影响代码运行的变动）
- **refactor**: ♻️ 代码重构（既不是新增功能，也不是修改 bug）
- **perf**: 📈 性能优化
- **test**: 🧪 添加测试或修改现有测试
- **build**: 🏗️ 构建系统或外部依赖的变动（例如：gulp, npm）
- **ci**: 📦 CI 配置文件和脚本的变动（例如：Travis, Circle）
- **chore**: 🧹 其他不修改 src 或测试文件的变动
- **revert**: ⏪️ 回滚某次提交

#### 示例

1. 添加新功能：

```sql
✨ feat(module): add new feature for processing data

Added a new function to process data more efficiently.
```

2. 修复 bug：

```sql
🐛 fix(module): fix issue with data processing

Fixed the data processing bug that caused incorrect results.
```

3. 更新文档：

```sql
📝 docs: update README with installation instructions

Updated the README file to include detailed installation instructions.
```

4. 性能优化：

```sql
📈 perf(module): improve data processing performance

Optimized the data processing algorithm to reduce execution time by 30%.
```

5. 回滚提交：

```sql
⏪️ revert: revert "add new feature for processing data"

This reverts commit abc1234.
```

## 使用

### 安装

将easyfront进行本地安装

```bash
npm install @maxwell-zhai/easyfront --save-dev

yarn add @maxwell-zhai/easyfront --dev

pnpm add @maxwell-zhai/easyfront --save-dev
```

### CLI

> 请将你的项目统一放在src目录下

##### ESLint

你可以直接运行 ESLint 检查 `src` 目录下的所有 TypeScript 文件：

```bash
npx easyfront eslint
```

或者，你也可以指定特定的文件或目录：

```bash
npx easyfront eslint src/file.ts
```

##### Prettier

你可以直接运行 Prettier 格式化 `src` 目录下的所有 TypeScript 文件：

```bash
npx easyfront prettier
```

同样地，你也可以指定特定的文件或目录：

```bash
npx easyfront prettier src/file.ts
```

##### StyleLint

你可以直接运行 Stylelint 检查根目录下的所有 Less 文件：

```bash
pnpm add -d stylelint
npx easyfront stylelint
```

同样地，你也可以指定特定的文件或目录：

```bash
npx easyfront stylelint styles/file.less
```

##### commit

接下来，你可以快速创建commit message, 工具会引导你通过交互式提示输入提交信息，确保提交信息符合规范。：

你可以直接使用以下命令来辅助生成commit message：

```bash
npx easyfront commit
```

> 提示: 在commit之前别忘了将文件提交到暂存区哦

##### commitlint

如果你需要使用**commitlint**对你的commit message进行检验，那么请进行如下操作：

> **注意**：如果你自己进行了额外的不符合规则的commit提交，则会报错！

首先需要初始化husky

```bash
npx easyfront init-hooks
```

> **注意**：初始化后将husky中的pre-commit删除，因为我们暂时没有用到pre-commit

然后你需要在你的package.json的script中添加如下代码：

```json
"lint-commit": "easyfront commitlint"
```

现在，commitlint就可以在你提交commit时对你的message进行检查了！

##### release

好了，一切准备就绪，你可以使用**release**去帮助你发布新版本了！

```bash
npx easyfront release
```

### 自定义配置

你可以根据项目需求自定义配置文件，例如修改 ESLint 、Stylelint规则或 Prettier 选项。

### 常见问题

**如何添加新的 ESLint 规则？**

在 `eslintrc.config.js` 中添加或修改规则：

```javascript
module.exports = {
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'error',
  },
};
```

**如何使用其他的 Prettier 插件？**

在 `prettierrc.config.js` 中添加插件配置：

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 许可证

该项目基于 MIT 许可证发布。详情请参阅 LICENSE 文件。