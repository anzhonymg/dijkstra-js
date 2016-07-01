# dijkstra.js
#### A class that implements the Dijkstra's algorithm to find the low-cost path from a given weighted graph.

#### Get Started

1. Include `dijsktra.js` in the head of your document.
2. Create an new instance: `var dijkstra = new Dijkstra()`
3. Add nodes: `dijkstra.addNode([node name], {[node name]:[weight], [node name]:[weight], ... })`
4. Calculate the low-cost path: `dijstra.path([node name], [node name])`

#### Example

```javascript
var dijkstra = new Dijkstra()

dijkstra.addNode("a", {"b":3, "c":1})
dijkstra.addNode("b", {"a":3, "d":1, "g":5})
dijkstra.addNode("c", {"a":1, "d":2, "f":5 })
dijkstra.addNode("d", {"c":2, "f":2, "b":1, "e":4})
dijkstra.addNode("e", {"g":2, "d":4, "h":1})
dijkstra.addNode("f", {"d":5, "d":2, "h":3})
dijkstra.addNode("g", {"b":5, "e":2})
dijkstra.addNode("h", {"f":3, "e":1})

console.log(dijkstra.path("a", "h")) // ["a", "c", "d", "f", "h"]
```
