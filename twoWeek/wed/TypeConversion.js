


/*  형 변환(type conversion) : 함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환한다.
        - Number() : 숫자로 변환
        - String() : 문자열로 변환
        - Boolean() : 불린 값으로 변환
    * 명시적 변환 : 전달받은 값을 의도를 갖고 원하는 타입으로 변환
    * 암시적 변환 : Javascript 엔진이 필요에 따라 자동으로 데이터타입을 변환시키는 것

    문자형으로 변환 : 문자형의 값이 필요할 때 발생
        - laert 메서드는 매개변수로 문자형을 받기 때문에, laert(value)에서 value는 문자형이어야 한다. 다른 형의 값을 
          전달 받으면 이 값은 문자형으로 자동 변환된다.
        - String(value) 함수를 호출해 전달받은 값을 문자열로 변환 할 수 있다.

            let value  = true;
            alert(typeof value); -> boolean

            value = String(value); -> 변수 value엔 문자열 "true"가 저장
            alert(typeof value); -> String

            * false는 문자열 "false", null은 문자열 "null"로 변환되는 것과 같이 문자형으로의 변환은 대부분 예측 가능한 방식으로 발생
    
    숫자형으로 변환 : 수학과 관련된 함수와 표현식에서 자동으로 발생
        - alert( "6" / "2" ) -> 3의 형태로 문자열이 숫자형으로 자동변환 된 후 연산 수행
        - Number(value) 함수를 사용하면 주어진 값(value)을 숫자형으로 명시해서 반환
        - 숫자형 값을 사용해 무언가를 하려고 하는데 그 값을 문자 기반 폼(form)을 통해 입력받는 경우엔, 명시적 형변환이 필수
        
            let str = "123";
            alert(typeof str); ->String
            
            let num = Number(str); ->문자열 "123"이 숫자 123으로 변환
            alert(typeof num); -> number

        - 숫자 이외의 글자가 들어가 있는 문자열을 숫자형으로 변환하려고 하면, 그 결과는 NaN이 발생

            let age = Number("임의의 문자열 123");
            alert(age); -> 형 변환이 실패 NaN

        전달받은 값             형 변환 후
        undefined               NaN
        null                    0
                * undefined와 null은 숫자형으로 변환시 결과가 다른점 유의
        true and false          1과 0
        string                  문자열의 처음과 끝 공백 제거, 공백 제거 후 남아있는 문자열이 없다면 0, 그렇지 않다면 문자열에서 숫자를 읽음
                                변환 실패시 NaN이 반환됨
    
            -> 예시
            alert( Number("    123    ")); -> 123
            alert( Number "123z"); -> NaN(문자 "z"를 숫자로 변환 실패)
            alert( Number (true)); -> 1
            alert( Number (false)); -> 0
            
        불린형으로 변환 : 논리 연산을 수행할 때 발생하며, boolean(value)를  호출하면 명시적을 불리언으로의 형 변환을 발생
            * 불린형 변환 시 규칙
                - 숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 비어있다고 느껴지는 값들은 false로 변환
                - 그 외의 값은 true로 변환

            -> 예시
            alert( Boolean(1) ); -> 숫자 1 (true)
            alert( Boolean(0) ); -> 숫자 0 (false) / alert( boolean("0") );의 문자열 "0"은 true로 변환
            alert( Boolean("hello") ); -> 문자열 (true)
            alert( Boolean("") ); -> 빈 문자열 (false)



    * 요약 : 문자, 숫자, 논리형으로의 형 변환은 자주 일어나는 형 변환

        - 문자형으로 변환 : 무언가를 출력할 때 주로 발생, String(value)을 사용하면 문자형으로 명시적 변환이 가능
        - 숫자형으로 변환 : 수학 관련 연산시 주로 발생, Number(value)로도 형 변환
        - 불린형으로 변환 : 논리 연산시 발생, Boolean(Value)로 변환



*/