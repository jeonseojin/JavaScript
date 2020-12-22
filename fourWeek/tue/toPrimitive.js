/*  객체를 원시형으로 변환하기
        - 원시형 자료가 어떻게 문자, 숫자, 논리형으로 변환되는지 알아보기
            1. 객체는 논리 평가 시 true를 반환, 단 하나의 예외도 없음
               객체는 숫자형이나 문자형으로만 형 변환이 일어난다
            2. 숫자형으로의 형 변환은 객체끼리 빼는 연산을 할 때나 수학 관련 함수를 적용할 때 발생,
               객체 Date끼리 차감하면(date1 - date2) 두 날짜의 시간 차이가 반환
               (Date에 대해선 Date 객체와 날짜에서 다룰 예정)
            3. 문자형으로의 형 변환은 대개 alert(obj)같이 객체를 출력하려고 할 때 발생

    ToPrimitive : 특수 객체 메서드를 사용하면 숫자형이나 문자형으로의 형 변환을 원하는 대로 조절 가능
        * String
            - alert 함수 같이 문자열을 기대하는 연산을 수행할 때는(객체-문자형 변환), hint가 string이 됨

                    alert(obj);
                -> 객체를 출력하려고 함

                    anotherObj[obj] = 123;
                -> 객체를 프로퍼티 키로 사용하고 있음

        * number
            - 수학 연산을 적용하려 할 때(객체 - 숫자형 변환), hint는 number가 됨

                    let num = Number(obj);
                -> 명시적 형 변환

                    let n = +obj; -> 단항 덧셈 연산
                    let delta = date1 - date2;
                -> 이항 덧셈 연산을 제외한 수학 연산

                    let greater = user1 > user2;
                -> 크고 작음 비교하기

        * default
            - 연산자가 기대하는 자료형이 확실치 않을 때 hint는 default가 됨(아주 드물게 발생)
            - 이항 덧셈 연산자 +는 피연산자의 자료형에 따라 문자열을 합치는 연산을 할 수도 있고 숫자를 더해주는 연산을 할 수 있다.
            - +의 인수가 객체일 때는 hint가 default가 됨
            - 동등 연산자 ==를 사용해 객체-문자형, 객체-숫자형, 객체-심볼형끼리 비교할 때도, 객체를 어떤 자료형으로 바꿔야 할지 확신이 안서므로
              hint는 default가 됨

                    let total = obj1 + obj2;
                -> 이항 덧셈 연산은 hint로 default를 사용

                    if(user == 1){...};
                -> obj==number 연산은 hint로 default를 사용

        ※ boolean hint는 없다. hint는 총 세 가지로 아주 간단
            내장 객체에 사용되는 규칙처럼 "default"와 "number"를 동일하게 처리,결국엔 두 종류의 형 변환(객체-문자형, 객체-숫자형)만 남음

    Symbol.toPrimitive : 객체를 원시형 값으로 바꾸기 위해 호출되는 자바스크립트 내장 심볼, 간단하게 객체에서 이 함수를 구현한다면 연산에서 형 변환 될 때,
                         주어지는 hint로 객체의 해당 값을 내보내거나 형 변환을 자유자재로 조절 할 수 있다
    
                    let user = {
                        name: "John",
                        money: 1000,
                        [Symbol.toPrimitive](hint) {
                            alert(`hint: ${hint}`);
                            return hint == "string" ? `{name: "${this.name}"}` : this.money;
                        }
                    };
                -> user 객체에 객체-원시형 변환 메서드 obj[Symbol.toPrimitive](hint)를 구현
    
    toString과 valueOf
        - toString/valueOf는 심볼이 생기기 이전부터 존해 왔던 평범한 메서드(구식이지만 형 변환을 직접 구현할 수 있음)
        - 객체에 Symbol.toPrimitive가 없으면 자바스크립트는 아래 규칙에 따라 toString이나 valueOf를 호출
            * hint가 string인 경우 : toString -> valueOf 순(toString이 있다면 toString을 호출, toString이 없다면 valueOf를 호출)
            * 그 외: valueOf -> toString 순
        - 원시값을 반환, toString이나 valueOf가 객체를 반환하면 그 결과는 무시

                    let user = {name: "John"};

                    alert(user);
                -> toString은 문자열 "[object object]"를 반환
                    alert(user.valueOf() === user);
                -> valueOf는 객체 자신을 반환 true

                    let user = {
                        name: "John",
                        money: 1000,

                -> hint가 "string"인 경우
                        toString() {
                            return `{name: "${this.name}"}`;
                        },

                -> hint가 "number"나 "default"인 경우
                        valueOf() {
                            return this.money;
                        }

                    };

    반환 타임
        - 세 개의 메서드는 'hint’에 명시된 자료형으로의 형 변환을 보장되지 않음
        - toString()이 항상 문자열을 반환하리라는 보장이 없고, Symbol.toPrimitive의 hint가 "number"일 때 항상 숫자형 자료가 반환되리라는 보장이 없다.
        - Symbol.toPrimitive는 무조건 원시자료를 반환, 그렇지 않으면 에러가 발생

    추가 형 변환
        - 상당수의 연산자와 함수가 피연산자의 형을 변환, 곱셈을 해주는 연산자 *는 피연산자를 숫자형으로 변환
        - 객체가 피연산자일 때 형 변환 과정
            1. 객체는 원시형으로 변환()
            2. 변환 후 원시값이 원하는 형이 아닌 경우엔 또 다시 형 변환이 일어남
            
                    let obj = {
                        toString() {
                            return "2";
                        }
                -> 다른 메서드가 없으면 toString에서 모든 형 변환을 처리함
                    };
                    alert(obj * 2);
                -> 객체가 문자열 "2"로 바뀌고, 곱셈 연산 과정에서 문자열 "2"는 숫자 2로 변경 -> 4

                    alert(obj + 2);
                -> 문자열이 반환되기 때문에 문자열끼리의 병합 -> 22

    ※ 요약
        - 원시값을 기대하는 내장 함수나 연산자를 사용할 때 객체-원싷ㅇ으로의 형 변환이 자동으로 일어남
        - 객체-원시형으로의 형 변환은 hint를 기준으로 세 종류로 구분
            * String    : alert같은 문자영ㄹ을 필요로 하는 연산
            * number    : 수학 연산
            * default   : 드물게 발생함
             
        연산자별로 어떤 hint가 적용되는지는 명세서에서 찾아볼 수 있다. 연산자가 기대하는 피연산자를 확신할 수 없을 때에는 hint가 
        default가 된다. 이런 경우는 아주 드물게 발생한다.

        - 내장 객체는 대개 hint가 default일 때와 number일 때를 동일하게 처리, 실무에선 hint가 default인 경우와 number인 경우를 합쳐서 처리하는 경우가 많음

        객체 - 원시형 변환에 적용되는 알고리즘
            1. 객체에 obj[Symbol.toPrimitive](hint)메서드가 있는지 찾고, 있다면 호출
            2. 1에 해당하지 않고 hint가 "string"
                    - obj.toString()이나 obj.valueOf()를 호출
            3. 1과 2에 해당하지 않고, hint가 "number"나 "default"
                    - obj.valueOf()나 obj.toString()을 호출

        * obj.toString()은 로깅이나 디버깅 목적으로도 자주 사용

*/