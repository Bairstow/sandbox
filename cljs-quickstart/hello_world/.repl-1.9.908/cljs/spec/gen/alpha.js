// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4069__auto__,writer__4070__auto__,opt__4071__auto__){
return cljs.core._write.call(null,writer__4070__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3727 = arguments.length;
var i__4406__auto___3728 = (0);
while(true){
if((i__4406__auto___3728 < len__4405__auto___3727)){
args__4408__auto__.push((arguments[i__4406__auto___3728]));

var G__3729 = (i__4406__auto___3728 + (1));
i__4406__auto___3728 = G__3729;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq3726){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3726));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3731 = arguments.length;
var i__4406__auto___3732 = (0);
while(true){
if((i__4406__auto___3732 < len__4405__auto___3731)){
args__4408__auto__.push((arguments[i__4406__auto___3732]));

var G__3733 = (i__4406__auto___3732 + (1));
i__4406__auto___3732 = G__3733;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq3730){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3730));
});

var g_QMARK__3734 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_3735 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__3734){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__3734))
,null));
var mkg_3736 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__3734,g_3735){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__3734,g_3735))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__3734,g_3735,mkg_3736){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__3734).call(null,x);
});})(g_QMARK__3734,g_3735,mkg_3736))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__3734,g_3735,mkg_3736){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_3736).call(null,gfn);
});})(g_QMARK__3734,g_3735,mkg_3736))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__3734,g_3735,mkg_3736){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_3735).call(null,generator);
});})(g_QMARK__3734,g_3735,mkg_3736))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__7133__auto___3756 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__7133__auto___3756){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3757 = arguments.length;
var i__4406__auto___3758 = (0);
while(true){
if((i__4406__auto___3758 < len__4405__auto___3757)){
args__4408__auto__.push((arguments[i__4406__auto___3758]));

var G__3759 = (i__4406__auto___3758 + (1));
i__4406__auto___3758 = G__3759;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3756))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3756){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3756),args);
});})(g__7133__auto___3756))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__7133__auto___3756){
return (function (seq3737){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3737));
});})(g__7133__auto___3756))
;


var g__7133__auto___3760 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__7133__auto___3760){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3761 = arguments.length;
var i__4406__auto___3762 = (0);
while(true){
if((i__4406__auto___3762 < len__4405__auto___3761)){
args__4408__auto__.push((arguments[i__4406__auto___3762]));

var G__3763 = (i__4406__auto___3762 + (1));
i__4406__auto___3762 = G__3763;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3760))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3760){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3760),args);
});})(g__7133__auto___3760))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__7133__auto___3760){
return (function (seq3738){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3738));
});})(g__7133__auto___3760))
;


var g__7133__auto___3764 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__7133__auto___3764){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3765 = arguments.length;
var i__4406__auto___3766 = (0);
while(true){
if((i__4406__auto___3766 < len__4405__auto___3765)){
args__4408__auto__.push((arguments[i__4406__auto___3766]));

var G__3767 = (i__4406__auto___3766 + (1));
i__4406__auto___3766 = G__3767;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3764))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3764){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3764),args);
});})(g__7133__auto___3764))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__7133__auto___3764){
return (function (seq3739){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3739));
});})(g__7133__auto___3764))
;


var g__7133__auto___3768 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__7133__auto___3768){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3769 = arguments.length;
var i__4406__auto___3770 = (0);
while(true){
if((i__4406__auto___3770 < len__4405__auto___3769)){
args__4408__auto__.push((arguments[i__4406__auto___3770]));

var G__3771 = (i__4406__auto___3770 + (1));
i__4406__auto___3770 = G__3771;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3768))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3768){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3768),args);
});})(g__7133__auto___3768))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__7133__auto___3768){
return (function (seq3740){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3740));
});})(g__7133__auto___3768))
;


var g__7133__auto___3772 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__7133__auto___3772){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3773 = arguments.length;
var i__4406__auto___3774 = (0);
while(true){
if((i__4406__auto___3774 < len__4405__auto___3773)){
args__4408__auto__.push((arguments[i__4406__auto___3774]));

var G__3775 = (i__4406__auto___3774 + (1));
i__4406__auto___3774 = G__3775;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3772))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3772){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3772),args);
});})(g__7133__auto___3772))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__7133__auto___3772){
return (function (seq3741){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3741));
});})(g__7133__auto___3772))
;


