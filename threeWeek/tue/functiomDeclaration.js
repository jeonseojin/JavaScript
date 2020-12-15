




/*  함수 표현식 : 함수를 특별한 종류의 값으로 취급

            * 함수 sayHi를 함수 표현식을 사용해 정의        
                let sayHi = function() {
                alert( "Hello" );
                };

                let func = sayHi;
                // ...
        
        -> 함수 선언 방식 외에 함수 표현식(Function Expression)을 사용해서 함수를 만들 수 있다.
           “함수를 만들고 그 함수를 변수 sayHi에 할당하기”
           함수는 값이기 때문에 alert를 이용하여 함수 코드를 출력

                let sayHi = function() {
                    alert( "Hello" );
                };

                function sayHi() {
                    alert( "Hello" );
                }
                alert( sayHi ); -> 함수 코드가 문자열로 바뀌기 때문에 코드 자체가 보임

        * 변수를 복사해 다른 변수에 할당하는 것처럼 함수를 복사해 다른 변수에 할당

                function sayHi() {   
                    alert( "Hello" );
                }
            -> 함수 생성 : 함수 선언 방식을 이용해 함수를 생성, 생성한 함수는 sayHi라는 변수에 저장

                let func = sayHi;    
            -> 함수 복사 : sayHi를 새로운 변수 func에 복사, 이때 sayHi 다음에 괄호가 없다는 점에 유의
                        괄호가 있다면 func = sayHi() 가 되어 sayHi 함수 그 자체가 아닌 함수 그 자체가 아니라, 함수 호출 결과
                        (함수의 반환 값)가 func에 저장

                func(); // Hello     
                sayHi(); // Hello    
            -> sayHi(), func()로 함수를 호출 할 수 있게 됨

            ※ 끝에 세미 콜론은 왜 있는지
                - 함수 표현식은 let sayHi = ...;과 같은 구문 안에서 값의 역할, 코드 블록이 아니고 값처럼 취급되어 변수에 할당
                  모든 구문의 끝엔 세미콜론(;)을 붙이는 게 좋다. 함수 표현식에 쓰인 세미 콜론(;)은 함수 표현식 때문에 붙여진 것이 아닌
                  구문의 끝이기 때문에 붙여짐

        콜론 함수 : 함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 그 함수를 "나중에 호출(called back)"하는 것이 콜백
            - question(질문), yes('yes'라고 답한 경우 실행되는 함수), no('no'라고 답한 경우 실행되는 함수)

                    function ask(question, yes, no) {
                        if (confirm(question)) yes()
                        else no();
                    }
                    function showOk() {
                        alert( "동의하셨습니다." );
                    }
                    function showCancel() {
                        alert( "취소 버튼을 누르셨습니다." );
                    }

                -> 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨

                    ask("동의하십니까?", showOk, showCancel);

                ※ 함수 ask의 인수, showOk와 showCancel은 콜백 함수 또는 콜백이라고 불립니다.


                    function ask(question, yes, no) {
                        if (confirm(question)) yes()
                        else no();
                    }

                -> 아래의 ask(....)은 이름 없이 선언한 함수로 익명 함수(anonymous function)이다
                    ask(
                        "동의하십니까?",
                        function() { alert("동의하셨습니다."); },
                        function() { alert("취소 버튼을 누르셨습니다."); }
                    );

        * 함수 표현식 vs 함수 선언문

            - 함수 선언문 : 함수는 주요 코드 흐름 중간에 독자적인 구문 형태로 존재
                    function sum(a, b) {
                        return a + b;
                    }
                -> 함수 선언문이 정의되기 전에도 호출 가능
                   (전역 함수 선언문은 스크립트 어디에 있느냐에 상관없이 어디에서든 사용 가능)
                -> 자바스크립트의 내부 알고리즘에 의해서 스크립트는 함수 선언문이 모두 처리된 이후에서야 실행
                -> 함수가 선언된 코드 블록 안에서만 유효하기 때문에 중괄호 밖에서 선언할 경우 에러가 발생

            - 함수 표현식 : 함수는 표현식이나 구문 구성(syntax construct) 내부에 생성
                (함수가 할당 연산자 '='을 이용해 만든 할당 표현식 우측에 생성)

                    let sum = function(a, b) {
                    return a + b;
                    };
                -> 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성합니다. 따라서 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용 가능
                -> 엄격 모드에서 함수 선언문이 코드 블록 내에 위치하면 해당 함수는 블록 내 어디서든 접근할 수 있음, 
                  하지만 블록 밖에서는 함수에 접근하지 못함

                

                    let age = prompt("나이를 알려주세요.", 18);

                    let welcome; -> if문 밖에 선언한 변수

                    if (age < 18) {
                        welcome = function() { -> welcome에 함수 표현식으로 만든 함수를 할당
                            alert("안녕!");
                        };
                    } else {
                        welcome = function() {
                            alert("안녕하세요!");
                        };
                    }
                    welcome(); -> 제대로 동작합니다.

                -> 위의 코드를 물음표 연산자 ?를 사용하면 위 코드를 좀 더 단순화

                    let age = prompt("나이를 알려주세요.", 18);
                    let welcome = (age < 18) ?
                        function() { alert("안녕!"); } :
                        function() { alert("안녕하세요!"); };

                    welcome(); // 제대로 동작합니다.

            * 함수 선언문과 함수 표현식
                - 함수 선언문을 이용해 함수를 선언하는 걸 먼저 고려, 함수 선언문으로 함수를 정의하면, 함수가 선언되기 전에 호출할 수 있어서 코드 구성
                  을 자유롭게 할 수 있음(가독성↑ let f = function(…) {…}보다 function f(…) {…})


        ※ 요약 
            * 함수는 값이다. 따라서 함수도 값처럼 할당, 복사, 선언할 수 있다.
            * 함수 선언문 박식으로 함수를 생성하면, 함수가 독립된 구문 형태로 존재
            * 함수 표현식 방식으로 함수를 생성하면, 함수가 표현식의 일부로 존재
            * 함수 선언문은 코드 블록이 실행되기도 전에 처리, 따라서 블록 내 어디서든 활용 가능
            * 함수 표현식은 실행 흐름이 표현식에 다다랐을 때 만들어짐
             
            - 함수를 선언해야 한다면 함수가 선언되기 이전에도 함수를 활용할 수 있기 때문에, 함수 선언문 방식을 따르는 게 좋다
            - 함수 선언 방식은 코드를 유연하게 구성할 수 있도록 해주고 가독성이 좋다
            - 함수 표현식은 함수 선언문을 사용하게 부적절할 때에 사용하는 것이 좋다. 

                        

        

*/