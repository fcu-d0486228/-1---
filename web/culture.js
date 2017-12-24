
$(document).ready(function () {
    var text = ["分佈於花蓮北部之奇萊山平原，南至台東及屏東之恆春半島等狹長之海岸平原及丘陵地區，目前人口約有206,813人(106年4月)，是台灣原住民族中人數最多者。傳統社會制度以母系氏族組織為主，男性被招贅後共居於女家，有關家庭親族事務與財產由女性戶長做主，惟重要事務，如婚姻、分產則必由出贅之母舅返家共同決策；然而，部落性之政治、司法、戰爭、宗教等公共事務，則由男性組織之男子年齡階級組織處理。傳統祭儀以部落之豐年祭為主，其中過程以表達部落男子年齡階級新成員之加入意義為最重要。", "<p>(阿美族分佈圖)</p><p>阿美族分佈在中央山脈東側，立霧溪以南，太平洋沿岸的東台縱谷及東海岸平原，大部份居住於平地，只有極少數居於山谷中，以行政區域來看，主要為花蓮、台東兩縣，台東市是阿美族人口分佈比例最高的地方，其次是花蓮光復鄉、吉安鄉、台東縣的東河鄉及成功鎮。</p><p>此外，阿美族共分為北部群、中部群和南部群，北部群包括南勢阿美，中部群包括秀姑巒溪及海岸阿美，南部群包括卑南及恆春阿美。其範圍包括現行台東縣的東河、池上、關山、長濱、成功、卑南、台東市、花蓮縣新城、吉安、壽豐、鳳林、光復、豐濱、瑞穗、玉里、富里、屏東縣牡丹、滿州等十九個鄉鎮市。</p>", "阿美族社會的另一個特徵是嚴密的年齡階級組織，男子在十三、四歲時，必須進入集會所接受成為一個男人的訓練。以二至五歲為一個階級，同一階級的男孩一起學習、生活，並住宿於集會所。在集會所裡，同一個階級的同伴一起工作，遇有獎勵或處罰也是以一個階級為單位。無形中更緊扣了同年齡階級的每一個男子，而這樣的關係是一生一世，直到離開人世為止。", "阿美族原是個多神信仰的民族，各種活動、病痛均有專屬的神靈，且每一個神靈有固定的方位，祭拜時均朝正確的方向，不得有失誤；kawas是核心的概念，泛指神祈、厲鬼、祖靈、動植物的精靈及人的靈魂，是十分複雜的概念，尤其在當阿美族與外接觸後，kawas也可以用來指涉日本人與漢人的神明。", "<p>「捕魚祭」</p><p>對於海，阿美族又敬又畏，因此在每年五月間稻出穗時節，港口部落會舉行捕食祭，祭祀海神以祈求漁獲豐收。在先祖時代，每當農作收成之前，族人便會相邀在海邊或河濱捕魚，並舉行祭儀，祈求年年能有好收成。只是，隨著時代的改變，生活型態已不同，生態環境也遭受破壞，現今阿美族的捕魚祭在形式上已有所改變了。</p>", "<p>服飾</p><p>女子以紅色及黑色為主要色系，男子則以藍色上衣、黑色短裙或紅色綁腿褲為主要裝扮。男女的裙子均為刺繡精美的圖案。</p>", "<p>阿美族很早就進入農耕的時代，因此雞舍、牛車棚、穀倉、及農作期間休息的田中小屋一應俱全。</p>"];
    $("#btn1").click(function () {
        $("img").attr("src", "pic.jpg");
        $("p").html(text[0]);
    });
    $("#btn2").click(function () {
        $("img").attr("src", "");
        $("p").html(text[1]);
    });
    $("#btn3").click(function () {
        $("img").attr("src", "");
        $("p").html(text[2]);
    });
    $("#btn4").click(function () {
        $("img").attr("src", "");
        $("p").html(text[3]);
    });
    $("#btn5").click(function () {
        $("img").attr("src", "");
        $("p").html(text[4]);
    });
    $("#btn6").click(function () {
        $("img").attr("src", "");
        $("p").html(text[5]);
    });
    $("#btn7").click(function () {
        $("img").attr("src", "");
        $("p").html(text[6]);
    });
    $("#btn8").click(function () {
        window.location.href = "https://www.fcu.com";
    });
});
