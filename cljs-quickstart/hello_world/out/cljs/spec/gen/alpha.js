// Compiled by ClojureScript 1.9.908 {:target :nodejs}
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
var len__4405__auto___2142 = arguments.length;
var i__4406__auto___2143 = (0);
while(true){
if((i__4406__auto___2143 < len__4405__auto___2142)){
args__4408__auto__.push((arguments[i__4406__auto___2143]));

var G__2144 = (i__4406__auto___2143 + (1));
i__4406__auto___2143 = G__2144;
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

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq2141){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2141));
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
var len__4405__auto___2146 = arguments.length;
var i__4406__auto___2147 = (0);
while(true){
if((i__4406__auto___2147 < len__4405__auto___2146)){
args__4408__auto__.push((arguments[i__4406__auto___2147]));

var G__2148 = (i__4406__auto___2147 + (1));
i__4406__auto___2147 = G__2148;
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

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq2145){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2145));
});

var g_QMARK__2149 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_2150 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__2149){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__2149))
,null));
var mkg_2151 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__2149,g_2150){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__2149,g_2150))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__2149,g_2150,mkg_2151){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__2149).call(null,x);
});})(g_QMARK__2149,g_2150,mkg_2151))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__2149,g_2150,mkg_2151){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_2151).call(null,gfn);
});})(g_QMARK__2149,g_2150,mkg_2151))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__2149,g_2150,mkg_2151){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_2150).call(null,generator);
});})(g_QMARK__2149,g_2150,mkg_2151))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__7133__auto___2171 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__7133__auto___2171){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2172 = arguments.length;
var i__4406__auto___2173 = (0);
while(true){
if((i__4406__auto___2173 < len__4405__auto___2172)){
args__4408__auto__.push((arguments[i__4406__auto___2173]));

var G__2174 = (i__4406__auto___2173 + (1));
i__4406__auto___2173 = G__2174;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2171))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2171){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2171),args);
});})(g__7133__auto___2171))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__7133__auto___2171){
return (function (seq2152){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2152));
});})(g__7133__auto___2171))
;


var g__7133__auto___2175 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__7133__auto___2175){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2176 = arguments.length;
var i__4406__auto___2177 = (0);
while(true){
if((i__4406__auto___2177 < len__4405__auto___2176)){
args__4408__auto__.push((arguments[i__4406__auto___2177]));

var G__2178 = (i__4406__auto___2177 + (1));
i__4406__auto___2177 = G__2178;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2175))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2175){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2175),args);
});})(g__7133__auto___2175))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__7133__auto___2175){
return (function (seq2153){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2153));
});})(g__7133__auto___2175))
;


var g__7133__auto___2179 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__7133__auto___2179){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2180 = arguments.length;
var i__4406__auto___2181 = (0);
while(true){
if((i__4406__auto___2181 < len__4405__auto___2180)){
args__4408__auto__.push((arguments[i__4406__auto___2181]));

var G__2182 = (i__4406__auto___2181 + (1));
i__4406__auto___2181 = G__2182;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2179))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2179){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2179),args);
});})(g__7133__auto___2179))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__7133__auto___2179){
return (function (seq2154){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2154));
});})(g__7133__auto___2179))
;


var g__7133__auto___2183 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__7133__auto___2183){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2184 = arguments.length;
var i__4406__auto___2185 = (0);
while(true){
if((i__4406__auto___2185 < len__4405__auto___2184)){
args__4408__auto__.push((arguments[i__4406__auto___2185]));

var G__2186 = (i__4406__auto___2185 + (1));
i__4406__auto___2185 = G__2186;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2183))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2183){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2183),args);
});})(g__7133__auto___2183))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__7133__auto___2183){
return (function (seq2155){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2155));
});})(g__7133__auto___2183))
;


var g__7133__auto___2187 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__7133__auto___2187){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2188 = arguments.length;
var i__4406__auto___2189 = (0);
while(true){
if((i__4406__auto___2189 < len__4405__auto___2188)){
args__4408__auto__.push((arguments[i__4406__auto___2189]));

var G__2190 = (i__4406__auto___2189 + (1));
i__4406__auto___2189 = G__2190;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2187))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2187){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2187),args);
});})(g__7133__auto___2187))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__7133__auto___2187){
return (function (seq2156){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2156));
});})(g__7133__auto___2187))
;


