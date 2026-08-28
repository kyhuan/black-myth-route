import type { Lang } from '@/lib/i18n';

export type ObjectiveCategory = 'boss' | 'quest' | 'secret' | 'item' | 'meditation';

export interface Objective {
  id: string;
  chapter: number;
  category: ObjectiveCategory;
  missable: boolean;
  spoiler: boolean;
  title: Record<Lang, string>;
  hint: Record<Lang, string>;
  location: Record<Lang, string>;
}

export const objectives: Objective[] = [
  { id: 'c1-guangzhi', chapter: 1, category: 'boss', missable: false, spoiler: false, title: { en: 'Defeat Guangzhi', 'zh-cn': '击败广智' }, hint: { en: 'Unlock Red Tides before pushing deeper into the forest.', 'zh-cn': '深入黑风山前先取得赤潮变身。' }, location: { en: 'Forest of Wolves · Outside the Forest', 'zh-cn': '苍狼林 · 林外' } },
  { id: 'c1-wight', chapter: 1, category: 'boss', missable: true, spoiler: false, title: { en: 'Defeat Wandering Wight', 'zh-cn': '击败幽魂' }, hint: { en: 'Do this before the area state changes later in the chapter.', 'zh-cn': '建议在章节区域状态变化前完成。' }, location: { en: 'Forest of Wolves · Outside the Forest', 'zh-cn': '苍狼林 · 林外' } },
  { id: 'c1-bells', chapter: 1, category: 'secret', missable: false, spoiler: true, title: { en: 'Ring all three bells', 'zh-cn': '敲响三口钟' }, hint: { en: 'The bells open the route to the chapter’s hidden encounter.', 'zh-cn': '三口钟会开启本章隐藏区域。' }, location: { en: 'Black Wind Mountain', 'zh-cn': '黑风山' } },
  { id: 'c1-meditation', chapter: 1, category: 'meditation', missable: false, spoiler: false, title: { en: 'Find all Chapter 1 meditation spots', 'zh-cn': '找到第一回全部打坐蒲团' }, hint: { en: 'Check side paths near forest shrines and caves.', 'zh-cn': '留意土地庙与洞穴附近的岔路。' }, location: { en: 'Black Wind Mountain', 'zh-cn': '黑风山' } },
  { id: 'c1-jinlong', chapter: 1, category: 'item', missable: false, spoiler: true, title: { en: 'Claim the Fireproof Mantle', 'zh-cn': '取得辟火罩' }, hint: { en: 'Complete the bell route and finish the secret encounter.', 'zh-cn': '完成敲钟路线并击败隐藏敌人。' }, location: { en: 'Ancient Guanyin Temple', 'zh-cn': '旧观音禅院' } },
  { id: 'c1-lingxuzi', chapter: 1, category: 'boss', missable: false, spoiler: false, title: { en: 'Defeat Lingxuzi', 'zh-cn': '击败灵虚子' }, hint: { en: 'Fire transformation can create safe damage windows.', 'zh-cn': '赤潮变身能创造更安全的输出窗口。' }, location: { en: 'Guanyin Temple', 'zh-cn': '观音禅院' } },

  { id: 'c2-xu-dog', chapter: 2, category: 'quest', missable: false, spoiler: false, title: { en: 'Meet Xu Dog and unlock medicine', 'zh-cn': '结识戌狗并解锁丹药' }, hint: { en: 'Follow the cellar route after helping him near the village.', 'zh-cn': '在村口帮助戌狗后继续追踪地窖路线。' }, location: { en: 'Sandgate Village · Village Entrance', 'zh-cn': '沙门村 · 村口' } },
  { id: 'c2-stone-man', chapter: 2, category: 'quest', missable: false, spoiler: false, title: { en: 'Complete Man-in-Stone’s request', 'zh-cn': '完成石中人支线' }, hint: { en: 'Investigate the ravine and return with what he asks for.', 'zh-cn': '探索山沟，带回他需要的东西。' }, location: { en: 'Fright Cliff · Squall Hideout', 'zh-cn': '挟魂崖 · 藏风山凹' } },
  { id: 'c2-drum', chapter: 2, category: 'secret', missable: false, spoiler: true, title: { en: 'Finish the Old Rattle-Drum route', 'zh-cn': '完成拨浪鼓隐藏路线' }, hint: { en: 'Use the drum at three distinct locations after obtaining it.', 'zh-cn': '取得拨浪鼓后，在三个特定地点使用。' }, location: { en: 'Yellow Wind Ridge', 'zh-cn': '黄风岭' } },
  { id: 'c2-boar', chapter: 2, category: 'quest', missable: false, spoiler: true, title: { en: 'Complete the drunken boar quest', 'zh-cn': '完成醉酒黄袍员外支线' }, hint: { en: 'His requests lead toward the chapter’s secret kingdom.', 'zh-cn': '完成他的要求可通往本章隐藏国度。' }, location: { en: 'Fright Cliff · Rockrest Flat', 'zh-cn': '挟魂崖 · 枕石坪' } },
  { id: 'c2-tiger', chapter: 2, category: 'boss', missable: false, spoiler: false, title: { en: 'Defeat Tiger Vanguard', 'zh-cn': '击败虎先锋' }, hint: { en: 'Respect delayed swings; punish after the full sequence.', 'zh-cn': '注意延迟刀，等完整连段结束再反击。' }, location: { en: 'Crouching Tiger Temple', 'zh-cn': '卧虎寺' } },
  { id: 'c2-wind-tamer', chapter: 2, category: 'item', missable: false, spoiler: true, title: { en: 'Claim the Wind Tamer', 'zh-cn': '取得定风珠' }, hint: { en: 'Clear the secret kingdom before facing the chapter finale.', 'zh-cn': '挑战章节最终敌人前先完成隐藏国度。' }, location: { en: 'Kingdom of Sahali', 'zh-cn': '斯哈里国' } },
  { id: 'c2-meditation', chapter: 2, category: 'meditation', missable: false, spoiler: false, title: { en: 'Find all Chapter 2 meditation spots', 'zh-cn': '找到第二回全部打坐蒲团' }, hint: { en: 'Several sit above or behind the main route.', 'zh-cn': '部分蒲团位于主路上方或背后的岔路。' }, location: { en: 'Yellow Wind Ridge', 'zh-cn': '黄风岭' } },

  { id: 'c3-chen-loong', chapter: 3, category: 'quest', missable: false, spoiler: false, title: { en: 'Complete Chen Loong’s request', 'zh-cn': '完成辰龙支线' }, hint: { en: 'Bring medicine from Xu Dog after the duel.', 'zh-cn': '切磋后向戌狗取得丹药并带回。' }, location: { en: 'Bitter Lake · North Shore', 'zh-cn': '苦海 · 苦海北岸' } },
  { id: 'c3-ruyi', chapter: 3, category: 'secret', missable: false, spoiler: true, title: { en: 'Unlock the Zodiac Village', 'zh-cn': '解锁六六村' }, hint: { en: 'Chen Loong’s request opens the hub and key upgrade services.', 'zh-cn': '完成辰龙请求后开启家园与重要强化功能。' }, location: { en: 'Ruyi Scroll', 'zh-cn': '如意画轴' } },
  { id: 'c3-treasure-hunter', chapter: 3, category: 'quest', missable: true, spoiler: true, title: { en: 'Complete the Treasure Hunter quest', 'zh-cn': '完成瓜田支线' }, hint: { en: 'Help the traveler twice, then search the melon field.', 'zh-cn': '两次帮助斗笠人，再前往瓜田寻找他。' }, location: { en: 'Valley of Ecstasy', 'zh-cn': '极乐谷' } },
  { id: 'c3-cyan-loong', chapter: 3, category: 'boss', missable: false, spoiler: true, title: { en: 'Defeat Cyan Loong', 'zh-cn': '击败青背龙' }, hint: { en: 'Bring the key item from an earlier hidden Loong route.', 'zh-cn': '需要先从早期隐藏龙路线取得关键道具。' }, location: { en: 'Bitter Lake · Turtle Island', 'zh-cn': '苦海 · 龟岛' } },
  { id: 'c3-prison-seals', chapter: 3, category: 'secret', missable: true, spoiler: true, title: { en: 'Open the sealed Pagoda cells', 'zh-cn': '打开浮屠界封印牢门' }, hint: { en: 'Deal with the wardens before their opportunity disappears.', 'zh-cn': '在机会消失前处理维持封印的狱卒。' }, location: { en: 'Pagoda Realm', 'zh-cn': '浮屠界' } },
  { id: 'c3-spell-binder', chapter: 3, category: 'item', missable: true, spoiler: true, title: { en: 'Unlock Spell Binder', 'zh-cn': '解锁禁字法' }, hint: { en: 'The Treasure Hunter route rewards this all-in combat spell.', 'zh-cn': '完成瓜田路线可获得这一纯战斗型法术。' }, location: { en: 'Melon Field', 'zh-cn': '瓜田' } },

  { id: 'c4-purple-altars', chapter: 4, category: 'secret', missable: true, spoiler: true, title: { en: 'Remove all purple talismans', 'zh-cn': '揭下全部紫符' }, hint: { en: 'Finish this exploration chain before the chapter’s final state change.', 'zh-cn': '必须在章节最终状态变化前完成探索链。' }, location: { en: 'Webbed Hollow / Temple of Yellow Flowers', 'zh-cn': '盘丝洞 / 黄花观' } },
  { id: 'c4-venom-daoist', chapter: 4, category: 'quest', missable: false, spoiler: true, title: { en: 'Complete both Venom Daoist encounters', 'zh-cn': '完成黑手道人两次战斗' }, hint: { en: 'His second encounter opens the chapter’s secret mountain.', 'zh-cn': '第二次战斗后会开启本章隐藏山境。' }, location: { en: 'Webbed Hollow / Temple of Yellow Flowers', 'zh-cn': '盘丝洞 / 黄花观' } },
  { id: 'c4-venom-arms', chapter: 4, category: 'item', missable: true, spoiler: true, title: { en: 'Break Venom Daoist’s extra arms', 'zh-cn': '打断黑手道人额外手臂' }, hint: { en: 'Attack his back limbs before ending the first fight.', 'zh-cn': '第一次战斗结束前优先攻击背部手臂。' }, location: { en: 'Webbed Hollow · Pool of Shattered Jade', 'zh-cn': '盘丝洞 · 碎玉池' } },
  { id: 'c4-duskveil', chapter: 4, category: 'boss', missable: false, spoiler: true, title: { en: 'Defeat the Duskveil', 'zh-cn': '击败晦月魔君' }, hint: { en: 'Completing the secret mountain grants a vessel useful in the finale.', 'zh-cn': '完成隐藏山境可获得克制章节最终战的法宝。' }, location: { en: 'Purple Cloud Mountain', 'zh-cn': '紫云山' } },
  { id: 'c4-loong', chapter: 4, category: 'boss', missable: false, spoiler: true, title: { en: 'Defeat Yellow Loong', 'zh-cn': '击败小黄龙' }, hint: { en: 'Complete the earlier Loong chain, then search the relief route.', 'zh-cn': '完成此前龙族路线，再探索堕龙壁一带。' }, location: { en: 'Webbed Hollow · Relief of the Fallen Loong', 'zh-cn': '盘丝洞 · 堕龙壁' } },
  { id: 'c4-meditation', chapter: 4, category: 'meditation', missable: false, spoiler: false, title: { en: 'Find all Chapter 4 meditation spots', 'zh-cn': '找到第四回全部打坐蒲团' }, hint: { en: 'Explore the hollow vertically; many paths overlap.', 'zh-cn': '盘丝洞立体结构复杂，注意上下重叠路线。' }, location: { en: 'Webbed Hollow', 'zh-cn': '盘丝洞' } },

  { id: 'c5-horse-guai', chapter: 5, category: 'quest', missable: true, spoiler: true, title: { en: 'Complete the Horse Guai questline', 'zh-cn': '完成马天霸支线' }, hint: { en: 'This payoff depends on meeting him throughout earlier chapters.', 'zh-cn': '结局取决于此前各章是否都与他相遇。' }, location: { en: 'Furnace Valley', 'zh-cn': '丹灶谷' } },
  { id: 'c5-five-carts', chapter: 5, category: 'quest', missable: false, spoiler: true, title: { en: 'Finish the Five Element Carts route', 'zh-cn': '完成五行战车路线' }, hint: { en: 'Speak to the Pale-Axe Stalwart and hunt every cart.', 'zh-cn': '与皓斧力士对话并击败所有战车。' }, location: { en: 'Woods of Ember / Furnace Valley', 'zh-cn': '灰烬林 / 丹灶谷' } },
  { id: 'c5-bishui', chapter: 5, category: 'boss', missable: false, spoiler: true, title: { en: 'Defeat Bishui Golden-Eyed Beast', 'zh-cn': '击败璧水金睛兽' }, hint: { en: 'Use arena transitions to change the elemental pressure.', 'zh-cn': '利用场景转换改变战斗中的元素压力。' }, location: { en: 'Bishui Cave', 'zh-cn': '璧水洞' } },
  { id: 'c5-samadhi', chapter: 5, category: 'item', missable: false, spoiler: false, title: { en: 'Collect all three Samadhi Fire Crystals', 'zh-cn': '收集三枚业火晶' }, hint: { en: 'Each is tied to a fire-aligned optional encounter.', 'zh-cn': '分别来自火属性的可选敌人。' }, location: { en: 'Flaming Mountains', 'zh-cn': '火焰山' } },
  { id: 'c5-meditation', chapter: 5, category: 'meditation', missable: false, spoiler: false, title: { en: 'Find all Chapter 5 meditation spots', 'zh-cn': '找到第五回全部打坐蒲团' }, hint: { en: 'Check the quiet ledges between the major battlefields.', 'zh-cn': '留意大战场之间较安静的高台。' }, location: { en: 'Flaming Mountains', 'zh-cn': '火焰山' } },

  { id: 'c6-skandhas', chapter: 6, category: 'quest', missable: false, spoiler: true, title: { en: 'Complete the Five Skandhas collection', 'zh-cn': '集齐五蕴' }, hint: { en: 'Combine discoveries made across the entire journey.', 'zh-cn': '汇总整个旅程中分散取得的五蕴。' }, location: { en: 'Mount Huaguo', 'zh-cn': '花果山' } },
  { id: 'c6-armor', chapter: 6, category: 'item', missable: false, spoiler: false, title: { en: 'Recover the full Wukong armor set', 'zh-cn': '集齐大圣套装' }, hint: { en: 'Each major encounter in the foothills protects one piece.', 'zh-cn': '山脚区域的几场关键战斗分别守护一件。' }, location: { en: 'Foothills', 'zh-cn': '山脚' } },
  { id: 'c6-jingubang', chapter: 6, category: 'item', missable: false, spoiler: false, title: { en: 'Claim Jingubang', 'zh-cn': '取得如意金箍棒' }, hint: { en: 'Follow the waterfall route after recovering the armor.', 'zh-cn': '集齐套装后继续探索水帘洞路线。' }, location: { en: 'Water Curtain Cave', 'zh-cn': '水帘洞' } },
  { id: 'c6-erlang', chapter: 6, category: 'secret', missable: false, spoiler: true, title: { en: 'Unlock the hidden ending route', 'zh-cn': '解锁隐藏结局路线' }, hint: { en: 'Clear the major secret areas, then revisit the Great Pagoda.', 'zh-cn': '完成主要隐藏区域后，返回小西天浮屠塔。' }, location: { en: 'The Great Pagoda', 'zh-cn': '浮屠塔' } },
  { id: 'c6-frog', chapter: 6, category: 'boss', missable: false, spoiler: true, title: { en: 'Complete the frog spirit chain', 'zh-cn': '完成蛙类精魄路线' }, hint: { en: 'The final encounter completes a journey that began in Chapter 1.', 'zh-cn': '最后一战会完成从第一回开始的蛙类路线。' }, location: { en: 'Mount Huaguo', 'zh-cn': '花果山' } },
  { id: 'ngplus-loong', chapter: 7, category: 'item', missable: false, spoiler: true, title: { en: 'Plan New Cycle material targets', 'zh-cn': '规划再入轮回材料目标' }, hint: { en: 'Use the remaining list to prioritize upgrades for the next cycle.', 'zh-cn': '根据剩余清单安排下一周目的强化优先级。' }, location: { en: 'New Cycle', 'zh-cn': '再入轮回' } }
];

export const chapterLabels: Record<Lang, Record<number, string>> = {
  en: { 1: 'Chapter 1 · Black Cloud, Red Fire', 2: 'Chapter 2 · Yellow Sand, Desolate Dusk', 3: 'Chapter 3 · White Snow, Ice Cold', 4: 'Chapter 4 · Rosy Cheeks, Gray Hair', 5: 'Chapter 5 · Golden Child, Crimson Blood', 6: 'Chapter 6 · Unfinished', 7: 'New Cycle' },
  'zh-cn': { 1: '第一回 · 火照黑云', 2: '第二回 · 风起黄昏', 3: '第三回 · 夜生白露', 4: '第四回 · 曲度紫鸳', 5: '第五回 · 日落红尘', 6: '第六回 · 未竟', 7: '再入轮回' }
};

