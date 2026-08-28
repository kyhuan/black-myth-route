# Black Myth Route 产品需求文档（PRD）

> 版本：v1.0（可进入设计与开发）  
> 日期：2026-08-28  
> 目标市场：全球用户；首版支持英文与简体中文，英文为默认语言  
> 首发游戏：《Black Myth: Wukong》  
> 品牌 / 域名：Black Myth Route / `blackmythroute.cc`  
> 产品形态：免费、移动端优先的游戏进度追踪与 Boss 决策工具

---

## 0. 结论先行

### 0.1 是否值得做

**值得做，但必须以工具站切入，不做传统攻略 Wiki。**

《Black Myth: Wukong》已经进入成熟期，不再适合靠“新闻 + 通用攻略 + 地图”抢首发流量。当前仍然存在的稳定需求集中在三类任务：

1. 我还漏了什么，怎样完成 100%；
2. 我卡在某个 Boss，当前章节能用什么配置；
3. 我接下来应该做什么，哪些内容即将错过。

Black Myth Route 的首版应以**完整进度追踪器**为核心，以**Boss Solver**承接高意图搜索，再通过“Next Best Action”把两者连接成一个闭环。

### 0.2 一句话定位

> Black Myth Route is an unofficial progression companion that tells Black Myth players what they missed, what to equip, and what to do next.

中文释义：帮助黑神话玩家知道“漏了什么、该怎么配装、下一步做什么”的非官方进度伴侣。

### 0.3 首版核心价值闭环

```text
从搜索或首页进入
  → 选择当前章节 / 周目 / Boss
  → 建立个人进度
  → 获得易错过提醒与下一步建议
  → 查看当前可获得的 Boss 配装
  → 勾选完成并保存在本机
  → 回访继续推进
```

### 0.4 P0 首版范围

- 六章、隐藏区域、NG+ 与 Challenge 相关内容的完整结构化进度清单；
- 无需注册，本地自动保存；
- 易错过内容、前置条件、周目限制和剧透保护；
- 全 Boss 索引，首发完成 15 个高难 / 高搜索 Boss 的详细 Solver；
- 根据章节、周目、打法偏好和已有装备给出可获得的配装建议及替代件；
- 自动生成“下一步建议”；
- 英文 SEO 页面、来源与纠错机制、完整法律与免责声明页面。
- 英文 / 简体中文完整界面与内容，语言切换保持当前页面并记住选择。

### 0.5 明确不做

- 不在首版做互动地图；
- 不做新闻站、论坛或 Discord 替代品；
- 不做需要上传游戏存档的扫描器；
- 不做生成式 AI 聊天机器人；
- 不在首版做账户、订阅或支付；
- 不搬运官方美术、竞品地图、攻略原文或视频；
- 不承诺“官方”“绝对最强”“保证通关”或“100% 永远准确”。

### 0.6 北极星指标

**Weekly Active Routes（WAR）**：一周内至少完成一次“勾选进度、生成 Boss 建议或点击下一步”的独立本地 Route。

---

## 1. 市场概述

### 1.1 市场状态