var g__7133__auto___3776 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__7133__auto___3776){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3777 = arguments.length;
var i__4406__auto___3778 = (0);
while(true){
if((i__4406__auto___3778 < len__4405__auto___3777)){
args__4408__auto__.push((arguments[i__4406__auto___3778]));

var G__3779 = (i__4406__auto___3778 + (1));
i__4406__auto___3778 = G__3779;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3776))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3776){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3776),args);
});})(g__7133__auto___3776))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__7133__auto___3776){
return (function (seq3742){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3742));
});})(g__7133__auto___3776))
;


var g__7133__auto___3780 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__7133__auto___3780){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3781 = arguments.length;
var i__4406__auto___3782 = (0);
while(true){
if((i__4406__auto___3782 < len__4405__auto___3781)){
args__4408__auto__.push((arguments[i__4406__auto___3782]));

var G__3783 = (i__4406__auto___3782 + (1));
i__4406__auto___3782 = G__3783;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3780))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3780){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3780),args);
});})(g__7133__auto___3780))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__7133__auto___3780){
return (function (seq3743){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3743));
});})(g__7133__auto___3780))
;


var g__7133__auto___3784 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__7133__auto___3784){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3785 = arguments.length;
var i__4406__auto___3786 = (0);
while(true){
if((i__4406__auto___3786 < len__4405__auto___3785)){
args__4408__auto__.push((arguments[i__4406__auto___3786]));

var G__3787 = (i__4406__auto___3786 + (1));
i__4406__auto___3786 = G__3787;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3784))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3784){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3784),args);
});})(g__7133__auto___3784))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__7133__auto___3784){
return (function (seq3744){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3744));
});})(g__7133__auto___3784))
;


var g__7133__auto___3788 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__7133__auto___3788){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3789 = arguments.length;
var i__4406__auto___3790 = (0);
while(true){
if((i__4406__auto___3790 < len__4405__auto___3789)){
args__4408__auto__.push((arguments[i__4406__auto___3790]));

var G__3791 = (i__4406__auto___3790 + (1));
i__4406__auto___3790 = G__3791;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3788))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3788){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3788),args);
});})(g__7133__auto___3788))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__7133__auto___3788){
return (function (seq3745){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3745));
});})(g__7133__auto___3788))
;


var g__7133__auto___3792 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__7133__auto___3792){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3793 = arguments.length;
var i__4406__auto___3794 = (0);
while(true){
if((i__4406__auto___3794 < len__4405__auto___3793)){
args__4408__auto__.push((arguments[i__4406__auto___3794]));

var G__3795 = (i__4406__auto___3794 + (1));
i__4406__auto___3794 = G__3795;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3792))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3792){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3792),args);
});})(g__7133__auto___3792))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__7133__auto___3792){
return (function (seq3746){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3746));
});})(g__7133__auto___3792))
;


var g__7133__auto___3796 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__7133__auto___3796){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3797 = arguments.length;
var i__4406__auto___3798 = (0);
while(true){
if((i__4406__auto___3798 < len__4405__auto___3797)){
args__4408__auto__.push((arguments[i__4406__auto___3798]));

var G__3799 = (i__4406__auto___3798 + (1));
i__4406__auto___3798 = G__3799;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3796))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3796){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3796),args);
});})(g__7133__auto___3796))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__7133__auto___3796){
return (function (seq3747){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3747));
});})(g__7133__auto___3796))
;


var g__7133__auto___3800 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__7133__auto___3800){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3801 = arguments.length;
var i__4406__auto___3802 = (0);
while(true){
if((i__4406__auto___3802 < len__4405__auto___3801)){
args__4408__auto__.push((arguments[i__4406__auto___3802]));

var G__3803 = (i__4406__auto___3802 + (1));
i__4406__auto___3802 = G__3803;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3800))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3800){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3800),args);
});})(g__7133__auto___3800))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__7133__auto___3800){
return (function (seq3748){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3748));
});})(g__7133__auto___3800))
;


