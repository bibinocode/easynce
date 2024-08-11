module.exports = {
  // 指定预设
  preset: 'angular',
  // 自定义解析器选项
  parserOpts: {
    headerPattern: /^(\w*)(?:\(([\w$.\-*/ ]*)\))?: (.*)$/, // 自定义提交信息头部的解析规则
    headerCorrespondence: ['type', 'scope', 'subject'], // 映射头部解析结果到这些字段
    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'], // 捕获破坏性变更的关键字
  },
  // 自定义生成器选项
  writerOpts: {
    transform: (commit) => {
      let type = commit.type
      if (type === 'feat') {
        commit.type = 'Features'
      } else if (type === 'fix') {
        commit.type = 'Bug Fixes'
      } else if (type === 'perf') {
        commit.type = 'Performance Improvements'
      } else if (type === 'revert') {
        commit.type = 'Reverts'
      } else if (type === 'chore') {
        commit.type = 'Chore'
      } else if (!type || type === 'chore') {
        return
      }
      return commit
    },
    groupBy: 'type', // 按照类型组织提交
    commitGroupsSort: 'title', // 按标题排序提交组
    commitsSort: ['scope', 'subject'], // 在组内按范围和主题排序提交
  },
}
