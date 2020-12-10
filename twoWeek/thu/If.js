// 과제 1) if와 문자열 0 : alert은 실행될것인가
if("0"){
    alert('Hello');//실행
}

// 과제 2) 자바스크립트의 공식 이름
let jscript = prompt("자바스크립트의 공식 이름은 무엇일까요?", '');
if(jscript == 'ECMAScript'){
    alert('정답입니다!');
}else{
    alert('모르셨나요? 정답은 ECMAScript입니다!');
}

// 과제 3) 입력받은 숫자의 부호 표시하기 : if...else와 프롬프트 대화상자를 사용해 사용자로 부터 숫자 하나를 입력받고 결과를 alert창에 출력
let number = prompt("숫자를 입력하세요!",'');
if(number > 0 ){
    alert(1);
}else if(number < 0){
    alert(-1);
}else{
    alert(0);
}

// 과제 4) if 를 ? 로 교체 : if문을 보고 조건부 연산자로 코드 수정
let result = a + b < 4 ? '미만' : '이상';

// 과제 5) if...else 를 ? 로 교체 : if...else문을 보고 조건부 연산자로 코드 수정
let login= prompt("login", '');
let message = (login == '직원') ? "안녕하세요!" :
    (login == '임원') ? "환영합니다!" :
    (login == '') ? "로그인이 필요합니다.":
    '';
alert(message);



/*  if와 '?'를 사용한 조건 처리
    - 조건문(conditional statements) : 프로그램 내에서 주어진 표현식의 결과에 따라 별도의 명령을 수행하도록 제어하는 실행문
        * if문, if/else문, if/else if/else문, switch문 으로 구성  
    * 조건에 따라 다른 행동을 취해야 할 때, if문과 물음표 연산자라고도 불리는 조건부 연산자 ? 를 사용

    'if'문 : if(...)문은 괄호 안에 들어가는 조건을 평가하는데, 그 결과가 true이면 코드 블록이 실행(불린형으로 변환)
        - if문은 표현식의 결과가 참(true)이며 주어진 실행문을 실행하며, 거짓(false)이면 아무것도 실행하지 않음

        let year = prompt('EMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');
        if( year == 2015) alert('정답입니다!');
            -> if문의 조건이 참일 경우 실행되는 구문이 추가되면 중괄호 {} 를 사용하여 코드를 블록으로 감싸주면 코드 가독성이 증가한다.
                if(year == 2015){
                    alert("정답입니다!");
                    alert("아주 똑똑하시네요!");
                }

        * 형 변환 챕터에서 배운 형 변환 규칙 
            - 숫자 0, 빈 문자열 "", null, undefined, NaN은 불린형으로 변환 시 모두 false가 됨, 이런 값들을 falsy(거짓같은)값이라고 부름
            - 이 외의 값은 불린형으로 변환시 true가 되므로 truthy(참 같은)값이다.

            if(0){ -> 0은 falsy
                ...
            }

            if(1){ -> 1은 truthy
                ...
            }

            let cond = (year == 2015); -> 동등 비교를 통해 true/false 여부를 결정
            if (cond) {
                ....
            }

    else 절 : if문엔 else 절을 붙일 수 있으며, else 뒤에 이어지는 코드 블록은 조건이 거짓일 때 실행
            
        let year = prompt('EMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');
        if(year == 2015){
            alert("정답입니다.");
        }else{
            alert('오답입니다!'); -> 2015 이외의 값을 입력한 경우
        }

    else if로 복수 조건 처리 : 유사하지만 약간씩 차이가 있는 조건 여러 개를 처리해야할 때, else if를 사용
        let year = prompt('EMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');
        if(year < 2015){
            alert("숫자를 좀 더 올려보세요.");
        }else if(year > 2015){
            alert('숫자를 더 내려보세요.'); 
        }else{
            alert('정답입니다.');
        }
            * else if 블록을 더 붙이는 것도 가능, 마지막에 붙는 else는 필수가 아닌 선택

    조건부 연산자 '?' : 조건에 따라 다른 값을 변수에 할당해줘야 할 때가 있음

                let accessAllowed;
                let age = prompt('나이를 입력해 주세요.', '');

                if(age > 18){
                    accessAllowed = true;
                } else{
                    accessAllowed = false;
                }
                alert(accessAllowed);


            ->    let accessAllowed = (age > 18) ? true : false; 

        * 물음표(question mark) 연산자라고도 불리는 조건부 연산자를 사용하여 위의 코드를 짧고 간결하게 변형
            - let result = condition ? value1 : value2; ->condition이 truthy라면 value1이 그렇지 않으면 value2가 반환
            - 위의 물음표 연산자를 통해 우선순위 규칙에 따라 비교 연산 'age > 18 '이 먼저 실행,조건문을 괄호로 감쌀 필요가 없다
              괄호가 있으나 없으나 차이는 없지만, 코드의 가독성 향상을 위해 괄호를 사용하길 권유

            * 주의) 비교 연산자 자체가 true나 false를 반환하기 때문에 위 예시에서 물음표 연산자를 사용하지 않아도 된다.
                let accessAlloewd = age > 18;

    다중 '?' : 물음표 연산자 ? 를 여러 개 연결하면 복수의 조건을 처리
                let age = prompt('나이를 입력하세요.', 18); 
                let message = (age<3) ? '아기야 안녕?' : -> 첫 물음표 조건문 age < 3 검사 true면 아가야 안녕, false면 다음조건 이동
                    (age < 18 ) ? '안녕!' : -> age < 18을 검사, true면 안녕!, false면 다음조건 이동
                    (age < 100) ? '환영합니다!' : -> age < 100을 검사, true면 환영합니다!, false면 나이가 아주 많으시거나, 나이가.... 문장 출력
                    ('나이가 아주 많으시거나, 나이가 아닌 값을 입력하셨군요!');
                alert(message);

            * if...else를 사용하여 변경
                if(age<3){
                    message = '아가야 안녕?';
                }else if(age < 18){
                    message = '안녕!';
                }else if(age < 100){
                    message = '환영합니다!';
                }else{
                    message = '나이가 아닌 값을 입력 하셨군요!';
                }
            
    부적절한 '?' : 물음표 ? 를 if 대용으로 쓴느 경우가 종종 있찌만 코드를 작성하면 가독성이 떨어질 수도 있다.
                
                let company = prompt('자바스크립트는 어떤 회사가 만들었을까요?'.'');
                -> 물음표식
                    (company == 'Netscape') ?
                        alert('정답입니다!') : alert('오답입니다!');
                -> if문식
                    if(company == 'Netscape'){
                        alert('정답입니다!');
                    }else{
                        alert('오답입니다!');
                    }



*/