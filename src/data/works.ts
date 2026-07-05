export interface WorkItem {
  title: string;
  url: string;
  image: string;
  label?: string;
  format?: string;
  publisher?: string;
  summary?: string;
  detailNote?: string;
  modalImageContain?: boolean;
  previewPages?: string[];
  ctaLabel?: string;
  takecomiUrl?: string;
  takecomiBanner?: string;
  takecomiComment?: string;
}

const rawWorks: WorkItem[] = [
  {
    title: "高尾の天狗と脱・ハイヒール",
    url: "https://amzn.to/3VfQLyG",
    image: "takao_highheel.jpg",
    format: "初心者登山4コマ",
    publisher: "バンブーコミックス / 竹書房",
    summary: "ワガママ三十路OL、御岳ノリコ。彼氏にフラれ傷心プチ旅行で向かった先は、登山者数世界一を誇る高尾山! そこで出会った一匹の子天狗が、ノリコの生活を一変させる…!? 子天狗とOLの清く正しい初心者登山4コマ!",
    previewPages: Array.from({ length: 6 }, (_, index) => `/images/previews/takao_highheel/${String(index + 1).padStart(2, '0')}.jpg`),
    ctaLabel: "コミックスを買う",
  },
  {
    title: "高尾の天狗とミドリの平日",
    url: "https://amzn.to/3VlnXoA",
    image: "takao_midori.jpg",
    format: "高尾山4コマ",
    publisher: "バンブーコミックス / 竹書房",
    summary: "三国ミドリ25歳、断れない系女子。ドタキャンされてぼっちで登ったのは、ギネスが認める登山客数世界一の山・高尾山。一人ビアマウントを満喫しようとしたら目の前に天狗の子が現れて、何故か懐かれた!?",
    previewPages: Array.from({ length: 10 }, (_, index) => `/images/previews/takao_midori/${String(index + 1).padStart(2, '0')}.jpg`),
    ctaLabel: "コミックスを買う",
  },
  {
    title: "虫の皇女マユの旅",
    url: "https://amzn.to/3yDEg7f",
    image: "mushi_mayu.jpg",
    format: "異種族交流ファンタジー",
    publisher: "バンブーコミックス 異世界BC / 竹書房",
    summary: "ヒトが地上の支配者となった時代、偉大な魔法使いが「ヒト化の秘術」を生み出した。虫とヒトが世界を紡ぐ、異種族交流ファンタジー開幕!!",
    previewPages: Array.from({ length: 33 }, (_, index) => `/images/previews/mushi_mayu/${String(index + 1).padStart(2, '0')}.jpg`),
    takecomiUrl: "https://takecomic.jp/series/6ea1aceba5002",
    takecomiBanner: "/images/previews/kuzu_ouji/takecomi.png",
    takecomiComment: "竹コミ！でカムバック連載中。会員登録すれば毎日無料で読める！最新話をチェック！",
  },
  {
    title: "虫の皇女マユの旅-Author’s Edition-",
    url: "https://amzn.to/44gCjuo",
    image: "mushi_mayu_authors.jpg",
    format: "著者制作版",
    publisher: "著者制作版",
    summary: "シリーズ紙版廃止にともないストーリアダッシュ連載中の「虫の皇女マユの旅」を、著者自らペーパーバックにまとめたAuthor's Edition!",
  },
  {
    title: "ジャータカものがたり",
    url: "https://amzn.to/3R5k84i",
    image: "jataka.jpg",
    format: "宗教コミック",
    publisher: "曹洞宗宗務庁",
    summary: "曹洞宗の月刊誌『てらスクール』（2014・2015年度）で2年間連載された漫画『ジャータカ物語』を、てらスクール選書6として刊行。子どもから大人まで楽しめる1冊です。",
  },
  {
    title: "ぱな王 立派な王におなりなさいッ",
    url: "https://amzn.to/3Vi054X",
    image: "rippanaou_takeshobo.jpg",
    format: "ファンタジー",
    publisher: "バンブーコミックス / 竹書房",
    summary: "星界を追われた第一皇子のクロと、忠実な従者のユリ。奪われたクロの命のカケラを探して世界中を旅をし、辿り着いた日本で彼らは――!?",
    previewPages: Array.from({ length: 16 }, (_, index) => `/images/previews/panaou_bamboo/${String(index + 1).padStart(2, '0')}.jpg`),
    ctaLabel: "コミックスを買う",
  },
  {
    title: "MOTHPHILIA-氷堂涼二蛾集-",
    url: "https://amzn.to/3VeULzo",
    image: "mothphilia.jpg",
    format: "イラスト&コミック",
    publisher: "一二三書房",
    summary: "自身のホームページ「氷堂涼二のドゥオアダイ」で公開していたかわいい蛾の擬人化イラスト、漫画に加え、描き下ろし漫画、インタビューを収録。蛾萌えの世界へようこそ!",
  },
  {
    title: "RHworks Unlimited INDIA",
    url: "https://amzn.to/40G6qtO",
    image: "india.jpg",
    format: "写真コレクション",
    publisher: "RHworks著者出版",
    summary: "200↑ページに詰め込んだ古い旅の写真。著者が約20年前のインド旅行中に撮影した写真をスキャンしてまとめたアマチュア写真コレクションです。",
    modalImageContain: true,
  },
  {
    title: "マンガでわかる かずのすけ式美肌化学のルール",
    url: "https://amzn.to/3yBSW6N",
    image: "kazunosuke.jpg",
    format: "実用コミック",
    publisher: "KADOKAWA",
    summary: "Ameba美容ブログ1位、月間500万アクセス、著者本累計15万部突破の美容化学者・かずのすけによる「美肌化学」的メソッドがマンガで登場! 「ちょっと難しい」をマンガでわかりやすく、「美肌化学」がどこよりも優しく学べる一冊です。",
  },
  {
    title: "おきょうのいっぽ",
    url: "https://amzn.to/4cOcRkM",
    image: "okyou_ippo.jpg",
    format: "仏教入門",
    publisher: "曹洞宗宗務庁",
    summary: "『般若心経』『延命十句観音経』『舎利礼文』の三つのお経を、子どもたちにも分かりやすく解説した本。もちろん大人の方にも「やさしいお経の本」として、家族がともに、仏教を学び、豊かな宗教情操を育むために、楽しくお読みいただけます。",
  },
  {
    title: "マクロスＦ フロンティア・ダイアリーズ",
    url: "https://amzn.to/4aTd9CF",
    image: "macross_diayies.jpg",
    format: "ノベル挿絵",
    publisher: "角川スニーカー文庫 / KADOKAWA",
    summary: "焼きそば作りでランカとシェリルが激突! ミシェルとクランが2人きりで秘密の任務!! そしてアルトの父、嵐蔵とイサム・ダイソンの物語も再び!? 戦いの合間の青春を描く、マクロスＦアナザーストーリーズ第2弾!",
  },
  {
    title: "マクロスF フロンティア・メモリーズ",
    url: "https://amzn.to/3KEeu5D",
    image: "macross_memories.jpg",
    format: "ノベル挿絵",
    publisher: "角川スニーカー文庫 / KADOKAWA",
    summary: "美星学園の修学旅行で温泉旅艦“熱海”へやってきたアルトたち。ところが宇宙船が反フォールド主義者に乗っ取られ!? 書き下ろしを含む全6編を収録。戦いの合間の青春を描く「マクロスF」オリジナルストーリー!",
  },
  {
    title: "恋愛止まりでいいんですか？",
    url: "https://amzn.to/3UZlheT",
    image: "ren_ai_domari.jpg",
    format: "少女マンガ",
    publisher: "マーガレットコミックスDIGITAL / 集英社",
    summary: "周りのみんなは“恋愛”してるのに、自分はできておらず焦る泉。テンパって告白するからいつも玉砕してしまう。そんなある日、大きなキャンバスを持った男の人とぶつかって…？ 恋にルールなんてない! 氷堂リョージのココロが触れあう物語。一部シーンをフルカラーでお届け!",
  },
  {
    title: "立派な王におなりなさいッ",
    url: "https://amzn.to/3KimAAn",
    image: "rippanaou_shueisha.jpg",
    format: "少女マンガ",
    publisher: "マーガレットコミックスDIGITAL / 集英社",
    summary: "超過保護なユリは、天使のような笑顔がかわいいクロと【命の断片】を求めて世界中を旅し、今は日本に定住していた。のんびりと過ごしていた2人だったが、ある日突然ユリの目の前でクロに異変が!? 痛快主従カンケイ☆第1巻!",
  },
  {
    title: "（有）ヘヴン警備←ブラック",
    url: "https://amzn.to/3WWhrFO",
    image: "heaven_keibi.jpg",
    format: "少女マンガ",
    publisher: "マーガレットコミックスDIGITAL / 集英社",
    summary: "超! 世間知らずなお坊ちゃん・雛太は、立派な大人になるため警備会社のバイト面接に向かった。そこで出会った早々、ダメな大人・土方にカツアゲされる!?!? こんな大人にはならないぞ! と思っていたけど助けられ、ちょっとだけかっこいいところもある土方に雛太は……。ひとクセもふたクセもあるブラック企業の警備会社で雛太の体当たりバイト生活がスタートした――!",
  },
  {
    title: "切っ先3寸",
    url: "https://amzn.to/3UZl1wr",
    image: "kissaki_sanzun.jpg",
    format: "学園剣道",
    publisher: "花とゆめコミックス / 白泉社",
    summary: "女子の言いなりなドレイ体質だけど剣道に夢中なヤサオ。冴えない同級生、佐々が実はすごい剣士だったと知って…? 剣道部ボーイズ・グラフィティ!!",
  },
  {
    title: "はらぺこバンピーノ",
    url: "https://amzn.to/3KfUXrX",
    image: "harapeko.jpg",
    format: "もんすたーずコメディ",
    publisher: "花とゆめコミックス / 白泉社",
    summary: "平凡を好む高2男子・創介は、押しかけてきたチビっこ吸血鬼3匹の、保護者兼エサになる羽目に…!? メイワク可愛い★もんすたーずコメディ!",
  },
  {
    title: "空から！ マイ☆NANNY",
    url: "https://amzn.to/4dq9C3x",
    image: "nanny.jpg",
    format: "育児ファンタジー",
    publisher: "シルフコミックス / KADOKAWA",
    summary: "セントデーン王国の小さな港町・アドルプール。そこへある日、空から1人の青年が降ってきた! 彼は両親不在のバギンズ家で、3人兄弟の世話をするため派遣された家政夫。傘を広げて空を飛ぶ、心優しい育児男子・ヴィクターがたっぷりの愛と勇気と異常な魔法で子供たちを育てます!",
  },
  {
    title: "マクロスＦ　Ｓ．Ｍ．Ｓ☆物語",
    url: "https://amzn.to/3yAnntX",
    image: "macross_sms.jpg",
    format: "コミカライズ",
    publisher: "角川コミックス・エース / 角川書店",
    summary: "アルト、ミシェル、ルカ……vsヴァジュラ戦最終決戦直前までの少年たちの戻らない日々を追いかける!",
  },
  {
    title: "椿山の鐘が鳴る！",
    url: "https://amzn.to/48nuLI3",
    image: "tsubaki_yama.jpg",
    format: "学園ドラマ",
    publisher: "あすかコミックスDX / KADOKAWA",
    summary: "特進科と普通科に分断されている椿山高校。普通科のメグルは、特進科とも仲良くできればいいと思っていた。ある日、渡り廊下で特進科のマナトと出会い、メグルは意気投合! そのことで特進科と普通科の交流が始まった。",
  },
  {
    title: "TEMPUS:QUOVADIS (テンプス:クォヴァディス)",
    url: "https://amzn.asia/d/aolIHae",
    image: "tempus.jpg",
    format: "ダークファンタジー",
    publisher: "ウィングス・コミックス / 新書館",
    summary: "「魔術」は、誰の目にも顕現する。文明の絶頂期にあった星の半分を滅ぼした未曾有の災厄「Overture」。人々は科学も祈る神も失った。人心も大地も荒れ果てた世界を、魔術士・ラシードと幼い少年・ニルスは駆ける。",
    detailNote: "未完作品です。",
  },
  {
    title: "ナデプロ!!",
    url: "https://amzn.asia/d/0GyK6XQ",
    image: "nadepro.jpg",
    format: "コミカライズ",
    publisher: "UN POKO COMICS / 新書館",
    summary: "都内某所にある声優事務所、『ナデシコプロダクション』。そこへオーディションを経てやってきた新人声優、人見克也、南雲健太、甲斐由直の3人に、とんでもないマネージャーが付くことになってしまった! その男の名は……『樋口龍』!! 声優業界を舞台に繰り広げられる新感覚! ドラマCD『ナデプロ!!』を、キャラクターデザイン担当の氷堂涼二が堂々漫画化!!",
  },
  {
    title: "天然!絶滅ヒーロー!!",
    url: "https://amzn.asia/d/9S7Wjuv",
    image: "zetsumetsu-hero.jpg",
    format: "コメディ",
    publisher: "ウィングス・コミックス / 新書館",
    summary: "『ちきゅうをまもる、ヒーローとうじょう!』。そんな地球の子供番組を夢中で見ていたバズー星の少年・カシエルは、すくすく育ち、地球を侵略する、立派な将軍になったのです。同僚は、わがまま王女とぽよよん参謀。頼りなさにめまいを覚えつつ、それでも降り立った地球。そこには……OH! NO!! ヒーローがいなかったのです!!",
  },
  {
    title: "駒澤学園女子中学校・高等学校公式キャラクター「こまぽん」",
    url: "https://www.komajo.ac.jp/jsh/index.html",
    image: "komajo_jsh_komapon.jpg",
    label: "学園公式サイト",
    format: "公式キャラクター",
    publisher: "駒澤学園女子中学校・高等学校",
    summary: "母校の公式キャラクターをデザインしました。",
    detailNote: "創立100周年の期に、学園全体のキャラクターに昇進するそうです。",
    modalImageContain: true,
  }
];

