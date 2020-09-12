// async * await
// clear style of using promise

// 1. async
async function fetchUser() {
  // do network request in 10 secs...
  // 비동기적인 처리를 하지 않았을 경우 데이터를 받아오는데 걸리는 시간동안
  // 다른 기능들이 수행되지 않기 때문에 비효율적이므로 비동기적 처리가 필요
  // async를 함수 앞에 쓰면 코드 블록이 자동으로 promise로 바뀐다.
  return "jinwoo";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);