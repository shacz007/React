
//action types
let GM = "GM"
let GN = "GN"
//actions
let gmAction = () => {
    return { type: GM }
}
let gnAction = () => {
    return { type: GN }
}
// incolves newer function
export { gmAction, gnAction, GM, GN }