const isAmazonLink = (url: string) => url.includes('amazon.') || url.includes('amzn.');

const inferFormat = (work: WorkItem) => {
  if (work.format) return work.format;
  if (work.label?.includes('公式サイト')) return 'Official Site';
  if (work.title.includes('（挿絵）')) return 'Illustration Work';
  if (work.title.includes('Author’s Edition')) return 'Author-produced Edition';
  return 'Selected Work';
};

const inferSummary = (work: WorkItem) => {
  if (work.summary) return work.summary;
  if (work.label?.includes('公式サイト')) {
    return '学校公式キャラクターとして公開されているビジュアルワークです。詳細は公式サイトでご覧いただけます。';
  }
  if (work.title.includes('（挿絵）')) {
    return '挿絵として参加した作品です。書誌情報や販売ページの詳細はリンク先から確認できます。';
  }
  if (work.title.includes('Author’s Edition')) {
    return '著者制作版として展開しているエディションです。仕様や販売情報はAmazonの商品ページで確認できます。';
  }
  if (work.title.includes('RHworks Unlimited')) {
    return 'RHworks名義で展開しているビジュアルブック系タイトルです。リンク先から商品ページの詳細をご覧いただけます。';
  }
  if (work.title.includes('MOTHPHILIA')) {
    return 'イラストレーションを中心に楽しめる作品集です。リンク先の商品ページから詳細をご覧いただけます。';
  }
  return 'Selected Worksに掲載している代表作のひとつです。リンク先から販売ページまたは作品詳細へ移動できます。';
};

