'use strict';

// Splideのインスタンスを作成(設定はインスタンス作成時に第二引数で渡す)
const options = {
    // type:'slide',// スライダーのタイプ(スクロールは始点/終点まで止まる)
    // type:'loop',// 所謂、無限カルーセルができる
    type:'fade',// 左右スクロールによる動きはなく、フェードインアウトによるスライド切り替えとなる(無限ではない)。無限スライダーにする場合、rewindをtrueにする必要がある。
    rewind:true,
    direction:'ltr',// スライダーの方向
    pagenation:false,
    width:800,
    classes: {
        // ページネーション関連のクラスを追加
        pagination: 'splide__pagination your-class-pagination', // container
        page      : 'splide__pagination__page your-class-page', // each button
    },
}


const splide = new Splide( '.splide',options);
splide.mount();
console.log("splide",splide)