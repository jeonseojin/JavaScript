/* 1) 객체 리터럴에서 this 사용하기
        -함수 makeUser는 객체를 반환

                function makeUser() {
                    return {
                        name: "John",
                        ref: this
                    };
                };
                let user = makeUser();
                alert( user.ref.name );

            -> 결과 : 에러발생

                ref: this -> ref() {return this;}
                alert( user.ref.name ); -> alert( user.ref().name );
            -> 위의 코드로 변경하면 결과 값이 John으로 바뀜



   2) 계산기 만들기 : calculator라는 객체를 만들고 세 메서드를 구현
        - read()에선 프롬프트 창을 띄우고 더할 값 두 개를 입력받음, 입력받은 값은 객체의 프로퍼티에 저장
        - sum()은 저장된 두 값의 합을 반환
        - mul()은 저장된 두 값의 곱을 반환
*/

let calculator = {
    sum(){
        return this.a + this.b
    },
    mul(){
        return this.a * this.b
    },
    read() {
        this.a = +prompt('첫 번째 값','');
        this.b = +prompt('두 번째 값','');
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

/* 3) 체이닝 : 올라가기(up)와 내려가기(down) 메서드를 제공하는객체 ladder

                    let ladder = {
                        step: 0,
                        up() {
                            this.step++;
                        },
                        down() {
                            this.step--;
                        },
                        showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
                            alert( this.step );
                        }
                    };

        - 


*/
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { 
      alert( this.step );
      return this;
    }
  };
  ladder.up().up().down().showStep();   // -> 1









  
/*  메서드와 'this'
        - 메서드 : 객체에 저장된 정보에 접근할 수 있어야 제 역할을 함, 모든 메서드가 그렇지는 않음
                   대부분의 메서드가 객체 프로퍼티의 값을 활용함

        * 메서드 만들기

                    let user = {
                        name: "John",
                        age: 30
                    };
                -> 함수 표현식으로 함수를 만듬

                    user.sayHi = function() { -> 메서드로 등록
                        alert("안녕하세요!");
                    };
                -> 객체에 할당된 함수를 호출하면 user가 인사함(객체 프로퍼티에 할당된 함수를 메서드(method) )

                    user.sayHi(); -> sayHi가 메서드로서 적동하여 안녕하세요! 를  출력

            ※ 객체 지향 프로그랭(object-oriented programming, OOP) : 객체를 사용하여 개체를 표현하는 방식을 객체 지향 프로그래밍이라 부름
                    - 올바른 개체를 선택하는 방법, 개체 사이의 상호작용을 나타내는 방법 등에 관한 의사결정은 객체 지향 설계를 기반으로 이뤄짐
                    
        * 메서드 단축 구문
            - 객체 리터럴 안에 메서드를 선언할 때 사용할 수 있는 단축 문법을 소개
   
                -> 아래 두 객체는 동일하게 동작합니다.

                    user = {
                        sayHi: function() {
                            alert("Hello");
                        }
                    };

                -> 위의 코드를 단축 문법으로 작성
                    user = {
                        sayHi() {               -> "sayHi: function()"과 동일
                            alert("Hello");
                        }
                    };
        
            - function을 생략해도 메서드를 정의할 수 있음
            - 일반적인 방법과 단축 구문을 사용한 방법이 완전히 동일하진 않음, 객체 상속과 관련된 미묘한 차이가 존재하는데 지금으로선 이 차이가 중요하지 않음
                    (우선 넘어감 / 나중에?)

        * 메서드와 'this'
            - user.sayHi()의 내부 코드에서 객체 user에 저장된 이름(name)을 이용해 인사말을 만드는 경우가 이런 경우에 속함
            - 메서드 내부에서 this 키워드를 사용하면 객체에 접근할 수 있음
            
                    let user = {
                        name: "John",
                        age: 30,

                        sayHi() {
                            
                            alert(this.name);
                ->'this'는 '현재 객체'를  나타냄

                            alert(user.name);
                -> this를 사용하지 않고 외부 변수를 참조해 객체에 접근하는 것도 가능
                        }

                    };

                    user.sayHi();
                -> John

            ※ 에러가 발생하는 경우
                - user를 복사해 다른 변수에 할당(admin=user)하고 user는 전혀 다른 값으로 덮어썼으면, sayHi()는 원치 않는 값(null)을 참조함

                    let user = {
                        name: "John",
                        age: 30,

                        sayHi() {
                            alert( user.name );
                -> Error: Cannot read property 'name' of null
                        }
                    };


                    let admin = user;
                    user = null;
                -> user를 null로 덮음

                    admin.sayHi(); 
                -> sayHi()가 엉뚱한 객체(null)를 참고하면서 에러가 발생
                -> alert 함수가 user.name 대신 this.name을 인수로 받았다면 에러가 발생하지 않음

        * 자유로운 this
            - Javascript의 this는 다른 프로그래밍 언어의 this와 동작 방식이 다름

                    let user = { name: "John" };
                    let admin = { name: "Admin" };

                    function sayHi() {
                        alert( this.name );
                    }
                    
                    user.f = sayHi;
                    admin.f = sayHi;
                -> 별개의 객체에서 동일한 함수를 사용함

                    user.f();
                -> John  (this == user)
                    admin.f();
                -> Admin  (this == admin)

                    admin['f']();
                -> Admin (점과 대괄호는 동일하게 동작함)

            - 규칙은 obj.f()를 호출했다면 this는 f를 호출하는 동안의 obj이다
              obj가 user나 admin을 참조하는 것

            ※ 객체 없이 호출 : this == undefined
                - 객체가 없이도 함수를 호출 가능(alert(this)의 형태)
                - 저런 코드를 엄격 모드에서 실행하면, this엔 undefined가 할당, this.name으로 name에 접근하려하면 에러 발생
                - 엄격모드가 아닌 경우 this가 전역 객체를 참조, 브라우저 환경에선 window라는 전역 객체를 참조

            ※ 자유로운 this가 만드는 결과
                - bound this : 다른 언어를 사용하다 자바스크립트로 넘어온 개발자는 this를 혼동하기 쉬움,
                               this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각

                - this는 런타임에 결정 : 메서드가 어디서 정의되었는지에 상관없이 this는 점앞의 객체가 무엇인가에 따라 자유롭게 결정
                - 함수(메서드)를 하나만 만들어 여러 객체에서 재사용할 수 있다는 것은 장점이지만, 이런 유연함이 실수로 이저리 수 있다는 것은 단점

        * this 가 없는 화살표 함수
            - 화살표 함수는 일반 함수와는 달리 고유한 this를 가지지 않음, 화살표 함수에서 this를 참조하면, 화살표 함수가 아닌 평범한 외부 함수에서 this 값을 가져옴

                    let user = {
                        firstName: "보라",
                        sayHi() {
                            let arrow = () => alert(this.firstName);
                            arrow();
                        }
                    };

                    user.sayHi();
                -> 보라
                -> 함수 arrow()의 this는 외부 함수 user.sayHi()의 this
            (https://bubobubo003.tistory.com/54 의 사이트에서 화살표함수에서의 this를 설명해줌)


    ※ 요약
        * 객체 프로퍼티에 저장된 함수를 메서드라고 부름
        * onject.doSomthing()은 객체를 행동할 수 있게 해줌
        * 메서드는 this로 객체를 참조
        
        - this 값은 런타임에 결정 
            * 함수를 선언할 때 this를 사용, 함수가 호출되기 전까지 this엔 값이 할당되지 않음
            * 함수를 복사해 객체 간 전달할 수 있음
            * 함수를 객체 프로퍼티에 저장해 object.method() 같이 메서드 형태로 호출하면 this는 object를 참조

*/