《Black Myth: Wukong》于 2024 年发售。2026 年 8 月抽样时，Steam 页面仍显示大量近期评价与很高的整体评价量，说明它不是只剩历史搜索量的短期热点；但其搜索需求已经从“发售信息”转向“通关、收集、配装和回流玩家”。来源：[Steam 商店页](https://store.steampowered.com/app/2358720/Black_Myth_Wukong/)。

官方在 2024 年 12 月加入了 Journeyer's Chart 和 Challenge 模式，降低了“完全没有地图”的原始痛点，同时增加了 Boss 重战、Gauntlet 与新装备的深度内容。来源：[官方 Steam 更新记录](https://steamcommunity.com/app/2358720/allnews/?l=english)。

Game Science 已公开《Black Myth: Zhong Kui》，表明“Black Myth”是可继续扩展的系列，而不是单一游戏名称。Black Myth Route 可以从《Wukong》起步，但信息架构必须允许未来增加新游戏。来源：[Game Science《Black Myth: Zhong Kui》页面](https://www.gamesci.cn/zhongkui/)。

### 1.2 四项机会快筛

| 判断项 | 结论 | 依据 |
|---|---|---|
| 长期还是短期需求 | 中等偏强 | 成熟单机游戏仍有新玩家、成就玩家和 NG+ 玩家；系列已有后续作品 |
| 小站能否进入 SERP | 可以 | `blackmyth.guide`、独立计算器、地图工具和 Nexus 工具均能获得可见度 |
| 用户是否愿意付费 | 偏弱 | 玩家会为同步、便利或去广告付费，但反感核心清单被过早锁住 |
| MVP 是否低成本实现 | 强 | P0 可用静态数据、本地存储与规则引擎实现，无需昂贵 API |

综合结论：**3 项成立，继续；商业化必须后置。**

### 1.3 目标关键词

月搜索量、CPC、KD 尚未取得 Ahrefs / Semrush / Google Keyword Planner 的可靠数据，全部标记为**待验证**。在拿到真实数据前，不把任何流量预测写成事实。

| 关键词簇 | 搜索意图 | 对应页面 | 优先级 | Volume / CPC / KD |
|---|---|---|---:|---|
| black myth wukong checklist | 工具 / 完成度 | `/wukong/checklist` | P0 | 待验证 |
| black myth wukong 100 completion | 工具 + 信息 | `/wukong/checklist`、完成指南 | P0 | 待验证 |
| black myth wukong missables | 风险规避 | `/wukong/guides/missables` | P0 | 待验证 |
| black myth wukong boss guide | 信息 + 决策 | `/wukong/bosses` | P0 | 待验证 |
| how to beat [boss] | 强任务型 | `/wukong/bosses/[slug]` | P0 | 待验证 |
| [boss] best build | 强任务型 | Boss Solver 页面 | P0 | 待验证 |
| black myth wukong best build | 比较 / 决策 | `/wukong/builds` | P1 | 待验证 |
| black myth wukong build planner | 工具型 | `/wukong/builds/planner` | P1 | 待验证 |
| black myth wukong ng+ checklist | 工具型 | `/wukong/checklist?cycle=ng-plus` | P1 | 待验证 |
| black myth wukong interactive map | 工具型、竞争激烈 | 不做首版核心页 | NOT-DO | 待验证 |

### 1.4 趋势判断

- **短期**：近期更新、折扣、Xbox / 新平台玩家会带来波峰；
- **中期**：难 Boss、100% 完成、NG+ 和 Challenge 形成稳定长尾；
- **长期**：系列新作发布时，品牌和数据架构可复用；
- **风险**：单个买断制游戏的自然流量会衰减，因此 P0 必须在 4 周内上线验证，而不是先建设大型 Wiki。

---

## 2. SERP 与竞品分析

### 2.1 SERP 实扫说明

实扫日期：2026-08-28。对象为英文网页搜索结果。排名会受地区和个性化影响，以下分布用于识别搜索意图，不作为固定排名声明。

| 查询 | 样本结果结构 | 意图判断 | 产品要求 |
|---|---|---|---|
| black myth wukong boss guide | 以长篇攻略、Boss 列表和视频为主，工具极少 | 信息型 + 临场决策 | Boss 页面首屏直接给准备清单和推荐配置 |
| black myth wukong best builds / build planner | 多数为文章，少量计算器 | 比较型 + 工具型 | 推荐必须说明适用章节、Boss 和替代件 |
| black myth wukong checklist tracker | 表格、下载工具、视频和少量在线清单并存 | 明确工具型 | 首屏直接开始，免登录、免费保存 |
| black myth wukong interactive map | Game8、Fandom、Wand 等成熟地图产品密集 | 工具型但拥挤 | 不在首版正面竞争 |

### 2.2 主要竞品

| 竞品 | 类型 | 优点 | 缺口 / 可切入点 |
|---|---|---|---|
| [PowerPyx Boss Guide](https://www.powerpyx.com/black-myth-wukong-boss-guide-all-bosses/) | 大型攻略内容 | 全 Boss、顺序清楚、SEO 强 | 静态阅读；无个人进度、无章节可用性过滤 |
| [Black Myth Guide](https://blackmyth.guide/en/categories/bosses/) | 独立英文攻略站 | 内容持续更新，Boss 覆盖深 | 仍以文章为主；缺少个人 Route 与交互式推荐 |
| [Game8](https://game8.co/games/Black-Myth-Wukong) | 大型 Wiki | 内容、地图、物品和配装覆盖广 | 页面重、信息分散；个性化与进度闭环弱 |
| [Wand Maps](https://wand.com/maps/black-myth-wukong) | 地图 + 清单工具 | 19 张地图、分区清单、App 高级能力 | 强地图而非 Boss 决策；账户 / App 路径更重 |
| [Action RPG Calculator](https://actionrpgcalculator.com/black-myth-wukong/build-calculator/) | Build Calculator | 有数值输入和推荐器 | 输入抽象，未围绕“我卡在这个 Boss、当前能拿什么”组织 |
| [WukongBossTracker](https://www.nexusmods.com/blackmythwukong/mods/1330?tab=docs) | Windows 桌面工具 | Boss 清单、章节进度、missable 过滤、个人备注 | 需要下载和运行；存在安全提示与跨设备摩擦；无 SEO 内容 |
| 社区 Google Sheet / Excel | 手工清单 | 数据丰富、自由复制 | 移动端差、排序与版本维护困难、没有动态下一步 |

### 2.3 三层竞品

| 层级 | 竞品 |
|---|---|
| Tier 1：直接竞品 | 在线 checklist、WukongBossTracker、Wand checklist、Build Calculator |
| Tier 2：相邻方案 | Game8、PowerPyx、Fandom、YouTube、Reddit、Steam Guides |
| Tier 3：现状 / 不做 | 玩家靠记忆、截图、浏览器书签、Excel 或反复搜索 |

### 2.4 用户痛点证据

1. 玩家明确寻找“最新、能记录已获得物品和成就”的 tracker，并抱怨某工具勾选 50 项后要求付费：[Reddit：preferred checklist/tracker](https://www.reddit.com/r/BlackMythWukong/comments/1ix83an/anybody_have_a_preferred_checklisttracker/)。
2. 玩家在第二章后需要回头补 Boss 和物品，并询问如何跟踪 100% 进度：[Reddit：how to track 100%](https://www.reddit.com/r/BlackMythWukong/comments/1exsj43/length_of_the_game_and_how_to_track_the_100/)。
3. 社区清单用户要求按获取顺序和章节排序，而不是简单按字母排序；评论也持续报告漏项、NG+ 和版本问题：[Reddit：Checklist Info Sheet](https://www.reddit.com/r/BlackMythWukong/comments/1eyyt7e/black_myth_wukong_checklist_info_sheet/)。
4. “最佳配装”没有唯一答案，实际依赖打法、Boss 和可获得装备，这支持做条件化推荐而非单一 Tier List：[Reddit：What is the BEST build?](https://www.reddit.com/r/BlackMythWukong/comments/1u1ggek/what_is_the_best_build/)。

### 2.5 市场空位

Black Myth Route 不以“内容更多”竞争，而以以下组合竞争：

- **免登录即用**：先用，后保存；
- **按游戏推进顺序组织**：章节、前置、周目、锁定点；
- **可获得性约束**：不向第二章玩家推荐第六章或 NG+ 装备；
- **下一步而非百科**：把大量条目压缩成最值得做的 1–3 件事；
- **剧透安全**：只展示用户当前可见内容；
- **来源可追溯**：每条高风险信息显示校验版本和来源。

---

## 3. 目标用户与场景

### 3.1 用户 A：首次通关的完成度玩家（主力用户）

| 维度 | 定义 |
|---|---|
| Who | 已进入第二章以后，不想漏支线、Boss、精魄或成就的 PC / 主机玩家 |
| Pain | 游戏内容多、部分事件有锁定条件；普通攻略分散且容易剧透 |
| Current | Google、Reddit、YouTube、Google Sheet、截图 |
| Trigger | 章节结束、准备进入下一章、发现 Journal 有空缺 |
| Hangout | Google、Reddit、Steam Community、YouTube、Discord |
| Willingness | 愿意免费使用；可能为云同步、去广告和多存档一次性付费 |

核心 JTBD：

> 当我准备推进主线时，我想快速确认本章还有什么会错过，这样我不必在 NG+ 才发现遗漏。

### 3.2 用户 B：卡 Boss 的普通玩家

| 维度 | 定义 |
|---|---|
| Who | 被具体 Boss 卡住，但不想研究整套数值系统的玩家 |
| Pain | 搜索结果给出“最强后期配装”，但当前章节拿不到；视频太长 |
| Current | 搜 Boss 名、看 YouTube、照搬一套并不适用的 Build |
| Trigger | 连续失败 5–10 次，或不知道应该先完成哪条支线拿关键法宝 |
| Willingness | 付费意愿弱；愿意使用广告支持的免费工具 |

核心 JTBD：

> 当我卡在一个 Boss 时，我想知道以我当前进度能拿到的最佳准备方案，而不是看到一套无法获得的终局装备。

### 3.3 用户 C：NG+ / Challenge 回流玩家

| 维度 | 定义 |
|---|---|
| Who | 已通关，回来补成就、跑 NG+ 或 Gauntlet 的玩家 |
| Pain | 忘记旧进度；不同周目和更新新增内容混在一起 |
| Current | 旧表格、存档记忆、零散 Patch Notes |
| Trigger | 游戏更新、折扣、重新安装、准备全成就 |
| Willingness | 比首次玩家略高，可能购买多 Route、云同步或去广告 |

核心 JTBD：

> 当我回到游戏时，我想恢复上次进度并只看到这个周目还值得做的内容。

### 3.4 非目标用户

- 只想看剧情解析或新闻的读者；
- 需要完整互动地图或实时定位的玩家；
- 寻找 MOD、作弊或存档修改工具的用户；
- 需要日语、韩语或其他首版未支持语言的用户。

---

## 4. 产品定位与消息体系

### 4.1 六步定位

1. **替代方案**：Wiki、地图、攻略文章、视频、表格、记忆；
2. **独有属性**：进度状态 + 章节可用性 + Boss 推荐 + 下一步；
3. **价值映射**：减少遗漏、减少无效搜索、避免拿不到装备、降低剧透；
4. **最佳用户**：第二章以后、追求高完成度的英文玩家；
5. **市场品类**：不是 Wiki，而是 `progression companion`；
6. **为什么现在**：首发热潮已过，结构化长尾工具比追新闻更可持续，且系列已有扩展。

### 4.2 定位语句

```text
FOR Black Myth players who want to finish more without spoiling the journey,
Black Myth Route IS an unofficial progression companion
THAT tracks every important objective and recommends the next useful action.
UNLIKE static guides, spreadsheets, and endgame-only build lists,
Black Myth Route adapts to the player's chapter, cycle, progress, and playstyle.
```

### 4.3 首页消息层级

| 层级 | 推荐文案 |
|---|---|
| Eyebrow | Unofficial Black Myth Companion |
| Headline | **Know What to Do Next.** |
| Subhead | Track every missable, get boss-ready builds, and finish Black Myth: Wukong without losing your place. |
| Primary CTA | **Start My Route** |
| Secondary CTA | **Find a Boss Build** |
| Benefit 1 | Never miss a chapter lockout |
| Benefit 2 | Use gear you can actually obtain |
| Benefit 3 | Save progress without an account |
| Benefit 4 | Hide spoilers beyond your journey |

### 4.4 首发可用的证明

上线初期没有用户量、评分或推荐语，不伪造社会证明。使用可验证的产品证明：

- Complete chapter-by-chapter tracker；
- No signup required；
- Progress saved on this device；
- Sources and patch version shown；
- Export your route anytime。

### 4.5 禁词与表达边界

不得使用：

- Official / Official Partner；
- Endorsed by Game Science；
- Guaranteed win / unbeatable build；
- The only correct build；
- 100% accurate forever；
- 复制官方宣传语、Logo 字体或商店素材形成官方错觉。

可使用：

- Unofficial / fan-made；
- Recommended for / works well against；
- Verified for game version X；
- Community correction welcomed；
- Alternative if you do not own X。

---

## 5. 功能规划

### 5.1 功能优先级总览

| 模块 | P0 | P1 | P2 |
|---|---|---|---|
| Route 初始化 | 章节、周目、剧透模式 | 多存档 | 跨游戏 Route |
| Completion Tracker | 完整清单、本地保存、筛选、下一步 | 云同步、共享 Route | 社区挑战 |
| Boss Directory | 全索引 + 15 个详细 Solver | 全 Boss Solver | 社区 Build 评分 |
| Build 系统 | 6 套已验证 Build + Boss 适配 | 自由 Planner、对比 | 模拟伤害 |
| 内容 / SEO | Boss、missables、NG+、checklist | 物品库、对比页 | 更多内容簇 |
| 语言 | 英文 + 简体中文完整切换 | 根据需求增加繁中 / 日语 | 更多市场语言 |
| 地图 | 不做 | 仅路线示意图 | 经授权或原创地图层 |
| 商业化 | 不做 | Supporter 一次性购买 | 广告 / 联盟优化 |

### 5.2 P0-1：Route 初始化

首次进入 `/wukong/checklist` 时，只问 3 个问题：

1. Current chapter：Prologue / Chapter 1–6 / Finished；
2. Cycle：First Journey / New Cycle+；
3. Spoiler mode：Hide future names（默认）/ Show all。

要求：

- 可跳过，不阻断使用；
- 选择立即写入本地；
- 以后可在顶部 Route Settings 修改；
- 不要求邮箱或用户名。

### 5.3 P0-2：Completion Tracker

#### 数据范围

- 主线与隐藏 Boss；
- 支线与易错过事件；
- Secret Areas；
- Spirits、Transformations、Spells、Vessels；
- Weapons、Armor、Curios；
- Gourds、Drinks、Soaks；
- Medicine Formulas 与关键升级素材；
- Journal Portraits、Meditation Spots；
- Achievements / Trophies；
- NG+ 必需项与 Challenge 新内容。

不同来源对“Boss 数量”定义不同，例如有的按战斗场次计数，有的按 Journal / 角色或重复遭遇计数。产品不得在未说明口径时展示“共有 X 个 Boss”。数据页必须公开分类方法。

#### 核心交互

- 按章节和实际获取顺序展示；
- 一键勾选 / 撤销；
- 筛选 `Incomplete`、`Missable`、`Bosses`、`Items`、`Achievements`；
- 搜索英文名与常见别名；
- 显示章节完成百分比与总进度；
- 易错过条目显示非侵入式警告；
- 点击条目展开前置、位置文字说明、奖励、来源；
- 所有状态自动写入 `localStorage`；
- 支持导出 / 导入 JSON；
- 数据版本更新后做迁移，不丢失旧进度。

#### Next Best Action

规则引擎从未完成项中选择最多 3 条：

1. 即将被当前主线锁定的内容；
2. 能解锁关键法宝 / Build 的前置；
3. 距离当前位置最近或同路线可顺手完成的内容；
4. 当前章节最后才显示普通补全项。

每条建议必须展示 `Why this now`，不能像黑盒推荐。

### 5.4 P0-3：Boss Directory 与 Boss Solver

#### 全 Boss 索引

所有 Boss 均有基础卡片：

- 名称与别名；
- 章节、区域、类型；
- Main / Optional / Secret / Missable；
- 前置条件；
- 推荐挑战时机；
- 奖励类别；
- 是否已有详细 Solver。

#### 首发 15 个详细 Solver

1. Wandering Wight
2. Whiteclad Noble
3. Tiger Vanguard
4. Yellow Wind Sage
5. Black Loong
6. Captain Wise-Voice
7. Yellowbrow
8. Yin Tiger
9. Yellow Loong
10. Scorpionlord
11. Duskveil
12. Hundred-Eyed Daoist Master
13. Bishui Golden-Eyed Beast
14. Erlang, the Sacred Divinity
15. The Great Sage's Broken Shell

最终名单在上线前用真实关键词数据校准；以上是基于难度、社区讨论和章节覆盖的启动假设。

#### Solver 输入

- Boss；
- Current chapter / cycle（从 Route 继承）；
- Playstyle：Safe / Balanced / Aggressive / Spell Binder；
- Owned key gear（可选）；
- 玩家最常死于：survivability / damage / status / phase mechanic（可选）。

#### Solver 输出

- 推荐武器、Armor、Spirit、Vessel、Curios、Spells、Medicine；
- 技能方向而非无法验证的逐点数值；
- 每件装备的获取章节与替代件；
- `Why it works`；
- 开场准备与资源分配；
- 分阶段 3–6 条打法；
- 关键失败原因；
- 关联的前置 Route；
- 最后校验版本和来源。

#### 推荐约束

- 不推荐玩家当前章节以后才获得的物品；
- 不推荐 NG+ 独占内容给一周目玩家；
- Boss 对某元素或机制的“弱点”必须有可靠证据；没有证据时用“practical counter”而非“weakness”；
- 每个主推荐至少提供一个低门槛替代件；
- 不输出虚构伤害百分比；
- 推荐结果由显式规则与人工验证数据生成，P0 不调用生成式 AI。

### 5.5 P0-4：Build Library

首发 6 套经过人工验证的 Build：

- Early Journey Balanced；
- Immobilize Control；
- Spell Binder Burst；
- Qi / Freeze Control；
- Poison / Critical Hybrid；
- NG+ Defensive / Bull King Direction。

每套 Build 必须包含：适用章节、适用 Boss 类型、核心装备、替代件、技能方向、优缺点、不可用场景、最后验证版本。

### 5.6 P0-5：全站搜索

- 搜索 Boss、物品、支线、Build、Achievement；
- 支持常见拼写变体；
- 结果按用户当前章节优先；
- 剧透模式开启时隐藏未来名称，显示 `Locked in a later chapter`。

### 5.7 P0-6：信任与纠错

每个结构化页面显示：

- `Last verified`；
- `Game version`；
- `Sources`；
- `Report a correction`。

纠错表单字段：URL、问题类型、原内容、建议内容、可选来源、联系邮箱（可选）。

### 5.8 P0-7：英文 / 简体中文切换

- 英文为默认语言，使用根路径，例如 `/wukong/checklist`；
- 简体中文使用 `/zh-cn/` 前缀，例如 `/zh-cn/wukong/checklist`；
- Header 始终提供 `EN / 中文` 切换按钮；
- 切换语言时保持当前等价页面、query 参数和 hash；
- 用户主动选择后写入本地偏好，但不基于浏览器语言强制跳转；
- 两种语言共享稳定数据 ID 和进度状态，切换语言不丢进度；
- 页面标题、描述、导航、筛选器、Boss / 物品名称、策略和法律页均需真实翻译；
- 英文与中文页面分别设置 canonical，并用 hreflang 互相指向；
- 缺少译文时不显示半翻译页面，也不自动回退并假装内容已本地化。

### 5.9 用户故事与验收条件

| 用户故事 | 验收条件 |
|---|---|
| 作为首次玩家，我想隐藏未来内容 | 默认只显示当前及以前章节；未来条目的名称和图片不泄露 |
| 作为完成度玩家，我想知道漏了什么 | `Incomplete` 筛选在 1 次点击内生效，并显示准确总数 |
| 作为卡 Boss 玩家，我想用当前能拿到的装备 | 推荐列表中所有 P0 主推荐均通过章节 / 周目校验 |
| 作为回流玩家，我想保留进度 | 刷新、关闭浏览器后状态仍存在；可导出并在另一浏览器导入 |
| 作为移动端用户，我想边玩边勾选 | 360px 宽度可完整操作；主要触控目标不小于 44px |
| 作为谨慎玩家，我想确认信息来源 | 高风险条目在两次点击内看到来源、版本与纠错入口 |
| 作为中文用户，我想切换语言 | 任意双语页面可一键切换到等价页面，进度与筛选状态保持不变 |

### 5.10 数据模型

```text
Game
  id, slug, title, version, release_platforms

Chapter
  id, game_id, order, title, spoiler_label

Objective
  id, type, chapter_id, order, title_i18n, aliases_i18n,
  missable, cycle_requirement, prerequisites[], rewards[],
  spoiler_level, source_ids[], verified_version

Boss
  objective_id, boss_type, required, secret,
  status_tags[], mechanics[], practical_counters[]

Item
  id, type, chapter_available, cycle_requirement,
  acquisition_objective_id, effects, source_ids[]

Build
  id, title_i18n, availability, playstyle_tags[], boss_tags[],
  equipment_slots, skills, alternatives[], tradeoffs[], source_ids[]

RouteProgress
  schema_version, game_id, cycle, current_chapter,
  spoiler_mode, completed_objective_ids[], owned_item_ids[], updated_at
```

### 5.11 内容生产规则

- 官方 Patch Notes 为版本变化的一手来源；
- 易错过、奖励和前置关系原则上需至少两个独立来源或一次实机验证；
- 可以引用事实，不复制竞品的表达、截图、地图或表格结构；
- 每条内容保留编辑记录与来源 URL；
- 不确认的内容标记 `Needs verification`，不上推荐引擎；
- 游戏更新后优先重新验证 Build 可用性和 missable 规则。

---

## 6. 页面信息架构（IA）

### 6.1 Sitemap

```text
/
├─ /wukong
│  ├─ /wukong/checklist
│  ├─ /wukong/route
│  ├─ /wukong/bosses
│  │  └─ /wukong/bosses/[boss-slug]
│  ├─ /wukong/builds
│  │  └─ /wukong/builds/[build-slug]
│  ├─ /wukong/items/[category]
│  └─ /wukong/guides
│     ├─ /wukong/guides/missables
│     ├─ /wukong/guides/100-percent
│     ├─ /wukong/guides/new-game-plus
│     └─ /wukong/guides/challenge-mode
├─ /about
├─ /editorial-policy
├─ /sources
├─ /corrections
├─ /disclaimer
├─ /privacy
├─ /terms
├─ /dmca
├─ /contact
└─ /zh-cn
   ├─ /zh-cn/wukong/...
   ├─ /zh-cn/about
   └─ /zh-cn/[all equivalent content and legal pages]
```

未来扩展：

```text
/zhong-kui
/zhong-kui/checklist
/zhong-kui/bosses/...
```

在官方资料不足前不创建空壳 SEO 页面。

### 6.2 首页结构

1. **Header**：Logo、Checklist、Bosses、Builds、Search；
2. **Hero**：Headline、Subhead、`Start My Route`、`Find a Boss Build`；
3. **Inline Route Starter**：Chapter / Cycle / Spoiler 三个选择；
4. **Two Core Jobs**：Track Your Journey / Beat Your Next Boss；
5. **Live Demo**：展示 3 个清单项和一条 Next Best Action；
6. **How It Works**：Set Progress → Track & Prepare → Keep Moving；
7. **Popular Bosses**：首发 6 个高意图入口；
8. **Why Trust It**：版本、来源、纠错、无登录；
9. **FAQ**；
10. **Footer**：非官方声明和法律链接。

### 6.3 Checklist 页面结构

```text
Sticky top bar
  Progress | Chapter | Cycle | Spoiler | Export

Next Best Action card

Filter chips
  Incomplete | Missable | Bosses | Items | Achievements

Chapter accordion
  Objective row
    Checkbox | Type | Title | Warning | Details

Mobile sticky actions
  Search | Filters | Route Settings
```

### 6.4 Boss 页面结构

1. Boss 名、章节、类型、剧透标签；
2. `Prepare for this fight` 首屏卡片；
3. Build 推荐与替代件；
4. 如何解锁 / 到达；
5. Phase-by-phase plan；
6. 常见失败原因；
7. 奖励与后续 Route；
8. 标记 `Defeated`；
9. 来源、版本、纠错；
10. 相关 Boss / Build。

### 6.5 SEO 页面矩阵

| 页面 | 目标词 | 目标 | 优先级 |
|---|---|---|---:|
| `/` | black myth route / black myth companion | 品牌与转化 | P0 |
| `/wukong/checklist` | black myth wukong checklist / tracker | 工具启动 | P0 |
| `/wukong/bosses` | black myth wukong boss guide / all bosses | 索引与内链 | P0 |
| 15 个 Boss 页 | how to beat X / X best build | 高意图获客 | P0 |
| `/wukong/guides/missables` | black myth wukong missables | 风险型搜索 | P0 |
| `/wukong/guides/100-percent` | black myth wukong 100 completion | 引流到 tracker | P0 |
| `/wukong/guides/new-game-plus` | black myth wukong ng+ checklist | 回流用户 | P1 |
| `/wukong/builds` | black myth wukong best builds | Build 索引 | P1 |
| Build 详情页 | spell binder build 等 | 长尾获客 | P1 |
| 物品类别页 | all spirits / curios / gourds | 支撑内链 | P1 |

### 6.6 SEO 技术要求

- 每个索引页面必须有独立可读价值，禁止批量生成薄内容；
- 静态 HTML 输出核心文本，不依赖客户端执行后才出现；
- 唯一 `title`、meta description、canonical；
- Breadcrumb、站点导航和 HTML sitemap；
- 自动生成 XML sitemap；
- 可见内容与结构化数据一致；
- 英文与简体中文等价页输出 `en`、`zh-CN` 和 `x-default` hreflang；
- Boss 页相互内链到章节、Build、关键前置和 Tracker；
- 提交 Google Search Console 与 Bing Webmaster Tools；
- 不创建“Zhong Kui release date”等未经官方确认的内容农场页。

---

## 7. 定价与商业化

### 7.1 首发策略

**P0 全部免费，无登录、无支付、无广告遮挡。**

原因：

- 用户对核心 tracker 被勾选数量限制后收费已有明确负反馈；
- 首要任务是验证工具使用与回访，而不是验证支付；
- 静态架构成本低，没有必要过早制造摩擦。

### 7.2 商业化阶段

| 阶段 | 条件 | 方案 |
|---|---|---|
| Phase 0 | 上线至有效回访成立 | 免费，无广告 |
| Phase 1 | 月自然访问 > 30,000 且工具激活率达标 | 内容页轻量广告；工具操作区不插屏 |
| Phase 2 | 用户明确要求跨设备同步 | Supporter 一次性购买，价格假设 `$9.99` |
| Phase 3 | 系列第二款游戏上线且多 Route 价值成立 | 重新评估年度方案，不预设订阅 |

### 7.3 Free 与 Supporter 假设

| 能力 | Free | Supporter（假设 `$9.99` 一次性） |
|---|---:|---:|
| 完整 Tracker | ✓ | ✓ |
| Boss Solver | ✓ | ✓ |
| 本地保存与导出 | ✓ | ✓ |
| 云同步 |  | ✓ |
| 多 Route / 多平台存档 |  | ✓ |
| 去广告 |  | ✓ |
| 数据与攻略内容 | 不限 | 不限 |

不得用付费墙锁住关键 missable 提醒、Boss 核心策略或用户自己的导出数据。

### 7.4 其他收入

- 与游戏设备、控制器或正版购买渠道相关的透明联盟链接；
- Support / tip；
- 广告；
- 不出售用户进度数据；
- 不接受影响 Build 排名或编辑判断的付费植入。

### 7.5 成本假设

P0 为静态站，目标基础设施成本控制在每月 `$0–20`；域名、邮件和少量监控另计。该数字是预算假设，部署前需按当时供应商价格确认。

---

## 8. 域名、品牌与技术方案

### 8.1 域名决策

- 已选：`blackmythroute.cc`；
- 显示品牌：`Black Myth Route`；
- 英文读法清楚，和系列工具定位一致；
- `.cc` 不影响产品实现，但在口播和外链中必须写全；
- 续费价格、WHOIS 隐私、DNSSEC 和自动续费需在注册商处确认。

### 8.2 商标与品牌边界

`BLACK MYTH` 存在 Game Science 名下的商标申请，且《Black Myth: Wukong》游戏版权归游科互动科技有限公司。来源：[BLACK MYTH 商标记录](https://trademarks.justia.com/905/64/black-90564627.html)、[WeGame 官方发行页](https://www.wegame.com.cn/wukong/)。

域名决策由产品方确认采用，属于已知风险。上线必须采取以下缓解措施：

- Header 附近和 Footer 显示 `Unofficial fan-made companion`；
- 不使用官方 Logo、官方字标、原画、截图、音乐、3D 模型或宣传视频作为品牌资产；
- 使用原创 UI、原创图标和原创文字；
- 不模仿官方站视觉到足以造成来源混淆；
- 设置 Disclaimer、DMCA、Contact 与快速下架机制；
- 商业化或规模化前进行目标市场商标 / 版权法律审查；
- 如收到权利人通知，优先停用争议素材或名称并保留可迁移的技术品牌层。

推荐声明：

```text
Black Myth Route is an unofficial fan-made companion and is not affiliated
with, endorsed by, or sponsored by Game Science. BLACK MYTH, Black Myth:
Wukong, and related names and assets belong to their respective owners.
```

### 8.3 推荐技术栈

| 层 | 选择 | 理由 |
|---|---|---|
| Web | Astro + TypeScript | 静态优先、SEO 友好，适合内容页与交互岛 |
| UI | React islands + Tailwind CSS | Tracker / Solver 交互集中，其他页面保持轻量 |
| 数据 | 版本化 JSON / YAML + Zod 校验 | 内容可审阅、可 diff、构建时发现错误 |
| 本地状态 | `localStorage` + versioned migration | 无需账户即可保存进度 |
| 搜索 | Pagefind 或等价静态搜索 | 无服务端、支持快速全文搜索 |
| i18n | 文件路由 + 类型化双语字典 | 可索引 URL、等价页面切换、构建时检查缺失翻译 |
| 部署 | Cloudflare Pages | 静态托管、CDN、域名和基础安全统一 |
| 分析 | Cloudflare Web Analytics + 产品事件工具 | 区分 SEO 流量与工具使用 |
| 测试 | Vitest + Playwright + Lighthouse CI | 规则、交互和性能自动验证 |
| P1 后端 | Cloudflare Workers + D1 或等价托管数据库 | 仅在云同步被验证后引入 |

技术供应商不是产品硬约束；若项目已有其他栈，应保持“静态优先、P0 无账户后端”的原则。

### 8.4 数据架构要求

- 内容与进度状态分离；
- 每次发布生成 `data_version`；
- 所有用户可见结构化字段均使用类型化 `en` / `zh-CN` 文案；
- Objective ID 永久稳定，不使用标题作为主键；
- Build 引用 Item ID，不复制装备文本；
- 构建时校验所有引用、前置和章节顺序；
- 自动检测“不可能获得”的推荐组合；
- 来源 URL、验证日期、游戏版本为一等字段；
- 数据变更需经过 review，不能直接在 UI 里硬编码。

### 8.5 非功能要求

| 类别 | 要求 |
|---|---|
| 性能 | 移动端 Core Web Vitals 达到 Good 目标；首屏不加载大图或第三方视频 |
| 可访问性 | 目标 WCAG 2.2 AA；键盘可操作、可见焦点、非颜色唯一表达 |
| 响应式 | 360px–1440px；Tracker 在手机上优先 |
| 国际化 | 双语等价页、语言切换保持路径、中文字体回退与换行经过测试 |
| 稳定性 | 本地进度写入失败时明确提示；导入前校验 schema |
| 隐私 | P0 不收集账户身份；分析数据最小化；隐私页说明 localStorage |
| 安全 | CSP、依赖审计、无任意 HTML 注入、表单限流 |
| 可维护性 | 数据与 UI 分离；每个游戏使用独立 namespace |

### 8.6 视觉方向

- 气质：冷静、克制、工具优先的东方旅行手册；
- 色彩：炭黑、暖纸色、朱砂强调、低饱和青灰；
- 图形：原创路线节点、印章式状态、抽象山形和兵器轮廓；
- 字体：英文无衬线正文 + 克制的衬线标题；
- 禁止：仿官方金色 Logo、全屏游戏原画、霓虹渐变、玻璃拟态、过量粒子和卷轴动画；
- `Completed / Missable / Locked` 必须同时使用文字、图标和颜色。

---

## 9. GTM 策略

### 9.1 首发渠道

| 渠道 | 内容 | 注意事项 |
|---|---|---|
| Google / Bing SEO | Checklist、Boss 和 missables 页面 | 核心长期渠道 |
| Reddit | 免费 Tracker Demo、数据方法、公开征求纠错 | 遵守自推广规则，先联系版主 |
| Steam Community Guides | 简化版清单与完整工具链接 | 不复制站内全文，不刷链接 |
| YouTube 小型创作者 | 提供可嵌入的 Boss Build 卡片或 Route 链接 | 先从 5–20k 粉丝创作者测试 |
| Nexus Mods | 作为免下载 Web 替代工具展示 | 避免暗示 MOD 或官方合作 |
| Discord | 给完成度玩家提供纠错与测试链接 | 不群发、不买量 |

### 9.2 首周动作

| 天 | 动作 |
|---|---|
| Day 0 | 50 条关键 Route 数据人工复核；完成法律与免责声明页 |
| Day 1 | 正式上线，提交 sitemap、Search Console、Bing Webmaster |
| Day 2 | 发布 `100% Tracker` 价值演示，邀请 10 名真实玩家试用 |
| Day 3 | 发布 Erlang Solver 与 60 秒演示短视频 |
| Day 4 | 联系 10 位中小 YouTube / Twitch 创作者 |
| Day 5 | 汇总纠错，发布数据版本 changelog |
| Day 6 | 发布 `Missables Before Leaving Each Chapter` 指南 |
| Day 7 | 复盘激活、错误、移动端使用和索引状态，决定下一批 Boss |

### 9.3 30 / 60 / 90 天内容节奏

#### 0–30 天

- 完整 Tracker；
- 15 个详细 Boss Solver；
- 6 个 Build；
- Missables、100%、NG+、Challenge 四个支柱页面；
- 每周至少一次数据校验 / changelog。

#### 31–60 天

- 根据 Search Console 扩展 10–20 个有曝光但点击不足的 Boss 页面；
- 上线 Build Planner Beta；
- 改进 Next Best Action；
- 测试第二语言的需求，不直接全量翻译。

#### 61–90 天

- 评估云同步意愿；
- 评估 Supporter 一次性购买；
- 建立 Zhong Kui 官方消息观察页，但不创建薄内容矩阵；
- 评估是否需要原创简化路线图，而非完整互动地图。

### 9.4 首发内容清单

- 1 个首页；
- 1 个完整 Tracker；
- 1 个 Boss 索引；
- 15 个详细 Boss 页；
- 6 个 Build 页；
- 4 个支柱指南；
- 7 个信任 / 法律页面；
- 合计约 35 个有独立价值的可索引页面。

---

## 10. 转化漏斗、埋点与指标

### 10.1 漏斗

```text
search_impression
  → organic_click / landing_view
  → tool_start
  → route_initialized
  → first_progress_action / solver_generated
  → next_step_clicked
  → return_visit
  → supporter_interest
  → checkout_start
  → payment_success
```

### 10.2 事件字典

| 事件 | 触发 | 关键属性 |
|---|---|---|
| `page_view` | 页面加载 | path, referrer, game, page_type |
| `tool_start` | 首次操作 Tracker / Solver | tool_type |
| `route_initialized` | 完成或跳过初始化 | chapter, cycle, spoiler_mode |
| `tracker_item_toggle` | 勾选 / 撤销 | objective_type, chapter, action |
| `progress_saved` | 本地保存成功 | data_version, completed_count |
| `progress_exported` | 导出 JSON | schema_version |
| `progress_imported` | 导入成功 | from_schema_version |
| `filter_used` | 使用筛选 | filter_name |
| `boss_selected` | 进入 Solver | boss_slug, chapter |
| `solver_generated` | 生成建议 | boss_slug, playstyle, cycle |
| `alternative_viewed` | 查看替代装备 | item_type |
| `next_step_clicked` | 点击下一步 | reason_type, objective_type |
| `source_opened` | 打开来源 | page_type, source_type |
| `correction_started` | 打开纠错 | page_type |
| `correction_submitted` | 成功提交 | issue_type |
| `cta_click` | 首页 CTA | cta_name |
| `upgrade_click` | 点击 Supporter | placement |
| `checkout_start` | 进入支付 | offer, price |
| `payment_success` | 支付成功 | offer, revenue, currency |
| `tool_error` | 工具错误 | tool_type, error_code |

不得在分析事件中发送自由文本备注、邮箱或完整进度明细。

### 10.3 指标目标（首发假设）

这些是决策阈值，不是市场事实：

| 指标 | 30 天目标 | 解释 |
|---|---:|---|
| Tracker 访问 → 首次勾选 | ≥ 40% | 工具是否立即可理解 |
| Solver 访问 → 生成建议 | ≥ 35% | 输入是否过重 |
| Activated user D7 回访 | ≥ 15% | 是否形成持续 Route |
| Next Best Action 点击率 | ≥ 20% | 差异化是否成立 |
| 导出进度使用率 | ≥ 3% | 数据所有权价值 |
| 移动端工具错误率 | < 1% | 边玩边用的基本门槛 |
| 纠错解决中位时间 | < 72h | 数据信任 |

### 10.4 Kill / Iterate / Scale

#### Scale

- WAR 连续 4 周增长；
- Activated D7 ≥ 15%；
- 至少 20 个非品牌词产生点击；
- 纠错量可控且核心数据准确。

#### Iterate

- 有 SEO 流量但 `tool_start < 20%`：重做首屏与 CTA；
- Solver 使用高但 Next Step 低：加强 Route 连接；
- Tracker 激活高但回访低：优化提醒、进度摘要和恢复体验；
- 用户反复要求同步：进入 P1 云同步验证。

#### Pivot / Stop

- 120 天后，已发布 ≥ 35 个高质量页面且完成索引排查，仍无稳定非品牌曝光；
- Tracker 激活低于 15%，定性访谈显示用户只需要静态答案；
- 权利人要求停用品牌且替代域名 / 品牌迁移不可行；
- 数据维护成本持续超过可获得流量价值。

---

## 11. 风险评估

| 风险 | 等级 | 具体表现 | 缓解措施 |
|---|---:|---|---|
| 商标 / 域名 | 高 | 域名直接包含 `blackmyth`，可能被认为造成关联或混淆 | 非官方声明、原创视觉、法律页、保留品牌迁移能力、商业化前法律审查 |
| 版权 | 高 | 使用官方截图、Logo、音乐、地图或复制攻略 | 只用原创资产与原创文字；来源不等于复制许可；DMCA 流程 |
| 数据准确性 | 高 | 漏项、错误前置、版本变化导致玩家错过内容 | 两源 / 实机验证、版本字段、构建校验、纠错 SLA、changelog |
| SEO 竞争 | 中高 | 大站、老站和地图产品已有权重 | 工具价值、交互闭环、长尾 Boss、真实原创数据，不做薄页 |
| 自然流量衰减 | 中 | 买断制单机热度下降 | 4 周上线、控制成本、系列化数据架构 |
| 商业化弱 | 中 | 攻略用户不愿订阅 | 免费核心、后置付费、一次性 Supporter、广告不干扰工具 |
| 剧透 | 中 | 清单直接暴露未来 Boss 和剧情 | 默认 Spoiler Safe、章节解锁、隐藏名称和图片 |
| 数据丢失 | 中 | localStorage 清理或换设备 | 自动保存、导出提醒、P1 云同步 |
| 内容维护 | 中 | 多分类、别名、不同平台成就口径 | 稳定 ID、平台字段、编辑后台后置、自动校验 |
| 推荐误导 | 中 | 把社区经验写成机制事实 | 区分 confirmed mechanic / practical counter / opinion；显示来源 |

---

## 12. 实施计划

以 1 名开发者 + AI 辅助、已有内容研究但无现成代码为假设。

### Milestone 1：数据与基础（第 1 周）

- 项目脚手架、路由、设计 token；
- Game / Chapter / Objective / Item / Build schema；
- 数据来源表、编辑规范、构建校验；
- 六章 Tracker 的首批数据；
- 法律与信任页面框架。

退出条件：数据构建无断链，Objective ID 稳定，50 条关键数据人工抽验通过。

### Milestone 2：Tracker（第 2 周）

- Route 初始化；
- 勾选、筛选、搜索、章节进度；
- localStorage、导出 / 导入、数据迁移；
- Spoiler Safe；
- Next Best Action v1。

退出条件：移动端可完成完整流程，刷新和导入不丢数据。

### Milestone 3：Boss Solver 与内容（第 3 周）

- Boss 索引；
- 15 个详细 Solver；
- 6 个 Build；
- Boss / Build / Tracker 互链；
- 来源、版本和纠错。

退出条件：推荐可用性自动校验通过，不出现未来章节 / NG+ 误推荐。

### Milestone 4：SEO、QA 与上线（第 4 周）

- 首页和支柱页；
- sitemap、canonical、metadata；
- 埋点、错误监控；
- 性能、可访问性、移动端和浏览器 QA；
- Cloudflare 部署、DNS、Search Console；
- 小范围测试、纠错和正式上线。

退出条件：P0 验收清单全部通过，无 P0 阻塞 Bug，法律声明可见。

---

## 13. 交接摘要

### 13.1 给文案

```text
产品名：Black Myth Route
市场：全球用户；英文默认，简体中文同步上线
品类：Unofficial progression companion

定位：帮助玩家知道漏了什么、当前该怎么配装、下一步做什么。

Headline：Know What to Do Next.
Subhead：Track every missable, get boss-ready builds, and finish
Black Myth: Wukong without losing your place.

核心 Benefits：
1. Never miss a chapter lockout.
2. Use gear you can actually obtain.
3. Save progress without an account.
4. Hide spoilers beyond your journey.

Primary CTA：Start My Route
Secondary CTA：Find a Boss Build

FAQ 必须覆盖：
- Is this official?
- Is it free?
- Where is progress stored?
- Does it contain spoilers?
- Which game version is supported?
- Can I move progress to another device?
- How are builds verified?
- How can I report an error?

不能把产品说成：官方 Wiki、绝对最强 Build、保证通关、实时地图。
```

### 13.2 给设计

```text
首页结构：Hero → Route Starter → Two Core Jobs → Demo → How It Works
→ Popular Bosses → Trust → FAQ → Footer。

首屏重点：用户无需理解整个站，直接选择章节并点击 Start My Route。

核心交互：
- 勾选进度
- Missable 警告
- Next Best Action
- Boss Build 与替代件
- Spoiler Safe

视觉：炭黑、暖纸、朱砂、青灰；原创旅行手册感；工具优先。

移动端：一只手可勾选；Sticky filters；44px 触控目标；
不要依赖 hover；长列表保持性能。

双语：Header 固定语言切换；切换后保持当前等价页面；
中文文案按中文习惯重写，不做逐词直译。

不需要设计：互动地图、账户中心、支付页、论坛、新闻流。
```

### 13.3 给开发

```text
技术建议：Astro + TypeScript + React islands + Tailwind，
静态数据 + Zod 校验，Cloudflare Pages 部署。

P0：
- 完整 Tracker
- localStorage + schema migration
- JSON 导出 / 导入
- Spoiler Safe
- Next Best Action
- 全 Boss 索引
- 15 个详细 Solver
- 6 个 Build
- 搜索、SEO、来源、纠错、埋点
- 英文 / 简体中文路由、字典、hreflang 与等价页切换

核心规则：
- 不向当前章节推荐未来装备
- 不向一周目推荐 NG+ 独占装备
- Objective ID 永久稳定
- 所有高风险事实有来源和 verified_version

NOT-DO：账户、支付、互动地图、AI Chat、存档上传、UGC。

验收：移动端完整流程、状态不丢失、数据引用无断链、
推荐规则测试通过、法律声明可见、可索引静态 HTML。
```

---

## 14. 上线前质量检查

### 产品

- [ ] 首屏 3 秒内说明“进度 + Boss + 下一步”；
- [ ] 不登录即可完成核心任务；
- [ ] Tracker 数据覆盖定义公开；
- [ ] 15 个 Boss Solver 完整且已验证；
- [ ] 所有推荐遵守章节和周目约束；
- [ ] Spoiler Safe 默认开启；
- [ ] Next Best Action 显示原因；
- [ ] 导出 / 导入可用；
- [ ] 所有 P0 页面均有完整英文与简体中文版本；
- [ ] 语言切换保持当前页面、query、hash 与进度；
- [ ] 错误和空状态完整。

### 内容与 SEO

- [ ] 关键词 Volume / CPC / KD 继续标为待验证或补入真实数据；
- [ ] 每页有唯一搜索意图；
- [ ] 没有薄页或批量改名内容；
- [ ] 所有页面有 canonical、metadata 和内链；
- [ ] 英文 / 中文等价页面 hreflang 完整且无断链；
- [ ] sitemap 与 robots 正确；
- [ ] 来源、验证版本和纠错入口可见；
- [ ] Search Console 与 Bing Webmaster 已接入。

### 技术

- [ ] 数据 schema 构建校验通过；
- [ ] localStorage 失败有降级提示；
- [ ] 数据迁移测试通过；
- [ ] 360px 移动端无横向滚动；
- [ ] 中文字体、标点和长文本在移动端无截断；
- [ ] 键盘、屏幕阅读器和 reduced motion 基础检查通过；
- [ ] Lighthouse / Playwright 核心路径通过；
- [ ] CSP、依赖审计和表单限流配置完成。

### 合规

- [ ] Logo、图标、插图和文案均为原创或有明确许可；
- [ ] 没有官方游戏截图、音乐或地图的未经授权复制；
- [ ] Header / Footer 非官方声明可见；
- [ ] Privacy、Terms、Disclaimer、DMCA、Contact 已上线；
- [ ] 联盟链接有披露；
- [ ] 商业化前完成商标 / 版权法律复核。

---

## 15. 关键来源

- [Steam：《Black Myth: Wukong》商店页](https://store.steampowered.com/app/2358720/Black_Myth_Wukong/)
- [Steam Community：官方 Patch Notes](https://steamcommunity.com/app/2358720/allnews/?l=english)
- [Game Science：《Black Myth: Zhong Kui》](https://www.gamesci.cn/zhongkui/)
- [PowerPyx：All Bosses Guide](https://www.powerpyx.com/black-myth-wukong-boss-guide-all-bosses/)
- [Black Myth Guide：Boss Guides](https://blackmyth.guide/en/categories/bosses/)
- [Game8：Black Myth: Wukong Guide](https://game8.co/games/Black-Myth-Wukong)
- [Wand：Black Myth: Wukong Maps and Checklists](https://wand.com/maps/black-myth-wukong)
- [Action RPG Calculator：Build Planner](https://actionrpgcalculator.com/black-myth-wukong/build-calculator/)
- [Nexus Mods：WukongBossTracker](https://www.nexusmods.com/blackmythwukong/mods/1330?tab=docs)
- [Reddit：preferred checklist/tracker](https://www.reddit.com/r/BlackMythWukong/comments/1ix83an/anybody_have_a_preferred_checklisttracker/)
- [Reddit：how to track 100%](https://www.reddit.com/r/BlackMythWukong/comments/1exsj43/length_of_the_game_and_how_to_track_the_100/)
- [Reddit：Checklist Info Sheet](https://www.reddit.com/r/BlackMythWukong/comments/1eyyt7e/black_myth_wukong_checklist_info_sheet/)
- [Reddit：What is the BEST build?](https://www.reddit.com/r/BlackMythWukong/comments/1u1ggek/what_is_the_best_build/)
- [WeGame：官方发行页与版权声明](https://www.wegame.com.cn/wukong/)
- [Justia：BLACK MYTH 商标记录](https://trademarks.justia.com/905/64/black-90564627.html)

---

## 16. 尚待验证但不阻塞开发的事项

1. Ahrefs / Semrush / Keyword Planner 的 Volume、CPC、KD；
2. 15 个首发 Boss 的真实关键词优先级；
3. 各平台 Achievement / Trophy 的口径差异；
4. P0 数据集的最终 Boss / Objective 计数方法；
5. `blackmythroute.cc` 的续费价格、DNSSEC 和 WHOIS 隐私设置；
6. 商业化前的目标市场商标 / 版权法律意见；
7. Supporter `$9.99` 一次性价格的真实支付意愿。

这些事项必须继续标为假设，不得在产品页面对外宣称为已验证事实。