var g__7133__auto___3804 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__7133__auto___3804){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3805 = arguments.length;
var i__4406__auto___3806 = (0);
while(true){
if((i__4406__auto___3806 < len__4405__auto___3805)){
args__4408__auto__.push((arguments[i__4406__auto___3806]));

var G__3807 = (i__4406__auto___3806 + (1));
i__4406__auto___3806 = G__3807;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3804))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3804){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3804),args);
});})(g__7133__auto___3804))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__7133__auto___3804){
return (function (seq3749){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3749));
});})(g__7133__auto___3804))
;


var g__7133__auto___3808 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__7133__auto___3808){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3809 = arguments.length;
var i__4406__auto___3810 = (0);
while(true){
if((i__4406__auto___3810 < len__4405__auto___3809)){
args__4408__auto__.push((arguments[i__4406__auto___3810]));

var G__3811 = (i__4406__auto___3810 + (1));
i__4406__auto___3810 = G__3811;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3808))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3808){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3808),args);
});})(g__7133__auto___3808))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__7133__auto___3808){
return (function (seq3750){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3750));
});})(g__7133__auto___3808))
;


var g__7133__auto___3812 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__7133__auto___3812){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3813 = arguments.length;
var i__4406__auto___3814 = (0);
while(true){
if((i__4406__auto___3814 < len__4405__auto___3813)){
args__4408__auto__.push((arguments[i__4406__auto___3814]));

var G__3815 = (i__4406__auto___3814 + (1));
i__4406__auto___3814 = G__3815;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3812))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3812){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3812),args);
});})(g__7133__auto___3812))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__7133__auto___3812){
return (function (seq3751){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3751));
});})(g__7133__auto___3812))
;


var g__7133__auto___3816 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__7133__auto___3816){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3817 = arguments.length;
var i__4406__auto___3818 = (0);
while(true){
if((i__4406__auto___3818 < len__4405__auto___3817)){
args__4408__auto__.push((arguments[i__4406__auto___3818]));

var G__3819 = (i__4406__auto___3818 + (1));
i__4406__auto___3818 = G__3819;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3816))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3816){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3816),args);
});})(g__7133__auto___3816))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__7133__auto___3816){
return (function (seq3752){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3752));
});})(g__7133__auto___3816))
;


var g__7133__auto___3820 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__7133__auto___3820){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3821 = arguments.length;
var i__4406__auto___3822 = (0);
while(true){
if((i__4406__auto___3822 < len__4405__auto___3821)){
args__4408__auto__.push((arguments[i__4406__auto___3822]));

var G__3823 = (i__4406__auto___3822 + (1));
i__4406__auto___3822 = G__3823;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3820))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3820){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3820),args);
});})(g__7133__auto___3820))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__7133__auto___3820){
return (function (seq3753){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3753));
});})(g__7133__auto___3820))
;


var g__7133__auto___3824 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__7133__auto___3824){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3825 = arguments.length;
var i__4406__auto___3826 = (0);
while(true){
if((i__4406__auto___3826 < len__4405__auto___3825)){
args__4408__auto__.push((arguments[i__4406__auto___3826]));

var G__3827 = (i__4406__auto___3826 + (1));
i__4406__auto___3826 = G__3827;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3824))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3824){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3824),args);
});})(g__7133__auto___3824))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__7133__auto___3824){
return (function (seq3754){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3754));
});})(g__7133__auto___3824))
;


var g__7133__auto___3828 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__7133__auto___3828){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3829 = arguments.length;
var i__4406__auto___3830 = (0);
while(true){
if((i__4406__auto___3830 < len__4405__auto___3829)){
args__4408__auto__.push((arguments[i__4406__auto___3830]));

var G__3831 = (i__4406__auto___3830 + (1));
i__4406__auto___3830 = G__3831;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___3828))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___3828){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___3828),args);
});})(g__7133__auto___3828))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__7133__auto___3828){
return (function (seq3755){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3755));
});})(g__7133__auto___3828))
;

