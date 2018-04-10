
class ArmorTransformer {
    constructor(rawData){
        this.rawData = rawData;
    }

    mapIntoObject(arr){
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    }

    mapIntoHeadObjects(arr){
        return arr.reduce((acc, curr) => {
            if(curr.type === 'chest'){
                acc[curr.id] = curr;
            }
            return acc;
        }, {});
    }

    getHead(){
        return this.mapIntoHeadObjects(this.rawData);
    }
}

export default ArmorTransformer;
