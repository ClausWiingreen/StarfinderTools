import { binarySearch } from './binarySearch';

export abstract class AbstractEntityService<Entity> {
    constructor() { }
    protected abstract getAllEntities() : Entity[];
    protected getRandomEntity(weightFunction : (entity: Entity) => number) : Entity {
        return binarySearch(this.getAllEntities(), Math.random()*100, weightFunction);
    }
}
