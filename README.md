# easynce

这是一个多仓管理的低代码平台的简化实现版本,旨在于学习低代码相关核心知识。 该平台面向人员为运营人员，因此并未做出码等操作，后续可能会加

## 快捷命令

1. 安装项目依赖 `pnpm i -r`
2. 清除依赖 `pnpm clean`
3. 构建UI组件 `pnpm build:vu2` | `pnpm build:vue3`  | `pnpm build`

## 规范

1. `pnpm husky init` 初始化 hook脚本
2. `pnpm git cz` 进行规范提交提示

## 常见问题

1. 如果build 失败 提示版本混乱 则运行 `pnpm clean && pnpm i -r` 重新打包即可
