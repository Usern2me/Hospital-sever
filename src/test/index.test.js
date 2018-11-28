import user from '../controllers/UserController'
import iconv from 'iconv-lite';
import encodings from 'iconv-lite/encodings';
iconv.encodings = encodings;
const sql = require('../config/db-init')

// test('add and check', async () => {
//     let res = await user.getUser('杨华')
//     expect(res).toBeTruthy()
// })

test('getUsers', async() => {
    let res = await user.getUsers()
    expect(res).toBeTruthy()
})