var g__7133__auto___2191 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__7133__auto___2191){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2192 = arguments.length;
var i__4406__auto___2193 = (0);
while(true){
if((i__4406__auto___2193 < len__4405__auto___2192)){
args__4408__auto__.push((arguments[i__4406__auto___2193]));

var G__2194 = (i__4406__auto___2193 + (1));
i__4406__auto___2193 = G__2194;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2191))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2191){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2191),args);
});})(g__7133__auto___2191))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__7133__auto___2191){
return (function (seq2157){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2157));
});})(g__7133__auto___2191))
;


var g__7133__auto___2195 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__7133__auto___2195){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2196 = arguments.length;
var i__4406__auto___2197 = (0);
while(true){
if((i__4406__auto___2197 < len__4405__auto___2196)){
args__4408__auto__.push((arguments[i__4406__auto___2197]));

var G__2198 = (i__4406__auto___2197 + (1));
i__4406__auto___2197 = G__2198;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2195))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2195){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2195),args);
});})(g__7133__auto___2195))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__7133__auto___2195){
return (function (seq2158){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2158));
});})(g__7133__auto___2195))
;


var g__7133__auto___2199 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__7133__auto___2199){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2200 = arguments.length;
var i__4406__auto___2201 = (0);
while(true){
if((i__4406__auto___2201 < len__4405__auto___2200)){
args__4408__auto__.push((arguments[i__4406__auto___2201]));

var G__2202 = (i__4406__auto___2201 + (1));
i__4406__auto___2201 = G__2202;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2199))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2199){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2199),args);
});})(g__7133__auto___2199))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__7133__auto___2199){
return (function (seq2159){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2159));
});})(g__7133__auto___2199))
;


var g__7133__auto___2203 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__7133__auto___2203){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2204 = arguments.length;
var i__4406__auto___2205 = (0);
while(true){
if((i__4406__auto___2205 < len__4405__auto___2204)){
args__4408__auto__.push((arguments[i__4406__auto___2205]));

var G__2206 = (i__4406__auto___2205 + (1));
i__4406__auto___2205 = G__2206;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2203))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2203){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2203),args);
});})(g__7133__auto___2203))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__7133__auto___2203){
return (function (seq2160){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2160));
});})(g__7133__auto___2203))
;


var g__7133__auto___2207 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__7133__auto___2207){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2208 = arguments.length;
var i__4406__auto___2209 = (0);
while(true){
if((i__4406__auto___2209 < len__4405__auto___2208)){
args__4408__auto__.push((arguments[i__4406__auto___2209]));

var G__2210 = (i__4406__auto___2209 + (1));
i__4406__auto___2209 = G__2210;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2207))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2207){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2207),args);
});})(g__7133__auto___2207))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__7133__auto___2207){
return (function (seq2161){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2161));
});})(g__7133__auto___2207))
;


var g__7133__auto___2211 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__7133__auto___2211){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2212 = arguments.length;
var i__4406__auto___2213 = (0);
while(true){
if((i__4406__auto___2213 < len__4405__auto___2212)){
args__4408__auto__.push((arguments[i__4406__auto___2213]));

var G__2214 = (i__4406__auto___2213 + (1));
i__4406__auto___2213 = G__2214;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2211))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2211){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2211),args);
});})(g__7133__auto___2211))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__7133__auto___2211){
return (function (seq2162){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2162));
});})(g__7133__auto___2211))
;


var g__7133__auto___2215 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__7133__auto___2215){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2216 = arguments.length;
var i__4406__auto___2217 = (0);
while(true){
if((i__4406__auto___2217 < len__4405__auto___2216)){
args__4408__auto__.push((arguments[i__4406__auto___2217]));

var G__2218 = (i__4406__auto___2217 + (1));
i__4406__auto___2217 = G__2218;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2215))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2215){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2215),args);
});})(g__7133__auto___2215))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__7133__auto___2215){
return (function (seq2163){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2163));
});})(g__7133__auto___2215))
;


