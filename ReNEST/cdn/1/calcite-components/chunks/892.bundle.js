"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[892],{892:(_,t,e)=>{e.r(t),e.d(t,{default:()=>d});var s=e(9958),n=(e(9113),e(4300),e(7146),e(8220),e(2627),e(493),e(8545),e(3213),e(4583),e(8065),e(3041),e(236),"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")),r="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),m="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),M="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),i=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function a(_,t,e){var s,n;return"m"===e?t?"минута":"минуту":_+" "+(s=+_,n={mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[e].split("_"),s%10==1&&s%100!=11?n[0]:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?n[1]:n[2])}var l=function(_,t){return i.test(t)?n[_.month()]:r[_.month()]};l.s=r,l.f=n;var u=function(_,t){return i.test(t)?m[_.month()]:M[_.month()]};u.s=M,u.f=m;var o={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:l,monthsShort:u,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:a,mm:a,h:"час",hh:a,d:"день",dd:a,M:"месяц",MM:a,y:"год",yy:a},ordinal:function(_){return _},meridiem:function(_){return _<4?"ночи":_<12?"утра":_<17?"дня":"вечера"}};s.d.locale(o,null,!0);const d=o}}]);