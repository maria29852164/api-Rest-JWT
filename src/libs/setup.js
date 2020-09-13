import Role from '../models/role.model'


export const createRolesDefault=async ()=>{
    const roleExist=Role.estimatedDocumentCount()
    if (roleExist>0)return
  const valuesRole=  await Promise.all([
        new Role({name:'user'}),
        new Role({name:'admin'}),
        new Role({name:'moderator'})
    ])
    return valuesRole
}
