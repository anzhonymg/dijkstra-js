/**
 *
 * dijkstra.js - Pathfinding class in es6
 * An implementation of the Dijkstra's algorithm to find the low-cost path from a given weighted graph.
 * @author Jerson La Torre (https://github.com/jerson-latorre) - 2016
 *
 */

class Dijsktra
{
	constructor(nodes = {})
	{
		this.nodes = nodes
		this.tags = {}
		this.blackList = []
	}

	addNode(name, neighbors)
	{
		this.nodes[name] = neighbors
	}

	path(node1, node2)
	{
		this.tags[node1] = {"w":0, "prev":null} // init first tag
		this._processTags() // process tag list

		var prev = node2
		var path = [prev]

		while (prev != node1)
		{
			prev = this.tags[prev].prev
			path.unshift(prev)
		}

		return path // return an array showing the path from node1 to node2
	}

	_processTags()
	{
		if (this.blackList.length == Object.keys(this.nodes).length) return // returns if there is no more nodes to tag
		
		// find the tag with the less weight
		let smaller = 1000000
		let smallerTag
		Object.keys(this.tags).forEach(keyTag => 
		{
			if (this.tags[keyTag].w < smaller && !(this.blackList.includes(keyTag)))
			{
				smaller = this.tags[keyTag].w
				smallerTag = keyTag
			}
		})

		// tag the children nodes of the found tag
		Object.keys(this.nodes[smallerTag]).forEach(keyNode => 
		{
			if(!(this.blackList.includes(keyNode))) // if the child node has been tagged, continue with the next node
			{
				var w = this.tags[smallerTag].w + this.nodes[smallerTag][keyNode]
				var prev = smallerTag

				if (this.tags[keyNode] != null) // if there is a tag for this node, select the tag with the less weight
				{
					if (w < this.tags[keyNode].w)
					{
						this.tags[keyNode] = {w: w, prev: prev}
					}
				}
				else
				{
					this.tags[keyNode] = {w: w, prev: prev}
				}
			}
		})

		this.blackList.push(smallerTag) // mark the current node as tagged
		this._processTags() // analize tags again until finish the process
	}
}

/*

// how to use

var d = new Dijsktra(
{
	"a": {"b":3, "c":1 },
	"b": {"a":3, "d":1, "g":5 },
	"c": {"a":1, "d":2, "f":5 },
	"d": {"c":2, "f":2, "b":1, "e":4 },
	"e": {"g":2, "d":4, "h":1 },
	"f": {"d":5, "d":2, "h":3 },
	"g": {"b":5, "e":2 },
	"h": {"f":3, "e":1 },
})

console.log(d.path("a", "h")) // ["a", "c", "d", "f", "h"]
*/
