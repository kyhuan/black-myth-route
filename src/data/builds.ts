import type { Lang } from '@/lib/i18n';

export interface Build {
  slug: string;
  cycle: 'first' | 'ng+' | 'any';
  title: Record<Lang, string>;
  eyebrow: Record<Lang, string>;
  summary: Record<Lang, string>;
  bestFor: Record<Lang, string[]>;
  core: Record<Lang, string[]>;
  loop: Record<Lang, string[]>;
  swaps: Record<Lang, string[]>;
}

export const builds: Build[] = [
  {
    slug: 'immobilize-smash', cycle: 'first',
    title: { en: 'Immobilize Smash', 'zh-cn': '定身劈棍' }, eyebrow: { en: 'First-cycle all-rounder', 'zh-cn': '首周目万金油' },
    summary: { en: 'A forgiving route that turns confirmed boss recovery into charged Smash damage.', 'zh-cn': '利用 Boss 收招硬直接定身，再用蓄力劈棍稳定兑现伤害。' },
    bestFor: { en: ['Learning new bosses', 'Short, safe punish windows', 'Players who prefer direct melee'], 'zh-cn': ['初见 Boss', '输出窗口短的战斗', '偏好直接近战的玩家'] },
    core: { en: ['Smash Stance', 'Immobilize', 'Cloud Step', 'High critical chance gear'], 'zh-cn': ['劈棍', '定身术', '聚形散气', '暴击向装备'] },
    loop: { en: ['Build focus with safe light strings.', 'Wait for a full enemy recovery.', 'Immobilize, charge heavy, then disengage.'], 'zh-cn': ['用安全轻击积攒棍势。', '等待敌人完整收招。', '定身接蓄力重击，随后拉开。'] },
    swaps: { en: ['Use Spell Binder when a boss punishes spells.', 'Switch to Thrust Stance for longer spacing.', 'Take Fireproof Mantle or Wind Tamer when the encounter calls for it.'], 'zh-cn': ['Boss 克制法术时换禁字法。', '需要更远距离时换戳棍。', '根据战斗机制换辟火罩或定风珠。'] }
  },
  {
    slug: 'thrust-counterflow', cycle: 'any',
    title: { en: 'Thrust Counterflow', 'zh-cn': '戳棍进退流' }, eyebrow: { en: 'Spacing and safe punishment', 'zh-cn': '距离控制与安全反击' },
    summary: { en: 'Maintain medium range, answer whiffs with long-reaching thrusts, and avoid extended trades.', 'zh-cn': '保持中距离，用长距离戳击惩罚落空动作，避免陷入长时间换血。' },
    bestFor: { en: ['Yellow Loong', 'Fast humanoid duels', 'Low-heal challenge runs'], 'zh-cn': ['小黄龙', '高速人形决斗', '低回复挑战'] },
    core: { en: ['Thrust Stance', 'Cloud Step', 'Stamina recovery', 'Mobile spirit'], 'zh-cn': ['戳棍', '聚形散气', '体力恢复', '机动精魄'] },
    loop: { en: ['Hold medium range.', 'Bait a forward commitment.', 'Thrust once, then return to neutral.'], 'zh-cn': ['维持中距离。', '引诱敌人向前出招。', '戳击一次后回到中立。'] },
    swaps: { en: ['Add Immobilize for guaranteed focus spend.', 'Use Rock Solid if you know exact timing.', 'Choose defense curios for long learning sessions.'], 'zh-cn': ['加入定身术确保棍势兑现。', '熟悉时机后可换铜头铁臂。', '长时间开荒可选择防御珍玩。'] }
  },
  {
    slug: 'spell-binder', cycle: 'any',
    title: { en: 'Spell Binder Resolve', 'zh-cn': '禁字强攻' }, eyebrow: { en: 'No tricks, maximum fundamentals', 'zh-cn': '封印术法，强化基本功' },
    summary: { en: 'Convert mana and magical options into raw attributes for bosses that counter or interrupt spells.', 'zh-cn': '把法力与术法选择换成直接属性，适合会反制或频繁打断施法的敌人。' },
    bestFor: { en: ['Yellowbrow', 'Players with strong dodge timing', 'Clean repeatable clears'], 'zh-cn': ['黄眉', '闪避时机熟练的玩家', '追求稳定复现的击杀'] },
    core: { en: ['Spell Binder', 'Critical chance', 'Critical damage', 'Preferred staff stance'], 'zh-cn': ['禁字法', '暴击率', '暴击伤害', '最熟悉的棍势'] },
    loop: { en: ['Spend preparatory buffs first.', 'Activate Spell Binder.', 'Play short neutral exchanges and cash focus on guaranteed windows.'], 'zh-cn': ['先用完准备型增益。', '开启禁字法。', '用短交锋积势，在确认窗口兑现。'] },
    swaps: { en: ['Do not use it when a required vessel or spell defines the solution.', 'Prioritize survivability while learning.', 'Respec excess mana upgrades if desired.'], 'zh-cn': ['战斗强依赖特定法宝或法术时不要使用。', '开荒阶段优先生存属性。', '必要时洗掉多余法力投入。'] }
  },
  {
    slug: 'transformation-safety', cycle: 'first',
    title: { en: 'Transformation Safety Net', 'zh-cn': '变身容错流' }, eyebrow: { en: 'Learn without losing health', 'zh-cn': '用额外血条换学习时间' },
    summary: { en: 'Use transformation health and stagger to explore dangerous phases without draining your gourd.', 'zh-cn': '利用变身的独立血条与削韧探索危险阶段，减少葫芦消耗。' },
    bestFor: { en: ['First attempts', 'Element-heavy fights', 'Resource conservation'], 'zh-cn': ['Boss 初见', '元素压力大的战斗', '节省回复资源'] },
    core: { en: ['Red Tides or a later trusted transformation', 'Might recovery', 'Immobilize', 'Defensive vessel'], 'zh-cn': ['赤潮或熟悉的后期变身', '神力恢复', '定身术', '防御型法宝'] },
    loop: { en: ['Use normal form to learn the opener.', 'Transform when the dangerous phase begins.', 'Spend transformation aggressively, then reset safely.'], 'zh-cn': ['常态观察开场动作。', '进入危险阶段后变身。', '积极消耗变身资源，结束后安全重置。'] },
    swaps: { en: ['Match transformation element to the boss.', 'Use Ebon Flow when blocks are reliable.', 'Switch to burst spirits once the fight is learned.'], 'zh-cn': ['根据 Boss 弱点切换变身元素。', '熟悉格挡时可用乌川。', '熟练后换爆发型精魄。'] }
  },
  {
    slug: 'vessel-cycle', cycle: 'ng+',
    title: { en: 'Vessel Cycling', 'zh-cn': '法宝循环' }, eyebrow: { en: 'New Cycle control engine', 'zh-cn': '再入轮回控制引擎' },
    summary: { en: 'Recharge encounter-defining vessels quickly and build every damage window around their control.', 'zh-cn': '快速回复能改变战局的法宝，把每一轮伤害窗口围绕法宝控制展开。' },
    bestFor: { en: ['Erlang', 'New Cycle bosses', 'Players who enjoy cooldown planning'], 'zh-cn': ['二郎神', '高周目 Boss', '喜欢规划循环的玩家'] },
    core: { en: ['Plantain Fan', 'Sunset of the Nine Skies', 'High-stagger spirit', 'Mana-efficient spells'], 'zh-cn': ['芭蕉扇', '九霞清醑', '高削韧精魄', '低法力消耗术法'] },
    loop: { en: ['Use vessel to establish control.', 'Spend spirit and focus during lockdown.', 'Drink safely to rebuild vessel energy, then repeat.'], 'zh-cn': ['法宝先手建立控制。', '控制期投入精魄与棍势。', '安全饮酒回复法宝能量，进入下一轮。'] },
    swaps: { en: ['Use Weaver’s Needle for specific domain mechanics.', 'Use Wind Tamer against wind control.', 'Do not force the loop when the boss is nearly staggered naturally.'], 'zh-cn': ['领域机制换绣花针。', '风压控制换定风珠。', 'Boss 自然接近硬直时不必强行开启循环。'] }
  },
  {
    slug: 'poison-critical', cycle: 'ng+',
    title: { en: 'Poison Critical', 'zh-cn': '毒伤暴击' }, eyebrow: { en: 'Risk-reward New Cycle damage', 'zh-cn': '高风险高收益周目流派' },
    summary: { en: 'Maintain a controlled poison state to activate offensive bonuses, then convert short openings into heavy critical bursts.', 'zh-cn': '维持可控中毒状态触发攻击增益，再把短窗口转化为高额暴击爆发。' },
    bestFor: { en: ['Experienced players', 'Fast boss repeats', 'Aggressive play'], 'zh-cn': ['熟练玩家', 'Boss 速刷', '激进打法'] },
    core: { en: ['Poison-enabling gear', 'Critical chance and damage', 'Fast spirit', 'Reliable healing soak'], 'zh-cn': ['自中毒装备', '暴击率与暴击伤害', '快速精魄', '稳定回复泡酒物'] },
    loop: { en: ['Activate the poison bonus under safe conditions.', 'Use control to create a burst window.', 'Heal before poison and incoming damage overlap dangerously.'], 'zh-cn': ['在安全条件下触发中毒增益。', '使用控制创造爆发窗口。', '毒伤与来袭伤害重叠前及时回复。'] },
    swaps: { en: ['Drop self-poison in attrition fights.', 'Use defensive curios while learning.', 'Favor raw critical gear when poison immunity makes setup awkward.'], 'zh-cn': ['消耗战中放弃自中毒。', '开荒时换防御珍玩。', '敌人机制让启动困难时改用纯暴击装备。'] }
  }
];

export function getBuild(slug: string) {
  return builds.find((build) => build.slug === slug);
}

