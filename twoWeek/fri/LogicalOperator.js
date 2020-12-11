// 과제 1) OR 연산의 결과 예측
alert( null || 2 || undefined ); // -> 2

// 과제 2) OR 연산자의 피연산자가 alert면 결과 예측
alert( alert(1) || 2 || alert(3) );
/* -> 1 / 2  : 연산이 두 번 이루어지는 경우
    참고 내용
        - 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가
        - 각 피연산자를 불린형으로 변환(alert(1) -> 1 ), 변환 후 그 값이 true이면 연산을 멈추고 해당 피연산자의 변환 전 원래 값을 반환
    (alert(1)은 알림창으로 1이 뜨지만 값을 반환하지 않기 때문)undefined || 2 -> true로 2 반환
*/

// 과제 3) AND 연산의 결과 예측
alert( 1 && null && 2 ); // -> null

// 과제 4) AND 연산자의 피연산자가 alert인 결과 예측
alert( alert(1) && alert(2) && alert(3));
/* -> 1 / undefined
    alert(1)을 통해서 알림창 1이 뜨고 변환 후 반환되는 값이 없기 때문에 undefiend가 되면서 false로 평가가 멈춰
    알림창 1과 결과인 undefined가 뜨게 된다.
*/

// 과제 5) OR AND OR 연산자로 구셩된 표현식 결과 예측
alert( null || 2 && 3 || 4); // 2 && 3 < &&이 ||보다 우선순위이고 AND 연산자는 뒤에 오는 값을 반환하기에 3

// 과제 6) 사이 범위 확인하기 : age(나이)가 14세 이상 90세 이하에 속하는 지를 확인하는 if문을 작성
let age= 45;
if( age >= 14 && age <=90 ){
    alert("범위에 들어갑니다");
}

// 과제 7) 바깥 범위 확인하기 : age가 14세 이상 90세 이하에 속하지 않는지 확인하는 if문 / NOT ! 연산자를 사용한 답안과 안사용한 답안 두 개 
if( age < 14 || age > 90 ){
    alert("범위에 들어가지 않습니다.");
}
if(!( age >= 14 && age <=90 )){
    alert("범위에 들어가지 않습니다!");
}

// 과제 8) if 에 관한 고찰 : if(...) 안에 표현식이 있다면?
if( -1 || 0 ) alert('first'); // -> first 출력
if( -1 && 0 ) alert('second');
if( null || -1 && 1 ) alert('third'); // -> third 출력

// 과제 9) 로그인 구현 : 프롬프트(prompt) 대화상자를 이용해 간이 로그인 창 구현
let admin = prompt("아이디를 입력하세요", '');
if(admin == 'admin'){
    let pw = prompt("비밀번호를 입력하세요", '');
    if(pw == 'TheMaster'){
        alert("환영합니다!");
    }else{
        alert("인증에 실패하였습니다.");
    }
}else{
    alert('아이디 입력에 실패하셨습니다.');
}










