// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33__i = 0, G__33__a = new Array(arguments.length -  0);
while (G__33__i < G__33__a.length) {G__33__a[G__33__i] = arguments[G__33__i + 0]; ++G__33__i;}
  args = new cljs.core.IndexedSeq(G__33__a,0,null);
} 
return G__32__delegate.call(this,args);};
G__32.cljs$lang$maxFixedArity = 0;
G__32.cljs$lang$applyTo = (function (arglist__34){
var args = cljs.core.seq(arglist__34);
return G__32__delegate(args);
});
G__32.cljs$core$IFn$_invoke$arity$variadic = G__32__delegate;
return G__32;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36__i = 0, G__36__a = new Array(arguments.length -  0);
while (G__36__i < G__36__a.length) {G__36__a[G__36__i] = arguments[G__36__i + 0]; ++G__36__i;}
  args = new cljs.core.IndexedSeq(G__36__a,0,null);
} 
return G__35__delegate.call(this,args);};
G__35.cljs$lang$maxFixedArity = 0;
G__35.cljs$lang$applyTo = (function (arglist__37){
var args = cljs.core.seq(arglist__37);
return G__35__delegate(args);
});
G__35.cljs$core$IFn$_invoke$arity$variadic = G__35__delegate;
return G__35;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map
