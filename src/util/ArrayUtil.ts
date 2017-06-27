/**
 * Created by zhaojunming on 17/1/9.
 */

export class ArrayUtil {

    static reduceArray(list: Array<any>, number: number = 3) {
        let dataList = [];

        if (list) {
            let indexList = [];
            list.forEach((item, index) => {
                if (index > 0 && (index % number == 0)) {
                    dataList.push(indexList);
                    indexList = [];
                }
                indexList.push(item);
            });
            dataList.push(indexList);
        }
        return dataList;
    }
}