var g__7138__auto___3853 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__7138__auto___3853){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3854 = arguments.length;
var i__4406__auto___3855 = (0);
while(true){
if((i__4406__auto___3855 < len__4405__auto___3854)){
args__4408__auto__.push((arguments[i__4406__auto___3855]));

var G__3856 = (i__4406__auto___3855 + (1));
i__4406__auto___3855 = G__3856;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3853))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3853){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3853);
});})(g__7138__auto___3853))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__7138__auto___3853){
return (function (seq3832){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3832));
});})(g__7138__auto___3853))
;


var g__7138__auto___3857 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__7138__auto___3857){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3858 = arguments.length;
var i__4406__auto___3859 = (0);
while(true){
if((i__4406__auto___3859 < len__4405__auto___3858)){
args__4408__auto__.push((arguments[i__4406__auto___3859]));

var G__3860 = (i__4406__auto___3859 + (1));
i__4406__auto___3859 = G__3860;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3857))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3857){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3857);
});})(g__7138__auto___3857))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__7138__auto___3857){
return (function (seq3833){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3833));
});})(g__7138__auto___3857))
;


var g__7138__auto___3861 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__7138__auto___3861){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3862 = arguments.length;
var i__4406__auto___3863 = (0);
while(true){
if((i__4406__auto___3863 < len__4405__auto___3862)){
args__4408__auto__.push((arguments[i__4406__auto___3863]));

var G__3864 = (i__4406__auto___3863 + (1));
i__4406__auto___3863 = G__3864;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3861))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3861){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3861);
});})(g__7138__auto___3861))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__7138__auto___3861){
return (function (seq3834){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3834));
});})(g__7138__auto___3861))
;


var g__7138__auto___3865 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__7138__auto___3865){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3866 = arguments.length;
var i__4406__auto___3867 = (0);
while(true){
if((i__4406__auto___3867 < len__4405__auto___3866)){
args__4408__auto__.push((arguments[i__4406__auto___3867]));

var G__3868 = (i__4406__auto___3867 + (1));
i__4406__auto___3867 = G__3868;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3865))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3865){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3865);
});})(g__7138__auto___3865))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__7138__auto___3865){
return (function (seq3835){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3835));
});})(g__7138__auto___3865))
;


var g__7138__auto___3869 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__7138__auto___3869){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3870 = arguments.length;
var i__4406__auto___3871 = (0);
while(true){
if((i__4406__auto___3871 < len__4405__auto___3870)){
args__4408__auto__.push((arguments[i__4406__auto___3871]));

var G__3872 = (i__4406__auto___3871 + (1));
i__4406__auto___3871 = G__3872;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3869))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3869){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3869);
});})(g__7138__auto___3869))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__7138__auto___3869){
return (function (seq3836){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3836));
});})(g__7138__auto___3869))
;


var g__7138__auto___3873 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__7138__auto___3873){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3874 = arguments.length;
var i__4406__auto___3875 = (0);
while(true){
if((i__4406__auto___3875 < len__4405__auto___3874)){
args__4408__auto__.push((arguments[i__4406__auto___3875]));

var G__3876 = (i__4406__auto___3875 + (1));
i__4406__auto___3875 = G__3876;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3873))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3873){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3873);
});})(g__7138__auto___3873))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__7138__auto___3873){
return (function (seq3837){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3837));
});})(g__7138__auto___3873))
;


var g__7138__auto___3877 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__7138__auto___3877){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3878 = arguments.length;
var i__4406__auto___3879 = (0);
while(true){
if((i__4406__auto___3879 < len__4405__auto___3878)){
args__4408__auto__.push((arguments[i__4406__auto___3879]));

var G__3880 = (i__4406__auto___3879 + (1));
i__4406__auto___3879 = G__3880;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3877))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3877){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3877);
});})(g__7138__auto___3877))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__7138__auto___3877){
return (function (seq3838){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3838));
});})(g__7138__auto___3877))
;


