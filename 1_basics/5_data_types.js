/**
 * 
 * 여섯개의 Primitive Type
 * 한개의 Object Type
 * 
 * 1) number (숫자)
 * 2) string (문자열)
 * 3) boolean (True or False)
 * 4) undefined (정의 x)
 * 5) null (널)
 * 6) symbol (심볼)
 * 
 * 7) Object(객체)
 *  Function
 *  Array
 *  Object
 */

const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof (age))
console.log(typeof (tempature))
console.log(typeof (pi))
console.log('--------------')

const infinity = Infinity;
const nInfinity = -Infinity
console.log(typeof (infinity))
console.log(typeof (nInfinity))
console.log('--------------')

/**
 * string
 */

const codeFactory = '"코"드팩토리';
console.log(codeFactory);
console.log(typeof codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);

/**
 * Templeate Literal
 * 
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
 */

const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlash = '아이브\\코드팩토리'
console.log(backSlash);
const smallQutoation = '아이브\'코드팩토리';
console.log(smallQutoation);

const iveWonYoung2 = `아이브
장원영`;
console.log(iveWonYoung2);

console.log(typeof (iveWonYoung2))

const groupName = '아이브';
console.log(groupName + ' 안유진');

console.log(`${groupName} 안유진`)
console.log('--------------')
/**
 * Boolean Type
 */

const isTrue = true;
const isFalse = false;

console.log(isTrue);
console.log(isFalse);
console.log(typeof (isTrue))
console.log(typeof isFalse)
console.log('--------------')

/**
 * undefined
 * 
 * 사용자가 직접 값을 초기화 하지 않았을때 지정되는 값이다.
 * 직접 undefined로 값을 초기화 하는것은 지양해야한다.
 */

let noInit;
console.log(noInit)
console.log(typeof noInit)
console.log('--------------')
/**
 * null
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할때 사용된다.
 */

let init = null;
console.log(init);
console.log(typeof init);
console.log('--------------')
/**
 * symbol
 * 
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값들과 다르게 symbol함수를
 * 호출해서 사용한다.
 */

const test1 = '1';
const test2 = '1';

console.log(test1 == test2)

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 == symbol2);

/**
 * Object 타입
 * 
 * Map
 * key:value 쌍으로 이루어져있다
 */

const dictionary = {
    red: '빨간색',
    blue: '파란색',
    yellow: '노란색',
    orange: '주황색'
}

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['blue']);
console.log(dictionary['yellow']);
console.log(dictionary['orange']);
console.log(typeof(dictionary))


/**
 * Array Type
 * 
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */
const iveMembersArray = [
    '안유진', 
    '장원영',
    '레이',
    '가을',
    '리즈',
    '이서'
];

console.log(iveMembersArray);

/**
 * Index
 * 
 * 0부터 시작한다.
 * 1씩 올라간다.
 */

console.log(iveMembersArray[0]);
console.log(iveMembersArray[1]);
console.log(iveMembersArray[2]);
console.log(iveMembersArray[3]);
console.log(iveMembersArray[4]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = 'CodeFactory';
console.log(iveMembersArray);
console.log(typeof(iveMembersArray));
