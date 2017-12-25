// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1470){
var map__1471 = p__1470;
var map__1471__$1 = ((((!((map__1471 == null)))?((((map__1471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1471):map__1471);
var m = map__1471__$1;
var n = cljs.core.get.call(null,map__1471__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1471__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1473_1495 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1474_1496 = null;
var count__1475_1497 = (0);
var i__1476_1498 = (0);
while(true){
if((i__1476_1498 < count__1475_1497)){
var f_1499 = cljs.core._nth.call(null,chunk__1474_1496,i__1476_1498);
cljs.core.println.call(null,"  ",f_1499);

var G__1500 = seq__1473_1495;
var G__1501 = chunk__1474_1496;
var G__1502 = count__1475_1497;
var G__1503 = (i__1476_1498 + (1));
seq__1473_1495 = G__1500;
chunk__1474_1496 = G__1501;
count__1475_1497 = G__1502;
i__1476_1498 = G__1503;
continue;
} else {
var temp__4657__auto___1504 = cljs.core.seq.call(null,seq__1473_1495);
if(temp__4657__auto___1504){
var seq__1473_1505__$1 = temp__4657__auto___1504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1473_1505__$1)){
var c__4227__auto___1506 = cljs.core.chunk_first.call(null,seq__1473_1505__$1);
var G__1507 = cljs.core.chunk_rest.call(null,seq__1473_1505__$1);
var G__1508 = c__4227__auto___1506;
var G__1509 = cljs.core.count.call(null,c__4227__auto___1506);
var G__1510 = (0);
seq__1473_1495 = G__1507;
chunk__1474_1496 = G__1508;
count__1475_1497 = G__1509;
i__1476_1498 = G__1510;
continue;
} else {
var f_1511 = cljs.core.first.call(null,seq__1473_1505__$1);
cljs.core.println.call(null,"  ",f_1511);

var G__1512 = cljs.core.next.call(null,seq__1473_1505__$1);
var G__1513 = null;
var G__1514 = (0);
var G__1515 = (0);
seq__1473_1495 = G__1512;
chunk__1474_1496 = G__1513;
count__1475_1497 = G__1514;
i__1476_1498 = G__1515;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1516 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3832__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3832__auto__)){
return or__3832__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1516);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1516)))?cljs.core.second.call(null,arglists_1516):arglists_1516));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1477_1517 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1478_1518 = null;
var count__1479_1519 = (0);
var i__1480_1520 = (0);
while(true){
if((i__1480_1520 < count__1479_1519)){
var vec__1481_1521 = cljs.core._nth.call(null,chunk__1478_1518,i__1480_1520);
var name_1522 = cljs.core.nth.call(null,vec__1481_1521,(0),null);
var map__1484_1523 = cljs.core.nth.call(null,vec__1481_1521,(1),null);
var map__1484_1524__$1 = ((((!((map__1484_1523 == null)))?((((map__1484_1523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1484_1523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1484_1523):map__1484_1523);
var doc_1525 = cljs.core.get.call(null,map__1484_1524__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1526 = cljs.core.get.call(null,map__1484_1524__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1522);

cljs.core.println.call(null," ",arglists_1526);

if(cljs.core.truth_(doc_1525)){
cljs.core.println.call(null," ",doc_1525);
} else {
}

var G__1527 = seq__1477_1517;
var G__1528 = chunk__1478_1518;
var G__1529 = count__1479_1519;
var G__1530 = (i__1480_1520 + (1));
seq__1477_1517 = G__1527;
chunk__1478_1518 = G__1528;
count__1479_1519 = G__1529;
i__1480_1520 = G__1530;
continue;
} else {
var temp__4657__auto___1531 = cljs.core.seq.call(null,seq__1477_1517);
if(temp__4657__auto___1531){
var seq__1477_1532__$1 = temp__4657__auto___1531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1477_1532__$1)){
var c__4227__auto___1533 = cljs.core.chunk_first.call(null,seq__1477_1532__$1);
var G__1534 = cljs.core.chunk_rest.call(null,seq__1477_1532__$1);
var G__1535 = c__4227__auto___1533;
var G__1536 = cljs.core.count.call(null,c__4227__auto___1533);
var G__1537 = (0);
seq__1477_1517 = G__1534;
chunk__1478_1518 = G__1535;
count__1479_1519 = G__1536;
i__1480_1520 = G__1537;
continue;
} else {
var vec__1486_1538 = cljs.core.first.call(null,seq__1477_1532__$1);
var name_1539 = cljs.core.nth.call(null,vec__1486_1538,(0),null);
var map__1489_1540 = cljs.core.nth.call(null,vec__1486_1538,(1),null);
var map__1489_1541__$1 = ((((!((map__1489_1540 == null)))?((((map__1489_1540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1489_1540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1489_1540):map__1489_1540);
var doc_1542 = cljs.core.get.call(null,map__1489_1541__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1543 = cljs.core.get.call(null,map__1489_1541__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1539);

cljs.core.println.call(null," ",arglists_1543);

if(cljs.core.truth_(doc_1542)){
cljs.core.println.call(null," ",doc_1542);
} else {
}

var G__1544 = cljs.core.next.call(null,seq__1477_1532__$1);
var G__1545 = null;
var G__1546 = (0);
var G__1547 = (0);
seq__1477_1517 = G__1544;
chunk__1478_1518 = G__1545;
count__1479_1519 = G__1546;
i__1480_1520 = G__1547;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__1491 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1492 = null;
var count__1493 = (0);
var i__1494 = (0);
while(true){
if((i__1494 < count__1493)){
var role = cljs.core._nth.call(null,chunk__1492,i__1494);
var temp__4657__auto___1548__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1548__$1)){
var spec_1549 = temp__4657__auto___1548__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1549));
} else {
}

var G__1550 = seq__1491;
var G__1551 = chunk__1492;
var G__1552 = count__1493;
var G__1553 = (i__1494 + (1));
seq__1491 = G__1550;
chunk__1492 = G__1551;
count__1493 = G__1552;
i__1494 = G__1553;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__1491);
if(temp__4657__auto____$1){
var seq__1491__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1491__$1)){
var c__4227__auto__ = cljs.core.chunk_first.call(null,seq__1491__$1);
var G__1554 = cljs.core.chunk_rest.call(null,seq__1491__$1);
var G__1555 = c__4227__auto__;
var G__1556 = cljs.core.count.call(null,c__4227__auto__);
var G__1557 = (0);
seq__1491 = G__1554;
chunk__1492 = G__1555;
count__1493 = G__1556;
i__1494 = G__1557;
continue;
} else {
var role = cljs.core.first.call(null,seq__1491__$1);
var temp__4657__auto___1558__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1558__$2)){
var spec_1559 = temp__4657__auto___1558__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1559));
} else {
}

var G__1560 = cljs.core.next.call(null,seq__1491__$1);
var G__1561 = null;
var G__1562 = (0);
var G__1563 = (0);
seq__1491 = G__1560;
chunk__1492 = G__1561;
count__1493 = G__1562;
i__1494 = G__1563;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