/*  논리 연산자(Logical Operator)
        - 보통 Boolean(논리적) 값과 함께 쓰이며, 불리언 값을 반환
        * Javascript가 지원하는 논리 연산자
            - ||    : OR연선자 
            - &&    : AND 연산자
            - !     : NOT 연산자 



    ※   || (OR) : 두 피연산자가 모두 false 일 때를 제외하고는 항상 true를 반환, 피연산자가 boolean이 아닌 경우 평가를 위해 boolean으로 변환

                alert( true || true ); -> true
                alert( false || true ); -> true
                alert( true || false ); -> true
                alert( false || false ); -> false

                * 평가를 위해 boolean 형으로 변환(숫자 1은 true, 숫자 0은 false)
                    if( 1 || 0 ) { // if ( true || false ) 와 동일하게 동작
                        alert('truthy!');
                    }
            
            - OR 연산자 || 은 if문에서 자주 사용(주어진 조건 중 하나라도 참인지를 테스트하는 용도)
                
                let hour = 9;
                if( hour < 10 || hour > 18 ){
                    alert( '영업시간이 아닙니다.');
                }

                let hour = 12;
                let isWeekend = true;
                if( hour < 10 || hour > 18 || isWeekend ){
                    alert( '영업시간이 아닙니다.'); -> 주말이기 때문
                }

            - 첫 번째 truthy를 찾는 OR 연산자 '||' : 
                * OR의 추가 기능
                OR 연산자와 피연산자가 여러 개인 경우
                    
                    result = value1 || value 2 || value3;

                    * 이때, OR || 연산자의 연산 수행 순서
                        - 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가
                        - 각 피연산자를 불린형으로 변환, 변환 후 그 값이 true이면 연산을 멈추고 해당 피연산자의 변환 전 원래 값을 반환
                        - 피연산자 모두를 평가한 경우(모두 피연산자가 false로 평가되는 경우엔 마지막 피연산자를 반환
                        * 핵심) 반환 값이 형 변환을 하지 않은 원래 값이라는 것
                ※ 정리) OR '||' 연산자를 여러 개 체이닝(Chaning)하면 첫 번째 truthy를 반환, 피연산자에 truthy가 하나도 없다면 마지막 피연산자를 반환

                alert( 1 || 0 ); -> 1 (1은 truthy임)
                alert( null || 1 ); -> 1
                alert( null || 0 || 1 ); -> 1
                alert(undefined || null || 0 ); -> 0 (모두 falsy이므로, 마지막 값을 반환)

                1. 변수 또는 표현식으로 구성된 목록에서 첫 번째 truthy 얻기
                    - 데이터를 포함하거나 null/undefined가 되는 변수들을 가정하면 어떻게 첫 번째로 true가 되는 값을 갖게 되는지를 알게되는 코드

                        let firstName = "";
                        let lastName = "";
                        let nickName = "바이올렛";
                        alert( firstName || lastName || nickName || "익명" ); -> 바이올렛

                    -> 모든 변수가 falsy이면 익명이 출력됨, 하지만 nickName에 바이올렛이 입력되어 있기에 바이올렛이 출력된다.

                2. 단락 평가(short circuit evaluation) : OR 연산자 || 가 제공하는 기능
                    -> 위 설명처럼  OR 연산자는 왼쪽부터 오른쪽으로 평가해가면서 truthy를 만나면 나머지 값들을 건드리지 않은 채 평가를 멈춘다.
                       이런 프로세스를 단락 평가라고 한다
                    -> 단락 평가의 동작 방식은 두 번째 피연산자가 변수 할당과 같은 부수적인 효과(side effect)를 가지고 표현식 일 때 명확
                        true || alert("not printed");
                        false || alert("printed");
                        ※ 단락 평가는 연산자 왼쪽 조건이 falsy일 때만 명령어를 실행하고자 할 때 자주 사용


    ※   && (AND) : AND 연산자는 두 개의 &&(앤퍼센트) 기호로 표시되며 두 피연산자가 모두 참일 경우에만 true이며 그렇지 않으면 false를 반환

                alert( true && true ); -> true
                alert( false && true ); -> false
                alert( true && false ); -> false
                alert( false && false ); -> false

                -> if문과 AND 연산자 활용
                    let hour = 12;
                    let minute = 30;
                    if( gour == 12 && minute == 30 ){
                        alert( '현재 시각은 12시 30분입니다.' );
                    }
                
                -> if ( 1 && 0 ){ -> 피연산자가 숫자형이지만 논리형으로 바뀌어 true && false가 됨
                    alert("if문 안에 falsy가 들어가 있으므로 alert창은 실행되지 않습니다.");
                }

            - 첫 번째 falsy를 찾는 AND 연산자 '&&'

                result = value1 && value2 && value3;

                * AND 연산자 &&의 동작 순서
                    - 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가
                    - 각 피연산자는 불린형으로 변환, 변환 후 값이 false이면 평가를 멈추고 해당 피연산자의 변환 전 원래 값을 반환
                    - 피연산자 모두가 평가되는 경우(모두 피연산자 true로 평가되는 경우)엔 마지막 피연산자가 반환
                    * 정리) 피연산자에 falsy가 없다면 마지막 값을 반환

                * 알고리즘은 OR연산자와 유사, 차이점은 AND 연산자가 첫 번째 falsy가 없다면 마지막 값을 반환하는 반번 OR은 첫 번째 truthy를 반환

                    - 첫 번째 피연산자가 truthy이면, AND는 두 번째 피연산자를 반환
                        alert( 1 && 0 ); -> 0
                        alert( 1 && 5 ); -> 5
                    - 첫 번째 피연산자가 falsy이면, AND는 첫 번째 피연산자를 반환하고, 두 번째 피연산자는 무시
                        alert( null && 5 ) -> null
                        alert( 0 && "아무거나 와도 상관없습니다."); -> 0

                * 피연산자 여러 개를 연속해서 전달, 첫 번째 falsy가 어떻게 반환되지의 예시
                    alert( 1 && null && 3 ); -> null

                * AND 연산자의 피연산자가 모두 truthy이기 때문에 마지막 피연산자가 반환
                    alert( 1 && 2 && 3 ); -> 마지막 값인 3

                - if를 ||, &&로 대체하지 말기
                    
                    * &&
                        let x = 1;
                        ( x > 0 ) && alert( '0보다 큽니다!' );
                    -> ( x > 0 )이 참인 경우에만 alert문이 실행

                    *if 문
                        let x = 1;
                        if ( x > 0 ) alert( '0보다 큽니다!' );
                    -> 

    ※ !(NOT) : 피연산자를 boolean 유형으로 변환하여 true / false로 값을 나눈 후 그 결과값의 반대값을 반환
            
                result = !value;
            
            * NOT 연산자는 인수를 하나만 받고, 다음 순서로 연산 수행
                - 피연산자를 불린형(true / false)으로 변환, 그 변환된 값의 역을 반환

                    alert( !true ); -> false
                    alert( !0 ); -> true

        - NOT을 두 개 연달아 사용(!!)하면 값을 불린형으로 변환할 수 있다.

                alert( !!"non-empty string");
                 -> true : "non-empty string"는 alert으로 바로 출력할 경우에는 non-empty string로 출력되며 
                            문자열은 true이기에 !을 하면 false, !!을 하게 되면 다시 true가 된다.
                alert( !!null ); -> false


        ※ NOT 연산자의 우선순위는 모든 논리 연산자 중에서 가장 높기 때문에 항상 &&, ||보다 먼저 실행, &&의 우선순위가 ||보다 높다
                - ! > && > ||



*/