


/*  Null 병합 연산자(Nullsh Coalescing Operator) : '??'를 사용하면 짧은 문법으로 여러 피연산자 중 그 값이 '확정되어 있는' 변슈를 찾을 수 있다.
        - 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.
            * 논리 연산자 OR(||)과 달리 왼쪽 피연산자가 null 또는 undefined가 아닌 falsy 값이면 반환된다.
                    a ?? b 
                -> a 가 null/undefined가 아니면 a, 맞으면 b를 반환

                let firstName = null;
                let lastName = null;
                let nickName = "Supercoder";

            -> null이나 undefined가 아닌 첫 번째 피연산자
                alert(firstName ?? lastName ?? nickName ?? "Anonymous"); -> Supercoder


            ※ '??'와 '||'의 차이
                - || 는 첫 번째 truthy 값을 반환
                - ?? 는 첫 번째 정의된(defined) 값을 반환

            -> 예시

                let height = 0;
                alert(height || 100 || 15); -> 100
                alert(height ?? 100 ); -> 0

        - ?? 의 연산자 우선 순위는 꽤 낮음 (=, ?보다는 먼저이며, 다른 대부분의 연산자보다는 나중에 평가)
            * 복잡한 표현식 안에서 ?? 를 사용해 값을 하나 선택할 땐 괄호를 추가하는 것이 좋다

                let height = null;
                let width = null;
            //괄호 추가

                let area = (height ?? 100 ) * (width ?? 50 );
            -> 두 값이 모두 null이기 때문에 오른쪽의 값을 반환 100 * 50의 결과
            -> * 가 ??보다 우선순위가 높기 때문에 *가 먼저 실행된다

                alert(area); -> 5000
        
        ※ 자바스크립트 언어에서 규정한 제약사항
            - 안정성 관련 이슈 때문에 ?? 는 &&, ||과 함께 사용하지 못한다.

                let x = 1 && 2 ?? 3; -> 에러발생 : SyntaxError: Unexpected token '??'
                let x = (1 && 2) ?? 3; -> 괄호를 사용하면 정상 작동


    ※ 요약 
        - null 병합 연산자 ?? 를 사용하면 피연산자 중 값이 할당된 변수를 빠르게 찾을 수 있다.
            ?? 는 변수에 기본값을 할당하는 용도로 사용

                height = height ?? 100;
            -> height가 null이나 undefined 인 경우, 100을 할당
        
        - ?? 의 연산자 우선순위는 대다수의 연산자보다 낮고 ? 와 = 보다는 높다
        - 괄호 없이 ?? 를 ||, &&과 함께 사용하는 것은 금지되어 있다.










*/