// URLリスト
const videoUrls = {
    adddonTutorialList: [
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
    ],
    geoNodesTutorialList: [
        'https://www.youtube.com/embed/v59m3k-hp8k?si=5vPsQjUati_elfCH',
        'https://www.youtube.com/embed/ipei5WbzUUI?si=iVcmxPIj4C3JUpJ9',
        'https://www.youtube.com/embed/ndW5GrWu2hI?si=lB51LOkWsH4zOr0B',
        'https://www.youtube.com/embed/IB1e25KuqKw?si=AKe5SNPb5xdxMfSt',
        'https://www.youtube.com/embed/NCT_2wfbI_Y?si=OKnOFy2AZN3r2U3W',
        'https://www.youtube.com/embed/MvaT-LsXeEE?si=fwAG869SoXO6mpDR',
        'https://www.youtube.com/embed/Rghijon-Ha0?si=AUvH4wPN3azGra_e',
        'https://www.youtube.com/embed/vAd2J0XWwLI?si=SZG2MdBTyCbF14QF',
        'https://www.youtube.com/embed/RyXXGig2udM?si=3bElvatXf7elQ7yx',
        'https://www.youtube.com/embed/rkLcR-PEHDc?si=9yjfpyTRRdkpwrz0',
        'https://www.youtube.com/embed/eBLuy_NmWsE?si=NP6EpiG9Araqb5Dj',
        'https://www.youtube.com/embed/Y0QRhNWYwfk?si=W1N9ZUMjXbHAymYR',
        'https://www.youtube.com/embed/QlEjaVHiHr4?si=vrnWTfNoTOwT3ZBa',
        'https://www.youtube.com/embed/f16O0rmVYiU?si=uearpRyMr-OvnWrL',
        'https://www.youtube.com/embed/ELQw2haZjeQ?si=pXLo0Toj408hP5dv',
        'https://www.youtube.com/embed/zCo44NdvGm8?si=P_wv_NlKyWX6QELJ',
        'https://www.youtube.com/embed/qzQn_Wh-u3g?si=MCj6T1hucf_jWB6q',
        'https://www.youtube.com/embed/tsIX0h-M3TM?si=ykNC4Y_pLZ0Bbxrw',
        'https://www.youtube.com/embed/5PbRMw8Pu5I?si=wLx4VVDWWrCrFwA6',
        'https://www.youtube.com/embed/oms9RV1jkuA?si=lipNhMTbXJ0Wy-Dk',
        'https://www.youtube.com/embed/qzLDOCjWJfQ?si=MzLFaIF6TbA1C-aR',
        'https://www.youtube.com/embed/lUBGm8kXfOw?si=KEazGc29QWUCv1YS',
        'https://www.youtube.com/embed/anADHQPqg04?si=dj2zA4Y9omhld_BM',
        'https://www.youtube.com/embed/_cECCZLt60s?si=J8PV9vSS7CVnGuWf',
        'https://www.youtube.com/embed/QKmixT6F3XM?si=EUjAN42pKBepHMlb',
        'https://www.youtube.com/embed/X4m6F-eEhlU?si=mrNVEMvnibdLe44k',
        'https://www.youtube.com/embed/z506oPiYUz8?si=OsegXs8_ijLmQuqe',
        'https://www.youtube.com/embed/Il-mKA-VOaY?si=5zVo9IYr-dUzWN3q'
    ],


};

function setRandomVideo(listName){
    // 指定したリストが存在するかチェック
    if (!videoLists[listName]) {
        console.error('指定されたリストが存在しません:', listName);
        return;
    }

    // 対応するリストを取得
    const selectedList = videoLists[listName];

    // ランダムなURLを取得
    const randomUrl = selectedList[Math.floor(Math.random() * selectedList.length)];

    // iframeに設定（HTML内のIDを指定）
    document.addEventListener("DOMContentLoaded", function() {
        const iframe = document.getElementById('videoIframe');
        if (iframe) {
            iframe.src = randomUrl;
        } else {
            console.error('videoIframeが見つかりません');
        }
    });
}