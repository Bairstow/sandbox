// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__4522){
var map__4523 = p__4522;
var map__4523__$1 = ((((!((map__4523 == null)))?((((map__4523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4523):map__4523);
var m = map__4523__$1;
var n = cljs.core.get.call(null,map__4523__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__4523__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__4525_4547 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__4526_4548 = null;
var count__4527_4549 = (0);
var i__4528_4550 = (0);
while(true){
if((i__4528_4550 < count__4527_4549)){
var f_4551 = cljs.core._nth.call(null,chunk__4526_4548,i__4528_4550);
cljs.core.println.call(null,"  ",f_4551);

var G__4552 = seq__4525_4547;
var G__4553 = chunk__4526_4548;
var G__4554 = count__4527_4549;
var G__4555 = (i__4528_4550 + (1));
seq__4525_4547 = G__4552;
chunk__4526_4548 = G__4553;
count__4527_4549 = G__4554;
i__4528_4550 = G__4555;
continue;
} else {
var temp__4657__auto___4556 = cljs.core.seq.call(null,seq__4525_4547);
if(temp__4657__auto___4556){
var seq__4525_4557__$1 = temp__4657__auto___4556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4525_4557__$1)){
var c__4227__auto___4558 = cljs.core.chunk_first.call(null,seq__4525_4557__$1);
var G__4559 = cljs.core.chunk_rest.call(null,seq__4525_4557__$1);
var G__4560 = c__4227__auto___4558;
var G__4561 = cljs.core.count.call(null,c__4227__auto___4558);
var G__4562 = (0);
seq__4525_4547 = G__4559;
chunk__4526_4548 = G__4560;
count__4527_4549 = G__4561;
i__4528_4550 = G__4562;
continue;
} else {
var f_4563 = cljs.core.first.call(null,seq__4525_4557__$1);
cljs.core.println.call(null,"  ",f_4563);

var G__4564 = cljs.core.next.call(null,seq__4525_4557__$1);
var G__4565 = null;
var G__4566 = (0);
var G__4567 = (0);
seq__4525_4547 = G__4564;
chunk__4526_4548 = G__4565;
count__4527_4549 = G__4566;
i__4528_4550 = G__4567;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_4568 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3832__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3832__auto__)){
return or__3832__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_4568);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_4568)))?cljs.core.second.call(null,arglists_4568):arglists_4568));
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
var seq__4529_4569 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__4530_4570 = null;
var count__4531_4571 = (0);
var i__4532_4572 = (0);
while(true){
if((i__4532_4572 < count__4531_4571)){
var vec__4533_4573 = cljs.core._nth.call(null,chunk__4530_4570,i__4532_4572);
var name_4574 = cljs.core.nth.call(null,vec__4533_4573,(0),null);
var map__4536_4575 = cljs.core.nth.call(null,vec__4533_4573,(1),null);
var map__4536_4576__$1 = ((((!((map__4536_4575 == null)))?((((map__4536_4575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4536_4575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4536_4575):map__4536_4575);
var doc_4577 = cljs.core.get.call(null,map__4536_4576__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_4578 = cljs.core.get.call(null,map__4536_4576__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_4574);

cljs.core.println.call(null," ",arglists_4578);

if(cljs.core.truth_(doc_4577)){
cljs.core.println.call(null," ",doc_4577);
} else {
}

var G__4579 = seq__4529_4569;
var G__4580 = chunk__4530_4570;
var G__4581 = count__4531_4571;
var G__4582 = (i__4532_4572 + (1));
seq__4529_4569 = G__4579;
chunk__4530_4570 = G__4580;
count__4531_4571 = G__4581;
i__4532_4572 = G__4582;
continue;
} else {
var temp__4657__auto___4583 = cljs.core.seq.call(null,seq__4529_4569);
if(temp__4657__auto___4583){
var seq__4529_4584__$1 = temp__4657__auto___4583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4529_4584__$1)){
var c__4227__auto___4585 = cljs.core.chunk_first.call(null,seq__4529_4584__$1);
var G__4586 = cljs.core.chunk_rest.call(null,seq__4529_4584__$1);
var G__4587 = c__4227__auto___4585;
var G__4588 = cljs.core.count.call(null,c__4227__auto___4585);
var G__4589 = (0);
seq__4529_4569 = G__4586;
chunk__4530_4570 = G__4587;
count__4531_4571 = G__4588;
i__4532_4572 = G__4589;
continue;
} else {
var vec__4538_4590 = cljs.core.first.call(null,seq__4529_4584__$1);
var name_4591 = cljs.core.nth.call(null,vec__4538_4590,(0),null);
var map__4541_4592 = cljs.core.nth.call(null,vec__4538_4590,(1),null);
var map__4541_4593__$1 = ((((!((map__4541_4592 == null)))?((((map__4541_4592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4541_4592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4541_4592):map__4541_4592);
var doc_4594 = cljs.core.get.call(null,map__4541_4593__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_4595 = cljs.core.get.call(null,map__4541_4593__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_4591);

cljs.core.println.call(null," ",arglists_4595);

if(cljs.core.truth_(doc_4594)){
cljs.core.println.call(null," ",doc_4594);
} else {
}

var G__4596 = cljs.core.next.call(null,seq__4529_4584__$1);
var G__4597 = null;
var G__4598 = (0);
var G__4599 = (0);
seq__4529_4569 = G__4596;
chunk__4530_4570 = G__4597;
count__4531_4571 = G__4598;
i__4532_4572 = G__4599;
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

var seq__4543 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__4544 = null;
var count__4545 = (0);
var i__4546 = (0);
while(true){
if((i__4546 < count__4545)){
var role = cljs.core._nth.call(null,chunk__4544,i__4546);
var temp__4657__auto___4600__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___4600__$1)){
var spec_4601 = temp__4657__auto___4600__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_4601));
} else {
}

var G__4602 = seq__4543;
var G__4603 = chunk__4544;
var G__4604 = count__4545;
var G__4605 = (i__4546 + (1));
seq__4543 = G__4602;
chunk__4544 = G__4603;
count__4545 = G__4604;
i__4546 = G__4605;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__4543);
if(temp__4657__auto____$1){
var seq__4543__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4543__$1)){
var c__4227__auto__ = cljs.core.chunk_first.call(null,seq__4543__$1);
var G__4606 = cljs.core.chunk_rest.call(null,seq__4543__$1);
var G__4607 = c__4227__auto__;
var G__4608 = cljs.core.count.call(null,c__4227__auto__);
var G__4609 = (0);
seq__4543 = G__4606;
chunk__4544 = G__4607;
count__4545 = G__4608;
i__4546 = G__4609;
continue;
} else {
var role = cljs.core.first.call(null,seq__4543__$1);
var temp__4657__auto___4610__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___4610__$2)){
var spec_4611 = temp__4657__auto___4610__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_4611));
} else {
}

var G__4612 = cljs.core.next.call(null,seq__4543__$1);
var G__4613 = null;
var G__4614 = (0);
var G__4615 = (0);
seq__4543 = G__4612;
chunk__4544 = G__4613;
count__4545 = G__4614;
i__4546 = G__4615;
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
