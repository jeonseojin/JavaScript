/* 과제 1) 객체야 안녕? 코드 한줄로 아래 문제를 각각 풀어보기
1. 빈 객체 user를 만듭니다.
    let user = new object();
    let user = {};

2. user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
3. user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
4. name의 값을 Pete로 수정해보세요.
5. user에서 프로퍼티 name을 삭제하세요.
*/
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

/* 과제 2) 객체가 비어있는지 확인하기 : 객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않으면 false를 반환해주는 함수 isEmpty(obj)를 만들어 보라
        let schedule = {};
        alert( isEmpty(schedule) ); // true
        schedule["8:30"] = "get up";
        alert( isEmpty(schedule) ); // false
    -> 위와 같이 동작하게 작성
*/
function isEmpty(obj){
    for(let key in obj){
        return false;
    }return true;
}

/* 과제 3) 프로퍼티 합계 구하기
    - 모든 팀원의 월급에 대한 정보를 담고 있는 객체가 있다고 봄

    모든 팀원의 월급을 합한 값을 구하고, 그 값을 변수 sum에 저장해주는 코드를 작성, sum엔 390이 저장
    주의: salaries가 비어있다면 sum에 0이 저장
*/ 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
alert(sum); 

/* 프로퍼터 값 두 배로 부풀리기 : 객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두 배 해주는 함수 multiplyNumeric(obj)을 만들기
    multiplyNumeric은 아무것도 반환하지 않아도 괜찮음,객체 자체를 수정하기
    힌트) typeof를 사용하면 프로퍼티 값이 숫자인지 확인

*/
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] === 'number'){
            obj[key] *= 2
        }
    }
}

// 함수 호출 전
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  alert(menu.height);
  multiplyNumeric(menu);
  
  // 함수 호출 후
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };
  alert(menu.height);




