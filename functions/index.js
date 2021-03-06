const functions = require('firebase-functions');

const admin = require('firebase-admin');

admin.initializeApp();

const fs = require('fs');
const path = require('path');

exports.resultOgTags1 = functions.https.onRequest((req, res) => {
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  let html = htmlFile.toString().replace('https://close-encounter.s3.ap-northeast-1.amazonaws.com/title.png', 'https://close-encounter.s3.ap-northeast-1.amazonaws.com/result1.png');
  html = html.replace('SFに出会う診断で想像力を拡張せよ！', 'あなたが出会ったSFは「残像に口紅を」');
  html = html.replace('たまにはSFでも読んでみませんか？SF診断を開始しておすすめのSFに出会いましょう！', '「あ」が消えると、「愛」も「あなた」もなくなった。ひとつ、またひとつと言葉が失われてゆく世界で、執筆し、飲食し、交情する小説家。筒井康隆、究極の実験的長篇。');
  res.send(html);
});

exports.resultOgTags2 = functions.https.onRequest((req, res) => {
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  let html = htmlFile.toString().replace('https://close-encounter.s3.ap-northeast-1.amazonaws.com/title.png', 'https://close-encounter.s3.ap-northeast-1.amazonaws.com/result2.png');
  html = html.replace('SFに出会う診断で想像力を拡張せよ！', 'あなたが出会ったSFは「横浜駅SF」');
  html = html.replace('たまにはSFでも読んでみませんか？SF診断を開始しておすすめのSFに出会いましょう！', '改築工事を繰り返す＜横浜駅＞が、ついに自己増殖を開始。それから数百年――ＪＲ北日本・ＪＲ福岡2社が独自技術で防衛戦を続けるものの、日本は本州の99％が横浜駅化した。脳に埋め込まれたSuika で人間が管理されるエキナカ社会。その外側で暮らす非Suika 住民のヒロトは、駅への反逆で追放された男から『18きっぷ』と、ある使命を託された。');
  res.send(html);
});

exports.resultOgTags3 = functions.https.onRequest((req, res) => {
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  let html = htmlFile.toString().replace('https://close-encounter.s3.ap-northeast-1.amazonaws.com/title.png', 'https://close-encounter.s3.ap-northeast-1.amazonaws.com/result3.png');
  html = html.replace('SFに出会う診断で想像力を拡張せよ！', 'あなたが出会ったSFは「七十四秒の旋律と孤独」');
  html = html.replace('たまにはSFでも読んでみませんか？SF診断を開始しておすすめのSFに出会いましょう！', '人類が滅亡した宇宙。かつて人に創られたロボットたちは、“特別をつくらない”という掟を守り、宇宙を観測していた。');
  res.send(html);
});

exports.resultOgTags4 = functions.https.onRequest((req, res) => {
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  let html = htmlFile.toString().replace('https://close-encounter.s3.ap-northeast-1.amazonaws.com/title.png', 'https://close-encounter.s3.ap-northeast-1.amazonaws.com/result4.png');
  html = html.replace('SFに出会う診断で想像力を拡張せよ！', 'あなたが出会ったSFは「新世界より」');
  html = html.replace('たまにはSFでも読んでみませんか？SF診断を開始しておすすめのSFに出会いましょう！', '１０００年後の日本。豊かな自然に抱かれた集落、神栖（かみす）６６町には純粋無垢な子どもたちの歓声が響く。周囲を注連縄（しめなわ）で囲まれたこの町には、外から穢れが侵入することはない。「神の力（念動力）」を得るに至った人類が手にした平和。念動力（サイコキネシス）の技を磨く子どもたちは野心と希望に燃えていた……隠された先史文明の一端を知るまでは。');
  res.send(html);
});

exports.resultOgTags5 = functions.https.onRequest((req, res) => {
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  let html = htmlFile.toString().replace('https://close-encounter.s3.ap-northeast-1.amazonaws.com/title.png', 'https://close-encounter.s3.ap-northeast-1.amazonaws.com/result5.png');
  html = html.replace('SFに出会う診断で想像力を拡張せよ！', 'あなたが出会ったSFは「日本ＳＦの臨界点［怪奇篇］　ちまみれ家族」');
  html = html.replace('たまにはSFでも読んでみませんか？SF診断を開始しておすすめのSFに出会いましょう！', '「2010年代、世界で最もSFを愛した作家」と称された伴名練が、全身全霊で贈る傑作アンソロジー。日常的に血まみれになってしまう奇妙な家族のドタバタを描いた津原泰水の表題作、中島らもの怪物的なロックノベル「DECO-CHIN」、幻の第一世代SF作家・光波耀子の「黄金珊瑚」など、幻想・怪奇テーマの隠れた名作11本を精選。');
  res.send(html);
});

exports.resultOgTags6 = functions.https.onRequest((req, res) => {
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  let html = htmlFile.toString().replace('https://close-encounter.s3.ap-northeast-1.amazonaws.com/title.png', 'https://close-encounter.s3.ap-northeast-1.amazonaws.com/result6.png');
  html = html.replace('SFに出会う診断で想像力を拡張せよ！', 'あなたが出会ったSFは「100文字ＳＦ」');
  html = html.replace('たまにはSFでも読んでみませんか？SF診断を開始しておすすめのSFに出会いましょう！', 'Twitterで発表された約2000篇の【ほぼ百字小説】から200篇を厳選。たった100字で無限の時間と空間を創造する、まったく新しいＳＦ');
  res.send(html);
});

exports.resultOgTags7 = functions.https.onRequest((req, res) => {
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  let html = htmlFile.toString().replace('https://close-encounter.s3.ap-northeast-1.amazonaws.com/title.png', 'https://close-encounter.s3.ap-northeast-1.amazonaws.com/result7.png');
  html = html.replace('SFに出会う診断で想像力を拡張せよ！', 'あなたが出会ったSFは「最後にして最初のアイドル」');
  html = html.replace('たまにはSFでも読んでみませんか？SF診断を開始しておすすめのSFに出会いましょう！', '時はアイドル戦国時代。生後６か月でアイドルオタクになった古月みかは、高校のアイドル部で出会った新園眞織とともに宇宙一のアイドルになることを目指す。しかし非情な現実が彼女の望みを打ち砕くのだった。それから数年後、謎の巨大太陽フレアが発生。地球人類は滅亡の危機に陥る。地獄のような世界をサヴァイヴする彼女たちが目にした、〈アイドル〉の最終局面とは？');
  res.send(html);
});

exports.resultOgTags8 = functions.https.onRequest((req, res) => {
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  let html = htmlFile.toString().replace('https://close-encounter.s3.ap-northeast-1.amazonaws.com/title.png', 'https://close-encounter.s3.ap-northeast-1.amazonaws.com/result8.png');
  html = html.replace('SFに出会う診断で想像力を拡張せよ！', 'あなたが出会ったSFは「裏世界ピクニック」');
  html = html.replace('たまにはSFでも読んでみませんか？SF診断を開始しておすすめのSFに出会いましょう！', '「くねくね」や「八尺様」など実話怪談として語られる危険な存在が出現する、この現実と隣合わせで謎だらけの裏世界。研究とお金稼ぎ、そして大切な人を探すため、鳥子と空魚は非日常へと足を踏み入れる');
  res.send(html);
});
