import { TriesDSInsertion } from "./TriesDSInsertion";
import { TriesDSUpdation } from "./TriesDSUpdation";

class TriesDSTest extends ParentDS implements TriesDSInsertion,TriesDSUpdation {
    heightOfDS:number;
    depthOfDS:number;
    name ?: string;

    constructor(heightOfDS,depthOfDS,lengthOfDS){
        super();
        this.heightOfDS = heightOfDS;
        this.depthOfDS = depthOfDS;
        this.lengthOfDS = lengthOfDS;
    }

    insertIntoDS(length:number,elementToInsert:number){
        
    }
}