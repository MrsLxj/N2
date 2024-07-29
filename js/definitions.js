
var definitions = [
    { "NLv": 'N2', "Nid": 1, "Did": 1, "Text": "……时候", "jiexu": "N＋の/Vる・Vた＋際（に）～際（は）", "noteA": "" },
    { "NLv": 'N2', "Nid": 2, "Did": 2, "Text": "值此之际……", "jiexu": "N/Vる＋に際してに・～にあたって", "noteA": "【积极】" },
    { "NLv": 'N2', "Nid": 3, "Did": 3, "Text": "做了……之后，紧接着发生意外的事情", "jiexu": "Vた＋たとたん（に）", "noteA": "【＋意外】【不＋意志，命令等】" },
    { "NLv": 'N2', "Nid": 4, "Did": 4, "Text": "……之后，紧接着马上发生下一个事件或重大变化", "jiexu": "Vた＋（か）と思うと・～（か）と思ったら", "noteA": "【不＋自己的行为】" },
    { "NLv": 'N2', "Nid": 5, "Did": 5, "Text": "……结束的同时，发生下一件事情", "jiexu": "Vる・Vた＋か＋Vない＋かのうちに", "noteA": "【几乎同时发生，后项多为过去时】【同一动词】" },
    { "NLv": 'N2', "Nid": 6, "Did": 6, "Text": "正在做……的时候", "jiexu": "Nの・Vている＋最中だ　～最中に", "noteA": "～最中に＋【妨碍】" },
    { "NLv": 'N2', "Nid": 7, "Did": 7, "Text": "趁着……赶紧", "jiexu": "Nの/Vる・Vている・Vない/Aい/ANな＋うちに", "noteA": "＋【意志】" },
    { "NLv": 'N2', "Nid": 7, "Did": 8, "Text": "正在做……期间发生了变化", "jiexu": "Vる・Vている・Vない＋うちに", "noteA": "【不知不觉，自然而然的变化】；不＋【意志】" },
    { "NLv": 'N2', "Nid": 8, "Did": 9, "Text": "变化……单一方向不断加剧", "jiexu": "Vる+ばかりだ・～一方だ", "noteA": "～ばかりだ多＋【不好的方向】" },
    { "NLv": 'N2', "Nid": 9, "Did": 10, "Text": "马上就要", "jiexu": "V意志形＋うとしている", "noteA": "" },
    { "NLv": 'N2', "Nid": 10, "Did": 11, "Text": "……变化正在进行过程中", "jiexu": "V连用形＋つつある", "noteA": "" },
    { "NLv": 'N2', "Nid": 11, "Did": 12, "Text": "一边……一边做某事 ＝ながら", "jiexu": "V连用形＋つつ", "noteA": "" },
    { "NLv": 'N2', "Nid": 12, "Did": 13, "Text": "经历了……之后、今までになかったことが起こる", "jiexu": "Vて＋はじめて", "noteA": "" },
    { "NLv": 'N2', "Nid": 13, "Did": 14, "Text": "作为准备先做……", "jiexu": "N＋の/ Vた　＋上で", "noteA": "【同一主语】" },
    { "NLv": 'N2', "Nid": 13, "Did": 15, "Text": "在……方面，从……来看", "jiexu": "N＋の/ Vる　＋上では", "noteA": "" },
    { "NLv": 'N2', "Nid": 14, "Did": 16, "Text": "……实现以后，马上采取后续行为", "jiexu": "V连用形＋次第", "noteA": "【多用于通知】；后不＋过去式" },
    { "NLv": 'N2', "Nid": 15, "Did": 17, "Text": "从过去到现在一直……", "jiexu": "Vて/N＋以来/このかた", "noteA": "后＋状态" },
    { "NLv": 'N2', "Nid": 16, "Did": 18, "Text": "如果不是做完……的话，某事就不会实现", "jiexu": "Vて＋からでないと・からでなければ", "noteA": "后＋否定含义的句子" },
    { "NLv": 'N2', "Nid": 17, "Did": 19, "Text": "以……为代表", "jiexu": "N+をはじめ（として） N+をはじめとする＋N", "noteA": "" },
    { "NLv": 'N2', "Nid": 18, "Did": 20, "Text": "单从……来看就……", "jiexu": "N+からして", "noteA": "【多＋消极评价】" },
    { "NLv": 'N2', "Nid": 19, "Did": 21, "Text": "表示时间/空间的范围，强调广阔", "jiexu": "N＋にわたって/ N＋にわたる＋N", "noteA": "" },
    { "NLv": 'N2', "Nid": 20, "Did": 22, "Text": "ずっと同じ状態じょうたいだ", "jiexu": "N＋を通じて・～を通して", "noteA": "" },
    { "NLv": 'N2', "Nid": 20, "Did": 23, "Text": "～を手段しゅだんにして 【＋媒介】", "jiexu": "N＋を通じて・～を通して", "noteA": "" },
    { "NLv": 'N2', "Nid": 21, "Did": 24, "Text": "尽量……；能……都……", "jiexu": "Vる/Aい/ANな＋だけ", "noteA": "" },
    { "NLv": 'N2', "Nid": 22, "Did": 25, "Text": "仅限于　向公众解释；", "jiexu": "N＋に限り", "noteA": "【多+恩惠】" },
    { "NLv": 'N2', "Nid": 22, "Did": 26, "Text": "尽量……", "jiexu": "N＋の/ Vる・Vている＋限り", "noteA": "【表范围内最大限度】" },
    { "NLv": 'N2', "Nid": 22, "Did": 27, "Text": "据……所知、调查。表限定", "jiexu": "", "noteA": "常＋見る・知る・聞く・調べる等" },
    { "NLv": 'N2', "Nid": 22, "Did": 28, "Text": "只要……就。表条件", "jiexu": "Vる・Vない/Aい/Nである/ANな・である＋限り", "noteA": "" },
    { "NLv": 'N2', "Nid": 22, "Did": 29, "Text": "不同，偏偏，信任", "jiexu": "N＋に限り", "noteA": "" },
    { "NLv": 'N2', "Nid": 23, "Did": 30, "Text": "范围不仅限于……", "jiexu": "N+に限らず", "noteA": "【由小→大】" },
    { "NLv": 'N2', "Nid": 24, "Did": 31, "Text": "不仅……", "jiexu": "~简/N/ANである+のみならず　＝だけではない", "noteA": "【书】；可 + 同级其他事物" },
    { "NLv": 'N2', "Nid": 25, "Did": 32, "Text": "不仅……而且……；岂止是……", "jiexu": "N（である）/ANな（である）/~（简）+ばかりか", "noteA": "" },
    { "NLv": 'N2', "Nid": 26, "Did": 33, "Text": "自不必说，其他也如此", "jiexu": "N（助词）＋はもとより", "noteA": "比～はもちろん更书面，前+理所当然" },
    { "NLv": 'N2', "Nid": 27, "Did": 34, "Text": "不仅……", "jiexu": "~简/N+の・（である）/ANな・（である）＋上（に）", "noteA": "好/坏更上一层楼" },
    { "NLv": 'N2', "Nid": 28, "Did": 35, "Text": "有关……", "jiexu": "N+に関して+N", "noteA": "" },
    { "NLv": 'N2', "Nid": 29, "Did": 36, "Text": "针对……进行……", "jiexu": "N+をめぐって+N", "noteA": "" },
    { "NLv": 'N2', "Nid": 30, "Did": 37, "Text": "在……方面；论……", "jiexu": "N+にかけては+N", "noteA": "多+正面评价，但不绝对" },
    { "NLv": 'N2', "Nid": 31, "Did": 38, "Text": "以……为对象做某事", "jiexu": "N+にたいして N+にたいする＋N", "noteA": "" },
    { "NLv": 'N2', "Nid": 31, "Did": 39, "Text": "与之相对的", "jiexu": "～简＋の＋にたいして N+に対して", "noteA": "" },
    { "NLv": 'N2', "Nid": 32, "Did": 40, "Text": "为了不辜负……的期待", "jiexu": "N+にこたえて N+にこたえする＋N", "noteA": "" },
    { "NLv": 'N2', "Nid": 33, "Did": 41, "Text": "以……为素材，基础，根基等制作出", "jiexu": "N+をもとに（して） N+をもとにする＋N", "noteA": "【非实际的材料】" },
    { "NLv": 'N2', "Nid": 34, "Did": 42, "Text": "以……为基准做事", "jiexu": "N+に基づいて N+に基づく・づいた＋N", "noteA": "前+【表基准的词】" },
    { "NLv": 'N2', "Nid": 35, "Did": 43, "Text": "为了符合，不偏离……而做某事", "jiexu": "N+に沿って N+に沿う・った＋N", "noteA": "【不偏离】" },
    { "NLv": 'N2', "Nid": 36, "Did": 44, "Text": "在……的影响下，处于……的状态", "jiexu": "N+のもとで・のもとに", "noteA": "" },
    { "NLv": 'N2', "Nid": 37, "Did": 45, "Text": "面向……", "jiexu": "N+むけだ", "noteA": "前+【表人的名词】" },
    { "NLv": 'N2', "Nid": 38, "Did": 46, "Text": "一方发生变化的同时，另一方也发生变化", "jiexu": "N（汉）/Vる+につれて", "noteA": "" },
    { "NLv": 'N2', "Nid": 39, "Did": 47, "Text": "多用于事物整体的变化", "jiexu": "N/Vる＋に伴ともなって・～とともに N/Vる＋に伴う", "noteA": "【非阶段】" },
    { "NLv": 'N2', "Nid": 40, "Did": 48, "Text": "根据……而定", "jiexu": "N+次第だ", "noteA": "" },
    { "NLv": 'N2', "Nid": 41, "Did": 49, "Text": "与……相应地改变", "jiexu": "N+に応じて N+に応じた＋N", "noteA": "前+【预计会发生变化的事物】＝～に合わせて" },
    { "NLv": 'N2', "Nid": 42, "Did": 50, "Text": "一……心情就总是必然如此", "jiexu": "Vる+につけて", "noteA": "【＋心里活动】" },
    { "NLv": 'N2', "Nid": 43, "Did": 51, "Text": "约=～とか～とか", "jiexu": "N/Vる/Aい＋やら", "noteA": "多 + 这样那样真够呛" },
    { "NLv": 'N2', "Nid": 44, "Did": 52, "Text": "不知道哪个表达更恰当", "jiexu": "～简/N・AN＋というか～というか", "noteA": "【情商低】" },
    { "NLv": 'N2', "Nid": 45, "Did": 53, "Text": "不管……还是……都", "jiexu": "~简/N/AN+にしても・にしろ・にせよ", "noteA": "【都可以得出同样的结论】" },
    { "NLv": 'N2', "Nid": 46, "Did": 54, "Text": "对例子进行汇总 ", "jiexu": "N+といった+N", "noteA": "【接在几个例子之后】" },
    { "NLv": 'N2', "Nid": 47, "Did": 55, "Text": "不管……", "jiexu": "N＋を問わず", "noteA": "年齢、国籍こくせき、天候てんこう、男女だんじょ、内外ないがい、有無うむ" },
    { "NLv": 'N2', "Nid": 48, "Did": 56, "Text": "同じようになる", "jiexu": "N＋にかかわりなく・～にかかわらず", "noteA": "" },
    { "NLv": 'N2', "Nid": 49, "Did": 57, "Text": "不理会，尽管平时会顾忌", "jiexu": "～（简）/N（である）/AN+な・である＋の＋もかまわず", "noteA": "后＋非同寻常;含有意外语感的动作的句子" },
    { "NLv": 'N2', "Nid": 50, "Did": 58, "Text": "暂不考虑；后项比前项更想强调", "jiexu": "N（助）+はともかく（として）", "noteA": "" },
    { "NLv": 'N2', "Nid": 51, "Did": 59, "Text": "暂且放一边，按下不表", "jiexu": "N（助）+はさておき", "noteA": "前多+在此之前已是话题的词语" },
    { "NLv": 'N2', "Nid": 52, "Did": 60, "Text": "不可能……，不会……", "jiexu": "～（简）/N+な・N+の/AN+な＋わけがない", "noteA": "【全部否定】" },
    { "NLv": 'N2', "Nid": 53, "Did": 61, "Text": "不能说全部都……", "jiexu": "～（简）/N+の・な・である/AN+な・である+わけではない；～（简）/N/AN + というわけではない", "noteA": "【多表部分否定】" },
    { "NLv": 'N2', "Nid": 54, "Did": 62, "Text": "“怎么会……呢”", "jiexu": "", "noteA": "强烈的否定；多 + 负面情绪；口语、稍带主观感情色彩的语气" },
    { "NLv": 'N2', "Nid": 55, "Did": 63, "Text": "岂止是……连……也……", "jiexu": "N+どころではない・どころか；～（简）/N・AN（な）+どころではない・どころか", "noteA": "多+更差；前后项是程度相差很大或相反的事情" },
    { "NLv": 'N2', "Nid": 56, "Did": 64, "Text": "不能说具备某种条件就一定……", "jiexu": "～（简）/N・AN（だ）+というものではない・というものでもない", "noteA": "表说话人就事物本质发表的观点或感想" },
    { "NLv": 'N2', "Nid": 57, "Did": 65, "Text": "下定义", "jiexu": "", "noteA": "后+～だ・～である・～という意味である・～ということである・～（の）ことである" },
    { "NLv": 'N2', "Nid": 58, "Did": 66, "Text": "说起……引出新话题", "jiexu": "N（取り上げる言葉）＋といえば", "noteA": "言葉を取り上げ" },
    { "NLv": 'N2', "Nid": 58, "Did": 67, "Text": "要说……确实……，但是……", "jiexu": "~简/AN・N（だ）＋といえば", "noteA": "一応認めておいて" },
    { "NLv": 'N2', "Nid": 59, "Did": 68, "Text": "说起……谈到……", "jiexu": "N/V/AN/Aい＋というと・～といえば・～といったら", "noteA": "すぐに思いつくこと" },
    { "NLv": 'N2', "Nid": 60, "Did": 69, "Text": "针对……的话题", "jiexu": "N+（のこと）となると", "noteA": "＋不同寻常的态度" },
    { "NLv": 'N2', "Nid": 61, "Did": 70, "Text": "说起……谈到……", "jiexu": "N+といったら", "noteA": "后+不是一般程度的句子或表吃惊" },
    { "NLv": 'N2', "Nid": 62, "Did": 71, "Text": "尽管……却……", "jiexu": "~(简)/N/Nである/ANである＋にもかかわらず", "noteA": "+吃惊/意外等" },
    { "NLv": 'N2', "Nid": 63, "Did": 72, "Text": "和想象的不一样", "jiexu": "~（简）/(Nである/ANな)＋ものの；~（简）/(N/AN)＋とはいうものの", "noteA": "" },
    { "NLv": 'N2', "Nid": 64, "Did": 73, "Text": "提示与……状态所预想的事情不同", "jiexu": "V连用／Aい／N・Nであり／AN・ANであり＋ながら", "noteA": "" },
    { "NLv": 'N2', "Nid": 65, "Did": 74, "Text": "心口不一，口嫌体正直", "jiexu": "V连用+つつ（も）", "noteA": "" },
    { "NLv": 'N2', "Nid": 66, "Did": 75, "Text": "虽说……", "jiexu": "~（简）/N+といっても", "noteA": "" },
    { "NLv": 'N2', "Nid": 67, "Did": 76, "Text": "（不能）仅因为……就……", "jiexu": "～（简）+からといって", "noteA": "多+否定表达、后多+〜とは限らない・〜わけではない・〜とはいえない等" },
    { "NLv": 'N2', "Nid": 68, "Did": 77, "Text": "假定……", "jiexu": "～（简）+～としたら・とすれば・とすると・となったら・となれば・となると", "noteA": "" },
    { "NLv": 'N2', "Nid": 69, "Did": 78, "Text": "如果能……的话", "jiexu": "Vる（可能含义）＋ものなら", "noteA": "可能性小" },
    { "NLv": 'N2', "Nid": 70, "Did": 79, "Text": "如果（要）……的话", "jiexu": "V意志形＋うものなら", "noteA": "【+严重结果】" },
    { "NLv": 'N2', "Nid": 71, "Did": 80, "Text": "如果不……就无法实现", "jiexu": "〜ない／AN・Nでない＋ことには", "noteA": "【+否定含义】=なしには" },
    { "NLv": 'N2', "Nid": 72, "Did": 81, "Text": "如果没有……的话", "jiexu": "N+を抜きにしては", "noteA": "【前+高度评价的事物】" },
    { "NLv": 'N2', "Nid": 73, "Did": 82, "Text": "即使……是事实，说话人情绪也不受其影响", "jiexu": "～（简）+としても・〜にしても・〜にしろ・〜にせよ", "noteA": "【＋评价/判断/感受】" },
    { "NLv": 'N2', "Nid": 74, "Did": 83, "Text": "因为……原因；使用……手段和方法；", "jiexu": "N+によって", "noteA": "" },
    { "NLv": 'N2', "Nid": 75, "Did": 84, "Text": "申述辩解", "jiexu": "～（简）/AN・N＋な+ものだから・もので", "noteA": "【口语】；【后不+命令，意志】【句末女性儿童使用】" },
    { "NLv": 'N2', "Nid": 76, "Did": 85, "Text": "由于……的影响", "jiexu": "N+の/~（简）/AN＋な＋おかげだ・せいだ", "noteA": "" },
    { "NLv": 'N2', "Nid": 77, "Did": 86, "Text": "因为非常……所以", "jiexu": "N+の/~（简）/AN＋な＋あまり あまりの＋N＋に", "noteA": "后+不寻常的结果" },
    { "NLv": 'N2', "Nid": 78, "Did": 87, "Text": "向公众通知", "jiexu": "N+につき", "noteA": "" },
    { "NLv": 'N2', "Nid": 79, "Did": 88, "Text": "虽也有其他理由，但总之是因为……而做某事", "jiexu": "~（简）/AN+な・である/N＋の・である＋にことだし", "noteA": "后+说话人判断，希望，意志，要求说话人做……" },
    { "NLv": 'N2', "Nid": 80, "Did": 89, "Text": "从……的性格，平日态度来推断……", "jiexu": "N（人）+のことだから", "noteA": "前+人，后+推断" },
    { "NLv": 'N2', "Nid": 81, "Did": 90, "Text": "正因为……更加", "jiexu": "~（简）/AN+な・である/N（である）＋だけに", "noteA": "强调" },
    { "NLv": 'N2', "Nid": 82, "Did": 91, "Text": "就是因为……", "jiexu": "~（简）/AN+な・である/Nである＋ばかりに", "noteA": "多+不好的结果" },
    { "NLv": 'N2', "Nid": 83, "Did": 92, "Text": "既然……就（应该）……", "jiexu": "~（简）/ANである/Nである＋からには・以上（は）；Vる・た＋上は", "noteA": "后+说话人判断，希望，意志，要求说话人做……" },
    { "NLv": 'N2', "Nid": 84, "Did": 93, "Text": "心里上无法，非能力问题", "jiexu": "V连用+がたい", "noteA": "几乎不可能" },
    { "NLv": 'N2', "Nid": 85, "Did": 94, "Text": "礼貌地拒绝", "jiexu": "", "noteA": "【その状況・その条件・話者の立場】【多用于服务业，比较正式】" },
    { "NLv": 'N2', "Nid": 86, "Did": 95, "Text": "可能性がある、可能性がない", "jiexu": "", "noteA": "V连用+得る・得ない" },
    { "NLv": 'N2', "Nid": 87, "Did": 96, "Text": "出于道德，人情，义务等，无法做到", "jiexu": "Vる＋わけにはいかない・～わけにもいかない", "noteA": "不能用于能力上无法做到的事情，主语通常是第一人称" },
    { "NLv": 'N2', "Nid": 88, "Did": 97, "Text": "想……而无法……", "jiexu": "", "noteA": "V连用+ようがない" },
    { "NLv": 'N2', "Nid": 89, "Did": 98, "Text": "不是……的时候", "jiexu": "N+Vる＋どころではない", "noteA": "因没有余力：お金がない、時間がない、うるさい、病気，所以无法做到……事情" },
    { "NLv": 'N2', "Nid": 90, "Did": 99, "Text": "从……（状态、期间，频率，尺度等）来看不符", "jiexu": "N+の/AN＋な・である/~（简）＋わりに（は）", "noteA": "前+年齢，値段、心配する、若い" },
    { "NLv": 'N2', "Nid": 91, "Did": 100, "Text": "从……来看出乎意料", "jiexu": "N（である）/AN+である/~（简）＋にしては", "noteA": "前+特定事物，不+形容词，尺度，程度等" },
    { "NLv": 'N2', "Nid": 92, "Did": 101, "Text": "不愧是……到底没白……", "jiexu": "N/AN+である/~（简）＋だけ（のことは）ある・～だけあって・～だけに", "noteA": "不接将来以及推测" },
    { "NLv": 'N2', "Nid": 93, "Did": 102, "Text": "という立場・資格・役割・名目で", "jiexu": "N+として", "noteA": "" },
    { "NLv": 'N2', "Nid": 94, "Did": 103, "Text": "换位思考", "jiexu": "N+にとって", "noteA": "前+表人的词，后+如何评价" },
    { "NLv": 'N2', "Nid": 95, "Did": 104, "Text": "以……为对象；与之相对的", "jiexu": "", "noteA": "" },
    { "NLv": 'N2', "Nid": 96, "Did": 105, "Text": "如果以……立场，即使从……立场看；站在此人立场上推测此人……", "jiexu": "N+にしたら・～にすれば～にしてみれば・～にしても", "noteA": "" },
    { "NLv": 'N2', "Nid": 97, "Did": 106, "Text": "叙述过去仅发生过一次的事情，后续表结果", "jiexu": "", "noteA": "【强调结果】" },
    { "NLv": 'N2', "Nid": 98, "Did": 107, "Text": "……之后，一直/再（没）……", "jiexu": "Vた＋きり", "noteA": "" },
    { "NLv": 'N2', "Nid": 99, "Did": 108, "Text": "做了各种之后，最终变成了遗憾的结果", "jiexu": "", "noteA": "【+遗憾的结果】" },
    { "NLv": 'N2', "Nid": 100, "Did": 109, "Text": "做了各种之后，最终变成了某种结果", "jiexu": "Vた/N+の＋すえ（に）", "noteA": "" },
    { "NLv": 'N2', "Nid": 101, "Did": 110, "Text": "差点就……", "jiexu": "Vる・ない＋ところだった", "noteA": "" },
    { "NLv": 'N2', "Nid": 102, "Did": 111, "Text": "没能", "jiexu": "V去掉ない＋ずじまいだ；する→せず", "noteA": "【错过时机的遗憾】" },
    { "NLv": 'N2', "Nid": 103, "Did": 112, "Text": "低程度，所以可能性高/理所当然", "jiexu": "", "noteA": "前+说话人认为程度轻的词语。少+否定" },
    { "NLv": 'N2', "Nid": 104, "Did": 113, "Text": "评价低，轻蔑", "jiexu": "N（助）+など・なんか・なんて", "noteA": "" },
    { "NLv": 'N2', "Nid": 105, "Did": 114, "Text": "谓语可能性的最低点", "jiexu": "N（助）/V连用、Vて＋さえ", "noteA": "" },
    { "NLv": 'N2', "Nid": 106, "Did": 115, "Text": "谓语可能性的极端，描述对既定事实的惊讶、意外", "jiexu": "", "noteA": "不+推量、假定、依赖、劝诱；少+否定" },
    { "NLv": 'N2', "Nid": 107, "Did": 116, "Text": "就算……也要……", "jiexu": "Vて＋でも", "noteA": "" },
    { "NLv": 'N2', "Nid": 108, "Did": 117, "Text": "连……也没有……", "jiexu": "何・だれ一＋助数詞＋として～ない", "noteA": "" },
    { "NLv": 'N2', "Nid": 109, "Did": 118, "Text": "看来……", "jiexu": "~简+とみえる", "noteA": "" },
    { "NLv": 'N2', "Nid": 110, "Did": 119, "Text": "不难……很有可能……", "jiexu": "V连用+かねない", "noteA": "+不好的结果" },
    { "NLv": 'N2', "Nid": 111, "Did": 120, "Text": "有可能发生", "jiexu": "N+の/Vる・ない＋恐れがある", "noteA": "+不好的结果" },
    { "NLv": 'N2', "Nid": 112, "Did": 121, "Text": "不会……吧", "jiexu": "書くまい 見るまい・見まい するまい・すまい くるまい・こまい", "noteA": "【文章用】ではあるまいか＝～のではないか口语" },
    { "NLv": 'N2', "Nid": 113, "Did": 122, "Text": "一定……肯定……", "jiexu": "~简/AN（である）/N（である）＋に違いない・に相違ない", "noteA": "表断定" },
    { "NLv": 'N2', "Nid": 114, "Did": 123, "Text": "认为绝对是……", "jiexu": "~简/AN/N＋にきまっている", "noteA": "与に違いない不同，是主观性地，直觉性地表达" },
    { "NLv": 'N2', "Nid": 115, "Did": 124, "Text": "理应……本来就是……", "jiexu": "Vる・ない/Aい/AN＋な＋ものだ", "noteA": "常识" },
    { "NLv": 'N2', "Nid": 116, "Did": 125, "Text": "从常识来看，简直是……", "jiexu": "~简/AN/N＋というものだ", "noteA": "" },
    { "NLv": 'N2', "Nid": 117, "Did": 126, "Text": "只不过是……", "jiexu": "～简/AN・N（である）＋にすぎない", "noteA": "前+说话人认为不特别，不重要，很少的事情" },
    { "NLv": 'N2', "Nid": 118, "Did": 127, "Text": "正是……无外乎……", "jiexu": "N+にほかならない", "noteA": "まさに……だ" },
    { "NLv": 'N2', "Nid": 119, "Did": 128, "Text": "最好是……，……的话再好不过了", "jiexu": "～简现/AN・N（である）＋にこしたことはない", "noteA": "" },
    { "NLv": 'N2', "Nid": 120, "Did": 129, "Text": "只有……只好……因为没有其他选择", "jiexu": "Vる＋しかない・よりほかない", "noteA": "" },
    { "NLv": 'N2', "Nid": 121, "Did": 130, "Text": "应该……不应该……", "jiexu": "Vる＋べきだ・べきではない/べき・べきではない＋N　＊する＞するべき・すべき", "noteA": "道德，常识，说话人的观点" },
    { "NLv": 'N2', "Nid": 122, "Did": 131, "Text": "一起做吧，不一起做吗", "jiexu": "V意志+ではないか", "noteA": "" },
    { "NLv": 'N2', "Nid": 123, "Did": 132, "Text": "应该……（不）要……", "jiexu": "Vる・ない＋ことだ", "noteA": "表忠告，建议" },
    { "NLv": 'N2', "Nid": 124, "Did": 133, "Text": "最好做/不做……", "jiexu": "Vる・ない＋ものだ Vる＋ものではない", "noteA": "道德，常识" },
    { "NLv": 'N2', "Nid": 125, "Did": 134, "Text": "没必要，用不着", "jiexu": "Vる＋ことはない", "noteA": "说话人的判断" },
    { "NLv": 'N2', "Nid": 126, "Did": 135, "Text": "不打算做，做还是不做", "jiexu": "書くまい 見るまい・見まい するまい・すまい くるまい・こまい", "noteA": "" },
    { "NLv": 'N2', "Nid": 127, "Did": 136, "Text": "绝对不打算做", "jiexu": "Vる＋ものか", "noteA": "和12课不做区分?" },
    { "NLv": 'N2', "Nid": 128, "Did": 137, "Text": "感到非常……", "jiexu": "Vて/Aいくて/ANで＋しかたがない・しょうがない・たまらない", "noteA": "前+表示说话人的感情、欲望等的词语" },
    { "NLv": 'N2', "Nid": 129, "Did": 138, "Text": "无法抑制思考/担心……", "jiexu": "Vて/Aいくて/ANで＋ならない", "noteA": "" },
    { "NLv": 'N2', "Nid": 130, "Did": 139, "Text": "无法抑制住，无论如何也要做……", "jiexu": "Vない＋ではいられない　＊する＞せずに", "noteA": "" },
    { "NLv": 'N2', "Nid": 131, "Did": 140, "Text": "出于道德，人情，义务等必须做", "jiexu": "Vない＋わけに（は）いかない", "noteA": "" },
    { "NLv": 'N2', "Nid": 132, "Did": 141, "Text": "不得不", "jiexu": "V去掉ない＋ざるをえない　＊する＞せずる", "noteA": "" },
    { "NLv": 'N2', "Nid": 133, "Did": 142, "Text": "过去经常……", "jiexu": "Vた＋ものだ", "noteA": "" },
    { "NLv": 'N2', "Nid": 133, "Did": 143, "Text": "表强烈的感情（一般而言）", "jiexu": "～简/AN+な＋ものだ", "noteA": "" },
    { "NLv": 'N2', "Nid": 134, "Did": 144, "Text": "真想……真想让、内心的希望和普通的愿望", "jiexu": "", "noteA": "" },
    { "NLv": 'N2', "Nid": 135, "Did": 145, "Text": "就没有……吗", "jiexu": "", "noteA": "" },
    { "NLv": 'N2', "Nid": 136, "Did": 146, "Text": "有……的感觉；表评价，感受", "jiexu": "", "noteA": "" },
    { "NLv": 'N2', "Nid": 137, "Did": 147, "Text": "真是……表感叹", "jiexu": "", "noteA": "" },
    { "NLv": 'N2', "Nid": 138, "Did": 148, "Text": "多么……啊，文章用", "jiexu": "", "noteA": "" },
    { "NLv": 'N2', "Nid": 139, "Did": 149, "Text": "存在的场所，领域，时机等", "jiexu": "", "noteA": "" },
    { "NLv": 'N2', "Nid": 140, "Did": 150, "Text": "在……之前，先做与之相关的某事", "jiexu": "", "noteA": "" },
    { "NLv": 'N2', "Nid": 141, "Did": 151, "Text": "转折", "jiexu": "", "noteA": "＝～ではあるが 而といっても是对于程度的修正" },
    { "NLv": 'N2', "Nid": 142, "Did": 152, "Text": "＝～から判断すると", "jiexu": "", "noteA": "" },
    { "NLv": 'N2', "Nid": 143, "Did": 153, "Text": "＝「～しなさい・してはいけない」と指示を出す言い方", "jiexu": "", "noteA": "" },
    { "NLv": 'N2', "Nid": 144, "Did": 154, "Text": "没有做……而做某事，或保持某种状态", "jiexu": "", "noteA": "" },
    { "NLv": 'N2', "Nid": 145, "Did": 155, "Text": "针对某件事，说话人讲述自己的感想", "jiexu": "", "noteA": "" },
    { "NLv": 'N2', "Nid": 146, "Did": 156, "Text": "要说……确实……", "jiexu": "", "noteA": "和といえば相似" },
    { "NLv": 'N2', "Nid": 147, "Did": 157, "Text": "传闻", "jiexu": "", "noteA": "" },
    { "NLv": 'N2', "Nid": 148, "Did": 158, "Text": "理所当然会变成某一种结果", "jiexu": "", "noteA": "" },
    { "NLv": 'N2', "Nid": 149, "Did": 159, "Text": "原因，判断依据", "jiexu": "", "noteA": "" },
    { "NLv": 'N2', "Nid": 150, "Did": 160, "Text": "举例，含有不耐烦的口气", "jiexu": "", "noteA": "" },
    { "NLv": 'N2', "Nid": 151, "Did": 161, "Text": "相当于「だけ」，比「だけ」更加正式。", "jiexu": "", "noteA": "" },
    
    { "NLv": 'N1', "Nid": 152, "Did": 162, "Text": "接二连三，一连串", "jiexu": "Vる/Vた/N＋を皮切りとして/に（して）", "noteA": "" },
    { "NLv": 'N1', "Nid": 153, "Did": 163, "Text": "因为……而特别", "jiexu": "PI＋とあって", "noteA": "" },
    { "NLv": 'N1', "Nid": 154, "Did": 164, "Text": "是A独有的，一般的B没有的", "jiexu": "N1+ならではの＋N2", "noteA": "" },
    { "NLv": 'N1', "Nid": 155, "Did": 165, "Text": "比……更加", "jiexu": "N+にもまして", "noteA": "" },
    { "NLv": 'N1', "Nid": 156, "Did": 166, "Text": "时/空，到……，从小到大", "jiexu": "N+に至るまで", "noteA": "" },
    { "NLv": 'N1', "Nid": 157, "Did": 167, "Text": "达到……阶段、状态", "jiexu": "Vる/N＋に至る", "noteA": "" },
    { "NLv": 'N1', "Nid": 158, "Did": 168, "Text": "从并非最重要的一点举例B的程度极端。单一→整体", "jiexu": "N+からして", "noteA": "" },

    
    { "NLv": 'N1', "Nid": 159, "Did": 169, "Text": "列举要进行比较的例子，然后说“……更加”", "jiexu": "N+に至っては", "noteA": "" },
    { "NLv": 'N1', "Nid": 160, "Did": 170, "Text": "就算是……，“和从某一事实或条件自然而然预想到的结果不一样”", "jiexu": "N+といえども", "noteA": "" },
    { "NLv": 'N1', "Nid": 161, "Did": 171, "Text": "就算不愿意也不得不做。", "jiexu": "N＋余儀なくされる", "noteA": "【新闻】=ざるを得ない" },
    { "NLv": 'N1', "Nid": 162, "Did": 172, "Text": "不得不", "jiexu": "～＋ざるを得ない", "noteA": "" },
    { "NLv": 'N1', "Nid": 163, "Did": 173, "Text": "就算是最小单位也绝对不能", "jiexu": "1＋助数詞＋たりとも＋……ない", "noteA": "" },
    { "NLv": 'N1', "Nid": 164, "Did": 174, "Text": "有……之嫌，有过于……的倾向", "jiexu": "Vる/Vない＋きらいがある", "noteA": "" },
    { "NLv": 'N1', "Nid": 165, "Did": 175, "Text": "=のです、解释说明", "jiexu": "V-PI＋次第だ", "noteA": "" },
    { "NLv": 'N1', "Nid": 166, "Did": 176, "Text": "以……为手段，方法，不用于日常", "jiexu": "N＋をもって", "noteA": "" },
    { "NLv": 'N1', "Nid": 279, "Did": 177, "Text": "因为有了A，B才能存在", "jiexu": "", "noteA": "" },
    { "NLv": 'N1', "Nid": 167, "Did": 178, "Text": "长时间强烈地想，跪在佛前苦苦求了百年", "jiexu": "Vて＋やまない Vて＋やみません", "noteA": "" },
    
    { "NLv": 'N1', "Nid": 168, "Did": 179, "Text": "【沾着】，也表陷入不好的状态无法摆脱的样子。", "jiexu": "N＋まみれ", "noteA": "" },
    { "NLv": 'N1', "Nid": 169, "Did": 180, "Text": "对应……立场或水平时，凭自己用心自作，也用于表达虽然不够但尽力时，孩子们靠自己努力。", "jiexu": "PI＋なりに・なりの＋N", "noteA": "惯用：「それなり」「～ば～なり」" },
    { "NLv": 'N1', "Nid": 170, "Did": 181, "Text": "也不是不……。＝～ないものでもない、～なくもない", "jiexu": "V去掉ない＋ないでもない", "noteA": "" },
    { "NLv": 'N1', "Nid": 171, "Did": 182, "Text": "对经过进行解释，表“一直发生不好的事情，最终导致……不好的结果”", "jiexu": "Vる・Vない＋しまつで", "noteA": "表说话人指责，遗憾的心情" },
    { "NLv": 'N1', "Nid": 172, "Did": 183, "Text": "列举，A也行B也行（什么都行）", "jiexu": "N１（助詞）/V１る＋なり＋N２（助詞）/V２る＋なり", "noteA": "表提议或给对方建议，提醒对方" },
    { "NLv": 'N1', "Nid": 173, "Did": 184, "Text": "大部分都被……所占、持续。", "jiexu": "N＋ずくめだ", "noteA": "大部分都被……所占、持续" },
    { "NLv": 'N1', "Nid": 174, "Did": 185, "Text": "有A，B两个方面。", "jiexu": "AN・N＋にして", "noteA": "" },
    { "NLv": 'N1', "Nid": 175, "Did": 186, "Text": "A就不用说了，比A程度低的B也不……", "jiexu": "N１＋はおろか＋N２＋も・さえ・まで・すら＋……ない", "noteA": "" },
    { "NLv": 'N1', "Nid": 176, "Did": 187, "Text": "连……也……极端的程度，多用于否定。", "jiexu": "N＋（助詞）＋すら", "noteA": "" },
    
    { "NLv": 'N1', "Nid": 177, "Did": 188, "Text": "做B也带有A的目的，兼~、B是主要目的", "jiexu": "N＋かたがた", "noteA": "" },
    { "NLv": 'N1', "Nid": 178, "Did": 189, "Text": "利用A的机会，做B，顺便，借~之便、A是主要目的", "jiexu": "N/V去ます＋がてら", "noteA": "" },
    { "NLv": 'N1', "Nid": 179, "Did": 190, "Text": "对意外事实的惊讶，佩服，愕然等。", "jiexu": "PI＋とは", "noteA": "" },
    { "NLv": 'N1', "Nid": 180, "Did": 191, "Text": "紧接着……之后发生了……，表对发生的事情或别人的意外行为感到惊讶。", "jiexu": "Vる＋なり", "noteA": "" },
    { "NLv": 'N1', "Nid": 181, "Did": 192, "Text": "列举烦恼或喜悦的理由，状态。", "jiexu": "PI１＋わ＋PI２＋わ", "noteA": "" },
    { "NLv": 'N1', "Nid": 182, "Did": 193, "Text": "在……之后几乎同时发生了……，表对两件事间隔时间之短的惊讶。", "jiexu": "Vる・Vた＋が早いか：＝～なり", "noteA": "" },
    { "NLv": 'N1', "Nid": 183, "Did": 194, "Text": "A之后马上做B，AB反复几次的样子，也表“很努力把A做完了，却马上B，结果努力都白费了”", "jiexu": "Vる・Vた＋そばから", "noteA": "【重复】【白费】" },
    { "NLv": 'N1', "Nid": 184, "Did": 195, "Text": "不怎么样就放不下，表说话人强烈的意愿", "jiexu": "V去ない＋ずにはおかない", "noteA": "" },
    { "NLv": 'N1', "Nid": 184, "Did": 196, "Text": "自然而然地产生……感情或进入……状态。", "jiexu": "V去ない＋ずにはおかない", "noteA": "" },
    { "NLv": 'N1', "Nid": 185, "Did": 197, "Text": "如果……的话，一定会，后项是说话人不希望发生的。「～たら最後」", "jiexu": "Vた＋が最後", "noteA": "" },
    { "NLv": 'N1', "Nid": 186, "Did": 198, "Text": "带着愤怒，不满等强烈的情绪做……", "jiexu": "Vて＋やる", "noteA": "" },
    
    { "NLv": 'N1', "Nid": 187, "Did": 199, "Text": "如果是……的条件或立场，当然就会……", "jiexu": "N＋ともなると/ともなれば", "noteA": "" },
    { "NLv": 'N1', "Nid": 188, "Did": 200, "Text": "一边……，另一边却……与之相反、不同。", "jiexu": "PI＋の＋にひきかえ（なAな＋のにひきかえ｜N＋にひきかえ）", "noteA": "" },
    { "NLv": 'N1', "Nid": 189, "Did": 201, "Text": "不仅……，……也。A+B；A……B更最重要", "jiexu": "N+もさることながら", "noteA": "" },
    { "NLv": 'N1', "Nid": 190, "Did": 202, "Text": "A也是B也是，无论什么都一样。何であれ也可以", "jiexu": "N１＋であれ＋N２＋であれ", "noteA": "" },
    { "NLv": 'N1', "Nid": 190, "Did": 203, "Text": "不管……", "jiexu": "疑问词+（N）＋であれ", "noteA": "" },
    { "NLv": 'N1', "Nid": 191, "Did": 204, "Text": "根据某种状态，经验，规定，采取某种行动，用于法律，规定时，用則して。", "jiexu": "N＋にそくして", "noteA": "" },
    { "NLv": 'N1', "Nid": 192, "Did": 205, "Text": "只有……多用于高度评价时，相比来看，……最棒", "jiexu": "N+をおいて他にない", "noteA": "" },
    { "NLv": 'N1', "Nid": 193, "Did": 206, "Text": "不管在任何情况下，首先……", "jiexu": "何をおいても", "noteA": "" },
    { "NLv": 'N1', "Nid": 194, "Did": 207, "Text": "自不必说", "jiexu": "Vる＋までもなく・ない", "noteA": "" },
    { "NLv": 'N1', "Nid": 195, "Did": 208, "Text": "看……是什么样的情况，决定怎么做。", "jiexu": "N＋（の）＋いかん", "noteA": "" },
    { "NLv": 'N1', "Nid": 196, "Did": 209, "Text": "不管……是什么样都没有关系", "jiexu": "N+いかんにかかわらず・によらず・を問わず", "noteA": "" },
    { "NLv": 'N1', "Nid": 197, "Did": 210, "Text": "虽然没有A那么高水平，但B的程度……", "jiexu": "Vないまでも", "noteA": "" },
    { "NLv": 'N1', "Nid": 197, "Did": 211, "Text": "", "jiexu": "Vるまでも", "noteA": "" },
    { "NLv": 'N1', "Nid": 198, "Did": 212, "Text": "列举A，B两个例子之后，“从整体来看”；表达自认为很精彩或糟糕的心情。【后+评价】", "jiexu": "N１＋といい＋N２＋といい", "noteA": "" },
    { "NLv": 'N1', "Nid": 199, "Did": 213, "Text": "……之类……的东西", "jiexu": "N＋といったところ", "noteA": "" },

    { "NLv": 'N1', "Nid": 200, "Did": 214, "Text": "说……好呢，边思考边说，情商高。=~というべきか＝～というか", "jiexu": "PI1+といおうか＋PI２＋といおうか", "noteA": "" },
    { "NLv": 'N1', "Nid": 201, "Did": 215, "Text": "批评，利用……的情况为己用，做不好的事情", "jiexu": "PI＋の＋をいいことに", "noteA": "" },
    { "NLv": 'N1', "Nid": 202, "Did": 216, "Text": "强烈否定，不对，反问", "jiexu": "句＋か", "noteA": "" },
    { "NLv": 'N1', "Nid": 203, "Did": 217, "Text": "太过于。只接现在简体形", "jiexu": "PI＋にもほどがある", "noteA": "" },
    { "NLv": 'N1', "Nid": 204, "Did": 218, "Text": "A的话还能勉强接受，B接受不了，太不正常", "jiexu": "PI＋ならまだしも", "noteA": "" },
    { "NLv": 'N1', "Nid": 205, "Did": 219, "Text": "要比……早很久的基础阶段。用于评价", "jiexu": "N＋以前,重ねる形なども使われる", "noteA": "" },
    { "NLv": 'N1', "Nid": 206, "Did": 220, "Text": "从目前情况来看，可以知道结果当然是……", "jiexu": "V１る＋べくして＋V２た", "noteA": "" },
    { "NLv": 'N1', "Nid": 207, "Did": 221, "Text": "A和其他情况都不一样，很特殊，所以……", "jiexu": "N１＋が＋N２＋（な）＋だけに", "noteA": "" },
    
    { "NLv": 'N1', "Nid": 208, "Did": 222, "Text": "A也是，B也是，什么都是……" , "jiexu": "N１＋と言わず＋N２＋と言わず", "noteA": ""},
    { "NLv": 'N1', "Nid": 209, "Did": 223, "Text": "没想象中那么好/没想象中那么坏。PI1，PI２には同じ言葉が使われる、过去形のみ。形容詞のときはPI２に現在形が使われることもある。" , "jiexu": "PI1+ら＋PI２＋で", "noteA": ""},
    { "NLv": 'N1', "Nid": 210, "Did": 224, "Text": "情况太糟了，耳不忍闻，目不忍视" , "jiexu": "にたえない", "noteA": ""},
    { "NLv": 'N1', "Nid": 211, "Did": 225, "Text": "如果……的话会导致不好的结果，事情会变糟糕、影响巨大。" , "jiexu": "Vよう＋ものなら", "noteA": ""},
    { "NLv": 'N1', "Nid": 212, "Did": 226, "Text": "如果是……也许会那样，但不是，所以……的心情。" , "jiexu": "PI＋ならいざしらず;なA・N去掉だ", "noteA": ""},
    { "NLv": 'N1', "Nid": 213, "Did": 227, "Text": "想尽力……希望对方做……、明白很难，但还是想实现它、希望对方实现它的心情" , "jiexu": "Vない+ものか/ものだろうか", "noteA": ""},
    { "NLv": 'N1', "Nid": 214, "Did": 228, "Text": "最好是……，普遍认为是好的事情，没有比它更好的选择了。" , "jiexu": "Vる・ない/いA/なA/N+に越したことはない", "noteA": ""},
    { "NLv": 'N1', "Nid": 215, "Did": 229, "Text": "B与A预想或期待的情况不一样。虽然是春天，今天还是非常寒冷。" , "jiexu": "PI＋とはいえ", "noteA": ""},
    { "NLv": 'N1', "Nid": 216, "Did": 230, "Text": "程度或数量大概是那样，表达不够的心情，常和顶多，总算，好歹等一起使用。" , "jiexu": "Vる/N+といったところだ", "noteA": ""},
    { "NLv": 'N1', "Nid": 217, "Did": 231, "Text": "动词相同，出于某种理由或情况，就算想做A也做不了的强烈情绪。【情绪性理由】" , "jiexu": "Vる＋に＋Vできない", "noteA": "【できない】可能形态"},
    { "NLv": 'N1', "Nid": 218, "Did": 232, "Text": "把A作为B的借口时，多用于批评别人时。" , "jiexu": "N＋にかこつけて", "noteA": ""},

    { "NLv": 'N1', "Nid": 219, "Did": 233, "Text": "表道歉，请求，感谢时的铺垫说法。", "jiexu": "いA・N＋の＋ところ(を)", "noteA": ""},
    { "NLv": 'N1', "Nid": 220, "Did": 234, "Text": "自己非常的……心情", "jiexu": "N＋至り", "noteA": ""},
    { "NLv": 'N1', "Nid": 221, "Did": 235, "Text": "明确地说某事发生改变或结束的时间点", "jiexu": "N＋をもって・もちまして", "noteA": ""},
    { "NLv": 'N1', "Nid": 222, "Did": 236, "Text": "表理由，因为……，多用于道歉，请求原谅时", "jiexu": "N＋の・Vない＋こととて", "noteA": ""},
    { "NLv": 'N1', "Nid": 223, "Did": 237, "Text": "表……的立场，地位的……" , "jiexu": "N＋たる", "noteA": ""},
    { "NLv": 'N1', "Nid": 224, "Did": 238, "Text": "表非常的心情，【不胜】" , "jiexu": "N＋にたえない", "noteA": ""},
    { "NLv": 'N1', "Nid": 225, "Did": 239, "Text": "强烈地感觉到……" , "jiexu": "いA・なA＋限りだ", "noteA": ""},

    { "NLv": 'N1', "Nid": 226, "Did": 240, "Text": "又不是……提出批评或表达意见" , "jiexu": "N+じゃあるまいし", "noteA": ""},
    { "NLv": 'N1', "Nid": 227, "Did": 241, "Text": "眼看就要……的样子" , "jiexu": "V去掉ない+んばかり するはせんばかり", "noteA": ""},
    { "NLv": 'N1', "Nid": 227, "Did": 242, "Text": "" , "jiexu": "と言わんばかりに省略为とばかりに", "noteA": ""},
    { "NLv": 'N1', "Nid": 228, "Did": 243, "Text": "也就到此为止了。如果是……的话，到现在为止的努力，辛苦，开销全都白费了。" , "jiexu": "Vたら・ば+それまでだ", "noteA": ""},
    { "NLv": 'N1', "Nid": 229, "Did": 244, "Text": "=のに　用于指责，就因为没做A，所以导致与B相反的坏结果，当时为什么没做A？" , "jiexu": "PI+ものを AN/N+な+ものを", "noteA": ""},
    { "NLv": 'N1', "Nid": 230, "Did": 245, "Text": "真的让人头疼，糟糕，不行等心情指责对方或某物" , "jiexu": "N+ときたら", "noteA": ""},
    { "NLv": 'N1', "Nid": 231, "Did": 246, "Text": "白费力气的感觉，就算……也没用" , "jiexu": "Vたところで", "noteA": ""},
    { "NLv": 'N1', "Nid": 232, "Did": 247, "Text": "不受影响的坚决态度；不管怎么样……都……" , "jiexu": "Vよう+が/と", "noteA": ""},
    { "NLv": 'N1', "Nid": 232, "Did": 248, "Text": "不可改变的事实；即使……都……" , "jiexu": "Vよう+が/と", "noteA": ""},
    { "NLv": 'N1', "Nid": 233, "Did": 249, "Text": "针对别人的A状况的某种情绪，表提意见或抱怨；要是……样，至少……" , "jiexu": "PI1+なら+PI2+で 现在形のみ", "noteA": ""},
    { "NLv": 'N1', "Nid": 234, "Did": 250, "Text": "站在……的立场上考虑；想象别人的想法时" , "jiexu": "N+にすれば/にしたら/にしても/にしてみれば", "noteA": ""},
    { "NLv": 'N1', "Nid": 235, "Did": 251, "Text": "不行的话，做……就好了，不是什么大问题；其实心里非常在意，多用于自己" , "jiexu": "vる+までのことだ/までだ", "noteA": ""},
    
    { "NLv": 'N1', "Nid": 236, "Did": 252, "Text": "非常……，无法用言语表达；通常省略ない和ありゃしない" , "jiexu": "Aい/AN/N/Vる+といったらない/ったらない;Aい/AN+な+といったらありゃしない/ったらありゃしない", "noteA": "腹が立つ・疲れる・イライラする・喜び・衝撃・ショック・悲惨さ 常搭配使用"},
    { "NLv": 'N1', "Nid": 237, "Did": 253, "Text": "想做A，但由于某种情况做不了A" , "jiexu": "よう+にも+vできない", "noteA": "【できない】也可用 無理だ/不可能だ"},
    { "NLv": 'N1', "Nid": 237, "Did": 254, "Text": "物理性理由" , "jiexu": "", "noteA": ""},
    { "NLv": 'N1', "Nid": 238, "Did": 255, "Text": "连续地，不停地，卯足了劲重复好几次的样子" , "jiexu": "V连用+まくる", "noteA": ""},
    
    { "NLv": 'N1', "Nid": 239, "Did": 256, "Text": "一直以为……和其他不一样，其实是一样的，不管谁都一样" , "jiexu": "N+にしたらところで/にしたって", "noteA": ""},
    { "NLv": 'N1', "Nid": 240, "Did": 257, "Text": "一定要努力……的坚定决心" , "jiexu": "Vて+みせる", "noteA": ""},
    { "NLv": 'N1', "Nid": 241, "Did": 258, "Text": "A,B重复进行" , "jiexu": "V1+つ+V2+つ", "noteA": "押しつ押されつ・抜きつ抜かれつ・浮きつ沈みつ・組んずほぐれつ・差しつ差されつ・持ちつ持たれつなど"},
    { "NLv": 'N1', "Nid": 242, "Did": 259, "Text": "不是特别有意识地，漫无目的地" , "jiexu": "Vる+ともなく", "noteA": "【同一动词】【相似意义动词】"},
    { "NLv": 'N1', "Nid": 242, "Did": 260, "Text": "说不清楚，但……" , "jiexu": "疑问词+（助词+V）+ともなく", "noteA": ""},
    { "NLv": 'N1', "Nid": 243, "Did": 261, "Text": "做……一心想要……" , "jiexu": "Vる+べく　するべく=すべく", "noteA": ""},
    { "NLv": 'N1', "Nid": 244, "Did": 262, "Text": "以……为契机，发生巨大改变，一直持续至今" , "jiexu": "Vて+からというもの", "noteA": ""},
    { "NLv": 'N1', "Nid": 244, "Did": 263, "Text": "在此期间一直" , "jiexu": "N+からというもの", "noteA": ""},
    { "NLv": 'N1', "Nid": 245, "Did": 264, "Text": "保持……的状态；从……开始就没有变过" , "jiexu": "V连用/N1+ながら(に)/ながらの", "noteA": ""},
    { "NLv": 'N1', "Nid": 246, "Did": 265, "Text": "不过是……没有别的意思，含有谦虚的心情" , "jiexu": "Vたまで(のこと)だ", "noteA": ""},
    { "NLv": 'N1', "Nid": 247, "Did": 266, "Text": "虽然有困难，但不要觉得障碍大，而坚定地做下去" , "jiexu": "N+をものともせず", "noteA": "【一般不表示自己的行为】"},
    { "NLv": 'N1', "Nid": 248, "Did": 267, "Text": "一边做A，一边也在做其他事情B时" , "jiexu": "Vる/N+かたわら", "noteA": ""},
    { "NLv": 'N1', "Nid": 249, "Did": 268, "Text": "有点感觉到……" , "jiexu": "N1+めく/めいた+N2", "noteA": ""},
    { "NLv": 'N1', "Nid": 250, "Did": 269, "Text": "发生前一件事之后马上发生了某事" , "jiexu": "Vる+や否や・や", "noteA": ""},
    { "NLv": 'N1', "Nid": 251, "Did": 270, "Text": "……之流，鄙视或谦虚，像我这样的人" , "jiexu": "N+ごとき", "noteA": ""},
    { "NLv": 'N1', "Nid": 252, "Did": 271, "Text": "刚以为……就……，与预想不一样，感觉到意外时" , "jiexu": "PI+かと思いきや AN/N去掉だ", "noteA": ""},
    { "NLv": 'N1', "Nid": 253, "Did": 272, "Text": "为了……" , "jiexu": "V去掉ない+んがため", "noteA": ""},
    { "NLv": 'N1', "Nid": 254, "Did": 273, "Text": "像……一样，【比喻】" , "jiexu": "N+のごとく・ごとし・ごとき+N2", "noteA": ""},
    { "NLv": 'N1', "Nid": 254, "Did": 274, "Text": "像……一样，【举例】" , "jiexu": "N+のごとく・ごとし・ごとき+N2", "noteA": ""},
    { "NLv": 'N1', "Nid": 254, "Did": 275, "Text": "" , "jiexu": "PI(+が・かの)ごとく　AN/N去掉だ", "noteA": ""},
    { "NLv": 'N1', "Nid": 255, "Did": 276, "Text": "用于想特别明确地呈现某种情况，状态，样子时" , "jiexu": "N+にして", "noteA": ""},
    { "NLv": 'N1', "Nid": 256, "Did": 277, "Text": "就算不亲自体验，……就足够了，用于表示害怕，痛苦，艰难等否定性情绪或困惑时。" , "jiexu": "Vる+だに", "noteA": ""},
    { "NLv": 'N1', "Nid": 257, "Did": 278, "Text": "连……都不做，完全不做……" , "jiexu": "N+だにしなかった", "noteA": ""},
    { "NLv": 'N1', "Nid": 258, "Did": 279, "Text": "我有心想做……但有其他情况或心有抵触" , "jiexu": "V去ます+かねて", "noteA": "【多用于不想直接回绝做不到】"},
    { "NLv": 'N1', "Nid": 259, "Did": 280, "Text": "……是最后……，持续至今的事情就此结束" , "jiexu": "N+限りに・限りで", "noteA": "【多用于下定决心，对……表示遗憾】"},
    { "NLv": 'N1', "Nid": 260, "Did": 281, "Text": "数量远远多于通常情况" , "jiexu": "数+(助数詞)+からいる・ある・の", "noteA": ""},
    { "NLv": 'N1', "Nid": 260, "Did": 282, "Text": "价格非常高" , "jiexu": "数+からの", "noteA": ""},
    { "NLv": 'N1', "Nid": 261, "Did": 283, "Text": "对……有重大影响" , "jiexu": "N+にかかわる", "noteA": ""},
    { "NLv": 'N1', "Nid": 261, "Did": 284, "Text": "与……相关" , "jiexu": "N+にかかわる", "noteA": ""},
    { "NLv": 'N1', "Nid": 262, "Did": 285, "Text": "因为特殊状况才会发生" , "jiexu": "N+にあって", "noteA": ""},
    { "NLv": 'N1', "Nid": 262, "Did": 286, "Text": "即使这样的特殊，它也要……" , "jiexu": "N+にあって", "noteA": ""},
    { "NLv": 'N1', "Nid": 263, "Did": 287, "Text": "根据……做法而变" , "jiexu": "V去ます+ようによって(は)", "noteA": ""},
    { "NLv": 'N1', "Nid": 264, "Did": 288, "Text": "禁止，不能做……" , "jiexu": "Vる+べからず", "noteA": "【招牌】【公告栏】"},
    { "NLv": 'N1', "Nid": 265, "Did": 289, "Text": "强调，真的只是……" , "jiexu": "(ただ)+Vる/N+のみ", "noteA": ""},
    { "NLv": 'N1', "Nid": 266, "Did": 290, "Text": "表原因或理由" , "jiexu": "PI+がゆえ ANな/N(の)+ゆえ", "noteA": "【ゆえには接続詞としても使われる】"},
    { "NLv": 'N1', "Nid": 267, "Did": 291, "Text": "相辅相成，相得益彰，1+1>2" , "jiexu": "N+と/が相まって", "noteA": ""},
    { "NLv": 'N1', "Nid": 268, "Did": 292, "Text": "不难想象" , "jiexu": "Vる/N+にかたくない", "noteA": ""},
    { "NLv": 'N1', "Nid": 269, "Did": 293, "Text": "在……立场上，不应该有的/和……不相称的" , "jiexu": "N1+としてあるまじき/にあるまじき+N2", "noteA": "【許すまじき】"},
    { "NLv": 'N1', "Nid": 270, "Did": 294, "Text": "预测，不希望出现的事态" , "jiexu": "V去掉ない+ずにはすまない/ないではすまない　＊する＞せずにはすまない", "noteA": ""},
    { "NLv": 'N1', "Nid": 270, "Did": 295, "Text": "不得不，不能不，不好不" , "jiexu": "", "noteA": ""},
    { "NLv": 'N1', "Nid": 271, "Did": 296, "Text": "难道不是……又是……呢？真的是……" , "jiexu": "でなくてなんだろう", "noteA": ""},
    { "NLv": 'N1', "Nid": 272, "Did": 297, "Text": "非常……" , "jiexu": "AN+きわまりない", "noteA": ""},
    { "NLv": 'N1', "Nid": 272, "Did": 298, "Text": "非常/最……" , "jiexu": "N+の+極み", "noteA": "【感激、贅沢、美、痛恨】かんげき　ぜいたく　び　つうこん"},
    { "NLv": 'N1', "Nid": 273, "Did": 299, "Text": "无法抑制自己的感情" , "jiexu": "N+を禁じえない", "noteA": "【怒り　悲しみ　同情　とまどい】　いかり　かなしみ　どうじょう"},
    { "NLv": 'N1', "Nid": 274, "Did": 300, "Text": "值得……" , "jiexu": "Vる/N1+にたる+N2", "noteA": ""},
    { "NLv": 'N1', "Nid": 275, "Did": 301, "Text": "无法……无从……，从目前的情况来考虑，不应该……" , "jiexu": "Vる+べくもない", "noteA": ""},
    { "NLv": 'N1', "Nid": 276, "Did": 302, "Text": "要想做某事，就必须……" , "jiexu": "Vる+こと/N+なくして（は）+……ない", "noteA": "【后+ない】"},
    { "NLv": 'N1', "Nid": 276, "Did": 303, "Text": "要想做某事，就必须……=なくして" , "jiexu": "Vる+ことなく/ことなしに", "noteA": ""},
    { "NLv": 'N1', "Nid": 277, "Did": 304, "Text": "不在意……不顾……" , "jiexu": "N+およそに", "noteA": ""},
    { "NLv": 'N1', "Nid": 278, "Did": 305, "Text": "不论是否，1.表达不受影响的坚决态度；2.表示不可改变的事实" , "jiexu": "Vよう+が・と+Vる+まいが・と", "noteA": "【Vよう和Vる是同一动词】"},
    { "NLv": 'N1', "Nid": 278, "Did": 306, "Text": "不论是否" , "jiexu": "Vよう+が・と+Vる+まいが・と;Aい去掉いかろうが・と+Aい去掉いかろうが・と;N/AN+だろうが", "noteA": "【Vよう和Vる否定/反义】"},

    // { "Nid": 1, "Did": 1, "Text": "可以做到" , "jiexu": "", "noteA": ""},
    // { "Nid": 1, "Did": 2, "Text": "完成了，做完了" , "jiexu": "", "noteA": ""},
    // { "Nid": 2, "Did": 3, "Text": "表示存在" , "jiexu": "", "noteA": ""},
    // { "Nid": 2, "Did": 4, "Text": "表示拥有物品，知识，财产等" , "jiexu": "", "noteA": ""},
    // { "Nid": 2, "Did": 5, "Text": "表示事情的发生" , "jiexu": "", "noteA": ""},
    // { "Nid": 3, "Did": 6, "Text": "有意识，有生命的生物存在" , "jiexu": "", "noteA": ""},
    // { "Nid": 4, "Did": 7, "Text": "询问小东西的个数，或老人向年轻人或孩子的年龄" , "jiexu": "", "noteA": ""},
    // { "Nid": 5, "Did": 8, "Text": "用来询问，什么时候，か便是不确定的日子" , "jiexu": "", "noteA": ""},
    // { "Nid": 6, "Did": 9, "Text": "谁，用于说话人不认识的第三者是某人的场合，敬意程度誰最低" , "jiexu": "", "noteA": ""},
    // { "Nid": 7, "Did": 10, "Text": "怎么样，如何" , "jiexu": "", "noteA": ""},
    // { "Nid": 7, "Did": 11, "Text": "怎么，如何，只能用どう" , "jiexu": "", "noteA": ""},
    // { "Nid": 8, "Did": 12, "Text": "用于询问时间，距离，程度，具体数量等，多久，多远的意思" , "jiexu": "", "noteA": ""},
    // { "Nid": 9, "Did": 13, "Text": "用于询问自己不了解的内容，意为什么？" , "jiexu": "", "noteA": ""},
    // { "Nid": 10, "Did": 14, "Text": "用于询问原因，理由，意为为什么？なんで口语常表怎么会" , "jiexu": "", "noteA": ""},
    // { "Nid": 11, "Did": 15, "Text": "时间，空间的起点" , "jiexu": "", "noteA": ""},
    // { "Nid": 11, "Did": 16, "Text": "动作的主体，七点，经过点" , "jiexu": "", "noteA": ""},
    // { "Nid": 12, "Did": 17, "Text": "动作发生的场所" , "jiexu": "", "noteA": ""},
    // { "Nid": 12, "Did": 18, "Text": "手段，方法，工具" , "jiexu": "", "noteA": ""},
    // { "Nid": 12, "Did": 19, "Text": "动作的基准，主体样态" , "jiexu": "", "noteA": ""},
    // { "Nid": 12, "Did": 20, "Text": "原材料" , "jiexu": "", "noteA": ""},
    // { "Nid": 12, "Did": 21, "Text": "范围" , "jiexu": "", "noteA": ""},
    // { "Nid": 12, "Did": 22, "Text": "原因，理由" , "jiexu": "", "noteA": ""},
    // { "Nid": 13, "Did": 23, "Text": "共同参与者" , "jiexu": "", "noteA": ""},
    // { "Nid": 13, "Did": 24, "Text": "说话或引用的内容" , "jiexu": "", "noteA": ""},
    // { "Nid": 13, "Did": 25, "Text": "和……，表并列" , "jiexu": "", "noteA": ""},
    // { "Nid": 14, "Did": 26, "Text": "时间" , "jiexu": "", "noteA": ""},
    // { "Nid": 14, "Did": 27, "Text": "存在的场所" , "jiexu": "", "noteA": ""},
    // { "Nid": 14, "Did": 28, "Text": "行为的对象" , "jiexu": "", "noteA": ""},
    // { "Nid": 14, "Did": 29, "Text": "移动的目的" , "jiexu": "", "noteA": ""},
    // { "Nid": 14, "Did": 30, "Text": "附着点" , "jiexu": "", "noteA": ""},
    // { "Nid": 14, "Did": 31, "Text": "移动的目的地" , "jiexu": "", "noteA": ""},
    // { "Nid": 14, "Did": 32, "Text": "某一时间内次数" , "jiexu": "", "noteA": ""},
    // { "Nid": 14, "Did": 33, "Text": "作为……=" , "jiexu": "", "noteA": ""},
    // { "Nid": 14, "Did": 34, "Text": "由于……因为……" , "jiexu": "", "noteA": ""},
    // { "Nid": 14, "Did": 35, "Text": "比较，评价的基准" , "jiexu": "", "noteA": ""},
    // { "Nid": 14, "Did": 36, "Text": "和……同类事物的叠加" , "jiexu": "", "noteA": ""},
    // { "Nid": 15, "Did": 37, "Text": "所属，性质，限定，同位语" , "jiexu": "", "noteA": ""},
    // { "Nid": 15, "Did": 38, "Text": "名词化" , "jiexu": "", "noteA": ""},
    // { "Nid": 15, "Did": 39, "Text": "小句が变の" , "jiexu": "", "noteA": ""},
    // { "Nid": 16, "Did": 40, "Text": "移动的方向" , "jiexu": "", "noteA": ""},
    // { "Nid": 17, "Did": 41, "Text": "时间，空间的终点" , "jiexu": "", "noteA": ""},
    // { "Nid": 18, "Did": 42, "Text": "动作的对象" , "jiexu": "", "noteA": ""},
    // { "Nid": 18, "Did": 43, "Text": "经过、离开的地点" , "jiexu": "", "noteA": ""},
    // { "Nid": 19, "Did": 44, "Text": "和……，或……表代表性事物的部分列举，暗示还有其他" , "jiexu": "", "noteA": ""},
    // { "Nid": 20, "Did": 45, "Text": "从2个或3个事物中选取一个，表示选择" , "jiexu": "", "noteA": ""},
    // { "Nid": 21, "Did": 46, "Text": "……时候" , "jiexu": "", "noteA": ""},
    // { "Nid": 22, "Did": 47, "Text": "从2个或3个事物中选取一个，表示选择" , "jiexu": "", "noteA": ""},
];
function getDefinitionsData() {
    return definitions;
}
