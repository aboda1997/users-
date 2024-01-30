
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export default class UsersModel {

  static async getAllUsers(){
    const users = await prisma.user.findMany(); 
    return users ; 
  }
  
  static async getUserById(userId){
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },

    }); 
    return user ; 
  }

  static async createNewUser (userData){
    const user = await prisma.user.create({
      data : {
      ...userData
      }}
    )
    return user
  }

  static async updateUser(userData){
    const _id = userData.userId ; 
    delete userData.userId ;
    const updatedUser  = await prisma.user.update({
      where: { id: Number(_id) },
      data: {  ...userData },
    })
    return updatedUser ;
  }

  static async deleteUser(userId){
    return  await prisma.user.delete({
      where: { id: Number(userId) },
    })
    
  }
   
}