/*  원시값 : 어떤 특성 또는 방법이 없는 값 / 기본 데이터 형식 : 원시 값을 갖는 데이터

    객체 : 여러 속성을 하나의 변수에 저장할 수 있도록 해주는 데이터 타입으로 key / value pair를 저장할 수 있는 구조
           - 자바스크립트 거의 모든 면에 녹아 있는 개념이므로 자바스크립트를 잘 다루려면 객체를 잘 이해하고 있어야 한다.
           - 중괄호 {...}를 이용, 중괄호 안에는 프로퍼티(property : '키(key): 값(value)'의 형태)를 여러 개 넣을 수 있다.
             key엔 문자형, value엔 모든 자료형이 허용된다.
                ※ property 키는 프로퍼티 이름이라고 불림

                -> 빈 객체를 만드는 두 가지 방법
                    let user = new Object(); -> '객체 생성자' 문법
                    let user = {};  -> '객체 리터럴' 문법(중괄호를 이용해 객체를 선언하는 것)

        * 리터럴과 프로퍼티

            - 프로퍼티 (Property) : 객체의 속성을 나타내는 접근 가능한 이름과 활용 가능한 값을 가지는 특별한 형태

                    let user = {        -> 객체
                        name: "John",   -> 키: "name",  값: "John" -> 프로퍼티 key는 이름/식별자라 부림
                        age: 30         -> 키: "age", 값: 30,
                        "likes birds": true,  -> 복수의 단어는 따옴표로 묶어야 함, 마지막 프로퍼티 끝은 쉼표로 끝날 수도 있음
                    };
                -> 마지막 쉼표를 trailing(길게 늘어지는) 혹은 hanging(매달리는) 쉼표라고 불리며, 모든 프로퍼티가 유사한 형태를 보이기 때문에,
                   프로퍼티를 추가, 삭제, 이동하는 게 쉬워짐

                -> 프로퍼티 값 얻기
                    alert( user.name ); -> John
                    alert( user.age );  -> 30

                -> 프로퍼티를 추가(모든 자료형이 올 수 있기에 불린형 프로퍼티를 추가해봄)
                    user.isAdmin = true;

                -> delete 연산자를 사용하여 프로퍼티를 삭제
                    delete user.age;

            ※ 상수 객체는 수정될 수 있다.

                    const user = { -> 객체를 선언할 때 const를 이용하면 수정가능
                        name: "John"
                    };
                    user.name = "Pete";
                -> const는 user의 값을 고정하지만 그 내용을 고정하지 않음, user = ... 를 전체적으로 설정하려고 할 때만 오류가 발생한다.

                    alert(user.name); -> Pete
                
        * 대괄호 표기법

                    user.likes birds = true
                -> user.likes까지의 문법은 이해하지만 birds를 만나면 문법 에러가 발생
                -> 여러 단어를 조합해 프로퍼티 키를 만든 경우엔 점 표기법을 사용해 프로퍼티 값을 읽을 수 없다
                    ※ '점'은 키가 유효한 변수 식별자인 경우에만 사용, 유효한 변수 식별자엔 공백이 없어야함
                        (숫자로 시작하지 않아야하며 $와 _를 제외한 특수 문자가 없어야함)

                    let user = {};
                    user["likes birds"] = true;
                -> 49번째 줄의 코드를 넣으려면 대괄호 표기법 '["..."]'을 이용(대괄호 표기법은 키에 어떤 문자열이 있던지 상관없이 동작)
                -> 대괄호 표기법을 사용하면 아래 예시에서 변수를 키로 사용한 것과 같이 문자열뿐만 아니라 모든 표현식의 평가 결과를 프로퍼티 키로 사용
                    let key = "likes birds"; -> user["likes birds"] = true; 와 같다                

                    alert(user["likes birds"]); -> true
                    delete user["likes birds"];

            - 변수 key는 런타임에 평가되기 때문에 사용자 입력값 변경 등에 따라 값이 변경 가능, 어떤 경우든 평가가 끝난 이후의 결과가 프로퍼티 키로 사용

                    let user = {
                        name: "John",
                        age: 30
                    };
                    let key = prompt("사용자의 어떤 정보를 얻고 싶으신가요?", "name");
                    alert( user[key] );
                -> John (프롬프트 창에 "name"을 입력한 경우 / age를 입력하면 30이 출력)

        * 계산된 프로퍼티 : 객체를 만들 때 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우, 이를 계산된 프로퍼티(conputed property)라고 부름

                    let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");
                    let bag = {
                        [fruit]: 5, 
                    };
                ->  변수 fruit에서 프로퍼티 이름을 동적으로 받아 옵니다.

                    alert( bag.apple );
                -> fruit에 "apple"이 할당되었다면, 5가 출력됩니다.

        * 단축 프로퍼티

                    function makeUser(name, age) {
                        return {
                            name: name,
                            age: age,
                            // ...등등
                        };
                -> 프로퍼티들은 이름과 값이 변수의 이름과 동일
                
                    -> 프로퍼티 값 단축 구문(property value shorthand) 을 사용하면 코드를 짧게 줄일 수 있음
                        name, -> name: name 과 같음
                        age,  -> age: age 와 같음

                    -> 한 객체에서 일반 프로퍼티와 단축 프로퍼티를 함께 사용하는 것도 가능
                      name,  // name: name 과 같음
                      age: 30


                    }
                    let user = makeUser("John", 30);
                    alert(user.name); // John

        * 프로퍼티 이름의 제약사항 : 변수 이름(키)엔 'for', 'let', 'return' 같은 예약어를 사용하면 안되지만 객체 프로퍼티엔 이런 제약이 없음

                    let obj = {
                        for: 1,
                        let: 2,
                        return: 3
                -> key를 예약어로 사용
                -> key에 숫자 0을 넣으면 문자열 "0"으로 자동변환
                    };

                    alert( obj.for + obj.let + obj.return );
                -> 프로퍼티의 경우엔 제약이 없기에 1 + 2 + 3을 진행하여 6이 출력됨

            - 특별 대우를 받는 '__proto__'
                    let obj = {};
                    obj.__proto__ = 5;
                -> 숫자를 할당
                -> __proto__의 본질은 프로토타입 상속에서 어떻게 해결할 수 있을지에 대해선 프로토타입 메서드와 __proto__가 없는 객체에서 다룰것임

                    alert(obj.__proto__);
                -> [object Object] - 숫자를 할당했지만 값은 객체가 됨, 의도한대로 동작하지 않음

        * in 연산자로 프로퍼티 존재 여부 확인하기 
            - 자바스크립트 객체의 중요한 특징 중 하나는 다른 언어와는 달리, 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고
              undefined를 반환한다는 것
            - 일치 연산자를 사용해서 프로퍼티 존재 여부를 알아내는 방법("=== undefined")은 꽤 잘 동작하지만 가끔 실패가 발생, 이럴 때 in을 사용하면
              프로퍼티 존재 여부를 제대로 판별할 수 있음

                    let user = {};
                    alert( user.noSuchProperty === undefined );
                -> true '프로퍼티가 존재하지 않음'을 의미
                -> 위의 코드처럼 비교하는 것 외에 in을 사용하면 프로퍼티 존재 여부를 확인 가능
                    ("key" in object 의 형태로 사용)

                    let user = { name: "John", age: 30 };
                    alert( "age" in user );
                -> user.age가 존재하므로 true가 출력(in 왼쪽엔 반드시 프로퍼티 이름이 와야함)
                    alert( "blabla" in user );
                -> user.blabla는 존재하지 않기 때문에 false가 출력(in 왼쪽엔 반드시 프로퍼티 이름이 와야함)

                    let key = "age";
                    alert( key in user );
                -> true, 변수 key에 저장된 값("age")을 사용해 프로퍼티 존재 여부를 확인

        * for ..in 반복문
            - for ..in 반복문을 사용하면 객체의 모든 키를 순회할 수 있음, for ..in은 앞서 학습했던 for(;;) 반복문과 완전 다름

                    let user = {
                        name: "John",
                        age: 30,
                        isAdmin: true
                    };

                    for (let key in user) {
                        alert( key );  // name, age, isAdmin
                        alert( user[key] ); // John, 30, true
                    }

                -> for..in 반복문에서도 for(;;)문처럼 반복 변수(looping variable)를 선언(let key)했다는 점에 주목
                -> 반복 변수명은 자유롭게 정할 수 있어 'for (let prop in obj)'같이 key 말고 다른 변수명을 사용 가능

        * 객체 정렬 방식
            -  특별한 방식으로 정렬
            - 정수 프로퍼티(integer property)는 자동으로 정렬, 그외의 프로퍼티는 객체에 추가한 순서 그대로 정렬
                -> '정수 프로퍼티’라는 용어는 변형 없이 정수에서 왔다 갔다 할 수 있는 문자열을 의미
                        

                        let codes = {
                            "49": "독일",
                            "41": "스위스",
                            "44": "영국",
                            // ..,
                            "1": "미국"
                    -> 각 숫자 앞에 +49처럼 +를 붙이게 되면 입력한 순서대로 정렬되어 출력된다.
                        };
                        for (let code in codes) {
                            alert(code); // 1, 41, 44, 49
                        }

        ※ 요약 : 객체는 몇 가지 특수한 기능을 가진 연관 배열(associative array)
            - 객체는 프로퍼티(키-값 쌍)를 저장
                * 프로퍼티 키는 문자열이나 심볼, 보통은 문자열
                * 값은 어떤 자료형도 가능
                 
            - 아래와 같은 방법으로 사용하면 프로퍼티에 접근 가능
                * 점 표기법 : obj.property
                * 대괄호 표기법 obj["property"]. 대괄호 표기법을 사용하면 obj[varWithKey]같이 변수에서 키를 가져올 수 있음
                
            - 객체엔 다음과 같은 추가 연산자를 사용
                * 프로퍼티를 삭제하고 싶을 때 : delete obj.prop
                * 해당 key를 가진 프로퍼티가 객체 내에 있는지 확인하고자 할때 : 'key' in obj
                * 프로퍼티를 나열할 때 : for (let key in obj)

            - 지금까지 순수 객체(plain object)라 불리는 일반 객체를 학습
            - 일반 객체 이외에도 다양한 종류의 객체가 있음
                * Array : 정렬된 데이터를 컬렉션을 저장할 때 쓰임
                * Date  : 날짜와 시간 정보를 저장할 때 쓰임
                * Error : 에러 정보를 저장할 때 쓰임





※ 객체의 특징

    - 객체는 변수이다. 그러나 객체에는 많은 값이 포함될 수 있다.
        (자바스크립트 변수처럼 단일 값을 포함 할 수 있다.)
    - 객체는 중괄호 표기를 이용하여 만들 수 있다.
    - 객체는 각각의 key/value에 대한 정보를 나열할 수 있다.
    - Key는 문자열 또는 기호여야 한다.
    - Value는 모든 유형이 될 수 있다.
    - 객체는 한 쌍의 key/value 뒤에 쉼표를 이용하여 그 뒤에 오는 key/value와 구분해주어야 한다.
    - 객체에서 명명된 값을 Properties라고 한다.
    - 변수는 예약어의 이름을 가질 수 없지만 객체는 어떠한 이름이어도 상관없다.
    - 객체 변수를 복사하면 참조가 복사되고 객체가 복제되지 않는다.  

※ 객체의 종류
    - 배열
    - 함수
    - 객체
    - 날짜
    - 수학
    - 정규표현식
    - Boolean은 객체일 수 있다. (new 키워드로 정의된 경우)
    - 숫자는 객체가 될 수 있다. (new 키워드로 정의된 경우)
    - 문자열은 객체가 될 수 있다. (new 키워드로 정의된 경우)
*/