var g__7138__auto___3881 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__7138__auto___3881){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3882 = arguments.length;
var i__4406__auto___3883 = (0);
while(true){
if((i__4406__auto___3883 < len__4405__auto___3882)){
args__4408__auto__.push((arguments[i__4406__auto___3883]));

var G__3884 = (i__4406__auto___3883 + (1));
i__4406__auto___3883 = G__3884;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3881))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3881){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3881);
});})(g__7138__auto___3881))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__7138__auto___3881){
return (function (seq3839){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3839));
});})(g__7138__auto___3881))
;


var g__7138__auto___3885 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__7138__auto___3885){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3886 = arguments.length;
var i__4406__auto___3887 = (0);
while(true){
if((i__4406__auto___3887 < len__4405__auto___3886)){
args__4408__auto__.push((arguments[i__4406__auto___3887]));

var G__3888 = (i__4406__auto___3887 + (1));
i__4406__auto___3887 = G__3888;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3885))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3885){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3885);
});})(g__7138__auto___3885))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__7138__auto___3885){
return (function (seq3840){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3840));
});})(g__7138__auto___3885))
;


var g__7138__auto___3889 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__7138__auto___3889){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3890 = arguments.length;
var i__4406__auto___3891 = (0);
while(true){
if((i__4406__auto___3891 < len__4405__auto___3890)){
args__4408__auto__.push((arguments[i__4406__auto___3891]));

var G__3892 = (i__4406__auto___3891 + (1));
i__4406__auto___3891 = G__3892;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3889))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3889){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3889);
});})(g__7138__auto___3889))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__7138__auto___3889){
return (function (seq3841){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3841));
});})(g__7138__auto___3889))
;


var g__7138__auto___3893 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__7138__auto___3893){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3894 = arguments.length;
var i__4406__auto___3895 = (0);
while(true){
if((i__4406__auto___3895 < len__4405__auto___3894)){
args__4408__auto__.push((arguments[i__4406__auto___3895]));

var G__3896 = (i__4406__auto___3895 + (1));
i__4406__auto___3895 = G__3896;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3893))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3893){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3893);
});})(g__7138__auto___3893))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__7138__auto___3893){
return (function (seq3842){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3842));
});})(g__7138__auto___3893))
;


var g__7138__auto___3897 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__7138__auto___3897){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3898 = arguments.length;
var i__4406__auto___3899 = (0);
while(true){
if((i__4406__auto___3899 < len__4405__auto___3898)){
args__4408__auto__.push((arguments[i__4406__auto___3899]));

var G__3900 = (i__4406__auto___3899 + (1));
i__4406__auto___3899 = G__3900;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3897))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3897){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3897);
});})(g__7138__auto___3897))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__7138__auto___3897){
return (function (seq3843){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3843));
});})(g__7138__auto___3897))
;


var g__7138__auto___3901 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__7138__auto___3901){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3902 = arguments.length;
var i__4406__auto___3903 = (0);
while(true){
if((i__4406__auto___3903 < len__4405__auto___3902)){
args__4408__auto__.push((arguments[i__4406__auto___3903]));

var G__3904 = (i__4406__auto___3903 + (1));
i__4406__auto___3903 = G__3904;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3901))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3901){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3901);
});})(g__7138__auto___3901))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__7138__auto___3901){
return (function (seq3844){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3844));
});})(g__7138__auto___3901))
;


var g__7138__auto___3905 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__7138__auto___3905){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3906 = arguments.length;
var i__4406__auto___3907 = (0);
while(true){
if((i__4406__auto___3907 < len__4405__auto___3906)){
args__4408__auto__.push((arguments[i__4406__auto___3907]));

var G__3908 = (i__4406__auto___3907 + (1));
i__4406__auto___3907 = G__3908;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3905))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3905){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3905);
});})(g__7138__auto___3905))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__7138__auto___3905){
return (function (seq3845){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3845));
});})(g__7138__auto___3905))
;


var g__7138__auto___3909 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__7138__auto___3909){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3910 = arguments.length;
var i__4406__auto___3911 = (0);
while(true){
if((i__4406__auto___3911 < len__4405__auto___3910)){
args__4408__auto__.push((arguments[i__4406__auto___3911]));

var G__3912 = (i__4406__auto___3911 + (1));
i__4406__auto___3911 = G__3912;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3909))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3909){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3909);
});})(g__7138__auto___3909))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__7138__auto___3909){
return (function (seq3846){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3846));
});})(g__7138__auto___3909))
;


