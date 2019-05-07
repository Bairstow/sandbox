(ns ch1-do-things.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))

(comment
    (doc comment)
    (str "concate " "this " "string")

    (if true
    (do (println "Success!")
        "By Zeus's hammer!")
    (do (println "Failure!")
        "By Aquaman's trident!"))

    (doc nil?)
    (nil? nil)
    (nil? false)

    (+ 1 (* 2 (+ 3 (+ 6 7))) (* 4 5))

    (def local-data-def
    ["string1" "string2" "string3"])

    (nth local-data-def 2)

    (and :truthy_symbol false)

    (def nested-map
    {:a 1 :b {:c 3}})

    (get nested-map :b)
    ; => {:c 3}
    (get-in nested-map [:b :c])
    ; => 3
    (get-in nested-map [:a :c])
    ; => nil
    (:a nested-map)
    ; => 1
    (:d nested-map "default value")
    ; => "default value"

    (conj [1 2 3] 4)
    ; => [1 2 3 4]
    (conj '(:b :c :d) :a)
    ; => (:a :b :c :d)

    (contains? #{:a :b} :a)
    ; => true
    (contains? #{nil} nil)
    ; => true
    (:a #{:a :b})
    ; => :a
    (:a #{:b :c})
    ; => nil

    (doc into)
    (into [1 2] #{3})
    ; => [1 2 3]

    (doc loop)

    (re-find #"^left-" "left-eye")
    ; => "left-"
    (re-find #"^right-" "left-eye")
    ; => nil
    )


(def asym-hobbit-body-parts [{:name "head" :size 3}
                             {:name "left-eye" :size 1}
                             {:name "left-ear" :size 1}
                             {:name "mouth" :size 1}
                             {:name "nose" :size 1}
                             {:name "neck" :size 2}
                             {:name "left-shoulder" :size 3}
                             {:name "left-upper-arm" :size 3}
                             {:name "chest" :size 10}
                             {:name "back" :size 10}
                             {:name "left-forearm" :size 3}
                             {:name "abdomen" :size 6}
                             {:name "left-kidney" :size 1}
                             {:name "left-hand" :size 2}
                             {:name "left-knee" :size 2}
                             {:name "left-thigh" :size 4}
                             {:name "left-lower-leg" :size 3}
                             {:name "left-achilles" :size 1}
                             {:name "left-foot" :size 2}])

(defn matching-part
  [part]
  {:name (clojure.string/replace (:name part) #"^left-" "right-")
   :size (:size part)})

(defn symmetrize-body-parts
  "Expects a seq of maps that have a :name and :size"
  [asym-body-parts]
  (loop [remaining-asym-parts asym-body-parts
         final-body-parts []]
    (if (empty? remaining-asym-parts)
      final-body-parts
      (let [[part & remaining] remaining-asym-parts]
        (recur remaining
               (into final-body-parts
                     (set [part (matching-part part)])))))))

(symmetrize-body-parts asym-hobbit-body-parts)

(defn better-symmetrize-body-parts
  "Expects a seq of maps that have a :name and :size"
  [asym-body-parts]
  (reduce (fn [final-body-parts part]
            (into final-body-parts (set [part (matching-part part)])))
          []
          asym-body-parts))

(better-symmetrize-body-parts asym-hobbit-body-parts)

(defn hit
  [asym-body-parts]
  (let [sym-parts (better-symmetrize-body-parts asym-body-parts)
        body-part-size-sum (reduce + (map :size sym-parts))
        target (rand body-part-size-sum)]
    (loop [[part & remaining] sym-parts
           accumulated-size (:size part)]
      (if (> accumulated-size target)
        part
        (do (println (str "acc-size: " accumulated-size))
            (recur remaining (+ accumulated-size (:size (first remaining)))))))))

;(hit asym-hobbit-body-parts)

; exercises 1
(str "con" "cat")
(vector 1 2 :b)
(list 1 :a nil)
(hash-map :a 1 :b 2)
(hash-set :a :a :b)

; exercises 2
(defn inc-100
  "func returns value incremented by 100"
  [val]
  (+ 100 val))
(inc-100 12)

; exercises 3
(defn dec-maker
  [decrement-val]
  (fn [target-val]
    (- target-val decrement-val)))
(def dec4 (dec-maker 4))
(dec4 10)

; exercises 4
;(doc map)
(def my-nums [1 1 2 2 3])
(defn mapset
  [map-func coll]
  (set (map map-func coll)))
(mapset inc my-nums)
(set (map inc my-nums))

; exercises 5
(def asym-rad-body-parts [{:name "head" :size 3}
                          {:name "left-eye" :size 1}
                          {:name "left-ear" :size 1}
                          {:name "mouth" :size 1}
                          {:name "nose" :size 1}
                          {:name "neck" :size 2}])
(def radial-part-prefixes ["front-left-"
                           "front-right-"
                           "left-"
                           "right-"
                           "back-left-"
                           "back-right-"])
(defn replace-part
  [part part-prefix]
  {:name (clojure.string/replace (:name part) #"^left-" part-prefix)
   :size (:size part)})

(defn radial-parts
  [part]
  (reduce (fn [balanced-parts part-prefix]
            (conj balanced-parts
                  {:name (clojure.string/replace (:name part) #"^left-" part-prefix)
                   :size (:size part)})) [] radial-part-prefixes))
(radial-parts {:name "left-eye" :size 3})

(defn radialize-body-parts
  "Expects a seq of maps that have a :name and :size"
  [asym-body-parts]
  (loop [remaining-asym-parts asym-body-parts
         final-body-parts []]
    (if (empty? remaining-asym-parts)
      final-body-parts
      (let [[part & remaining] remaining-asym-parts]
        (recur remaining
               (into final-body-parts
                     (set (conj (radial-parts part) part))))))))

(radialize-body-parts asym-rad-body-parts)
