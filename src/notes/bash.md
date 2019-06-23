---
date: "2019-06-23"
author: 张凯
tags:
  - Bash
  - Linux
location: 北京
---

# Bash 常见命令

## find

```
find . -type d -empty -delete  # 删除空文件夹
```

## 变量替换（Parameter Substitution）

- `${#var}`: String length
- `${var#Pattern}`: 从 `$var` 前面移除最短匹配 `$Pattern` 的部分
- `${var##Pattern}`: 从 `$var` 前面移除最长匹配 `$Pattern` 的部分
- `${var%Pattern}`: 从 `$var` 后面移除最短匹配 `$Pattern` 的部分
- `${var%%Pattern}`: 从 `$var` 后面移除最长匹配 `$Pattern` 的部分
