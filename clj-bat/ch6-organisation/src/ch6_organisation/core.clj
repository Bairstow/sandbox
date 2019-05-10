(ns ch6-organisation.core
  (:gen-class))

(def great-books ["East of Eden" "The Glass Bead Game"])
(ns-interns *ns*)
(get (ns-interns *ns*) 'great-books)
(ns-map *ns*)
