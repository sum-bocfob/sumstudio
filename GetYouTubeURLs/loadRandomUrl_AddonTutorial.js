// URLリスト
const videoUrls = [
    'https://www.youtube.com/embed/2Et5A-9RF5M?si=HUP5qbmk1J6GE0v0',
    'https://www.youtube.com/embed/mnJLgIPjPeQ?si=V4EIzz8hxfG65Bo-',
    'https://www.youtube.com/embed/0rr3nh3EUp0?si=3avkqEZp_zdXHzTY',
    'https://www.youtube.com/embed/EndHHf8PAzI?si=9yuL0qD_jdABZw6G"',
    'https://www.youtube.com/embed/NB6sOvNLUz8?si=-pipeJzoQP8Q-gJH',
    'https://www.youtube.com/embed/bimSnKBHfRY?si=IFfFJlKCin6Ys1IL',
    'https://www.youtube.com/embed/2RaUhwKfl80?si=kaigxxCAm4QYIYXN',
    'https://www.youtube.com/embed/CgvLfXqV9BY?si=JfbQXIkhfqhkx2SP',
    'https://www.youtube.com/embed/cShbUoaQq_g?si=5wdQ7VWowC7T0ZDC',
    'https://www.youtube.com/embed/h7rYgz2HntE?si=uDidgrN98elI8vYM'
];

// ランダムにURLを選択
const randomUrl = videoUrls[Math.floor(Math.random() * videoUrls.length)];

// iframeのsrc属性にランダムなURLを設定
document.getElementById('videoIframe').src = randomUrl;