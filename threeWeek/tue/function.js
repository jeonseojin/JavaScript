/* 과제 1) else 는 정말 필요한가 -> else를 제거해도 동일결과
    매개변수 age가 18보다 큰 경우 true를 반환
    function checkAge(age) {
        if (age > 18) {
            return true;
        } else {
            // ...
            return confirm('보호자의 동의를 받으셨나요?');
        }
    }
*/
function checkAge0(age) {
    if (age > 18) {
      return true;
    } 
      return confirm('보호자의 동의를 받으셨나요?');
  }
let age = prompt('나이','');
checkAge0(age);


/* 과제 2) ? , || 사용하여 함수 다시 작성
    - 

        function checkAge(age) {
            if (age > 18) {
                return true;
            } else {
                return confirm('보호자의 동의를 받으셨나요?');
            }
        }
*/
// 물음표 연산자 사용 (?)
function checkAge1(age) {
    return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?');
}

// OR 사용(||)
function checkAge2(age) {
    return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
}

/* 과제 3) min(a, b) 함수 만들기 : a와 b 중 작은 값을 반환해주는 함수, min(a,b)을 만들기
        min(2, 5) == 2
        min(3, -1) == -1
        min(1, 1) == 1
*/
function min(a,b){
    return (a < b) ? a : b;
}
let a = 3;
let b = -2;
alert(min(a,b));

/* 과제 4) pow(x,n) 함수 만들기
    - x의 n제곱을 반환해주는 함수, pow(x,n)를 만들어보세요. x의 n 제곱은 x를 n번 곱하는지
        pow(3, 2) = 3 * 3 = 9
        pow(3, 3) = 3 * 3 * 3 = 27
        pow(1, 100) = 1 * 1 * ...* 1 = 1

    -> 프롬프트 대화상자를 띄워 사용자로부터 x와 n을 입력받고 pow(x,n)의 반환 값을 보여주는 코드를 작성
 */
function pow(x,n){
    let result = x;
    for(let i=1; i < n; i++){
        result *= x;
    } 
    return result;
}
let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`${x}의 ${n} 제곱은 될 수 없습니다.`);
} else {
  alert( pow(x, n) );
}