var g__7133__auto___2219 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__7133__auto___2219){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2220 = arguments.length;
var i__4406__auto___2221 = (0);
while(true){
if((i__4406__auto___2221 < len__4405__auto___2220)){
args__4408__auto__.push((arguments[i__4406__auto___2221]));

var G__2222 = (i__4406__auto___2221 + (1));
i__4406__auto___2221 = G__2222;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2219))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2219){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2219),args);
});})(g__7133__auto___2219))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__7133__auto___2219){
return (function (seq2164){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2164));
});})(g__7133__auto___2219))
;


var g__7133__auto___2223 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__7133__auto___2223){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2224 = arguments.length;
var i__4406__auto___2225 = (0);
while(true){
if((i__4406__auto___2225 < len__4405__auto___2224)){
args__4408__auto__.push((arguments[i__4406__auto___2225]));

var G__2226 = (i__4406__auto___2225 + (1));
i__4406__auto___2225 = G__2226;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2223))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2223){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2223),args);
});})(g__7133__auto___2223))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__7133__auto___2223){
return (function (seq2165){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2165));
});})(g__7133__auto___2223))
;


var g__7133__auto___2227 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__7133__auto___2227){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2228 = arguments.length;
var i__4406__auto___2229 = (0);
while(true){
if((i__4406__auto___2229 < len__4405__auto___2228)){
args__4408__auto__.push((arguments[i__4406__auto___2229]));

var G__2230 = (i__4406__auto___2229 + (1));
i__4406__auto___2229 = G__2230;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2227))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2227){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2227),args);
});})(g__7133__auto___2227))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__7133__auto___2227){
return (function (seq2166){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2166));
});})(g__7133__auto___2227))
;


var g__7133__auto___2231 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__7133__auto___2231){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2232 = arguments.length;
var i__4406__auto___2233 = (0);
while(true){
if((i__4406__auto___2233 < len__4405__auto___2232)){
args__4408__auto__.push((arguments[i__4406__auto___2233]));

var G__2234 = (i__4406__auto___2233 + (1));
i__4406__auto___2233 = G__2234;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2231))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2231){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2231),args);
});})(g__7133__auto___2231))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__7133__auto___2231){
return (function (seq2167){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2167));
});})(g__7133__auto___2231))
;


var g__7133__auto___2235 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__7133__auto___2235){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2236 = arguments.length;
var i__4406__auto___2237 = (0);
while(true){
if((i__4406__auto___2237 < len__4405__auto___2236)){
args__4408__auto__.push((arguments[i__4406__auto___2237]));

var G__2238 = (i__4406__auto___2237 + (1));
i__4406__auto___2237 = G__2238;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2235))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2235){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2235),args);
});})(g__7133__auto___2235))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__7133__auto___2235){
return (function (seq2168){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2168));
});})(g__7133__auto___2235))
;


var g__7133__auto___2239 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__7133__auto___2239){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2240 = arguments.length;
var i__4406__auto___2241 = (0);
while(true){
if((i__4406__auto___2241 < len__4405__auto___2240)){
args__4408__auto__.push((arguments[i__4406__auto___2241]));

var G__2242 = (i__4406__auto___2241 + (1));
i__4406__auto___2241 = G__2242;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2239))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2239){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2239),args);
});})(g__7133__auto___2239))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__7133__auto___2239){
return (function (seq2169){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2169));
});})(g__7133__auto___2239))
;


var g__7133__auto___2243 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__7133__auto___2243){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2244 = arguments.length;
var i__4406__auto___2245 = (0);
while(true){
if((i__4406__auto___2245 < len__4405__auto___2244)){
args__4408__auto__.push((arguments[i__4406__auto___2245]));

var G__2246 = (i__4406__auto___2245 + (1));
i__4406__auto___2245 = G__2246;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7133__auto___2243))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7133__auto___2243){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7133__auto___2243),args);
});})(g__7133__auto___2243))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__7133__auto___2243){
return (function (seq2170){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2170));
});})(g__7133__auto___2243))
;

