const newLegendClickHandler = function (e, legendItem, legend) {
    data.datasets[0].data[legendItem.index] + "体"
};
//=========== 円グラフ ============//
$('#chart01').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
    if (isInView) {

	var ctx=document.getElementById("chart01");//グラフを描画したい場所のid
	var chart=new Chart(ctx,{
	    type:'bar',//グラフのタイプ
	    data:{//グラフのデータ
		labels:["スマート","元気","かっこいい","ハード","ソフト","心地よい","重厚感","ピュア","幼い","切ない","憎い","凄い","迷い","親しみ","力強い","心強い","可憐","かわいい","フォーマル","シック","カジュアル","こってり","フェミニン","素朴","軽やか","面白い","癒し"],//データの名前
		datasets:[{
		    axis: 'y',
		    backgroundColor:["#0ebeff","#26b2f7","#3ea5f0","#5699e8","#6e8ce1","#8780d9","#9f74d1","#b767ca","#cf5bc2","#e74ebb","#ff42b3","#0fffa3","#14edac","#19dbb5","#1ec8bf","#23b6c8","#29a4d1","#2e92da","#3380e3","#386ded","#3d5bf6","#4249ff","#ffcb0f","#ecbf27","#d9b23f","#c6a657","#b3996f","#a18d87","#8e819f","#7b74b7","#6868cf","#555be7","#424fff"],//グラフの背景色
		    data:[3042,1925,1897,1741,1419,799,343,316,295,284,217,189,139,94,58,51,38,30,22,19,15,10,3,2,1,1,1]//データ
		}]
	    },

	    options:{//グラフのオプション
		indexAxis: 'y',
		onClick: (e) => {
		    const elements = chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);
			if (elements.length) {
			    const firstPoint = elements[0];
			    const label = chart.data.labels[firstPoint.index];
			    switch (label) {
				case "シック":
				window.open("https://raritysniper.com/metasamurai?nftId=35&nftId=136&nftId=206&nftId=220&nftId=685&nftId=793&nftId=967&nftId=1167&nftId=1173&nftId=1225&nftId=1662&nftId=1721&nftId=1782&nftId=1856&nftId=2072&nftId=2115&nftId=2362&nftId=2482&nftId=3146")
				    break;
				case "スマート":
				    window.open("smart.html")
				    break;
				case "元気":
				    window.open("genki.html")
				    break;
				case "かっこいい":
				    window.open("cool.html")
				    break;
				case "ハード":
				    window.open("hard.html")
				    break;
				case "ソフト":
				    window.open("soft.html")
				    break;
				case "心地よい":
				    window.open("conf.html")
				    break;
				case "重厚感":
				window.open("https://raritysniper.com/metasamurai?nftId=12&nftId=14&nftId=25&nftId=31&nftId=36&nftId=58&nftId=62&nftId=63&nftId=77&nftId=87&nftId=102&nftId=122&nftId=124&nftId=127&nftId=148&nftId=164&nftId=175&nftId=191&nftId=194&nftId=200&nftId=207&nftId=208&nftId=214&nftId=221&nftId=234&nftId=242&nftId=246&nftId=273&nftId=281&nftId=282&nftId=290&nftId=291&nftId=302&nftId=303&nftId=309&nftId=329&nftId=330&nftId=348&nftId=377&nftId=400&nftId=414&nftId=417&nftId=422&nftId=425&nftId=428&nftId=482&nftId=487&nftId=500&nftId=503&nftId=512&nftId=516&nftId=517&nftId=522&nftId=529&nftId=532&nftId=545&nftId=553&nftId=557&nftId=565&nftId=566&nftId=571&nftId=572&nftId=580&nftId=590&nftId=591&nftId=593&nftId=595&nftId=615&nftId=626&nftId=627&nftId=636&nftId=674&nftId=679&nftId=680&nftId=688&nftId=695&nftId=700&nftId=703&nftId=713&nftId=723&nftId=731&nftId=732&nftId=767&nftId=769&nftId=772&nftId=797&nftId=807&nftId=808&nftId=809&nftId=815&nftId=820&nftId=822&nftId=828&nftId=837&nftId=846&nftId=869&nftId=871&nftId=883&nftId=886&nftId=889&nftId=894&nftId=917&nftId=919&nftId=921&nftId=956&nftId=968&nftId=969&nftId=984&nftId=990&nftId=1003&nftId=1011&nftId=1021&nftId=1025&nftId=1027&nftId=1029&nftId=1047&nftId=1070&nftId=1106&nftId=1115&nftId=1126&nftId=1174&nftId=1192&nftId=1208&nftId=1209&nftId=1229&nftId=1239&nftId=1246&nftId=1255&nftId=1272&nftId=1280&nftId=1288&nftId=1299&nftId=1305&nftId=1327&nftId=1329&nftId=1343&nftId=1360&nftId=1377&nftId=1379&nftId=1381&nftId=1382&nftId=1384&nftId=1398&nftId=1441&nftId=1463&nftId=1476&nftId=1480&nftId=1481&nftId=1484&nftId=1491&nftId=1504&nftId=1518&nftId=1524&nftId=1531&nftId=1546&nftId=1550&nftId=1568&nftId=1603&nftId=1606&nftId=1608&nftId=1612&nftId=1619&nftId=1624&nftId=1634&nftId=1642&nftId=1658&nftId=1665&nftId=1672&nftId=1675&nftId=1676&nftId=1686&nftId=1695&nftId=1729&nftId=1742&nftId=1755&nftId=1757&nftId=1781&nftId=1783&nftId=1786&nftId=1810&nftId=1832&nftId=1839&nftId=1841&nftId=1843&nftId=1844&nftId=1852&nftId=1884&nftId=1892&nftId=1902&nftId=1904&nftId=1908&nftId=1918&nftId=1923&nftId=1925&nftId=1939&nftId=1946&nftId=1949&nftId=1953&nftId=1961&nftId=2000&nftId=2002&nftId=2010&nftId=2027&nftId=2037&nftId=2046&nftId=2047&nftId=2073&nftId=2074&nftId=2078&nftId=2081&nftId=2093&nftId=2098&nftId=2108&nftId=2123&nftId=2132&nftId=2137&nftId=2155&nftId=2170&nftId=2174&nftId=2189&nftId=2201&nftId=2202&nftId=2205&nftId=2213&nftId=2215&nftId=2219&nftId=2228&nftId=2230&nftId=2237&nftId=2252&nftId=2277&nftId=2286&nftId=2304&nftId=2305&nftId=2324&nftId=2343&nftId=2365&nftId=2389&nftId=2412&nftId=2424&nftId=2425&nftId=2426&nftId=2434&nftId=2437&nftId=2451&nftId=2457&nftId=2467&nftId=2473&nftId=2497&nftId=2499&nftId=2502&nftId=2519&nftId=2543&nftId=2568&nftId=2575&nftId=2579&nftId=2585&nftId=2587&nftId=2603&nftId=2614&nftId=2626&nftId=2627&nftId=2635&nftId=2636&nftId=2642&nftId=2647&nftId=2652&nftId=2655&nftId=2663&nftId=2702&nftId=2704&nftId=2706&nftId=2713&nftId=2714&nftId=2719&nftId=2750&nftId=2752&nftId=2761&nftId=2779&nftId=2783&nftId=2801&nftId=2810&nftId=2820&nftId=2838&nftId=2839&nftId=2840&nftId=2874&nftId=2884&nftId=2895&nftId=2897&nftId=2898&nftId=2901&nftId=2919&nftId=2935&nftId=2946&nftId=2951&nftId=2964&nftId=2986&nftId=3011&nftId=3013&nftId=3021&nftId=3033&nftId=3034&nftId=3044&nftId=3070&nftId=3075&nftId=3080&nftId=3082&nftId=3083&nftId=3084&nftId=3089&nftId=3103&nftId=3112&nftId=3115&nftId=3117&nftId=3153&nftId=3156&nftId=3180&nftId=3185&nftId=3203&nftId=3209&nftId=3214&nftId=3222&nftId=3224&nftId=3226&nftId=3230&nftId=3233&nftId=3236&nftId=3239&nftId=3244&nftId=3258&nftId=3260&nftId=3264&nftId=3267&nftId=3270&nftId=3271&nftId=3281&nftId=3299&nftId=3301&nftId=3308&nftId=3321&nftId=3324&nftId=3329")
				    break;
				case "ピュア":
				    window.open("https://raritysniper.com/metasamurai?nftId=12&nftId=19&nftId=21&nftId=25&nftId=27&nftId=29&nftId=31&nftId=43&nftId=46&nftId=62&nftId=64&nftId=97&nftId=99&nftId=124&nftId=136&nftId=159&nftId=164&nftId=169&nftId=191&nftId=192&nftId=207&nftId=214&nftId=221&nftId=225&nftId=233&nftId=242&nftId=243&nftId=258&nftId=266&nftId=267&nftId=270&nftId=273&nftId=279&nftId=281&nftId=284&nftId=329&nftId=339&nftId=348&nftId=370&nftId=372&nftId=377&nftId=381&nftId=414&nftId=422&nftId=425&nftId=427&nftId=430&nftId=434&nftId=435&nftId=460&nftId=470&nftId=494&nftId=500&nftId=501&nftId=503&nftId=511&nftId=529&nftId=532&nftId=535&nftId=544&nftId=585&nftId=591&nftId=592&nftId=593&nftId=598&nftId=603&nftId=615&nftId=619&nftId=655&nftId=673&nftId=692&nftId=695&nftId=705&nftId=706&nftId=729&nftId=731&nftId=738&nftId=750&nftId=754&nftId=761&nftId=767&nftId=768&nftId=772&nftId=783&nftId=802&nftId=804&nftId=828&nftId=837&nftId=863&nftId=866&nftId=881&nftId=885&nftId=947&nftId=956&nftId=962&nftId=968&nftId=969&nftId=990&nftId=1003&nftId=1011&nftId=1012&nftId=1014&nftId=1015&nftId=1070&nftId=1081&nftId=1096&nftId=1102&nftId=1104&nftId=1121&nftId=1142&nftId=1173&nftId=1189&nftId=1190&nftId=1209&nftId=1216&nftId=1220&nftId=1225&nftId=1229&nftId=1230&nftId=1241&nftId=1244&nftId=1255&nftId=1272&nftId=1275&nftId=1280&nftId=1283&nftId=1288&nftId=1305&nftId=1309&nftId=1326&nftId=1327&nftId=1344&nftId=1360&nftId=1372&nftId=1373&nftId=1379&nftId=1381&nftId=1389&nftId=1394&nftId=1411&nftId=1412&nftId=1423&nftId=1431&nftId=1437&nftId=1452&nftId=1461&nftId=1474&nftId=1484&nftId=1491&nftId=1495&nftId=1498&nftId=1518&nftId=1524&nftId=1525&nftId=1545&nftId=1547&nftId=1550&nftId=1564&nftId=1565&nftId=1582&nftId=1592&nftId=1603&nftId=1608&nftId=1621&nftId=1624&nftId=1627&nftId=1634&nftId=1665&nftId=1695&nftId=1696&nftId=1715&nftId=1722&nftId=1729&nftId=1738&nftId=1749&nftId=1755&nftId=1765&nftId=1769&nftId=1772&nftId=1775&nftId=1783&nftId=1786&nftId=1807&nftId=1819&nftId=1837&nftId=1851&nftId=1868&nftId=1894&nftId=1896&nftId=1898&nftId=1908&nftId=1923&nftId=1939&nftId=1953&nftId=1966&nftId=1971&nftId=1985&nftId=2000&nftId=2040&nftId=2047&nftId=2049&nftId=2053&nftId=2072&nftId=2074&nftId=2080&nftId=2082&nftId=2086&nftId=2102&nftId=2123&nftId=2130&nftId=2132&nftId=2189&nftId=2202&nftId=2215&nftId=2222&nftId=2230&nftId=2259&nftId=2288&nftId=2302&nftId=2305&nftId=2309&nftId=2317&nftId=2343&nftId=2352&nftId=2355&nftId=2356&nftId=2362&nftId=2374&nftId=2379&nftId=2383&nftId=2398&nftId=2413&nftId=2416&nftId=2424&nftId=2435&nftId=2437&nftId=2439&nftId=2442&nftId=2445&nftId=2446&nftId=2451&nftId=2465&nftId=2482&nftId=2497&nftId=2513&nftId=2517&nftId=2543&nftId=2545&nftId=2560&nftId=2562&nftId=2568&nftId=2575&nftId=2584&nftId=2595&nftId=2626&nftId=2636&nftId=2642&nftId=2655&nftId=2659&nftId=2697&nftId=2704&nftId=2706&nftId=2708&nftId=2713&nftId=2752&nftId=2759&nftId=2761&nftId=2773&nftId=2796&nftId=2801&nftId=2806&nftId=2807&nftId=2809&nftId=2821&nftId=2832&nftId=2838&nftId=2850&nftId=2855&nftId=2859&nftId=2878&nftId=2919&nftId=2951&nftId=2961&nftId=2974&nftId=2982&nftId=2994&nftId=3013&nftId=3025&nftId=3033&nftId=3034&nftId=3035&nftId=3062&nftId=3075&nftId=3085&nftId=3089&nftId=3094&nftId=3145&nftId=3165&nftId=3182&nftId=3185&nftId=3195&nftId=3203&nftId=3209&nftId=3214&nftId=3222&nftId=3249&nftId=3260&nftId=3264&nftId=3267&nftId=3296&nftId=3299&nftId=3301&nftId=3311&nftId=3324&nftId=3328&nftId=3329")
				    break;
				case "幼い":
				    window.open("https://raritysniper.com/metasamurai?nftId=3&nftId=6&nftId=10&nftId=23&nftId=27&nftId=29&nftId=35&nftId=44&nftId=46&nftId=56&nftId=64&nftId=85&nftId=93&nftId=136&nftId=142&nftId=144&nftId=167&nftId=223&nftId=231&nftId=239&nftId=240&nftId=245&nftId=249&nftId=276&nftId=283&nftId=329&nftId=339&nftId=341&nftId=344&nftId=362&nftId=366&nftId=372&nftId=381&nftId=400&nftId=404&nftId=407&nftId=410&nftId=424&nftId=434&nftId=459&nftId=471&nftId=488&nftId=507&nftId=511&nftId=535&nftId=541&nftId=546&nftId=565&nftId=570&nftId=592&nftId=608&nftId=613&nftId=619&nftId=649&nftId=656&nftId=659&nftId=662&nftId=668&nftId=704&nftId=706&nftId=712&nftId=727&nftId=728&nftId=741&nftId=750&nftId=751&nftId=761&nftId=768&nftId=773&nftId=776&nftId=778&nftId=791&nftId=806&nftId=813&nftId=817&nftId=831&nftId=834&nftId=863&nftId=864&nftId=866&nftId=881&nftId=924&nftId=939&nftId=940&nftId=947&nftId=951&nftId=966&nftId=973&nftId=993&nftId=996&nftId=1012&nftId=1015&nftId=1027&nftId=1034&nftId=1040&nftId=1080&nftId=1107&nftId=1110&nftId=1121&nftId=1177&nftId=1178&nftId=1189&nftId=1195&nftId=1216&nftId=1217&nftId=1225&nftId=1244&nftId=1247&nftId=1287&nftId=1304&nftId=1309&nftId=1326&nftId=1344&nftId=1373&nftId=1376&nftId=1393&nftId=1394&nftId=1411&nftId=1421&nftId=1426&nftId=1428&nftId=1437&nftId=1452&nftId=1456&nftId=1461&nftId=1469&nftId=1470&nftId=1473&nftId=1474&nftId=1496&nftId=1499&nftId=1545&nftId=1553&nftId=1554&nftId=1564&nftId=1576&nftId=1579&nftId=1587&nftId=1604&nftId=1640&nftId=1664&nftId=1670&nftId=1682&nftId=1683&nftId=1687&nftId=1715&nftId=1720&nftId=1722&nftId=1723&nftId=1730&nftId=1749&nftId=1772&nftId=1773&nftId=1776&nftId=1777&nftId=1807&nftId=1819&nftId=1821&nftId=1828&nftId=1836&nftId=1842&nftId=1851&nftId=1852&nftId=1878&nftId=1882&nftId=1894&nftId=1899&nftId=1915&nftId=1920&nftId=1927&nftId=1945&nftId=1955&nftId=1958&nftId=1969&nftId=1995&nftId=2015&nftId=2026&nftId=2027&nftId=2044&nftId=2047&nftId=2049&nftId=2071&nftId=2072&nftId=2079&nftId=2086&nftId=2099&nftId=2110&nftId=2117&nftId=2132&nftId=2134&nftId=2140&nftId=2150&nftId=2154&nftId=2197&nftId=2198&nftId=2207&nftId=2225&nftId=2232&nftId=2243&nftId=2244&nftId=2255&nftId=2267&nftId=2276&nftId=2280&nftId=2317&nftId=2331&nftId=2332&nftId=2354&nftId=2359&nftId=2364&nftId=2385&nftId=2390&nftId=2394&nftId=2413&nftId=2429&nftId=2438&nftId=2448&nftId=2460&nftId=2463&nftId=2465&nftId=2479&nftId=2484&nftId=2506&nftId=2525&nftId=2529&nftId=2530&nftId=2535&nftId=2547&nftId=2558&nftId=2582&nftId=2588&nftId=2610&nftId=2625&nftId=2630&nftId=2659&nftId=2673&nftId=2679&nftId=2694&nftId=2711&nftId=2741&nftId=2742&nftId=2743&nftId=2750&nftId=2769&nftId=2772&nftId=2785&nftId=2790&nftId=2796&nftId=2798&nftId=2802&nftId=2811&nftId=2828&nftId=2838&nftId=2849&nftId=2856&nftId=2882&nftId=2902&nftId=2911&nftId=2919&nftId=2922&nftId=2925&nftId=2936&nftId=2942&nftId=2944&nftId=2982&nftId=2986&nftId=3020&nftId=3042&nftId=3048&nftId=3051&nftId=3060&nftId=3072&nftId=3077&nftId=3079&nftId=3085&nftId=3091&nftId=3092&nftId=3098&nftId=3111&nftId=3117&nftId=3133&nftId=3142&nftId=3145&nftId=3154&nftId=3172&nftId=3196&nftId=3206&nftId=3208&nftId=3226&nftId=3240&nftId=3256&nftId=3287&nftId=3299&nftId=3327&nftId=3328")
				    break;
				case "切ない":
				    window.open("https://raritysniper.com/metasamurai?nftId=8&nftId=9&nftId=36&nftId=42&nftId=47&nftId=63&nftId=65&nftId=82&nftId=103&nftId=111&nftId=136&nftId=137&nftId=142&nftId=144&nftId=154&nftId=184&nftId=195&nftId=217&nftId=226&nftId=245&nftId=248&nftId=249&nftId=251&nftId=252&nftId=260&nftId=262&nftId=267&nftId=277&nftId=279&nftId=285&nftId=306&nftId=337&nftId=344&nftId=351&nftId=459&nftId=470&nftId=471&nftId=500&nftId=501&nftId=524&nftId=537&nftId=565&nftId=599&nftId=600&nftId=618&nftId=640&nftId=642&nftId=646&nftId=650&nftId=662&nftId=681&nftId=684&nftId=704&nftId=737&nftId=773&nftId=778&nftId=785&nftId=790&nftId=808&nftId=816&nftId=820&nftId=846&nftId=849&nftId=863&nftId=872&nftId=876&nftId=893&nftId=894&nftId=895&nftId=897&nftId=898&nftId=900&nftId=905&nftId=907&nftId=927&nftId=942&nftId=950&nftId=975&nftId=1002&nftId=1015&nftId=1026&nftId=1044&nftId=1049&nftId=1061&nftId=1116&nftId=1119&nftId=1121&nftId=1133&nftId=1138&nftId=1155&nftId=1173&nftId=1196&nftId=1223&nftId=1239&nftId=1244&nftId=1259&nftId=1262&nftId=1269&nftId=1310&nftId=1318&nftId=1321&nftId=1324&nftId=1326&nftId=1338&nftId=1345&nftId=1354&nftId=1356&nftId=1388&nftId=1397&nftId=1410&nftId=1433&nftId=1448&nftId=1462&nftId=1474&nftId=1494&nftId=1496&nftId=1499&nftId=1521&nftId=1530&nftId=1535&nftId=1540&nftId=1542&nftId=1566&nftId=1573&nftId=1574&nftId=1590&nftId=1614&nftId=1617&nftId=1623&nftId=1624&nftId=1648&nftId=1654&nftId=1663&nftId=1670&nftId=1674&nftId=1678&nftId=1689&nftId=1693&nftId=1709&nftId=1744&nftId=1764&nftId=1767&nftId=1778&nftId=1794&nftId=1798&nftId=1800&nftId=1801&nftId=1810&nftId=1815&nftId=1821&nftId=1827&nftId=1829&nftId=1842&nftId=1859&nftId=1886&nftId=1894&nftId=1899&nftId=1921&nftId=1935&nftId=1942&nftId=1948&nftId=1955&nftId=1960&nftId=1966&nftId=1975&nftId=1979&nftId=1982&nftId=1994&nftId=2006&nftId=2041&nftId=2042&nftId=2055&nftId=2056&nftId=2057&nftId=2064&nftId=2071&nftId=2076&nftId=2100&nftId=2112&nftId=2117&nftId=2119&nftId=2121&nftId=2144&nftId=2148&nftId=2152&nftId=2166&nftId=2190&nftId=2192&nftId=2195&nftId=2200&nftId=2207&nftId=2222&nftId=2239&nftId=2248&nftId=2263&nftId=2282&nftId=2283&nftId=2286&nftId=2300&nftId=2308&nftId=2317&nftId=2324&nftId=2326&nftId=2350&nftId=2362&nftId=2374&nftId=2382&nftId=2385&nftId=2398&nftId=2415&nftId=2417&nftId=2419&nftId=2427&nftId=2429&nftId=2440&nftId=2463&nftId=2470&nftId=2487&nftId=2504&nftId=2523&nftId=2529&nftId=2537&nftId=2553&nftId=2557&nftId=2603&nftId=2616&nftId=2658&nftId=2694&nftId=2701&nftId=2709&nftId=2723&nftId=2725&nftId=2731&nftId=2735&nftId=2736&nftId=2737&nftId=2757&nftId=2788&nftId=2803&nftId=2808&nftId=2811&nftId=2831&nftId=2834&nftId=2841&nftId=2850&nftId=2872&nftId=2876&nftId=2904&nftId=2925&nftId=2933&nftId=2936&nftId=2960&nftId=2986&nftId=2990&nftId=3040&nftId=3060&nftId=3068&nftId=3077&nftId=3106&nftId=3108&nftId=3112&nftId=3133&nftId=3136&nftId=3152&nftId=3154&nftId=3161&nftId=3168&nftId=3182&nftId=3198&nftId=3207&nftId=3221&nftId=3246&nftId=3251&nftId=3253&nftId=3278&nftId=3287&nftId=3288&nftId=3296&nftId=3317&nftId=3318&nftId=3319&nftId=3323&nftId=3327&nftId=3328")
				    break;
				case "憎い":
				    window.open("https://raritysniper.com/metasamurai?nftId=30&nftId=76&nftId=83&nftId=91&nftId=100&nftId=113&nftId=117&nftId=139&nftId=169&nftId=216&nftId=225&nftId=232&nftId=235&nftId=239&nftId=240&nftId=250&nftId=289&nftId=311&nftId=320&nftId=338&nftId=349&nftId=372&nftId=373&nftId=386&nftId=389&nftId=390&nftId=394&nftId=434&nftId=444&nftId=458&nftId=469&nftId=473&nftId=477&nftId=484&nftId=496&nftId=513&nftId=525&nftId=528&nftId=554&nftId=559&nftId=599&nftId=602&nftId=614&nftId=625&nftId=633&nftId=644&nftId=653&nftId=656&nftId=678&nftId=689&nftId=716&nftId=741&nftId=756&nftId=759&nftId=785&nftId=803&nftId=831&nftId=835&nftId=851&nftId=862&nftId=871&nftId=874&nftId=875&nftId=878&nftId=914&nftId=922&nftId=931&nftId=935&nftId=974&nftId=981&nftId=1023&nftId=1035&nftId=1061&nftId=1062&nftId=1071&nftId=1075&nftId=1098&nftId=1114&nftId=1122&nftId=1135&nftId=1149&nftId=1156&nftId=1174&nftId=1188&nftId=1189&nftId=1222&nftId=1231&nftId=1247&nftId=1251&nftId=1261&nftId=1286&nftId=1289&nftId=1293&nftId=1298&nftId=1322&nftId=1339&nftId=1363&nftId=1366&nftId=1386&nftId=1388&nftId=1391&nftId=1392&nftId=1406&nftId=1419&nftId=1425&nftId=1457&nftId=1464&nftId=1473&nftId=1531&nftId=1597&nftId=1604&nftId=1633&nftId=1640&nftId=1643&nftId=1656&nftId=1748&nftId=1757&nftId=1802&nftId=1819&nftId=1830&nftId=1844&nftId=1857&nftId=1858&nftId=1893&nftId=1895&nftId=1914&nftId=1959&nftId=1977&nftId=1988&nftId=2022&nftId=2036&nftId=2043&nftId=2082&nftId=2088&nftId=2089&nftId=2090&nftId=2099&nftId=2103&nftId=2109&nftId=2153&nftId=2159&nftId=2179&nftId=2218&nftId=2224&nftId=2238&nftId=2247&nftId=2267&nftId=2268&nftId=2282&nftId=2297&nftId=2300&nftId=2310&nftId=2312&nftId=2320&nftId=2335&nftId=2336&nftId=2351&nftId=2355&nftId=2360&nftId=2364&nftId=2371&nftId=2372&nftId=2377&nftId=2408&nftId=2410&nftId=2423&nftId=2433&nftId=2464&nftId=2471&nftId=2475&nftId=2477&nftId=2478&nftId=2492&nftId=2531&nftId=2535&nftId=2559&nftId=2569&nftId=2613&nftId=2623&nftId=2638&nftId=2644&nftId=2662&nftId=2678&nftId=2741&nftId=2742&nftId=2747&nftId=2748&nftId=2772&nftId=2837&nftId=2894&nftId=2915&nftId=2962&nftId=2963&nftId=2969&nftId=2981&nftId=2982&nftId=2983&nftId=2986&nftId=2989&nftId=3002&nftId=3006&nftId=3031&nftId=3137&nftId=3140&nftId=3143&nftId=3154&nftId=3163&nftId=3178&nftId=3188&nftId=3190&nftId=3210&nftId=3217&nftId=3252&nftId=3266&nftId=3284&nftId=3303&nftId=3310")
				    break;
				case "凄い":
				    window.open("https://raritysniper.com/metasamurai?nftId=49&nftId=55&nftId=59&nftId=64&nftId=76&nftId=80&nftId=132&nftId=133&nftId=148&nftId=159&nftId=177&nftId=194&nftId=195&nftId=229&nftId=245&nftId=298&nftId=307&nftId=331&nftId=339&nftId=365&nftId=366&nftId=372&nftId=373&nftId=434&nftId=459&nftId=468&nftId=469&nftId=470&nftId=483&nftId=494&nftId=498&nftId=507&nftId=515&nftId=517&nftId=549&nftId=557&nftId=568&nftId=593&nftId=602&nftId=619&nftId=657&nftId=724&nftId=730&nftId=733&nftId=771&nftId=782&nftId=820&nftId=862&nftId=885&nftId=894&nftId=895&nftId=900&nftId=915&nftId=954&nftId=958&nftId=1037&nftId=1045&nftId=1066&nftId=1091&nftId=1098&nftId=1103&nftId=1113&nftId=1116&nftId=1151&nftId=1163&nftId=1169&nftId=1246&nftId=1252&nftId=1253&nftId=1287&nftId=1318&nftId=1359&nftId=1362&nftId=1384&nftId=1393&nftId=1407&nftId=1428&nftId=1437&nftId=1452&nftId=1465&nftId=1469&nftId=1474&nftId=1475&nftId=1496&nftId=1548&nftId=1550&nftId=1573&nftId=1590&nftId=1593&nftId=1634&nftId=1648&nftId=1654&nftId=1658&nftId=1662&nftId=1673&nftId=1692&nftId=1699&nftId=1732&nftId=1736&nftId=1744&nftId=1753&nftId=1765&nftId=1808&nftId=1809&nftId=1836&nftId=1841&nftId=1861&nftId=1863&nftId=1899&nftId=1902&nftId=1903&nftId=1916&nftId=1919&nftId=1935&nftId=1957&nftId=1995&nftId=2020&nftId=2026&nftId=2030&nftId=2032&nftId=2045&nftId=2047&nftId=2082&nftId=2083&nftId=2107&nftId=2120&nftId=2125&nftId=2176&nftId=2184&nftId=2187&nftId=2197&nftId=2211&nftId=2222&nftId=2245&nftId=2297&nftId=2300&nftId=2303&nftId=2306&nftId=2309&nftId=2316&nftId=2352&nftId=2355&nftId=2356&nftId=2366&nftId=2379&nftId=2392&nftId=2399&nftId=2404&nftId=2449&nftId=2464&nftId=2472&nftId=2497&nftId=2515&nftId=2517&nftId=2520&nftId=2527&nftId=2561&nftId=2582&nftId=2587&nftId=2603&nftId=2655&nftId=2716&nftId=2735&nftId=2769&nftId=2782&nftId=2790&nftId=2801&nftId=2828&nftId=2863&nftId=2872&nftId=2891&nftId=2894&nftId=2908&nftId=2910&nftId=2918&nftId=2921&nftId=2956&nftId=2986&nftId=3026&nftId=3070&nftId=3135&nftId=3173&nftId=3175&nftId=3250&nftId=3261&nftId=3265&nftId=3289&nftId=3300&nftId=3328")
				    break;
				case "迷い":
				    window.open("https://raritysniper.com/metasamurai?nftId=16&nftId=47&nftId=92&nftId=93&nftId=145&nftId=226&nftId=245&nftId=289&nftId=308&nftId=332&nftId=337&nftId=369&nftId=370&nftId=373&nftId=392&nftId=417&nftId=459&nftId=462&nftId=463&nftId=466&nftId=469&nftId=483&nftId=486&nftId=510&nftId=512&nftId=535&nftId=538&nftId=542&nftId=563&nftId=565&nftId=603&nftId=650&nftId=668&nftId=741&nftId=820&nftId=828&nftId=887&nftId=894&nftId=895&nftId=933&nftId=986&nftId=1002&nftId=1015&nftId=1037&nftId=1137&nftId=1167&nftId=1173&nftId=1204&nftId=1232&nftId=1247&nftId=1248&nftId=1271&nftId=1305&nftId=1336&nftId=1338&nftId=1349&nftId=1359&nftId=1362&nftId=1365&nftId=1373&nftId=1376&nftId=1391&nftId=1399&nftId=1402&nftId=1405&nftId=1416&nftId=1426&nftId=1455&nftId=1464&nftId=1518&nftId=1537&nftId=1561&nftId=1630&nftId=1653&nftId=1711&nftId=1734&nftId=1794&nftId=1801&nftId=1810&nftId=1821&nftId=1846&nftId=1849&nftId=1886&nftId=1894&nftId=1896&nftId=1903&nftId=1946&nftId=1955&nftId=1995&nftId=2006&nftId=2020&nftId=2038&nftId=2050&nftId=2112&nftId=2125&nftId=2126&nftId=2140&nftId=2185&nftId=2197&nftId=2214&nftId=2317&nftId=2330&nftId=2359&nftId=2362&nftId=2374&nftId=2379&nftId=2389&nftId=2390&nftId=2420&nftId=2436&nftId=2439&nftId=2445&nftId=2449&nftId=2569&nftId=2598&nftId=2635&nftId=2641&nftId=2645&nftId=2731&nftId=2743&nftId=2750&nftId=2757&nftId=2786&nftId=2805&nftId=2821&nftId=2843&nftId=2848&nftId=2865&nftId=2882&nftId=2894&nftId=2960&nftId=3012&nftId=3049&nftId=3067&nftId=3077&nftId=3122&nftId=3236&nftId=3264&nftId=3288")
				    break;
				case "親しみ":
				    window.open("https://raritysniper.com/metasamurai?nftId=16&nftId=103&nftId=294&nftId=329&nftId=334&nftId=337&nftId=339&nftId=370&nftId=392&nftId=417&nftId=427&nftId=459&nftId=460&nftId=463&nftId=468&nftId=512&nftId=520&nftId=538&nftId=603&nftId=634&nftId=719&nftId=790&nftId=839&nftId=894&nftId=915&nftId=949&nftId=958&nftId=986&nftId=1015&nftId=1103&nftId=1113&nftId=1163&nftId=1167&nftId=1173&nftId=1175&nftId=1213&nftId=1248&nftId=1275&nftId=1287&nftId=1327&nftId=1334&nftId=1380&nftId=1389&nftId=1433&nftId=1437&nftId=1442&nftId=1470&nftId=1566&nftId=1582&nftId=1683&nftId=1709&nftId=1722&nftId=1761&nftId=1779&nftId=1792&nftId=1836&nftId=1846&nftId=1876&nftId=1894&nftId=1896&nftId=1903&nftId=1972&nftId=2007&nftId=2020&nftId=2032&nftId=2044&nftId=2087&nftId=2107&nftId=2125&nftId=2216&nftId=2236&nftId=2294&nftId=2305&nftId=2317&nftId=2373&nftId=2382&nftId=2436&nftId=2439&nftId=2474&nftId=2517&nftId=2558&nftId=2584&nftId=2821&nftId=2873&nftId=2879&nftId=2882&nftId=2994&nftId=3146&nftId=3182&nftId=3190&nftId=3228&nftId=3264&nftId=3288&nftId=3327")
				    break;
				case "力強い":
				    window.open("https://raritysniper.com/metasamurai?nftId=121&nftId=210&nftId=285&nftId=374&nftId=416&nftId=489&nftId=565&nftId=632&nftId=643&nftId=707&nftId=732&nftId=734&nftId=739&nftId=766&nftId=898&nftId=1073&nftId=1184&nftId=1225&nftId=1291&nftId=1330&nftId=1413&nftId=1440&nftId=1494&nftId=1528&nftId=1560&nftId=1673&nftId=1744&nftId=1807&nftId=1829&nftId=1855&nftId=1878&nftId=1924&nftId=1963&nftId=2040&nftId=2059&nftId=2066&nftId=2146&nftId=2192&nftId=2216&nftId=2311&nftId=2354&nftId=2359&nftId=2378&nftId=2417&nftId=2621&nftId=2712&nftId=2737&nftId=2757&nftId=2786&nftId=2892&nftId=2918&nftId=2928&nftId=3067&nftId=3134&nftId=3161&nftId=3171&nftId=3213&nftId=3246")
				    break;
				case "心強い":
				    window.open("https://raritysniper.com/metasamurai?nftId=148&nftId=164&nftId=195&nftId=217&nftId=245&nftId=469&nftId=487&nftId=490&nftId=500&nftId=553&nftId=599&nftId=715&nftId=720&nftId=732&nftId=760&nftId=846&nftId=875&nftId=896&nftId=1047&nftId=1098&nftId=1384&nftId=1415&nftId=1430&nftId=1481&nftId=1623&nftId=1648&nftId=1654&nftId=1658&nftId=1675&nftId=1844&nftId=1863&nftId=1872&nftId=1919&nftId=1923&nftId=1935&nftId=2030&nftId=2076&nftId=2121&nftId=2257&nftId=2308&nftId=2399&nftId=2449&nftId=2469&nftId=2587&nftId=2647&nftId=2655&nftId=2663&nftId=2761&nftId=2838&nftId=2899&nftId=3075")
				    break;
				case "可憐":
				    window.open("https://raritysniper.com/metasamurai?nftId=44&nftId=150&nftId=179&nftId=188&nftId=196&nftId=319&nftId=378&nftId=497&nftId=512&nftId=554&nftId=625&nftId=901&nftId=908&nftId=986&nftId=1014&nftId=1112&nftId=1137&nftId=1177&nftId=1220&nftId=1278&nftId=1286&nftId=1296&nftId=1334&nftId=1475&nftId=1794&nftId=1857&nftId=2295&nftId=2345&nftId=2396&nftId=2402&nftId=2422&nftId=2428&nftId=2529&nftId=2698&nftId=2872&nftId=2879&nftId=3152&nftId=3218")
				    break;
				case "かわいい":
				    window.open("https://raritysniper.com/metasamurai?nftId=125&nftId=156&nftId=252&nftId=288&nftId=400&nftId=483&nftId=633&nftId=861&nftId=886&nftId=1416&nftId=1446&nftId=1450&nftId=1452&nftId=1487&nftId=1506&nftId=1537&nftId=2050&nftId=2084&nftId=2174&nftId=2245&nftId=2252&nftId=2319&nftId=2477&nftId=2483&nftId=2594&nftId=2964&nftId=3026&nftId=3055&nftId=3109&nftId=3141")
				    break;
				case "フォーマル":
				    window.open("https://raritysniper.com/metasamurai?nftId=19&nftId=155&nftId=271&nftId=284&nftId=289&nftId=355&nftId=392&nftId=465&nftId=1137&nftId=1144&nftId=1202&nftId=1281&nftId=1430&nftId=1456&nftId=1593&nftId=1625&nftId=1740&nftId=1753&nftId=2285&nftId=2552&nftId=2837&nftId=3048")
				    break;
				case "カジュアル":
				    window.open("https://raritysniper.com/metasamurai?nftId=331&nftId=365&nftId=968&nftId=1189&nftId=1247&nftId=1327&nftId=1407&nftId=1550&nftId=1819&nftId=1836&nftId=2197&nftId=2350&nftId=3033&nftId=3089&nftId=3146")
				    break;
				case "こってり":
				    window.open("https://raritysniper.com/metasamurai?nftId=263&nftId=489&nftId=822&nftId=1024&nftId=1536&nftId=1884&nftId=2061&nftId=2189&nftId=2533&nftId=3122")
				    break;
				case "フェミニン":
				    window.open("https://raritysniper.com/metasamurai?nftId=1137&nftId=2583&nftId=2837")
				    break;
				case "素朴":
				    window.open("https://raritysniper.com/metasamurai?nftId=657&nftId=1178")
				    break;
				case "軽やか":
				    window.open("https://raritysniper.com/metasamurai?nftId=133")
				    break;
				case "面白い":
				    window.open("https://raritysniper.com/metasamurai?nftId=1137")
				    break;
				case "癒し":
				    window.open("https://raritysniper.com/metasamurai?nftId=258")
				    break;
				default:
				    break;
				  }
			}
		},
		scales: {
		    x: {
			display: true,
			type: 'logarithmic',
		    },
		    y: {
			display: true,
		    }
		},
		plugins: {
		    title:{//上部タイトル表示の設定
			display: true,
			fontSize:12,
			text: '単位：体'
		    },
		    legend:{
			display:false//グラフの説明を表示
		    },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';

                        if (context.parsed.y !== null) {
                            label += context.parsed.x + '体';
                        }
                        return label;
                    }
                }
            }
		},
		maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
	    }
	});
	
    }
});
