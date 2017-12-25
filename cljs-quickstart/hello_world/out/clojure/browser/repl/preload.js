// Compiled by ClojureScript 1.9.908 {}
goog.provide('clojure.browser.repl.preload');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
if(typeof clojure.browser.repl.preload.conn !== 'undefined'){
} else {
clojure.browser.repl.preload.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);

//# sourceMappingURL=preload.js.map