var g__7138__auto___2268 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__7138__auto___2268){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2269 = arguments.length;
var i__4406__auto___2270 = (0);
while(true){
if((i__4406__auto___2270 < len__4405__auto___2269)){
args__4408__auto__.push((arguments[i__4406__auto___2270]));

var G__2271 = (i__4406__auto___2270 + (1));
i__4406__auto___2270 = G__2271;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2268))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2268){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2268);
});})(g__7138__auto___2268))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__7138__auto___2268){
return (function (seq2247){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2247));
});})(g__7138__auto___2268))
;


var g__7138__auto___2272 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__7138__auto___2272){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2273 = arguments.length;
var i__4406__auto___2274 = (0);
while(true){
if((i__4406__auto___2274 < len__4405__auto___2273)){
args__4408__auto__.push((arguments[i__4406__auto___2274]));

var G__2275 = (i__4406__auto___2274 + (1));
i__4406__auto___2274 = G__2275;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2272))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2272){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2272);
});})(g__7138__auto___2272))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__7138__auto___2272){
return (function (seq2248){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2248));
});})(g__7138__auto___2272))
;


var g__7138__auto___2276 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__7138__auto___2276){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2277 = arguments.length;
var i__4406__auto___2278 = (0);
while(true){
if((i__4406__auto___2278 < len__4405__auto___2277)){
args__4408__auto__.push((arguments[i__4406__auto___2278]));

var G__2279 = (i__4406__auto___2278 + (1));
i__4406__auto___2278 = G__2279;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2276))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2276){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2276);
});})(g__7138__auto___2276))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__7138__auto___2276){
return (function (seq2249){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2249));
});})(g__7138__auto___2276))
;


var g__7138__auto___2280 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__7138__auto___2280){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2281 = arguments.length;
var i__4406__auto___2282 = (0);
while(true){
if((i__4406__auto___2282 < len__4405__auto___2281)){
args__4408__auto__.push((arguments[i__4406__auto___2282]));

var G__2283 = (i__4406__auto___2282 + (1));
i__4406__auto___2282 = G__2283;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2280))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2280){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2280);
});})(g__7138__auto___2280))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__7138__auto___2280){
return (function (seq2250){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2250));
});})(g__7138__auto___2280))
;


var g__7138__auto___2284 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__7138__auto___2284){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2285 = arguments.length;
var i__4406__auto___2286 = (0);
while(true){
if((i__4406__auto___2286 < len__4405__auto___2285)){
args__4408__auto__.push((arguments[i__4406__auto___2286]));

var G__2287 = (i__4406__auto___2286 + (1));
i__4406__auto___2286 = G__2287;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2284))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2284){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2284);
});})(g__7138__auto___2284))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__7138__auto___2284){
return (function (seq2251){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2251));
});})(g__7138__auto___2284))
;


var g__7138__auto___2288 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__7138__auto___2288){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2289 = arguments.length;
var i__4406__auto___2290 = (0);
while(true){
if((i__4406__auto___2290 < len__4405__auto___2289)){
args__4408__auto__.push((arguments[i__4406__auto___2290]));

var G__2291 = (i__4406__auto___2290 + (1));
i__4406__auto___2290 = G__2291;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2288))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2288){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2288);
});})(g__7138__auto___2288))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__7138__auto___2288){
return (function (seq2252){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2252));
});})(g__7138__auto___2288))
;


var g__7138__auto___2292 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__7138__auto___2292){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2293 = arguments.length;
var i__4406__auto___2294 = (0);
while(true){
if((i__4406__auto___2294 < len__4405__auto___2293)){
args__4408__auto__.push((arguments[i__4406__auto___2294]));

var G__2295 = (i__4406__auto___2294 + (1));
i__4406__auto___2294 = G__2295;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2292))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2292){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2292);
});})(g__7138__auto___2292))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__7138__auto___2292){
return (function (seq2253){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2253));
});})(g__7138__auto___2292))
;


var g__7138__auto___2296 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__7138__auto___2296){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2297 = arguments.length;
var i__4406__auto___2298 = (0);
while(true){
if((i__4406__auto___2298 < len__4405__auto___2297)){
args__4408__auto__.push((arguments[i__4406__auto___2298]));

var G__2299 = (i__4406__auto___2298 + (1));
i__4406__auto___2298 = G__2299;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2296))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2296){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2296);
});})(g__7138__auto___2296))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__7138__auto___2296){
return (function (seq2254){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2254));
});})(g__7138__auto___2296))
;


