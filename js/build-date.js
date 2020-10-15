var build_date = Date.parse(new Date('2018-11-11').toLocaleDateString());
var now_date = Date.parse(new Date(new Date().toLocaleDateString()));
var build_days = parseInt((now_date - build_date) / (1000 * 60 * 60 * 24));

$(".build-date-prefix").text(`本站已建立 `)
$(".build-date-suffix").text(` ${build_days}天`)