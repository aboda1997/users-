import { expect, jest } from "@jest/globals";


import usersController from "../users.controller.mjs";

test('return specific user by id', async () => {
  const response = await usersController.getUserById({userId : 5});
  expect(response).toEqual(
    {
      id: 5,
      Age: 29,
      Country: 'Egypt',
      Email: 'ahmedali@gmail.com',
      Mobile: '01141770755',
      Name: 'عبدالرحمن الجن'
    },
   );
});

test('update user ', async () => {
  const response = await usersController.updateUser({userId : 11 ,   Age: 31,
    Country: 'syria',
    Email: 'ahmedali@gmail.com',
    Mobile: '01141770755',
    Name: 'احمد'});
  expect(response).toEqual(
    {
      id: 11,
      Age: 31,
      Country: 'syria',
      Email: 'ahmedali@gmail.com',
      Mobile: '01141770755',
      Name: 'احمد'
    }
    );
});

test('create user ', async () => {
  const response = await usersController.createNewUser(
    { Age: 30,
    Country: 'Egypt',
    Email: 'abdelrahmanalgendy97@gmail.com',
    Mobile: '01141770755',
    Name: 'عبدالرحمن الجن'});
  delete response.id ; 
  expect(response).toEqual(
    {
      Age: 30,
      Country: 'Egypt',
      Email: 'abdelrahmanalgendy97@gmail.com',
      Mobile: '01141770755',
      Name: 'عبدالرحمن الجن'
    }
    );
});
