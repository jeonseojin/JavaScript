/*  과제1) 배열은 복사가 될까요?
            let fruits = ["사과", "배", "오렌지"];

            // 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
            let shoppingCart = fruits;
            shoppingCart.push("바나나");

            // fruits에 어떤 값이 들어 있을까요?
            alert( fruits.length ); // ?
        -> 결과: 4
        shoppingCart = fruits이기 때문에 shoppingCart와 fruits는 모두 같은 배열을 참조함
            ["사과", "배", "오렌지", "바나나"]가 되어 4가 출력됨

*/ 

/*  과제2) 배열과 관련된 연산
        - 배열과 관련된 다섯 가지 연산

            1. 요소 “Jazz”, "Blues"가 있는 styles 배열을 생성
            2. "Rock-n-Roll"을 배열 끝에 추가
            3. 배열 정 중앙에 있는 요소를 "Classics"로 바꿈, 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 함
            4. 배열의 첫 번째 요소를 꺼내서 출력
            5. "Rap"과 "Reggae"를 배열의 앞에 추가
        단계를 하나씩 거칠 때마다 배열 모습은 아래와 같이 변해야 함

    Jazz, Blues
    Jazz, Blues, Rock-n-Roll
    Jazz, Classics, Rock-n-Roll
    Classics, Rock-n-Roll
    Rap, Reggae, Classics, Rock-n-Roll

*/
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll"); //Jazz, Blues, Rock-n-Roll
styles[Math.floor((styles.length - 1) / 2)] = "Classics";//소수점 첫째 자리에서 내림(버림) 1 자리에 Classics이 추가됨
alert( styles.shift() ); //배열에서 Jezz를 제거하고 alert창에 띄움
styles.unshift("Rap", "Reggae");//배열 앞에 추가

/*  과제3) 배열 컨텍스트에서 함수 호출하기

        - 아래 코드를 실행하면 어떤 결과가 나올까요? 그리고 그 이유는 무엇일까요?
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?

-> arr[2]()는 obj가 arr이고, method는 2인 메서드 obj[method]()를 호출하는 것과 문법적으로 동일함
   arr[2]에 있는 함수가 객체 메서드처럼 호출되는 되어 a,b,(function() {alert( this );}) 출력


*/

/*  과제4) 입력한 숫자의 합 구하기
        - 아래 조건을 만족하는 함수 sumInput()을 작성

        - prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 입력받은 값들을 배열에 저장
        - 숫자가 아닌 값, 혹은 빈 문자열을 입력하거나 ‘Cancel’ 버튼을 누르면 질문을 멈춤
        - 배열 요소의 합을 계산하고 리턴
        - 주의: 숫자 0은 유효한 숫자이므로, 사용자가 0을 입력하더라도 질문이 멈추지 말아야 함
*/
function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("숫자를 입력해 주세요.", '');
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
alert( sumInput() );

/*  과제5) 최대합 부분 배열
        - 입력값은 arr = [1, -2, 3, 4, -9, 6] 같이 숫자로만 구성된 배열이라고 가정
        - 우리가 해야 할 일은 요소의 총합이 최대인 arr의 부분 배열을 찾는 것
        - 부분 배열 요소들의 합을 리턴하는 함수 getMaxSubSum(arr)를 작성
        예시

                getMaxSubSum([-1, 2, 3, -9]) == 5 (강조 표시된 요소들의 합)
                getMaxSubSum([2, -1, 2, 3, -9]) == 6
                getMaxSubSum([-1, 2, 3, -9, 11]) == 11
                getMaxSubSum([-2, -1, 1, 2]) == 3
                getMaxSubSum([100, -9, 2, -3, 5]) == 100
                getMaxSubSum([1, 2, 3]) == 6 (모든 요소)

            - 요소 전체가 음수라면 아무런 요소도 선택하지 않아야 최댓값이 됨(부분 배열은 빈 배열), 합은 0
                getMaxSubSum([-1, -2, -3]) = 0

    ※ 좀 더 이해가 필요함!!!
*/

