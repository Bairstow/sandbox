### Control flow
- if - boolean conditional with else form
- do - wrap and eval multiple forms in a single statement
- when - combination and if and do with no else form
- truthiness and equality - nil and false both considered falsey
- or - returns first truthy value or final value
- and - returns first falsey value or final value

### Declaration
- def - used to bind a name to a value
- let - scope bind name to value


### Data structures
- numbers - 123 - can represent most things. integers, floats, ratios etc.
- strings - "a string" - text representation only allows double quote enclosure
- maps - {} - literal associating value pairs, can be created with hash-map func
- keywords - :a_keyword - primary use as key in maps, can be used as lookup function also
- vectors - [1 2 3] - 0-indexed collection, elements added to tail
- lists - (1 2 3) - linear collection value, to write a list literal add a preceding quotation mark, can be created with list func, values can have any type, elements added to head
- sets - #{1 :a "string"} - collection of unique values, hash-set func to create from values, set func to create from existing collections

### Functions
- function calls are expressions that have a function expression as the operator
- defn function definitions
  - function name
  - optional docstring describing the function
  - parameters listen in [] brackets (supports arity overloading)
  - function body
- variable arity functions can defined with a rest parameter - [& rest]
- destructuring lets you bind names to values within a collection
- keywords can be destructured from a map using the :keys and original data retained
  - [{:keys [key-value-1 key-value-2] as original-data}]
- clojure automatically returns te last form evaluated
- anonymous functions can be created with the following forms
  - (fn [param-list]
    	function body)
  - #(operator % body) - e.g. #(* % 4) and arguments can take form %1, %2, %& etc.

### Additional
- set - returns set literal form supplied collection
- into - returns new collection of first argument type conjoined with following types
- loop/recur - (loop [bindings*] exprs*)
- regex quotes after a hash-mark - #"regular-expression"
- reduce - process each element in a sequence and build a result