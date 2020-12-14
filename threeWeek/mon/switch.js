/* 과제 1) switch문을 if문으로 변환하기 : if-else문을 사용하여 변환
switch (browser) {
  case 'Edge':
    alert( "Edge를 사용하고 계시네요!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
    break;

  default:
    alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
}
*/
if(browser == 'Edge'){
    alert('Edge를 사용하고 계시네요!');
}else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera'){
    alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
}else{
    alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
}

/* 과제 2) if문을 switch문으로 변환하기 : 사용하는 코드
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/

let a = +prompt('a?','');
switch (a){
    case 0:
        alert(0);
        break;

    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;


}



/*  switch문 : 사용한 비교법은 특정 변수를 다양한 상황에서 비교할 수 있게 해줌, 코드 자체가 비교 상황을 잘 설명한다는 장점
        - 하나 이상의 case 문으로 구성, 대개 default문도 있지만 이는 필수가 아님

                switch(x){
                    case 'value1': // if(x==='value1')
                        ...
                        [break]
                    case 'value2': // if(x==='value2')
                        ...
                        [break]
                    default:
                        ...
                        [break]
                }
            
            -> 변수 x의 값과 첫 번째 case문의 값 'value1'를 일치 비교한 후, 두 번째 case문의 값 'value2'와 비교
            -> case문에서 변수 x의 값과 일치하는 값을 찾으면 해당 case문의 아래의 코드가 실행, 이때 break문을 만나거나 switch문이 끝나면 코드도 멈춤
            -> 값과 일치하는 case문이 없다면, default문 아래의 코드가 실행(default문이 있는 경우)

                let a = 2 + 2;
                switch (a) {
                case 3:
                    alert( '비교하려는 값보다 작습니다.' );
                    break;
                case 4:
                    alert( '비교하려는 값과 일치합니다.' );
                    break;
                case 5:
                    alert( '비교하려는 값보다 큽니다.' );
                    break;
                default:
                    alert( "어떤 값인지 파악이 되지 않습니다." );
                }
            
            -> switch / case 문의 인수엔 어떤 표현식이든 올 수 있다.

                let a = "1";
                let b = 0;

                switch (+a) { -> 문자의 형태를 숫자로 변경
                case b + 1: 
                    alert("표현식 +a는 1, 표현식 b+1는 1이므로 이 코드가 실행됩니다.");
                    break;
                    -> 0+1 의 형태로 숫자로 변경된 1과 동일하여 위의 alert이 발생

                default: 
                    alert("이 코드는 실행되지 않습니다.");
                    -> 문자열 그대로 비교하는 형태거나 b의 값이 0이 아니면 위의 alert이 발생
                }

        * 여러 개의 case 문 묶기

                let a = 3;
                switch (a) {
                case 4:
                    alert('계산이 맞습니다!');
                    break;

                case 3: // (*) 두 case문을 묶음
                case 5:
                    alert('계산이 틀립니다!');
                    alert("수학 수업을 다시 들어보는걸 권유 드립니다.");
                    break;

                default:
                    alert('계산 결과가 이상하네요.');
                }

                -> break문이 없는 경우엔 조건에 상관없이 다음 case문이 실행되는 부작용이 발생, 위 예시 처럼
                   case 3이 참인 경우엔 case 5의 break문을 만날 때까지 코드는 계속 진행

        * 자료형의 중요성 
            - switch문은 일치 비교로 조건을 확인, 비교하려는 값과 case문의 값의 형과 값이 같아야 해당 case문이 실행

                    let arg = prompt("값을 입력해주세요.");
                    switch (arg) {
                    case '0':
                    case '1':
                        alert( '0이나 1을 입력하셨습니다.' );
                        break;
                -> 0이나 1을 입력한 경우엔 첫 번째 alert문이 실행

                    case '2':
                        alert( '2를 입력하셨습니다.' );
                        break;
                -> 2를 입력한 경우엔 두 번째 alert문이 실행

                    case 3:
                        alert( '이 코드는 절대 실행되지 않습니다!' );
                        break;
                    default:
                        alert( '알 수 없는 값을 입력하셨습니다.' );
                    }
                -> 3을 입력하였더라도 세 번재 alert문은 실행되지 않음, 앞서 배운 바와 같이 prompt 함수는 상용자가 입력 필드에 기재한 값을
                   문자열로 변환해 반환하기 때문에 숫자 3을 입력하더라도 prompt 함수는 문자열 '3'을 반환
                   세 번째 case문에선 사용자가 입력한 값과 숫자형 3을 비교하므로 형 자체가 다르기 때문에 case 3의 코드는 실행되지 않고 default문이 실행



*/