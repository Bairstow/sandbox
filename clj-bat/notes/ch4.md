### Programming to abstractions
- functions are defined to operate on different sorts of abstractions (such as sequences), not specific data structures
- lists, vectors, sets, and maps can all be treated as sequences (one type of data structure abstraction)

### Abstraction through indirection
- for sequences clojure uses lightweight type conversion to produce a data structure that works on an abstractions
    functions
- `seq` on a list, vector, set, or map will produce a value that looks and behaves like a list
- >  In general, programming to abstractions gives you power by letting you use libraries of functions on different data structure regardless of how those data structures are implemented.

### Seq function examples
- map - often use to retrieve the value associated with a keyword from a collection of map data structures
  - `(map :my-key my-map-data)`
- reduce - also used to transform a maps values or filter out keys from a map based on value. map, filter, and some can
    all be implemented with reduce
- take - `(take my-num my-seq)` - returns the first n elements of sequence
- drop - `(drop my-num my-seq)` - returns the sequence with first n elements removed
- take-while/drop-while - the same but use a predicate test function instead of an element count
- filter - `(filter my-pred my-seq)` - returns all elements of a sequence that return true for the predicate function
- some - same definition as filter but will return the first truthy value from the predicate function, or nil.
- sort - `(sort my-seq)` - sort elements of the sequence in ascending order
- sort-by - `(sort-by my-key-func my-seq)` - sort order determined by return value of the key function on each element
- concat - appends members of one sequence to the end of another

### Lazy seq
- lazy seq is a seq whose members aren't computed until you try to access them
- computing lazy seq members is called realising the seq
- deferring computation allows the construction of infinite sequences

- range - `(range 0 100)` - creates a lazy seq of the integers from 0 to 100
- map also returns a lazy sequence until members are realized
- lazy seqs consist of two parts, a recipe for realising elements of the sequence, and the elements that have been
    realised so far

### Infinite sequences
- repeat - creates a sequence whose every member is the argument you pass
- repeatedly - evaluates function definition argument passed everytime a sequence element is realised

### Collection abstraction
- the collection abstraction is about the data structure as a whole
- count - return member count of passed collection
- empty? - boolean check for empty collection
- every? - returns true if predicate function returns true for every member of the collection
- into - many seq functions return a seq rather than operated data structure, into can be used to convert back
- conj - add elements directly to a collection 

### Function functions (higher order functions)
- apply - explode the elements of a collection so that they get passed to a function as separate arguments
- partial - returns a new function with original arguments that will call original func with new arguments on eval
- complement - returns the negation of a boolean function

