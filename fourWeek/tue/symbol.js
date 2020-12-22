/*  심볼형
        - 심볼은 객체의 고유한 식별자(unique identifier)를 의미, 고유한 심볼 테이블이 심볼들을 가지고 있음
        - 심볼의 특징으로는 객체 속성(object property)을 만들 수 있는 원시 데이터 형식(primitive data type)

                let id = Symbol();
            -> 새로운 심볼이 됨

                let id = Symbol(id);
            -> 심볼 id에는 "id"라는 설명이 붙음

        - 심볼은 유일성이 보장되는 자료형이기 때문에, 설명이 동일한 심볼을 여러 개 만들어도 각 심볼값은 다름,
          심볼에 붙이는 설명(심볼 이름)은 어떤 것에도 영향을 주지 않는 이름표 역할만을 함
        
                let id1 = Symbol("id");
                let id2 = Symbol("id");
                alert(id1 == id2); -> false

        ※ 심볼은 문자형으로 자동 형 변환되지 않는다.
            - 자바스크립트에선 문자형으로의 암시적 형 변환이 비교적 자유롭게 일어나는 편, alert 함수가 거의 모든 값을 인자로 받을 수 있는 이유,
              하지만 심볼은 제외, 심볼형 값은 다른 자료형으로 암시적 형 변환(자동 형 변환)되지 않음

                    let id = Symbol("id");
                    alert(id);
                -> TypeError: Cannot convert a Symbol value to a string의 에러 발생

            - 문자열과 심볼은 근본이 다르기 때문에 우연히라도 서로의 타입이 변환돼선 안 된다.
              '언어 차원의 보호장치(language guard)'를 마련해 심볼형이 다른 형으로 변환되지 않게 막아줌

            - 심볼을 반드시 출력해줘야 하는 상황이라면 아래와 같이 .toString() 메서드를 명시적으로 호출
                    alert(id.toString()); -> Symbol(id)가 출력됨

            - symbol.description 프로퍼티를 이용하면 설명만 보여주는 것도 가능
                ※ description는 Symbol 개체에 대한 선택적 설명을 반환하는 문자열이다.
                    alert(id.description); -> id

    숨김 프로퍼티
        -> 심볼을 이용하면 숨김(hidden) 프로퍼티를 만들 수 있다. 숨김 프로퍼티는 외부 코드에서 접근이 불가능하고 값도 덮어쓸 수 없는 프로퍼티이다.

                    let user = { -> 서드파티 코드에서 가져온 객체
                        name: "John"
                    };
                    let id = Symbol("id");
                    user[id] = 1;
                -> user는 서드파티 코드에서 가지고 온 객체이므로 함부로 새로운 프로퍼티를 추가할 수 없다
                -> 심볼은 서드파티 코드에서 접근할 수 없기 때문에, 심볼을 사용하면 서드파티 코드가 모르게 user에 식별자를 부여

                    alert( user[id] ); -> 심볼을 키로 사용해 데이터에 접근

        - user의 원천인 서드파티 코드, 현재 작성 중인 스크립트, 제3의 스크립트가 각자 서로의 코드도 모른 채 user를 식별해야 하는 상황
            -> 심볼은 유일성이 보장되므로 우리가 만든 식별자와 제3의 스크립트에서 만든 식별자가 충돌

                    let id = Symbol("id");
                    user[id] = "제3 스크립트 id 값";
                -> Symbol("id")을 이용해 전용 식별자를 만들어 사용 가능
                -> 심볼 대신 문자열 "id"를 사용해 식별자를 만들었다면 충돌이 발생할 가능성이 있음

                    let user = { name: "John" };
                -> 문자열 "id"를 사용해 식별자를 만듬

                    user.id = "스크립트 id 값";
                -> 만약 제3의 스크립트가 우리 스크립트와 동일하게 문자열 "id"를 이용해 식별자를 만들었다면

                    user.id = "제3 스크립트 id 값"
                -> 의도치 않게 값이 덮어 쓰여서 우리가 만든 식별자는 무의미해짐

    Symbols in a literal : 객체 리터럴{...}을 사용해 객체를 만든 경우, 대괄호를 사용해 심볼형 키를 만듬
                    let id = Symbol("id");
                    let user = {
                        name: "John",
                        [id]: 123 -> "id": 123은 안됨
                    };
                -> "id: 123"이라고 하면 심볼 id가 아니라 문자열 "id"가 키가 됨

    심볼은 for...in에서 배제된다. -> 키가 심볼인 프로퍼티는 for..in 반복문에서 배제

                    let id = Symbol("id");
                    let user = {
                        name: "John",
                        age: 30,
                        [id]: 123
                    };
                    for (let key in user) alert(key);
                -> name과 age만 출력되고, 심볼은 출력되지 않음
                -> 심볼로 직접 접근하면 잘 작동
                

                    alert( "직접 접근한 값: " + user[id] );

        - Object.keys(user)에서도 키가 심볼인 프로퍼티는 배제, 심볼형 프로퍼티 숨기기(hiding symbolic property)라 불리는 이런 원칙 덕분에
          외부 스크립트나 라이브러리는 심볼형 키를 가진 프로퍼티에 접근하지 못함
        - Object.assign은 키가 심볼인 프로퍼티를 배제하지 않고 객체 내 모든 프로퍼티를 복사
                    let clone = Object.assign({}, user);
                    alert(clone[id]);   -> 123
                ※ 모순처럼 느껴지지만 의도적으로 설계된 것, 객체를 복사하거나 병합할 때, 대개 id 같은 심볼을 포함한 프로퍼티 전부를 사용하고 싶어
                   할 것이라는 생에서 이렇게 설계됨

    전역 심볼
        - 심볼은 이름이 같더라도 모두 별개로 취급, 이름이 같은 심볼이 같은 개체를 가리키길 원하는 경우도 가끔 있음
        - 전역 심볼 레지스트리(global symbol registry)는 이런 경우를 위해 만들어졌음, 전역 심볼 레지스트리 안에 심볼을 만들고 해당 심볼에 접근하면,
          이름이 같은 경우 항상 동일한 심볼을 반환해 줌(전역 심볼 레지스트리 안에 있는 심볼은 전역 심볼이라고 불림)
        - 레지스트리 안에 있는 심볼을 읽거나, 새로운 심볼을 생성하려면 Symbol.for(key)를 사용하면 됨(이 메서드를 호출하면 이름이 key인 심볼을 반환)
                    
                        Symbol.for("id");
                    -> 전역 레지스트리에서 심볼을 읽음
                    -> 심볼이 존재하지 않으면 새로운 심볼을 만듬

                        let idAgain = Symbol.for("id");
                    -> 동일한 이름을 이용해 심볼을 다시 읽음, 좀 더 멀리 떨어진 코드에서도 가능

                        alert( id === idAgain );
                    -> 두 심볼은 같기 때문에 true를 반환

            ※ Ruby(?)랑 비슷 :  Ruby 등의 몇몇 언어에선 이름이 같으면 심볼도 같음
                                자바스트림트에선 전역 심볼에만 이런 특징이 적용
                * Ruby : 순수 객체 지향 언어로 정수나 문자열 등을 포함한 데이터 형식 등 모든 것이 객체이다.

    Symbol.keyFor : 전역 심볼을 찾을 때 사용하는 Symbol.for(key)에 반대되는 메서드로 Symbol.keyFor(sym)를 사용하면 이름을 얻을 수 있다.

                        let sym = Symbol.for("name");
                        let sym2 = Symbol.for("id");
                    -> 이름을 이용해 심볼을 찾음

                        alert(Symbol.ketFor(sym)); -> name
                        alert(Symbol.ketFor(sym2)); -> id
                    -> 심볼을 이용해 이름을 얻음

        - 전역 심볼 레지스트리를 뒤져서 해당 심볼의 이름을 얻어냄, 검색 범위가 전역 심볼 레지스트리이기 때문에 전역 심볼이 아닌 심볼에는 사용 불가
        - 전역 심볼이 아닌 인자가 넘어오면 Symbol.keyFor는 undefined를 반환

                        alert( Symbol.keyFor(Sym) );   -> name, 전역 심볼
                        alert( Symbol.keyFor(Sym) );    -> undefined, 전역 심볼이 아님
                        alert( Sym.description );       -> name

    시스템 심볼 : '시스템 심볼(system symbol)'은 자바스크립트 내부에서 사용되는 심볼, 시스템 심볼을 활용하면 객체를 미세 조정할 수 있다.

            - 잘 알려려진 심볼에서 시스템 심볼
                * Symbol.hasInstance
                * Symbol.isConcatSpreadable
                * Symbol.iterator
                * Symbol.toPrimitive
                

    ※ 요약
        - Symbol은 원시형 데이터로, 유일무이한 식별자를 만드는 데 사용
        - Symbol()을 호출하면 심볼을 만들 수 있다.
        - 설명(이름)은 선택적으로 추가할 수 있다.
        - 심볼은 이름이 같더라도 값이 항상 다름, 이름이 같을 때 값도 같길 원한다면 전역 레지스트리를 사용해야 함
                Symbol.for(key)는 key라는 이름을 가진 전역 심볼을 반환
                key라는 이름을 가진 전역 심볼이 없으면 새로운 전역 심볼을 만들어 줌
                key가 같다면 Symbol.for는 어디서 호출하든 상관없이 항상 같은 심볼을 반환

        - 심볼의 주요 유스 케이스
            1. 객체의 숨김 프로퍼티 _ 외부 스크립트나 라이브러리에 속한 객체에 새로운 프로퍼티를 추가해 주고 싶다면 심볼을 만들고,
               이를 프로퍼티 키로 사용하면 됨, 키가 심볼인 경우엔 for..in의 대상이 되지 않아서 의도치 않게 프로퍼티가 수정되는 것을 예방
               외부 스크립트나 라이브러리는 심볼 정보를 갖고 있지 않아서 프로퍼티에 직접 접근하는 것도 불가능
               심플형 키를 사용하면 프로퍼티가 우연히라도 사용되거나 덮어씌워 지는 걸 예방
            
            2. 자바스크립트 내부에서 사용되는 시스템 심볼은 Symbol.* 로 접근, 시스템 심볼을 이용하면 내장 메서드 등의 기본 동작을 입맛대로 변경 가능
               
        - 내장 메서드 Object.getOwnPropertySymbols(obj)를 사용하면 모든 심볼을 볼 수 있고, 메서드 Reflect.ownKeys(obj)는 심볼형 키를 포함한 객체의 모든 키를 반환
          그런데 대부분의 라이브러리, 내장 함수 등은 이런 메서드를 사용하지 않음

            
*/