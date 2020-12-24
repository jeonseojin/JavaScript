/*  과제1) 첫 글자를 대문자로 변경하기
        - str의 첫 글자를 대문자로 바꿔 반환하는 함수, ucFirst(str)를 만들어보세요. 함수 실행 결과는 아래 예시를 충족하기
                ucFirst("john") == "John";
        ※ 빈 문자열인지를 확인하는 코드
*/
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1); // toUpperCase : 소문자를 대문자 / 부분 문자열 추출 메서드
  }
  alert( ucFirst("john") );

/*  과제2) 스팸 문자열 걸러내기
        - str에 'viagra’나 'XXX’라는 문자열이 있으면 true를 반환해주는 함수 checkSpam(str)을 만들보기, 해당 문자열이 없으면 false를 반환
        - 함수는 대·소문자 관계없이 해당 단어를 걸러주어야함

        checkSpam('buy ViAgRA now') == true
        checkSpam('free xxxxx') == true
        checkSpam("innocent rabbit") == false

*/ 
function checkSpam(str) {
    let lowerStr = str.toLowerCase(); // 대·소문자 관계없이 문자열을 확인하기 위해서 소문자로 변경
    return lowerStr.includes('viagra') || lowerStr.includes('xxx'); //str에 부분 문자열 substr이 있는지에 따라 true나 false를 반환
  }
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

/*  과제3) 문자열 줄이기
        - str의 길이를 확인하고, 최대 길이 maxlength를 초과하는 경우 str의 끝을 생략 부호 ("…")로 대체해주는 함수 truncate(str, maxlength)를 만들기
        - 새로 만든 문자열의 길이는 maxlength가 되어야 함
        - 함수의 반환 값은 원하는 길이로 줄여진 문자열이 되어야 함

        truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
        truncate("Hi everyone!", 20) = "Hi everyone!"

    ※ 생략 부호는 유니코드에 등록된 독립된 글자임에 유의하여 답안을 작성해야 함, 점 세 개가 아님에 유의
*/ 
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}

/*  과제4) 숫자만 추출하기
        - 달러 표시가 먼저 나오고 그 뒤에 숫자가 나오는 문자열 "$120"가 있다고 가정하기
        - 위와 같은 문자열에서 숫자만 뽑아내는 함수 extractCurrencyValue(str)를 작성하기
    
        실행 결과 : alert( extractCurrencyValue('$120') === 120 );  -> true

*/ 
function extractCurrencyValue(str) {
    return +str.slice(1);
}