function getMaxSubSum(arr) {
    let maxSum = 0;
    let subSum = 0;
  
    for (let item of arr) { // 입력한 배열을 가져옴 
        subSum += item; // 가져온 배열의 값들을 하나하나 subSum에 더해줌
        maxSum = Math.max(maxSum, subSum); // 최댓값을 저장해둠
        if (subSum < 0) subSum = 0;
    }
    return maxSum;
}

  alert( getMaxSubSum([-1, 2, 3, -9]) );
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
  alert( getMaxSubSum([-2, -1, 1, 2]) );
  alert( getMaxSubSum([100, -9, 2, -3, 5]) );
  alert( getMaxSubSum([1, 2, 3]) );
  alert( getMaxSubSum([-1, -2, -3]) );





/*  배열
        - 키를 사용해 식별할 수 있는 값을 담은 컬렉션은 객체라는 자료구조를 이용해 저장하는데, 객체만으로도 다양한 작업을 할 수 있음
          객체는 태생이 순서를 고려하지 않고 만들어진 자료구조이기 때문에 객체를 이용하면 새로운 프로퍼티를 기존 프로퍼티 ‘사이에’ 끼워 넣는 것도 불가능
          이럴 땐 순서가 있는 컬렉션을 저장할 때 쓰는 자료구조인 배열을 사용할 수 있음

        ※ 배열 선언 
            
            - 두 문법을 사용하면 빈 배열

                    let arr = new Array();
                    let arr = [];
                -> 대부분 두 번째 방법으로 배열을 선언하는데, 이때 대괄호 안에 초기 요소를 넣어주는 것도 가능

                    let fruits = ["사과", "오렌지", "자두"];

                    alert( fruits[0] );     -> 사과
                    alert( fruits[1] );     -> 오렌지
                    alert( fruits[2] );     -> 자두
                -> 배열 내 특정 요소를 얻고 싶다면 대괄호 안에 순서를 나타내는 숫자인 인덱스를 넣어주면 됨

                    fruits[2] = '배';
                    fruits[3] = '레몬';
                -> 같은 방법으로 요소를 수정 : 배열이 ["사과", "오렌지", "배"]로 바뀜
                -> 새로운 요소를 배열에 추가하는 것도 동일하게 가능

                    alert( fruits );        -> 사과,오렌지,자두
                -> length를 사용하면 배열에 담긴 요소가 몇 개인지 알아낼 수 있음


            - 배열 요소의 자료형엔 제약이 없음
            
                -> 요소에 여러 가지 자료형이 섞임
                    let arr = [ '사과', { name: '이보라' }, true, function() { alert('안녕하세요.'); } ];

                -> 인덱스가 1인 요소(객체)의 name 프로퍼티를 출력
                    alert( arr[1].name );           -> 이보라

                -> 인덱스가 3인 요소(함수)를 실행
                    arr[3]();                       -> 안녕하세요.

            - trailing 쉼표
                            let fruits =[
                                "사과",
                                "오렌지",
                                "자두",
                            ];
                    -> trailing(길게 늘어지는) 쉼표를 사용하면 모든 줄의 생김새가 유사해지기 때문에 요소를 넣거나 빼기가 쉬움

        ※ pop·push와 shift·unshift
            - 큐(queue)는 배열을 사용해 만들 수 있는 대표적인 자료구조로, 배열과 마찬가지로 순서가 있는 컬렉션을 저장하는 데 사용
              (큐에서 사용하는 주요 연산알아보기)

                    * push  : 맨 끝에 요소를 추가
                    * shift : 제일 앞 요소를 꺼내 제거한 후 남아있는 요소들을 앞으로 밀어줌, 이렇게 하면 두 번째 요소가 첫 번째 요소가 됨
                    
            - 배열엔 두 연산을 가능케 해주는 내장 메서드 push / pop이 있음

                    * push  : 요소를 스택 끝에 집어 넣음
                    * pop   : 스택 끝 요소를 추출함
                    
            - 스택은 이처럼 '한쪽 끝’에 요소를 더하거나 뺄 수 있게 해주는 자료구조
            
            - 처음이나 끝에 요소를 더하거나 빼주는 연산을 제공하는 자료구조를 컴퓨터 과학 분야에선 데큐(deque, Double Ended Queue)라고 부름
            
            ※ 배열 끝에 무언가를 해주는 메서드

                * pop
                    - 배열 끝 요소를 제거하고, 제거한 요소를 반환
                                let fruits = ["사과", "오렌지", "배"];
                                alert( fruits.pop() );
                            -> 배열에서 "배"를 제거하고 제거된 요소를 얼럿창에 띄웁니다.
                                alert( fruits );
                            -> 사과,오렌지

                * push
                    - 배열 끝에 요소를 추가
                
                                let fruits = ["사과", "오렌지"];
                                fruits.push("배");
                                alert( fruits );
                            -> 사과,오렌지,배
                            -> fruits.push(...)를 호출하는 것은 fruits[fruits.length] = ...하는 것과 같은 효과를 나타냄

            ※ 배열 앞에 무언가를 해주는 메서드
                            
                * shift
                    - 배열 앞 요소를 제거하고, 제거한 요소를 반환

                            let fruits = ["사과", "오렌지", "배"];
                            alert( fruits.shift() );
                        -> 배열에서 "사과"를 제거하고 제거된 요소를 얼럿창에 띄웁니다.
                            alert( fruits );
                        -> 오렌지,배

                * unshift
                    - 배열 앞에 요소를 추가

                            let fruits = ["사과"];
                            fruits.push("오렌지", "배");
                            fruits.unshift("파인애플", "레몬");
                        -> ["파인애플", "레몬", "사과", "오렌지", "배"]
                        -> 요소 여러 개를 한 번에 더해줄 수도 있음
                            alert( fruits );

        ※ 배열의 내부 동작 원리
            - 배열은 특별한 종류의 객체, 배열 arr의 요소를 arr[0]처럼 대괄호를 사용해 접근하는 방식은 객체 문법에서 옴
              (배열은 키가 숫자라는 점만 다름)

                            let fruits = ["바나나"]
                            let arr = fruits;
                        -> 참조를 복사함(두 변수가 같은 객체를 참조)
                            alert( arr === fruits );
                        -> true
                            arr.push("배");
                        -> 참조를 이용해 배열을 수정
                            alert( fruits );
                        -> 바나나,배 - 요소가 두 개가 됨
                        -> 배열을 배열답게 만들어주는 것은 특수 내부 표현방식
                        -> 개발자가 배열을 '순서가 있는 자료의 컬렉션’처럼 다루지 않고 일반 객체처럼 다루면 이런 기법들이 제대로 동작하지 않음
                            ex:
                                let fruits = [];
                            -> 빈 배열을 하나 만듬
                                fruits[99999] = 5;
                            -> 배열의 길이보다 훨씬 큰 숫자를 사용해 프로퍼티를 만듬
                                fruits.age = 25;
                            -> 임의의 이름을 사용해 프로퍼티를 만듬
                            -> 배열은 객체이므로 예시처럼 원하는 프로퍼티를 추가해도 문제가 발생하지 않음

                        * 잘못된 방법의 예
                            - arr.test = 5 같이 숫자가 아닌 값을 프로퍼티 키로 사용하는 경우
                            - arr[0]과 arr[1000]만 추가하고 그사이에 아무런 요소도 없는 경우
                            - arr[1000], arr[999]같이 요소를 역순으로 채우는 경우

            - 배열은 순서가 있는 자료를 저장하는 용도로 만들어진 특수한 자료구조, 배열 내장 메서드들은 이런 용도에 맞게 만들어짐
            - 배열을 신중하게 조정하고, 처리하므로 배열을 사용할 땐 이런 목적에 맞게 사용해야 함
            - 임의의 키를 사용해야 한다면 배열보단 일반 객체 {}가 적합한 자료구조일 확률이 높음
    
        ※ 성능
            - push와 pop은 빠르지만 shift와 unshift는 느림

                            fruits.shift();
                        -> 배열 맨 앞의 요소를 빼줌
                        -> shift 메서드를 호출한 것과 동일한 효과를 보려면 인덱스가 0인 요소를 제거하는 것만으론 충분하지 않음,
                           제거 대상이 아닌 나머지 요소들의 인덱스를 수정해야 함

                - shift 연산은 아래 3가지 동작을 모두 수행
                        1. 인덱스가 0인 요소를 제거
                        2. 모든 요소를 왼쪽으로 이동시킵니다. 이때 인덱스 1은 0, 2는 1로 변함
                        3. length 프로퍼티 값을 갱신
                    -> 배열에 요소가 많으면 요소가 이동하는 데 걸리는 시간이 길고 메모리 관련 연산도 많아짐

                            fruits.pop();
                        -> 배열 끝 요소 하나를 제거
                        -> pop 메서드는 요소를 옮기지 않으므로 각 요소는 기존 인덱스를 그대로 유지
                           (배열 끝에 무언가를 해주는 메서드의 실행 속도가 빠른 이유는 바로 여기, push 메서드를 쓸 때도 유사한 동작이 일어나므로 속도가 빠릅)

        ※ 반복문
            - for문은 배열을 순회할 때 쓰는 가장 오래된 방법, 순회시엔 인덱스를 사용

                            let arr = ["사과", "오렌지", "배"];
                            for (let i = 0; i < arr.length; i++) {
                        -> for..of를 사용하면 현재 요소의 인덱스는 얻을 수 없고 값만 얻을 수 있음
                                alert( arr[i] );
                            }

                            for (let key in arr) {
                                alert( arr[key] ); // 사과, 오렌지, 배
                            }

                        -> 배열은 객체형에 속하므로 for..in을 사용하는 것도 가능

                            for (let key in arr) {
                                alert( arr[key] ); // 사과, 오렌지, 배
                            }
                -> for..in은 다음과 같은 특징을 지니기 때문에 배열에 for..in을 사용하면 문제가 발생하므로 되도록 다른 반복문을 사용하시길 바람
                    1. for..in 반복문은 모든 프로퍼티를 대상으로 순회, 키가 숫자가 아닌 프로퍼티도 순회 대상에 포함
                       브라우저나 기타 호스트 환경에서 쓰이는 객체 중, 배열과 유사한 형태를 보이는 ‘유사 배열(array-like)’ 객체가 있음
                       유사 배열 객체엔 배열처럼 length 프로퍼티도 있고 요소마다 인덱스도 붙음, 그런데 여기에 더하여 유사 배열 객체엔 배열과는 달리 키가 숫자형이 아닌
                       프로퍼티와 메서드가 있을 수 있음, 유사 배열 객체와 for..in을 함께 사용하면 이 모든 것을 대상으로 순회가 이루어짐
                       따라서 ‘필요 없는’ 프로퍼티들이 문제를 일으킬 가능성이 생김!
                    
                    2. for..in 반복문은 배열이 아니라 객체와 함께 사용할 때 최적화되어 있어서 배열에 사용하면 객체에 사용하는 것 대비 10~100배 정도 느림,
                       for..in 반복문의 속도가 대체로 빠른 편이기 때문에 병목 지점에서만 문제가 됨, for..in 반복문을 사용할 땐 이런 차이를 알고 적절한 곳에 사용하길...
                       (배열엔 되도록 for..in를 쓰지마)

        ※ ‘length’ 프로퍼티
            - 배열에 무언가 조작을 가하면 length 프로퍼티가 자동으로 갱신, length 프로퍼티는 배열 내 요소의 개수가 아니라 가장 큰 인덱스에 1을 더한 값임
              배열에 요소가 하나 있고, 이 요소의 인덱스가 아주 큰 정수라면 배열의 length 프로퍼티도 아주 커짐
            
                                let fruits = [];
                                fruits[123] = "사과";
                                alert( fruits.length ); -> 124
                            -> 배열을 이렇게 사용하지 말기

                                let arr = [1, 2, 3, 4, 5];
                                arr.length = 2;
                            -> 요소 2개만 남기고 잘라봄
                                alert( arr );           -> [1, 2]
                                arr.length = 5;
                            -> 본래 길이로 되돌려 봄
                                alert( arr[3] );
                            -> undefined: 삭제된 기존 요소들이 복구되지 않음
                            -> 이런 특징을 이용하면 arr.length = 0;을 사용해 아주 간단하게 배열을 비울 수 있음

        ※ new Array
            - new Array() 문법을 사용해도 배열을 만들 수 있음
                                
                            let arr = new Array("사과", "배", "기타");
                        -> 대괄호 []를 사용하면 더 짧은 문법으로 배열을 만들 수 있기 때문에 new Array()는 잘 사용되지 않는 편임
                        
            - new Array()의 이런 특징이 어떻게 실수를 유발할 수 있는지 알아보기

                            let arr = new Array(2);
                        -> 이렇게 하면 배열 [2]가 만들어질까요?
                            alert( arr[0] );
                        -> undefined가 출력, 요소가 하나도 없는 배열이 만들어짐
                        -> new Array(number)를 이용해 만든 배열의 요소는 모두 undefined

                            alert( arr.length );
                        -> 길이는 2이다.

        ※ 다차원 배열
            - 배열 역시 배열의 요소가 될 수 있음, 이런 배열을 가리켜 다차원 배열(multidimensional array)이라 부른다.
            - 다차원 배열은 행렬을 저장하는 용도로 쓰임

                            let matrix = [
                                [1, 2, 3],
                                [4, 5, 6],
                                [7, 8, 9]
                            ];
                            alert( matrix[1][1] );
                        -> 중심에 있는 요소 5가 출력

        ※ toString
            - 배열엔 toString 메서드가 구현되어 있어 이를 호출하면 요소를 쉼표로 구분한 문자열이 반환

                            let arr = [1, 2, 3];
                            alert( arr );   -> 1,2,3
                            alert( String(arr) === '1,2,3' );   -> true

                            alert( [] + 1 );        -> "1"
                            alert( [1] + 1 );       -> "11"
                            alert( [1,2] + 1 );     -> "1,21"
                        -> 배열엔 Symbol.toPrimitive나 valueOf 메서드가 없음, 따라서 위 예시에선 문자열로의 형 변환이 일어나 []는 빈 문자열,
                           [1]은 문자열 "1", [1,2]는 문자열 "1,2"로 변환
                        -> 이항 덧셈 연산자 "+"는 피연산자 중 하나가 문자열인 경우 나머지 피연산자도 문자열로 변환
                            alert( "" + 1 );        -> 동일하게 "1"
                            alert( "1" + 1 );       -> 동일하게 "11"
                            alert( "1,2" + 1 );     -> 동일하게 "1,21"

        ※ 요약
            - 배열은 특수한 형태의 객체로, 순서가 있는 자료를 저장하고 관리하는 용도에 최적화된 자료구조
            
                * 선언 방법
                                let arr = [item1, item2...];
                            -> 대괄호 (가장 많이 쓰이는 방법임)

                                let arr = new Array(item1, item2...);
                            -> new Array (잘 쓰이지 않음)
                            -> new Array(number)을 호출하면 길이가 number인 배열이 만들어지는데, 이 때 요소는 비어있음

                * length 프로퍼티는 배열의 길이를 나타냄, 정확히는 숫자형 인덱스 중 가장 큰 값에 1을 더한 값
                배열 메서드는 length 프로퍼티를 자동으로 조정해줌
                * length 값을 수동으로 줄이면 배열 끝이 잘림

            - 다음 연산을 사용하면 배열을 데큐처럼 사용할 수 있음
                * push(...items) – items를 배열 끝에 더해줌
                * pop() – 배열 끝 요소를 제거하고, 제거한 요소를 반환
                * shift() – 배열 처음 요소를 제거하고, 제거한 요소를 반환
                * unshift(...items) – items를 배열 처음에 더해줌
                
            - 아래 방법을 사용하면 모든 요소를 대상으로 반복 작업을 할 수 있음
                * for (let i=0; i<arr.length; i++) – 가장 빠른 방법이고 오래된 브라우저와도 호환
                * for (let item of arr) – 배열 요소에만 사용되는 모던한 문법
                * for (let i in arr) – 배열엔 절대 사용말기


*/ 