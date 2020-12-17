/*  참조에 의한 객체 복사
        - 객체와 원시 타입의 근본적인 차이 중 하나는 객체는 참조에 의해(by reference) 저장되고 복사된다는 것
        - 변수엔 객체가 그대로 저장되는 것이 아니라, 객체가 저장되어 있는 '메모리 주소'인 객체에 대한 참조 값이 저장
            -> 객체는 메모리 내 어딘가에 저장되고, 변수 user엔 객체를 '참조’할 수 있는 값이 저장
            -> 객체가 할당된 변수를 복사할 땐 객체의 참조 값이 복사되고 객체는 복사되지 않음
                let user = {
                name: "John"
                };

                let user = { name: 'John' };
                let admin = user;
                admin.name = 'Pete';
            -> 'admin' 참조 값에 의해 변경됨

                alert(user.name);
            -> 'Pete'가 출력됨. 'user' 참조 값을 이용해 변경사항을 확인함

    * 참조에 의한 비교
        - 객체 비교 시 동등 연산자 ==와 일치 연산자 ===는 동일하게 동작(비교 시 피연산자인 두 객체가 동일한 객체인 경우에 참을 반환)

                let a = {};
                let b = a; -> 참조에 의한 복사

                alert( a == b ); -> true, 두 변수는 같은 객체를 참조
                alert( a === b ); -> true

                let a = {};
                let b = {}; -> 독립된 두 객체

                alert( a == b ); 
            -> false, 독립된 객체이기 때문에 일치.동등 비교하면 거짓이 반환됨

        - obj1 > obj2 같은 대소 비교나 obj == 5 같은 원시값과의 비교에선 객체가 원시형으로 변환
        
    * 객체 복사, 병합과 Object.assign
                Object.assign(dest, [src1, src2, src3...])
            -> 첫 번째 인수 dest는 목표로 하는 객체
            -> src1, ...,srcN은 복사하고자 하는 객체를 의미 ...은 필요에 따라 얼마든지 많은 객체를 인수로 사용할 수 있다는 것을 의미
            -> 객체 src1, ..., srcN의 프로퍼티를 dest에 복사, dest를 제외한 인수(객체)의 프로퍼티 전부가 첫 번째 인수(객체)로 복사
            -> 마지막으로 dest 반환

        - assign 메서드 사용

                let user = { name: "John" };

                let permissions1 = { canView: true };
                let permissions2 = { canEdit: true };

            -> permissions1과 permissions2의 프로퍼티를 user로 복사합니다.
                Object.assign(user, permissions1, permissions2);

            -> now user = { name: "John", canView: true, canEdit: true }

        - 반복문 없이도 assign을 사용하여 객체를 복사

                let user = {
                    name: "John",
                    age: 30
                };
                let clone = Object.assign({}, user);
            -> user에 있는 모든 프로퍼티가 빈 배열에 복사되고 변수에 할당


    * 중첩 객체 복사
        - 지금까진 user의 모든 프로퍼티가 원시값인 경우만 가정, 프로퍼티는 다른 객체에 대한 참조 값일 수도 있다.

                let user = {
                    name: "John",
                    sizes: {
                        height: 182,
                        width: 50
                    }
                };
                let clone = Object.assign({}, user);
                alert( user.sizes === clone.sizes );
            -> true, 같은 객체, user와 clone는 sizes를 공유

                user.sizes.width++;
            -> 한 객체에서 프로퍼티를 변경

                alert(clone.sizes.width);
            -> 51, 다른 객체에서 변경 사항을 확인

        - 깊은 복사(deep cloning) : user[key]의 각 값을 검사하면서, 그 값이 객체인 경우 객체의 구조도 복사해주는 반복문을 사용
            

    ※ 요약
        - 객체는 참조에 의해 할당되고 복사됨
        - 변수엔 객체 자체가 아닌 메모리상의 주소인 '참조'가 저장, 따라서 객체가 할당된 변수를 복사하거나 함수의 인자로
          넘길 땐 객체가 아닌 객체의 참조가 복사
        - 복사된 참조를 이용한 모든 작업은 동일한 객체를 대상으로 이뤄짐
        - 객체의 진짜 복사본을 만들려면 얕은 복사(sgallow copy)를 가능하게 해주는 object.assign이나 깊은 복사를 가능하게 해주는
          _.cloneDeep(obj)를 사용
          (얕은 복사본은 중첩 객체를 처리하지 못한다는 점을 주의)




*/