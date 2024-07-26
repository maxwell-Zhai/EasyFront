---
title: 'try it🎉'
description: 'EasyFront使用文档'
---

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

首先，你可以直接在命令行去使用eslint、prettier、stylelint去检查规范你的项目，无需进行任何额外配置操作。

> 请将你的项目统一放在src目录下

1. `ESLint`：你可以直接运行 ESLint 检查 `src` 目录下的所有 TypeScript 文件：

```bash
npx easyfront eslint
```

  或者，你也可以指定特定的文件或目录：

```bash
  npx easyfront eslint src/file.ts
```

2. `prettier`：你可以直接运行 Prettier 格式化 `src` 目录下的所有 TypeScript 文件：

```bash
npx easyfront prettier
```

同样地，你也可以指定特定的文件或目录：

```bash
npx easyfront prettier src/file.ts
```

3. stylelint：你需要先安装stylelint，然后运行 Stylelint 检查根目录下的所有 Less 文件：

```bash
pnpm add -d stylelint
npx easyfront stylelint
```

   同样地，你也可以指定特定的文件或目录：

```bash
   npx easyfront stylelint styles/file.less
```

接下来，你可以快速创建commit message并自动进行检查，但是你需要一些额外的工作：

> **注意**：如果你自己进行了额外的不符合规则的commit提交，则会报错！

工具会引导你通过交互式提示输入提交信息，确保提交信息符合规范。
你可以直接使用以下命令来辅助生成commit message：

```bash
npx easyfront commit
```

如果你需要使用commitlint对你的commit message进行检验，那么请进行如下操作：
你需要先下载husky，并对其进行初始化

```bash
pnpm add -d husky 
pnpm easyfront init-hooks
```

> **注意**：初始化后将husky中的pre-commit删除，因为我们暂时没有用到pre-commit

接着在你的项目中安装commitlint

```bash
pnpm add -d commitlint
```

然后你需要在你的package.json的script中添加如下代码：

```json
"lint-commit": "easyfront commitlint"
```

现在，commitlint就可以在你提交commit时对你的message进行检查了！

好了，一切准备就绪，你可以使用release去帮助你发布新版本了！

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

### 贡献指南

如果你有兴趣贡献代码，请阅读我们的 [贡献指南](CONTRIBUTING.md)。

### 许可证

该项目基于 MIT 许可证发布。详情请参阅 LICENSE 文件。

## 一些悄悄话

一直以来，**前端工程化推进** 是我们团队内部的一个痛点，早些年的项目经过几次人员变更后就变得 **不可再维护**，代码质量参差不齐，开发效率低下，此外项目验收考核也是一个很要命的问题。
我们越来越希望有一种工具可以统一团队每一个前端项目中有关代码质量，于是我们进行了一系列的改造，最早是通过内部脚手架的方案，这种也是大多数团队的解法，但是随着工期的压缩，有时候会采用注释掉的方法来躲开 *质量监控*。为了减少大家日后返工的频率，我们开发了一套内部工具，可以统一团队每一个前端项目的代码质量，牺牲了很多灵活性，但保证了一致性。

此外，这套方案也提供给社区，目前开源的版本中只启用了 *工程化* 中推荐的插件，对于小团队来说足够受用，也欢迎大家提 **PR** 。

