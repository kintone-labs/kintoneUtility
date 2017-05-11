import errors from '!json!./resource/errorMessages.json'

/** Function: setGuestSpaceId
 *  @param {number} guestSpaceId
 */
export default (guestSpaceId) => {
    if (!guestSpaceId) {
        throw errors.emptyGuestSpaceId
    }
    kintoneUtility.rest.guestSpaceId = guestSpaceId
}
