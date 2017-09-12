import limit from '../resource/limit.json';

/** Function: sliceArray
 *  @param {array} arr
 *  @param {number} begin
 *
 *  @return {object} result
 */
export default (arr, begin) => {
    let end = ((arr.length - begin) > limit.bulk) ? begin + limit.bulk : arr.length;
    return arr.slice(begin, end);
};
