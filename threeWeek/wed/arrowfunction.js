/* 과제 1) 화살표 함수로 변경하기 : 아래 함수를 화살표 함수로 변경
        function ask(question, yes, no) {
            if (confirm(question)) yes()
            else no();
        }

        ask(
            "동의하십니까?",
            function() { alert("동의하셨습니다."); },
            function() { alert("취소 버튼을 누르셨습니다."); }
        );
*/
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask (
    "동의하십니까?",
    () => alert("동의하셨습니다."),
    () => alert("취소 버튼을 누르셨습니다.")
)


/*  화살표 함수 기본(함수 표현식보다 단순하고 간결한 문법으로 함수를 만들 수 있는 방법)
        - function 표현에 비해 구문이 짧고 자신의 this, arguments, super 또는 new.target을 바인딩 하지 않는다.
        - 화살표 함수는 항상 익명이며, 함수 표현은 메소드 함수가 아닌 곳에 가장 적합, 생성자로서 사용할 수 없다.

                let func = (arg1, arg2, ...argN) => expression
            -> arg1..argN를 받는 함수 func이 만들어짐
            -> func는 화살표(=>) 우측의 표현식(expression)을 평가하고, 평가 결과를 반환
            -> 아래 함수의 축약 버전이다.
                let func = function(arg1, arg2, ...argN) {
                    return expression;
                };

            -> 구체적 예시

                let sum = (a, b) => a + b;
                ->위 화살표 함수는 아래 함수의 축약 버전입니다.
                    let sum = function(a, b) {
                        return a + b;
                    };
                alert( sum(1, 2) ); -> 3

        - 인수가 하나밖에 없다면 인수를 감싸는 괄호를 생략할 수 있다(생략하면 코드 길이를 더 줄일 수 있다)
                let double = function(n) { return n * 2 } 
            -> 위의 코드를 축약하여 let double = n => n * 2;

        - 인수가 하나도 없을 땐 괄호를 비워놓으면 된다(괄호를 생략할 수 없다)
                let sayHi = () => alert("안녕하세요!");
        
        - 화살표 함수는 함수 표현식과 같은 방법으로 사용할 수 있다(아래의 예시는 함수를 동적으로 만들 수 있다)
                let age = prompt("나이를 알려주세요.", 18);
                let welcome = (age < 18) ?
                    () => alert('안녕') :
                    () => alert("안녕하세요!");
                welcome();
            -> 화살표 함수를 처음 접하면 가독성이 떨어짐(익수하지 않아서)
            ->함수 본문이 한 줄인 간단한 함수는 화살표 함수를 사용해서 만드는게 편리(타이핑을 적게 해도 함수를 만들 수 있다는 장점이 있음)

    * 본문이 여러 줄인 화살표 함수
        - 평가해야 할 표현식이나 구문이 여러 개인 함수가 있을 때, 화살표 함수 문법은 중괄호 안에 평가해야 할 코드를 넣어서 사용하고 return 지시자를
          사용해 명시적으로 결괏값을 반환해 준다.
        
                let sum = (a, b) => {  -> 중괄호는 본문 여러 줄로 구성되어 있음을 알려줍니다.
                    let result = a + b;
                    return result; -> 중괄호를 사용했다면, return 지시자로 결괏값을 반환해주어야 합니다.
                };
                alert( sum(1, 2) ); // 3

        ※ 지금까진 간결함이라는 특징을 중심으로 화살표 함수에 대해 알아봄, 하지만 화살표 함수는 여기서 소개한 기능 이외에도 다른 기능이 지원됨
            -> 뒤에 다시배움

    ※ 요약 : 화살표 함수는 본문이 한 줄인 함수를 작성할 때 유용, 본문이 한 줄이 아니라면 다른 방법으로 화살표 함수를 작성해야 함.
        - 중괄호 없이 작성 : (...args) => expression – 화살표 오른쪽에 표현식, 함수는 이 표현식을 평가하고, 평가 결과를 반환
        - 중괄호와 함께 작성 : (...args) => { body } – 본문이 여러 줄로 구성되었다면 중괄호를 사용, 반드시 return 지시자를 사용해 반환 값을 명기해 주어함



*/