/*  함수(function)
        - 프로그램을 구성하는 주요 '구성 요소(building block)', 함수를 이용하면 중복 없이 유사한 동작을 하는 코드를 여러 번 호출
            * alert(message), prompt(message, default), confirm(question)과 같은 내장 함수 사용

        * 함수 선언(function declaration) : 함수 선언문
    
            function showMessage(){ ※ 함수 구성하는 코드의 모임인 '함수 본문'을 중괄호로 감싸 줌
                alert('안녕하세요');
            }
            showMessage();
            showMessage();

            -> function 키워드, 함수 이름, 괄호로 둘어싼 매개 변수를 차례로 써주면 함수를 선언, 위 함수에는 매개변수가 없는데
               만약 매개변수가 여러 개 있다면 각 매개변수를 콤마로 구분해준다
            -> showMessage()로  함수를 호출하면 함수 본문이 실행, 두 번 호출했으므로 alert 창이 두 번 뜸
            -> 함수의 주요 용도 중 하나는 중복 코드를 피하기 위함, alert 창에 보여줄 메시지를 바꾸거나 메시지를 보여주는 방식 자체를
               변경하고 싶다면, 함수 본문 중 출력에 관여하는 코드 딱 하나만 수정

        * 지역 변수 : 함수 내에서 선언한 변수인 지역 변수(local variable)는 함수 안에서만 접근
        
            function showMessage(){
                let massge = "안녕하세요!"; -> 지역변수
                alert(message);
            }
            showMessage(); -> 안녕하세요!
            alert(message); -> 함수 내 지역 변수이기 때문에 에러 발생

        * 외부 변수 : 함수 내부에서 함수 외부의 변수인 외부 변수(outer variable)에 접근할 수 있다.

            let userName = 'John';
            function showMessage(){
                userName = "Bob"; -> 외부 변수를 수정
                let message = 'Hello, ' + userName;
                alert(message);
            }
            alert(userName); -> 함수 호출 전으로 John이 출력
            showMessage(); -> 지역변수를 통해 John에서 Bob으로 변경되어 Hello, Bob이 출력
            alert(userName); -> 함수에 의해 Bob으로 값이 변경

            -> userName이 아닌 let userName으로 Bob을 선언할 경우 showMessage를 출력할 경우 Bob으로 출력되며, alert(userName)으로
               function 외부에서 선언할 경우 John으로 나온다

            ※ 전역 변수 : 위의 설명처럼 함수 외부에 선언된 변수는 전역 변수(global variable)이라 하며, 같은 이름을 가진 지역 변수에
               의해 가려지지만 않는다면 모든 함수에서 접근할 수 있다.
               (변수는 연관되는 함수 내에 선언하고, 전역 변수는 되도록 사용하지 않는 것이 좋다. 다만 프로젝트 전반에서 사용되는
                데이터는 전역 변수에 저장되는 것이 유용하다)
        * 매개변수(parameter)를 이용하면 임의의 데이터를 함수 안에 전달, 인수(argument)라 불리기도함(엄밀히 말하면 같지 않음)

            function showMessage(from, text){ -> 인수: from, text
                alert(from + ': ' + text);
            }
            showMessage('Ann', 'Hello!'); -> Ann: Hello!
            showMessage('Ann', "What's up?"); -> Ann: What's up?

            * 전역변수 from이 있고 이 변수를 함수에 전달, 함수가 from을 변경하지만 변경 사항은 외부 변수 from에 반영되지 않음
              (함수는 언제나 복사된 값을 사용)
            function showMessage(from, text) {

                from = '*' + from + '*'; // "from"을 좀 더 멋지게 꾸며줍니다.

                alert( from + ': ' + text );
            }

            let from = "Ann";

            showMessage(from, "Hello"); // *Ann*: Hello

            // 함수는 복사된 값을 사용하기 때문에 바깥의 "from"은 값이 변경되지 않습니다.
            alert( from ); // Ann

        * 기본값 : 매개변수에 값을 전달하지 않으면 그 값은 undefined가 됨
        
            showMessage("Ann");
            -> showMessage(from, text) 매개변수가 2개지만 하나만 넣고 호출 시 Ann:undefined 로 출력된다.

            showMessage(from, text = "no text given") 후 showMessage("Ann"); 호출 시
            -> 기본값이 no text given가 되면서 Ann: no text 을 출력

            showMessage(from, text = anotherFunction())
            -> 위의 "no text given"보다 복잡한 표현식으로 기본값을 설정한 것
            -> anotherFunction()은 text값이 없을 때만 호출되며, 반환 값이 text의 값이 된다.

            ※ 매개변수 기본값 평가 시점
                - 자바스크립트에선 함수를 호출할 때마다 매개변수 기본값을 평가, 매개변수가 없을 때만 기본값을 평가
                    ex) 매개변수 text에 값이 없는 경우 showMessage()를 호출, anotherFunction()이 호출

        * 매개변수 기본값을 설정할 수 있는 또 다른 방법

            function showMessage(text){
                if(text === undefined){ -> undefined와 비교하여 함수 호출 시 매개변수가 생략되었지를 확인
                    text = '빈 문자열';
                }
                -> if문을 쓰는 것 대신 논리 연산자(||)를 사용할 수 있다
                -> text = text || '빈 문자열'; 의 형태와 동일

                alert(text);
            }
            showMessage(); ->빈 문자열을 출력

            - null 병합 연산자 ??를 사용하면 0처럼 falsy로 평가되는 값들을 일반 값처럼 처리할 수 있다.

                -> 매개변수 'count'가 넘어오지 않으면 'unknown'을 출력해주는 함수
                function showCount(count) {
                alert(count ?? "unknown");
                }

                showCount(0); // 0
                showCount(null); // unknown
                showCount(); // unknown

        * 반환 값 : 함수를 호출했을 때 함수를 호출한 그곳에 특정 값을 반환하게 할 수 있다. 이때 이 특정 값을 반환 값(return value)라고 한다.

                function sum(a,b){
                    return a + b; -> 지시자 return은 함수 내 어디서든 사용가능
                }
                let result = sum(1,2);
                alert(result); ->3
                -> 실행 흐름이 지시자 return을 만나면 함수 실행은 즉시 중단되고 함수를 호출한 곳에 값을 반환, 반환 값을 result에 할당

                function checkAge(age) {
                    if (age >= 18) {
                        return true;
                    } else {
                        return confirm('보호자의 동의를 받으셨나요?');
                    }
                    -> 함수 하나에 여러개의 return문이 나올 수도 있다
                }

                function showMovie(age) {
                    if ( !checkAge(age) ) { 
                        return;
                    }
                    alert( "영화 상영" );  -> checkAge(age)가 false를 반환하면 showMessage가 실행되지 않기에 alert창을 보여주지 않음
                    // ...
                }
            
            ※ return문이 없거나 return 지시자만 있는 함수는 undefined를 반환
                - return문이 없는 함수도 무언가를 반환, undefined를 반환

                function doNthing(){ }
                alert( doNothing() === undefined ); -> true
                -> return 지시자만 있는 경우도 undefined를 반환, return은 return undefined와 동일

                function doNothing() {
                    return;
                }
                alert( doNothing() === undefined ); -> true


            ※ return과 값 사이에 절대 줄을 삽입하지 말기
                return
                    (some + long + expression + or + whatever * f(a) + f(b))
                -> return문 끝에 세미콜론을 자동으로 넣기 때문에 아래의 코드처럼 적용

                return;
                    (some + long + expression + or + whatever * f(a) + f(b))

                -> 반환하고자 했던 표현식을 반환하지 못하고 아무것도 반환하지 않은 것처럼 되어버림, 표현식은 여러 줄에 걸쳐
                   작성하고 싶다면 표현식이 return 지시자가 있는 줄에서 시작하도록 작성

                return (
                    some + long + expression
                    + or +
                    whatever * f(a) + f(b)
                )
                -> 위의 형태로 표현식을 반환 할 수 있다.

        * 함수 이름짓기
            - 어떤 동작을 수행하기 위한 코드를 모아놓은 것으로 함수의 이름은 동사이다. 코드를 읽는 사람은 함수 이름만 보고도 함수가 어떤 기능을 하는지
              힌트를 얻을 수 있도록 작성하는 것이 좋다
              "show"로 시작하는 함수는 무언가를 보여주는 함수인 경우가 많다
              ※ get(값을 반환함), calc(무언가를 계산함), create(무언가를 생성함), check(무언가를 확인하고 불린값을 반환함)의 접두어를 자주 사용

                showMessage(..)     // 메시지를 보여줌
                getAge(..)          // 나이를 나타내는 값을 얻고 그 값을 반환함
                calcSum(..)         // 합계를 계산하고 그 결과를 반환함
                createForm(..)      // form을 생성하고 만들어진 form을 반환함
                checkPermission(..) // 승인 여부를 확인하고 true나 false를 반환함

            - 함수는 동작 하나만 담당해야 한다.
                - 함수 이름에 언급되어있는 동작을 정확히 수행
                - 독립적인 두 개의 동작은 독립된 함수 두 개에서 나눠서 수행할 수 있게 해야 한다.

                ※ 개발자들이 빈번히 하는 실수
                    - getAge 함수는 나이를 얻어오는 동작만 수행, alert 창에 나이를 출력해주는 동작은 이 함수에 들어가지 않는 것이 좋다
                    - createForm 함수는 form을 만들고 이를 반환하는 동작만 해야 한다. form을 문서에 추가하는 동작이 해당 함수에 들어가 있으면 좋지 않다.
                    - checkPermission 함수는 승인 여부를 확인하고 그 결과를 반환하는 동작만 해야 한다. 승인 여부를 보여주는 메시지를 띄우는 동작이 있으면
                      좋지 않다.

            - 아주 짧은 이름 : 빈번히 쓰이는 함수 중에 이름이 아주 짧은 함수
              * jQuery 프레임워크에서 쓰이는 함수 $와 Lodash 라이브러리의 핵심 함수 _ 
                    - 위의 함수들은 지금까지 소개한 함수 이름짓기에 관련된 규칙을 지키지 않으며 예외에 속한다. 함수 이름은 간결하고 함수가
                      어떤 일을 하는지 설명할 수 있게 지어야 한다.
        
        * 함수 == 주석
            - 함수는 간결하고, 한 가지 기능만 수행할 수 있게 만들어야 한다. 함수가 길어지면 함수를 잘게 쪼갤 때가 되었다는 신호로 받아들여야 한다.
              
                -> 첫 번째 showPrimes(n)에선 레이블을 사용해 반복문을 작성
                function showPrimes(n) { -> showPrimes(n) 
                    nextPrime: for (let i = 2; i < n; i++) {
                        for (let j = 2; j < i; j++) {
                            if (i % j == 0) continue nextPrime; -> true
                        }
                        alert( i ); // 소수
                    }
                }


                -> 두 번째 showPrimes(n)는 소수인지 아닌지 여부를 검증하는 코드를 따로 분리해 isPrime(n)이라는 함수에 넣어서 작성
                function showPrimes(n) {
                    for (let i = 2; i < n; i++) {
                        if (!isPrime(i)) continue;

                        alert(i);  // a prime
                    }
                }
                function isPrime(n) {
                    for (let i = 2; i < n; i++) {
                        if ( n % i == 0) return false;
                    }
                    return true;
                }

                -> isPrime 함수 이름을 보고 해당 함수가 소수 여부를 검증하는 동작을 한다는 걸 쉽게 알 수 있다. 어떤 동작을 하는지 알 수 있는 코드를
                   자기 설명적(self-describing)코드라고 부름


        ※ 요약 : 함수 선언 방식으로 함수를 만들 수 있다.
                
                function 함수이름(복수의, 매개변수는, 콤마로, 구분한다){
                    함수 본문
                }

            * 함수에 전달된 매개변수는 복사된 후 함수의 지역변수가 된다
            * 함수는 외부 변수에 접근할 수 있다. 하지만 함수 바깥에서 함수 내부의 지역변수에 접근하는 건 불가능
            * 함수는 값을 반환, 값을 반환하지 않는 경우는 반환 값이 undefined가 된다.
             
            - 깔끔하고 이해하기 쉬운 코드를 작성하려면 지역 변수와 매개변수를 활용
            - 개발자는 매개변수를 받아서 그 변수를 가지고 반환 값을 만들어 내는 함수를 더 쉽게 이해, 매개변수 없이 함수 내부에서 외부 변수를
              수정해 반환 값을 만들어 내는 함수는 쉽게 이해하기 힘듬

            * 함수 이름은 함수가 어떤 동작을 하는지 설명할 수 있다. 이렇게 이름을 지으면 함수 호출 코드만 보아도 해당 함수가 무엇을 하고 어떤 값을
              반환할지 알 수 있다.
            * 함수는 동작을 수행하기 때문에 이름이 주로 동사
            * create, show, get, check 등의 잘 알려진 접두어를 사용해 이름을 지을 수 있다. 접두어를 사용하면 함수 이름만 보고도
              해당 함수가 어떤 동작을 하는지 파악 가능

            

*/