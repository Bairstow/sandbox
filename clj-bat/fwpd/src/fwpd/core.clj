(ns fwpd.core
  (:gen-class))

(def filename "suspects.csv")

(def vamp-keys [:name :glitter-index])
(defn str->int
  [str]
  (Integer. str))
(def conversions {:name identity
                  :glitter-index str->int})
(defn convert
  [vamp-key value]
  ((get conversions vamp-key) value))

(convert :glitter-index "3")

(defn parse
  "Convert a CSV into rows of columns"
  [string]
  (map #(clojure.string/split % #",")
       (clojure.string/split string #"\n")))

(parse (slurp filename))
(doc assoc)
(defn mapify
  "Return a seq of maps"
  [rows]
  (map (fn [unmapped-row]
         (reduce (fn [row-map [vamp-key value]]
                   (assoc row-map vamp-key (convert vamp-key value)))
                 {}
                 (map vector vamp-keys unmapped-row)))
       rows))
(first (mapify (parse (slurp filename))))
(doc mapify)

(defn glitter-filter
  [minimum-glitter records]
  (filter #(>= (:glitter-index %) minimum-glitter) records))
(def mapped-vamp-records (mapify (parse (slurp filename))))
(glitter-filter 3 mapped-vamp-records)

; exercise 1
(map :name (glitter-filter 3 mapped-vamp-records))

; exercise 2
(def parsed-suspects (parse (slurp filename)))
(defn append
  "Append new suspect to list"
  [suspect-list new-suspect-name new-suspect-glitter-index]
  (conj suspect-list (vector new-suspect-name new-suspect-glitter-index)))
(append parsed-suspects "jb" "0")

; exercise 3
(def vamp-validation-map {:name #(string? (:name %))
                          :glitter-index #(integer? (:glitter-index %))})
(def mapped-suspects (mapify parsed-suspects))
(first mapped-suspects)
(defn first-record
  []
  (first mapped-suspects))

(doc if)
(doc and)
(defn validate-keyword
  [[key pred] record]
  (and (contains? record key)
       (pred record)))
(defn first-validation
  []
  (first vamp-validation-map))
(first-record)
(first-validation)

(doc some?)
(doc contains?)
(doc map)
(doc every?)
(doc all)
(doc filter)

((fn [[key pred] record] (pred record)) (first-validation) (first-record))
(validate-keyword (first-validation) (first-record))
(validate-keyword (second vamp-validation-map) (first-record))
(every? #(true? %) (map #(validate-keyword % (first-record)) vamp-validation-map))

(defn validate
  "Ensure map of keywords and validating functions validates argument record"
  [validation-map record]
  (every? #(true? %) (map #(validate-keyword % record) validation-map)))

; exercise 4
(doc clojure.string/join)
(clojure.string/join "," [0 1 2])
(map :name mapped-suspects)
((fn [{:keys [name glitter-index]}] glitter-index) (first-record))
(defn vectorize-record
  [{:keys [name glitter-index]}]
  (vector name glitter-index))
(vectorize-record (first-record))
(clojure.string/join "\n" (map #(clojure.string/join "," (vectorize-record %)) mapped-suspects))
(defn convert-suspects-csv
  [suspect-map]
  (clojure.string/join "\n" (map #(clojure.string/join "," (vectorize-record %)) suspect-map)))
(convert-suspects-csv mapped-suspects)
