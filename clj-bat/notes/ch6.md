### Storing objects with def
- interning a var updates the current namespace's map with the association of the var name and the stored value
- `(ns-interns *ns*)` - access the namespace map
- deref - `(deref #'user/example_var)` - used on vars to  get the objects they point to

### Creating and switching to namespaces
- create-ns - takes a symbol, creates a namespace with that name if doesn't exist and returns the namespace
- in-ns - creates namespace if doesn't exist and switches to it
- fully qualified symbols allow access to vars in other namespaces
- refer - used for repl interaction, allows referral to other namespace objects without fully qualified symbols
  - can pass filters :only, :exclude, :rename.
  - evaluating (clojure.com/refer-clojure) in new namespaces will refer the clojure.core namespace
- `defn-` - defines a private function available only to other functions in the same namespace
- alias - allows shortening a namespace name for using fully qualified symbols
  - `(clojure.core/alias 'new.ns 'old.longnamespace)`
- dashes in namespaces correspond to underscores in the filesystem
- the component preceding a period in a namespace name corresponds to a directory

### Requiring and using namespaces
- ns - the primary way to create and manage namespaces in clojure
  - clojure.core is referred by default when using
  - six possible references within ns: :refer-clojure, :require, :use, :import, :load, :gen-class
