(ns ch5-functional-prog.core
  (:gen-class))

(require '[clojure.string :as s])
(s/join "," ["1" "2"])

(defn sum
  ([vals]
     (sum vals 0))
  ([vals accumulating-total]
     (if (empty? vals)
       accumulating-total
       (recur (rest vals) (+ (first vals) accumulating-total)))))

(sum [1 2 3])
(sum [1 2 3] 4)

(doc comp)
((comp inc *) 3 4)

(doc int)
(doc reduce)
(doc partial)
(doc vector?)

((partial (partial +) *) 2 3)
(def my-ops [+ inc])
(into [] (map #(partial %) my-ops))

(apply + [2 3])
(+ [2 3])
((fn [result current-op] (apply current-op result)) [2 3] +)
(def single-op [+])
(defn apply-current
  [result current]
  (do
    (println current)
    (println result)
    (if (vector? result)
      (apply current result)
      (current result))))

(reduce apply-current [2 3] my-ops)

(doc source)
(source comp)


(defn my-comp
  "compose any number of function arguments"
  [& func-args]
  (fn [& args]
    (let [current-func (first func-args)]
      (if (= 1 (count func-args))
        (apply current-func args)
        (current-func (recur (rest func-args)))))))

(doc list*)
(doc reduce1)
(doc cons)
(doc assoc-in)
(doc if-not)

(range 0 4)
(range 1 5)
(range 4)
(doc if-let)
(doc not-empty)
(doc some)

(some #{:a} [:b 2 "string"])
(some #{:a} [:b 2 "string" :a])
(:a {:b 2 :a "string"})
(get {:b 2 :a "string"} :a)

(doc filter)
(doc char)
(doc str)
(doc nth)

(def alpha-start 97)
(def alpha-end 123)
(def alpha-range (range alpha-start alpha-end))
(def char-string-conversion (comp str char))
(def letters (map char-string-conversion alpha-range))
(nth letters 12)
(doc doseq)

(doseq [num (range 4)]
  (println num))

(doc characters-as-strings)

; exercise 1
(def player {:name "bat"
             :attributes {:strength 3
                          :intelligence 4}})

((comp :intelligence :attributes) player)
(defn attr
  [attr-key]
  (comp attr-key :attributes))
((attr :intelligence) player)

; exercise 2
(source comp)
(doc list*)
(defn my-comp
  ([] identity)
  ([f] f)
  ([f g]
   (fn [& args] (f (apply g args))))
  ([f g & fs] (reduce comp (list* f g fs))))

((my-comp inc +) 2 3)
((my-comp str inc +) 2 3 4)

; exercise 3
(def test-map {0 {}})
(doc map?)
(map? test-map)
(doc assoc)
(doc if-let)
(defn create-mapped-key
  [m k]
  (if (map? (k m))
    m
    (assoc m k {})))
(create-mapped-key test-map :m)
(reduce (fn [result current-key] (println current-key)) {} [:a :b])

(source assoc-in)
(doc get)
(defn my-assoc-in
  [m [k & ks] v]
  (if (empty? ks)
    (assoc m k v)
    (assoc m k (my-assoc-in {} ks v))))

(assoc-in test-map [0 :a :b] "test")
(my-assoc-in test-map [0 :b :C] "test")
(my-assoc-in test-map [0] "test")

; exercise 4
(doc update-in)
(source update-in)

(ns-name *ns*)
