# APM

## 当某个产品按钮点击无响应，你怎么排查问题？

### 一般思路：（前端-接口-服务）

检查浏览器是否有报错，点击按钮时是否触发了 js 异常 => 检查接口是否正确返回数据，接口是否响应 => 接口报错，检查接口内逻辑是否有问题

### 真实场景

1. 运营商问题，比如用户的运营商劫持了js，导致前端代码出错
2. CDN 的某个节点缓存出现问题，导致一个老版本的js 上线了
3. 用户的机器浏览器版本正好有一个 bug，代码触发了这个 bug
4. 服务所在的某个机房某台机器故障了（着火了），导致服务挂掉了
5. 服务依赖的一个第三方服务，欠费了

## APM概念

- 终端用户体验-反映用户的真实体验
- 应用架构映射-从监控逆向分析出真实链路
- 应用事务分析-能从一个唯一的线索
- （用户）找出整条事务或操作
- 深度应用诊断-精准定位问题
- 分析与报告-提供实时精准的大数据查询和可视化

### APM组成

APM 包括 Agent, Monitor 及 Dashboard/Console

Agent 用于上报数据，Monitor 用于收集数据，Dashboard 用于展示数据

# Aliyun Nodejs



## DNS污染

```shell
Resolving raw.githubusercontent.com (raw.githubusercontent.com)... ::, 0.0.0.0
Connecting to raw.githubusercontent.com (raw.githubusercontent.com)|::|:443... failed: Connection refused.
Connecting to raw.githubusercontent.com (raw.githubusercontent.com)|0.0.0.0|:443... failed: Connection refused.
```







