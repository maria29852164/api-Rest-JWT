import {verifiedToken,isAdmin,isDefault,isModerator} from './authToken'
export const indexMiddleware=()=>({verifiedToken,isAdmin,isModerator,isDefault})
