// Mocks
import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const successMesasge = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const token = 'TEST_TOKEN';
const error = new Error(errorMessage);

const userProfile = {
    id: 'TEST_ID',
    avatar: 'TEST_AVATAR',
    firstName: 'Walter',
    lastName: 'White',
    token,
};

const users = [
    { "id": "5b630eb31d4d04323b00e262", "firstName": "Elon121", "lastName": "Musk", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5b6a05101d4d047c7500e2d4", "firstName": "Elon22", "lastName": "Musk", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5b6ab2781d4d04585a00e2e3", "firstName": "New", "lastName": "User", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/UV0MNKGq2Q.jpg" },
    { "id": "5b6ac5f01d4d04ea3500e2e7", "firstName": "Jony", "lastName": "Ive", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5b6c19461d4d040a3800e2f7", "firstName": "Dima", "lastName": "Musk", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5b6c1d0c1d4d04d1f500e2f8", "firstName": "Elon", "lastName": "Musk", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5b6c1d1f1d4d041c7a00e2f9", "firstName": "Elon2", "lastName": "Musk", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5b6c93db1d4d0482bc00e2fb", "firstName": "Andrew", "lastName": "Smirnov", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/ol5wzxeawn.jpeg" },
    { "id": "5b6c9aa91d4d04029c00e2fd", "firstName": "Aaa-1", "lastName": "Sss", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5b6ca72a1d4d043eba00e2ff", "firstName": "Elon", "lastName": "Musk", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5b6ca73d1d4d04566200e300", "firstName": "Elon", "lastName": "Musk", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5b6ca7b81d4d04eca300e301", "firstName": "Elon", "lastName": "Musk", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5b6d41fd1d4d04152b00e306", "firstName": "Elon", "lastName": "Musk", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5b6d422d1d4d04611b00e307", "firstName": "Dima", "lastName": "Nazdratenko", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/0UcQOkitEg.jpg" },
    { "id": "5b6da848d40d676548630f70", "firstName": "Aaa-2", "lastName": "Sss", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5b713f20d40d67daf2630fae", "firstName": "Andrii", "lastName": "Tihonovich", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5b719359d40d6730df630fef", "firstName": "Andrii", "lastName": "Tihonovich", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5b785786259aa915d6ec5186", "firstName": "Андрей", "lastName": "Смирнов", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/IwkNAUgZUC.jpeg" },
    { "id": "5b7a6d0c259aa9dc24ec51a0", "firstName": "Elon1", "lastName": "Musk1", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5b7af204259aa95d98ec51ac", "firstName": "Elon2", "lastName": "Musk2", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5b7c2e8d259aa9ee86ec51cc", "firstName": "Oleksii-235", "lastName": "Shevchenko222", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/yAewl8xJvS.jpg" },
    { "id": "5ba89cfdfa0e309db8283445", "firstName": "Iren", "lastName": "Sverkunova", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/LUO0UWUlx4.jpg" },
    { "id": "5ba89d30fa0e301b59283446", "firstName": "Gavriel", "lastName": "Guseinov", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5ba8b2e8fa0e30c636283448", "firstName": "Test", "lastName": "User", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5c1aae9c6de4fbd44d2039ec", "firstName": "Elon", "lastName": "Musk", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5c238786cf749fade0499e82", "firstName": "Elon1", "lastName": "Musk1", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5c2387cdcf749fc042499e83", "firstName": "Pitter", "lastName": "Black", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
    { "id": "5c239276cf749f67fa499e85", "firstName": "Pitter", "lastName": "Black", "avatar": "https://lab.lectrum.io/redux/api/image/medlgvgc4fn5/placeholder.jpg" },
];


const credentials = {
    email: 'test@email.com',
    password: '1111',
    remember: true,
};

const responseDataSuccess = {
    data: userProfile,
    message: successMesasge,
};

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseSuccess = {
    status: 200,
    json: jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseFail401 = {
    status: 401,
    json: jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail400 = {
    status: 400,
    json: jest.fn(() => Promise.resolve(responseDataFail)),
};

const url = 'https://www.url.com';

global.__ = {
    userProfile,
    errorMessage,
    token,
    error,
    responseDataSuccess,
    responseDataFail,
    fetchResponseSuccess,
    fetchResponseFail401,
    fetchResponseFail400,
    credentials,
    url,
    users,
};
global.fetch = fetch;
global.localStorage = new LocalStorage();
