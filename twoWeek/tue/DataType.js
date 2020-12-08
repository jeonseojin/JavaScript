let name = "Ilya";
alert(`hello ${1}`); // hello 1
alert(`hello ${"name"}`); // hello name
alert(`hello ${name}`); // hello Ilya

/*  코드 작성해보기
- 숫자형
alert(1/0);
alert(Infinity);
alert("숫자가 아님" / 2 + 5);
alert("숫자가 아님" / 2); 

- 문자형
let name = "John";
alert(`Hello,${name}!`);
alert(`the result is ${1+2}`);

- 불린형
let isGreater = 4>1;
alert(isGreater);

    자료형 : 자바스크립트에서 값은 항상 문자열이나 숫자형 같은 특정한 자료형에 속하며 8가지 기본 자료형이 있다.
        ex) 자바스크립트의 변수는 자료형에 관계없이 모든 데이터일 수 있다.(동적 타입 : dynamically typed 언어)
            따라서 변수는 숫자일수도 문자열일수도 있다.
            let message = "hello"; -> 문자열
            meddage = 123456; -> 숫자형

    * 숫자형(Number type) : 정수 및 부동소수점 숫자를 나타냄
        let n = 123;
        n = 12.345;

        - 숫자형과 관련된 연산으로 곱셈(*), 나눗셈(/), 덧셈(+), 뺌셈(-) 등이 대표적
            ※ 일반적 숫자 외에 Infinity, -Infinity, NaN과 같은 '특수 숫자 값'이 포함
             - 어떤 숫자든 0으로 나누면 무한대를 얻을 수 있다.
                alert(1/0); 
                alert(Infinity); 
                -> Infinity가 출력됨

             - NaN은 계산 중에 에러가 발생했다는 것을 나타내주는 값,
               부정확하거나 정의되지 않은 수학 연산을 사용하면 계산 중에 에러가 발생하는데 이때 NaN이 반환됨
                alert("숫자가 아님" / 2 + 5);
                alert("숫자가 아님" / 2);
                -> NaN : 문자열을 숫자로 나누면 오류가 발생
                    연산 과정 어디에선가 NaN이 반환되었다면 모든 결과에 영향을 미침

        - BigInt : 표준으로 채택된 지 얼마 안 된 자료형으로 길이에 상관없이 정수를 나타낼 수 있다.(뒤에서 다시 공부!)
                   값은 정수 리터럴 끝에 n을 붙이면 만들 수 있다. 
                   ex) const bigInt = 1234567890123456789012345678901234567890n; 의 형태로 사용
            - (253-1)(9007199254740991) 보다 큰 값 혹은 -(253-1)보다 작은 정수는 '숫자형'을 사용해 나타낼 수 없다.
            * 암호 관련 작업같이 아주 큰 숫자가 필요한 상황이거나 아주 높은 정밀도로 작업을 해야할 때 큰 숫자가 필요
        
    
    * 문자형(String)

        1. 큰따옴표(" ") : let str = "Hello";
        2. 작은따옴표(' ') : let str2 = 'Single quotes ate ok too';
            - 큰따옴표와 작은 따옴표는 기본적인 따옴표로 자바스크립트에서는 차이가 없다
        3. 역 따옴표(` `) : let phrase = `can embed anothr ${str}`;
            - 변수나 표현식을 감싼 후 ${...}안에 넣어주면 원하는 변수나 표현식을 문자열 중간에 넣을 수 있다.
                ex) let name = "John";
                    //변수를 문자열 중간에 삽입
                    alert(`Hello,${name}!`);
                    //표현식을 문자열 중간에 삽입
                    alert(`the result is ${1+2}`);
            - name / 1+2 같은 표현식을 넣을 수 있다. 문자열 중간에 들어간 변수나 표현식은 평가가 끝난 후 문자열의 일부가 됨
        ※ JavaScript는 글자(character)형은 지원하지 않음

    * 불린형(boolean:논리타입) : 긍정(true)이나 부정(false) 두 가지 값밖에 없는 자료형
        let nameFieldChecked = true; -> name field가 확인(checked)
        let ageFieldChecked = false; -> age field를 확인안함(not checked)

        - 비교 결과를 저장
            let isGreater = 4>1;
            alert(isGreater); -> true


    * null 값 : 어느 자료형에도 속하지 않는 값, 오로지 null 값만 포함하는 별도의 자료형
        - null은 다른 언어에서는 '존재하지 않는 객체에 대한 참조'나 '널 포인터(null pointer)'로 사용
        - Javascript에선 '존재하지 않는(nothing)'값, '비어 있는(empty)'값, '알 수 없는(unknown)'값으로 사용
            let age = null; -> age를 알 수 없거나 그 값이 비어있음을 보여줌

    * undefined 값 : null 값처럼 자신만의 자료형을 형성, 값이 할당되지 않은 상태를 의미
        let age;
        alert(age); -> 'undefined' 출력

        - 개발자가 변수에 직접 명시적으로 할당하는 것도 가능하나 권장하지 않음, 변수가 '비어있거나', '알 수 없는' 상태라는 걸 나타내려면
          null을 사용한다. undefined는 값이 할당되지 않은 변수의 초기값을 위해 예약어로 둔다.
    
    * 객체(object)와 심볼(symbol)
        - 객체(object)형 : 다른 자료형은 문자열이든 숫자든 한 가지만 표현할 수 있기에 원시(primitive)자료형이며,
          객체는 데이터 컬렉션이나 복잡한 개체(entity)를 표현할 수 있다.
        
        - 심볼(symbol)형 : 객체의 고유한 식별자(unique identifier)를 만들 때 사용

    * typeof 연산자 : 인수의 자료형을 반환, 자료형에 따라 처리 방식을 다르게 하고 싶거나 변수의 자료형을 빠르게 알아내고자 할 때 유용
        연산자 : typeof x
        함수 : typeof(x)

        - typeof x를 호출하면 인수의 자료형을 나타내는 문자열을 반환
            typeof undefined -> undefined
            typeof 0 -> number
            typeof 10n -> bigint
            typeof true -> boolean
            typeof "foo" -> string
            typeof Symbol("id") -< symbol
            typeof Math -> "object" (1) : math는 수학 연산을 제공하는 내장 객체로 object 출력
            typeof null -> "object" (2) : null은 별도의 고유한 자료형을 가지고 특수 값으로 객체가 아니지만,
                                          하위 호환성을 유지하기 위해 이런 오류를 수정하지 않고 남겨둔 상황
                                          언어 자체의 오류이므로 null은 객체가 아니라는 점을 유의
            typeof alert -> function (3) : 피연산자가 함수면 function을 반환(함수형은 객체형에 속함), 오래전에 만들어진 규칙이기에 하위 호완성 유지를 위해 남겨진 상태
            
        
    * 요약 
    자바스크립트의 8가지 기본 자료형
        1. 숫자형 : 정수, 부동 소수점 숫자 등의 숫자를 나타낼 때 사용한다.
        2. bigint : 길이 제약 없이 정수를 나타낼 수 있다.
        3. 문자형 : 빈 문자열이나 글자들로 이뤄진 문자열을 나타낼 때 사용(단일 문자를 나타내는 별도의 자료형은 없음)
        4. 불린형 : true, false를 나타낼 수 있다.
        5. null : null값만을 위한 독립 자료형, null은 알 수 없는 값을 의미
        6. undefined : undefined 값만을 위한 독립 자료형, 할당되지 않은 값을 의미
        7. 객체형 : 복잡한 데이터 구조를 표현할 때 사용
        8. 심볼형 : 객체의 고유 식별자를 만들 때 사용

    typeof 연산자는 피연산자의 자료형
        - typeof x 또는 typeof(x) 형태로 사용
        - 피연산자의 자료형을 문자열 형태로 반환
        - null의 typeof 연산은 "object"인데, 이는 언어상 오류임(null은 객체가 아님)
*/