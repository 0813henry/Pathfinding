class PathfindingAlgorithm {
    constructor() {
        this.finished = false;
    }

    /**
     * Restablecer el estado interno e inicializar una nueva búsqueda de ruta
     * @param {(import("./Node").default)} startNode 
     * @param {(import("./Node").default)} endNode 
     */
    start(startNode, endNode) {
        this.finished = false;
        this.startNode = startNode;
        this.endNode = endNode;
    }

    /**
     * Progresa el algoritmo de búsqueda de rutas en un paso/iteración
     * @returns {(import("./Node").default)[]} matriz de nodos que se actualizaron
     */
    nextStep() {
        return [];
    }
}

export default PathfindingAlgorithm;