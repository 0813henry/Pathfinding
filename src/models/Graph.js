import Node from "./Node";

export default class Graph {
    constructor() {
        this.startNode = null;
        this.nodes = new Map();
    }

    /**
     * 
     * @param {Number} id 
     * @returns nodo con Id dado
     */
    getNode(id) {
        return this.nodes.get(id);
    }

    /**
     * 
     * @param {Number} id id del nodo
     * @param {Number} latitude latitud del nodo
     * @param {Number} longitude longitud del nodo
     * @returns {Node} nodo creado
     */
    addNode(id, latitude, longitude) {
        const node = new Node(id, latitude, longitude);
        this.nodes.set(node.id, node);
        return node;
    }
}