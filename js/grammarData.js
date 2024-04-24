﻿var grammars = [
    { "NLv": 'N5', "Nid": 1, "LNid": '', "Text": "できる" },
    { "NLv": 'N5', "Nid": 2, "LNid": '', "Text": "ある" },
    { "NLv": 'N5', "Nid": 3, "LNid": '', "Text": "いる" },
    { "NLv": 'N5', "Nid": 4, "LNid": '', "Text": "いくつ" },
    { "NLv": 'N5', "Nid": 5, "LNid": '', "Text": "いつ" },
    { "NLv": 'N5', "Nid": 6, "LNid": '', "Text": "誰・どの人・どなた・どの方" },
    { "NLv": 'N5', "Nid": 7, "LNid": '', "Text": "どう・いかが" },
    { "NLv": 'N5', "Nid": 8, "LNid": '', "Text": "どのぐらい・どれぐらい" },
    { "NLv": 'N5', "Nid": 9, "LNid": '', "Text": "何" },
    { "NLv": 'N5', "Nid": 10, "LNid": '', "Text": "なぜ・どして・なんで" },
    { "NLv": 'N5', "Nid": 11, "LNid": '', "Text": "から" },
    { "NLv": 'N5', "Nid": 17, "LNid": '', "Text": "まで" },
    { "NLv": 'N5', "Nid": 12, "LNid": '', "Text": "で" },
    { "NLv": 'N5', "Nid": 13, "LNid": '', "Text": "と" },
    { "NLv": 'N5', "Nid": 14, "LNid": '', "Text": "に" },
    { "NLv": 'N5', "Nid": 15, "LNid": '', "Text": "の" },
    { "NLv": 'N5', "Nid": 16, "LNid": '', "Text": "へ" },
    { "NLv": 'N5', "Nid": 18, "LNid": '', "Text": "を" },
    { "NLv": 'N5', "Nid": 19, "LNid": '', "Text": "や、や、など" },
    { "NLv": 'N5', "Nid": 20, "LNid": '', "Text": "か" },

















];









var definitions = [
    { "Nid": 1, "Did": 1, "Text": "可以做到" },
    { "Nid": 1, "Did": 2, "Text": "完成了，做完了" },
    { "Nid": 2, "Did": 3, "Text": "表示存在" },
    { "Nid": 2, "Did": 4, "Text": "表示拥有物品，知识，财产等" },
    { "Nid": 2, "Did": 5, "Text": "表示事情的发生" },
    { "Nid": 3, "Did": 6, "Text": "有意识，有生命的生物存在" },
    { "Nid": 4, "Did": 7, "Text": "询问小东西的个数，或老人向年轻人或孩子的年龄" },
    { "Nid": 5, "Did": 8, "Text": "用来询问，什么时候，か便是不确定的日子" },
    { "Nid": 6, "Did": 9, "Text": "谁，用于说话人不认识的第三者是某人的场合，敬意程度誰最低" },
    { "Nid": 7, "Did": 10, "Text": "怎么样，如何" },
    { "Nid": 7, "Did": 11, "Text": "怎么，如何，只能用どう" },
    { "Nid": 8, "Did": 12, "Text": "用于询问时间，距离，程度，具体数量等，多久，多远的意思" },
];
var examples = [
    { "Nid": 1, "Did": 1, "Eid": 1, "Text": "この仕事は日本語ができなくても大丈夫です" },
    { "Nid": 1, "Did": 2, "Eid": 2, "Text": "今日の宿題はできましたか" },
    { "Nid": 2, "Did": 3, "Eid": 3, "Text": "その角を右に曲がると郵便局があります" },
    { "Nid": 2, "Did": 4, "Eid": 4, "Text": "お金がありません" },
    { "Nid": 2, "Did": 5, "Eid": 5, "Text": "昨日から少し熱があって頭が痛いです" },
    { "Nid": 3, "Did": 6, "Eid": 6, "Text": "李さんがどこにいるかわかりません" },
    { "Nid": 4, "Did": 7, "Eid": 7, "Text": "妹さんはいくつですか" },
    { "Nid": 5, "Did": 8, "Eid": 8, "Text": "いつかまた日本へ来たいです" },
    { "Nid": 6, "Did": 9, "Eid": 9, "Text": "次期社長はどの方に決めましたか" },
    { "Nid": 7, "Did": 10, "Eid": 10, "Text": "紅茶をいっぱいいかが・どうですか" },
    { "Nid": 7, "Did": 11, "Eid": 11, "Text": "日本の手紙をどう書きますか" },
    { "Nid": 8, "Did": 12, "Eid": 12, "Text": "春休みはどのぐらいありますか" },
    { "Nid": 8, "Did": 12, "Eid": 13, "Text": "今からあなたのうちへいきますが、そちらまでどれぐらいかかりますか" }
];
function getGrammarsData() {
    return grammars;
}