var g__7138__auto___2300 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__7138__auto___2300){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2301 = arguments.length;
var i__4406__auto___2302 = (0);
while(true){
if((i__4406__auto___2302 < len__4405__auto___2301)){
args__4408__auto__.push((arguments[i__4406__auto___2302]));

var G__2303 = (i__4406__auto___2302 + (1));
i__4406__auto___2302 = G__2303;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2300))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2300){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2300);
});})(g__7138__auto___2300))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__7138__auto___2300){
return (function (seq2255){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2255));
});})(g__7138__auto___2300))
;


var g__7138__auto___2304 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__7138__auto___2304){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2305 = arguments.length;
var i__4406__auto___2306 = (0);
while(true){
if((i__4406__auto___2306 < len__4405__auto___2305)){
args__4408__auto__.push((arguments[i__4406__auto___2306]));

var G__2307 = (i__4406__auto___2306 + (1));
i__4406__auto___2306 = G__2307;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2304))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2304){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2304);
});})(g__7138__auto___2304))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__7138__auto___2304){
return (function (seq2256){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2256));
});})(g__7138__auto___2304))
;


var g__7138__auto___2308 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__7138__auto___2308){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2309 = arguments.length;
var i__4406__auto___2310 = (0);
while(true){
if((i__4406__auto___2310 < len__4405__auto___2309)){
args__4408__auto__.push((arguments[i__4406__auto___2310]));

var G__2311 = (i__4406__auto___2310 + (1));
i__4406__auto___2310 = G__2311;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2308))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2308){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2308);
});})(g__7138__auto___2308))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__7138__auto___2308){
return (function (seq2257){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2257));
});})(g__7138__auto___2308))
;


var g__7138__auto___2312 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__7138__auto___2312){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2313 = arguments.length;
var i__4406__auto___2314 = (0);
while(true){
if((i__4406__auto___2314 < len__4405__auto___2313)){
args__4408__auto__.push((arguments[i__4406__auto___2314]));

var G__2315 = (i__4406__auto___2314 + (1));
i__4406__auto___2314 = G__2315;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2312))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2312){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2312);
});})(g__7138__auto___2312))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__7138__auto___2312){
return (function (seq2258){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2258));
});})(g__7138__auto___2312))
;


var g__7138__auto___2316 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__7138__auto___2316){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2317 = arguments.length;
var i__4406__auto___2318 = (0);
while(true){
if((i__4406__auto___2318 < len__4405__auto___2317)){
args__4408__auto__.push((arguments[i__4406__auto___2318]));

var G__2319 = (i__4406__auto___2318 + (1));
i__4406__auto___2318 = G__2319;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2316))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2316){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2316);
});})(g__7138__auto___2316))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__7138__auto___2316){
return (function (seq2259){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2259));
});})(g__7138__auto___2316))
;


var g__7138__auto___2320 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__7138__auto___2320){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2321 = arguments.length;
var i__4406__auto___2322 = (0);
while(true){
if((i__4406__auto___2322 < len__4405__auto___2321)){
args__4408__auto__.push((arguments[i__4406__auto___2322]));

var G__2323 = (i__4406__auto___2322 + (1));
i__4406__auto___2322 = G__2323;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2320))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2320){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2320);
});})(g__7138__auto___2320))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__7138__auto___2320){
return (function (seq2260){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2260));
});})(g__7138__auto___2320))
;


var g__7138__auto___2324 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__7138__auto___2324){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2325 = arguments.length;
var i__4406__auto___2326 = (0);
while(true){
if((i__4406__auto___2326 < len__4405__auto___2325)){
args__4408__auto__.push((arguments[i__4406__auto___2326]));

var G__2327 = (i__4406__auto___2326 + (1));
i__4406__auto___2326 = G__2327;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2324))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2324){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2324);
});})(g__7138__auto___2324))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__7138__auto___2324){
return (function (seq2261){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2261));
});})(g__7138__auto___2324))
;