var g__7138__auto___3913 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__7138__auto___3913){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3914 = arguments.length;
var i__4406__auto___3915 = (0);
while(true){
if((i__4406__auto___3915 < len__4405__auto___3914)){
args__4408__auto__.push((arguments[i__4406__auto___3915]));

var G__3916 = (i__4406__auto___3915 + (1));
i__4406__auto___3915 = G__3916;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3913))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3913){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3913);
});})(g__7138__auto___3913))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__7138__auto___3913){
return (function (seq3847){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3847));
});})(g__7138__auto___3913))
;


var g__7138__auto___3917 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__7138__auto___3917){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3918 = arguments.length;
var i__4406__auto___3919 = (0);
while(true){
if((i__4406__auto___3919 < len__4405__auto___3918)){
args__4408__auto__.push((arguments[i__4406__auto___3919]));

var G__3920 = (i__4406__auto___3919 + (1));
i__4406__auto___3919 = G__3920;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3917))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3917){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3917);
});})(g__7138__auto___3917))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__7138__auto___3917){
return (function (seq3848){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3848));
});})(g__7138__auto___3917))
;


var g__7138__auto___3921 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__7138__auto___3921){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3922 = arguments.length;
var i__4406__auto___3923 = (0);
while(true){
if((i__4406__auto___3923 < len__4405__auto___3922)){
args__4408__auto__.push((arguments[i__4406__auto___3923]));

var G__3924 = (i__4406__auto___3923 + (1));
i__4406__auto___3923 = G__3924;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3921))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3921){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3921);
});})(g__7138__auto___3921))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__7138__auto___3921){
return (function (seq3849){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3849));
});})(g__7138__auto___3921))
;


var g__7138__auto___3925 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__7138__auto___3925){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3926 = arguments.length;
var i__4406__auto___3927 = (0);
while(true){
if((i__4406__auto___3927 < len__4405__auto___3926)){
args__4408__auto__.push((arguments[i__4406__auto___3927]));

var G__3928 = (i__4406__auto___3927 + (1));
i__4406__auto___3927 = G__3928;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3925))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3925){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3925);
});})(g__7138__auto___3925))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__7138__auto___3925){
return (function (seq3850){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3850));
});})(g__7138__auto___3925))
;


var g__7138__auto___3929 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__7138__auto___3929){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3930 = arguments.length;
var i__4406__auto___3931 = (0);
while(true){
if((i__4406__auto___3931 < len__4405__auto___3930)){
args__4408__auto__.push((arguments[i__4406__auto___3931]));

var G__3932 = (i__4406__auto___3931 + (1));
i__4406__auto___3931 = G__3932;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3929))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3929){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3929);
});})(g__7138__auto___3929))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__7138__auto___3929){
return (function (seq3851){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3851));
});})(g__7138__auto___3929))
;


var g__7138__auto___3933 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__7138__auto___3933){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3934 = arguments.length;
var i__4406__auto___3935 = (0);
while(true){
if((i__4406__auto___3935 < len__4405__auto___3934)){
args__4408__auto__.push((arguments[i__4406__auto___3935]));

var G__3936 = (i__4406__auto___3935 + (1));
i__4406__auto___3935 = G__3936;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___3933))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___3933){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___3933);
});})(g__7138__auto___3933))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__7138__auto___3933){
return (function (seq3852){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3852));
});})(g__7138__auto___3933))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4408__auto__ = [];
var len__4405__auto___3939 = arguments.length;
var i__4406__auto___3940 = (0);
while(true){
if((i__4406__auto___3940 < len__4405__auto___3939)){
args__4408__auto__.push((arguments[i__4406__auto___3940]));

var G__3941 = (i__4406__auto___3940 + (1));
i__4406__auto___3940 = G__3941;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__3937_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__3937_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq3938){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3938));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__3942_SHARP_){
return (new Date(p1__3942_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});
