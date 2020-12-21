/*  옵셔널 체이닝 '?.' (스펙에 추가된 지 얼마 안 된 문법, 구식 브라우저는 폴리필이 필요)
        - 옵셔널 체이닝 ?.을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있다.
        - 현재 nil이 될 수 있는 프로퍼티, 메소드, 서브 스크립트를 조회하고 호출하는 과정, 옵셔널 체이닝에 값이 있으면 프로프터, 메소드,
          스크립트 호출에 성공 -> 옵셔널이 nil이면 프로퍼티, 메소드, 스크립트 호출은 nil을 반환
        - 여러 개를 함께 연결할 수 있고 연결된 어떤 링크가 nil이면 전체 체인은 실패

    옵셔널 체이닝이 필요한 이유 
        - 사용자가 여러 명 있는데 그중 몇 명은 주소 정보를 가지고 있지 않다고 가정할 경우, user.address.street를 사용해 주소 정보에 접근하면 에러가 발생
                let user = {};
                alert(user.address.street);
            -> TypeError: Cannot read property 'street' of undefined

        - 브라우저에서 동작하는 코드를 개발할 때 발생할 수 있는 문제로, 페이지에 존재하지 않는 요소에 접근해 요소의 정보를 가져오려 할 때 발생
                let html = document.querySelector('.my-element').innerHTML;
            -> querySelector(...) 호출 결과가 null인 경우 에러 발생

        - ?.이 추가되기 전엔 문제를 해결하기 위해 && 연산자를 사용하곤 했다
                alert( user && user.address && user.address.street );
            -> undefined가 발생, 에러가 발생하지 않음

    옵셔널 체이닝의 등장
        - ?. 은 ?. 앞의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환
        - 설명이 장황해지지 않도록 지금부턴 평가후 결과가 null이나 undefined가 아닌 경우엔 값이 ‘있다’, '존재한다’라고 표현
                let user = {};
                alert( user?.address?.street );
            -> user 객체가 존재하지 않더라도 에러가 발생하지 않음

                let user = null;
                alert( user?.address ); -> undefined
                alert( user?.address?.street ); -> undefined
            -> ?.은 ?. ‘앞’ 평가 대상에만 동작되고, 확장은 되지 않음

        ※ 옵셔널 체이닝을 남용하지 말기
            - ?.는 존재하지 않아도 괜찮은 대상에만 사용
            - 사용자 주소를 다루는 위 예시에서 논리상 user는 반드시 있어야 하는데 address는 필수값이 아님, 따라서 user.address?.street를 사용하는 것이 바람직
            - 실수로 인해 user에 값을 할당하지 않았다면 바로 알아낼 수 있도록 해야 함, 그렇지 않으면 에러를 조기에 발견하지 못하고 디버깅이 어려워짐

        ※ ?. 앞의 변수는 꼭 선언되어 있어야 함
            - 변수 user가 선언되어 있지 않으면 user?.anything 평가시 에러가 발생
                    user?.address;
                -> ReferenceError: user is not defined 에러 발생

    단락 평가 : ?. 는 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈춤, 이런 방법을 단락 평가(short-circuit)라고 부름

                    let user = null;
                    let x = 0;
                    user?.sayHi(x++);
                -> 아무 일도 일어나지 않음

                    alert(x);
                -> 0, x는 증가하지 않음

    ?.()와 ?.[]
        - ?.은 연산자가 아님, ?.은 함수나 대괄호와 함께 동작하는 특별한 문법 구조체(syntax construct)
            * ?.()를 사용하였을 때
                    let user1 = {
                        admin() {
                            alert("관리자 계정입니다.");
                        }
                    }
                    let user2 = {};
                    user1.admin?.();
                -> 관리자 계정입니다. user1엔 admin이 정의 되어있기에 메서드가 제대로 호출

                    user2.admin?.();
                -> user2엔 admin이 정의되어 있지 않았음에도 불구하고 메서드를 호출하면 에러 없이 그냥 평가가 멈춤

            * ?.[]를 사용하였을 때

                    let user1 = {
                        firstName: "Violet"
                    };
                    let user2 = null;
                -> user2는 권한이 없는 사용자라고 가정

                    let key = "firstName";
                    alert( user1?.[key] ); -> Violet
                    alert( user2?.[key] ); -> undefined
                    alert( user1?.[key]?.something?.not?.existing); -> undefined

            * ?.은 delete와 조합해 사용 가능
                    delete user?.name;
                -> user가 존재하면 user.name을 삭제

            ※ 프로퍼티 존재 여부가 확실치 않은 경우에도 안전하게 프로퍼티를 읽을 수 있다
            ※ ?.은 읽기나 삭제하기에는 사용할 수 있지만 쓰기에는 사용할 수 없음
                    user?.name = "Violet";
                -> ?.은 할당 연산자 왼쪽에서 사용할 수 없음
                -> 에러가 발생하는 이유는 undefined = "Violet"이 되기 때문

        ※ 요약 : 옵셔널 체이닝 문법 ?.은 세 가지 형태로 사용
            1. obj.prop : obj가 존재하면 obj.prop을 반환, 그렇지 않으면 undefined를 반환
            2. obj.[prop] : obj가 존재하면 obj[prop]을 반환, 그렇지 않으면 undefined를 반환
            3. obj.method() : obj가 존재하면 obj.method()를 호출, 그렇지 않으면 undefined를 반환

            - 여러 예시를 통해 살펴보았듯이 옵셔널 체이닝 문법은 꽤 직관적이고 사용하기 쉬움, ?. 왼쪽 평가 대상이 null, undefined인지 확인하고
              null, undefined가 아니라면 평가를 계속 진행
            - ?.를 계속 연결해서 체인을 만들면 중첩 프로퍼티들에 안전하게 접근
            - ?.은 ?. 왼쪽 평가대상이 없어도 괜찮은 경우에만 선택적으로 사용
            - 꼭 있어야 하는 값인데 없는 경우에 ?.를 사용하면 프로그래밍 에러를 쉽게 찾을 수 없으므로 이런 상황을 주의

*/