const lists=[
    {
        url:"img/top1.png",
        position:"center 63%"
    },
    {
        url:"img/top2.png",
        position:"center 63%"
    }
]
let index=0;
const interval = 5000; // 5秒ごとに切り替え
const header = document.getElementById('headerbackground'); // id取得

function changeBackground() {
    const current = lists[index];
    header.style.backgroundImage = `url(${current.url})`;
    header.style.backgroundPosition = current.position;
    // background-sizeはstyle.cssで定義済みなのでここでは省略可
    index = (index + 1) % lists.length;
}
changeBackground();
setInterval(changeBackground, interval); //一定時間ごとに関数実行