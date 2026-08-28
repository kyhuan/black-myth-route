import type { Lang } from '@/lib/i18n';

export interface BossVideo {
  youtubeId: string;
  title: string;
  creator: string;
  focus: Record<Lang, string>;
  chapters?: Array<{
    seconds: number;
    label: Record<Lang, string>;
  }>;
}

export interface Boss {
  slug: string;
  chapter: number;
  difficulty: 1 | 2 | 3 | 4 | 5;
  name: Record<Lang, string>;
  epithet: Record<Lang, string>;
  location: Record<Lang, string>;
  summary: Record<Lang, string>;
  prep: Record<Lang, string[]>;
  rules: Record<Lang, string[]>;
  punish: Record<Lang, string[]>;
  mistakes: Record<Lang, string[]>;
  tags: Record<Lang, string[]>;
  video?: BossVideo;
}

export const bosses: Boss[] = [
  {
    slug: 'wandering-wight', chapter: 1, difficulty: 2,
    name: { en: 'Wandering Wight', 'zh-cn': '幽魂' }, epithet: { en: 'Early-game skill check', 'zh-cn': '前期基本功考官' },
    location: { en: 'Forest of Wolves · Outside the Forest', 'zh-cn': '苍狼林 · 林外' },
    summary: { en: 'Create space, bait the palm or headbutt, then commit to short punishes. It is optional now, but its spirit is worth returning for.', 'zh-cn': '拉开距离引诱拍地或头槌，只做短输出。前期可绕过，但之后值得回来取得精魄。' },
    prep: { en: ['Unlock the first shrine and carry enough healing.', 'Use Immobilize to secure a heavy combo.', 'Return after Guangzhi if you want Red Tides as a safety net.'], 'zh-cn': ['先开土地庙并补足葫芦。', '定身术用于确保一套重击输出。', '若压力大，可先击败广智取得赤潮再回来。'] },
    rules: { en: ['Dodge to the side of the headbutt, not straight backward.', 'One clean punish is better than an empty stamina bar.', 'When he glows, disengage and watch the shockwave.'], 'zh-cn': ['头槌向侧面闪，不要直线后退。', '一轮稳妥输出胜过耗空体力。', '身上发光时先拉开，观察冲击波。'] },
    punish: { en: ['Recovery after the long palm slam.', 'Missed running headbutt.', 'Immobilize after he finishes a chain.'], 'zh-cn': ['长前摇拍地后的硬直。', '冲刺头槌落空后。', '连段结束后接定身术。'] },
    mistakes: { en: ['Trading into hyper armor.', 'Rolling early against delayed swings.', 'Fighting against a wall.'], 'zh-cn': ['与霸体动作硬换血。', '面对延迟攻击过早翻滚。', '把自己逼到墙边。'] },
    tags: { en: ['melee', 'early game', 'spirit'], 'zh-cn': ['近战', '前期', '精魄'] }
  },
  {
    slug: 'whiteclad-noble', chapter: 1, difficulty: 3,
    name: { en: 'Whiteclad Noble', 'zh-cn': '白衣秀士' }, epithet: { en: 'Two-phase tempo lesson', 'zh-cn': '双阶段节奏课' },
    location: { en: 'Bamboo Grove · Marsh of White Mist', 'zh-cn': '翠竹林 · 白雾泽' },
    summary: { en: 'Preserve healing for phase two. His spear strings are long, but the final thrusts leave reliable windows.', 'zh-cn': '尽量把葫芦留到二阶段。枪术连段很长，但最后一刺之后通常有稳定输出窗。' },
    prep: { en: ['Upgrade your staff stance once or twice.', 'Bring Red Tides for a second health bar.', 'Spend sparks; there is no benefit to hoarding them.'], 'zh-cn': ['至少强化一到两级棍法。', '携带赤潮，相当于额外容错。', '灵光点该用就用，不必囤积。'] },
    rules: { en: ['Circle at medium range to make thrusts readable.', 'Save Immobilize for a confirmed end of string.', 'In phase two, dodge through the water dash.'], 'zh-cn': ['保持中距离绕行，更容易看清突刺。', '确认连段结束后再交定身。', '二阶段水面突进时迎着攻击闪避。'] },
    punish: { en: ['After the multi-thrust finisher.', 'After the long water dash.', 'During Red Tides burn buildup.'], 'zh-cn': ['多段突刺收招后。', '长距离水面突进后。', '赤潮叠加燃烧期间。'] },
    mistakes: { en: ['Using all gourds in phase one.', 'Chasing him across the arena.', 'Charging heavy attacks without a stagger.'], 'zh-cn': ['一阶段用光葫芦。', '满场追着他跑。', '没有硬直就原地蓄重棍。'] },
    tags: { en: ['two phase', 'spear', 'story'], 'zh-cn': ['双阶段', '枪', '主线'] },
    video: {
      youtubeId: 'DuDWP0I8YeY',
      title: 'How to Beat the Whiteclad Noble - Black Myth Wukong Boss Guide',
      creator: 'Tenkiei',
      focus: { en: 'Use the move-set section to learn which spear finishers are truly over, then compare your resource use with the uninterrupted fight.', 'zh-cn': '先看招式拆解，辨认哪些枪术连段才算真正结束；再用完整实战对照自己两阶段的葫芦与法力分配。' },
      chapters: [
        { seconds: 0, label: { en: 'Preparation', 'zh-cn': '战前准备' } },
        { seconds: 114, label: { en: 'Move set', 'zh-cn': '招式拆解' } },
        { seconds: 437, label: { en: 'Full fight', 'zh-cn': '完整实战' } }
      ]
    }
  },
  {
    slug: 'black-bear-guai', chapter: 1, difficulty: 3,
    name: { en: 'Black Bear Guai', 'zh-cn': '黑熊精' }, epithet: { en: 'Read the smoke, tame the fire', 'zh-cn': '看烟辨位，以罩避火' },
    location: { en: 'Black Wind Cave · Bodhi Peak', 'zh-cn': '黑风洞 · 见谛峰' },
    summary: { en: 'The Fireproof Mantle dramatically reduces the arena’s biggest pressure. Track smoke form by audio and wait for the reappearance attack.', 'zh-cn': '辟火罩能显著降低场地压力。烟化时结合声音判断位置，等显形攻击后再输出。' },
    prep: { en: ['Complete the three-bell secret for Fireproof Mantle.', 'Bring fire resistance medicine if needed.', 'Keep Cloud Step ready for smoke sequences.'], 'zh-cn': ['先完成三口钟隐藏路线取得辟火罩。', '需要时服用火焚耐性丹药。', '为烟化连段保留聚形散气。'] },
    rules: { en: ['Do not swing into smoke form.', 'Use the vessel when the floor ignites.', 'Stay off the arena edge.'], 'zh-cn': ['烟化时不要空挥。', '地面燃烧时开启法宝。', '尽量别贴场地边缘。'] },
    punish: { en: ['After the belly-flop.', 'After the final smoke dash.', 'While Immobilized after a missed slam.'], 'zh-cn': ['扑地动作之后。', '最后一次烟雾突进后。', '砸地落空后接定身。'] },
    mistakes: { en: ['Skipping the secret vessel.', 'Panic rolling every smoke pass.', 'Standing in lingering fire.'], 'zh-cn': ['跳过隐藏法宝。', '每次烟雾掠过都连续乱滚。', '站在持续燃烧的地面。'] },
    tags: { en: ['fire', 'chapter finale', 'vessel'], 'zh-cn': ['火焚', '章节最终战', '法宝'] }
  },
  {
    slug: 'tiger-vanguard', chapter: 2, difficulty: 4,
    name: { en: 'Tiger Vanguard', 'zh-cn': '虎先锋' }, epithet: { en: 'Delayed blade discipline', 'zh-cn': '延迟刀纪律训练' },
    location: { en: 'Crouching Tiger Temple · Temple Entrance', 'zh-cn': '卧虎寺 · 寺门' },
    summary: { en: 'Watch his shoulders, not the blade. Most deaths come from reacting to the wind-up instead of the actual strike.', 'zh-cn': '盯肩膀而不是刀。多数失误来自看到蓄势就翻滚，而非在真正出刀时闪。' },
    prep: { en: ['Upgrade health and defense with Xu Dog if available.', 'Use Serpentscale gear if the blood pool pressure bothers you.', 'Bring Immobilize and Cloud Step.'], 'zh-cn': ['若已解锁戌狗，可先提升生命与防御。', '血池环境有压力时可穿锦鳞套。', '推荐定身术与聚形散气。'] },
    rules: { en: ['Delay the dodge after his obvious wind-ups.', 'Two light attacks, then reassess.', 'Cloud Step can reset the stone feint sequence.'], 'zh-cn': ['看到明显蓄势后延迟闪避。', '轻击两下就重新观察。', '石化假动作可用聚形散气重置节奏。'] },
    punish: { en: ['End of the five-hit sword chain.', 'Missed leap into the blood pool.', 'Roar recovery at medium range.'], 'zh-cn': ['五连刀完整结束后。', '跳劈落空之后。', '中距离咆哮收招时。'] },
    mistakes: { en: ['Button mashing after two hits.', 'Rolling on the wind-up.', 'Healing directly in front of him.'], 'zh-cn': ['打两下后继续贪刀。', '起手蓄势时立刻翻滚。', '正面直接喝葫芦。'] },
    tags: { en: ['melee', 'delayed attacks', 'skill check'], 'zh-cn': ['近战', '延迟攻击', '基本功'] },
    video: {
      youtubeId: 'Tkp7bietm_Q',
      title: 'How to Beat the Tiger Vanguard - Black Myth Wukong Boss Guide',
      creator: 'Tenkiei',
      focus: { en: 'Watch the shoulder and body cues around the delayed sword strings; the goal is to copy the dodge rhythm, not the exact build.', 'zh-cn': '重点看延迟刀连段前的肩部与身体信号；要学的是闪避节奏，不必照抄视频里的整套构筑。' }
    }
  },
  {
    slug: 'yellow-wind-sage', chapter: 2, difficulty: 4,
    name: { en: 'Yellow Wind Sage', 'zh-cn': '黄风大圣' }, epithet: { en: 'A vessel changes the fight', 'zh-cn': '法宝改变战局' },
    location: { en: 'Crouching Tiger Temple · Cellar', 'zh-cn': '卧虎寺 · 地窖' },
    summary: { en: 'Get the Wind Tamer first. Use it to cancel the most oppressive wind phase and turn a chaotic finale into a readable duel.', 'zh-cn': '强烈建议先取得定风珠，在风沙最猛烈的阶段使用，可把混乱终盘还原成可读的单挑。' },
    prep: { en: ['Complete the Kingdom of Sahali for Wind Tamer.', 'Stock shock-curing medicine.', 'Equip a fast spirit for short openings.'], 'zh-cn': ['完成斯哈里国路线取得定风珠。', '准备解除雷蛰的丹药。', '精魄选择出手快、适合短窗口的类型。'] },
    rules: { en: ['Fight near center before the arena boundary closes.', 'Save the vessel for the tornado/wind sequence.', 'Dodge the kick slightly later than instinct suggests.'], 'zh-cn': ['场地缩小前尽量在中心区域作战。', '把定风珠留给龙卷风与狂风阶段。', '踢击的闪避时机要比直觉稍晚。'] },
    punish: { en: ['After the trident ground combo.', 'Immediately after Wind Tamer staggers him.', 'After his long kick chain.'], 'zh-cn': ['三股钢叉砸地连段后。', '定风珠打断并造成硬直时。', '长踢击连段结束后。'] },
    mistakes: { en: ['Entering without Wind Tamer.', 'Getting trapped at the invisible edge.', 'Spending all mana before the final phase.'], 'zh-cn': ['没有定风珠就直接开战。', '被挤在隐形场地边缘。', '终盘前耗尽法力。'] },
    tags: { en: ['wind', 'chapter finale', 'vessel'], 'zh-cn': ['风', '章节最终战', '法宝'] },
    video: {
      youtubeId: 'tG9jPwODbG4',
      title: 'How to Beat the Yellow Wind Sage - Black Myth Wukong Boss Guide',
      creator: 'Tenkiei',
      focus: { en: 'Compare the preparation section with your loadout, then jump to the battle to see exactly when Wind Tamer turns the dangerous wind phase.', 'zh-cn': '先对照准备部分检查装备，再看完整实战中定风珠应在何时打断最危险的风沙阶段。' },
      chapters: [
        { seconds: 0, label: { en: 'Preparation', 'zh-cn': '战前准备' } },
        { seconds: 146, label: { en: 'Move set', 'zh-cn': '招式拆解' } },
        { seconds: 410, label: { en: 'Battle', 'zh-cn': '完整实战' } }
      ]
    }
  },
  {
    slug: 'yellowbrow', chapter: 3, difficulty: 4,
    name: { en: 'Yellowbrow', 'zh-cn': '黄眉' }, epithet: { en: 'Break gold, manage resources', 'zh-cn': '破金身，管资源' },
    location: { en: 'New Thunderclap Temple · Mahavira Hall', 'zh-cn': '小雷音寺 · 大雄宝殿' },
    summary: { en: 'Heavy attacks help crack the golden state. Avoid feeding him easy counters with repeated spell use and enter each section with resources.', 'zh-cn': '重击有助于打破金身。避免连续施法白送反制，并为每个战斗段保留资源。' },
    prep: { en: ['Consider Spell Binder for a direct melee solution.', 'Bring shock resistance.', 'Build focus quickly with light attacks.'], 'zh-cn': ['可考虑用禁字法转为纯近战解法。', '准备雷蛰耐性。', '用轻击快速积攒棍势。'] },
    rules: { en: ['Use charged heavy attacks against gold form.', 'Do not spam Immobilize into his counter state.', 'Treat every transition as a resource checkpoint.'], 'zh-cn': ['金身状态用蓄力重击处理。', '反制定身时不要继续乱交法术。', '每次转场都视作一次资源检查点。'] },
    punish: { en: ['After breaking gold form.', 'Recovery from the long mace slam.', 'Spell Binder windows with full stamina.'], 'zh-cn': ['打破金身后。', '长前摇狼牙棒砸地后。', '禁字法状态且体力充足时。'] },
    mistakes: { en: ['Casting the same spell into counters.', 'Arriving at later phases empty.', 'Ignoring the gold-state mechanic.'], 'zh-cn': ['明知会被反制仍重复施法。', '进入后续阶段时资源见底。', '无视金身机制硬刮。'] },
    tags: { en: ['lightning', 'multi stage', 'anti-spell'], 'zh-cn': ['雷蛰', '多阶段', '反法术'] },
    video: {
      youtubeId: 'GP898ukiBtc',
      title: 'How to Beat Yellowbrow & the Macaque Chief - Black Myth Wukong Boss Guide',
      creator: 'Tenkiei',
      focus: { en: 'Use the run to understand the transitions between Yellowbrow and Macaque Chief, and where the guide saves resources for the gold-state finale.', 'zh-cn': '重点理解黄眉与赤尻马猴之间的连续转场，以及作者如何把资源留给金身更频繁的终盘。' }
    }
  },
  {
    slug: 'cyan-loong', chapter: 3, difficulty: 4,
    name: { en: 'Cyan Loong', 'zh-cn': '青背龙' }, epithet: { en: 'Compact duel, lethal lightning', 'zh-cn': '紧凑决斗，致命雷光' },
    location: { en: 'Bitter Lake · Turtle Island', 'zh-cn': '苦海 · 龟岛' },
    summary: { en: 'A clean duel built around delayed counters. Keep shock buildup under control and punish the full recovery after his airborne cuts.', 'zh-cn': '核心是延迟反击的干净决斗。控制雷蛰积累，等空中斩击完整落地后再输出。' },
    prep: { en: ['Carry Shock-Quelling Powder.', 'Use Cloud Step to safely heal.', 'Choose quick, low-commitment attacks.'], 'zh-cn': ['携带除雷丹。', '用聚形散气安全回复。', '选择前后摇较短的攻击。'] },
    rules: { en: ['Do not attack his ready counter stance.', 'Dodge airborne cuts toward his landing side.', 'Clear shock before it becomes a damage multiplier.'], 'zh-cn': ['看到架势反击时不要出手。', '空中斩击向其落点侧闪避。', '雷蛰叠高前及时解除。'] },
    punish: { en: ['Landing recovery after aerial chain.', 'Missed charged slash.', 'Counter stance ending without a trigger.'], 'zh-cn': ['空中连斩落地硬直。', '蓄力斩落空后。', '反击架势自然结束时。'] },
    mistakes: { en: ['Triggering his counter repeatedly.', 'Ignoring shock buildup.', 'Using slow spirits raw.'], 'zh-cn': ['反复触发他的反击。', '无视雷蛰积累。', '裸放前摇很长的精魄技。'] },
    tags: { en: ['loong', 'lightning', 'duel'], 'zh-cn': ['龙', '雷蛰', '决斗'] }
  },
  {
    slug: 'yellow-loong', chapter: 4, difficulty: 5,
    name: { en: 'Yellow Loong', 'zh-cn': '小黄龙' }, epithet: { en: 'Patience over greed', 'zh-cn': '耐心胜过贪刀' },
    location: { en: 'Webbed Hollow · Relief of the Fallen Loong', 'zh-cn': '盘丝洞 · 堕龙壁' },
    summary: { en: 'His long delayed chains punish memorized panic rolls. Play at medium range, learn the final hit, and spend spells only on confirmed openings.', 'zh-cn': '超长延迟连段专治背板式乱滚。保持中距离，认清最后一击，只在确认窗口时投入法术资源。' },
    prep: { en: ['Maximize shock resistance.', 'Bring Cloud Step for long aerial strings.', 'A thrust-focused stance helps punish at range.'], 'zh-cn': ['尽量堆高雷蛰耐性。', '聚形散气用来规避超长空中连段。', '戳棍能更安全地惩罚中距离硬直。'] },
    rules: { en: ['Count the chain; do not assume it ended.', 'Back away when his weapon glows with extended range.', 'Take one strong punish, then reset.'], 'zh-cn': ['数清连段，别凭感觉判断结束。', '武器发光并延长时先后撤。', '每个窗口打一轮高质量输出就重置。'] },
    punish: { en: ['Final landing of the aerial sequence.', 'Missed forward lightning thrust.', 'Cloud Step reveal after he commits.'], 'zh-cn': ['空中连段最后落地时。', '雷电前突落空后。', '他已出招后用聚形散气显形反击。'] },
    mistakes: { en: ['Assuming the third hit is the last.', 'Healing at neutral range.', 'Using all mana in the opening minute.'], 'zh-cn': ['误以为第三击就是收招。', '在双方中立距离直接喝药。', '开场一分钟内耗光法力。'] },
    tags: { en: ['loong', 'lightning', 'optional'], 'zh-cn': ['龙', '雷蛰', '可选'] },
    video: {
      youtubeId: 'dvpVf_v94Lg',
      title: 'How to Find & Beat Yellow Loong - Black Myth Wukong Boss Guide',
      creator: 'Tenkiei',
      focus: { en: 'The video covers both the route to the arena and the delayed lightning chains. Watch one full chain before trying to memorize any punish.', 'zh-cn': '视频同时覆盖到达战场的路线和延迟雷电连段；先完整观察一套连招，再记稳定输出窗。' }
    }
  },
  {
    slug: 'hundred-eyed-daoist-master', chapter: 4, difficulty: 5,
    name: { en: 'Hundred-Eyed Daoist Master', 'zh-cn': '百眼魔君' }, epithet: { en: 'Needle through the golden domain', 'zh-cn': '绣花针破金光' },
    location: { en: 'Temple of Yellow Flowers · Court of Illumination', 'zh-cn': '黄花观 · 金光苑' },
    summary: { en: 'The Weaver’s Needle is the intended answer to the oppressive golden-domain phase. Finish Purple Cloud Mountain before the finale.', 'zh-cn': '绣花针是克制金光领域阶段的关键解法，建议先完成紫云山再挑战。' },
    prep: { en: ['Defeat the Duskveil for Weaver’s Needle.', 'Bring poison resistance.', 'Use mobile attacks that can reach his body.'], 'zh-cn': ['击败晦月魔君取得绣花针。', '准备毒伤耐性。', '选择位移好、容易命中躯干的攻击。'] },
    rules: { en: ['Save the needle for the golden-domain transition.', 'Attack the front/side where hit detection is reliable.', 'Clear poison before committing to long strings.'], 'zh-cn': ['绣花针留到金光领域转阶段。', '攻击正面或侧面，命中更稳定。', '进入长连段输出前先解除毒伤。'] },
    punish: { en: ['After needle cancels the domain.', 'Recovery from sword-limb sweep.', 'After the long burrow sequence.'], 'zh-cn': ['绣花针打断领域后。', '剑足横扫收招后。', '长钻地连段结束后。'] },
    mistakes: { en: ['Reaching the finale without the vessel.', 'Hitting legs from awkward angles.', 'Letting poison tick through heal windows.'], 'zh-cn': ['没拿法宝就进入最终战。', '从刁钻角度一直打腿。', '在中毒持续掉血时浪费葫芦。'] },
    tags: { en: ['poison', 'chapter finale', 'vessel'], 'zh-cn': ['毒伤', '章节最终战', '法宝'] }
  },
  {
    slug: 'duskveil', chapter: 4, difficulty: 4,
    name: { en: 'The Duskveil', 'zh-cn': '晦月魔君' }, epithet: { en: 'Save strength for the eclipse', 'zh-cn': '把强力资源留给晦月' },
    location: { en: 'Purple Cloud Mountain · Cloudnest Peak', 'zh-cn': '紫云山 · 巢云顶' },
    summary: { en: 'Phase one rewards restraint. Preserve spells and vessel energy for the much faster second phase and stay close enough to read the blade arcs.', 'zh-cn': '一阶段应克制消耗，把法术与法宝能量留给明显更快的二阶段，并保持能看清刀光轨迹的距离。' },
    prep: { en: ['Finish other Purple Cloud quests before the arena.', 'Bring poison cures.', 'Use a reliable stagger spirit.'], 'zh-cn': ['进最终场地前先完成紫云山其他支线。', '携带解毒丹药。', '选择稳定造成硬直的精魄。'] },
    rules: { en: ['Spend minimal resources in phase one.', 'Stay under or beside long-range blade waves.', 'Reset when the camera loses the boss.'], 'zh-cn': ['一阶段尽量少耗资源。', '远距离刀波时贴近其身下或侧面。', '镜头丢失目标就优先重置站位。'] },
    punish: { en: ['End of the beak slam chain.', 'Landing after aerial blade wave.', 'A stagger early in phase two.'], 'zh-cn': ['喙部砸击连段后。', '空中刀波落地后。', '二阶段早期制造硬直时。'] },
    mistakes: { en: ['Burning all mana in phase one.', 'Running far enough to make projectiles harder.', 'Entering before side quests are resolved.'], 'zh-cn': ['一阶段用光法力。', '跑得太远反而让投射物更难躲。', '支线未收尾就进入战场。'] },
    tags: { en: ['two phase', 'secret area', 'vessel reward'], 'zh-cn': ['双阶段', '隐藏区域', '法宝奖励'] },
    video: {
      youtubeId: 'LD_ue5WS2oQ',
      title: "How to Beat Duskveil & Find the Weaver's Needle Vessel - Black Myth Wukong Guide",
      creator: 'Tenkiei',
      focus: { en: 'Use this when you need the secret-area route as well as phase-two spacing. The Duskveil tips begin at 09:02.', 'zh-cn': '适合同时确认紫云山隐藏路线与二阶段站位；晦月魔君的实战提示从 09:02 开始。' },
      chapters: [
        { seconds: 542, label: { en: 'Duskveil tips', 'zh-cn': 'Boss 实战要点' } }
      ]
    }
  },
  {
    slug: 'bishui-golden-eyed-beast', chapter: 5, difficulty: 4,
    name: { en: 'Bishui Golden-Eyed Beast', 'zh-cn': '璧水金睛兽' }, epithet: { en: 'Let the arena work for you', 'zh-cn': '让场景替你解题' },
    location: { en: 'Bishui Cave · Corridor of Fire and Ice', 'zh-cn': '璧水洞 · 水火道' },
    summary: { en: 'The encounter can move between elemental arenas. Use its attacks to open transitions when one environment becomes too oppressive.', 'zh-cn': '这场战斗可以在不同元素场地间转换。当当前环境压力过大时，引导它的攻击打开转场。' },
    prep: { en: ['Bring both burn and chill cures.', 'Equip Fireproof Mantle if fire is the problem.', 'Keep stamina for repeated charges.'], 'zh-cn': ['同时准备火焚与寒冻解除药。', '火场压力大时携带辟火罩。', '为连续冲锋保留体力。'] },
    rules: { en: ['Stand near sealed passages to bait destructive attacks.', 'Dodge charges sideways at the last moment.', 'Match your resistance to the active arena.'], 'zh-cn': ['靠近封闭通道，引诱破坏性攻击打开路线。', '冲锋贴近时再向侧面闪。', '根据当前场地切换对应耐性。'] },
    punish: { en: ['After a charge hits the wall.', 'During elemental transition recovery.', 'After the long claw chain.'], 'zh-cn': ['冲锋撞墙后。', '元素转场硬直时。', '长爪击连段结束后。'] },
    mistakes: { en: ['Treating the first arena as mandatory.', 'Rolling with the charge direction.', 'Ignoring elemental buildup.'], 'zh-cn': ['以为必须在初始场地打到底。', '顺着冲锋方向翻滚。', '无视元素异常积累。'] },
    tags: { en: ['fire', 'ice', 'secret area'], 'zh-cn': ['火焚', '寒冻', '隐藏区域'] }
  },
  {
    slug: 'red-boy-yaksha-king', chapter: 5, difficulty: 4,
    name: { en: 'Red Boy / Yaksha King', 'zh-cn': '红孩儿 / 夜叉王' }, epithet: { en: 'Two identities, one resource plan', 'zh-cn': '双形态，一套资源规划' },
    location: { en: 'Field of Fire · Fallen Furnace Crater', 'zh-cn': '火光地 · 陨砖坑' },
    summary: { en: 'Do not over-spend against Red Boy. The Yaksha phase has wider blade coverage and needs your strongest control tools.', 'zh-cn': '红孩儿阶段不要过度消耗。夜叉王刀刃覆盖更广，更需要保留最强控制手段。' },
    prep: { en: ['Stack burn resistance.', 'Bring Cloud Step for large blade patterns.', 'Reserve vessel and spirit for phase two.'], 'zh-cn': ['提高火焚耐性。', '聚形散气用来处理大范围刀阵。', '法宝与精魄尽量留给二阶段。'] },
    rules: { en: ['Use short punishes after spear dives.', 'In Yaksha phase, move through gaps instead of away from the whole pattern.', 'Heal behind Cloud Step.'], 'zh-cn': ['枪矛俯冲后只做短输出。', '夜叉阶段从刀阵缝隙穿过，不要试图跑出整个范围。', '在聚形散气掩护下回复。'] },
    punish: { en: ['End of the fire clone sequence.', 'Yaksha blade plant recovery.', 'After the long aerial dive.'], 'zh-cn': ['火焰分身连段结束后。', '夜叉插刃收招时。', '长空中俯冲后。'] },
    mistakes: { en: ['Emptying the gourd before phase two.', 'Running straight back from expanding blades.', 'Committing during fire clone pressure.'], 'zh-cn': ['二阶段前喝空葫芦。', '面对扩散刀刃一直直线后退。', '火焰分身压制时强行输出。'] },
    tags: { en: ['fire', 'two phase', 'chapter finale'], 'zh-cn': ['火焚', '双阶段', '章节最终战'] }
  },
  {
    slug: 'supreme-inspector', chapter: 6, difficulty: 4,
    name: { en: 'Supreme Inspector', 'zh-cn': '王灵官' }, epithet: { en: 'Break the wheel of fire', 'zh-cn': '破开火轮封锁' },
    location: { en: 'Foothills · Verdant Path', 'zh-cn': '山脚 · 青嶂道' },
    summary: { en: 'High mobility and the burning wheel make spacing difficult. Use the Plantain Fan to dismantle the late fire phase.', 'zh-cn': '高速位移与火轮让站位很难维持。终盘用芭蕉扇可有效拆解火焰封锁。' },
    prep: { en: ['Equip the Plantain Fan.', 'Use burn resistance.', 'Bring a mobile stance for aerial targets.'], 'zh-cn': ['装备芭蕉扇。', '提高火焚耐性。', '选择能应对空中目标的机动棍法。'] },
    rules: { en: ['Save the fan for the wheel/fire phase.', 'Track the boss before committing camera-heavy attacks.', 'Dodge the hand projectiles later than their launch.'], 'zh-cn': ['芭蕉扇留给火轮阶段。', '使用影响镜头的技能前先锁定目标位置。', '手掌投射物发出后稍晚再闪。'] },
    punish: { en: ['After the wheel charge misses.', 'Plantain Fan knockback.', 'Landing from the long aerial sequence.'], 'zh-cn': ['火轮冲锋落空后。', '芭蕉扇击退期间。', '长空中连段落地后。'] },
    mistakes: { en: ['Using the fan too early.', 'Losing lock-on during aerial movement.', 'Healing inside the wheel path.'], 'zh-cn': ['过早使用芭蕉扇。', '空中位移时丢失锁定。', '站在火轮路径上回复。'] },
    tags: { en: ['fire', 'flying', 'vessel'], 'zh-cn': ['火焚', '空中', '法宝'] }
  },
  {
    slug: 'erlang-the-sacred-divinity', chapter: 6, difficulty: 5,
    name: { en: 'Erlang, the Sacred Divinity', 'zh-cn': '二郎显圣真君' }, epithet: { en: 'Break posture, then burst', 'zh-cn': '先破架势，再打爆发' },
    location: { en: 'Mount Mei · Mei-Jian Peak', 'zh-cn': '梅山 · 梅见峰' },
    summary: { en: 'Damage is gated by his regenerating posture. Fan, transformations and selected spirits help strip it; save your real burst for the exposed health bar.', 'zh-cn': '伤害受会恢复的架势条限制。用芭蕉扇、变身与特定精魄削架势，把真正爆发留给本体血条。' },
    prep: { en: ['Equip Plantain Fan and a high-stagger spirit.', 'Use Sunset of the Nine Skies drink if you want faster vessel recharge.', 'Carry shock resistance and a fully upgraded gourd.'], 'zh-cn': ['装备芭蕉扇与高削韧精魄。', '想更快回复法宝可使用九霞清醑。', '准备雷蛰耐性并强化葫芦。'] },
    rules: { en: ['Treat each posture bar as a separate round.', 'Fan opens the safest posture damage window.', 'Cloud Step avoids dangerous red-light sequences and creates a heal.'], 'zh-cn': ['每一条架势都当成独立回合。', '芭蕉扇能创造最安全的削架势窗口。', '聚形散气规避红光危险连段并创造回复机会。'] },
    punish: { en: ['Immediately after posture breaks.', 'While the fan tornado locks him.', 'Recovery after the axe sequence.'], 'zh-cn': ['架势条刚被打破时。', '芭蕉扇龙卷控制期间。', '巨斧连段结束后。'] },
    mistakes: { en: ['Spending burst into a full posture bar.', 'Using Immobilize without reading his deflection.', 'Entering the next round with no vessel energy.'], 'zh-cn': ['对满架势条倾泻爆发。', '不看弹反机制直接交定身。', '进入下一轮时法宝能量为零。'] },
    tags: { en: ['secret ending', 'posture', 'endgame'], 'zh-cn': ['隐藏结局', '架势', '终局'] }
  },
  {
    slug: 'great-sages-broken-shell', chapter: 6, difficulty: 5,
    name: { en: "The Great Sage’s Broken Shell", 'zh-cn': '大圣残躯' }, epithet: { en: 'Your own toolkit, turned against you', 'zh-cn': '你的本领，反过来考你' },
    location: { en: 'Birthstone · Heart of Birthstone', 'zh-cn': '石卵 · 石卵心生' },
    summary: { en: 'The finale reads habits you learned all game. Keep attacks disciplined, expect your healing to be challenged, and use control only after clear commitments.', 'zh-cn': '最终战会针对你一路养成的习惯。控制出手节奏，预判喝药会被针对，只在明确承诺动作后使用控制。' },
    prep: { en: ['Fully upgrade your preferred armor and staff.', 'Choose drink/soaks for reliable healing, not gimmicks.', 'Bring a build you understand rather than a last-minute respec.'], 'zh-cn': ['强化常用防具与武器。', '酒食选择稳定回复而非花活。', '使用熟悉的构筑，不要临时照抄洗点。'] },
    rules: { en: ['Heal after spacing or Cloud Step, never raw.', 'Expect stance counters and varied timing.', 'Use four-focus attacks only on confirmed openings.'], 'zh-cn': ['拉开距离或聚形散气后再喝药。', '预期不同棍势会被针对，且节奏多变。', '四段棍势只在确认窗口释放。'] },
    punish: { en: ['End of the long staff chain.', 'After a missed charged strike.', 'Cloud Step heavy when he commits elsewhere.'], 'zh-cn': ['长棍连段完整结束后。', '蓄力重击落空后。', '对方已出招时用聚形散气重击。'] },
    mistakes: { en: ['Healing in his face.', 'Repeating the same opener.', 'Greeding because the health bar is nearly empty.'], 'zh-cn': ['贴脸喝药。', '重复使用同一种起手。', '残血时因为着急而贪刀。'] },
    tags: { en: ['finale', 'multi phase', 'staff'], 'zh-cn': ['最终战', '多阶段', '棍法'] },
    video: {
      youtubeId: 'iafhPZUxMw4',
      title: "How to Beat Stone Monkey & Great Sages Broken Shell Easy Guide - Final Boss | Black Myth Wukong",
      creator: 'Saboteur',
      focus: { en: 'This later-patch guide shows the entire final sequence. Jump to 04:27 for the Broken Shell and compare its safe heal windows with the written rules below.', 'zh-cn': '这条后续版本攻略展示了完整终战；跳到 04:27 直接看大圣残躯，并与下方文字中的安全喝药窗口对照。' },
      chapters: [
        { seconds: 0, label: { en: 'Stone Monkey', 'zh-cn': '石猿' } },
        { seconds: 267, label: { en: "Great Sage's Broken Shell", 'zh-cn': '大圣残躯' } }
      ]
    }
  }
];

export function getBoss(slug: string) {
  return bosses.find((boss) => boss.slug === slug);
}