var g__7138__auto___2328 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__7138__auto___2328){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2329 = arguments.length;
var i__4406__auto___2330 = (0);
while(true){
if((i__4406__auto___2330 < len__4405__auto___2329)){
args__4408__auto__.push((arguments[i__4406__auto___2330]));

var G__2331 = (i__4406__auto___2330 + (1));
i__4406__auto___2330 = G__2331;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2328))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2328){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2328);
});})(g__7138__auto___2328))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__7138__auto___2328){
return (function (seq2262){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2262));
});})(g__7138__auto___2328))
;


var g__7138__auto___2332 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__7138__auto___2332){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2333 = arguments.length;
var i__4406__auto___2334 = (0);
while(true){
if((i__4406__auto___2334 < len__4405__auto___2333)){
args__4408__auto__.push((arguments[i__4406__auto___2334]));

var G__2335 = (i__4406__auto___2334 + (1));
i__4406__auto___2334 = G__2335;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2332))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2332){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2332);
});})(g__7138__auto___2332))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__7138__auto___2332){
return (function (seq2263){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2263));
});})(g__7138__auto___2332))
;


var g__7138__auto___2336 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__7138__auto___2336){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2337 = arguments.length;
var i__4406__auto___2338 = (0);
while(true){
if((i__4406__auto___2338 < len__4405__auto___2337)){
args__4408__auto__.push((arguments[i__4406__auto___2338]));

var G__2339 = (i__4406__auto___2338 + (1));
i__4406__auto___2338 = G__2339;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2336))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2336){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2336);
});})(g__7138__auto___2336))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__7138__auto___2336){
return (function (seq2264){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2264));
});})(g__7138__auto___2336))
;


var g__7138__auto___2340 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__7138__auto___2340){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2341 = arguments.length;
var i__4406__auto___2342 = (0);
while(true){
if((i__4406__auto___2342 < len__4405__auto___2341)){
args__4408__auto__.push((arguments[i__4406__auto___2342]));

var G__2343 = (i__4406__auto___2342 + (1));
i__4406__auto___2342 = G__2343;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2340))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2340){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2340);
});})(g__7138__auto___2340))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__7138__auto___2340){
return (function (seq2265){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2265));
});})(g__7138__auto___2340))
;


var g__7138__auto___2344 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__7138__auto___2344){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2345 = arguments.length;
var i__4406__auto___2346 = (0);
while(true){
if((i__4406__auto___2346 < len__4405__auto___2345)){
args__4408__auto__.push((arguments[i__4406__auto___2346]));

var G__2347 = (i__4406__auto___2346 + (1));
i__4406__auto___2346 = G__2347;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2344))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2344){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2344);
});})(g__7138__auto___2344))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__7138__auto___2344){
return (function (seq2266){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2266));
});})(g__7138__auto___2344))
;


var g__7138__auto___2348 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__7138__auto___2348){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2349 = arguments.length;
var i__4406__auto___2350 = (0);
while(true){
if((i__4406__auto___2350 < len__4405__auto___2349)){
args__4408__auto__.push((arguments[i__4406__auto___2350]));

var G__2351 = (i__4406__auto___2350 + (1));
i__4406__auto___2350 = G__2351;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});})(g__7138__auto___2348))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7138__auto___2348){
return (function (args){
return cljs.core.deref.call(null,g__7138__auto___2348);
});})(g__7138__auto___2348))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__7138__auto___2348){
return (function (seq2267){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2267));
});})(g__7138__auto___2348))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4408__auto__ = [];
var len__4405__auto___2354 = arguments.length;
var i__4406__auto___2355 = (0);
while(true){
if((i__4406__auto___2355 < len__4405__auto___2354)){
args__4408__auto__.push((arguments[i__4406__auto___2355]));

var G__2356 = (i__4406__auto___2355 + (1));
i__4406__auto___2355 = G__2356;
continue;
} else {
}
break;
}

var argseq__4409__auto__ = ((((0) < args__4408__auto__.length))?(new cljs.core.IndexedSeq(args__4408__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4409__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__2352_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__2352_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq2353){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2353));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__2357_SHARP_){
return (new Date(p1__2357_SHARP_));
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

//# sourceMappingURL=alpha.js.map
