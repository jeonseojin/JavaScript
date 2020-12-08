/* 
- alert
alert("Hello");

- prompt
let age = prompt('나이를 입력해주세요.', undefined);
alert(`당신의 나이는 ${age}살 입니다.`);
let age1 = prompt('나이를 입력해주세요.');
alert(age1);

- confirm
let isBoss = confirm("당신이 주인인가요?");
alert( isBoss); 

  과제 : 간단한 페이지 만들기
    - 사용자에게 이름을 물어보고, 입력받은 이름을 그대로 출력해주는 페이지 만들기
*/

let username = prompt("당신의 이름은 무엇입니까?");
alert(username);

/* alert, prompt, confirm을 이용한 상호작용
    - 브라우저를 데모 환경으로 사용 중이므로 브라우저 환경에서 사용되는 최소한의 사용자 인터페이스 기능

    * alert(경고/알림창) : html을 호출하면 알림창에 미리 입력한 텍스트가 출력, alert은 리턴을 하는 값이 없어 알림용으로 사용
        alert("Hello");

    * prompt(입력창) : 사용자가 입력 필드에 기재한 문자열을 반환, 사용자가 입력을 취소한 경우 null이 반환
        - 함수가 실행되면 텍스트 메시지와 입력 필드(input field), 확인(ok) 및
          취소(cancel) 버튼이 있는 모달(페이지의 나머지 부분과 상호 작용이 불가능하다는 의미가 내포)창을 띄움
        result = prompt(title, [default]);
          result = prompt(title, [default]);
            - title : 사용자에게 보여줄 문자열
            - default : 입력 필드의 초깃값(선택값)
                ※ 인수를 감싸는 대괄호[..] 의미 : 매개변수가 필수가 아닌 선택값이라는 것을 의미

    * confirm(선택창) : 매개변수로 받은 question(질문)과 확인 및 취소 버튼이 있는 모달 창을 보여줌
                        확인 -> true, 취소 -> false
                        ※ result = confirm(question);
          let isBoss = confirm("당신이 주인인가요?");
          alert( isBoss); -> 확인 버튼을 누르면 true 출력/ 취소를 누르면 false 출력

    요약 : 브라우저는 사용자와 상호작용할 수 있는 세 가지 함수를 제공한다.
      - alert : 메시지를 보여준다
      - prompt : 사용자에게 텍스트를 입력하라는 메시지를 띄워줌과 동시에 입력 필드를 함께 제공,
                 확인을 누르면 prompt함수는 사용자가 입력한 문자열을 반환하고, 최소를 누르면 null을 반환
      - confirm : 사용자가 확인 또는 취소 버튼을 누를 때까지 메시지가 창에 보여짐,
                  아용자가 확인 버튼을 누르면 true, 취소 버튼이나 ESC를 누르면 false를 반환

      모달창이 떠 있는 동안은 스크립트의 실행이 일시 중단됨, 사용자가 창을 닫기 전까진 나머지 페이지와 상호 작용이 불가능
      - 세 함수의 두 가지 제약사항
        1. 모달 창의 위치는 브라우저가 결정하는 데, 브라우저의 중앙에 위치한다.
        2. 모달 창의 모양은 브라우저마다 다르다. 개발자는 창의 모양을 수정할 수 없다.
        
*/