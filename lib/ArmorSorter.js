
class ArmorSorter {
    constructor(rawData){
        this.rawData = rawData;

        this.headData = {};
        this.chestData = {};
        this.gloveData = {};
        this.waistData = {};
        this.legData = {};

        this.sortData(this.rawData);
    }

    getHeadData(){
        return this.headData;
    }
    getChestData(){
        return this.chestData;
    }
    getGloveData(){
        return this.gloveData;
    }
    getWaistData(){
        return this.waistData;
    }
    getLegData(){
        return this.legData;
    }

    /*mapIntoHeadObjects(arr){
        return arr.reduce((acc, curr) => {
            if(curr.type === 'head'){
                acc[curr.id] = curr;
            }
            return acc;
        }, {});
    }*/

    sortData(obj){
        for (var id in obj){
            var offByOne = parseInt(id,10) + 1;
            switch(obj[id].type){
            case 'head':
                this.headData[offByOne] = obj[id];
                break;
            case 'chest':
                this.chestData[offByOne] = obj[id];
                break;
            case 'gloves':
                this.gloveData[offByOne] = obj[id];
                break;
            case 'waist':
                this.waistData[offByOne] = obj[id];
                break;
            case 'legs':
                this.legData[offByOne] = obj[id];
                break;
            }
        }
    }

    /*getHead(){
        this.headData = this.mapIntoHeadObjects(this.rawData);
    }*/

}

export default ArmorSorter;