const buildDetailPoints = (work: WorkItem) => {
  const points: string[] = [];

  if (work.publisher) {
    points.push(work.publisher);
  } else {
    points.push(inferFormat(work));
  }

  if (work.detailNote) {
    points.push(work.detailNote);
  }

  if (work.label?.includes('公式サイト')) {
    points.push('外部公式サイトで詳細を確認できます');
  } else if (isAmazonLink(work.url)) {
    points.push('Amazonの商品ページで詳細確認・購入が可能です');
  } else {
    points.push('外部ストアで詳細確認・購入が可能です');
  }

  return points;
};

export const works = rawWorks.map((work) => ({
  ...work,
  format: inferFormat(work),
  summary: inferSummary(work),
  details: buildDetailPoints(work),
  linkLabel: work.label || (isAmazonLink(work.url) ? 'Amazon' : 'External Link'),
  ctaLabel: work.label?.includes('公式サイト')
    ? '公式サイトで見る'
    : work.ctaLabel || (isAmazonLink(work.url)
      ? 'Amazonで見る'
      : '詳細を見る'),
  isAffiliate: isAmazonLink(work.url),
}));

export const featuredRecommendation = {
  title: "クズ王子やりなおす! (1)",
  subtitle: "~ざまぁされて死んだけど、今度は筋書きブチ壊して生き延びる~",
  format: "バンブーコミックス 異世界BC / 竹書房",
  quote: "「世界は、もう108回以上消されているーー。ざまぁされるはずのクズ王子、今度こそ運命に逆らう！」",
  image: "kuzu_ouji.png",
  url: "https://amzn.to/4vjp4VJ",
  ctaLabel: "Amazonで見る",
  isAffiliate: true,
  previewPages: Array.from({ length: 35 }, (_, index) => `/images/previews/kuzu_ouji/${String(index + 1).padStart(2, '0')}.jpg`),
  takecomiUrl: "https://takecomic.jp/series/fbd8defebb230",
  takecomiBanner: "/images/previews/kuzu_ouji/takecomi.png",
  takecomiComment: "竹コミ！で好評連載中。会員登録すれば毎日無料で読める！最新話をチェック！",
};
