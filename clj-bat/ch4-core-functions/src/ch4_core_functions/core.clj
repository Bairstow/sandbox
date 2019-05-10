(ns ch4-core-functions.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))

(defn titleize
  [topic]
  (str topic " is true"))

(doc do)
(doc first)
(doc second)

(def my-second {:a "second-arg"})
(second (first my-second))
; => "second-arg"

(second my-second)
; => nil

(#(str (second %)) my-second)
; => ""
(map #(str (second %)) my-second)
; => "second-arg

(seq {:a "first" :b "second"})
; => ([:a "first"] [:b "second"])
(into {} (seq {:a "first" :b "second"}))
; => {:a "first" :b "second"}

(map str ["a" "b" "c"] ["A" "B" "C"])
; => ("aA" "bB" "cC")

(def sum #(reduce + %))
(def avg #(/ (sum %) (count %)))
(defn stats
  [numbers]
  (map #(% numbers) [sum count avg]))

(stats [3 4 10])
; => (17 3 17/3)

(stats [80 1 44 13 6])
; => (144 5 144/5)

(concat [1 2] [3])
; => (1 2 3)
(concat [1 2] '(3))
; => (1 2 3)
(concat [1 2] #{:a 3 :c})
; => (1 2 :c 3 :a)

(doc time)
(time (concat [1 2] [3 4]))

(doc lazy-seq)

(concat (take 8 (repeat "na")) ["Batman!"])
; => ("na" "na" "na" "na" "na" "na" "na" "na" "Batman!")

(doc every?)

(conj [0] 1 2 3)
; => [0 1 2 3]

(def add10 (partial + 10))
(add10 2)
; => 12
(add10 2 3)
; => 15

(doc condp)
