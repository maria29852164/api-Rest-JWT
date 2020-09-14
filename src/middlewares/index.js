import {verifiedToken,isAdmin,isDefault,isModerator} from './authToken'
import {checkRoleExist,checkDataUser} from './verifiedSinup'
export const indexMiddleware={verifiedToken,isAdmin,isModerator,isDefault,checkRoleExist,checkDataUser}