/*  문자열
        - JS엔 글자 하나만 저장할 수 있는 별도의 자료형이 없음, 텍스트 형식의 데이터는 길이에 상관없이 문자열 형태로 저장
        - JS에서 문자열은 페이지 인코딩 방식과 상관없이 항상 utf-16 형식을 따름

        ※ 따옴표
            * 문자열을 감싸는 따옴표 종류
                    - let single = '작은 따옴표';
                    - let double = "큰 따옴표";
                -> 작은 따옴표와 큰 따옴표의 기능상 차이가 없음

                    - let backticks = `백틱`;
                -> 템플릿 리터럴(template literal) : 표현식을 ${...}로 감싸고 이를 백틱으로 감싼 문자열 중간에 넣어주면 해당
                   표현식을 문자열 중간에 쉽게 삽일할 수 있다.
                    ex:     function sum(a,b){ return a + b} 일때 
                            alert(`1 + 2 = ${sum(1,2)}.`); -> 1 + 2 = 3. 의 형태로 표현
                          
                -> 백틱을 사용하면 문자열을 여러 줄에 걸쳐 작성할 수 있음
                    ex:     let guestList = `손님 :
                                * John
                                * Pete
                                * Mary
                            `;
                            alert(guestList); -> 손님 리스트를 여러 줄에 걸쳐서 보여줌(위에 보이는 형태 그대로 출력됨)

                            let guestList = "손님:
                                * John";            -> 이 경우에는 에러가 발생함(Error: Invalid or unexpected token)

            - 작은 따옴표나 큰 따옴표로 문자열을 표현하는 방식은 JS가 만들어졌을 때부터 존재, 이때 문자열을 여러 줄에 걸쳐 작성할 생각조차 못했던 시기라
              적용이 되지 않음, 백틱은 그 이후에 등장한 문법으로 따옴표보다 다양한 기능을 제공함
            - 백틱은 템플릿 함수(template function)에서도 사용, func`string` 같이 첫 번째 백틱 바로 앞에 함수 이름(func)을 써주면, 이 함수는 백틱 안의 문자열
              조각이나 표현식 평가 결과를 인수로 받아 자동으로 호출하는 기능

        ※ 특수 기호(참고 사이트 : https://ponyozzang.tistory.com/52)
            - 줄 바꿈 문자(newline character)라 불리는 특수기호 \n을 사용하면 작은 따옴표나 큰 따옴표로도 여러 줄 문자열을 만들 수 있음
                    ex:     let guestList = "손님:\n * John\n * Pete\n * Mary";
                        -> 손님 리스트를 여러 줄에 걸쳐 작성해줌(위의 백틱과 동일하게 출력됨)
                        
            - 역슬래시는 문자열 내에 따옴표를 넣을 때 사용
                    ex:     'I\'m the Walrus!'; -> I'm the Walrus!
                        -> 역슬래시 \는 문자열을 정확하게 읽기 위한 용도로 만들어지며 역할이 끝나면 사라짐(사용하지 않으면 문자열을 닫는 의미로 사용됨)
    
                            `I'm the Walrus!`   -> I'm the Walrus!
                        -> 문자열 내에서 좀 더 우아하게 따옴표를 사용하려면 따옴표 대신 백틱으로 문자열을 감싸주면 됨!!

                            `역슬래시: \\`      -> 역슬래시: \
                        -> 문자열 안에 역슬래시를 보여줘야 하는 경우 \\처럼 역슬래시를 두 개 붙여 사용

        ※ 문자열의 길이
            - length 프로퍼티엔 문자열의 길이가 저장됨
                    ex:     alert(`My\n`.length);
                        -> \n은 특수 문자 하나로 취급되기 때문에 My\n 의 길이는 3이 됨

                √ length는 프로퍼티다!
                    - JS 이외의 언어를 사용했던 개발자들은 str.length가 아닌 str.length()로 문자열의 길이를 알아내려고 하는 경우가 있음(동작하지 않음)
                      length는 함수가 아닌 숫자가 저장되는 프로퍼티라는 점에 주의, 뒤에 괄호를 붙일 필요가 없음

        ※ 특정 글자에 접근하기
            - 문자열 내 특정 위치인 pos에 있는 글자에 접근하려면 [pos]같이 대괄호를 이용하거나 str.charAt(pos)라는 메서드를 호출하면 됨(위치는 0부터 시작)

                            let str = `Hello`;
                            alert(str[0]);
                            alert(str.charAt(0));
                        -> 첫 번째 글자 H를 호출하는 코드

                            alert(str[str.length - 1]);
                        -> 마지막 글자인 o를 출력하는 코드
                           (str에 입력되어 있는 글자의 길이를 가져와서 -1을 해주면 위치가 0부터 시작되기 때문에 마지막 글자를 의미)

            - 두 접근 방식의 차이는 반환할 글자가 없을 때 발생, 접근하려는 위치에 글자가 없는 경우 []는 undefined를 charAt은 빈문자열을 반환

                            alert(str[1000]);       -> undefined
                            alert(str.charAt(1000)) -> '' 빈문자열

            - for...of를 사용하면 문자열을 구성하는 글자를 대상으로 반복 작업이 가능

                            for(let char of "Hello"){
                                alert(char);
                        -> char는 순차적으로 H, e, l, l, o가 됨
                            }

        ※ 문자열의 불변성
            - 문자열은 수정할 수 없음, 따라서 문자열의 중간 글자 하나를 바꾸려고 하면 에러가 발생

                            let str = "Hi";
                            str[0] = 'h';
                            alert(str[0]);
                        ->  Error: Cannot assign to read only property '0' of string 'Hi'의 에러 발생
                        -> 변경하는 과정에서 에러가 발생하기 때문에 alert이 동작하지 않음

            - 위의 문제를 피하려면 완전히 새로운 문자열을 하나 만든 다음, 이 문자열을 str에 할당하면 됨

                            str = 'h' + str[1];
                        -> 문자열 전체를 교환함
                            alert(str);
                        -> hi를 출력하게 됨

        ※ 대·소문자 변경하기
            - 메서드 toLowerCase()와 toUpperCase()는 대문자를 소문자로, 소문자를 대문자로 변경(케이스 변경) 시켜줌

                            alert('Interface'.toUpperCase()); -> INTERFACE
                            alert('Interface'.toLowerCase()); -> interface
                            alert('Interface'[0].toLowerCase()); -> i
                        -> 글자 하나의 케이스만 변경하는 것도 가능

        ※ 부분 문자열 찾기
            - 문자열에서 부분 문자열(substring)을 찾는 방법은 여러가지이다

            * str.indexOf : str.indexOf(substr,pos) 메서드는 문자열 str의 pos에서부터 시작해, 부분 문자열 substr이 어디에 위치하는지를 찾아줌,
                            원하는 부분 문자열을 찾으면 위치를 반환하고 그렇지 않으면 -1을 반환

                            let str = 'Widget with id';
                            alert(str.indexOf('Widget'));
                        -> str은 Widget으로 시작하므로 0

                            alert(str.indexOf('widget'));
                        -> indexOf는 대·소문자를 따지므로 원하는 문자열을 찾지 못하므로 -1

                            alert(str.indexOf('id'));
                        -> id는 첫 번째 위치에서(W'id'get) 발견되므로 1

                            alert(str.indexOf('id',2));
                        -> id가 두 번째로 등장하는 위치가 어디인지 알려줌
                        -> ('id',2)에서 2는 Wi를 제외하고 d부터 시작해서 dget with id의 문자열을 의미하여 다음으로 오는 id를 찾을 수 있게 됨
                        -> 참고 사이트 : https://javafactory.tistory.com/1585

                - 문자열 내 부분 문자열 전체를 대상으로 무언가를 하고 싶다면 반복문 안에 indexOf를 사용하면 됨, 반복문이 하나씩 돌 때마다 검색 시작 위치가
                  갱신되면서 indexOf가 새롭게 호출됨

                            let str = 'As sly as a fox, as strong as an ox';
                            let target = 'as'; -> as 찾기
                            let pos = 0;
                            while(true){
                                let foundPos = str.indexOf(target,pos);
                                if(foundPos == -1) break;
                                alert( `위치: ${foundPos}`);
                                pos = foundPos + 1;
                        -> 다음 위치를 기준으로 검색을 이어감
                            }

                    - 위와 동일한 알고리즘을 사용해 코드만 짧게 줄이기

                            let str = 'As sly as a fox, as strong as an ox';
                            let target = "as";
                            let pos = -1;
                            while((pos = str.indexOf(target, pos + 1))!=-1){
                                alert(`위치: ${pos}`);
                            }

                    * str.lastIndexOf(substr, position)
                        - str.lastIndexOf(substr, position)는 indexOf와 유사한 기능을 하는 메서드, 문자열 끝에서부터 부분 문자열을 찾는다는 점만 다름
                        반환되는 부분 문자열 위치는 문자열 끝이 기준임

                - if문의 조건식에 indexOf를 쓸 떄 주의할 점

                                let str = 'Widget with id';
                                if(str.indexOf('Widget')){
                                    alert('찾았다!');
                                }
                            -> 의도한 대로 동작하지 않음
                            -> str.indexOf('Widget')은 0을 반환하는데 if문에선 0을 false로 간주하므로 alert창이 뜨지 않음
                               따라서 부분 문자열 여부를 검사하려면 아래와 같이 -1과 비교해야함

                                if(str.indexOf("Widget")!= -1){
                                    alert("찾았다!");
                                }
                            -> 의도한 대로 동작함

            * 비트 NOT 연산자를 사용한 기법
                -  비트(bitwise) NOT 연산자 ~를 사용한 기법 하나를 소개, 비트 NOT 연산자는 피연산자를 32비트 정수로 바꾼 후(소수부는 모두 버림) 모든 비트를 반전
                   따라서 n이 32비트 정수일 때 ~n은 -(n+1)이 됨

                                alert(~2)   -> -3 : -(2+1)과 같음
                                alert(~1)   -> -2 : -(1+1)과 같음
                                alert(~0)   -> 12 : -(0+1)과 같음
                                alert(~-1)  -> 0  : -(-1+1)과 같음
                            -> 32비트 정수 n 중, ~n을 0으로 만드는 경우는 n == -1일 때가 유일
                               참고
                               -1 이외에도 ~ 연산자 적용 시 0을 반환하는 숫자는 다양, 아주 큰 숫자에 ~ 연산자를 적용하면 32비트 정수로 바뀌는 과정에서
                               잘림 현상이 발생하기 때문(ex: ~4294967295는 0임), 문자열이 아주 길지 않은 경우에만 ~ 연산자가 의도한 대로 동작하는 점 알아두기

                - indexOf가 -1을 반환하지 않는 경우를 if ( ~str.indexOf("...") )로 검사해보기, ~str.indexOf("...")를 사용하면 코드의 길이를 줄일 수 있음

                                let str = "Widget";
                                if(~str.indexOf("Widget")){
                                    alert('찾았다!');
                                }
                            -> 의도한 대로 동작하지만 언어 특유의 기능을 사용해 직관적이지 않은 코드를 작서아는 것을 추천하지 않음
                               (하지만 위와 같은 기법은 오래된 스크립트에서 볼 수 있음)

                            -> if (~str.indexOf(...)) 패턴의 코드를 만나면 '부분 문자열인지 확인’하는 코드라고 기억해 두기

            * includes, startsWith, endsWith
                    - 비교적 근래에 나온 메서드인 str.includes(substr,pos)는 str에 부분 문자열 substr이 있는지에 따라 true나 false를 반환
                    - 부분 문자열의 위치 정보는 필요하지 않고 포함 여부만 알고 싶을 때 적합한 메서드

                                alert("Widget with id".includes("Widget")); -> true
                                alert("Hello".includes("Bye"));             -> false
                                alert("Widget".includes("id",3));           -> false
                            -> str.includes에도 str.indexOf처럼 두 번째 인수를 넘기면 해당 위치부터 부분 문자열을 검색 가능
                            -> 세 번째 위치 이후엔 id가 없기 때문에 false를 반환

                                alert("Widget".startsWith("Wid"));          -> Widget은 Wid로 시작하여 true를 반환
                                alert("Widget".endsWith("get"));            -> Widget은 get로 끝나기에 true를 반환
                            -> 메서드 str.startWith와 str.endsWith는 메서드 이름 그대로 문자열 str이 특정 문자열로 시작하는지(strat With) 여부와
                               특정 문자열로 끝나는지(end With) 여부를 확인 가능

        ※ 부분 문자열 추출하기
            - JS엔 부분 문자열 추출과 관련된 메서드가 세 가지 존재(substring, substr, slice)

            * str.slice(start[,end])
                - 문자열의 start부터 end까지(end는 미포함)를 반환
                                let str = "stringify";
                                alert(str.slice(0,5));
                            -> 0번째부터 5번째 위치까지를 추출하면 strin이 출력(5번째 위치의 글자는 포함하지 않음)

                                alert(str.slice(-4, -1));
                            -> 끝에서 4번째부터 시작해 끝에서 1번째 위치까지를 추출하면 gif를 출력

            * str.suvstring(start[,end])
                - start와 end 사이에 있는 문자열을 반환
                - suvstring은 slice와 아주 유사하지만 start가 end보다 커도 괜찮다는 데 차이가 있음

                                alert(str.substring(2,6));
                                alert(str.substring(6,2));
                            -> 동일한 부분 문자열을 반환(ring)

                                alert(str.slice(2,6));
                                alert(str.slice(6,2));
                            -> slice를 사용하면 결과가 2,6일 때는 ring으로 substring과 동일하게 동작하지만 6,2의 경우 빈 문자열을 출력
                            -> substring은 음수 인수를 허용하지 않음, 음수는 0으롷 처리됨
                
            * str.substr(start[,length])
                - start에서부터 시작해 length개의 글자를 반환
                - substr은 끝 위치 대신에 길이를 기준으로 문자열을 추출한다는 점에서 substring과 silce와 차이가 있음

                                alert(str.substr(2,4));
                            -> 두 번째부터 글자 4개 ring을 출력

                                alert(str.substr(-4,2));
                            -> 끝에서 4번째 위치부터 글자 2개 gi를 출력

                - 메서드 추출할 부분 문자열 음수 허용 여부(인수)
                    slice(start, end)       start부터 end까지(end는 미포함)     음수 허용
                    substring(start, end)   start와 end 사이                    음수는 0으로 취급함
                    substr(start, length)   start부터 length개의 글자           음수 허용

            * substr의 단점, substr는 코어 자바스크립트 명세서가 아닌 구식 스크립트에 대응하기 위해 남겨 둔 브라우저 전용 기능들을 명시해 놓은 부록에 정의되어 있다.
              거의 모든 곳에서 이 메서드가 동작하긴 하지만 브라우저 이외의 호스트 환경에서는 제대로 동작하지 않을 수 있다.
              - 남은 두 메서드 중 slice는 음수 인수를 허용한다는 측면에서 substring보다 좀 더 유연
                (메서드 이름도 더 짧음, 따라서 세 메서드 중 slice만 외워놓고 사용해도 충분)

        ※ 문자열 비교하기
            1. 소문자는 대문자보다 항상 크다.
                                alert('a'>'z'); -> true
            2. 발음 구별 기호(diacritical mark)가 붙은 문자는 알파벳 순서 기준을 따르지 않음
                                alert('Österreich' > 'Zealand');    -> true(Österreich는 오스트리아를 독일어로 표기한 것)

                -> 이런 예외사항 때문에 이름순으로 국가를 나열할 때 예상치 못한 결과가 나올 수 있다. 사람들은 Österreich가 Zealand보다 앞서 나올 것이라 예상하지만 그렇지 않음

            - JS 내부에서 문자열이 어떻게 표시되는지 상기하며 원인을 알아보기
                - 모든 문자열은 UTF-16을 사용해 인코딩되는데, UTF-16에선 모든 글자가 숫자 형식의 코드와 매칭 됨, 코드로 글자를 얻거나 글자에서 연관 코드를 알아낼 수 있는 메서드
                        str.codePintAt(pos) / String.fromCodePoint(code)

                        * str.codePintAt(pos) : pos에 위치한 글자의 코드를 반환

                                alert("z".codePointAt(0));      -> 122
                                alert("Z".codePointAt(0));      -> 90
                            -> 글자는 같지만 케이스는 다르므로 반환되는 코드가 다름

                        * String.fromCodePoint(code) : 숫자 형식의 code에 대응하는 글자를 만들어줌
                        
                                alert(String.fromCodePoint(90));    -> Z

                                alert('\u005a');                -> Z
                            -> 90을 16진수로 변환하면 5a이며 \u 뒤에 특정 글자에 대응하는 16진수 코드를 붙이는 방식으로도 원하는 글자를 만들 수 있다.


                            let str = '';
                            for (let i = 65; i <= 220; i++) {
                                str += String.fromCodePoint(i);
                            }
                            alert( str );
                        -> 아스키코드의 65와 220 사이(라틴계열 알파벳과 기타 글자들이 여기에 포함됨)에 대응하는 글자들을 출력하는 코드
                        -> a > Z가 되는 이유를 알게해줌(fourWeek의 the폴더에 아스키코드 이미지를 보면 됨)
                            - 글자는 글자에 대응하는 숫자 형식의 코드를 기준으로 비교, 코드가 크면 대응하는 글자 역시 크다고 취급!
                                a(코드:97)는 Z(코드:90) 보다 크다는 결론이 도출

                                * 알파벳 소문자의 코드는 대문자의 코드보다 크므로 소문자는 대문자 뒤에 옴
                                * Ö 같은 글자는 일반 알파벳과 멀리 떨어있음, Ö의 코드는 알파벳 소문자의 코드보다 훨씬 큼
                                
            * 문자열 제대로 비교하기
                - 언어마다 문자 체계가 다르기 때문에 문자열을 제대로 비교하는 알고리즘을 만드는 건 생각보다 간단하지 않다.
                - 문자열을 비교하려면 일단 페이지에서 어떤 언어를 사용하고 있는 지 브라우저가 알아야 한다.
                - str.localeCompare(str2)를 호출하면 ECMA-402에서 정의한 규칙에 따라 str이 str2보다 작은지, 같은지, 큰지를 나타내주는 정수가 반환
                        
                        str이 str2보다 작으면 음수를 반환
                        str이 str2보다 크면 양수를 반환
                        str과 str2이 같으면 0을 반환

                        alert('Österreich'.localeCompare('Zealand'));   -> -1
                    -> localeCompare엔 선택 인수 두 개를 더 전달할 수 있음, 기준이 되는 언어를 지정(아무것도 지정하지)

        ※ 문자열 심화
            * 서로게이트 쌍

                        alert( '𝒳'.length );
                    -> 2, 수학에서 쓰이는 대문자 X(그리스 문자 카이)
                        alert( '😂'.length );
                    -> 2, 웃으면서 눈물 흘리는 얼굴을 나타내는 이모티콘
                        alert( '𩷶'.length );
                    -> 2, 사용 빈도가 낮은 중국어(상형문자)

                - String.fromCodePoint와 str.codePointAt은 명세서에 추가된 지 얼마 안 된 메서드로, 서로게이트 쌍을 제대로 처리할 수 있는 몇 안 되는 메서드
                - 두 메서드가 등장하기 전에는 String.fromCharCode와 str.charCodeAt을 사용했었는데, 이 메서드들은 fromCodePoint, codePointAt과 동일하게 동작하지만
                  서로게이트 쌍은 처리하지 못함
                - 서로게이트 쌍은 두 글자로 취급되기 때문에 기호를 가져오는 게 꽤 까다롭

                            alert( '𝒳'[0] ); 
                        -> 이상한 기호가 출력됨
                            alert( '𝒳'[1] );
                        -> 서로게이트 쌍의 일부가 출력됨
                        -> 서로게이트 쌍을 구성하는 글자들은 붙어있을 때만 의미가 있다는 점에 유의, 위 예시를 실행하면 얼럿창엔 의미 없는 쓰레기 기호가 출력됨

                - 기술적으로 서로게이트 쌍은 서로게이트 쌍에 대응하는 코드를 사용해 감지 가능, 글자의 코드가 0xd800..0xdbff 사이에 있으면 이 코드는 서로게이트
                  쌍을 구성하는 첫 번째 글자를 나타낸다는 것을 알 수 있다.

                            alert( '𝒳'.charCodeAt(0).toString(16) );
                        -> d835, 0xd800과 0xdbff 사이의 코드
                            alert( '𝒳'.charCodeAt(1).toString(16) );
                        -> dcb3, 0xdc00과 0xdfff 사이의 코드
                        ->charCodeAt는 서로게이트 쌍을 처리하지 못하기 때문에 서로게이트 쌍을 구성하는 부분에 대한 코드를 반환

            * 발음 구별 기호와 유니코드 정규화
                - 여러 언어에서 베이스가 되는 글자 위나 아래에 발음 구별 기호라 불리는 기호를 붙여 글자를 만듬

                            alert( 'S\u0307' ); -> Ṡ
                        -> 베이스 글자 S 뒤에 '윗 점’을 나타내는 유니코드 문자(\u0307)를 붙여 Ṡ를 만들 수 있음

                            alert( 'S\u0307\u0323' ); -> Ṩ
                        -> 이런 방식은 엄청난 유연성을 제공하는데, 단점도 있습니다. 눈으로 봤을 때는 같은 글자인데 유니코드 조합이 다른 경우가 생김


                            let s1 = 'S\u0307\u0323';   -> Ṩ, S + 윗 점 + 아랫 점
                            let s2 = 'S\u0323\u0307';   -> Ṩ, S + 아랫 점 + 윗 점
                            alert( `s1: ${s1}, s2: ${s2}` );
                            alert( s1 == s2 );          -> 눈으로 보기엔 같은 글자이지만 동등 비교 시 false가 반환됨
                        -> 이런 문제를 해결하려면 유니코드 정규화(unicode normalization)라 불리는 알고리즘을 사용해 각 문자열을 동일한 형태로 정규화
                        -> 유니코드 정규화 알고리즘은  str.normalize()에 구현

                            alert( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() );    -> true
                        -> S 위, 아래에 점을 붙이는 사례에선 normalize()를 사용하면 세 개의 글자가 하나로 합쳐짐, Ṩ를 나타내는 유니코드 \u1e68

                            alert( "S\u0307\u0323".normalize().length );        -> 1
                            alert( "S\u0307\u0323".normalize() == "\u1e68" );   -> true


        ※ 요약

        * 자바스크립트엔 세 종류의 따옴표가 있는데, 이 중 하나인 백틱은 문자열을 여러 줄에 걸쳐 쓸 수 있게 해주고 문자열 중간에 ${…}을 사용해 표현식도 넣을 수 있다는 점이 특징
        * 자바스크립트에선 UTF-16을 사용해 문자열을 인코딩함
        * \n 같은 특수 문자를 사용, \u...를 사용하면 해당 문자의 유니코드를 사용해 글자를 만들 수 있음
        * 문자열 내의 글자 하나를 얻으려면 대괄호 []를 사용
        * 부분 문자열을 얻으려면 slice나 substring을 사용
        * 소문자로 바꾸려면 toLowerCase, 대문자로 바꾸려면 toUpperCase를 사용
        * indexOf를 사용하면 부분 문자열의 위치를 얻을 수 있음, 부분 문자열 여부만 알고 싶다면 includes/startsWith/endsWith를 사용 가능
        * 특정 언어에 적합한 비교 기준 사용해 문자열을 비교하려면 localeCompare를 사용하세요. 이 메서드를 사용하지 않으면 글자 코드를 기준으로 문자열이 비교

        이외에도 문자열에 쓸 수 있는 유용한 메서드 몇 가지 존재
            * str.trim() – 문자열 앞과 끝의 공백 문자를 다듬어 줌(제거함).
            * str.repeat(n) – 문자열을 n번 반복

                        
                            




*/